# 命令行

| 字段 | 内容 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | 操作系统 |
| 上次复习 | 待填写 |

## 为什么这个主题重要

命令行一开始很吓人，因为没有友好的按钮告诉我点哪里。但它是 IT 和网络安全里非常有用的技能：命令快、可重复、容易记录，而且很多时候没有 GUI 也能用。

我不需要马上背下所有命令。我需要先理解每个命令在回答什么问题。

## 我的基础规则

运行命令前，我应该问自己：

> 我到底想知道什么，或者想改变什么？

这样能避免盲目复制粘贴命令。

## Shell

Shell 是读取命令并运行命令的程序。

常见例子：

- Windows 上的 PowerShell
- Windows 上的 Command Prompt
- Linux 上的 Bash
- macOS 上的 zsh

初学者笔记：

PowerShell 命令经常处理对象；Bash 命令经常处理文本流。所以它们风格会不一样。

## 导航命令

### Windows PowerShell

```powershell
pwd
Get-ChildItem
Set-Location C:\Users
```

也有别名：

```powershell
ls
cd
dir
```

### Linux/macOS

```bash
pwd
ls -la
cd /home
```

这些命令回答：

- `pwd`：我现在在哪里？
- `ls` 或 `Get-ChildItem`：这个目录里有什么？
- `cd` 或 `Set-Location`：切换到另一个目录。

## 读取文件

### Windows PowerShell

```powershell
Get-Content .\file.txt
Get-Content .\file.txt -Tail 20
Select-String -Path .\file.txt -Pattern "error"
```

### Linux/macOS

```bash
cat file.txt
less file.txt
head file.txt
tail file.txt
tail -f file.txt
grep "error" file.txt
```

安全角度：

读取日志是防御工作中很常见的任务。我应该熟悉怎么搜索文本。

## 创建、复制、移动、删除文件

### Windows PowerShell

```powershell
New-Item notes.txt
Copy-Item notes.txt notes-copy.txt
Move-Item notes-copy.txt archive.txt
Remove-Item archive.txt
```

### Linux/macOS

```bash
touch notes.txt
cp notes.txt notes-copy.txt
mv notes-copy.txt archive.txt
rm archive.txt
```

初学者提醒：

命令行删除文件可能不会进回收站。看到删除命令要慢一点。

## 进程

### Windows PowerShell

```powershell
Get-Process
Get-Process | Sort-Object CPU -Descending | Select-Object -First 10
Stop-Process -Id <pid>
```

### Linux/macOS

```bash
ps aux
top
pgrep <name>
kill <pid>
```

这些命令回答：

- 什么正在运行？
- 哪个进程占资源？
- 哪个用户启动了进程？
- 我能不能停止它？

安全角度：

进程列表能显示可疑程序，但在下结论前还要看路径、父进程、用户、网络连接。

## 服务

### Windows PowerShell

```powershell
Get-Service
Get-Service | Where-Object {$_.Status -eq "Running"}
Restart-Service <name>
```

### Linux

```bash
systemctl status <service>
systemctl list-units --type=service
sudo systemctl restart <service>
```

这些命令回答：

- 哪些后台服务在运行？
- 服务是不是失败了？
- 能不能重启它？

安全角度：

服务可能是正常系统组件，也可能是持久化机制。

## 网络命令

### Windows PowerShell 和 Command Prompt

```powershell
ipconfig /all
ping 8.8.8.8
nslookup example.com
tracert example.com
netstat -ano
Get-NetTCPConnection
```

### Linux/macOS

```bash
ip addr
ip route
ping 8.8.8.8
dig example.com
traceroute example.com
ss -tulpen
curl -I https://example.com
```

这些命令回答：

- 我的 IP 地址是什么？
- 能不能到达另一个主机？
- DNS 是否正常？
- 流量走什么路径？
- 哪些端口在监听？
- 能不能访问 Web 服务？

## 搜索

### Windows PowerShell

```powershell
Select-String -Path .\*.log -Pattern "failed"
Get-ChildItem -Recurse -Filter *.log
```

### Linux/macOS

```bash
grep -R "failed" .
find . -name "*.log"
```

安全角度：

搜索很基础，但非常强。很多调查工作就是在大量文本里找到正确那一行。

## 重定向和管道

管道把一个命令的输出送给另一个命令。

### Windows PowerShell

```powershell
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5
Get-Service | Where-Object {$_.Status -eq "Running"}
```

### Linux/macOS

```bash
ps aux | grep ssh
cat auth.log | grep "Failed password"
```

重定向可以保存输出：

```bash
ip addr > network-info.txt
```

PowerShell：

```powershell
Get-NetIPAddress > network-info.txt
```

## 管理员权限

有些命令需要提升权限。

Windows：

- 以 Administrator 身份运行 PowerShell。

Linux/macOS：

```bash
sudo <command>
```

初学者提醒：

管理员权限很强。如果我不理解一个命令，不应该因为教程说了就直接加管理员权限运行。

## 我的命令笔记格式

学一个命令时，我应该这样记录：

```text
命令：
它回答什么问题：
例子：
重要选项：
风险：
我应该认识的输出：
```

## 小练习

- [ ] 列出一个目录里的文件。
- [ ] 读取日志文件最后 20 行。
- [ ] 找运行中的进程。
- [ ] 检查 IP 地址和 DNS。
- [ ] 在文本文件里搜索一个词。
- [ ] 把命令输出保存到文件。

## 我容易忘的点

- 命令是用来回答问题的工具。
- PowerShell 和 Bash 风格不同。
- 删除命令要先理解再运行。
- 管理员权限不能随便用。
- Linux 上能用的命令，在 macOS 上可能选项不完全一样。

## 复习问题

- 管道做什么？
- 为什么 `sudo` 敏感？
- 什么命令可以显示运行中的进程？
- 怎么在文件里搜索一个词？
- 排错时为什么要记录命令输出？
- 读取文件和执行文件有什么区别？

## 参考资料

- [Microsoft Learn: PowerShell documentation](https://learn.microsoft.com/en-us/powershell/)
- [GNU Bash Manual](https://www.gnu.org/software/bash/manual/)
- [Ubuntu: Using the terminal](https://help.ubuntu.com/community/UsingTheTerminal)
- [Apple: Terminal User Guide](https://support.apple.com/guide/terminal/welcome/mac)
