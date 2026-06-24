# OSI 和 TCP/IP 模型

| 字段 | 内容 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | 网络知识 |
| 上次复习 | 待填写 |

## 为什么这个主题重要

网络模型像地图。它们不会展示真实世界所有混乱细节，但能帮我整理问题可能发生在哪一层。

学这个之前，我听到 “Layer 3 issue” 或 “Layer 7 traffic” 会觉得像黑话。OSI 模型让这些说法没那么吓人，因为它给通信的不同部分起了名字。

## 基本概念

两台电脑通信时，会发生很多事：

- 用户和应用交互。
- 数据可能被加密。
- 连接可能被建立。
- 使用 IP 地址。
- 帧在本地网络硬件中移动。
- 比特通过网线或无线电波传输。

OSI 模型把这些拆成七层。TCP/IP 模型把类似想法合并成更少的层。

## OSI 模型

OSI 模型有七层：

| 层 | 名称 | 初学者理解 |
| --- | --- | --- |
| 7 | Application | 用户或应用想做什么 |
| 6 | Presentation | 数据格式、编码、加密这些概念 |
| 5 | Session | 管理会话或对话 |
| 4 | Transport | 端到端通信、端口、TCP/UDP |
| 3 | Network | IP 地址和路由 |
| 2 | Data Link | 本地网络传递、MAC 地址 |
| 1 | Physical | 网线、无线、电信号/光信号 |

一开始不需要完美分类所有东西。我需要先知道每层大概负责什么。

## Layer 1: Physical

这是实际信号。

例子：

- Ethernet 网线
- 光纤
- WiFi 无线信号
- 电信号
- 光信号

这一层的问题：

- 网线没插
- 线坏了
- WiFi 信号弱
- 端口坏了
- 电源问题

初学者线索：

如果设备连 link 或信号都没有，先从底层查。

## Layer 2: Data Link

这一层处理本地网络通信。

例子：

- Ethernet frames
- MAC addresses
- Switches
- VLANs
- ARP

这一层的问题：

- VLAN 错了
- MAC 地址冲突
- 交换机端口问题
- ARP 问题

安全角度：

- ARP spoofing 和 VLAN hopping 都和本地网络行为有关。
- 交换机大量工作在 Layer 2。

## Layer 3: Network

这一层处理 IP 地址和路由。

例子：

- IPv4
- IPv6
- Routers
- ICMP
- Subnets

这一层的问题：

- IP 地址错误
- 子网掩码错误
- 缺少默认网关
- 路由问题

安全角度：

- 防火墙经常根据 IP 地址做决定。
- 网络分段依赖 Layer 3 设计。

## Layer 4: Transport

这一层通过端口处理进程之间的通信。

例子：

- TCP
- UDP
- Port numbers

TCP 是面向连接的，更重视可靠性。UDP 是无连接的，更轻量。

这一层的问题：

- 端口被拦截
- 服务没监听
- TCP 握手失败
- 防火墙规则拦截流量

安全角度：

- 端口扫描寻找可访问服务。
- 开放端口增加攻击面。
- TCP 和 UDP 在扫描、排错时表现不同。

## Layer 5: Session

这一层和管理会话或对话有关。

初学者笔记：

真实 TCP/IP 讨论里，这一层经常不会被单独分得很清楚。我知道它存在就好，不需要因为工具里看不到“session layer”就慌。

例子：

- 登录会话
- 连接状态
- 会话建立和结束的概念

## Layer 6: Presentation

这一层关注数据怎么表示。

例子：

- 编码
- 压缩
- 加密
- 文件/数据格式

初学者笔记：

TLS 加密经常会在这个附近被讨论，虽然真实映射不总是完美整齐。

## Layer 7: Application

这是最接近用户和应用的一层。

例子：

- HTTP
- DNS
- SMTP
- SSH
- FTP

这一层的问题：

- URL 错了
- HTTP 响应异常
- 认证失败
- 应用错误
- DNS 查询失败

安全角度：

- Web 攻击经常发生在 Layer 7。
- 这一层的日志能显示 URL、用户名、User-Agent、应用行为。

## TCP/IP 模型

TCP/IP 模型通常有四层：

| TCP/IP 层 | 大概对应 OSI |
| --- | --- |
| Application | OSI 5-7 层 |
| Transport | OSI 4 层 |
| Internet | OSI 3 层 |
| Network Access | OSI 1-2 层 |

这个模型更接近互联网协议栈的常见讨论方式。

## 例子：访问网站

如果我访问 `https://example.com`，可以粗略这样看：

- Application：浏览器使用 HTTPS。
- Presentation-ish：TLS 加密流量。
- Transport：TCP 连接到 443 端口。
- Network：IP 把包路由到服务器。
- Data Link：本地帧在 LAN 中移动。
- Physical：WiFi 或 Ethernet 传递信号。

这很简化，但能帮我理解路径。

## 用分层思想排错

如果某件事失败，我可以按层问：

1. Physical：有没有连接或信号？
2. Data Link：我在正确的本地网络或 VLAN 吗？
3. Network：有没有有效 IP 和网关？
4. Transport：目标端口能到达吗？
5. Application：服务响应正常吗？

例子：

- 如果 `ping 8.8.8.8` 能通，但 `curl https://example.com` 失败，底层可能正常，问题可能在 DNS、TLS、防火墙或应用行为。
- 如果根本没有 IP 地址，我不应该先怪网站。

## 我容易忘的点

- OSI 是学习模型，不是真实世界的完美图。
- Layer 2 是本地网络传递。
- Layer 3 是 IP 和路由。
- Layer 4 是 TCP/UDP 和端口。
- Layer 7 是很多用户可见问题出现的地方。
- 不是每个协议都能完美放进某一层。

## 复习问题

- Layer 3 主要负责什么？
- Layer 4 主要负责什么？
- 为什么端口通常在 Layer 4 讨论？
- 模型和真实流量有什么区别？
- 如果 DNS 失败，我会先想到哪一层附近？
- 网线没插为什么不是应用问题？

## 参考资料

- [Cloudflare: What is the OSI model?](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/)
- [Cisco: OSI model and networking basics](https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html)
- [Microsoft: TCP/IP fundamentals](https://learn.microsoft.com/en-us/troubleshoot/windows-client/networking/tcpip-addressing-and-subnetting)
