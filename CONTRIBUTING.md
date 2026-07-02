# Contributing

This repository is mainly for personal learning notes, but the history should still stay clear and easy to review.

## Conventional Commit Rules

Every update or change must use a conventional commit.

Common types:

| Type | Use case |
| --- | --- |
| `docs` | Add or update learning notes, README files, or wiki pages |
| `chore` | Organize directories, resources, assets, or repository maintenance files |
| `fix` | Correct wrong notes, links, commands, or explanations |
| `feat` | Add runnable scripts, lab environments, or automation |
| `refactor` | Reorganize content without changing its meaning |

Recommended format:

```text
<type>(optional-scope): <short summary>
```

Examples:

```text
docs: scaffold cybersecurity roadmap wiki
docs(networking): add subnetting notes
docs(labs): add tryhackme intro writeup
fix(security): correct cia triad definition
chore: organize wiki assets
```

## Note Format

Each topic page should usually include:

- Learning goals
- Core concepts
- Common commands or tools
- Practice records
- Common pitfalls
- Review questions
- References

Start from `wiki/templates/topic-template.md` when creating a new topic page.

## Issues and Pull Requests

Use the GitHub issue templates when planning a documentation update, lab writeup, or resource suggestion. A good issue should name the page or roadmap module, explain the learning goal, and include official or stable references when possible.

Pull requests should stay small enough to review:

- One topic page update
- One translation sync
- One lab writeup
- One resource list update
- One repository maintenance change

Before opening a pull request, check that sensitive lab material is removed and that related English or Chinese pages are kept in sync when needed.

## Local Checks

Run the local Markdown link checker after changing internal links:

```bash
python scripts/check_local_markdown_links.py
```

The checker skips external URLs and only validates local files. The currently deferred Chinese `04` and `06` module links are intentionally ignored until those folders are created.

## File Naming

- Use lowercase English names with hyphens, such as `ip-subnetting.md`.
- Keep a `README.md` entry page in every module directory.
- Put screenshots in `wiki/assets/screenshots/`.
- Put diagrams and diagram source files in `wiki/assets/diagrams/`.

## Commit Granularity

One commit should usually do one thing:

- Add one note
- Fix one group of related links
- Add one lab writeup
- Adjust one module structure

Avoid mixing unrelated topics in the same commit.

## Split Commit Example

If you create the initial wiki structure, do not put everything into one large commit. A good split would be:

```text
docs: update repository overview and contribution guide
docs(wiki): add home navigation pages
docs(meta): add learning trackers
docs(it): add fundamental it notes scaffold
docs(os): add operating systems notes scaffold
docs(networking): add networking notes scaffold
docs(security): add security notes scaffold
docs(cloud): add cloud notes scaffold
docs(programming): add programming notes scaffold
docs(labs): add practice lab scaffold
docs(certifications): add certification tracking scaffold
docs(resources): add learning resources scaffold
docs(templates): add note templates and asset folders
```

When deciding whether to split a change, ask:

- Can this change be reviewed independently?
- Would reverting this change accidentally remove an unrelated topic?
- Does the commit message need the word `and` to explain it?

If the answer shows multiple topics, split the work into multiple commits.
