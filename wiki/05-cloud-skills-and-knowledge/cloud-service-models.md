# Cloud Service Models

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Cloud Skills and Knowledge |
| Last Reviewed | 2026-06-30 |

Cloud service models describe how much the provider manages and how much I manage. This matters because my security work changes depending on the model.

Beginner version:

> The more managed the service is, the less system maintenance I do, but I still need to manage users, data, configuration, and access.

## The Main Models

The three classic models are:

- SaaS: Software as a Service
- PaaS: Platform as a Service
- IaaS: Infrastructure as a Service

Serverless is often discussed separately because it feels different in practice, even though it can overlap with PaaS.

## SaaS

SaaS means the provider runs the application for me.

Examples:

- Google Workspace
- Microsoft 365
- Salesforce
- Dropbox
- Box
- GitHub

What I usually manage:

- users and groups
- MFA settings
- sharing settings
- data uploaded into the service
- integrations and connected apps
- audit logs and retention settings
- account recovery settings

What the provider usually manages:

- application hosting
- application updates
- underlying servers
- most network infrastructure
- most platform maintenance

Security angle:

SaaS can still leak data if sharing is too broad, old users are not removed, MFA is missing, or third-party apps get too much access.

## PaaS

PaaS means the provider gives me a managed platform where I deploy my application.

Examples:

- Azure App Service
- Google App Engine
- AWS Elastic Beanstalk
- managed database platforms
- container platforms with managed control planes

What I usually manage:

- application code
- application settings
- data
- app identity and permissions
- secrets
- network exposure
- logging configuration

What the provider usually manages:

- underlying servers
- platform patching
- runtime infrastructure
- scaling features
- much of the operating system layer

Security angle:

PaaS removes some server maintenance, but it does not fix insecure code, exposed secrets, overly broad permissions, or public endpoints.

## IaaS

IaaS means the provider gives me infrastructure building blocks like virtual machines, disks, and networks.

Examples:

- Amazon EC2
- Azure Virtual Machines
- Google Compute Engine
- virtual networks
- cloud disks
- load balancers

What I usually manage:

- operating system configuration
- OS patches
- installed software
- firewall rules
- SSH or RDP access
- application deployment
- data and backups

What the provider usually manages:

- physical data centers
- physical servers
- storage hardware
- core network infrastructure
- virtualization layer

Security angle:

IaaS feels closest to traditional servers. If I create a VM, I need to think about hardening, patching, access, logging, and backups.

## Serverless

Serverless means I deploy code or logic without managing the server directly. The provider handles scaling and much of the runtime environment.

Examples:

- AWS Lambda
- Azure Functions
- Google Cloud Run functions
- event-driven workflows

What I usually manage:

- function code
- triggers
- input validation
- permissions
- environment variables
- secrets
- dependencies
- logs

What the provider usually manages:

- server provisioning
- scaling
- much of the runtime platform
- high availability features

Security angle:

Serverless hides servers, but the function can still be dangerous if it has broad permissions, trusts bad input, leaks secrets, or writes sensitive logs.

## Responsibility Comparison

| Layer | SaaS | PaaS | IaaS | Serverless |
| --- | --- | --- | --- | --- |
| Physical data center | Provider | Provider | Provider | Provider |
| Hardware | Provider | Provider | Provider | Provider |
| Virtualization | Provider | Provider | Provider | Provider |
| Operating system | Provider | Mostly provider | Customer | Provider |
| Runtime | Provider | Provider / shared | Customer | Provider / shared |
| Application code | Provider | Customer | Customer | Customer |
| Identity configuration | Customer | Customer | Customer | Customer |
| Data protection | Customer | Customer | Customer | Customer |
| Access reviews | Customer | Customer | Customer | Customer |

This table is simplified. Real services can be messy, so I should always check the provider's specific documentation.

## Easy Examples

| Situation | Likely Model | Why |
| --- | --- | --- |
| I use Gmail in a browser. | SaaS | The full email application is managed for me. |
| I deploy a Python web app to a managed app platform. | PaaS | I manage code, but not most servers. |
| I create an Ubuntu VM and install Nginx myself. | IaaS | I manage the OS and web server. |
| I upload a small function that runs when a file is added. | Serverless | The provider runs my function based on an event. |

## Common Beginner Confusions

### "SaaS means no security work"

No. I still manage users, MFA, sharing, integrations, and data.

### "PaaS means I do not need secure coding"

No. PaaS does not protect me from SQL injection, XSS, exposed secrets, or bad authorization logic.

### "IaaS is safer because I control more"

Not automatically. More control also means more responsibility and more chances to misconfigure.

### "Serverless means there is no server"

There is still a server somewhere. I just do not manage it directly.

## Practice

- [ ] List three examples for SaaS, PaaS, IaaS, and serverless.
- [ ] Pick one example and draw what the provider manages vs what I manage.
- [ ] Explain why a VM needs OS patching but a SaaS app usually does not expose OS patching.
- [ ] Find one security setting in a SaaS app, such as MFA, sharing, or connected apps.
- [ ] Write one risk for each service model.

## Things I Keep Forgetting

- SaaS still needs access control.
- PaaS still needs secure code and secrets management.
- IaaS needs OS hardening and patching.
- Serverless still needs permissions, logging, and input validation.
- Shared responsibility changes by service, not only by provider.

## Review Questions

- What is the difference between SaaS, PaaS, and IaaS?
- Which model gives me the most operating system responsibility?
- Why does SaaS still need security review?
- What makes serverless different from a normal virtual machine?
- Why should I check the specific service documentation instead of relying only on a generic table?

## References

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://csrc.nist.gov/pubs/sp/800/145/final)
- [AWS Cloud Computing Types](https://aws.amazon.com/types-of-cloud-computing/)
- [Microsoft Azure: What are IaaS, PaaS, and SaaS?](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-iaas)
- [Google Cloud: Cloud computing services](https://cloud.google.com/learn/what-is-cloud-computing)
