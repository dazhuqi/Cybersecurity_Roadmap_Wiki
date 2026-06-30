# 05 云技能和知识

| 字段 | 值 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | Cloud Skills and Knowledge |
| 最后复习 | 2026-06-30 |

云计算就是通过互联网使用别人管理的基础设施。听起来很简单，但它会改变很多安全假设。我不拥有数据中心，但我仍然要负责很多风险：身份、权限、数据、配置、日志，以及我部署的东西。

新手版理解：

> 云不是“没有服务器”，而是“服务器和服务由别人管理，我在上面做配置和部署”。

## 为什么这个模块重要

云现在几乎到处都有：

- OneDrive、iCloud、Google Drive、Dropbox、Box 这类个人文件存储
- 企业 SaaS 应用
- AWS、Azure、Google Cloud 里的虚拟机和容器
- Serverless 函数和托管数据库
- 身份系统和单点登录
- 日志、备份和灾难恢复

从安全角度看，云上的错误可能很快变成公开问题。一个错误的存储权限、一个泄露的 API key、一个权限过大的服务账号，都可能影响很多数据。

## 学习顺序

1. [云安全概念](cloud-security-concepts.md)
2. [云服务模型](cloud-service-models.md)
3. [云部署模型](cloud-deployment-models.md)
4. [云服务提供商](cloud-providers.md)
5. [云存储](cloud-storage.md)
6. [基础设施即代码](infrastructure-as-code.md)
7. [Serverless](serverless.md)

我不应该一开始就背 AWS、Azure、Google Cloud 的所有服务名。先建立这些基本模型更重要：

- 谁负责什么
- 身份在哪里管理
- 网络怎么隔离
- 日志在哪里
- 数据怎么变成公开或私有
- 成本怎么突然冒出来

## 路线图对应内容

- 云中的安全
- 云 vs 本地机房
- 基础设施即代码
- Serverless
- 在云中部署
- SaaS、PaaS、IaaS
- 公有云、私有云、混合云
- AWS、Google Cloud、Azure
- S3、Dropbox、iCloud、Box、OneDrive、Google Drive

## 成本安全规则

云实验如果忘记清理，可能真的花钱。创建任何账号或资源之前，我应该：

- 查看官方免费额度页面，因为限制会变
- 如果平台支持，设置预算或账单提醒
- 不要让虚拟机、NAT 网关、数据库、负载均衡器一直跑着
- 实验后删除测试资源
- 不要把真实秘密或私人数据放进练习账号
- 记录创建了什么、为什么创建、怎么删除

给自己的小提醒：“free tier” 不等于“所有东西免费”。它通常只代表特定服务、特定限制、特定时间段。

## 我应该能解释什么

学完这个模块后，我应该能解释：

- shared responsibility model 是什么
- SaaS、PaaS、IaaS、serverless 有什么区别
- 公有云、私有云、混合云是什么意思
- 为什么 IAM 是云安全的核心
- 为什么存储权限会导致很多事故
- 为什么日志和审计轨迹要在事故发生前就启用
- 为什么 IaC 能提高可重复性，也能重复制造错误
- 为什么 serverless 隐藏了服务器但没有隐藏安全责任

## 小实验想法

这些是偏安全的新手实验：

- 画出 Gmail、Azure VM、AWS S3 bucket 的责任边界
- 对比 AWS IAM、Azure RBAC、Google Cloud IAM 的名称
- 写一个本地 Terraform 文件，但不真的 apply 到云账号
- 阅读示例 S3 bucket policy，找出公开访问
- 画一个 HTTP 请求到函数再到存储的 serverless 流程
- 给一个假的云实验写清理清单

## 完成标准

- [ ] 能用自己的话解释云 shared responsibility model。
- [ ] 能用例子区分 SaaS、PaaS、IaaS 和 serverless。
- [ ] 能比较公有云、私有云和混合云。
- [ ] 能识别 AWS、Azure、Google Cloud 里的基础 IAM、日志、网络、密钥管理和存储服务。
- [ ] 能解释常见云存储配置错误。
- [ ] 能解释为什么 IaC state 文件和 secrets 需要保护。
- [ ] 能解释 serverless 常见风险，比如权限过大、输入验证弱、日志不足。

## 参考资料

- [roadmap.sh Cyber Security Roadmap](https://roadmap.sh/cyber-security)
- [NIST SP 800-145: The NIST Definition of Cloud Computing](https://csrc.nist.gov/pubs/sp/800/145/final)
- [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/)
- [Microsoft Azure: Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility)
- [Google Cloud: Shared responsibilities and shared fate](https://docs.cloud.google.com/architecture/framework/security/shared-responsibility-shared-fate)
