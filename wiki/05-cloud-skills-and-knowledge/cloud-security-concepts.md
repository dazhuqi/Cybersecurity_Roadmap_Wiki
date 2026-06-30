# Cloud Security Concepts

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Cloud Skills and Knowledge |
| Last Reviewed | 2026-06-30 |

Cloud security is not a completely separate kind of security. It still uses the same ideas: identity, least privilege, network boundaries, logging, encryption, backups, and incident response. The confusing part is that the cloud provider manages some layers, and I manage other layers.

Beginner version:

> In cloud security, I must always ask: "Is this the provider's job, my job, or shared?"

## Cloud vs On-Premises

On-premises means the organization owns or controls the physical environment. It manages the building, racks, power, network gear, servers, operating systems, applications, and data.

Cloud means a provider manages much of the physical infrastructure and exposes services through APIs and consoles. I do not rack the server, but I can still accidentally expose data or give an identity too much access.

| Area | On-Premises | Cloud |
| --- | --- | --- |
| Physical building | Usually customer | Provider |
| Hardware | Usually customer | Provider |
| Virtualization platform | Often customer | Provider for most managed services |
| Operating system | Customer for servers | Depends on service model |
| Application code | Customer | Customer |
| Data | Customer | Customer |
| Identity and permissions | Customer | Customer, using provider tools |
| Logging configuration | Customer | Customer enables and reviews provider logs |

The big beginner mistake is thinking "the provider secures everything." The provider secures the cloud, but I still need to secure what I put in the cloud.

## Shared Responsibility Model

The shared responsibility model explains which security responsibilities belong to the provider and which belong to the customer.

Simple examples:

- The provider protects data centers, physical servers, and core cloud infrastructure.
- I protect accounts, data, identity permissions, application logic, and many configuration choices.
- The exact boundary changes depending on whether I use IaaS, PaaS, SaaS, or serverless.

### Easy Way to Think About It

| Service Type | Provider Usually Handles More Of | Customer Still Handles |
| --- | --- | --- |
| SaaS | Application hosting, platform, infrastructure | users, data, sharing settings, access reviews |
| PaaS | runtime, platform, scaling, infrastructure | application code, data, app configuration, identities |
| IaaS | physical infrastructure, virtualization | operating system, patches, firewall rules, apps, data |
| Serverless | servers, runtime scaling, much of the platform | function code, triggers, permissions, secrets, logs |

This is why an IaaS virtual machine needs OS patching by the customer, while a SaaS email platform usually does not expose OS patching to the customer.

## Identity Is the New Perimeter

In many cloud systems, identity matters more than network location.

Important identity ideas:

- users are human accounts
- groups collect users
- roles or permissions define what actions are allowed
- service accounts or managed identities are used by applications
- API keys and tokens allow programmatic access
- MFA helps protect human logins

Beginner warning:

If a cloud identity has administrator permissions, it may be able to create resources, read data, change logs, create new credentials, or disable controls. One account can affect many services.

## Least Privilege

Least privilege means an identity should only have the permissions it needs.

Bad beginner pattern:

```text
I do not know which permission is needed, so I give AdministratorAccess.
```

Better pattern:

```text
Start with read-only or narrow permissions.
Test what is missing.
Add only the needed action.
Review later.
```

Least privilege is slower at first, but it makes mistakes smaller.

## Network Security in the Cloud

Cloud networks are usually software-defined. Instead of plugging in cables, I create virtual networks, subnets, route tables, gateways, firewalls, and security groups.

Things to learn:

- virtual private cloud or virtual network
- subnets
- route tables
- internet gateways
- NAT
- security groups or network security groups
- private endpoints
- load balancers

Security angle:

- Public subnets can reach the internet more directly.
- Private subnets should not expose services publicly.
- Security groups should allow only needed ports.
- Management ports like SSH and RDP should not be open to the whole internet.

## Logging and Monitoring

Cloud environments create important logs, but many logs must be enabled, routed, stored, or retained correctly.

Useful log types:

- control plane activity, such as who created or changed a resource
- authentication and sign-in logs
- storage access logs
- network flow logs
- application logs
- serverless function logs
- security findings from provider tools

Beginner mistake:

Only thinking about logs after something goes wrong. If logs were not enabled or were kept for only a short time, investigation becomes much harder.

## Encryption and Key Management

Cloud services often support encryption at rest and encryption in transit.

Terms I need to know:

- encryption at rest: data is encrypted while stored
- encryption in transit: data is encrypted while moving across a network
- KMS: key management service
- customer-managed key: key controlled more directly by the customer
- provider-managed key: key managed mostly by the provider
- key rotation: replacing keys over time

Important note:

Encryption does not fix bad permissions. If an identity is allowed to read the data, encryption may not stop that identity from reading it through the service.

## Secrets

Secrets include:

- API keys
- passwords
- tokens
- private keys
- database connection strings

Bad places for secrets:

- Git commits
- public repositories
- screenshots
- chat messages
- plain environment files
- Terraform state files
- local Downloads folder

Better places:

- provider secret managers
- environment-specific secure variables
- short-lived credentials where possible
- managed identities instead of static keys when possible

## Common Cloud Security Mistakes

| Mistake | Why It Matters |
| --- | --- |
| Public storage bucket | Sensitive files may become readable by anyone. |
| Overly broad IAM role | One compromised identity can do too much. |
| No MFA on admin accounts | Password theft becomes much more dangerous. |
| Exposed SSH or RDP | Internet scanners constantly look for exposed management ports. |
| Logs disabled | Investigation and detection become weak. |
| Secrets in code | A leaked repository becomes a credential leak. |
| No budget alert | A lab mistake can become a bill. |
| No cleanup process | Forgotten resources keep running and increase risk. |

## Cloud Incident Response Basics

If something suspicious happens in a cloud account, I should think about:

- which identity performed the action
- which resource changed
- when the event happened
- whether credentials were exposed
- whether logs are still intact
- whether any public access was added
- whether new users, roles, keys, or tokens were created
- whether data was accessed or copied

Cloud incident response depends heavily on logs and identity history.

## Small Practice

- [ ] Draw the shared responsibility boundary for a SaaS app, a virtual machine, and a serverless function.
- [ ] Write a one-paragraph explanation of why IAM is important in cloud security.
- [ ] List three cloud mistakes that could expose data.
- [ ] Find where AWS, Azure, or Google Cloud documents audit logs.
- [ ] Explain why encryption does not replace access control.

## Things I Keep Forgetting

- Cloud does not remove responsibility; it moves responsibility.
- Identity is often the most important control.
- Public storage is a classic cloud mistake.
- Logs must exist before the incident.
- Encryption is helpful, but permissions still matter.
- Cost is also part of cloud safety.

## Review Questions

- What does the shared responsibility model mean?
- Why does responsibility change between SaaS, PaaS, IaaS, and serverless?
- Why are cloud identities high impact?
- What is the difference between encryption at rest and encryption in transit?
- Why should admin accounts use MFA?
- What logs would help investigate a suspicious cloud change?

## References

- [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/)
- [Microsoft Azure: Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility)
- [Google Cloud: Shared responsibilities and shared fate](https://docs.cloud.google.com/architecture/framework/security/shared-responsibility-shared-fate)
- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://csrc.nist.gov/pubs/sp/800/145/final)
- [Cloud Security Alliance: Security Guidance](https://cloudsecurityalliance.org/research/guidance)
