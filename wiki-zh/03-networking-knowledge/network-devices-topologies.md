# 网络设备和拓扑

| 字段 | 内容 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | 网络知识 |
| 上次复习 | 待填写 |

## 为什么这个主题重要

网络设备决定流量怎么移动。如果我不理解路由器、交换机、防火墙、VLAN、DMZ，网络图看起来就只是一些随机盒子和线。

对网络安全来说，网络形状非常重要。扁平网络更容易横向移动。分段网络可以拖慢攻击者，也让监控更清楚。

## 路由器

路由器连接不同网络。

家庭例子：

- 我的笔记本在家庭 LAN。
- 路由器把家庭 LAN 连接到 ISP/互联网。

初学者理解：

> 路由器帮助流量离开一个网络，到达另一个网络。

安全角度：

- 路由器是重要边界。
- 路由器管理界面应该保护好。
- 错误路由可能意外暴露网络。
- 小环境里路由器可能同时做 NAT 和防火墙。

## 交换机

交换机连接同一本地网络里的设备。

例子：

- 办公室台式机接到交换机。
- 服务器接到交换机。
- 家用路由器盒子里有交换机端口。

初学者理解：

> 交换机帮助本地设备互相通信。

安全角度：

- 如果谁都能插交换机端口，可能被滥用。
- VLAN 配置很重要。
- Port security 和 NAC 可以帮助控制接入。

## 防火墙

防火墙控制允许和阻止的流量。

防火墙可以是：

- 网络防火墙
- 主机防火墙
- 云安全组
- 下一代防火墙

初学者理解：

> 防火墙是执行流量策略的地方。

防火墙可能看：

- 源 IP
- 目的 IP
- 源端口
- 目的端口
- 协议
- 应用
- 用户

安全角度：

- 规则有意图时，防火墙才有用。
- “Allow any any” 基本等于没什么限制。
- 防火墙日志对调查很有用。

## 无线接入点

AP 提供 WiFi 接入。

初学者笔记：

家用“路由器”可能其实是很多功能在一个盒子里：

- Router
- Switch
- Firewall
- Access point
- DHCP server

这容易混，因为一个物理设备可以有多个网络角色。

## VLAN

VLAN 是 Virtual Local Area Network。它让同一套物理交换基础设施承载多个逻辑分离的网络。

例子：

- VLAN 10：员工
- VLAN 20：访客
- VLAN 30：服务器

初学者理解：

> VLAN 让设备即使接在同一台物理交换机上，也能在逻辑上分属不同本地网络。

安全角度：

- VLAN 帮助网络分段。
- 访客 WiFi 不应该和内部服务器在同一个 VLAN。
- VLAN 配置错误会破坏隔离。

## DMZ

DMZ 是 demilitarized zone。在网络里，它通常表示给需要从低信任网络访问的系统准备的独立区域。

例子：

- 公网 Web 服务器放在 DMZ。
- 内部数据库留在更严格防火墙后面。

初学者理解：

> DMZ 是外部世界和内部网络之间的缓冲区。

安全角度：

- 如果 DMZ 服务器被攻破，攻击者不应该自动进入内网。
- DMZ 和内部网络之间的防火墙规则要严格。

## NAT

NAT 是 Network Address Translation。流量经过设备时，它会改变 IP 地址信息。

家庭例子：

- 笔记本：`192.168.1.25`
- 路由器公网 IP：ISP 提供的公网地址
- 路由器让多个私有设备通过一个公网 IP 出去。

初学者笔记：

NAT 很常见，但 NAT 不是防火墙。

安全角度：

- NAT 会让内部设备不那么容易被直接访问。
- 端口转发会暴露内部服务。
- 我应该知道网络里转发了哪些端口。

## ACL

ACL 是 Access Control List。在网络里，它可以表示控制流量的规则列表。

例子：

```text
Allow internal network to reach DNS server on port 53.
Deny guest network from reaching server VLAN.
```

安全角度：

ACL 简单但很强。错误 ACL 可能阻断业务流量，也可能放行危险流量。

## 网络拓扑

拓扑是网络的形状或布局。

### 星型

设备连接到中心点。

例子：

- 多台办公室电脑连接到一台交换机。

优点：

- 容易理解。
- 一根线坏了通常只影响一台设备。

缺点：

- 中心设备很重要。

### 网状

设备之间有多条路径。

优点：

- 更有韧性。
- 流量可能有备用路径。

缺点：

- 更复杂。
- 设计和排错更难。

### 总线

设备共享一条主通信线路。

初学者笔记：

现代 LAN 里不太常见，但了解历史有帮助。

### 环型

设备连接成环。

初学者笔记：

在今天的基础家庭/办公室网络里也不常见，但会出现在网络历史和一些特殊设计里。

## 边界和分段

边界是可信和不可信区域之间的边界，比如内网和互联网之间。

分段是把内部网络拆成更小区域。

初学者错误：

以为“边界有防火墙，所以里面就安全”。如果攻击者已经进来了，内部网络分段仍然重要。

## 简单家庭网络图

```text
Internet
   |
ISP Modem/Router
   |
Home Router / WiFi
   |------ Laptop
   |------ Phone
   |------ Printer
   |------ Smart TV
```

安全问题：

- 路由器管理员密码改了吗？
- 访客 WiFi 是否隔离？
- IoT 设备是否隔离？
- 远程管理是否关闭？
- 固件是否更新？

## 简单办公室网络想法

```text
Internet
   |
Firewall
   |
Core Switch
   |------ User VLAN
   |------ Server VLAN
   |------ Guest VLAN
   |------ DMZ
```

具体设计会不同，但重点是分离。

## 我容易忘的点

- Router 连接网络。
- Switch 连接本地网络里的设备。
- 家用路由器盒子可能做很多事。
- VLAN 是逻辑隔离。
- DMZ 是缓冲区。
- NAT 不是防火墙。
- 攻击者进入内部后，分段仍然重要。

## 复习问题

- 路由器和交换机有什么区别？
- 访客 VLAN 为什么有用？
- DMZ 用来做什么？
- 端口转发为什么有风险？
- 防火墙规则通常看什么？
- 扁平网络为什么危险？

## 参考资料

- [Cisco: What is a network switch?](https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/network-switch-how.html)
- [Cloudflare: What is a router?](https://www.cloudflare.com/learning/network-layer/what-is-a-router/)
- [Cloudflare: What is a firewall?](https://www.cloudflare.com/learning/security/what-is-a-firewall/)
- [Cisco: What is a VLAN?](https://www.cisco.com/c/en/us/tech/lan-switching/virtual-lans-vlans/index.html)
