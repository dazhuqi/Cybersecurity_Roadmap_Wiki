# Lab Writeups

This folder is for finished or draft lab writeups. A writeup should help me remember the reasoning path, not only the final answer.

Use [lab-writeup-template.md](../../templates/lab-writeup-template.md) when creating a new lab record.

## What Belongs Here

Good writeups include:

- platform and lab name
- scope
- objective
- environment
- key steps
- evidence
- mistakes
- lessons learned
- follow-up study

Things that should not be here:

- real secrets
- VPN files
- personal tokens
- private IPs that do not belong to the lab
- restricted active-machine spoilers
- huge raw output with no explanation

## Naming Convention

Use a simple filename:

```text
YYYY-MM-DD-platform-lab-name.md
```

Example:

```text
2026-07-01-tryhackme-example-room.md
```

## Writeup Levels

| Level | Use Case | Expected Detail |
| --- | --- | --- |
| Short note | Easy room or review | Goal, main commands, lesson learned |
| Full writeup | Important lab | Scope, enumeration, steps, evidence, lessons |
| Report style | SANS-style or capstone | Executive summary, objective evidence, clear findings |

## Safe Sharing Notes

Before making a writeup public, I should check the platform rules and the lab status. Some platforms allow retired-machine writeups but not active-machine spoilers. Some rooms are fine for public notes, while others ask learners not to publish flags or full solutions.

When in doubt, keep the writeup private or publish a sanitized learning note instead of a step-by-step solution.

Useful public version:

- what skill the lab practiced
- what I misunderstood at first
- what general method helped
- what I would review next

Risky public version:

- exact flags
- active-machine answers
- copied exploit output with no explanation
- credentials, tokens, VPN details, or private screenshots

## Review Checklist

- [ ] Did I state the scope?
- [ ] Did I remove sensitive information?
- [ ] Did I explain why each major step mattered?
- [ ] Did I include mistakes or dead ends?
- [ ] Did I link the roadmap topic this lab supports?
- [ ] Did I mark whether public sharing is allowed?

## How to Review Old Writeups

Old writeups should not just sit here forever. Once in a while, I should reopen one and ask:

- Can I still explain the main idea?
- Did I over-focus on commands and under-explain reasoning?
- Is there a related roadmap note I should link?
- Did I learn a better method later?
- Should this be promoted from a short note to a full writeup?

## Index

| Date | Platform | Lab | Status | Link |
| --- | --- | --- | --- | --- |
