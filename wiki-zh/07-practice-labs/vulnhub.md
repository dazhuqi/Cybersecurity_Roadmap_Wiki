# VulnHub

| 字段 | 值 |
| --- | --- |
| 状态 | 学习中 |
| 官网 | [vulnhub.com](https://www.vulnhub.com/) |
| VM 列表 | [Vulnerable machines](https://www.vulnhub.com/) |
| 最后复习 | 2026-07-01 |

VulnHub 和浏览器平台不同，因为我通常要下载一个 vulnerable VM，然后在自己的实验室里运行。这样控制更多，但也意味着隔离和网络设置由我负责。

这更适合我熟悉 VirtualBox 或 VMware、host-only networks、snapshots 和基础 Linux 命令之后再做。

## 什么时候使用它

VulnHub 适合：

- 想练本地漏洞机器，而不是只用浏览器实验。
- 想练 VM setup 和网络隔离。
- 想练没有 active 平台限制的 retired-style machines。
- 想学习服务在本地网络里的行为。

如果我对 virtualization 或 IP addressing 还很迷糊，它不应该是第一个平台。

## 实验室设置清单

- [ ] 只从 VulnHub 官方页面或其链接的可信镜像下载。
- [ ] 导入前阅读 VM 描述。
- [ ] 如果提供 checksum，就验证。
- [ ] 导入 VirtualBox 或 VMware。
- [ ] 优先使用 host-only 或 isolated lab networking。
- [ ] 如果允许，开始前做 snapshot。
- [ ] 记录 VM name、source URL、network mode 和 IP address。
- [ ] 完成后 shut down 或 remove VM。

## 网络模式笔记

| 模式 | 新手理解 | 安全提醒 |
| --- | --- | --- |
| Host-only | VM 和 host、其他 host-only VMs 通信 | 通常更适合隔离练习。 |
| NAT | VM 可以通过 host NAT 出去 | 更新时有用，但要检查谁能访问 VM。 |
| Bridged | VM 出现在真实设备同一网络 | 除非理解风险并且需要，否则避免。 |

新手规则：

不要因为方便就把 vulnerable VM bridge 到正常家庭网络。

## 要记录什么

```text
VM name:
Source URL:
Download date:
Checksum:
Hypervisor:
Network mode:
Attacker VM:
Target IP:
Goal:
Important services:
Main path:
Cleanup done:
```

## 练习流程

### 1. Prepare

- Import VM。
- 设置 isolated network。
- 启动 attacker VM 和 target VM。
- 安全识别 target IP。

### 2. Enumerate

记录：

- discovered host
- open ports
- service versions
- web paths or shares
- lab 中发现的 credentials 或 hints

### 3. 小心求解

发现漏洞或弱配置时，写下为什么它能工作。如果使用 exploit code，先阅读并理解预期效果。

### 4. Clean Up

- 关闭 target VM。
- 不再需要时 revert 或 delete snapshots。
- 不需要时删除 downloaded files。
- 只保留清理过的 notes 和 writeups。

## 安全和范围

- 除非非常清楚原因，否则不要把 vulnerable VMs bridge 到正常家庭网络。
- 不从 vulnerable VMs 登录真实账号。
- 让 vulnerable machines 和个人/工作文件分离。
- 用完后关闭或删除旧 lab VMs。
- 如果违反许可或隐私预期，不要把可疑 VM 文件上传到 public scanners。

## 排错笔记

常见新手问题：

- 找不到 target IP。
- Host-only adapter 没配置。
- Attacker VM 和 target VM 在不同网络。
- VM 需要特殊 hypervisor 设置。
- 下载压缩包没有完整解压。
- DHCP 没给 target 地址。

可检查：

- 确认两个 VM 都开着
- 检查 adapter settings
- 检查 host-only network range
- 只在 lab network 内做安全 local discovery
- 重读 VM 页面里的特殊说明

## 常用链接

- [VulnHub](https://www.vulnhub.com/)
- [VulnHub FAQ](https://www.vulnhub.com/faq/)

## 复习问题

- 我用了什么 network mode，为什么？
- vulnerable VM 是否保持隔离？
- 第一个有用服务是什么？
- 什么错误拖慢了我？
- 实验后是否清理 VM？

## 完成的 VMs

| VM | Source URL | Difficulty | Date | Writeup |
| --- | --- | --- | --- | --- |
