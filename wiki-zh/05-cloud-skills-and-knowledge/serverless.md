# Serverless

| 字段 | 值 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | Cloud Skills and Knowledge |
| 最后复习 | 2026-06-30 |

Serverless 表示我不直接管理服务器。通常是上传代码，把它连接到某个事件，然后服务商在需要时运行它。服务器仍然存在，只是服务商负责 provisioning、scaling 和大部分 runtime platform。

新手版理解：

> Serverless 隐藏了服务器管理，但没有隐藏安全责任。

## 常见 Serverless 例子

| 服务商 | 函数服务 | 其他相关 serverless 概念 |
| --- | --- | --- |
| AWS | Lambda | API Gateway, EventBridge, Step Functions, S3 events |
| Azure | Azure Functions | Logic Apps, Event Grid, Service Bus |
| Google Cloud | Cloud Run functions | Eventarc, Cloud Run, Pub/Sub |

Serverless 也可能包括托管 workflows、queues、event buses、API gateways 和 serverless containers。这里主要关注 functions。

## 一个函数怎么工作

基础 serverless function 流程：

```text
事件发生 -> trigger 调用 function -> function 运行代码 -> function 调用其他服务 -> 写入日志
```

例子：

- HTTP request 触发函数。
- 文件上传触发图片处理。
- queue message 触发后台任务。
- schedule 触发清理任务。
- database change 触发通知。

重点是 trigger。如果我误解 trigger，就可能误解谁能运行函数。

## 函数权限

函数通常会带着一个身份运行。

例子：

- AWS Lambda execution role
- Azure managed identity
- Google Cloud service account

这个身份决定函数能做什么。

坏模式：

```text
函数报错了，所以我直接给它 admin access。
```

更好的模式：

```text
函数只需要读取一个 bucket、写一个 log group，所以只授予这些 action。
```

安全角度：

如果函数被攻破，攻击者可能继承函数权限。所以最小权限很重要。

## Triggers

常见 triggers：

- HTTP requests
- object storage events
- queue messages
- scheduled timers
- database events
- authentication events
- event bus messages

要问的问题：

- 谁能触发这个函数？
- 它能不能从公网触发？
- trigger 是否包含用户可控输入？
- 一个事件会不会造成很多函数执行？
- 有没有 rate limiting 或 throttling？

## 输入验证

Serverless functions 经常处理来自很多来源的事件。我不能默认事件是安全的。

要验证：

- 必填字段是否存在
- 数据类型是否符合预期
- 文件名是否安全
- URL 是否允许
- 用户身份是否检查
- payload size 是否合理

新手提醒：

事件也是输入。queue message、上传文件名、JSON body 都可能是恶意或格式错误的。

## Secrets 和环境变量

函数经常用环境变量做配置。

普通配置可以这样做，但 secrets 要小心。

敏感值例子：

- API keys
- database passwords
- signing secrets
- tokens
- private keys

更好的选择：

- 服务商 secret manager
- managed identity
- short-lived credentials
- 受限环境变量
- 按环境分离 secrets

不要把 secrets 打到日志里。

## 依赖

Serverless functions 经常包含第三方 packages。

风险：

- vulnerable dependency
- abandoned package
- malicious package
- 包太多导致 attack surface 变大
- dependency confusion

好习惯：

- 保持依赖尽量小
- 更新依赖
- 使用 lockfiles
- 能扫描依赖就扫描
- 删除不用的 package

## 日志和监控

函数日志应该帮助回答：

- 函数什么时候运行？
- 什么触发了它？
- 是否失败？
- 运行了多久？
- 访问了什么资源？
- 哪个 request 或 event ID 对应这次运行？

不好的日志：

- secrets
- tokens
- 完整个人数据
- 巨大的原始 payload
- 像 "error happened" 这种不清楚的信息

好的日志：

- request ID
- event type
- 安全的状态信息
- error category
- timing
- 安全情况下的 resource name

## 成本和 Denial of Wallet

Serverless 通常按请求、执行时间、内存和相关服务收费。

安全角度：

如果一个 public function 可以被大量触发，攻击者或 bug 可能造成成本。这有时叫 denial of wallet。

控制措施：

- rate limiting
- authentication
- quotas
- concurrency limits
- budget alerts
- input size limits

## 常见 Serverless 风险

| 风险 | 例子 | 为什么重要 |
| --- | --- | --- |
| 权限过大 | 函数能读取所有 storage buckets。 | 一旦被攻破影响很大。 |
| public trigger 没有 auth | 任何人都能调用 HTTP function。 | 容易被滥用或造成数据暴露。 |
| event injection | 攻击者控制 event 字段。 | 坏输入进入代码。 |
| secrets 在环境或日志里 | 函数打印 API key。 | 凭据泄露。 |
| vulnerable dependency | 老 package 有已知漏洞。 | 代码执行或数据暴露风险。 |
| 没有监控 | 失败或滥用没人发现。 | 检测能力弱。 |
| 无限制递归 | 函数反复触发自己。 | 成本和可用性风险。 |
| 错误处理弱 | stack traces 暴露细节。 | 泄露有用信息。 |

## Serverless vs Containers vs VMs

| 区域 | Serverless Function | Container | VM |
| --- | --- | --- | --- |
| 服务器管理 | 大多服务商负责 | 共同 / 取决于平台 | 大多客户负责 |
| 启动方式 | 事件驱动 | 服务或 job | 完整机器 |
| 扩展 | 通常自动 | 取决于平台 | 客户配置 |
| OS patching | 大多服务商负责 | 取决于平台和 image | 客户负责 |
| 主要安全重点 | code, trigger, IAM, secrets | image, runtime, network, IAM | OS, network, app, patching |

这是简化版，但能帮助我理解为什么 serverless 安全这么关注事件和权限。

## 练习

- [ ] 画一个 serverless trigger flow。
- [ ] 总结一个函数的最小权限策略。
- [ ] 列出三种函数触发方式。
- [ ] 解释为什么 public HTTP function 需要认证或限速。
- [ ] 审查一个假函数，标出 secrets、logs、permissions 可能出错的地方。

## 我总是忘的点

- Serverless 仍然运行在服务器上。
- Trigger 决定谁或什么能运行函数。
- 函数身份决定它能访问什么。
- 日志应该帮助调查，但不应该泄露 secrets。
- 很小的函数也有依赖风险。
- 成本控制也是 serverless 安全的一部分。

## 复习问题

- serverless 是什么意思？
- 为什么 serverless 不等于没有安全工作？
- trigger 是什么？
- 为什么函数权限重要？
- denial of wallet 是什么？
- serverless function 不应该记录什么到日志？

## 参考资料

- [AWS Lambda Security Best Practices](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)
- [Microsoft Azure Functions security concepts](https://learn.microsoft.com/en-us/azure/azure-functions/security-concepts)
- [Google Cloud Run functions documentation](https://cloud.google.com/functions/docs)
- [OWASP Serverless FaaS Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Serverless_FaaS_Security_Cheat_Sheet.html)
- [OWASP Serverless Top 10](https://owasp.org/www-project-serverless-top-10/)
