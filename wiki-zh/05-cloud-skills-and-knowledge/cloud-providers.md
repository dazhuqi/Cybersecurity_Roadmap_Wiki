# 云服务提供商

| 字段 | 值 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | Cloud Skills and Knowledge |
| 最后复习 | 2026-06-30 |

我首先应该认识的主要云服务商是 AWS、Microsoft Azure 和 Google Cloud。目标不是背下每一个服务，而是先认出主要类别，这样才能看懂云架构图、文档和安全报告。

新手版理解：

> 不同云服务商会给类似概念起不同名字。我应该先学类别，再学产品名。

## 三大云服务商

| 服务商 | 全名 | 常见简称 | 备注 |
| --- | --- | --- | --- |
| Amazon Web Services | Amazon Web Services | AWS | 服务很多，创业公司、企业、实验和安全例子里都很常见。 |
| Microsoft Azure | Microsoft Azure | Azure | 和 Microsoft 身份、企业环境集成很强，特别是 Entra ID 和 Windows 环境。 |
| Google Cloud | Google Cloud | GCP / Google Cloud | 数据、Kubernetes、分析和全球基础设施能力很突出。 |

## 账号结构

不同云服务商组织账号的方式不一样。

| 概念 | AWS | Azure | Google Cloud |
| --- | --- | --- | --- |
| 顶层账单 / 管理 | Organization | Tenant / management groups / subscriptions | Organization |
| 主要资源容器 | Account | Subscription / resource group | Project |
| 常见分组单位 | Account, OU, tags | Resource group, subscription, tags | Project, folders, labels |
| 人类身份系统 | IAM users / IAM Identity Center | Microsoft Entra ID | Cloud Identity / Google identities |

新手提醒：

不要把每个服务商里的“account”当成同一个东西。在 AWS 里，account 经常是强隔离边界。在 Azure 里，subscription 和 resource group 很重要。在 Google Cloud 里，project 很重要。

## 核心服务名称对照

| 类别 | AWS | Azure | Google Cloud | 含义 |
| --- | --- | --- | --- | --- |
| 身份和访问 | IAM, IAM Identity Center | Microsoft Entra ID, Azure RBAC | Cloud IAM, Cloud Identity | 用户、角色、权限、服务身份。 |
| 虚拟机 | EC2 | Azure Virtual Machines | Compute Engine | 常规云 VM。 |
| 对象存储 | S3 | Azure Blob Storage | Cloud Storage | bucket/container 风格的文件和对象存储。 |
| 网络 | VPC | Virtual Network | VPC | 云网络和子网基础。 |
| 审计日志 | CloudTrail | Azure Activity Log | Cloud Audit Logs | 谁在云控制平面做了什么。 |
| 监控 / 日志 | CloudWatch | Azure Monitor / Log Analytics | Cloud Logging / Cloud Monitoring | 指标、应用日志、告警、仪表盘。 |
| 密钥管理 | KMS | Key Vault / Managed HSM | Cloud KMS | 加密密钥和 secrets 相关服务。 |
| Serverless 函数 | Lambda | Azure Functions | Cloud Run functions | 不直接管理服务器的事件驱动代码。 |
| 容器 | ECS, EKS | AKS, Container Apps | GKE, Cloud Run | 运行容器和 Kubernetes 类工作负载。 |
| 数据库 | RDS, DynamoDB | Azure SQL, Cosmos DB | Cloud SQL, Firestore | 托管关系型和 NoSQL 数据服务。 |
| 安全态势 | Security Hub, GuardDuty | Defender for Cloud | Security Command Center | 安全发现和态势管理。 |

这个表只是起点。云产品会变化、改名、重叠。

## AWS 笔记

我应该认识：

- IAM 控制用户、角色、组和策略。
- S3 是对象存储，也是新手权限错误高发点。
- EC2 是虚拟机。
- VPC 是很多工作负载的网络边界。
- CloudTrail 记录很多账号级 API 操作。
- CloudWatch 用于日志、指标和告警。
- KMS 管理加密密钥。
- Lambda 是 AWS serverless 函数。

安全新手重点：

- 保护 root user
- 使用 MFA
- 尽量避免长期 access keys
- 在给管理员权限前先理解 IAM policies
- 除非有明确理由，否则 S3 bucket 保持私有
- 启用并查看 CloudTrail logs
- 给实验设置 billing alerts

## Azure 笔记

我应该认识：

- Microsoft Entra ID 是身份核心。
- Azure RBAC 控制 Azure 资源访问。
- Resource groups 用来组织相关资源。
- Virtual Network 是云网络。
- Azure Storage 包含 Blob Storage。
- Azure Activity Log 记录 subscription 级事件。
- Azure Monitor 和 Log Analytics 收集监控数据。
- Key Vault 存储 keys、secrets 和 certificates。
- Azure Functions 是 serverless。

安全新手重点：

- 理解 tenant、subscription、resource group 的关系
- 能用 MFA 和 conditional access 时就用
- 不要能给 Contributor 或 Reader 时直接给 Owner
- 检查 storage 和 databases 的 public network access
- 把 secrets 放进 Key Vault，不要写进代码
- 调查时使用 Activity Log 和 sign-in logs
- 实验前检查预算

## Google Cloud 笔记

我应该认识：

- Projects 是很重要的边界。
- Cloud IAM 控制权限。
- Compute Engine 是虚拟机。
- Cloud Storage 是对象存储。
- VPC 是网络。
- Cloud Audit Logs 记录很多管理和数据访问事件。
- Cloud Logging 和 Cloud Monitoring 处理日志和指标。
- Cloud KMS 管理密钥。
- Cloud Run functions 是 serverless 函数。

安全新手重点：

- 知道自己正在操作哪个 project
- 尽量避免过宽 basic roles
- 小心使用 service accounts
- 检查 storage buckets 的 public access prevention 和 IAM
- 做实验前理解 audit logs
- 设置 budgets 和 alerts
- 删除不用的资源

## 免费额度和实验提醒

每个服务商都有 free tier 或 trial 类型的内容，但细节会变化。使用真实账号前，我应该看官方 pricing 和 free tier 页面。

实验清单：

- [ ] 使用练习账号，不要用装满私人数据的个人账号。
- [ ] 创建资源前启用 MFA。
- [ ] 设置预算或账单提醒。
- [ ] 记录创建的每个资源。
- [ ] 除非实验要求，否则避免 public IP 暴露。
- [ ] 实验后删除资源。
- [ ] 清理后检查账单或成本仪表盘。

## 先学什么

追高级服务之前，我应该先学这些类别：

1. 身份：users、roles、policies、service accounts、MFA。
2. 网络：VPC 或 virtual network、subnets、routing、public vs private access。
3. 存储：buckets、containers、access policies、public access controls。
4. 日志：audit logs、activity logs、sign-in logs、resource logs。
5. 加密：KMS、key vaults、default encryption、customer-managed keys。
6. 成本：budgets、alerts、idle resources、cleanup。

## 通用安全问题

不管哪个云服务商，我都应该问：

- 谁能登录？
- 谁有管理员级权限？
- 哪些资源是公开的？
- 审计日志在哪里？
- secrets 是否安全存储？
- 敏感数据是否加密？
- 是否配置备份？
- 是否有预算提醒？
- 谁复查变更？

## 练习

- [ ] 记录 AWS、Azure、Google Cloud 的核心 IAM、日志、网络和存储服务名。
- [ ] 选一个服务商，找到哪里启用 MFA。
- [ ] 画一个包含身份、网络、VM、存储、日志和账单提醒的基础云账号。
- [ ] 对比一个 AWS 服务和最接近的 Azure、Google Cloud 服务。
- [ ] 阅读一个服务商的 shared responsibility 页面。

## 我总是忘的点

- 类似服务有不同名字。
- 各服务商的身份结构不同。
- 日志名字不同，但调查价值相似。
- free tier 限制会变，实验前看官方页面。
- 第一个安全任务通常是身份，不是花哨工具。

## 复习问题

- 这条路线图里的三大云服务商是谁？
- Azure Blob Storage 和 Google Cloud Storage 在 AWS 里对应什么？
- 为什么 AWS accounts、Azure subscriptions、Google Cloud projects 很重要？
- 哪种日志告诉我谁修改了云资源？
- 为什么云实验前要设置预算？

## 参考资料

- [AWS Documentation](https://docs.aws.amazon.com/)
- [AWS Free Tier](https://aws.amazon.com/free/)
- [Microsoft Azure Documentation](https://learn.microsoft.com/en-us/azure/)
- [Azure free account](https://azure.microsoft.com/en-us/free/)
- [Google Cloud Documentation](https://cloud.google.com/docs)
- [Google Cloud Free Program](https://cloud.google.com/free)
- [AWS Identity and Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
- [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/)
- [Google Cloud IAM overview](https://cloud.google.com/iam/docs/overview)
