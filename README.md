# Cybersecurity Roadmap Wiki

This repository is a personal learning wiki for cybersecurity. Its structure is based on the [roadmap.sh Cyber Security Roadmap](https://roadmap.sh/cyber-security), but the goal is not to memorize the whole roadmap at once. The goal is to turn each topic into reusable notes, practice records, review questions, and progress tracking.

## Learning Path

The wiki follows the main roadmap areas:

1. Fundamental IT Skills
2. Operating Systems
3. Networking Knowledge
4. Security Skills and Knowledge
5. Cloud Skills and Knowledge
6. Programming Skills

It also includes sections for labs, CTFs, certifications, resources, templates, and learning management.

## Repository Structure

```text
.
|-- README.md
|-- CONTRIBUTING.md
`-- wiki/
    |-- Home.md
    |-- _Sidebar.md
    |-- _Footer.md
    |-- 00-meta/
    |-- 01-fundamental-it-skills/
    |-- 02-operating-systems/
    |-- 03-networking-knowledge/
    |-- 04-security-skills-and-knowledge/
    |-- 05-cloud-skills-and-knowledge/
    |-- 06-programming-skills/
    |-- 07-practice-labs/
    |-- 08-certifications/
    |-- 09-resources/
    |-- assets/
    `-- templates/
```

## How to Use This Wiki

1. Start from `wiki/Home.md` and confirm the current learning stage.
2. For each topic, copy the structure from `wiki/templates/topic-template.md`.
3. For each lab, CTF, or hands-on exercise, use `wiki/templates/lab-writeup-template.md`.
4. Update `wiki/00-meta/progress-tracker.md` and `wiki/00-meta/weekly-review.md` weekly.
5. Use a conventional commit for every update.

## Status Labels

Use these labels consistently across wiki pages:

| Status | Meaning |
| --- | --- |
| Not Started | The topic has not been started yet |
| Learning | The topic is being studied |
| Practicing | The topic is being practiced hands-on |
| Reviewed | The topic has been reviewed and can be explained |
| Archived | The topic is paused or no longer actively maintained |

## Commit Rules

Every new update or change must use a conventional commit. Examples:

```bash
git commit -m "docs: add subnetting notes"
git commit -m "docs(networking): add wireshark lab writeup"
git commit -m "chore: organize wiki screenshots"
```

See `CONTRIBUTING.md` for more details.

## Recommended Commit Size

Do not put unrelated changes into one large commit. Use focused commits:

| Scenario | Recommended commit |
| --- | --- |
| Add or update repository documentation | `docs: update repository overview` |
| Add a learning module scaffold | `docs(networking): add networking notes scaffold` |
| Add a specific note | `docs(networking): add subnetting notes` |
| Add a lab writeup | `docs(labs): add tryhackme intro writeup` |
| Organize images or templates | `chore: organize wiki assets` |

A good commit should answer one question clearly: "What single topic changed here?"
