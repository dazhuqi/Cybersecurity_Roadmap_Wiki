# 网络服务

| 字段 | 内容 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | 网络知识 |
| 上次复习 | 待填写 |

## 为什么这个主题重要

网络服务像是让网络好用的“辅助系统”。没有它们，用户可能要手动记 IP 地址、手动配置网络设置、用很麻烦的方式管理认证。

一开始我以为网络就是路由器、交换机、IP 地址。但 DNS、DHCP 这些服务同样重要，因为它们坏了的时候，用户会觉得“全部都坏了”。

## DNS

DNS 是 Domain Name System。它把名字转换成 IP 地址。

例子：

```text
example.com -> 93.184.216.34
```

人喜欢名字，计算机路由用地址。

### 常见 DNS 记录类型

| 记录 | 含义 |
| --- | --- |
| A | 名称到 IPv4 地址 |
| AAAA | 名称到 IPv6 地址 |
| CNAME | 指向另一个名称的别名 |
| MX | 域名的邮件服务器 |
| TXT | 文本数据，常用于验证或邮件安全 |
| NS | 域名的名称服务器 |

### DNS 排错

命令：

```bash
nslookup example.com
dig example.com
dig example.com MX
```

初学者线索：

如果连接 `8.8.8.8` 可以，但 `example.com` 解析不了，DNS 可能有问题。

### DNS 安全角度

DNS 对防御者很有用，因为它能显示系统尝试联系哪些域名。

安全例子：

- 恶意软件可能用 DNS 找命令控制服务器。
- 钓鱼网站依赖域名。
- DNS tunneling 可以把数据藏进 DNS 查询。
- 可疑的新注册域名可能是调查线索。

## DHCP

DHCP 是 Dynamic Host Configuration Protocol。它自动给设备分配网络设置。

DHCP 可以提供：

- IP 地址
- 子网掩码
- 默认网关
- DNS 服务器
- 租约时间

没有 DHCP 时，设备可能需要手动配置。

### DHCP 租约

DHCP lease 是临时的。设备获得一个地址一段时间，之后会续租。

初学者例子：

我的笔记本加入 WiFi，路由器给它 `192.168.1.25`。这个地址是租来的，不是永远属于它。

### DHCP 排错

可能症状：

- 设备没有 IP 地址。
- 设备拿到 `169.254.x.x`。
- 设备拿到错误网关。
- 两台设备似乎地址冲突。

有用命令：

Windows：

```powershell
ipconfig /all
ipconfig /release
ipconfig /renew
```

Linux：

```bash
ip addr
```

安全角度：

- Rogue DHCP server 可以发放错误网络设置。
- DHCP 日志能帮助确认设备什么时候加入网络。

## NTP

NTP 是 Network Time Protocol。它让系统时间保持同步。

这听起来很无聊，但非常重要。

时间同步为什么重要：

- 日志需要准确时间戳。
- 认证系统可能依赖时间。
- 证书有有效期。
- 事件时间线需要正确时间。

安全角度：

如果系统时间错了，调查会变难。事件看起来可能像按错误顺序发生。

## IPAM

IPAM 是 IP Address Management，用来追踪 IP 地址使用情况的流程或工具。

初学者版本：

IPAM 像地址地图或资产清单。

它可以追踪：

- 有哪些子网
- 哪些 IP 被使用
- 哪个设备拥有某个地址
- 保留地址
- DHCP 作用域

安全角度：

如果我不知道哪些 IP 属于自己的环境，就更难识别未知设备。

## Kerberos

Kerberos 是认证协议，Windows Active Directory 环境里很常见。

非常简化的理解：

- 用户登录。
- Kerberos 发放 tickets。
- 这些 tickets 让用户访问服务，而不用到处发送密码。

初学者笔记：

Kerberos 会让人感觉复杂。现在我只需要知道它和认证、ticket 有关。

安全角度：

- Kerberos 有相关攻击，比如 Kerberoasting。
- 时间同步对 Kerberos 很重要。
- ticket 滥用在 Windows 域事件里很重要。

## RADIUS

RADIUS 常用于网络访问的集中认证。

例子：

- VPN 登录
- 企业 WiFi 认证
- 网络设备管理员登录

初学者版本：

RADIUS 帮设备问中心服务器：“这个用户可以进来吗？”

安全角度：

集中认证更容易管理，但中心服务会变成重要基础设施。

## LDAP

LDAP 是访问目录信息的协议。

目录信息例子：

- 用户
- 组
- 邮箱地址
- 组织单元

Active Directory 可以通过 LDAP 查询。

初学者笔记：

LDAP 不只是“登录”。它更像向目录询问信息。

安全角度：

- 目录数据能暴露用户、组和组织结构。
- 匿名或过宽的 LDAP 访问可能泄露对攻击者有用的信息。

## SSO

SSO 是 Single Sign-On。它让用户登录一次后访问多个服务。

好处：

- 少记几个密码。
- 集中访问控制。
- 离职关闭访问更容易。

风险：

- 如果 SSO 账号被攻破，很多服务可能一起暴露。
- MFA 非常重要。
- 会话安全很重要。

## 这些服务怎么配合

一个办公室登录流程例子：

1. 设备从 DHCP 获取网络设置。
2. 设备用 DNS 找服务。
3. 时间通过 NTP 同步。
4. 用户通过 SSO、Kerberos、LDAP 或其他身份系统认证。
5. 日志带着时间戳记录发生了什么。

其中一个服务坏了，其他很多东西也会跟着坏。

## 小练习

- [ ] 对一个域名运行 `nslookup` 或 `dig`。
- [ ] 找到本地 DNS 服务器设置。
- [ ] 检查本地 IP 和 DHCP 信息。
- [ ] 查系统使用的 NTP 服务器。
- [ ] 用一句话区分 Kerberos、LDAP、RADIUS、SSO。

## 我容易忘的点

- DNS 是名字到地址。
- DHCP 自动给网络设置。
- NTP 重要，因为日志需要正确时间。
- LDAP 是目录访问，不完全等同于认证。
- SSO 很方便，但让一个账号的保护更重要。
- Kerberos 使用 tickets。

## 复习问题

- DNS 做什么？
- DHCP 可以提供哪些设置？
- 为什么 NTP 对事件响应重要？
- IPAM 用来做什么？
- LDAP 和 SSO 有什么不同？
- RADIUS 可能用在哪里？

## 参考资料

- [Cloudflare: What is DNS?](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [Microsoft: DHCP overview](https://learn.microsoft.com/en-us/windows-server/networking/technologies/dhcp/dhcp-top)
- [NTP.org Documentation](https://www.ntp.org/documentation/)
- [Microsoft: Kerberos authentication overview](https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview)
- [Microsoft: LDAP overview](https://learn.microsoft.com/en-us/windows/win32/adsi/ldap)
