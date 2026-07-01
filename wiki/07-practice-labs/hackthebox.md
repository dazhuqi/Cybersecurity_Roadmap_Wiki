# HackTheBox

| Field | Value |
| --- | --- |
| Status | Learning |
| Official Website | [hackthebox.com](https://www.hackthebox.com/) |
| Lab App | [app.hackthebox.com](https://app.hackthebox.com/) |
| Academy | [academy.hackthebox.com](https://academy.hackthebox.com/) |
| CTF Platform | [ctf.hackthebox.com](https://ctf.hackthebox.com/) |
| Last Reviewed | 2026-07-01 |

Hack The Box has several different areas, so I need to be clear about what I am using. The main app is for machines, labs, and challenges. Academy is more lesson-based. Starting Point is better when I need a softer entry into machines.

I should not treat a solved machine as "done" until I can explain the path in normal language: what I found, why it mattered, what I tried that failed, and what the main lesson was.

## Main Areas

| Area | What It Is | How I Should Use It |
| --- | --- | --- |
| Starting Point | Beginner-friendly machine path | Use before harder boxes, especially for basic enumeration and common services. |
| Machines | Standalone vulnerable targets | Practice full workflow: enumeration, foothold, privilege escalation, reporting. |
| Challenges | Smaller category-based tasks | Use for focused practice like crypto, web, reversing, or pwn. |
| Academy | Structured learning modules | Use when I need explanation before trying boxes. |
| CTF | Team and event style practice | Use later for timed practice and communication. |

## How I Want to Use It

- Start with Starting Point or beginner machines before harder retired or active machines.
- Use Academy modules when I need a proper lesson before practice.
- Keep notes on enumeration, initial access, privilege escalation, and cleanup.
- Separate private notes from anything that could reveal active machine solutions.
- Rebuild the attack path after solving, because the first solve is usually messy.

## Machine Note Format

```text
Machine:
Platform area:
Difficulty:
Date:
Scope:
Initial services:
Main enumeration clues:
Foothold idea:
Privilege escalation idea:
Tools used:
Mistakes:
Final lesson:
Writeup status:
```

## Workflow I Want to Practice

### 1. Scope and Setup

- Confirm the machine is assigned by Hack The Box.
- Start the correct VPN or lab connection.
- Record target IP and machine name in private notes.
- Check whether the machine is active or retired before writing public notes.

### 2. Enumeration

Enumeration means carefully learning what is exposed.

Things to record:

- open ports
- service versions
- web paths
- authentication pages
- file shares
- hints from banners or metadata

Beginner reminder:

Do not jump to exploitation after seeing one port. First understand the surface.

### 3. Foothold

Foothold means first access.

For notes, I should record:

- what clue led to access
- what vulnerability or weakness was involved
- what credential, upload, request, or exploit path mattered
- what shell or access level I got

I should avoid storing real-looking passwords in public notes. Lab credentials are still spoilers.

### 4. Privilege Escalation

Privilege escalation means moving from low privilege to higher privilege.

Things to check:

- user permissions
- sudo or admin rights
- running processes
- scheduled tasks
- writable files
- credentials in config files
- kernel or service misconfigurations

## Active Machine Spoiler Rule

Active machine solutions may have publication restrictions. My safe habit:

- keep active machine notes private
- do not publish flags
- do not publish direct exploit paths for active boxes
- write public learning notes only when rules allow it
- use retired boxes for public-style writeups

## Safety and Scope

- Only attack Hack The Box targets that are assigned by the platform.
- Respect active machine rules and do not publish restricted spoilers.
- Keep VPN files private.
- Do not copy exploit code blindly without understanding what it changes.
- Do not run tools against non-HTB IP ranges while connected.

## Useful Links

- [Hack The Box](https://www.hackthebox.com/)
- [Hack The Box App](https://app.hackthebox.com/)
- [Starting Point](https://app.hackthebox.com/starting-point)
- [Hack The Box Academy](https://academy.hackthebox.com/)
- [Hack The Box CTF](https://ctf.hackthebox.com/)
- [Hack The Box Help Center](https://help.hackthebox.com/)

## Review Questions

- What was the first useful enumeration clue?
- Did I understand the service, or did I just follow a hint?
- What mistake cost the most time?
- What could I detect from the defender side?
- What should I practice before the next machine?

## Completed Machines

| Machine | Type | Difficulty | Date | Writeup |
| --- | --- | --- | --- | --- |
