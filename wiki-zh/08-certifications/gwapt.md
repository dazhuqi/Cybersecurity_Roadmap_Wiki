# GWAPT

| 字段 | 内容 |
| --- | --- |
| 状态 | 未开始 |
| 目的 | Web 应用渗透测试 |
| 官方网站 | [GIAC GWAPT](https://www.giac.org/certifications/web-application-penetration-tester-gwapt) |

## 笔记

GWAPT 是 GIAC Web Application Penetration Tester，关注 Web 应用测试、Web 攻击面理解，以及 HTTP 系统中的漏洞发现。

在我的路线图里，如果我选择 Web 安全或应用安全方向，它会很相关。它应该在基础网络、HTTP、JavaScript、Web 认证和常见漏洞类型之后再考虑。

## 为什么它和我的路线图有关

Web 应用是最常见攻击面之一。GWAPT 风格学习连接到：

- HTTP 和 HTTPS
- 浏览器行为
- 认证和会话管理
- 输入验证
- 访问控制
- 客户端和服务端漏洞
- Web finding 报告写作

这不只是“跑扫描器”。我需要理解请求、响应、状态和应用逻辑。

## 我应该学到什么

- Web 架构和 HTTP 基础。
- 认证、授权和会话管理。
- 注入类漏洞。
- XSS 和客户端问题。
- 访问控制弱点。
- 测试方法论和证据收集。
- 以修复为导向的报告。

## 我会怎么准备

1. 学 HTTP，直到能读 raw requests 和 responses。
2. 用 PortSwigger Web Security Academy、DVWA、Juice Shop 或类似授权实验练习。
3. 理解 cookies、sessions、CSRF tokens、headers。
4. 用自己的话记录每种漏洞模式。
5. 决定前对比 GWAPT 和其他 Web 安全学习路线。

## 练习想法

- 用代理抓 Web 流量，并解释每个请求。
- 在安全实验里练访问控制测试。
- 分别写 XSS、SQL injection、CSRF、SSRF 的短笔记。
- 把一个 Web lab 写成包含影响和修复建议的 finding。

## 初学者容易混的点

- Web testing 要先理解 application 怎么工作，不是随机点 payload。
- HTTP methods、headers、cookies、sessions、status codes 是这条路线的基础语言。
- authentication 和 authorization bug 不一样，我需要分别测试。
- finding 需要包含别人能复现的 reproduction steps。
- Web lab 是安全练习场。真实网站不是目标，除非我有授权。

## 小检查点

- 我能通过 Burp Suite proxy 流量，并解释每个 request。
- 我能识别 input 从哪里进入 application，output 在哪里出现。
- 我能在 lab 里测试简单 login flow、session cookie 和 access control rule。
- 我能用一个例子解释常见 OWASP-style vulnerabilities。
- 我能写出比单纯“sanitize input”更有用的 remediation。

## 决策记录

| 问题 | 我的答案 |
| --- | --- |
| 我是否专注 Web/app security？ | 待填写 |
| 我能否舒服地阅读 HTTP 流量？ | 待填写 |
| 哪些 Web 漏洞类型还让我困惑？ | 待填写 |
| 如果要考，目标日期 | 待填写 |

## 参考资料

- [GIAC GWAPT](https://www.giac.org/certifications/web-application-penetration-tester-gwapt)
