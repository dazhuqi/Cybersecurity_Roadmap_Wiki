# Cloud Providers

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Cloud Skills and Knowledge |
| Last Reviewed | 2026-06-30 |

The main providers I should recognize first are AWS, Microsoft Azure, and Google Cloud. The goal is not to memorize every service. The goal is to recognize the major categories so I can read cloud diagrams, docs, and security reports.

Beginner version:

> Cloud providers use different names for similar ideas. I should learn the categories first, then the product names.

## Big Three Providers

| Provider | Full Name | Common Short Name | Notes |
| --- | --- | --- | --- |
| Amazon Web Services | Amazon Web Services | AWS | Very large service catalog; common in startups, enterprises, labs, and security examples. |
| Microsoft Azure | Microsoft Azure | Azure | Strong Microsoft identity and enterprise integration, especially with Microsoft Entra ID and Windows environments. |
| Google Cloud | Google Cloud | GCP / Google Cloud | Strong data, Kubernetes, analytics, and global infrastructure story. |

## Account Structure

Cloud providers organize accounts differently.

| Concept | AWS | Azure | Google Cloud |
| --- | --- | --- | --- |
| Top-level billing / management | Organization | Tenant / management groups / subscriptions | Organization |
| Main resource container | Account | Subscription / resource group | Project |
| Common grouping unit | Account, OU, tags | Resource group, subscription, tags | Project, folders, labels |
| Human identity system | IAM users / IAM Identity Center | Microsoft Entra ID | Cloud Identity / Google identities |

Beginner note:

I should not treat "account" as the same thing in every provider. In AWS, an account is often a strong isolation boundary. In Azure, a subscription and resource group are important management boundaries. In Google Cloud, projects are very important.

## Core Service Name Map

| Category | AWS | Azure | Google Cloud | What It Means |
| --- | --- | --- | --- | --- |
| Identity and access | IAM, IAM Identity Center | Microsoft Entra ID, Azure RBAC | Cloud IAM, Cloud Identity | Users, roles, permissions, service identities. |
| Virtual machines | EC2 | Azure Virtual Machines | Compute Engine | Regular cloud VMs. |
| Object storage | S3 | Azure Blob Storage | Cloud Storage | Bucket/container style file and object storage. |
| Networking | VPC | Virtual Network | VPC | Cloud network and subnet foundation. |
| Audit logs | CloudTrail | Azure Activity Log | Cloud Audit Logs | Who did what in the cloud control plane. |
| Monitoring / logs | CloudWatch | Azure Monitor / Log Analytics | Cloud Logging / Cloud Monitoring | Metrics, app logs, alerts, dashboards. |
| Key management | KMS | Key Vault / Managed HSM | Cloud KMS | Encryption keys and secret-related services. |
| Serverless functions | Lambda | Azure Functions | Cloud Run functions | Event-driven code without managing servers directly. |
| Containers | ECS, EKS | AKS, Container Apps | GKE, Cloud Run | Running containers and Kubernetes-style workloads. |
| Databases | RDS, DynamoDB | Azure SQL, Cosmos DB | Cloud SQL, Firestore | Managed relational and NoSQL data services. |
| Security posture | Security Hub, GuardDuty | Defender for Cloud | Security Command Center | Security findings and posture management. |

This table is only a starting point. Cloud products change, get renamed, and overlap.

## AWS Notes

Things I should recognize:

- IAM controls users, roles, groups, and policies.
- S3 is object storage and is a common source of beginner permission mistakes.
- EC2 is virtual machines.
- VPC is the network boundary for many workloads.
- CloudTrail records many account-level API actions.
- CloudWatch is used for logs, metrics, and alarms.
- KMS manages encryption keys.
- Lambda is AWS serverless functions.

Security beginner focus:

- protect the root user
- use MFA
- avoid long-lived access keys when possible
- understand IAM policies before granting administrator access
- keep S3 buckets private unless there is a clear reason
- enable and review CloudTrail logs
- set billing alerts for labs

## Azure Notes

Things I should recognize:

- Microsoft Entra ID is central for identity.
- Azure RBAC controls access to Azure resources.
- Resource groups organize related resources.
- Virtual Network is the cloud network.
- Azure Storage includes Blob Storage.
- Azure Activity Log records subscription-level events.
- Azure Monitor and Log Analytics collect monitoring data.
- Key Vault stores keys, secrets, and certificates.
- Azure Functions is serverless.

Security beginner focus:

- understand the tenant, subscription, and resource group relationship
- use MFA and conditional access where available
- avoid giving Owner when Contributor or Reader is enough
- review public network access on storage and databases
- keep secrets in Key Vault instead of code
- use Activity Log and sign-in logs during investigations
- check budgets before labs

## Google Cloud Notes

Things I should recognize:

- Projects are very important boundaries.
- Cloud IAM controls permissions.
- Compute Engine is virtual machines.
- Cloud Storage is object storage.
- VPC is networking.
- Cloud Audit Logs record many administrative and data access events.
- Cloud Logging and Cloud Monitoring handle logs and metrics.
- Cloud KMS manages keys.
- Cloud Run functions is serverless functions.

Security beginner focus:

- know which project I am working in
- avoid broad basic roles when possible
- use service accounts carefully
- check public access prevention and IAM on storage buckets
- understand audit logs before doing labs
- set budgets and alerts
- delete unused resources

## Free Tier and Lab Caution

Each provider has a free tier or trial-style offering, but the details change. Before using a real account, I should check the official pricing and free tier pages.

Lab checklist:

- [ ] Use a practice account, not a personal account full of private data.
- [ ] Turn on MFA before creating resources.
- [ ] Set a budget or billing alert.
- [ ] Record every resource I create.
- [ ] Avoid public IP exposure unless the lab requires it.
- [ ] Delete resources after the lab.
- [ ] Check the bill or cost dashboard after cleanup.

## What to Learn First

I should learn these categories before chasing advanced services:

1. Identity: users, roles, policies, service accounts, MFA.
2. Networking: VPC or virtual network, subnets, routing, public vs private access.
3. Storage: buckets, containers, access policies, public access controls.
4. Logging: audit logs, activity logs, sign-in logs, resource logs.
5. Encryption: KMS, key vaults, default encryption, customer-managed keys.
6. Cost: budgets, alerts, idle resources, cleanup.

## Provider-Neutral Security Questions

For any cloud provider, I should ask:

- Who can log in?
- Who has admin-level permissions?
- Which resources are public?
- Where are the audit logs?
- Are secrets stored safely?
- Is sensitive data encrypted?
- Are backups configured?
- Is there a budget alert?
- Who reviews changes?

## Practice

- [ ] Record core IAM, logging, networking, and storage service names for AWS, Azure, and Google Cloud.
- [ ] Pick one provider and find where to enable MFA.
- [ ] Draw a basic cloud account with identity, network, VM, storage, logs, and billing alert.
- [ ] Compare one AWS service with the closest Azure and Google Cloud service.
- [ ] Read one provider's shared responsibility page.

## Things I Keep Forgetting

- Similar services have different names.
- Identity structure is different across providers.
- Logs have different names but similar investigation value.
- Free tier limits change, so check official pages before labs.
- The first security task is usually identity, not fancy tools.

## Review Questions

- What are the three major cloud providers in this roadmap?
- What is the AWS equivalent of Azure Blob Storage and Google Cloud Storage?
- Why are AWS accounts, Azure subscriptions, and Google Cloud projects important?
- What kind of log tells me who changed cloud resources?
- Why should I set a budget before cloud labs?

## References

- [AWS Documentation](https://docs.aws.amazon.com/)
- [AWS Free Tier](https://aws.amazon.com/free/)
- [Microsoft Azure Documentation](https://learn.microsoft.com/en-us/azure/)
- [Azure free account](https://azure.microsoft.com/en-us/free/)
- [Google Cloud Documentation](https://cloud.google.com/docs)
- [Google Cloud Free Program](https://cloud.google.com/free)
- [AWS Identity and Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
- [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/)
- [Google Cloud IAM overview](https://cloud.google.com/iam/docs/overview)
