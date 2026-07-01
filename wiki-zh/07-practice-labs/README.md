# 07 实验和 CTF

| 字段 | 值 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | Practice Labs and CTFs |
| 最后复习 | 2026-07-01 |

这个目录记录授权实验、漏洞靶机、CTF 和复盘笔记。实践是路线图从“只读”变成“真的会做”的地方。重点不是快速收集 badge，而是学习怎么调查、测试、解释，并且始终待在授权范围内。

新手版理解：

> 一个实验只有在我能解释做了什么、为什么做、从错误里学到什么时，才真的有用。

## 平台

| 平台 | 本地笔记 | 官网 | 我用来做什么 |
| --- | --- | --- | --- |
| Hack The Box | [hackthebox.md](hackthebox.md) | [hackthebox.com](https://www.hackthebox.com/) | 机器、Starting Point、Academy 风格练习和 CTF |
| TryHackMe | [tryhackme.md](tryhackme.md) | [tryhackme.com](https://tryhackme.com/) | 引导式房间、入门路径、浏览器实验 |
| VulnHub | [vulnhub.md](vulnhub.md) | [vulnhub.com](https://www.vulnhub.com/) | 下载漏洞 VM，在本地实验室练习 |
| picoCTF | [picoctf.md](picoctf.md) | [picoctf.org](https://picoctf.org/) | 入门 CTF 题目和分类练习 |
| SANS Holiday Hack Challenge | [sans-holiday-hack-challenge.md](sans-holiday-hack-challenge.md) | [SANS Holiday Hack Challenge](https://www.sans.org/cyber-ranges/holiday-hack-challenge) | 季节性挑战和报告写作练习 |

## 实验心态

我应该把实验当成受控练习，而不是测试整个互联网的许可。

开始前要知道：

- 哪个 target 在 scope 内
- 哪些动作被允许
- 需要什么网络或 VPN
- 是否允许使用 hints 或 writeups
- 是否限制公开 writeups
- 应该保存什么证据

如果我无法确认 scope，就应该停下来重读平台规则。

## 记录原则

- 只记录授权环境。
- 保存或发布前清理命令输出。
- VPN 文件、tokens、个人 IP、账号细节要保密。
- 私人笔记和公开 writeup 分开。
- 记录失败尝试，不只记录最终答案。
- 写下每条命令的原因，而不是只复制命令。
- 每个实验最后至少写一个 lesson learned。

## 实验前

- [ ] 确认平台规则和 scope。
- [ ] 检查目标是 active、retired、private 还是 public。
- [ ] 需要时启动正确 VPN 或实验环境。
- [ ] 确认自己没有连着无关的敏感网络。
- [ ] 运行命令前先创建笔记文件。
- [ ] 记录开始时间、目标名和目标。
- [ ] 决定这次写完整 writeup 还是短学习笔记。

## 实验中

好笔记应该包括：

- commands 或 actions
- 为什么运行它
- 重要输出
- 输出是什么意思
- 下一步尝试
- 困惑点
- 只在能证明事情时保存截图

坏笔记模式：

```text
nmap
gobuster
found flag
done
```

更好的笔记模式：

```text
I scanned the lab target to identify exposed services.
Port 80 showed an HTTP service, so I opened it in a browser.
The page hinted at a hidden directory, so I tested directory enumeration with a small wordlist.
```

## 实验后

完成或暂停后，我应该写：

- 目标是什么
- 什么有效
- 什么失败
- 出现了什么概念
- 用了什么工具
- 下一步要复习什么

如果用了 hint 或 writeup，就写清楚哪里需要帮助。这不是失败，而是弱点地图。

## Writeups

- [writeups/README.md](writeups/README.md)
- [Lab Writeup Template](../templates/lab-writeup-template.md)

## 技能覆盖

| 技能区域 | 我想留下的实验证据 |
| --- | --- |
| Linux 基础 | navigation、permissions、processes、services |
| 网络 | ports、protocols、packet captures、DNS、HTTP |
| Web 安全 | requests、responses、auth、input handling、OWASP 风格问题 |
| 密码学 | encoding vs encryption、keys、hashes、协议错误 |
| 取证 | file metadata、logs、packet captures、timeline notes |
| 逆向 | static clues、strings、基础 control flow |
| 报告 | 清楚的目标、证据、风险和 lessons |

## 安全规则

- 不攻击实验 target 之外的系统。
- 不在实验机器里复用真实密码。
- 不上传个人 secrets 或工作文件到实验系统。
- 不发布 active labs 的受限 spoiler。
- 除非非常清楚原因，否则不要把漏洞 VM bridge 到正常家庭或工作网络。
- 如果命令可能影响实验外系统，先停下来确认 scope。

## 复习问题

- target scope 是什么？
- 我学到的内容连接到路线图哪个模块？
- 哪些步骤是我手动理解的，而不是只跟着 hint？
- 什么证据证明关键步骤？
- 我应该再次练习什么？

## 参考资料

- [Hack The Box](https://www.hackthebox.com/)
- [TryHackMe](https://tryhackme.com/)
- [VulnHub](https://www.vulnhub.com/)
- [picoCTF](https://picoctf.org/)
- [SANS Holiday Hack Challenge](https://www.sans.org/cyber-ranges/holiday-hack-challenge)
