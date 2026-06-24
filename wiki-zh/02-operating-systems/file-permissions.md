# 文件权限

| 字段 | 内容 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | 操作系统 |
| 上次复习 | 待填写 |

## 为什么这个主题重要

文件权限是最基础的安全控制之一。它回答一个简单问题：

> 谁可以对这个文件或文件夹做什么？

如果权限太开放，用户或程序可能读取、修改、执行它们不该碰的东西。如果权限太严格，正常工作会坏掉。所以权限既是安全主题，也是排错主题。

## 基础权限问题

看权限时，我应该问：

- 谁拥有这个文件？
- 哪个组和它有关？
- 谁能读？
- 谁能改？
- 谁能执行？
- 权限是不是从父文件夹继承来的？
- 权限是否符合实际需要？

## Linux 权限模型

Linux 常见权限显示：

```text
-rwxr-x---
```

拆解：

```text
-   rwx   r-x   ---
|   |     |     |
|   |     |     others
|   |     group
|   owner
file type
```

权限字母：

- `r` 表示 read。
- `w` 表示 write。
- `x` 表示 execute。
- `-` 表示没有这个权限。

## Linux 权限例子

例子：

```text
-rw-r--r--
```

我的理解：

- Owner 可以读和写。
- Group 可以读。
- Others 可以读。
- 没有人可以执行。

例子：

```text
drwxr-xr-x
```

我的理解：

- 这是目录。
- Owner 可以读、写、进入。
- Group 可以读和进入。
- Others 可以读和进入。

对于目录来说，execute 表示可以进入或穿过这个目录。

## Linux 命令

```bash
ls -l
chmod
chown
chgrp
umask
```

例子：

```bash
chmod 600 private-key.txt
chmod 755 script.sh
sudo chown alice:developers project.txt
```

初学者提醒：

不要因为某个东西不能用，就直接跑 `chmod -R 777`。它可能“修好”访问问题，但方式是把东西开放得太过分，这是坏安全习惯。

## 数字权限

Linux 权限也常用数字表示。

```text
read    = 4
write   = 2
execute = 1
```

例子：

- `7` = read + write + execute
- `6` = read + write
- `5` = read + execute
- `4` = read only
- `0` = no permissions

常见模式：

- `644`：owner 可读写，group 和 others 可读。
- `600`：只有 owner 可读写。
- `755`：owner 可读写执行，group 和 others 可读执行。
- `700`：只有 owner 可读写执行。

安全提示：

私钥通常应该限制得很严，比如 `600`。

## Windows 权限

Windows 常用 ACL，也就是 Access Control List。ACL 是一组条目，说明哪些用户或组有什么权限。

常见 Windows 权限：

- Full control
- Modify
- Read & execute
- Read
- Write

初学者版本：

Windows 权限没有 Linux 权限那么一眼紧凑，但本质相同：用户和组被允许或拒绝做某些操作。

## Windows 继承

Windows 文件夹可以把权限传给里面的文件和子文件夹，这叫继承。

为什么重要：

- 一个文件可能是因为父文件夹才有某个权限。
- 修改父文件夹可能影响很多文件。
- 排查访问问题时经常要检查继承。

## Windows 工具和命令

GUI：

```text
Right click file/folder -> Properties -> Security
```

命令行：

```powershell
icacls .\file.txt
icacls .\folder
```

PowerShell：

```powershell
Get-Acl .\file.txt
```

安全角度：

- 敏感文件夹不应该给很宽的写权限。
- 共享文件夹需要认真检查。
- Deny 规则会让排错变复杂。

## Read、Write、Execute 的风险

### Read 风险

如果某人能读文件，就可能看到敏感数据。

例子：

- 密码
- API keys
- 私钥
- 客户数据
- 内部文档

### Write 风险

如果某人能写文件或目录，就可能修改数据。

例子：

- 修改配置
- 替换脚本
- 改网站内容
- 添加恶意文件

### Execute 风险

如果某人能执行文件，就可以运行它。

例子：

- 运行脚本
- 启动程序
- 执行恶意软件

这也是为什么一个会运行脚本的目录如果可写会很危险。

## 权限和权限提升

错误权限可能帮助攻击者获得更多访问权。

例子：

- 普通用户能修改以 admin/root 运行的脚本。
- 服务目录对低权限用户可写。
- 私钥所有人都可读。
- 共享文件夹暴露敏感文件。

所以权限不是无聊的文件设置，而是实实在在的安全控制。

## 排查访问问题

如果用户不能打开或编辑文件，我应该检查：

1. 文件是否存在？
2. 谁拥有它？
3. 权限是什么？
4. 用户是否在需要的组里？
5. 权限是否继承？
6. 文件是否被其他程序锁定？
7. 文件是否在网络共享上？
8. 是否有 deny 规则？

## 小练习

- [ ] 创建 Linux 文件并用 `ls -l` 查看。
- [ ] 用 `chmod` 修改 Linux 权限。
- [ ] 在实验环境里用 `chown` 修改所有权。
- [ ] 用 GUI 查看 Windows 文件夹 ACL。
- [ ] 对测试文件夹运行 `icacls`。
- [ ] 解释为什么 `777` 通常是坏主意。

## 我容易忘的点

- 只有读权限也可能危险。
- 写权限如果作用在脚本或程序路径上，可能变成代码执行。
- Linux 目录的 execute 表示能进入/穿过目录。
- Windows 继承权限会隐藏真正的权限来源。
- 通过“所有人公开”来修访问问题不是真修复。

## 复习问题

- Linux 上 `r`、`w`、`x` 分别表示什么？
- `chmod 600` 是什么意思？
- Windows ACL 是什么？
- 写权限为什么危险？
- 什么是权限继承？
- 为什么 `chmod -R 777` 有风险？

## 参考资料

- [Red Hat: Linux file permissions explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)
- [Microsoft Learn: Access control lists](https://learn.microsoft.com/en-us/windows/win32/secauthz/access-control-lists)
- [Microsoft Learn: icacls](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/icacls)
