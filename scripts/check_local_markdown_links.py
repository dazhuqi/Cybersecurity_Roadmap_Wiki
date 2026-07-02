"""Check local Markdown links in the wiki.

The script only validates local file paths. External links are skipped because
they can fail for network reasons and should be reviewed separately.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote


ROOT = Path(__file__).resolve().parents[1]
LINK_RE = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")

SKIP_SCHEMES = (
    "http:",
    "https:",
    "mailto:",
    "tel:",
)

IGNORED_TARGETS = {
    "wiki-zh/04-security-skills-and-knowledge/README.md",
    "wiki-zh/06-programming-skills/README.md",
}


def markdown_files() -> list[Path]:
    files: list[Path] = []
    for folder in ("wiki", "wiki-zh"):
        base = ROOT / folder
        if base.exists():
            files.extend(base.rglob("*.md"))

    for file_name in ("README.md", "CONTRIBUTING.md"):
        file_path = ROOT / file_name
        if file_path.exists():
            files.append(file_path)

    return sorted(files)


def clean_target(raw_target: str) -> str:
    target = raw_target.strip()
    if target.startswith("<") and target.endswith(">"):
        target = target[1:-1]
    return target


def is_external_or_anchor(target: str) -> bool:
    lowered = target.lower()
    return (
        not target
        or target.startswith("#")
        or lowered.startswith(SKIP_SCHEMES)
    )


def target_path(source: Path, target: str) -> Path:
    target_without_anchor = target.split("#", 1)[0]
    decoded = unquote(target_without_anchor)
    return (source.parent / decoded).resolve()


def relative_to_root(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()


def should_ignore(path: Path) -> bool:
    try:
        rel = relative_to_root(path)
    except ValueError:
        return False
    return rel in IGNORED_TARGETS


def main() -> int:
    broken: list[str] = []
    ignored: list[str] = []

    for source in markdown_files():
        text = source.read_text(encoding="utf-8")
        for match in LINK_RE.finditer(text):
            target = clean_target(match.group(1))
            if is_external_or_anchor(target):
                continue

            path = target_path(source, target)
            if path.exists():
                continue

            message = f"{relative_to_root(source)} -> {target}"
            if should_ignore(path):
                ignored.append(message)
            else:
                broken.append(message)

    if ignored:
        print("Ignored intentionally deferred links:")
        for item in ignored:
            print(f"  - {item}")

    if broken:
        print("Broken local Markdown links:")
        for item in broken:
            print(f"  - {item}")
        return 1

    print("No broken local Markdown links found.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

