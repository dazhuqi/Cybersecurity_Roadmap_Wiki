# Linux

| 字段 | 内容 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | 操作系统 |
| 上次复习 | 待填写 |

## 为什么这个主题重要

Linux 在网络安全里到处都是。Web 服务器、云服务器、容器、安全工具、路由器、实验机器经常使用 Linux。就算我主力电脑是 Windows，也需要基本 Linux 能力，因为很多安全教程、实验和真实系统都默认你懂一些 Linux。

一开始 Linux 可能感觉不友好，因为终端用得更多。但终端也是 Linux 适合学习的原因：操作更可见、更容易重复、更容易记录。

## Linux 是什么

严格说，Linux 是操作系统内核。大多数人使用的是 Linux 发行版。发行版把 Linux 内核、工具、包管理器、桌面环境和默认配置组合在一起。

例子：

- Ubuntu
- Debian
- Fedora
- Kali Linux
- Arch Linux
- CentOS Stream

初学者笔记：

别人说“Linux”时，可能指内核、服务器系统、桌面发行版，或者只是命令行环境。要看上下文。

## 文件系统结构

Linux 使用从 `/` 开始的单一目录树。

重要目录：

```text
/
/home
/root
/etc
/var
/var/log
/tmp
/usr
/bin
/sbin
/opt
```

我的理解：

- `/` 是整个文件系统的根。
- `/home` 放普通用户的 home 目录。
- `/root` 是 root 用户的 home 目录。
- `/etc` 放系统配置。
- `/var` 放会变化的数据，比如日志和缓存。
- `/var/log` 放很多日志。
- `/tmp` 是临时存储。
- `/usr` 放很多用户空间程序和库。
- `/opt` 常用于可选的第三方软件。

安全角度：

- `/etc` 很重要，因为配置错误可能变成安全问题。
- `/var/log` 对调查很重要。
- `/tmp` 可写，有时会被攻击者滥用。
- `/home` 可能包含用户秘密、SSH key、浏览器数据和文档。

## 用户和组

Linux 有用户和组。用户拥有进程和文件，组帮助管理共享权限。

有用命令：

```bash
whoami
id
cat /etc/passwd
cat /etc/group
```

初学者笔记：

- `root` 用户是超级用户。
- 普通用户不应该什么都用 root 做。
- `sudo` 允许有权限的用户以更高权限运行命令。
- 一个用户可以属于多个组。

安全角度：

- root 权限非常强。
- sudo 权限配置错误可能导致权限提升。
- 用户 home 目录里的 SSH key 很敏感。

## 文件权限

Linux 权限通常显示为 owner、group、others 的 read、write、execute。

例子：

```text
-rwxr-x---
```

简单拆解：

- 第一个字符表示文件类型。
- 接下来三个是 owner 权限。
- 再三个是 group 权限。
- 最后三个是 others 权限。

有用命令：

```bash
ls -l
chmod
chown
chgrp
```

安全角度：

- 所有人可写的文件可能危险。
- 脚本的可执行权限很重要。
- 所有权错误可能让服务坏掉，或者暴露数据。

## 进程

进程就是正在运行的程序。

有用命令：

```bash
ps aux
top
htop
pgrep ssh
kill <pid>
```

我应该看：

- 哪个用户启动了进程？
- 正在运行什么命令？
- CPU 和内存占用多少？
- 这个进程是否预期存在？

安全角度：

- 以 root 运行的奇怪进程很重要。
- 恶意软件可能使用看起来正常的名字。
- 进程命令行可能暴露脚本、路径或可疑参数。

## 服务和 systemd

很多 Linux 发行版使用 systemd 管理服务。

有用命令：

```bash
systemctl status ssh
systemctl list-units --type=service
sudo systemctl restart ssh
sudo systemctl enable ssh
sudo systemctl disable ssh
```

初学者笔记：

服务可以在后台运行，不需要用户登录。这对服务器来说很正常。

安全角度：

- 不需要的服务会增加攻击面。
- 服务文件可能成为持久化位置。
- 重启服务可能暂时解决症状，但还是要找原因。

## 包管理

Linux 使用包管理器安装和更新软件。

常见例子：

```bash
# Debian/Ubuntu
sudo apt update
sudo apt install <package>
sudo apt upgrade

# Fedora/RHEL-style systems
sudo dnf install <package>
```

安全角度：

- 更新对修补漏洞很重要。
- 从网上随便运行脚本很危险。
- 官方仓库通常比未知下载更安全。

## 日志

Linux 日志经常在 `/var/log` 下。

常见位置：

```text
/var/log/syslog
/var/log/auth.log
/var/log/secure
/var/log/messages
```

有用命令：

```bash
tail -f /var/log/syslog
journalctl
journalctl -u ssh
```

安全角度：

- 认证日志可以显示登录尝试。
- 服务日志可以显示崩溃或错误。
- 攻击者可能尝试删除或篡改日志。

## 网络检查

有用命令：

```bash
ip addr
ip route
ss -tulpen
ping 8.8.8.8
dig example.com
curl -I https://example.com
```

它们回答：

- `ip addr`：我有哪些 IP 地址？
- `ip route`：流量往哪里走？
- `ss`：哪些端口在监听或已连接？
- `ping`：能否到达某个主机？
- `dig`：DNS 是否工作？
- `curl`：能否和 HTTP 服务通信？

## SSH

SSH 用于远程访问 Linux 系统。

有用文件：

```text
~/.ssh/id_rsa
~/.ssh/id_rsa.pub
~/.ssh/authorized_keys
/etc/ssh/sshd_config
```

安全角度：

- 私钥必须保护好。
- 暴露在互联网的 SSH 密码登录很危险。
- 面向互联网的服务器经常看到失败 SSH 登录尝试。
- `authorized_keys` 控制哪些 key 可以登录。

## 小练习

- [ ] 安装或打开一台 Linux VM。
- [ ] 运行 `pwd`、`ls -la`、`cd`、`cat`。
- [ ] 创建一个测试用户。
- [ ] 创建文件并修改权限。
- [ ] 查看运行中的进程。
- [ ] 用 `ss` 检查监听端口。
- [ ] 读取 `/var/log` 下的一个日志文件。

## 我容易忘的点

- `/root` 和 `/` 不是同一个东西。
- `sudo` 权限很强，不能随便用。
- 文件所有权和文件权限不同，但有关联。
- 日志文件位置可能因发行版不同而不同。
- 没有桌面应用打开，服务也可能在后台运行。

## 复习问题

- root 和普通用户有什么区别？
- `/etc` 通常放什么？
- 为什么 `/var/log` 对安全有用？
- `chmod` 修改什么？
- SSH key 为什么敏感？
- 哪个命令能显示监听端口？

## 参考资料

- [Ubuntu Documentation](https://help.ubuntu.com/)
- [Linux Foundation: Introduction to Linux](https://training.linuxfoundation.org/training/introduction-to-linux/)
- [Red Hat: Linux file permissions explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)
- [systemd Documentation](https://systemd.io/)
