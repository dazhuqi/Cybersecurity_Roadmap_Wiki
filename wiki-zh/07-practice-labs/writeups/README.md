# 实验 Writeups

这个文件夹用于保存完成或草稿状态的实验 writeups。Writeup 应该帮助我记住推理路径，而不只是最终答案。

创建新实验记录时使用 [lab-writeup-template.md](../../templates/lab-writeup-template.md)。

## 这里应该放什么

好的 writeup 包括：

- 平台和实验名
- scope
- objective
- environment
- key steps
- evidence
- mistakes
- lessons learned
- follow-up study

不应该放：

- 真实 secrets
- VPN files
- personal tokens
- 不属于 lab 的 private IPs
- 受限 active-machine spoilers
- 没解释的大段 raw output

## 命名规则

使用简单文件名：

```text
YYYY-MM-DD-platform-lab-name.md
```

例子：

```text
2026-07-01-tryhackme-example-room.md
```

## Writeup 级别

| 级别 | 使用场景 | 预期详细度 |
| --- | --- | --- |
| Short note | 简单 room 或 review | Goal、主要 commands、lesson learned |
| Full writeup | 重要 lab | Scope、enumeration、steps、evidence、lessons |
| Report style | SANS 风格或 capstone | Executive summary、objective evidence、clear findings |

## 安全分享提醒

把 writeup 公开之前，我应该先检查平台规则和 lab 状态。有些平台允许 retired machine writeup，但不允许 active machine spoiler。有些 room 可以公开学习记录，有些则要求不要发布 flag 或完整答案。

不确定时，就保持 private，或者只发布 sanitized learning note，而不是 step-by-step solution。

比较适合公开的版本：

- 这个 lab 练了什么技能
- 我一开始误解了什么
- 哪个 general method 有帮助
- 我接下来要复习什么

比较危险的公开版本：

- exact flags
- active-machine answers
- copied exploit output with no explanation
- credentials、tokens、VPN details 或 private screenshots

## Review 清单

- [ ] 是否写明 scope？
- [ ] 是否移除敏感信息？
- [ ] 是否解释每个主要步骤为什么重要？
- [ ] 是否包含 mistakes 或 dead ends？
- [ ] 是否链接这个 lab 支持的路线图主题？
- [ ] 是否标明是否允许公开分享？

## 怎么复习旧 Writeup

旧 writeup 不应该只是一直放着。隔一段时间我应该重新打开一篇，然后问：

- 我现在还能解释主要思路吗？
- 我是不是过度关注命令，而没有解释 reasoning？
- 有没有相关 roadmap note 应该链接？
- 后来我有没有学到更好的方法？
- 这篇是否应该从 short note 升级成 full writeup？

## 索引

| Date | Platform | Lab | Status | Link |
| --- | --- | --- | --- | --- |
