# Serverless

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Cloud Skills and Knowledge |
| Last Reviewed | 2026-06-30 |

Serverless means I do not manage the server directly. I usually upload code, connect it to an event, and the provider runs it when needed. There are still servers somewhere, but the provider handles provisioning, scaling, and much of the runtime platform.

Beginner version:

> Serverless hides server management. It does not hide security responsibility.

## Common Serverless Examples

| Provider | Function Service | Other Related Serverless Ideas |
| --- | --- | --- |
| AWS | Lambda | API Gateway, EventBridge, Step Functions, S3 events |
| Azure | Azure Functions | Logic Apps, Event Grid, Service Bus |
| Google Cloud | Cloud Run functions | Eventarc, Cloud Run, Pub/Sub |

Serverless can also include managed workflows, queues, event buses, API gateways, and serverless containers. For this note, I mainly focus on functions.

## How a Function Works

A basic serverless function flow:

```text
Event happens -> trigger invokes function -> function runs code -> function calls another service -> logs are written
```

Examples:

- HTTP request triggers a function.
- File upload triggers image processing.
- Queue message triggers background work.
- Schedule triggers a cleanup task.
- Database change triggers a notification.

The important part is the trigger. If I misunderstand the trigger, I may misunderstand who can run the function.

## Function Permissions

Functions usually run with an identity.

Examples:

- AWS Lambda execution role
- Azure managed identity
- Google Cloud service account

That identity controls what the function can do.

Bad pattern:

```text
This function is failing, so I give it admin access.
```

Better pattern:

```text
The function only needs to read one bucket and write one log group, so I grant only those actions.
```

Security angle:

If a function is compromised, the attacker may inherit the function's permissions. This is why least privilege matters.

## Triggers

Common triggers:

- HTTP requests
- object storage events
- queue messages
- scheduled timers
- database events
- authentication events
- event bus messages

Questions to ask:

- Who can trigger this function?
- Can it be triggered from the public internet?
- Does the trigger include user-controlled input?
- Can one event cause many function executions?
- Is there rate limiting or throttling?

## Input Validation

Serverless functions often process events from many sources. I should not assume the event is safe.

Things to validate:

- required fields exist
- data types are expected
- file names are safe
- URLs are allowed
- user identity is checked
- payload size is reasonable

Beginner note:

An event is still input. A queue message, uploaded file name, or JSON body can be malicious or malformed.

## Secrets and Environment Variables

Functions often use environment variables for configuration.

This is fine for normal configuration, but dangerous for secrets if not handled carefully.

Examples of sensitive values:

- API keys
- database passwords
- signing secrets
- tokens
- private keys

Better options:

- provider secret manager
- managed identity
- short-lived credentials
- restricted environment variables
- separate secrets by environment

Do not print secrets to logs.

## Dependencies

Serverless functions often include third-party packages.

Risks:

- vulnerable dependency
- abandoned package
- malicious package
- too many packages increasing attack surface
- dependency confusion

Good habits:

- keep dependencies small
- update dependencies
- use lockfiles
- scan dependencies where possible
- remove unused packages

## Logging and Monitoring

Function logs should help answer:

- when did the function run?
- what triggered it?
- did it fail?
- how long did it run?
- what resource did it access?
- which request or event ID is connected to this run?

Bad logs:

- secrets
- tokens
- full personal data
- huge raw payloads
- unclear messages like "error happened"

Good logs:

- request ID
- event type
- safe status messages
- error category
- timing
- resource name when safe

## Cost and Denial of Wallet

Serverless often charges per request, execution time, memory, and related services.

Security angle:

If a public function can be triggered many times, an attacker or bug can create cost. This is sometimes called denial of wallet.

Controls:

- rate limiting
- authentication
- quotas
- concurrency limits
- budget alerts
- input size limits

## Common Serverless Risks

| Risk | Example | Why It Matters |
| --- | --- | --- |
| Overly broad permissions | Function can read all storage buckets. | Compromise becomes high impact. |
| Public trigger without auth | Anyone can call an HTTP function. | Abuse and data exposure. |
| Event injection | Attacker controls event fields. | Bad input reaches code. |
| Secrets in environment or logs | Function prints API key. | Credential leak. |
| Vulnerable dependency | Old package has known vulnerability. | Code execution or data exposure risk. |
| No monitoring | Failures or abuse go unnoticed. | Detection is weak. |
| Unbounded recursion | Function triggers itself repeatedly. | Cost and outage risk. |
| Weak error handling | Stack traces expose details. | Useful information leaks. |

## Serverless vs Containers vs VMs

| Area | Serverless Function | Container | VM |
| --- | --- | --- | --- |
| Server management | Mostly provider | Shared / depends on platform | Mostly customer |
| Startup style | Event-driven | Service or job | Full machine |
| Scaling | Often automatic | Platform-dependent | Customer config |
| OS patching | Mostly provider | Depends on platform and image | Customer |
| Main security focus | code, trigger, IAM, secrets | image, runtime, network, IAM | OS, network, app, patching |

This is simplified, but it helps me see why serverless security focuses so much on events and permissions.

## Practice

- [ ] Draw one serverless trigger flow.
- [ ] Summarize a least-privilege policy for a function.
- [ ] List three ways a function can be triggered.
- [ ] Explain why a public HTTP function needs authentication or rate limiting.
- [ ] Review a fake function and mark where secrets, logs, and permissions could go wrong.

## Things I Keep Forgetting

- Serverless still runs on servers.
- The trigger controls who or what can run the function.
- The function identity controls what it can access.
- Logs should help investigations but should not leak secrets.
- Dependencies matter even in tiny functions.
- Cost controls are part of serverless safety.

## Review Questions

- What does serverless mean?
- Why is "serverless" not the same as "no security work"?
- What is a trigger?
- Why do function permissions matter?
- What is denial of wallet?
- What should not be logged by a serverless function?

## References

- [AWS Lambda Security Best Practices](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)
- [Microsoft Azure Functions security concepts](https://learn.microsoft.com/en-us/azure/azure-functions/security-concepts)
- [Google Cloud Run functions documentation](https://cloud.google.com/functions/docs)
- [OWASP Serverless FaaS Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Serverless_FaaS_Security_Cheat_Sheet.html)
- [OWASP Serverless Top 10](https://owasp.org/www-project-serverless-top-10/)
