# Wiki 结构

这个 wiki 按路线图模块、实践模块、资源和可复用模板组织。目标是让学习笔记在网页 UI 里好浏览，也能在 Git 里好维护。

## 结构原则

- `00-meta`：学习计划、进度、术语表和复盘。
- `01` 到 `06`：对齐 roadmap.sh Cyber Security roadmap 的主要区域。
- `07-practice-labs`：Labs、CTFs 和动手记录。
- `08-certifications`：认证路径和备考笔记。
- `09-resources`：课程、书籍、工具和参考网站。
- `templates`：可复用笔记模板。
- `assets`：图片、截图和 diagrams。
- `wiki-zh`：和英文 wiki 结构对应的中文版本。

## 语言结构

英文页面在：

```text
wiki/
```

中文页面在：

```text
wiki-zh/
```

中文路径应该尽量镜像英文路径。

例子：

```text
wiki/07-practice-labs/tryhackme.md
wiki-zh/07-practice-labs/tryhackme.md
```

这样网页语言切换会更稳定。

## 新页面规则

- 尽量把新页面加到已有模块。
- 如果主题跨多个模块，选择主要语境，并从相关页面链接过去。
- 文件名使用 lowercase 和 hyphens。
- 一个文件尽量只写一个主题。
- 页面保持实用：concept、examples、mistakes、practice、review questions、references。
- 如果网页 UI 需要显示，就把页面加入 navigation。

## Commit 规则

这个仓库里，文档历史要保持可读：

- 英文内容：通常一个文件更新一个 conventional commit。
- 中文翻译整个 folder：可以一个 folder-level conventional commit。
- 文档改动使用 `docs(...)`。
- 中文翻译或本地化更新使用 `docs(i18n)`。

例子：

```text
docs(labs): expand tryhackme practice notes
docs(i18n): expand chinese lab practice notes
```

## 页面质量清单

把页面视为完成前，检查：

- [ ] 是否解释了这个主题为什么重要？
- [ ] 是否定义了新手词汇？
- [ ] 是否包含常见错误？
- [ ] 是否包含练习想法或命令？
- [ ] 是否包含复习问题？
- [ ] 是否链接官方或稳定参考资料？
- [ ] 如果该 folder 支持中文，中文版本是否存在？

## Assets

`assets/` 用于图片、diagrams 和截图。

规则：

- 截图里不要包含 secrets、tokens、个人邮箱或 private IPs。
- 图片尽量小且可读。
- 文件名要描述清楚。
- 用相对路径链接图片。
