# Cloud Deployment Models

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Cloud Skills and Knowledge |
| Last Reviewed | 2026-06-30 |

Cloud deployment models describe where the cloud environment runs and who it is meant to serve. This affects control, cost, trust boundaries, network design, compliance, and operations.

Beginner version:

> A service model asks "what kind of service is it?" A deployment model asks "where and for whom is it deployed?"

## Main Deployment Models

The roadmap focuses on:

- public cloud
- private cloud
- hybrid cloud

NIST also describes community cloud, which is useful to know even if it is less common in beginner examples.

## Public Cloud

Public cloud means a cloud provider offers services to many customers over shared provider infrastructure.

Examples:

- AWS
- Microsoft Azure
- Google Cloud
- Oracle Cloud Infrastructure

Important point:

"Shared infrastructure" does not mean every customer can see each other's data. Providers use isolation controls, identity boundaries, network segmentation, and virtualization. But I still need to configure my own account safely.

Common public cloud use cases:

- hosting websites
- running virtual machines
- storing backups
- building data pipelines
- testing and development labs
- serverless applications

Security benefits:

- provider manages physical security
- provider offers many built-in security services
- easy to create isolated environments
- logging and monitoring tools are available
- scaling and backup options are easier to access

Security risks:

- internet exposure can happen quickly
- IAM mistakes can have large impact
- public storage mistakes are common
- services can be created faster than they are governed
- cost and asset inventory can become messy

## Private Cloud

Private cloud means cloud-style infrastructure dedicated to one organization. It may run in the organization's own data center or in a hosted environment.

Examples:

- an internal cloud platform built on virtualization
- OpenStack used by one organization
- VMware-based private cloud
- hosted private cloud for one customer

Common private cloud use cases:

- strict regulatory or data location requirements
- legacy applications that cannot move easily
- organizations with existing data centers
- workloads needing custom infrastructure controls

Security benefits:

- more direct control over infrastructure
- easier to align with some internal policies
- less multi-tenant concern
- can integrate with existing on-premises controls

Security risks:

- the organization manages more infrastructure
- patching and platform maintenance may be harder
- fewer managed security services than public cloud
- private does not automatically mean secure
- old on-premises habits may carry over

## Hybrid Cloud

Hybrid cloud combines two or more environments, such as on-premises systems plus public cloud, or private cloud plus public cloud.

Examples:

- an on-premises Active Directory connected to Azure services
- a company keeping databases on-premises while hosting web apps in AWS
- a disaster recovery environment in public cloud
- cloud analytics reading data from on-premises systems

Common hybrid use cases:

- gradual migration
- disaster recovery
- keeping sensitive workloads on-premises
- using cloud services for burst capacity
- connecting legacy systems to modern cloud apps

Security benefits:

- flexible migration path
- can keep some data or systems in a controlled location
- can use cloud security tools without moving everything at once

Security risks:

- more complex network paths
- identity federation mistakes
- unclear ownership between teams
- logs may be split across environments
- attackers may move between on-premises and cloud if trust is too broad

## Community Cloud

Community cloud is shared by several organizations with common requirements, such as government, healthcare, research, or education.

Beginner note:

I do not need to master this first, but it helps me understand that cloud is not only "public vs private." Some environments are shared by a specific community with similar compliance or mission needs.

## Comparison Table

| Model | Who Uses It | Main Strength | Main Security Challenge |
| --- | --- | --- | --- |
| Public cloud | Many customers | speed, scale, managed services | misconfiguration, IAM, public exposure |
| Private cloud | One organization | control and customization | maintenance, patching, internal operations |
| Hybrid cloud | Connected environments | flexibility and migration | complexity, identity, network trust |
| Community cloud | Similar organizations | shared requirements | governance and shared boundaries |

## Public vs Private Is Not the Same as Secure vs Insecure

This is a beginner trap.

Public cloud can be secure if configured well. Private cloud can be insecure if unpatched, poorly monitored, or full of overprivileged accounts.

Better questions:

- Who can access the environment?
- How is identity controlled?
- What is exposed to the internet?
- Where are logs stored?
- Who patches the platform?
- How are secrets managed?
- Who pays attention to configuration drift?

## Hybrid Cloud Security Boundaries

Hybrid cloud needs extra care because it connects environments.

Things to review:

- VPN or private connectivity
- routing between networks
- DNS resolution across environments
- identity federation
- privileged accounts
- logging from both sides
- data transfer rules
- firewall and security group rules

Beginner version:

Hybrid cloud creates bridges. Bridges are useful, but they also become places where mistakes and attackers can cross.

## Practice

- [ ] Compare the security boundaries of public, private, and hybrid cloud.
- [ ] Write one normal use case for each model.
- [ ] Draw a hybrid setup with on-premises users, cloud app, identity provider, and logs.
- [ ] Explain why private cloud is not automatically safer than public cloud.
- [ ] List three controls needed when connecting on-premises to cloud.

## Things I Keep Forgetting

- Deployment model is about where and for whom, not SaaS/PaaS/IaaS.
- Public cloud is multi-tenant, but still isolated by provider controls.
- Private cloud gives control, but also more responsibility.
- Hybrid cloud is powerful but easy to make complicated.
- Connectivity and identity are the risky parts of hybrid setups.

## Review Questions

- What is public cloud?
- What is private cloud?
- What makes a cloud environment hybrid?
- Why can hybrid cloud increase complexity?
- Why is "private" not the same thing as "secure"?
- What would I check before connecting an on-premises network to a cloud network?

## References

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://csrc.nist.gov/pubs/sp/800/145/final)
- [AWS: Cloud deployment models](https://aws.amazon.com/types-of-cloud-computing/)
- [Microsoft Azure: What are public, private, and hybrid clouds?](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-are-private-public-hybrid-clouds)
- [Google Cloud: What is hybrid cloud?](https://cloud.google.com/learn/what-is-hybrid-cloud)
