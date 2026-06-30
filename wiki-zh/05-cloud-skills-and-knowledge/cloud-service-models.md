# 云服务模型

| 字段 | 值 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | Cloud Skills and Knowledge |
| 最后复习 | 2026-06-30 |

云服务模型描述服务商管理多少、我自己管理多少。这很重要，因为不同模型下，我的安全工作不一样。

新手版理解：

> 服务越托管，我要维护的系统越少，但用户、数据、配置和访问控制仍然是我的事。

## 主要模型

三个经典模型是：

- SaaS：Software as a Service
- PaaS：Platform as a Service
- IaaS：Infrastructure as a Service

Serverless 经常单独讨论，因为实际使用体验和传统模型不太一样，虽然它和 PaaS 有重叠。

## SaaS

SaaS 表示服务商帮我运行完整应用。

例子：

- Google Workspace
- Microsoft 365
- Salesforce
- Dropbox
- Box
- GitHub

我通常管理：

- 用户和组
- MFA 设置
- 共享设置
- 上传到服务里的数据
- 集成和 connected apps
- 审计日志和保留设置
- 账号恢复设置

服务商通常管理：

- 应用托管
- 应用更新
- 底层服务器
- 大多数网络基础设施
- 大多数平台维护

安全角度：

SaaS 仍然会因为共享过宽、旧用户没移除、MFA 缺失、第三方应用权限过大而泄露数据。

## PaaS

PaaS 表示服务商提供托管平台，我把应用部署上去。

例子：

- Azure App Service
- Google App Engine
- AWS Elastic Beanstalk
- 托管数据库平台
- 带托管控制平面的容器平台

我通常管理：

- 应用代码
- 应用设置
- 数据
- 应用身份和权限
- secrets
- 网络暴露
- 日志配置

服务商通常管理：

- 底层服务器
- 平台补丁
- runtime 基础设施
- 扩展功能
- 很多操作系统层内容

安全角度：

PaaS 减少了服务器维护，但不会修复不安全代码、暴露的 secrets、过宽权限或公开 endpoint。

## IaaS

IaaS 表示服务商给我虚拟机、磁盘、网络等基础设施积木。

例子：

- Amazon EC2
- Azure Virtual Machines
- Google Compute Engine
- virtual networks
- cloud disks
- load balancers

我通常管理：

- 操作系统配置
- OS patches
- 已安装软件
- firewall rules
- SSH 或 RDP 访问
- 应用部署
- 数据和备份

服务商通常管理：

- 物理数据中心
- 物理服务器
- 存储硬件
- 核心网络基础设施
- 虚拟化层

安全角度：

IaaS 最像传统服务器。如果我创建 VM，就要考虑加固、补丁、访问、日志和备份。

## Serverless

Serverless 表示我部署代码或逻辑，但不直接管理服务器。服务商处理扩展和很多 runtime 环境。

例子：

- AWS Lambda
- Azure Functions
- Google Cloud Run functions
- 事件驱动 workflow

我通常管理：

- 函数代码
- 触发器
- 输入验证
- 权限
- 环境变量
- secrets
- 依赖
- 日志

服务商通常管理：

- 服务器供应
- 扩展
- 大部分 runtime 平台
- 高可用功能

安全角度：

Serverless 隐藏了服务器，但如果函数权限太大、信任恶意输入、泄露 secrets、写敏感日志，仍然很危险。

## 责任对比

| 层级 | SaaS | PaaS | IaaS | Serverless |
| --- | --- | --- | --- | --- |
| 物理数据中心 | 服务商 | 服务商 | 服务商 | 服务商 |
| 硬件 | 服务商 | 服务商 | 服务商 | 服务商 |
| 虚拟化 | 服务商 | 服务商 | 服务商 | 服务商 |
| 操作系统 | 服务商 | 大多服务商 | 客户 | 服务商 |
| Runtime | 服务商 | 服务商 / 共同 | 客户 | 服务商 / 共同 |
| 应用代码 | 服务商 | 客户 | 客户 | 客户 |
| 身份配置 | 客户 | 客户 | 客户 | 客户 |
| 数据保护 | 客户 | 客户 | 客户 | 客户 |
| 访问审查 | 客户 | 客户 | 客户 | 客户 |

这个表是简化版。真实服务会更复杂，所以还要看具体服务文档。

## 简单例子

| 场景 | 可能模型 | 为什么 |
| --- | --- | --- |
| 我在浏览器里用 Gmail。 | SaaS | 完整邮箱应用由服务商管理。 |
| 我把 Python Web app 部署到托管应用平台。 | PaaS | 我管理代码，但不管理大多数服务器。 |
| 我创建 Ubuntu VM 并自己安装 Nginx。 | IaaS | 我管理 OS 和 Web server。 |
| 我上传一个文件新增时运行的小函数。 | Serverless | 服务商根据事件运行我的函数。 |

## 常见新手误解

### “SaaS 就不用做安全”

不是。我仍然要管理用户、MFA、共享、集成和数据。

### “PaaS 就不用写安全代码”

不是。PaaS 不会帮我修 SQL injection、XSS、secrets 暴露或错误授权逻辑。

### “IaaS 因为控制更多所以更安全”

不一定。控制更多也代表责任更多、配置错误机会更多。

### “Serverless 就没有服务器”

服务器仍然存在，只是我不直接管理。

## 练习

- [ ] 给 SaaS、PaaS、IaaS、serverless 各列出三个例子。
- [ ] 选择一个例子，画出服务商管理什么、我管理什么。
- [ ] 解释为什么 VM 需要 OS patching，而 SaaS 应用通常不暴露 OS patching。
- [ ] 找一个 SaaS 应用里的安全设置，比如 MFA、共享或 connected apps。
- [ ] 每种服务模型写一个风险。

## 我总是忘的点

- SaaS 仍然需要访问控制。
- PaaS 仍然需要安全代码和 secrets 管理。
- IaaS 需要 OS 加固和补丁。
- Serverless 仍然需要权限、日志和输入验证。
- shared responsibility 是按服务变化的，不只是按服务商变化。

## 复习问题

- SaaS、PaaS、IaaS 有什么区别？
- 哪个模型给我的操作系统责任最多？
- 为什么 SaaS 仍然需要安全审查？
- Serverless 和普通虚拟机有什么不同？
- 为什么不能只看通用表格，还要看具体服务文档？

## 参考资料

- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://csrc.nist.gov/pubs/sp/800/145/final)
- [AWS Cloud Computing Types](https://aws.amazon.com/types-of-cloud-computing/)
- [Microsoft Azure: What are IaaS, PaaS, and SaaS?](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-iaas)
- [Google Cloud: Cloud computing services](https://cloud.google.com/learn/what-is-cloud-computing)
