# Chinese Wiki Content

This folder is reserved for optional Chinese versions of the wiki notes.

The web wiki uses the same file path as the English source, but under `wiki-zh/`.
For example:

| English source | Chinese source |
| --- | --- |
| `wiki/Home.md` | `wiki-zh/Home.md` |
| `wiki/01-fundamental-it-skills/README.md` | `wiki-zh/01-fundamental-it-skills/README.md` |
| `wiki/03-networking-knowledge/packet-analysis.md` | `wiki-zh/03-networking-knowledge/packet-analysis.md` |

If a Chinese page does not exist yet, the website automatically falls back to the English page in `wiki/`.
This lets the English notes stay usable while Chinese translations are added one page at a time.

## Translation Notes

- Keep the same heading structure as the English page when possible.
- Keep command examples, file paths, protocol names, and tool names in their original form.
- Add beginner-friendly explanations instead of direct word-for-word translations when that makes the note clearer.
- Commit each translated Markdown file separately with a conventional commit.
