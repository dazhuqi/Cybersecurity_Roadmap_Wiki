# CCNA

| 字段 | 内容 |
| --- | --- |
| 状态 | 未开始 |
| 目的 | 网络基础和 Cisco 网络 |
| 官方网站 | [Cisco CCNA](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html) |
| 考试主题 | [Cisco Learning Network: CCNA Exam Topics](https://learningnetwork.cisco.com/s/ccna-exam-topics) |

## 笔记

CCNA 是 Cisco 的 associate 级网络认证。它比 Network+ 更厂商相关，但也能建立更扎实的网络习惯，因为它更深入路由、交换、VLAN、无线、IP 服务和网络运维。

对网络安全来说，CCNA 很有用，因为很多安全问题首先是网络可见性和分段问题。

## 为什么它和我的路线图有关

CCNA 风格学习支持：

- 理解路由和交换图
- VLAN 和子网设计
- 防火墙和网络分段讨论
- 网络排错
- 抓包分析
- 后续蓝队或基础设施安全工作

就算不当网络工程师，我也需要足够网络能力，不能一直靠猜。

## 我应该学到什么

- 网络基础和 OSI/TCP-IP 模型。
- IPv4 和 IPv6 地址。
- 交换、VLAN、trunk、STP 概念。
- 路由基础和基础路由协议。
- 无线网络基础。
- DHCP、DNS、NAT、NTP、SNMP 等 IP 服务。
- 安全基础和设备访问控制。
- 自动化和可编程性基础。

## 我会怎么准备

1. 完成 `03-networking-knowledge` 笔记。
2. 练习子网直到比较机械熟悉。
3. 用 Packet Tracer、Cisco Modeling Labs 或小实验环境练配置。
4. 记录 `show`、配置和排错命令。
5. 选择学习资料前先读官方考试主题。

## 实操练习

- 搭一个两台 LAN 和一台路由器的小拓扑。
- 配置 VLAN 并测试主机可达性。
- 练默认网关和路由排错。
- 抓流量并把流量和拓扑对应起来。
- 不背词地解释 router 和 switch 的区别。

## 初学者容易混的点

- CCNA 不只是“Cisco 版 Network+”，它更要求配置和排错思维。
- 我应该理解为什么要用某条命令，而不是只复制一份能跑的 config。
- VLAN 用来分隔 broadcast domain，trunk 可以承载多个 VLAN，access port 通常只属于一个 VLAN。
- routing table 回答下一跳去哪，但不代表回程路径一定没问题。
- troubleshooting 应该从症状和证据开始，而不是一出错就重建整个 lab。

## 小检查点

- 我能划分常见 private ranges，并解释结果。
- 我能在模拟器里配置基础 switch access port、trunk port 和 VLAN。
- 我能设置 static routing，并用 show commands 验证。
- 我能解释同一 LAN 里两台主机通信时 ARP 在做什么。
- 我能写清楚一个小拓扑，让另一个新手也能照着重建。

## 决策记录

| 问题 | 我的答案 |
| --- | --- |
| 我是否想比 Network+ 学得更深入？ | 待填写 |
| 我的目标是否需要 Cisco 知识？ | 待填写 |
| 我能否配置和排错，而不是只读？ | 待填写 |
| 如果要考，目标日期 | 待填写 |

## 参考资料

- [Cisco CCNA](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html)
- [Cisco Learning Network: CCNA Exam Topics](https://learningnetwork.cisco.com/s/ccna-exam-topics)
