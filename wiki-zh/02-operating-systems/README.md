# 02 操作系统

这个模块是学习操作系统到底是什么感觉、怎么工作。我以前容易把 Windows、Linux、macOS 当成只是“界面不同”，但对网络安全来说它们远不止界面不同。它们决定文件怎么存、用户怎么登录、权限怎么生效、软件怎么运行、日志怎么产生，以及攻击者或防御者怎么和一台机器交互。

这里的目标不是一次性成为 Windows 管理员、Linux 管理员和 macOS 专家。目标是先舒服一点：能打开终端，能查看基本系统状态，能理解权限，不会被普通 OS 概念吓住。

## 学习顺序

1. [windows.md](windows.md)
2. [linux.md](linux.md)
3. [macos.md](macos.md)
4. [command-line.md](command-line.md)
5. [file-permissions.md](file-permissions.md)
6. [os-hardening.md](os-hardening.md)

我把 Windows、Linux、macOS 放在前面，是因为先需要对这些系统有一个脑内地图。之后再学命令行、权限、加固会更容易理解。

## 对应路线图内容

这个文件夹对应路线图里的这些主题：

- Windows
- Linux
- MacOS
- 安装和配置
- 使用 GUI 和 CLI 导航
- 理解权限
- 安装软件和应用
- 对文件进行 CRUD 操作
- 排错
- 常见命令
- 操作系统加固

## 为什么操作系统对安全重要

大多数安全事件最后都会碰到操作系统。

例子：

- Windows 上有一个可疑进程在运行。
- Linux 服务器出现奇怪的 SSH 登录尝试。
- macOS 笔记本安装了未知配置描述文件。
- 文件权限设置得太开放。
- 补丁没有安装。
- 日志显示某个账号在奇怪时间被使用。

如果我不懂操作系统，我仍然能复制命令，但很难真正理解自己在看什么。

## 学完后我应该能解释什么

学完这个模块后，我应该能解释：

- 操作系统负责什么。
- Windows、Linux、macOS 在初学者层面有什么不同。
- 用户、组、文件、进程、服务、日志之间大概是什么关系。
- 为什么命令行能力重要。
- 为什么权限是一种安全控制。
- 基础加固是什么意思。

## 我的学习方法

每个 OS 主题里，我会尝试回答：

- 文件通常放在哪里？
- 用户和权限怎么工作？
- 怎么安装软件？
- 怎么看运行中的进程？
- 日志在哪里？
- 怎么检查网络设置？
- 哪些设置和基础安全有关？

这是一个实践模块。不能只读，我应该打开虚拟机或真实机器去试命令。

## 完成检查表

- [ ] 我能描述操作系统的职责。
- [ ] 我能在 Windows、Linux、macOS 上找到基础系统信息。
- [ ] 我能用 GUI 和 CLI 导航文件。
- [ ] 我能用初学者语言解释用户、组和权限。
- [ ] 我能查看进程和服务。
- [ ] 我能找到基础日志。
- [ ] 我能写一个小型 OS 加固清单。

## 参考资料

- [Microsoft Learn: Windows documentation](https://learn.microsoft.com/en-us/windows/)
- [Ubuntu Documentation](https://help.ubuntu.com/)
- [Apple Platform Security](https://support.apple.com/guide/security/welcome/web)
- [Red Hat: Linux permissions](https://www.redhat.com/sysadmin/linux-file-permissions-explained)
