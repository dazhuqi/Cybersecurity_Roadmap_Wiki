# 协议和端口

| 字段 | 内容 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | 网络知识 |
| 上次复习 | 待填写 |

## 为什么这个主题重要

协议和端口能让我把“网络流量”和具体服务联系起来。如果我看到端口 `22`，应该想到 SSH。如果看到端口 `443`，应该想到 HTTPS。这不能说明全部真相，但至少给我一个起点。

对网络安全来说，开放端口很重要，因为它们常常显示哪些服务可以被访问。可以被访问的服务就可能成为攻击面。

## 什么是协议

协议是一组通信规则。

初学者例子：

- HTTP 规定浏览器和 Web 服务器怎么说话。
- DNS 规定客户端和解析器怎么查询名称。
- SSH 规定客户端和服务器怎么进行安全远程登录。

没有协议，设备可能连上了，但彼此听不懂。

## 什么是端口

端口是一个数字，用来标识主机上的服务或应用。

例子：

```text
192.168.1.10:22
```

意思是：

- 主机：`192.168.1.10`
- 端口：`22`

如果 IP 像楼的地址，端口就像楼里具体的房间或服务窗口。

## TCP 和 UDP

端口主要和传输层协议一起使用，最常见是 TCP 和 UDP。

### TCP

TCP 是面向连接的。它试图让通信可靠。

初学者理解：

- 建立连接。
- 跟踪传递。
- 丢了会重传。
- 适合可靠性重要的场景。

例子：

- HTTP/HTTPS
- SSH
- FTP
- RDP

### UDP

UDP 是无连接的。它更轻量，不像 TCP 那样保证传递。

初学者理解：

- 不像 TCP 那样完整建立连接。
- 更快、更简单。
- 如果应用在意丢包，应用自己处理。

例子：

- DNS 经常使用 UDP。
- NTP 使用 UDP。
- 一些 VPN 使用 UDP。
- 流媒体和语音流量可能使用 UDP。

## 常见端口

| 端口 | 协议 | 常见用途 | 初学者备注 |
| --- | --- | --- | --- |
| 20/21 | FTP | 文件传输 | 老协议，如果没保护通常不安全 |
| 22 | SSH | 安全远程登录 | Linux 服务器很常见 |
| 23 | Telnet | 远程登录 | 明文不安全，尽量避免 |
| 25 | SMTP | 邮件传输 | 邮件服务器之间常用 |
| 53 | DNS | 名称解析 | 经常 UDP，有时 TCP |
| 67/68 | DHCP | 自动网络配置 | 客户端获取 IP 设置 |
| 80 | HTTP | Web 流量 | 明文 Web |
| 110 | POP3 | 邮件获取 | 较老的邮件获取协议 |
| 123 | NTP | 时间同步 | 对准确日志很重要 |
| 143 | IMAP | 邮件访问 | 邮箱访问 |
| 389 | LDAP | 目录访问 | 企业身份环境常见 |
| 443 | HTTPS | 加密 Web 流量 | 非常常见 |
| 445 | SMB | Windows 文件共享 | 内网高价值协议 |
| 636 | LDAPS | LDAP over TLS | 加密 LDAP |
| 993 | IMAPS | IMAP over TLS | 加密邮箱访问 |
| 995 | POP3S | POP3 over TLS | 加密 POP3 |
| 3389 | RDP | Windows Remote Desktop | 暴露不当很危险 |

## 安全和不安全协议

有些协议明文传输数据，有些会加密通信。

例子：

| 不安全或较旧 | 更安全替代 |
| --- | --- |
| HTTP | HTTPS |
| FTP | SFTP 或 FTPS |
| Telnet | SSH |
| LDAP | LDAPS |
| POP3 | POP3S |
| IMAP | IMAPS |

初学者笔记：

加密不等于一定安全。它表示传输过程被保护，但服务器、账号或应用本身仍可能不安全。

## HTTP 和 HTTPS

HTTP 是 Web 通信协议。HTTPS 是被 TLS 保护的 HTTP。

主要区别：

- HTTP：明文
- HTTPS：加密，并使用证书

安全角度：

- HTTP 可能暴露凭据或敏感数据。
- HTTPS 帮助保护传输中的机密性和完整性。
- 证书警告不应该随便忽略。

## SSH

SSH 用于安全远程管理。

常见使用：

```bash
ssh user@server
```

安全角度：

- SSH 应该使用强认证。
- 暴露到互联网的密码登录有风险。
- SSH keys 必须保护好。
- 失败 SSH 尝试在日志里很常见。

## RDP

RDP 是 Windows Remote Desktop。

安全角度：

- 暴露的 RDP 是常见攻击目标。
- 弱密码很危险。
- RDP 通常应该放在 VPN 或其他访问控制之后。
- MFA 和账号锁定有帮助。

## FTP 和 SFTP

FTP 用于传输文件，但比较老，也可能不安全。

SFTP 使用 SSH 进行安全文件传输。

初学者笔记：

SFTP 不只是“FTP 多一个字母”。它是基于 SSH 的另一个安全文件传输协议。

## SMB

SMB 用于 Windows 文件共享和其他网络文件操作。

安全角度：

- SMB 在 Windows 网络内部非常常见。
- 暴露 SMB 很危险。
- 旧 SMB 版本出现过严重漏洞。
- 文件共享权限很重要。

## TLS 和证书

TLS 帮助加密流量，并通过证书证明服务器身份。

初学者理解：

- 浏览器检查证书。
- 浏览器和服务器协商加密。
- 流量不容易被读取或篡改。

安全角度：

- 过期或无效证书会破坏信任。
- 攻击者也可以使用 HTTPS，所以 HTTPS 不等于网站一定好。

## 安全工作里怎么看端口

看到开放端口时，我应该问：

- 这里应该有什么服务？
- 这个服务需要吗？
- 它是内部暴露还是公网暴露？
- 是否打了补丁？
- 是否需要认证？
- 流量是否加密？
- 是否有日志？

## 基础命令

Windows：

```powershell
netstat -ano
Get-NetTCPConnection
```

Linux：

```bash
ss -tulpen
nmap -sV <target>
```

初学者提醒：

只扫描自己拥有或明确获准测试的系统。

## 我容易忘的点

- 端口号提示服务，但不能证明服务。
- TCP 和 UDP 不一样。
- HTTPS 保护流量，但恶意网站也可以用 HTTPS。
- RDP 和 SMB 不应该随便暴露。
- 开放端口不一定坏，但它是攻击面。

## 复习问题

- 端口是什么？
- TCP 和 UDP 有什么区别？
- 为什么 Telnet 不安全？
- HTTPS 为什么比 HTTP 更安全？
- 端口 22 常见是什么服务？
- 为什么暴露 RDP 要谨慎？

## 参考资料

- [IANA: Service Name and Transport Protocol Port Number Registry](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml)
- [Cloudflare: What is HTTPS?](https://www.cloudflare.com/learning/ssl/what-is-https/)
- [OpenSSH Manual Pages](https://www.openssh.com/manual.html)
- [Microsoft Learn: Remote Desktop Services](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/welcome-to-rds)
