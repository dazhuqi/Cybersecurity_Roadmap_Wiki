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

## Review 清单

- [ ] 是否写明 scope？
- [ ] 是否移除敏感信息？
- [ ] 是否解释每个主要步骤为什么重要？
- [ ] 是否包含 mistakes 或 dead ends？
- [ ] 是否链接这个 lab 支持的路线图主题？
- [ ] 是否标明是否允许公开分享？

## 索引

| Date | Platform | Lab | Status | Link |
| --- | --- | --- | --- | --- |
