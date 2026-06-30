# 05 Cloud Skills and Knowledge

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Cloud Skills and Knowledge |
| Last Reviewed | 2026-06-30 |

Cloud computing means using someone else's managed infrastructure through the internet. That sounds simple, but it changes many security assumptions. I do not own the data center, but I still own a lot of the risk: identity, permissions, data, configuration, logging, and what I deploy.

Beginner version:

> Cloud is not "no servers." It is "servers and services managed by someone else, with my configuration on top."

## Why This Module Matters

Cloud shows up almost everywhere now:

- personal file storage like OneDrive, iCloud, Google Drive, Dropbox, and Box
- business SaaS apps
- virtual machines and containers in AWS, Azure, or Google Cloud
- serverless functions and managed databases
- identity systems and single sign-on
- logs, backups, and disaster recovery

From a security point of view, cloud mistakes can become public very quickly. One wrong storage permission, one leaked API key, or one overly powerful service account can affect a lot of data.

## Learning Order

1. [Cloud Security Concepts](cloud-security-concepts.md)
2. [Cloud Service Models](cloud-service-models.md)
3. [Cloud Deployment Models](cloud-deployment-models.md)
4. [Cloud Providers](cloud-providers.md)
5. [Cloud Storage](cloud-storage.md)
6. [Infrastructure as Code](infrastructure-as-code.md)
7. [Serverless](serverless.md)

I should not start by memorizing every AWS, Azure, and Google Cloud service name. First I need the mental model:

- who is responsible for what
- where identity lives
- how networks are separated
- where logs go
- how data becomes public or private
- how cost can surprise me

## Roadmap Alignment

- Security in the cloud
- Cloud vs on-premises
- Infrastructure as Code
- Serverless
- Deploying in the cloud
- SaaS, PaaS, and IaaS
- Public, private, and hybrid cloud
- AWS, Google Cloud, and Azure
- S3, Dropbox, iCloud, Box, OneDrive, and Google Drive

## Cost Safety Rules

Cloud labs can cost money if I forget to clean up. Before making any account or resource, I should:

- check the official free tier page, because limits change
- set a budget or billing alert if the provider supports it
- avoid leaving virtual machines, NAT gateways, databases, or load balancers running
- delete test resources after a lab
- never put real secrets or private data in a practice account
- record what I created, why I created it, and how to remove it

Small note to myself: "free tier" does not mean "everything is free." It usually means specific services, specific limits, and specific time periods.

## What I Should Be Able to Explain

By the end of this module, I should be able to explain:

- what the shared responsibility model means
- how SaaS, PaaS, IaaS, and serverless differ
- what public, private, and hybrid cloud mean
- why IAM is the center of cloud security
- why storage permissions cause so many incidents
- why logs and audit trails must be enabled before an incident
- why Infrastructure as Code helps repeatability but can also repeat mistakes
- why serverless still needs security review even when servers are hidden

## Small Lab Ideas

These are meant to be safe beginner labs:

- draw the shared responsibility boundary for Gmail, an Azure VM, and an AWS S3 bucket
- compare AWS IAM, Azure RBAC, and Google Cloud IAM names
- create a local Terraform file without applying it to real cloud resources
- inspect example S3 bucket policies and identify public access
- draw a serverless flow from HTTP request to function to storage
- make a cleanup checklist for a fake cloud lab

## Completion Standard

- [ ] Explain the cloud shared responsibility model in my own words.
- [ ] Distinguish SaaS, PaaS, IaaS, and serverless with examples.
- [ ] Compare public, private, and hybrid cloud.
- [ ] Identify basic IAM, logging, networking, key management, and storage services in AWS, Azure, and Google Cloud.
- [ ] Explain common cloud storage misconfiguration risks.
- [ ] Explain why IaC state files and secrets need protection.
- [ ] Explain common serverless risks such as broad permissions, weak input validation, and poor logging.

## References

- [roadmap.sh Cyber Security Roadmap](https://roadmap.sh/cyber-security)
- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://csrc.nist.gov/pubs/sp/800/145/final)
- [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/)
- [Microsoft Azure: Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility)
- [Google Cloud: Shared responsibilities and shared fate](https://docs.cloud.google.com/architecture/framework/security/shared-responsibility-shared-fate)
