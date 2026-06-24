# 虚拟化

| 字段 | 内容 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | 基础 IT 技能 |
| 上次复习 | 待填写 |

## 为什么这个主题重要

虚拟化是网络安全初学者特别有用的技能。它可以让我在自己的电脑里运行另一台“电脑”。一开始听起来有点奇怪，但意思就是：不用买很多物理机器，也能搭一个小实验室。

对网络安全学习来说，这很重要。安全工具、靶机、可疑文件都不应该直接在主系统上乱试。虚拟机给我一个练习、犯错、打快照、出问题后回滚的地方。

## 基本概念

虚拟机，VM，是一台用软件模拟出来的电脑。它有虚拟 CPU、虚拟 RAM、虚拟磁盘、虚拟网卡。它能像普通电脑一样运行操作系统，但会共享宿主机的真实硬件。

我的简单理解：

- 真实笔记本或台式机是物理机器。
- Host OS 是安装在真实机器上的操作系统。
- Hypervisor 是创建和运行虚拟机的软件。
- Guest OS 是虚拟机里的操作系统。
- VM 是整台虚拟电脑。

例子：

- 物理机器：我的笔记本
- Host OS：Windows 11
- Hypervisor：VirtualBox 或 VMware Workstation
- Guest OS：Ubuntu Linux
- VM：运行在 Windows 里的 Ubuntu 机器

## Host OS

宿主操作系统是直接安装在真实硬件上的系统。正常打开笔记本并登录的那个系统，就是 Host OS。

Host 控制：

- 真实 CPU
- 真实 RAM
- 真实磁盘
- 真实网卡
- USB 设备
- 显示器、键盘、鼠标

安全提示：

Host 比 Guest 更重要。如果 Host 被入侵，攻击者可能能访问或控制虚拟机。所以不能因为有实验室，就随便对待宿主机。

## Guest OS

Guest OS 是安装在虚拟机里的操作系统。

例子：

- Kali Linux 作为 Guest
- Ubuntu Server 作为 Guest
- Windows Server 作为 Guest
- Metasploitable 作为 Guest

Guest 会以为自己运行在普通电脑上，但它看到的是虚拟硬件。

安全提示：

Guest 和 Host 有隔离，但隔离不是魔法。共享文件夹、剪贴板共享、USB 直通、网络模式都会在 Guest 和 Host 之间开路径。

## Hypervisor

Hypervisor 是创建和管理虚拟机的软件或固件。

常见两类：

### Type 1 Hypervisor

Type 1 直接运行在硬件上，不需要下面再有一个普通桌面系统。

例子：

- VMware ESXi
- 类似 Microsoft Hyper-V Server 的部署
- Proxmox VE

这类常见于服务器和企业环境。

### Type 2 Hypervisor

Type 2 是运行在普通 Host OS 上的应用程序。

例子：

- Windows 上的 VirtualBox
- Windows 或 Linux 上的 VMware Workstation
- macOS 上的 VMware Fusion

个人实验室常用 Type 2，因为比较容易开始。

## VirtualBox

VirtualBox 是 Oracle 的免费开源虚拟化软件。它很适合入门实验室，因为安装简单，支持很多 Guest OS。

有用功能：

- 快照
- 共享文件夹
- 虚拟网络
- USB 设备支持
- 导入和导出虚拟机 appliance

初学者提醒：

共享文件夹很方便，但会降低隔离。如果虚拟机是易受攻击的靶机，或者要运行可疑内容，尽量不要共享宿主机的重要文件夹。

## VMware

VMware 有多个虚拟化产品。个人实验室常见 VMware Workstation 或 VMware Fusion。企业环境里常见 ESXi 和 vSphere。

有用点：

- 虚拟机性能通常不错。
- 支持快照。
- 很多预制实验镜像支持 VMware 格式。
- 真实公司里也很常见。

初学者笔记：

“VMware” 这个词可能指不同产品，所以要说具体。VMware Workstation 和 ESXi 不是一回事。

## ESXi

ESXi 是 VMware 的裸金属 Type 1 hypervisor，直接安装在服务器硬件上。

为什么重要：

- 企业虚拟化会用到。
- 一台 ESXi 主机可以承载多台服务器 VM。
- 管理方式和普通桌面软件不一样。

安全角度：

- 如果 ESXi 主机被攻破，很多 VM 都可能受影响。
- Hypervisor 管理权限非常强。
- ESXi 本身也需要补丁和监控。

## Proxmox

Proxmox VE 是开源虚拟化管理平台，可以用 KVM 跑虚拟机，也可以用 LXC 跑容器。

为什么初学者可能喜欢：

- 有 Web 管理界面。
- 免费且功能强。
- 可以搭家庭实验室。
- 支持快照、备份、集群、存储管理。

安全角度：

- Proxmox 管理入口不要随便暴露。
- 备份和快照很有用，但也可能包含敏感数据。
- 实验室网络也需要隔离。

## 快照

快照会保存虚拟机某个时间点的状态。后面如果我弄坏了，可以回滚。

这对学习很有用，因为我肯定会弄坏东西。

适合使用快照的场景：

- 安装风险较高的工具前
- 修改系统设置前
- 开始实验前
- 在安全实验室里分析恶意软件前

初学者提醒：

快照不是备份。它是方便回滚的点，但不应该当作重要数据的唯一副本。

## VM 网络模式

这一块一开始很绕，但对安全实验室很重要。

### NAT

NAT 模式下，VM 通常可以通过 Host 访问互联网，但外部设备不容易直接访问 VM。

适合：

- 普通学习
- 安装软件包
- 在测试 VM 里浏览网页

安全提示：

对初学者来说，NAT 通常比把脆弱 VM 直接桥接到家庭网络更安全。

### Bridged

桥接模式下，VM 看起来像和 Host 在同一个网络里的另一台机器。

适合：

- 从其他设备访问 VM 服务
- 模拟真实网络主机

安全提示：

如果 VM 有漏洞，这种模式可能有风险。桥接后的脆弱机器可能被网络里的其他设备访问到。

### Host-only

Host-only 模式下，VM 通常只和 Host 以及其他 host-only VM 通信，不直接进入更大的网络或互联网。

适合：

- 隔离实验网络
- 攻击机和靶机练习
- 更安全的实验

安全提示：

Host-only 很适合脆弱靶机，因为它限制了暴露范围。

## 为什么隔离重要

隔离就是把有风险的东西和重要东西分开。

初学者实验室里，我应该避免：

- 在主系统上直接运行未知工具。
- 把脆弱 VM 直接放到家庭网络。
- 把真实个人文件夹共享给实验 VM。
- 在测试系统里登录重要账号。
- 在实验机器里复用真实密码。

虚拟化能帮助隔离，但前提是配置正确。

## 一个简单入门实验室计划

第一个实验室不需要很复杂。

可能配置：

- Host OS：Windows 或 Linux 笔记本
- Hypervisor：VirtualBox 或 VMware Workstation
- VM 1：Ubuntu Linux，用来普通练习
- VM 2：Kali Linux，之后学安全工具
- VM 3：故意存在漏洞的靶机，只放在 host-only 模式

第一次练习任务：

- 安装一个 Ubuntu VM。
- 刚安装完就打一个快照。
- 测试 NAT 模式。
- 创建 host-only 网络。
- 记录每台 VM 里的 IP 地址。
- 主动回滚一次快照，理解它怎么工作。

## 资源规划

VM 使用的是 Host 的真实资源。

创建很多 VM 之前要检查：

- Host 有多少 RAM。
- 还有多少空闲磁盘。
- BIOS/UEFI 是否开启虚拟化。
- CPU 是否支持虚拟化特性。

粗略入门规则：

- 轻量 Linux VM：2 GB RAM 可能够用。
- Windows VM：通常需要更多 RAM 和磁盘。
- 同时跑很多 VM 会让 Host 变慢。

## 我容易忘的点

- VM 不是完全独立的物理电脑。
- 快照不是备份。
- Bridged 模式可能把 VM 暴露到真实网络。
- 共享剪贴板和共享文件夹会降低隔离。
- Hypervisor 本身也要更新。
- 实验室应该可控，不应该神秘又危险。

## 复习问题

- Host OS 和 Guest OS 有什么区别？
- Hypervisor 做什么？
- 为什么 host-only 网络适合安全实验室？
- 为什么 bridged 网络可能有风险？
- 快照适合做什么？
- 为什么不要给风险 VM 共享真实文件夹？

## 参考资料

- [Red Hat: What is a hypervisor?](https://www.redhat.com/en/topics/virtualization/what-is-a-hypervisor)
- [Microsoft Azure: What is a virtual machine?](https://azure.microsoft.com/en-gb/resources/cloud-computing-dictionary/what-is-a-virtual-machine)
- [VirtualBox](https://www.virtualbox.org/)
- [VirtualBox Documentation](https://www.virtualbox.org/wiki/Documentation)
- [VMware](https://www.vmware.com/)
- [VMware ESXi](https://www.vmware.com/products/cloud-infrastructure/esxi-and-esx)
- [Proxmox](https://www.proxmox.com/en/)
