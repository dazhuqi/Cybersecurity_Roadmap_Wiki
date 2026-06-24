# 01 基础 IT 技能

这个模块是正式进入网络安全之前的基础部分。我以前会下意识觉得网络安全应该从各种“黑客工具”开始，但看路线图之后发现，很多安全工作其实都离不开普通 IT 常识：电脑由什么组成、设备怎么连接、遇到问题怎么排查、办公套件和云盘怎么被使用、一个基础网络大概怎么工作。

这些笔记会故意写得比较像初学者笔记。我不想假装自己已经很专业，而是希望自己能把最基础的东西说清楚，不跳过那些“看起来很 obvious，但我其实不一定懂”的地方。

## 学习顺序

1. [hardware-and-connectivity.md](hardware-and-connectivity.md)
2. [troubleshooting-and-productivity.md](troubleshooting-and-productivity.md)
3. [virtualization.md](virtualization.md)
4. [networking-basics.md](networking-basics.md)

我觉得这个顺序比较合理：硬件和连接是物理基础；排错是日常工作方法；虚拟化让我能搭安全的实验环境；网络基础则把前面的设备和系统连接起来。

## 对应路线图内容

这个文件夹对应路线图里的这些主题：

- 计算机硬件组件
- 常见连接类型以及作用
- 不依赖特定操作系统的排错思路
- 常见办公套件基础
- Microsoft Office Suite
- Google Workspace
- iCloud
- 计算机网络基础
- 虚拟化基础
- VMware、VirtualBox、ESXi、Proxmox
- Hypervisor、Host OS、Guest OS、VM

## 学完后我应该能解释什么

学完这个模块后，我应该能解释：

- CPU、RAM、存储、主板、网卡、电源分别是做什么的。
- 有线、无线、短距离连接、云连接为什么不是一回事。
- 遇到问题时，为什么不能一上来就乱改设置。
- 为什么办公套件也属于安全学习的一部分。
- 虚拟机是什么，为什么做实验时很有用。
- 一台电脑访问网站时，大概会经过哪些步骤。

## 我的学习方法

每篇笔记里我会尽量写三类内容：

- 白话解释：这个东西到底是什么。
- 安全角度：为什么它和网络安全有关。
- 小练习：我能在自己电脑上检查或尝试的一件小事。

这样会比单纯复制定义慢一点，但以后复习时应该更有用。

## 完成检查表

- [ ] 我能描述电脑里的主要硬件组件。
- [ ] 我能说出常见连接类型，以及它们通常用来干什么。
- [ ] 我能按一个简单流程排查问题。
- [ ] 我能解释 Office、Google Workspace、iCloud 里的一些基础风险。
- [ ] 我能解释 host OS、guest OS、hypervisor、VM。
- [ ] 我能使用虚拟机做相对安全的练习。
- [ ] 我能用初学者语言解释一次网页访问的大概路径。

## 参考资料

- [roadmap.sh Cyber Security Roadmap](https://roadmap.sh/cyber-security)
- [IBM: What is computer hardware?](https://www.ibm.com/think/topics/hardware)
- [Cisco: Networking basics](https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html)
- [Red Hat: What is a hypervisor?](https://www.redhat.com/en/topics/virtualization/what-is-a-hypervisor)
