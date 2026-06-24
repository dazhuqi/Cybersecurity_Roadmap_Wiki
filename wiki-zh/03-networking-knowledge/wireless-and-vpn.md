# 无线网络和 VPN

| 字段 | 内容 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | 网络知识 |
| 上次复习 | 待填写 |

## 为什么这个主题重要

无线网络很方便，也正因为方便，所以对安全很重要。网线至少限制了连接位置，而 WiFi 通过空气连接设备。这很有用，但也让网络边界没那么明显。

VPN 也很容易被误解。VPN 在某些情况下可以保护流量，也能提供远程访问，但它不会神奇地让一切都安全。

## WiFi

WiFi 是基于 IEEE 802.11 标准的无线网络。它让设备不用 Ethernet 线也能连接。

初学者笔记：

- WiFi 使用无线电信号。
- 家庭 WiFi 通常来自路由器或 AP。
- 设备加入的网络名叫 SSID。
- WiFi 常用 2.4 GHz、5 GHz，有时还有 6 GHz 频段。

## 2.4 GHz vs 5 GHz

简单对比：

| 频段 | 初学者备注 |
| --- | --- |
| 2.4 GHz | 覆盖更远，更拥挤，通常更慢 |
| 5 GHz | 覆盖更短，通常更快，较不拥挤 |
| 6 GHz | 更新，WiFi 6E/7 设备使用，容量更大 |

墙、距离、干扰、设备支持都会影响实际效果。

## SSID

SSID 是用户能看到的 WiFi 网络名称。

例子：

```text
Home-WiFi
Guest-WiFi
Company-WiFi
```

安全角度：

- 熟悉的 SSID 可以被攻击者复制。
- 隐藏 SSID 不是强安全。
- 访客 SSID 应该和内部网络分开。

## WPA、WPA2、WPA3 和 WEP

这些是 WiFi 安全标准。

### WEP

WEP 很老，也不安全。我应该把它当成已经坏掉。

### WPA

WPA 比 WEP 改进了，但现在也老了。

### WPA2

WPA2 仍然很常见。WPA2-Personal 使用共享密码。WPA2-Enterprise 使用集中认证，常常配合 RADIUS。

### WPA3

WPA3 更新，在多个方面增强安全。

初学者规则：

使用 WPA2 或 WPA3，不要使用 WEP。

## 个人 WiFi 和企业 WiFi

### Personal

所有人使用同一个 WiFi 密码。

例子：

- 家庭网络
- 小办公室

风险：

- 一个人分享密码后，很多人都可能知道。
- 要撤销访问，通常要改共享密码。

### Enterprise

用户单独认证，通常通过集中身份系统。

例子：

- 公司 WiFi
- 大学 WiFi

好处：

- 可以禁用单个账号。
- 访问可以更集中地记录和控制。

## WPS

WPS 是 Wi-Fi Protected Setup，设计目的是让加入 WiFi 更简单。

初学者笔记：

方便功能有时会带来风险。

安全角度：

- WPS PIN 方法曾有安全问题。
- 很多安全指南建议不用就关掉 WPS。

## Rogue Access Point

Rogue AP 是未经授权接入网络的无线接入点。

例子：

有人在办公室里私自插了一个便宜 WiFi 路由器。

安全风险：

- 可能绕过正常网络控制。
- 配置可能很差。
- 可能给攻击者或外部人员进入网络的路径。

## Evil Twin

Evil Twin 是伪装成合法网络的恶意 WiFi。

例子：

真实网络：

```text
CoffeeShop-WiFi
```

假网络：

```text
CoffeeShop-WiFi
```

安全风险：

- 用户可能连到假网络。
- 攻击者可能抓流量或展示假登录页。

## Deauthentication 攻击

Deauthentication 攻击试图把客户端从 WiFi 网络踢下线。

攻击者可能这么做是为了：

- 强迫用户重新连接。
- 把用户推向 evil twin。
- 干扰服务。

初学者笔记：

无线攻击只能在授权环境测试。

## VPN

VPN 是 Virtual Private Network。它在设备和 VPN 端点之间创建加密隧道。

常见用途：

- 远程员工访问公司网络
- 在不可信 WiFi 上保护流量
- 连接分支办公室
- 访问内部服务

## VPN 做什么

VPN 可以：

- 加密客户端和 VPN 服务器之间的流量。
- 让远程设备看起来像连接到了另一个网络。
- 通过受控端点路由流量。

## VPN 不做什么

VPN 不会自动：

- 让恶意软件变安全。
- 让钓鱼攻击不可能发生。
- 保护流量离开 VPN 服务器之后的一切。
- 修复弱密码。
- 替代终端安全。

初学者错误：

以为“VPN 开着”就等于“安全”。这取决于威胁和 VPN 配置。

## Split Tunnel vs Full Tunnel

### Full Tunnel

所有流量都经过 VPN。

优点：

- 更集中控制。
- 更容易监控流量。

缺点：

- VPN 基础设施负载更高。
- 可能让流量变慢。

### Split Tunnel

只有一部分流量走 VPN，其他流量直接访问互联网。

优点：

- VPN 负载更低。
- 普通浏览可能更快。

缺点：

- 集中可见性更低。
- 策略更复杂。

## 无线和 VPN 安全检查表

- [ ] 使用 WPA2 或 WPA3。
- [ ] 避免 WEP。
- [ ] 使用强 WiFi 密码。
- [ ] 不需要时关闭 WPS。
- [ ] 访客 WiFi 和内部系统隔离。
- [ ] 更新路由器/AP 固件。
- [ ] 注意未知 AP。
- [ ] 在不可信网络上按需使用 VPN。
- [ ] 不要以为 VPN 解决所有安全问题。

## 我容易忘的点

- WiFi 安全取决于配置，不只是信号。
- 隐藏 SSID 不是真正保护。
- 访客 WiFi 应该隔离。
- WPS 可能有风险。
- VPN 保护一段路径，不保护整个宇宙。
- Evil twin 攻击利用用户对网络名的信任。

## 复习问题

- WEP 为什么不安全？
- WPA2-Personal 和 WPA2-Enterprise 有什么区别？
- 什么是 evil twin 攻击？
- 为什么访客 WiFi 要隔离？
- VPN 隧道保护什么？
- split tunnel 和 full tunnel 有什么区别？

## 参考资料

- [Wi-Fi Alliance: Security](https://www.wi-fi.org/discover-wi-fi/security)
- [Cloudflare: What is a VPN?](https://www.cloudflare.com/learning/access-management/what-is-a-vpn/)
- [CISA: Securing Wireless Networks](https://www.cisa.gov/news-events/news/securing-wireless-networks)
- [HowStuffWorks: How WiFi works](https://computer.howstuffworks.com/wireless-network.htm)
