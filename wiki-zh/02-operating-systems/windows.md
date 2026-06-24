# Windows

| 字段 | 内容 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | 操作系统 |
| 上次复习 | 待填写 |

## 为什么这个主题重要

Windows 到处都是：个人笔记本、办公室台式机、加入域的工作站、服务器，有时候安全分析师自己的机器也是 Windows。很多真实事件都会涉及 Windows，因为用户在 Windows 上打开邮件、浏览网页、下载文件、登录公司工具。

对我这种初学者来说，目标不是背下 Windows 的每个功能。目标是事情发生时知道第一眼该看哪里。

## Windows 做什么

Windows 是操作系统。它管理硬件、文件、用户、运行中的程序、网络设置、日志和安全控制。

简单版本：

- 让用户和电脑交互。
- 运行应用程序。
- 控制文件和设置的访问。
- 把事件记录到日志。
- 提供内置安全功能。

## 文件系统基础

Windows 常用 NTFS 文件系统。NTFS 支持权限、所有权、审计、加密功能和其他元数据。

重要文件夹：

```text
C:\Windows
C:\Program Files
C:\Program Files (x86)
C:\Users
C:\Users\<username>\Downloads
C:\Users\<username>\AppData
```

初学者笔记：

- `C:\Windows` 包含操作系统文件。
- `Program Files` 包含已安装应用。
- `Users` 包含用户配置文件。
- `Downloads` 是可疑文件经常出现的位置。
- `AppData` 默认隐藏，经常存应用数据。

安全角度：

- 恶意软件经常躲在用户可写的位置。
- `AppData` 很重要，因为很多应用和一些恶意软件都会用它。
- 文件权限决定谁可以读取、写入或执行文件。

## 用户和组

Windows 有用户和组。用户账号代表一个人或服务，组是一组共享权限的账号。

常见组：

- Administrators
- Users
- Remote Desktop Users
- Backup Operators

Administrators 组权限很高。如果攻击者拿到管理员权限，通常能造成很大破坏。

可用命令：

```powershell
whoami
net user
net localgroup
net localgroup administrators
```

安全角度：

- 本地管理员太多会增加风险。
- 老旧不用的账号应该删除或禁用。
- 服务账号不应该拥有超过实际需要的权限。

## UAC

UAC 是 User Account Control，也就是需要提升权限时弹出的确认提示。

初学者笔记：

UAC 不等于完全安全。它是一层保护，让权限提升更明显，但用户仍然可能批准危险操作。

安全角度：

- 如果用户不思考就点同意，UAC 保护会变弱。
- 有些攻击会尝试绕过 UAC。
- 所有东西都用管理员运行是坏习惯。

## 服务

Windows 服务是在后台运行的程序，可以自动启动，不需要用户手动打开。

例子：

- Windows Update
- Print Spooler
- Windows Defender services
- Remote Desktop Services

有用命令：

```powershell
Get-Service
Get-Service | Where-Object {$_.Status -eq "Running"}
```

安全角度：

- 恶意持久化可以通过服务实现。
- 不需要的服务会增加攻击面。
- 服务权限很重要。

## 进程

进程就是正在运行的程序。

有用检查：

```powershell
Get-Process
tasklist
```

我应该看：

- 进程名
- CPU 使用率
- 内存使用率
- 如果能看到，父进程是什么
- 文件路径
- 运行该进程的用户

安全角度：

- 奇怪进程名可疑，但不是证据。
- 正常名字出现在奇怪路径里很可疑。
- 从 Downloads 或 Temp 运行的进程值得检查。

## Event Viewer 和日志

Windows 会记录很多事件。Event Viewer 是查看日志的图形工具。

重要日志：

- Application
- System
- Security
- Windows Defender logs
- PowerShell logs

常见调查内容：

- 登录事件
- 登录失败
- 服务创建
- 计划任务变化
- Defender 检测
- 系统崩溃

PowerShell 示例：

```powershell
Get-EventLog -LogName System -Newest 20
```

安全角度：

日志是防御者理解发生了什么的主要方式之一。如果日志被关闭或覆盖，调查会困难很多。

## Registry

Windows Registry 存放操作系统和应用的配置数据。

初学者笔记：

注册表很强，也很容易改坏。我不应该随机编辑它。

安全角度：

- 恶意软件可能用注册表键做持久化。
- 启动项可以存在注册表里。
- 调查人员经常检查注册表痕迹。

工具：

```text
regedit
```

## Task Scheduler

Task Scheduler 可以在特定时间或特定事件发生时运行程序。

正常用途：

- 更新
- 备份
- 维护任务

安全角度：

- 攻击者可以创建计划任务来维持持久化。
- 运行未知脚本的任务应该被调查。

有用命令：

```powershell
Get-ScheduledTask
```

## Windows Defender

Microsoft Defender 是现代 Windows 自带的反恶意软件保护。

需要知道：

- 可以扫描文件。
- 可以检测恶意软件。
- 有实时保护。
- 会记录检测和事件。

检查位置：

```text
Windows Security -> Virus & threat protection
```

安全角度：

- Defender 告警是重要证据。
- 没有理由地关闭 Defender 很可疑。
- Defender 应该保持更新。

## Windows Firewall

Windows Firewall 根据规则控制入站和出站网络流量。

初学者版本：

- 入站规则：进入电脑的流量。
- 出站规则：离开电脑的流量。

有用检查：

```powershell
Get-NetFirewallProfile
Get-NetFirewallRule | Select-Object -First 10
```

安全角度：

- 不理解就随便开放端口会增加风险。
- Remote Desktop 不应该随便暴露。
- 防火墙规则能提示哪些服务预期在运行。

## Remote Desktop

RDP 允许用户远程访问 Windows 系统。

安全角度：

- 暴露的 RDP 是常见攻击目标。
- 弱密码会让 RDP 很危险。
- MFA、VPN、账号锁定、限制访问范围都能降低风险。

初学者笔记：

如果看到端口 `3389`，应该想到 RDP。

## 基础 Windows 命令

```powershell
whoami
hostname
ipconfig /all
net user
net localgroup administrators
Get-Process
Get-Service
Get-ScheduledTask
Get-NetIPAddress
Get-NetTCPConnection
```

我不应该只是收集命令，还要写下每个命令回答了什么问题。

## 小练习

- [ ] 找到 Windows 版本。
- [ ] 列出本地用户。
- [ ] 查看 Administrators 组里有哪些账号。
- [ ] 打开 Event Viewer，找到 Security 日志。
- [ ] 检查 Defender 状态。
- [ ] 检查防火墙配置文件状态。
- [ ] 用 `ipconfig /all` 找当前 IP 地址。

## 我容易忘的点

- `AppData` 很重要。
- UAC 不等于完美保护。
- 只有进程名不足以作为证据。
- 日志只有存在并被保留时才有用。
- RDP 很方便，但暴露出去很危险。
- 本地管理员权限非常强。

## 复习问题

- 用户和组有什么区别？
- 为什么 Administrators 组敏感？
- Event Viewer 能显示什么信息？
- 攻击者为什么可能使用计划任务？
- 暴露 RDP 有什么风险？
- 查看进程时为什么要看文件路径？

## 参考资料

- [Microsoft Learn: Windows documentation](https://learn.microsoft.com/en-us/windows/)
- [Microsoft Learn: Event Viewer](https://learn.microsoft.com/en-us/shows/inside/event-viewer)
- [Microsoft Learn: Microsoft Defender Antivirus](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)
- [Microsoft Learn: Windows Defender Firewall](https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/)
