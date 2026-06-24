# 数据包分析

| 字段 | 内容 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | 网络知识 |
| 上次复习 | 待填写 |

## 为什么这个主题重要

数据包分析像是在看网络上的实际对话。日志告诉我系统选择记录了什么，而抓包能显示流量本身，至少显示其中可见的部分。

一开始 Wireshark 会让人头大，因为行数很多、颜色很多。初学目标不是看懂每个包。第一目标是找到简单东西：DNS 查询、TCP 握手、HTTP 请求、IP 地址、端口和时间。

## 什么是数据包

数据包是网络数据的小单位。

数据在网络上传输时会被拆成一块一块。每一块都有 headers，帮助设备投递和理解它。

初学者理解：

- Packet payload 是携带的数据。
- Packet headers 是关于如何投递或解释这些数据的信息。

安全角度：

数据包可能显示扫描、恶意软件通信、失败连接、可疑 DNS、数据传输等证据。

## 抓包文件

抓包会记录网络流量。

常见文件扩展名：

```text
.pcap
.pcapng
```

抓包可能包含：

- 源 IP
- 目的 IP
- 源端口
- 目的端口
- 协议
- 数据包时间
- 一些 payload 数据

加密流量会隐藏内容，但元数据仍然有用。

## Packet Sniffer vs Protocol Analyzer

这两个词很容易混。

Packet sniffer：

- 捕获流量。

Protocol analyzer：

- 按协议帮助解释捕获的流量。

Wireshark 实际上两件事都做：既能抓流量，也能帮助解析协议。

## Wireshark

Wireshark 是图形化数据包分析工具。

初学先学这些：

- 打开抓包文件。
- 在一个接口上开始抓包。
- 使用显示过滤器。
- Follow a TCP stream。
- 找 DNS 查询。
- 找 HTTP 请求。
- 查看包的详细字段。

重要提醒：

抓包可能包含敏感数据。不要随便分享 pcap，除非已经清理敏感信息。

## tcpdump

`tcpdump` 是命令行抓包工具。

例子：

```bash
sudo tcpdump -i eth0
sudo tcpdump -i eth0 host 8.8.8.8
sudo tcpdump -i eth0 port 53
sudo tcpdump -i eth0 -w capture.pcap
```

它们回答：

- 这个接口上能看到什么流量？
- 这台主机有没有和那个 IP 通信？
- 有没有 DNS 流量？
- 能不能保存流量之后分析？

初学者笔记：

选错接口是常见错误。我要确认哪个接口真的有流量。

## 接口

抓包时必须选择接口。

例子：

- Ethernet adapter
- WiFi adapter
- Loopback interface
- VPN adapter
- Virtual machine adapter

初学者错误：

在没活动的接口上抓包，然后以为没有流量。

## Wireshark 显示过滤器

显示过滤器控制 Wireshark 抓完后显示什么。

有用入门过滤器：

```text
dns
http
tcp
udp
ip.addr == 8.8.8.8
tcp.port == 443
udp.port == 53
```

重要说明：

显示过滤器不会从文件里删除包。它只改变我看到什么。

## Capture Filters vs Display Filters

Capture filter 决定什么会被抓下来。

Display filter 决定抓完后显示什么。

初学者规则：

学习时宁愿多抓一点，之后用显示过滤器筛。如果抓包时过滤太窄，可能错过有用证据。

## TCP 三次握手

TCP 连接通常用三次握手开始：

```text
SYN
SYN-ACK
ACK
```

初学者含义：

- 客户端请求开始。
- 服务器同意。
- 客户端确认。

为什么重要：

- 如果 SYN 发出去了，但没有 SYN-ACK 回来，服务器可能宕机、被过滤或不可达。
- 如果握手成功但应用失败，问题可能在 TCP 之上。

## 抓包里的 DNS

DNS 流量能显示设备尝试解析哪些名称。

过滤器例子：

```text
dns
```

要看：

- 查询名称
- 响应 IP
- 使用的 DNS 服务器
- NXDOMAIN 响应
- 反复出现的奇怪域名

安全角度：

可疑 DNS 可能是恶意软件、钓鱼或配置错误的线索。

## 抓包里的 HTTP

HTTP 如果没有 TLS 保护，就是明文。

过滤器：

```text
http
```

可能看到：

- Host header
- URL path
- User-Agent
- Status code
- 一些内容

安全提醒：

明文 HTTP 可能暴露敏感数据。这也是 HTTPS 重要的原因之一。

## HTTPS 和 TLS

HTTPS 流量被 TLS 加密。普通抓包里通常看不到完整网页内容。

但仍可能看到：

- IP 地址
- 端口
- TLS 握手细节
- 某些情况下的 Server Name Indication
- 证书信息
- 时间和大小模式

安全角度：

加密隐藏内容，但元数据仍然能帮助调查。

## 抓包里的 ARP

ARP 帮本地 IP 地址找到 MAC 地址。

过滤器：

```text
arp
```

安全角度：

ARP spoofing 会操纵本地网络地址映射。看到异常 ARP 行为可能是线索。

## 抓包里的 ICMP

ICMP 被 ping 这类工具使用。

过滤器：

```text
icmp
```

可以观察：

- Echo request
- Echo reply
- Destination unreachable

## 一个入门抓包练习

目标：

抓一次访问网站的流量，并识别基础内容。

步骤：

1. 在活动接口上启动 Wireshark。
2. 打开浏览器。
3. 访问 `https://example.com`。
4. 停止抓包。
5. 过滤 `dns`。
6. 找到 `example.com` 的查询。
7. 过滤 `tcp.port == 443`。
8. 找 TCP 握手。
9. 看 TLS 握手。
10. 只有在不包含敏感流量时才保存抓包。

## 清理抓包

分享 pcap 之前，要想想里面有没有：

- 内部 IP 地址
- 主机名
- 用户名
- Cookies
- Tokens
- 明文凭据
- 私有 URL
- 邮箱地址

初学者规则：

不要把随机抓包公开上传。

## 我容易忘的点

- Wireshark 显示过滤器不会删除包。
- Capture filter 在保存流量之前生效。
- 加密流量仍然有元数据。
- DNS 在调查里经常很有用。
- 选错接口会让抓包看起来是空的。
- pcap 可能包含敏感数据。

## 复习问题

- pcap 文件是什么？
- capture filter 和 display filter 有什么区别？
- TCP 三次握手是哪三步？
- DNS 流量能显示什么？
- HTTPS 内容加密后，为什么抓包仍可能有用？
- 为什么分享抓包前要清理敏感信息？

## 参考资料

- [Wireshark User's Guide](https://www.wireshark.org/docs/wsug_html_chunked/)
- [Wireshark Display Filters](https://wiki.wireshark.org/DisplayFilters)
- [tcpdump Manual Page](https://www.tcpdump.org/manpages/tcpdump.1.html)
- [Cloudflare: What is a packet?](https://www.cloudflare.com/learning/network-layer/what-is-a-packet/)
