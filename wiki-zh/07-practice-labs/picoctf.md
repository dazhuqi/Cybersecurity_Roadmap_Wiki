# picoCTF

| 字段 | 值 |
| --- | --- |
| 状态 | 学习中 |
| 官网 | [picoctf.org](https://picoctf.org/) |
| 练习平台 | [play.picoctf.org](https://play.picoctf.org/) |
| 最后复习 | 2026-07-01 |

picoCTF 是很适合入门的 CTF 平台，因为很多 challenge 都比较小，而且按类别分开。这比一上来做完整机器更容易一次练一个技能。

我应该用它建立 web、crypto、forensics、reverse engineering、binary exploitation 和 general problem solving 的基础信心。我不需要解得很快，而是要学会认真读题，并在事后解释思路。

## 为什么有帮助

picoCTF 有用是因为：

- challenges 通常比完整机器小
- 分类能更容易暴露弱项
- 入门题能建立信心
- 很多题适合短时间练习
- 它训练认真读题和基础工具使用

重要习惯不是“拿 flag”，而是“解释 trick 或 concept”。

## 常见类别

| 类别 | 我应该练什么 |
| --- | --- |
| Web Exploitation | HTTP、cookies、source code、requests、简单 auth logic、input handling |
| Cryptography | encoding vs encryption、古典密码、hashes、keys、错误假设 |
| Forensics | file types、metadata、packet captures、hidden data、logs |
| Reverse Engineering | strings、简单 binaries、control flow、基础 assembly clues |
| Binary Exploitation | memory basics、unsafe input、stack concepts、mitigations |
| General Skills | Linux commands、scripting、archives、search、problem solving |

## Challenge 笔记格式

```text
Challenge:
Category:
Difficulty or points:
Date:
Prompt summary:
Files provided:
First idea:
What worked:
What failed:
Tool or command:
Concept learned:
Can I explain it without the solution?
```

## 我想怎么用

- 从简单 challenges 开始，并写下 trick 或 concept。
- 按 category 分组笔记，让模式更容易看出来。
- 保存有用的 commands、scripts 或 reasoning steps。
- 之后重看已解决题，检查自己还能不能解释。
- 不要太早看完整解答；如果可能，先用小 hint。

## 避免假进度

假进度：

- 直接查 full flag
- 复制 solver script 但不读
- 只靠 writeups 里的模式匹配解题
- 不写概念

真进度：

- 识别 category
- 解释第一个猜测为什么失败
- 学到一个命令或技术
- 写小脚本并理解它
- 之后用更少帮助解决相似题

## 分类练习想法

### Web

- inspect HTML and JavaScript
- 在 browser devtools 看 requests
- 比较 GET 和 POST
- 理解 cookies 和 headers
- 写下为什么某个 parameter 重要

### Crypto

- 识别是 encoding、hashing 还是 encryption
- 写下 key 或 assumption
- 不要把 Base64 叫 encryption
- 解释 challenge 里的 cipher 为什么弱

### Forensics

- 识别 file type
- 检查 metadata
- 查看 strings
- 仔细看 packet captures
- 保持原始 evidence 不变

### Reverse Engineering

- 从 `strings` 和 file type 开始
- 识别明显 input checks
- 写下 binary 似乎期待什么
- 如果只是猜到，不要假装懂 assembly

### Binary Exploitation

- 慢慢来
- 先学 stack 和 memory basics
- 记录 protections 和 crash behavior
- 如果太抽象，把它当后期技能

## 安全和范围

- 只在 picoCTF challenge environments 内工作。
- 除非规则允许，不把 flags 粘到公开笔记。
- 避免没有上下文地分享 challenge spoilers。
- helper scripts 放到明确标记的 practice folder。
- 不在正常系统上直接运行下载的 binaries，先用 lab setup。

## 常用链接

- [picoCTF](https://picoctf.org/)
- [picoCTF Practice](https://play.picoctf.org/)
- [picoPrimer](https://primer.picoctf.org/)

## 复习问题

- 这个 challenge 真正在考哪个 category？
- 我在尝试工具前是否理解了 prompt？
- 最小但关键的 clue 是什么？
- 哪个 command 或 concept 应该加进笔记？
- 不看 writeup 能不能解相似题？

## Challenges

| Challenge | Category | Difficulty or Points | Date | Writeup |
| --- | --- | --- | --- | --- |
