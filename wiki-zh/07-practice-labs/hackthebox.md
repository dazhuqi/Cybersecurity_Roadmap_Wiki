# HackTheBox

| 字段 | 值 |
| --- | --- |
| 状态 | 学习中 |
| 官网 | [hackthebox.com](https://www.hackthebox.com/) |
| Lab App | [app.hackthebox.com](https://app.hackthebox.com/) |
| Academy | [academy.hackthebox.com](https://academy.hackthebox.com/) |
| CTF Platform | [ctf.hackthebox.com](https://ctf.hackthebox.com/) |
| 最后复习 | 2026-07-01 |

Hack The Box 有几个不同区域，所以我需要先弄清自己在用哪一个。主 app 用于 machines、labs 和 challenges。Academy 更偏课程。Starting Point 更适合我刚开始做机器时过渡。

一个 machine 解出来不代表真的“完成”。除非我能用普通语言解释：发现了什么、为什么重要、哪些尝试失败了、主要 lesson 是什么。

## 主要区域

| 区域 | 是什么 | 我应该怎么用 |
| --- | --- | --- |
| Starting Point | 入门友好的机器路径 | 在更难 box 前使用，尤其练基础 enumeration 和常见服务。 |
| Machines | 独立漏洞目标 | 练完整流程：enumeration、foothold、privilege escalation、reporting。 |
| Challenges | 更小的分类任务 | 针对 crypto、web、reversing、pwn 等练习。 |
| Academy | 结构化学习模块 | 需要解释后再做 box 时使用。 |
| CTF | 团队和活动式练习 | 后期用于限时练习和沟通。 |

## 我想怎么用

- 先从 Starting Point 或 beginner machines 开始。
- 需要正式解释时使用 Academy modules。
- 记录 enumeration、initial access、privilege escalation 和 cleanup。
- 私人笔记和可能泄露 active machine solution 的内容分开。
- 解完后重建攻击路径，因为第一次解通常很乱。

## Machine 笔记格式

```text
Machine:
Platform area:
Difficulty:
Date:
Scope:
Initial services:
Main enumeration clues:
Foothold idea:
Privilege escalation idea:
Tools used:
Mistakes:
Final lesson:
Writeup status:
```

## 我想练的流程

### 1. Scope 和 Setup

- 确认 machine 是 Hack The Box 分配的。
- 启动正确 VPN 或 lab connection。
- 在私人笔记里记录 target IP 和 machine name。
- 写公开笔记前确认 machine 是 active 还是 retired。

### 2. Enumeration

Enumeration 是认真了解暴露了什么。

要记录：

- open ports
- service versions
- web paths
- authentication pages
- file shares
- banner 或 metadata 里的 hints

新手提醒：

不要看到一个端口就马上 exploitation。先理解 attack surface。

### 3. Foothold

Foothold 表示第一次拿到访问。

笔记里应该记录：

- 什么线索导向 access
- 涉及什么漏洞或弱点
- 哪个 credential、upload、request 或 exploit path 重要
- 得到了什么 shell 或访问级别

公开笔记里不要保存像真的密码一样的内容。Lab credentials 仍然是 spoilers。

### 4. Privilege Escalation

Privilege escalation 是从低权限到更高权限。

检查：

- user permissions
- sudo 或 admin rights
- running processes
- scheduled tasks
- writable files
- config files 里的 credentials
- kernel 或 service misconfigurations

## Active Machine Spoiler 规则

Active machine solutions 可能有发布限制。安全习惯：

- active machine notes 保持私密
- 不发布 flags
- 不发布 active boxes 的直接 exploit paths
- 只有规则允许时再写公开 learning notes
- 用 retired boxes 写公开风格 writeups

## 安全和范围

- 只攻击 Hack The Box 平台分配的 targets。
- 尊重 active machine rules，不发布受限 spoilers。
- VPN 文件保持私密。
- 不盲目复制 exploit code，要理解它会改什么。
- 连接时不要对非 HTB IP ranges 运行工具。

## 常用链接

- [Hack The Box](https://www.hackthebox.com/)
- [Hack The Box App](https://app.hackthebox.com/)
- [Starting Point](https://app.hackthebox.com/starting-point)
- [Hack The Box Academy](https://academy.hackthebox.com/)
- [Hack The Box CTF](https://ctf.hackthebox.com/)
- [Hack The Box Help Center](https://help.hackthebox.com/)

## 复习问题

- 第一个有用的 enumeration clue 是什么？
- 我理解了服务，还是只跟着 hint？
- 哪个错误最浪费时间？
- 从 defender 视角可以检测什么？
- 下一个 machine 前应该练什么？

## 完成的 Machines

| Machine | Type | Difficulty | Date | Writeup |
| --- | --- | --- | --- | --- |
