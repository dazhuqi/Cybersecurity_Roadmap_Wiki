# TryHackMe

| 字段 | 值 |
| --- | --- |
| 状态 | 学习中 |
| 官网 | [tryhackme.com](https://tryhackme.com/) |
| 主要练习区 | [Hacktivities](https://tryhackme.com/hacktivities) |
| 学习路径 | [Paths](https://tryhackme.com/paths) |
| 最后复习 | 2026-07-01 |

TryHackMe 对我来说可能是比较适合入门的平台，因为很多 room 都是引导式的。作为新手，我经常不知道下一步应该问什么问题，引导式 room 能给大方向，但又不会完全替我学习。

我还是要避免只把答案填进框里。重点是理解每个命令或步骤证明了什么。

## 什么时候使用它

TryHackMe 适合：

- 在做开放式机器前先看引导解释。
- 针对 Linux、网络、Web 基础、SOC 基础等主题练习。
- 不想先搭完整本地实验室时，用浏览器环境练习。
- 在进入更少引导的平台前建立信心。

如果我只是复制答案进任务框，那看起来像进度，但技能不会长多少。

## 我想怎么用

- 先从 beginner-friendly rooms 开始，再跳到更难的 boxes。
- 想系统学习某个主题时使用 learning paths。
- 每个 room 都留短笔记，即使不写完整公开 writeup。
- 记录错误和困惑，因为这些通常比最终答案更有用。
- 几周后回看 room，检查自己还能不能解释主要思路。

## 建议起点

| 区域 | 为什么有帮助 |
| --- | --- |
| Pre Security | 在安全主题变快前补 IT、网络和 Web 概念。 |
| Complete Beginner 风格 rooms | 需要一步步练习和词汇时很适合。 |
| Linux rooms | 练命令、文件、权限、进程和服务。 |
| Networking rooms | 连接 ports、protocols、DNS、HTTP 和 packet 思维。 |
| Web rooms | 在更难 Web exploitation 前练 request/response 思维。 |
| SOC 或蓝队 rooms | 学日志、告警和调查流程。 |

不要一次打开太多 room。一个 active room 加一个 review room 就够。

## Room 笔记格式

```text
Room:
Path or topic:
Date:
Goal:
Concepts:
Commands or actions:
Important output:
Mistake or confusion:
Hint used:
One thing I can explain now:
Follow-up:
```

## 要记录什么

每个 room 我应该记录：

- target IP 或 room target，只在安全且临时时记录
- 使用的命令
- 每条命令为什么重要
- 错误或 dead ends
- 需要查的术语
- 最终学到的概念

不需要粘贴每一行输出。清楚总结比噪声很多的终端输出更有用。

## VPN 和环境笔记

- 如果使用 TryHackMe VPN，结束后断开。
- VPN 文件保持私密。
- 连接时不要扫描非 room targets。
- 不把 personal tokens、VPN 文件或私人账号细节放进截图。
- 如果 room 要登录练习服务，使用单独浏览器 profile 或 lab VM。

## 安全和范围

- 只攻击 room 内或平台明确提供的 targets。
- 不在 lab machines 里复用真实密码。
- 避免把 personal tokens、VPN 文件或私人笔记放进截图。
- 如果 room 规则不允许，不公开答案或 flags。

## 复盘流程

完成 room 后回答：

- 主要技能是什么？
- 最困惑的一步是什么？
- 哪个命令或概念要再练？
- 有没有用 hint？如果有，卡在哪里？
- 这个 room 连接到路线图哪个模块？

## 常用链接

- [TryHackMe](https://tryhackme.com/)
- [Hacktivities](https://tryhackme.com/hacktivities)
- [Learning Paths](https://tryhackme.com/paths)
- [TryHackMe Help Center](https://help.tryhackme.com/)

## 完成的 Rooms

| Room | Path or Topic | Difficulty | Date | Writeup |
| --- | --- | --- | --- | --- |
