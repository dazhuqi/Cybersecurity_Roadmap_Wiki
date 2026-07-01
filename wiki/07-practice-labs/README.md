# 07 Practice Labs and CTFs

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Practice Labs and CTFs |
| Last Reviewed | 2026-07-01 |

This directory records authorized labs, vulnerable machines, CTFs, and review notes. Practice is where the roadmap stops being only reading. The point is not to collect badges quickly. The point is to learn how to investigate, test, explain, and stay inside scope.

Beginner version:

> A lab is useful only if I can explain what I did, why I did it, and what I learned from mistakes.

## Platforms

| Platform | Local Notes | Official Website | What I Use It For |
| --- | --- | --- | --- |
| Hack The Box | [hackthebox.md](hackthebox.md) | [hackthebox.com](https://www.hackthebox.com/) | Machines, Starting Point, Academy-style practice, and CTFs |
| TryHackMe | [tryhackme.md](tryhackme.md) | [tryhackme.com](https://tryhackme.com/) | Guided rooms, beginner paths, and browser-based labs |
| VulnHub | [vulnhub.md](vulnhub.md) | [vulnhub.com](https://www.vulnhub.com/) | Downloadable vulnerable VMs for local lab practice |
| picoCTF | [picoctf.md](picoctf.md) | [picoctf.org](https://picoctf.org/) | Beginner-friendly CTF challenges and category practice |
| SANS Holiday Hack Challenge | [sans-holiday-hack-challenge.md](sans-holiday-hack-challenge.md) | [SANS Holiday Hack Challenge](https://www.sans.org/cyber-ranges/holiday-hack-challenge) | Seasonal hands-on challenges and report writing practice |

## Lab Mindset

I should treat labs as controlled practice, not as permission to test the wider internet.

Before starting, I need to know:

- what target is in scope
- what actions are allowed
- what network or VPN is required
- what hints or writeups are allowed
- whether public writeups are restricted
- what evidence I should save

If I cannot identify the scope, I should pause and reread the platform rules.

## Recording Principles

- Record only authorized environments.
- Sanitize command output before saving or publishing it.
- Keep VPN files, tokens, personal IPs, and account details private.
- Separate private notes from public writeups.
- Write down failed attempts, not only the final answer.
- Record the reason for each command, not just the command itself.
- End each lab with at least one lesson learned.

## Before Starting a Lab

- [ ] Confirm the platform rules and scope.
- [ ] Check whether the target is active, retired, private, or public.
- [ ] Start the correct VPN or lab environment if needed.
- [ ] Make sure I am not connected to unrelated sensitive networks.
- [ ] Create a note file before running commands.
- [ ] Record the start time, target name, and goal.
- [ ] Decide whether this will be a full writeup or a short learning note.

## During a Lab

Good notes should include:

- commands or actions
- why I ran them
- important output
- what the output means
- what I tried next
- what confused me
- screenshots only when they prove something useful

Bad note pattern:

```text
nmap
gobuster
found flag
done
```

Better note pattern:

```text
I scanned the lab target to identify exposed services.
Port 80 showed an HTTP service, so I opened it in a browser.
The page hinted at a hidden directory, so I tested directory enumeration with a small wordlist.
```

## After a Lab

After finishing or stopping, I should write:

- what the objective was
- what worked
- what failed
- what concept appeared
- what tool I used
- what I would review next

If I used a hint or writeup, I should say where I needed help. That is not failure. It is a useful map of weak spots.

## Writeups

- [writeups/README.md](writeups/README.md)
- [Lab Writeup Template](../templates/lab-writeup-template.md)

## Skill Coverage

| Skill Area | Lab Evidence I Want |
| --- | --- |
| Linux basics | navigation, permissions, processes, services |
| Networking | ports, protocols, packet captures, DNS, HTTP |
| Web security | requests, responses, auth, input handling, OWASP-style issues |
| Cryptography | encoding vs encryption, keys, hashes, protocol mistakes |
| Forensics | file metadata, logs, packet captures, timeline notes |
| Reverse engineering | static clues, strings, basic control flow |
| Reporting | clear objective, evidence, risk, and lessons |

## Safety Rules

- Do not attack systems outside the lab target.
- Do not reuse real passwords inside lab machines.
- Do not upload personal secrets or work files to lab systems.
- Do not publish restricted spoilers for active labs.
- Do not bridge vulnerable VMs to a normal home or work network unless I know exactly why.
- Stop and verify scope if a command might affect something outside the lab.

## Review Questions

- What is the target scope?
- What did I learn that connects to the roadmap?
- What did I do manually instead of blindly following a hint?
- What evidence proves the main step?
- What should I practice again?

## References

- [Hack The Box](https://www.hackthebox.com/)
- [TryHackMe](https://tryhackme.com/)
- [VulnHub](https://www.vulnhub.com/)
- [picoCTF](https://picoctf.org/)
- [SANS Holiday Hack Challenge](https://www.sans.org/cyber-ranges/holiday-hack-challenge)
