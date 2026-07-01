# CompTIA Network+

| 字段 | 内容 |
| --- | --- |
| 状态 | 未开始 |
| 目的 | 网络基础 |
| 官方网站 | [CompTIA Network+](https://www.comptia.org/en-us/certifications/network/) |
| 考试提供方 | [Pearson VUE CompTIA](https://www.pearsonvue.com/us/en/comptia.html) |

## 笔记

CompTIA Network+ 是厂商中立的网络认证。网络在安全里到处都出现：防火墙、扫描、VPN、DNS 日志、抓包、云网络、事件响应。

对我来说，Network+ 不只是证书名字，更像一个强迫自己系统学习网络的框架。

## 为什么它和我的路线图有关

如果我解释不了 IP、端口、DNS、路由和基础排错，很多安全主题就会像随机命令。Network+ 风格学习可以支持：

- `03-networking-knowledge`
- 基础 SOC 调查
- 防火墙和 VPN 概念
- 漏洞扫描
- Web 安全基础
- 数据包分析

## 我应该学到什么

- OSI 和 TCP/IP 模型。
- IP 地址、子网掩码、CIDR、公网/私有地址。
- DNS、DHCP、NAT、NTP、VLAN、VPN、无线基础。
- 常见端口和协议。
- 交换机、路由器、防火墙、AP 等网络设备。
- `ping`、`traceroute`、`nslookup`、`dig`、`ipconfig`、`ip`、`ss`、`nmap` 等排错工具。

## 我会怎么准备

1. 完成 `03-networking-knowledge` 笔记。
2. 画自己的家庭或实验网络图，标出设备、IP、网关。
3. 练子网，直到 `/24`、`/25`、`/26` 和私有地址不再吓人。
4. 理解服务后再背常见端口。
5. 用 Wireshark 看 DNS、TCP、HTTP、TLS。

## 实操练习

- 找自己的 IP、网关、DNS、路由表。
- 用 `nslookup` 或 `dig` 对比 DNS 结果。
- 用 `traceroute` 或 `tracert` 并解释输出。
- 抓一次访问网站的流量，识别 DNS 和 TCP/TLS。
- 搭一个小 VM 网络，测试 NAT 和 host-only。

## 初学者容易混的点

- IP address 用来标识主机或网络，MAC address 更偏本地链路，不要把它们当成同一种东西。
- DNS 是把名字解析成地址，不是负责真正传输流量的东西。
- DHCP 给客户端分配配置。它和 DNS 不一样，虽然它们经常一起出现在“为什么上不了网”的问题里。
- switch 主要在 LAN 里工作，router 连接不同网络，firewall 根据规则决定流量能不能过。
- subnetting 一开始很烦，但本质上是在拆分地址空间，并判断什么算本地网络。

## 小检查点

- 我能解释 OSI model，而不只是背七个词。
- 我能算几个常见 CIDR 范围，不至于一看到就慌。
- 我能用 Wireshark 在实验流量里找到 DNS、TCP handshake、HTTP 或 TLS。
- 我能画出家里网络，并标出 modem、router、switch、access point 和 clients。
- 我能按 link、IP address、gateway、DNS、routing 的顺序排查“没网”。

## 决策记录

| 问题 | 我的答案 |
| --- | --- |
| 我需要证书，还是只需要知识？ | 待填写 |
| 哪些网络主题还很弱？ | 待填写 |
| 我能不能不靠猜来排错？ | 待填写 |
| 如果要考，目标日期 | 待填写 |

## 参考资料

- [CompTIA Network+](https://www.comptia.org/en-us/certifications/network/)
- [Pearson VUE: CompTIA](https://www.pearsonvue.com/us/en/comptia.html)
