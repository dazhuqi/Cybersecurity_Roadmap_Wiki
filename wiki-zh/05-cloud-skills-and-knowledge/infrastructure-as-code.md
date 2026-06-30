# 基础设施即代码

| 字段 | 值 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | Cloud Skills and Knowledge |
| 最后复习 | 2026-06-30 |

Infrastructure as Code，简称 IaC，意思是用文件描述基础设施，而不是在云控制台里手动点击一切。这些文件可以创建网络、虚拟机、存储 bucket、IAM roles、数据库和很多其他资源。

新手版理解：

> IaC 像是在给云资源写菜谱。好处是菜谱可重复；坏处是坏菜谱也会把同一个错误重复到很多地方。

## 为什么需要 IaC

没有 IaC 时，团队可能手动创建资源：

- 在控制台里点击
- 忘记准确设置
- 命名不一致
- 漏掉安全选项
- 没有 review 记录
- 很难重建环境

有了 IaC，团队可以：

- 把基础设施定义放进 Git
- apply 前 review 变更
- 复用 modules 或 templates
- 更一致地重建环境
- 对比期望状态和实际状态
- 自动化部署

这很有用，但也代表基础设施变更变成了代码变更。坏代码会创建坏基础设施。

## 常见 IaC 工具

| 工具 | 生态 | 备注 |
| --- | --- | --- |
| Terraform | 多云 | 很常见，使用 providers 和 state files。 |
| OpenTofu | 多云 | Terraform 的开源 fork，概念类似。 |
| AWS CloudFormation | AWS | AWS 原生 IaC 服务，使用 templates。 |
| AWS CDK | AWS | 用编程语言定义 AWS 基础设施。 |
| Azure Bicep | Azure | Azure-native declarative language。 |
| ARM templates | Azure | JSON-based Azure Resource Manager templates。 |
| Google Cloud Deployment Manager | Google Cloud | Google Cloud 的 IaC 选项，但新项目使用前要检查当前产品状态。 |
| Pulumi | 多云 | 用通用编程语言写基础设施。 |

对新手来说，Terraform 是不错的第一个 IaC 概念，因为很多例子和安全讨论都会用到它。

## Declarative vs Imperative

Declarative 表示描述最终想要的状态。

例子：

```text
我想要一个启用了 versioning 的私有 storage bucket。
```

Imperative 表示描述一步步操作。

例子：

```text
创建 bucket，然后设置权限，然后打开 versioning。
```

很多 IaC 工具是 declarative。我描述应该存在什么，工具计算需要执行哪些动作。

## 基础 Terraform 词汇

| 词 | 含义 |
| --- | --- |
| Provider | 和平台通信的插件，比如 AWS、Azure、Google Cloud。 |
| Resource | 要创建的东西，比如 bucket、VM、IAM role。 |
| Variable | 配置使用的输入值。 |
| Output | apply 后打印或导出的值。 |
| Module | 可复用的一组 IaC 配置。 |
| State | Terraform 认为当前存在什么的文件或后端记录。 |
| Plan | 预览 Terraform 会创建、修改或删除什么。 |
| Apply | 真正执行计划中的变更。 |
| Destroy | 删除被管理的资源。 |

## 为什么 State Files 重要

Terraform state 很重要，因为它把配置映射到真实资源。

State 可能包含：

- resource IDs
- IP 地址
- 生成的名称
- metadata
- 有时包含敏感值

安全角度：

State files 不应该随便提交到公开仓库。如果 state 里有 secrets 或基础设施细节，泄露后会帮助攻击者。

更好的 state 习惯：

- 团队工作使用安全 remote backend
- 限制谁能读取 state
- 支持时启用加密
- 不把本地 state commit 到 Git
- 检查 secrets 是否出现在 state 中

## IaC 里的 Secrets

坏例子：

```hcl
password = "SuperSecretPassword123"
```

为什么不好：

- 可能进入 Git 历史
- 可能出现在 plan 或 logs
- 可能存进 state
- 可能被复制进 ticket 或截图

更好的模式：

- 使用 secret managers
- 谨慎使用环境变量
- 能用 managed identities 时就用
- 尽量让 secrets 不进入代码和 state
- 如果 secrets 暴露，要 rotate

## 常见 IaC 安全错误

| 错误 | 例子 | 为什么重要 |
| --- | --- | --- |
| 默认公开存储 | Bucket 允许 public read。 | 数据暴露。 |
| 网络规则太开放 | `0.0.0.0/0` 允许 SSH 或 RDP。 | 管理端口暴露给整个互联网。 |
| IAM 权限过大 | Role 拿到管理员权限。 | 一个 workload 被攻破就能做很多事。 |
| Secrets 写进代码 | API key 放在 `.tf` 文件里。 | 仓库泄露变成凭据泄露。 |
| State file 暴露 | State 被 commit 到 GitHub。 | 资源细节或 secrets 可能泄露。 |
| 没有 review | 直接从本地 apply。 | 错误绕过同伴审查。 |
| 没有 drift detection | 手动在 IaC 外改资源。 | 实际环境不再匹配代码。 |
| 不安全 destroy | 选错 workspace 或 account。 | 真实资源可能被删。 |

## IaC Code Review

审查 IaC 时，我应该看：

- public access
- broad IAM permissions
- hardcoded secrets
- missing encryption
- missing logging
- open inbound ports
- unclear naming
- missing tags or labels
- 资源是否在错误的 account、subscription、project 或 region
- plan 中是否有 destructive changes

新手提醒：

Plan 输出不是无聊内容。它是真实基础设施变更前的警告屏幕。

## Drift

Drift 表示真实环境不再匹配 IaC 文件。

例子：

- 有人手动改了 firewall rule
- bucket policy 在控制台里被编辑了
- resource 在 IaC 外被删除了
- emergency change 没写回代码

安全角度：

Drift 让人更难知道真实环境是什么，也可能隐藏危险手动改动。

## 不花钱的新手安全实验

我可以不 apply 到真实云账号也练习 IaC 概念：

- 安装 Terraform 或 OpenTofu
- 阅读小例子
- 可用时运行 formatting commands
- 只在本地或 sandbox 中看 plan
- 给私有 bucket 写伪代码
- 审查示例代码里的安全错误

示例假 review：

```hcl
resource "example_storage_bucket" "demo" {
  name   = "demo-public-bucket"
  public = true
}
```

问题：

为什么 `public = true` 有风险，我想要什么替代设置？

## 练习

- [ ] 阅读一个最小 Terraform 示例。
- [ ] 解释 provider、resource、plan、apply、state file 是什么。
- [ ] 找一个 IaC 公开 bucket 示例，并写下为什么它有风险。
- [ ] 总结常见 IaC 安全配置错误。
- [ ] 写一份修改云 IAM 的 pull request review 清单。

## 我总是忘的点

- IaC 会让变更可重复，包括坏变更。
- State files 可能包含敏感信息。
- Apply 前先 plan。
- 不要 hardcode secrets。
- 仔细审查 IAM 和网络规则。
- 控制台手动修改可能造成 drift。

## 复习问题

- IaC 解决什么问题？
- 为什么 IaC 用得粗心会增加安全风险？
- Terraform state file 是什么？
- 为什么 secrets 不应该放在 IaC 文件里？
- drift 是什么意思？
- apply 一个 IaC 变更前我会检查什么？

## 参考资料

- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform: Sensitive data in state](https://developer.hashicorp.com/terraform/language/state/sensitive-data)
- [OpenTofu Documentation](https://opentofu.org/docs/)
- [AWS CloudFormation User Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)
- [Azure Bicep overview](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview)
- [OWASP Infrastructure as Code Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Infrastructure_as_Code_Security_Cheat_Sheet.html)
