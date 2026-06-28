# Cheatsheets

Cheatsheets are for quick reminders, not for skipping fundamentals. If I use a cheatsheet often, I should turn the repeated parts into my own notes.

## Cheatsheet Index

| Topic | Link | Use Case | Notes |
| --- | --- | --- | --- |
| OWASP Cheat Sheet Series | [cheatsheetseries.owasp.org](https://cheatsheetseries.owasp.org/) | Web and application security guidance | Use for secure coding and web defense references. |
| OWASP Web Security Testing Guide | [OWASP WSTG](https://owasp.org/www-project-web-security-testing-guide/) | Web testing methodology | Better for structured testing than random payload lists. |
| Nmap Reference Guide | [nmap.org/book/man.html](https://nmap.org/book/man.html) | Nmap options and scan behavior | Official reference; use only in authorized environments. |
| Wireshark Display Filters | [Wireshark Wiki](https://wiki.wireshark.org/DisplayFilters) | Packet analysis filters | Helpful when I forget filter syntax. |
| tcpdump Manual | [tcpdump.org](https://www.tcpdump.org/manpages/tcpdump.1.html) | Capture filter and command options | Useful for CLI packet capture. |
| GTFOBins | [gtfobins.github.io](https://gtfobins.github.io/) | Unix binary behavior and privilege escalation labs | Use only in authorized labs; good for understanding risky binaries. |
| LOLBAS | [lolbas-project.github.io](https://lolbas-project.github.io/) | Windows living-off-the-land binaries | Helpful for Windows defense and detection thinking. |
| MITRE ATT&CK | [attack.mitre.org](https://attack.mitre.org/) | Technique lookup | Use to map observed behavior to technique names. |
| Sigma Rules | [SigmaHQ](https://sigmahq.io/) | Detection rule format | Useful when learning how detections are written. |
| SANS Cheat Sheets | [SANS Posters and Cheat Sheets](https://www.sans.org/posters/) | Security reference posters | Good for quick reminders, but verify details with primary docs. |

## My Rule

If a cheatsheet gives me a command, I should write down:

- what the command does
- what system it applies to
- what permission or safety issue exists
- what output I expect

Otherwise I am just copy-pasting.
