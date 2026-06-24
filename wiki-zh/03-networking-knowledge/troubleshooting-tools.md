# 网络排错工具

| 字段 | 内容 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | 网络知识 |
| 上次复习 | 待填写 |

## 为什么这个主题重要

网络排错工具能让我回答小问题，而不是乱猜。互联网不能用时，我不应该立刻说“网络挂了”。我需要找出是哪一部分失败：本地 IP、网关、DNS、路由、端口、服务、防火墙，还是别的东西。

初学者错误是随机运行命令，却不知道输出是什么意思。这里的目标是把每个工具和它回答的问题连起来。

## 我的排错流程

当设备到不了某个目标时，我可以从简单到具体：

1. 我有没有网络连接？
2. 我有没有 IP 地址？
3. 我有没有默认网关？
4. 能不能到达网关？
5. 能不能到达公网 IP？
6. DNS 工作吗？
7. 路由奇怪吗？
8. 目标端口开着吗？
9. 应用有响应吗？

这个流程不完美，但能阻止我一上来就跳到复杂解释。

## `ping`

`ping` 使用 ICMP 测试基础可达性。

例子：

```bash
ping 8.8.8.8
ping example.com
```

Windows：

```powershell
ping 8.8.8.8
```

它回答：

- 我能不能在基础网络层面到达这个主机？
- 有没有丢包？
- 响应时间多长？

初学者笔记：

- 如果 `ping 8.8.8.8` 可以，但 `ping example.com` 不行，DNS 可能有问题。
- ping 失败不总是表示主机宕机。有些系统会阻止 ICMP。
- ping 有用，但不是最终证明。

安全角度：

- ICMP 可能被防火墙拦截。
- ping sweep 可以用于发现主机。
- 防御者可能在网络日志里看到 ICMP 活动。

## `traceroute` 和 `tracert`

Traceroute 显示流量到目标的大致路径。

Linux/macOS：

```bash
traceroute example.com
```

Windows：

```powershell
tracert example.com
```

它回答：

- 我和目标之间有哪些 hops？
- 流量似乎停在哪里？
- 路径是否异常长或奇怪？

初学者笔记：

- 有些 hop 不回应。
- 星号不一定表示路线坏了。
- 最终目标是否回应，可能比中间某个 silent hop 更重要。

安全角度：

- Traceroute 可能暴露网络路径。
- 攻击者可以用路径信息做侦察。
- 防御者可以用它理解路由问题。

## `ipconfig`

`ipconfig` 常用于 Windows。

例子：

```powershell
ipconfig
ipconfig /all
ipconfig /release
ipconfig /renew
ipconfig /flushdns
```

它回答：

- 我有什么 IP 地址？
- 子网掩码是什么？
- 默认网关是什么？
- 使用哪些 DNS 服务器？
- DHCP 是否给了设置？

初学者笔记：

- `ipconfig /all` 信息更详细。
- `ipconfig /renew` 会向 DHCP 请求新租约。
- `ipconfig /flushdns` 清除本地 DNS 缓存。

安全角度：

- 错误 DNS 服务器可能可疑。
- 意外网络适配器可能来自 VPN、虚拟化，也可能来自恶意软件。

## `ip`

`ip` 常用于 Linux。

例子：

```bash
ip addr
ip route
ip link
```

它回答：

- 有哪些接口？
- 分配了哪些 IP 地址？
- 有哪些路由？
- 接口是 up 还是 down？

初学者笔记：

- `ip addr` 像是在查地址。
- `ip route` 像是在查流量往哪里走。
- 默认路由特别重要。

## `route`

Route 命令显示路由表信息。

Windows：

```powershell
route print
```

Linux：

```bash
ip route
```

macOS：

```bash
netstat -rn
```

它回答：

- 默认情况下流量往哪里走？
- 某些网络有没有特殊路由？
- 默认网关是否设置？

初学者笔记：

如果没有默认路由，机器可能不知道怎么到达外部网络。

## `arp`

ARP 把本地网络里的 IP 地址映射到 MAC 地址。

例子：

```bash
arp -a
```

Windows：

```powershell
arp -a
```

它回答：

- 本地 IP 地址对应哪些 MAC 地址？
- 这台机器最近和哪些本地设备通信过？

安全角度：

- ARP spoofing 可以重定向本地流量。
- 奇怪 ARP 条目可能是线索，但需要上下文。

初学者笔记：

ARP 是本地的。它不是用来查整个互联网的 MAC 地址。

## `netstat`

`netstat` 显示网络连接和监听端口。

Windows：

```powershell
netstat -ano
```

Linux/macOS：

```bash
netstat -an
```

它回答：

- 有哪些连接？
- 本地哪些端口在监听？
- Windows 上 `-o` 可以看到相关 PID。

初学者笔记：

Linux 上现在很多时候更推荐 `ss`，但很多教程仍会出现 `netstat`。

## `ss`

`ss` 是 Linux 上查看 socket 信息的工具。

例子：

```bash
ss -tulpen
ss -tan
```

它回答：

- 哪些 TCP/UDP 端口在监听？
- 有哪些连接？
- 如果权限允许，哪个进程拥有 socket？

安全角度：

- 监听端口显示本机暴露的服务。
- 意外监听端口值得调查。

## `nslookup`

`nslookup` 查询 DNS。

例子：

```bash
nslookup example.com
nslookup example.com 8.8.8.8
```

它回答：

- 名称能否解析？
- 解析到哪个 IP？
- 换一个 DNS 服务器答案是否不同？

初学者笔记：

如果域名查询失败，但直接访问 IP 可以，DNS 是强嫌疑。

## `dig`

`dig` 是常见 DNS 查询工具，在 Linux/macOS 上常见，很多系统也能安装。

例子：

```bash
dig example.com
dig example.com A
dig example.com MX
dig +short example.com
```

它回答：

- 有哪些 DNS 记录？
- 哪个 resolver 回答了？
- 查询花了多久？

安全角度：

- DNS 记录可能暴露基础设施。
- MX 记录显示邮件服务器。
- TXT 记录可能显示 SPF、DKIM 或验证数据。

## `curl`

`curl` 可以从命令行发网络请求。

例子：

```bash
curl -I https://example.com
curl -v https://example.com
```

它回答：

- 能不能到达 Web 服务？
- 返回什么 HTTP 状态码？
- 能不能看到 headers？
- TLS 协商是否正常？

初学者笔记：

`curl -I` 只请求 headers，适合快速检查。

## `nmap`

`nmap` 是网络扫描工具。

例子：

```bash
nmap <target>
nmap -sV <target>
```

它回答：

- 哪些端口看起来开放？
- 可能运行什么服务？
- 暴露了什么版本？

重要安全提醒：

只扫描自己拥有或明确获准测试的系统。随便扫描别人的系统不可以。

安全角度：

- 攻击者用扫描器做侦察。
- 防御者用扫描器做资产发现和验证。
- 扫描结果需要验证，因为 banner 可能误导。

## 一个简单排错例子

问题：

```text
Browser cannot open example.com.
```

步骤：

```text
1. ipconfig /all or ip addr
2. ping default gateway
3. ping 8.8.8.8
4. nslookup example.com
5. curl -I https://example.com
6. traceroute/tracert example.com
```

可能结论：

- 没有 IP 地址：DHCP 或接口问题。
- 网关不可达：本地网络问题。
- 公网 IP 可达但 DNS 失败：DNS 问题。
- DNS 正常但 HTTPS 失败：端口、防火墙、TLS 或应用问题。

## 我容易忘的点

- Ping 失败不总是表示主机宕机。
- DNS 可能在互联网路径正常时失败。
- 监听端口不一定坏，但代表暴露。
- `nmap` 需要权限。
- 路由解释流量往哪里走。
- ARP 是本地网络行为。

## 复习问题

- `ping` 测试什么？
- 为什么主机在线时 ping 也可能失败？
- `ipconfig /all` 显示什么？
- `nslookup` 和 `dig` 有什么区别？
- 为什么 `ss -tulpen` 有用？
- 为什么要谨慎使用 `nmap`？

## 参考资料

- [Microsoft: ipconfig](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig)
- [Microsoft: tracert](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert)
- [Nmap Reference Guide](https://nmap.org/book/man.html)
- [curl Documentation](https://curl.se/docs/)
- [Linux ip command man page](https://man7.org/linux/man-pages/man8/ip.8.html)
