# VulnHub

| 字段 | 内容 |
| --- | --- |
| 状态 | 未开始 |
| 官方网站 | [vulnhub.com](https://www.vulnhub.com/) |
| VM 列表 | [Vulnerable machines](https://www.vulnhub.com/) |

## 笔记

VulnHub 和浏览器平台不太一样，因为我通常要下载一个脆弱 VM，然后在自己的实验室里运行。这样更可控，但也意味着隔离和网络设置要由我自己负责。

这个平台更适合在我已经熟悉 VirtualBox 或 VMware、host-only 网络、快照、基础 Linux 命令之后使用。

## 我打算怎么用它

- 只从 VulnHub 官方页面或它链接的可信镜像下载。
- 导入 VM 前先读清楚描述。
- 脆弱机器优先使用 host-only 或隔离实验网络。
- 如果 VM 支持，开始前先打快照。
- 记录 VM 名称、来源 URL、可用时记录 checksum、网络模式和最终收获。

## 安全和范围

- 不要把脆弱 VM 桥接到普通家庭网络，除非我非常清楚为什么。
- 不要在脆弱 VM 里登录真实账号。
- 把脆弱机器和个人文件、工作文件隔开。
- 旧实验 VM 不用后关掉或删除。

## 有用链接

- [VulnHub](https://www.vulnhub.com/)
- [VulnHub FAQ](https://www.vulnhub.com/faq/)

## 已完成 VM

| VM | Source URL | Difficulty | Date | Writeup |
| --- | --- | --- | --- | --- |
