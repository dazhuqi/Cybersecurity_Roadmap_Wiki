# 云安全概念

| 字段 | 值 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | Cloud Skills and Knowledge |
| 最后复习 | 2026-06-30 |

云安全不是完全新的安全种类。它还是身份、最小权限、网络边界、日志、加密、备份、事件响应这些老概念。真正容易混乱的地方是：云服务提供商负责一部分，我自己负责另一部分。

新手版理解：

> 做云安全时，我要一直问：“这是服务商的责任、我的责任，还是双方都有？”

## 云 vs 本地机房

本地机房通常表示组织自己拥有或控制物理环境，比如机房、电力、机架、网络设备、服务器、操作系统、应用和数据。

云表示服务商管理很多物理基础设施，并通过 API 和控制台把服务提供给我。我不需要自己上架服务器，但我仍然可能因为错误配置暴露数据，或者给身份太大的权限。

| 区域 | 本地机房 | 云 |
| --- | --- | --- |
| 物理建筑 | 通常客户负责 | 服务商负责 |
| 硬件 | 通常客户负责 | 服务商负责 |
| 虚拟化平台 | 经常客户负责 | 大多数托管服务由服务商负责 |
| 操作系统 | 服务器上由客户负责 | 取决于服务模型 |
| 应用代码 | 客户负责 | 客户负责 |
| 数据 | 客户负责 | 客户负责 |
| 身份和权限 | 客户负责 | 客户用服务商工具管理 |
| 日志配置 | 客户负责 | 客户启用和审查云日志 |

新手最容易犯的错是以为“服务商会保护一切”。更准确地说，服务商保护云本身，我要保护我放进云里的东西。

## Shared Responsibility Model

shared responsibility model 用来说明哪些安全责任属于服务商，哪些属于客户。

简单例子：

- 服务商保护数据中心、物理服务器和核心云基础设施。
- 我保护账号、数据、身份权限、应用逻辑和很多配置选择。
- 具体边界会根据 IaaS、PaaS、SaaS、serverless 变化。

## 简单责任对照

| 服务类型 | 服务商通常负责更多 | 客户仍然负责 |
| --- | --- | --- |
| SaaS | 应用托管、平台、基础设施 | 用户、数据、共享设置、访问审查 |
| PaaS | runtime、平台、扩展、基础设施 | 应用代码、数据、应用配置、身份 |
| IaaS | 物理基础设施、虚拟化 | 操作系统、防火墙规则、应用、数据 |
| Serverless | 服务器、运行时扩展、大部分平台 | 函数代码、触发器、权限、secrets、日志 |

所以 IaaS 虚拟机需要客户负责 OS patching，而 SaaS 邮箱通常不会让客户接触操作系统补丁。

## 身份是新的边界

在很多云系统里，身份比网络位置更重要。

重要身份概念：

- users 是人类账号
- groups 用来收集用户
- roles 或 permissions 定义允许做什么
- service accounts 或 managed identities 给应用使用
- API keys 和 tokens 用于程序化访问
- MFA 帮助保护人类登录

新手警告：

如果一个云身份有管理员权限，它可能能创建资源、读取数据、修改日志、创建新凭据或关闭控制措施。一个账号可能影响很多服务。

## 最小权限

最小权限表示一个身份只应该拥有完成任务需要的权限。

坏的新手模式：

```text
我不知道需要哪个权限，所以直接给 AdministratorAccess。
```

更好的模式：

```text
先从只读或窄权限开始。
测试缺什么。
只添加需要的 action。
之后再复查。
```

最小权限一开始会慢一点，但它能让错误影响更小。

## 云中的网络安全

云网络通常是软件定义的。不是插网线，而是创建 virtual network、subnet、route table、gateway、firewall、security group。

需要学习：

- virtual private cloud 或 virtual network
- subnets
- route tables
- internet gateways
- NAT
- security groups 或 network security groups
- private endpoints
- load balancers

安全角度：

- Public subnet 更容易直接到互联网。
- Private subnet 不应该公开暴露服务。
- Security group 只应该允许需要的端口。
- SSH 和 RDP 这种管理端口不要对整个互联网开放。

## 日志和监控

云环境会产生重要日志，但很多日志需要我启用、路由、保存或设置保留时间。

有用日志类型：

- 控制平面活动，比如谁创建或修改了资源
- 身份认证和登录日志
- 存储访问日志
- 网络流日志
- 应用日志
- serverless 函数日志
- 云服务商安全工具的发现结果

新手错误：

只在出事后才想到日志。如果日志没有启用，或者只保留很短时间，调查就会非常困难。

## 加密和密钥管理

云服务通常支持静态加密和传输加密。

需要知道的词：

- encryption at rest：数据存储时被加密
- encryption in transit：数据在网络上传输时被加密
- KMS：密钥管理服务
- customer-managed key：客户更直接控制的密钥
- provider-managed key：主要由服务商管理的密钥
- key rotation：随时间替换密钥

重要提醒：

加密不能修复错误权限。如果一个身份被允许读取数据，服务会正常帮它解密。

## Secrets

Secrets 包括：

- API keys
- passwords
- tokens
- private keys
- 数据库连接字符串

不适合放 secrets 的地方：

- Git commits
- public repositories
- screenshots
- chat messages
- 普通环境配置文件
- Terraform state files
- 本地 Downloads 文件夹

更好的地方：

- 云服务商 secret manager
- 按环境区分的安全变量
- 尽量使用短期凭据
- 能用 managed identity 时少用静态 key

## 常见云安全错误

| 错误 | 为什么重要 |
| --- | --- |
| 公开存储 bucket | 敏感文件可能被任何人读取。 |
| IAM 角色权限过大 | 一个身份被攻破后能做太多事。 |
| 管理员账号没有 MFA | 密码被偷后危险大很多。 |
| SSH 或 RDP 暴露 | 互联网上一直有扫描器找管理端口。 |
| 日志没启用 | 调查和检测能力很弱。 |
| secrets 写进代码 | 仓库泄露就变成凭据泄露。 |
| 没有预算提醒 | 实验错误可能变成账单。 |
| 没有清理流程 | 被遗忘的资源继续运行，也继续带来风险。 |

## 云事件响应基础

如果云账号里发生可疑行为，我应该想：

- 是哪个身份做的操作
- 哪个资源被改变了
- 事件发生在什么时候
- 是否有凭据泄露
- 日志是否还完整
- 是否添加了公开访问
- 是否创建了新用户、角色、key 或 token
- 数据是否被访问或复制

云事件响应非常依赖日志和身份历史。

## 小练习

- [ ] 画出 SaaS 应用、虚拟机、serverless 函数的责任边界。
- [ ] 用一段话解释为什么 IAM 对云安全重要。
- [ ] 列出三个可能暴露数据的云错误。
- [ ] 找到 AWS、Azure 或 Google Cloud 的审计日志文档。
- [ ] 解释为什么加密不能替代访问控制。

## 我总是忘的点

- 云不会消除责任，只会移动责任。
- 身份通常是最重要的控制点。
- 公开存储是经典云错误。
- 日志必须在事故发生前存在。
- 加密有用，但权限仍然重要。
- 成本也是云安全的一部分。

## 复习问题

- shared responsibility model 是什么意思？
- 为什么 SaaS、PaaS、IaaS、serverless 的责任边界不同？
- 为什么云身份影响很大？
- encryption at rest 和 encryption in transit 有什么区别？
- 为什么管理员账号应该使用 MFA？
- 哪些日志能帮助调查可疑云变更？

## 参考资料

- [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/)
- [Microsoft Azure: Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility)
- [Google Cloud: Shared responsibilities and shared fate](https://docs.cloud.google.com/architecture/framework/security/shared-responsibility-shared-fate)
- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://csrc.nist.gov/pubs/sp/800/145/final)
- [Cloud Security Alliance: Security Guidance](https://cloudsecurityalliance.org/research/guidance)
