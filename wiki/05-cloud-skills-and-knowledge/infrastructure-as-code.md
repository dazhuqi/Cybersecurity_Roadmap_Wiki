# Infrastructure as Code

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Cloud Skills and Knowledge |
| Last Reviewed | 2026-06-30 |

Infrastructure as Code, or IaC, means describing infrastructure with files instead of clicking everything manually in a cloud console. The files can create networks, virtual machines, storage buckets, IAM roles, databases, and many other resources.

Beginner version:

> IaC is like writing a recipe for cloud resources. The good part is that the recipe is repeatable. The bad part is that a bad recipe can repeat the same mistake everywhere.

## Why IaC Exists

Without IaC, teams may create resources manually:

- click in a console
- forget exact settings
- name things inconsistently
- miss security options
- have no review trail
- struggle to rebuild the environment

With IaC, teams can:

- store infrastructure definitions in Git
- review changes before applying them
- reuse modules or templates
- rebuild environments more consistently
- compare desired state with actual state
- automate deployments

This is useful, but it also means infrastructure changes become code changes. Bad code can create bad infrastructure.

## Common IaC Tools

| Tool | Ecosystem | Notes |
| --- | --- | --- |
| Terraform | Multi-cloud | Very common. Uses providers and state files. |
| OpenTofu | Multi-cloud | Open-source fork of Terraform. Similar concepts. |
| AWS CloudFormation | AWS | Native AWS IaC service using templates. |
| AWS CDK | AWS | Uses programming languages to define AWS infrastructure. |
| Azure Bicep | Azure | Azure-native declarative language for Azure Resource Manager. |
| ARM templates | Azure | JSON-based Azure Resource Manager templates. |
| Google Cloud Deployment Manager | Google Cloud | Google Cloud IaC option, but I should check current product status before choosing it for new work. |
| Pulumi | Multi-cloud | Uses general programming languages for infrastructure. |

For beginner learning, Terraform is a good first IaC concept because many examples and security discussions use it.

## Declarative vs Imperative

Declarative means I describe the final desired state.

Example idea:

```text
I want one private storage bucket with versioning enabled.
```

Imperative means I describe step-by-step actions.

Example idea:

```text
Create bucket, then set permission, then turn on versioning.
```

Many IaC tools are declarative. I describe what should exist, and the tool figures out what actions are needed.

## Basic Terraform Vocabulary

| Term | Meaning |
| --- | --- |
| Provider | Plugin that talks to a platform, such as AWS, Azure, or Google Cloud. |
| Resource | Thing to create, such as a bucket, VM, or IAM role. |
| Variable | Input value used by configuration. |
| Output | Value printed or exported after applying. |
| Module | Reusable group of IaC configuration. |
| State | File or backend record of what Terraform thinks exists. |
| Plan | Preview of what Terraform will create, change, or destroy. |
| Apply | Actually make the planned changes. |
| Destroy | Remove managed resources. |

## Why State Files Matter

Terraform state is important because it maps configuration to real resources.

State may contain:

- resource IDs
- IP addresses
- generated names
- metadata
- sometimes sensitive values

Security angle:

State files should not be casually committed to a public repository. If state includes secrets or infrastructure details, leaking it can help attackers.

Better state habits:

- use a secure remote backend for team work
- restrict who can read state
- enable encryption where supported
- do not commit local state to Git
- review whether secrets appear in state

## Secrets in IaC

Bad example:

```hcl
password = "SuperSecretPassword123"
```

Why this is bad:

- it may enter Git history
- it may appear in plans or logs
- it may be stored in state
- it may be copied into tickets or screenshots

Better patterns:

- use secret managers
- use environment variables carefully
- use managed identities where possible
- keep secrets out of code and state when possible
- rotate secrets if they are exposed

## Common IaC Security Mistakes

| Mistake | Example | Why It Matters |
| --- | --- | --- |
| Public storage by default | Bucket allows public read. | Data exposure. |
| Open network rules | `0.0.0.0/0` allowed to SSH or RDP. | Internet-wide access to management ports. |
| Overpowered IAM | Role gets administrator permissions. | One compromised workload can do too much. |
| Secrets in code | API key in `.tf` file. | Repository leak becomes credential leak. |
| State file exposed | State committed to GitHub. | Resource details or secrets may leak. |
| No review | Direct apply from laptop. | Mistakes skip peer review. |
| No drift detection | Manual changes happen outside IaC. | Actual environment stops matching code. |
| Unsafe destroy | Wrong workspace or account. | Real resources may be deleted. |

## Code Review for IaC

When reviewing IaC, I should look for:

- public access
- broad IAM permissions
- hardcoded secrets
- missing encryption
- missing logging
- open inbound ports
- unclear naming
- missing tags or labels
- resources in the wrong account, subscription, project, or region
- destructive changes in the plan

Beginner tip:

The plan output is not boring. It is the warning screen before real infrastructure changes.

## Drift

Drift means the real environment no longer matches the IaC files.

Examples:

- someone changed a firewall rule manually
- a bucket policy was edited in the console
- a resource was deleted outside IaC
- an emergency change was never written back to code

Security angle:

Drift makes it harder to know what is real. It can hide risky manual changes.

## Safe Beginner Lab Without Spending Money

I can practice IaC concepts without applying to a real cloud account:

- install Terraform or OpenTofu
- read a small example
- run formatting commands if available
- inspect a plan only in a local or sandbox setup
- write pseudocode for a private bucket
- review example code for security mistakes

Example fake review:

```hcl
resource "example_storage_bucket" "demo" {
  name   = "demo-public-bucket"
  public = true
}
```

Question:

Why is `public = true` risky, and what would I want instead?

## Practice

- [ ] Read a minimal Terraform example.
- [ ] Explain what a provider, resource, plan, apply, and state file are.
- [ ] Find one example of a public bucket in IaC and rewrite the note as "why this is risky."
- [ ] Summarize common IaC security misconfigurations.
- [ ] Write a review checklist for a pull request that changes cloud IAM.

## Things I Keep Forgetting

- IaC makes changes repeatable, including bad changes.
- State files can contain sensitive information.
- Plan before apply.
- Do not hardcode secrets.
- Review IAM and network rules carefully.
- Console changes can create drift.

## Review Questions

- What problem does IaC solve?
- Why can IaC increase security risk if used carelessly?
- What is a Terraform state file?
- Why should secrets not be stored in IaC files?
- What does drift mean?
- What would I check before applying an IaC change?

## References

- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform: Sensitive data in state](https://developer.hashicorp.com/terraform/language/state/sensitive-data)
- [OpenTofu Documentation](https://opentofu.org/docs/)
- [AWS CloudFormation User Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)
- [Azure Bicep overview](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview)
- [OWASP Infrastructure as Code Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Infrastructure_as_Code_Security_Cheat_Sheet.html)
