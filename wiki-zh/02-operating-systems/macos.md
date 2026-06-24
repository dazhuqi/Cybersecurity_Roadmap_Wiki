# macOS

| 字段 | 内容 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | 操作系统 |
| 上次复习 | 待填写 |

## 为什么这个主题重要

macOS 经常出现在开发、设计、管理层和个人环境里。它和 Windows 感觉不一样，但同样有用户、文件、权限、进程、日志、网络设置和安全控制。

对网络安全来说，macOS 值得学，因为攻击者也会攻击它，而且很多公司是混合环境。我不能偷懒地认为“Mac 不会中毒”。

## macOS 和 Unix

macOS 基于 Unix。这表示它和 Linux 有很多命令行理念相似，但它不是 Linux。

相似点：

- 有终端。
- 使用 `/Users` 作为用户 home 目录。
- 有 Unix 风格权限。
- 支持 zsh 这样的 shell。
- `ls`、`cd`、`cat`、`grep`、`ps` 这些命令存在。

不同点：

- 有 Apple 自己的安全功能。
- 系统目录和应用管理方式不同。
- 有些命令选项和 Linux 不一样。
- Apple 对硬件和系统整合控制更多。

## 文件系统基础

重要位置：

```text
/Users
/Applications
/System
/Library
~/Library
/private/var/log
```

我的理解：

- `/Users` 放用户 home 目录。
- `/Applications` 放已安装应用。
- `/System` 放受保护的系统文件。
- `/Library` 放系统级支持文件。
- `~/Library` 放用户自己的应用数据和设置。
- `/private/var/log` 放日志。

安全角度：

- `~/Library` 可能包含浏览器数据、应用设置、缓存和持久化位置。
- 应用通常应该来自可信来源。
- System Integrity Protection 会保护重要系统区域。

## 用户和权限

macOS 有用户、组和文件权限。

有用命令：

```bash
whoami
id
ls -la
chmod
chown
```

初学者笔记：

Finder 图形界面可能隐藏一些权限细节，但终端显示得更直接。

安全角度：

- 管理员用户比标准用户权限更大。
- 敏感文件不应该所有人都能读。
- 权限提示是 macOS 安全的一部分。

## Gatekeeper

Gatekeeper 帮助控制哪些应用可以运行。它会检查应用是否来自已识别开发者，以及是否经过 Apple notarization。

初学者版本：

如果我从网上下载一个随机应用，macOS 可能会在运行前阻止或警告。

安全角度：

- Gatekeeper 能减少随便运行不可信应用的风险。
- 它不是完美安全。
- 如果用户不思考就绕过警告，风险会上升。

## FileVault

FileVault 是 macOS 的全盘加密。

为什么重要：

- Mac 丢失或被偷时，FileVault 能帮助保护磁盘数据。
- 如果没有加密，有物理访问的人可能更容易恢复数据。

初学者检查：

```text
System Settings -> Privacy & Security -> FileVault
```

## Keychain

Keychain 存储密码、证书、密钥和安全备注。

初学者版本：

它像是 macOS 和应用用来保存秘密的受保护区域。

安全角度：

- Keychain 里可能有非常敏感的信息。
- 如果账号已经解锁，保存的凭据可能暴露。
- 看到访问 Keychain 项目的提示时要小心。

## 隐私权限

macOS 对这些东西有隐私权限：

- 摄像头
- 麦克风
- 屏幕录制
- Full Disk Access
- Accessibility
- 位置

安全角度：

- Full Disk Access 权限很强。
- Accessibility 可以让应用控制或观察用户操作。
- Screen Recording 可能暴露敏感数据。

如果看到未知应用拥有这些权限，应该调查。

## 进程和 Activity Monitor

Activity Monitor 是查看进程的图形工具。

终端命令：

```bash
ps aux
top
pgrep <name>
kill <pid>
```

要看：

- 进程名
- CPU 使用率
- 内存使用率
- 运行该进程的用户
- 如果可能，查看路径

安全角度：

- 奇怪进程可能可疑。
- 一些恶意软件会用 LaunchAgents 或 LaunchDaemons 做持久化。
- 只有进程名不足以作为证据。

## LaunchAgents 和 LaunchDaemons

macOS 使用 LaunchAgents 和 LaunchDaemons 自动启动程序。

常见位置：

```text
~/Library/LaunchAgents
/Library/LaunchAgents
/Library/LaunchDaemons
```

安全角度：

- 这些目录是重要持久化位置。
- 未知 plist 文件需要小心检查。
- 合法应用也会使用这些位置，所以要看上下文。

## 日志

macOS 有统一日志系统。

有用命令：

```bash
log show --last 10m
```

其他有用位置：

```text
Console.app
/private/var/log
```

安全角度：

- 日志可以显示应用崩溃、认证事件和系统行为。
- macOS 日志可能很吵，需要耐心。

## 网络检查

有用命令：

```bash
ifconfig
ipconfig getifaddr en0
netstat -rn
scutil --dns
ping 8.8.8.8
dig example.com
```

初学者笔记：

像 `en0` 这样的接口名容易让人困惑。很多 Mac 上 `en0` 是 WiFi，但我应该验证，不要假设。

## 小练习

- [ ] 检查 macOS 版本。
- [ ] 打开 Terminal，运行 `whoami`、`id`、`ls -la`。
- [ ] 找到 FileVault 状态。
- [ ] 查看 Privacy & Security 权限。
- [ ] 打开 Activity Monitor 并检查运行中的进程。
- [ ] 查看 LaunchAgents 和 LaunchDaemons 文件夹。
- [ ] 用 `dig` 做一次 DNS 查询。

## 我容易忘的点

- macOS 基于 Unix，但不是 Linux。
- `~/Library` 是用户 Library，不是系统 Library。
- Keychain 存储敏感秘密。
- Full Disk Access 是很强的权限。
- Gatekeeper 有帮助，但用户决定仍然重要。
- LaunchAgents 和 LaunchDaemons 是持久化检查重点。

## 复习问题

- FileVault 为什么有用？
- Keychain 存什么？
- Full Disk Access 为什么敏感？
- LaunchAgents 用来做什么？
- macOS 和 Linux 有哪些相似点？
- 为什么未知应用拥有 Accessibility 权限时要检查？

## 参考资料

- [Apple Platform Security](https://support.apple.com/guide/security/welcome/web)
- [Apple: Mac User Guide](https://support.apple.com/guide/mac-help/welcome/mac)
- [Apple: Protect your Mac from malware](https://support.apple.com/guide/mac-help/protect-your-mac-from-malware-mh40596/mac)
- [Apple: Use FileVault to encrypt your Mac startup disk](https://support.apple.com/en-us/102338)
