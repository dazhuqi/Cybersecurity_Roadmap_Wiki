# 03 网络知识

网络是让很多安全概念不再神秘的一部分。当我更理解网络之后，日志、扫描、防火墙、VPN、DNS、Web 流量、抓包就不会像一堆随机词，而是能连在一起。

这个模块不是想让我立刻变成网络工程师。它的目标是建立足够的初学者理解：看到 IP 地址、端口、协议、抓包时，不至于慌。

## 学习顺序

1. [osi-and-tcp-ip.md](osi-and-tcp-ip.md)
2. [ip-addressing-subnetting.md](ip-addressing-subnetting.md)
3. [network-services.md](network-services.md)
4. [protocols-and-ports.md](protocols-and-ports.md)
5. [network-devices-topologies.md](network-devices-topologies.md)
6. [wireless-and-vpn.md](wireless-and-vpn.md)
7. [troubleshooting-tools.md](troubleshooting-tools.md)
8. [packet-analysis.md](packet-analysis.md)

我把 OSI/TCP-IP 模型放在最前面，因为它们像地图。IP 地址放后面，因为每次网络通信都需要地址。服务、协议、端口再往后。等基础概念有了，设备、无线、工具、抓包会更好理解。

## 对应路线图内容

这个文件夹对应路线图里的这些主题：

- 子网划分基础
- 公网 IP vs 私有 IP
- CIDR 和子网掩码
- VLAN、DMZ、ARP、NAT、DHCP、DNS、IP
- Router、Switch、VPN、LAN、WAN、WLAN
- 排错工具
- 网络协议
- 认证方法
- 常见端口
- SSL 和 TLS 基础
- NAS 和 SAN
- Packet Sniffers 和 Protocol Analyzers
- 无线安全基础

## 学完后我应该能解释什么

学完这个模块后，我应该能解释：

- 为什么网络模型有用。
- IP 地址是什么。
- 子网在初学者层面是什么。
- DNS、DHCP、NTP 做什么。
- 为什么协议会使用端口。
- 路由器、交换机、防火墙、VLAN、DMZ 是干什么的。
- WiFi 和 VPN 怎么和安全联系起来。
- 怎么使用基础网络排错命令。
- 抓包能看到什么。

## 我的学习方法

每个主题我会尽量写：

- 白话解释。
- 一个小例子。
- 安全角度。
- 相关命令或工具。
- 复习问题。

网络里很多词听起来相似。我不会假装它们显而易见。如果两个词容易混，我会直接写出区别。

## 完成检查表

- [ ] 我能解释 OSI 和 TCP/IP，不需要每个细节都背得完美。
- [ ] 我能识别私有 IP 地址。
- [ ] 我能用初学者语言解释 CIDR。
- [ ] 我能解释 DNS 和 DHCP。
- [ ] 我能把常见端口和服务对应起来。
- [ ] 我能解释路由器和交换机的区别。
- [ ] 我能运行基础网络排错命令。
- [ ] 我能打开抓包，找到 DNS 或 HTTP 流量。

## 参考资料

- [Cisco: Networking basics](https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html)
- [Cloudflare Learning Center: What is the OSI model?](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/)
- [Practical Networking: Subnetting](https://www.practicalnetworking.net/series/subnetting/subnetting/)
- [Wireshark User's Guide](https://www.wireshark.org/docs/wsug_html_chunked/)
