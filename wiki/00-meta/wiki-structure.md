# Wiki Structure

This wiki is organized as roadmap modules, practice modules, resources, and reusable templates. The goal is to keep learning notes easy to browse from the web UI and easy to maintain in Git.

## Structure Principles

- `00-meta`: Learning plans, progress, glossary, and reviews.
- `01` to `06`: Main areas aligned with the roadmap.sh Cyber Security roadmap.
- `07-practice-labs`: Labs, CTFs, and hands-on records.
- `08-certifications`: Certification path and preparation notes.
- `09-resources`: Courses, books, tools, and reference websites.
- `templates`: Reusable note templates.
- `assets`: Images, screenshots, and diagrams.
- `wiki-zh`: Chinese versions matching the English wiki structure.

## Language Structure

English pages live under:

```text
wiki/
```

Chinese pages live under:

```text
wiki-zh/
```

The Chinese path should mirror the English path when possible.

Example:

```text
wiki/07-practice-labs/tryhackme.md
wiki-zh/07-practice-labs/tryhackme.md
```

This keeps the web language switch predictable.

## New Page Rules

- Add new pages to an existing module whenever possible.
- If a topic crosses multiple modules, choose the primary context and link to it from related pages.
- Use lowercase filenames with hyphens.
- Prefer one topic per file.
- Keep pages practical: concept, examples, mistakes, practice, review questions, references.
- Add the page to navigation if the web UI needs to show it.

## Commit Rules

For this repository, keep documentation history readable:

- English content: one file update should usually be one conventional commit.
- Chinese translation for a full folder: one folder-level conventional commit is okay.
- Use `docs(...)` for documentation changes.
- Use `docs(i18n)` for Chinese translation or localization updates.

Examples:

```text
docs(labs): expand tryhackme practice notes
docs(i18n): expand chinese lab practice notes
```

## Page Quality Checklist

Before considering a page complete, check:

- [ ] Does it explain why the topic matters?
- [ ] Does it define beginner vocabulary?
- [ ] Does it include common mistakes?
- [ ] Does it include practice ideas or commands?
- [ ] Does it include review questions?
- [ ] Does it link to official or stable references?
- [ ] Does the Chinese version exist if the folder supports Chinese?

## Assets

Use `assets/` for images, diagrams, and screenshots.

Rules:

- Do not include secrets, tokens, personal emails, or private IPs in screenshots.
- Prefer small, readable images.
- Give files descriptive names.
- Link images with relative paths.
