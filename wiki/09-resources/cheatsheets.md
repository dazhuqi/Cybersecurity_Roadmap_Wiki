# Cheatsheets

Cheatsheets are for quick reminders, not for skipping fundamentals. If I use a cheatsheet often, I should turn the repeated parts into my own notes.

## How I Use Cheatsheets

I should treat a cheatsheet like a map on the desk:

- first read the normal documentation or lesson
- use the cheatsheet when I forget syntax or need a quick comparison
- copy useful parts into my own words
- write down one example that I actually tested in a lab

If I only bookmark a cheatsheet and never practice, it is not really helping me.

## Web and Application Security

| Topic | Link | Use Case | Notes |
| --- | --- | --- | --- |
| OWASP Cheat Sheet Series | [cheatsheetseries.owasp.org](https://cheatsheetseries.owasp.org/) | Web and application security guidance | Use for secure coding and web defense references. |
| OWASP Web Security Testing Guide | [OWASP WSTG](https://owasp.org/www-project-web-security-testing-guide/) | Web testing methodology | Better for structured testing than random payload lists. |
| PortSwigger Web Security Academy | [portswigger.net/web-security](https://portswigger.net/web-security) | Vulnerability explanations and lab notes | Not exactly a cheatsheet, but the topic pages are good quick refreshers. |
| PortSwigger XSS Cheat Sheet | [portswigger.net/web-security/cross-site-scripting/cheat-sheet](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet) | XSS context reminders | Use only in labs or authorized testing. The context matters more than the payload. |
| PortSwigger SQL Injection Cheat Sheet | [portswigger.net/web-security/sql-injection/cheat-sheet](https://portswigger.net/web-security/sql-injection/cheat-sheet) | SQL injection syntax reminders | Helpful after I already understand how the query is being built. |
| PayloadsAllTheThings | [swisskyrepo.github.io/PayloadsAllTheThings](https://swisskyrepo.github.io/PayloadsAllTheThings/) | Payload examples for labs | Big collection. I should avoid blind copying and always write the purpose beside the payload. |

## Network and Traffic Analysis

| Topic | Link | Use Case | Notes |
| --- | --- | --- | --- |
| Nmap Reference Guide | [nmap.org/book/man.html](https://nmap.org/book/man.html) | Nmap options and scan behavior | Official reference; use only in authorized environments. |
| Wireshark Display Filter Reference | [wireshark.org/docs/dfref](https://www.wireshark.org/docs/dfref/) | Exact display filter fields | Useful when I know the protocol but forget the field name. |
| Wireshark Display Filters | [Wireshark Wiki](https://wiki.wireshark.org/DisplayFilters) | Packet analysis filters | Good for basic syntax and examples. |
| tcpdump Manual | [tcpdump.org](https://www.tcpdump.org/manpages/tcpdump.1.html) | Capture filter and command options | Useful for CLI packet capture. |
| curl Manual | [curl.se/docs/manpage.html](https://curl.se/docs/manpage.html) | HTTP requests from the terminal | Good for testing headers, redirects, and simple API calls. |
| Practical Networking Subnetting | [practicalnetworking.net](https://www.practicalnetworking.net/stand-alone/subnetting-mastery/) | Subnetting practice reminders | Useful when CIDR math starts feeling slippery. |

## Operating Systems and Privilege Concepts

| Topic | Link | Use Case | Notes |
| --- | --- | --- | --- |
| Linux man-pages | [man7.org](https://man7.org/linux/man-pages/) | Linux command and syscall reference | Use when I need exact behavior instead of a simplified blog answer. |
| Microsoft Sysinternals Documentation | [Microsoft Learn](https://learn.microsoft.com/en-us/sysinternals/) | Windows investigation tools | Read the tool page before running something on a real machine. |
| GTFOBins | [gtfobins.github.io](https://gtfobins.github.io/) | Unix binary behavior and privilege escalation labs | Use only in authorized labs; good for understanding risky binaries. |
| LOLBAS | [lolbas-project.github.io](https://lolbas-project.github.io/) | Windows living-off-the-land binaries | Helpful for Windows defense and detection thinking. |
| Windows Commands Reference | [Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands) | Windows CLI reminders | Good when PowerShell or cmd syntax is easy to mix up. |

## Detection, Threat Intel, and Defense

| Topic | Link | Use Case | Notes |
| --- | --- | --- | --- |
| MITRE ATT&CK | [attack.mitre.org](https://attack.mitre.org/) | Technique lookup | Use to map observed behavior to technique names. |
| MITRE D3FEND | [d3fend.mitre.org](https://d3fend.mitre.org/) | Defensive technique lookup | Good for connecting an attack technique to possible defenses. |
| Sigma Rules | [SigmaHQ](https://sigmahq.io/) | Detection rule format | Useful when learning how detections are written. |
| YARA Documentation | [yara.readthedocs.io](https://yara.readthedocs.io/) | Rule syntax and examples | Save for malware and file matching practice. |
| CISA Known Exploited Vulnerabilities Catalog | [cisa.gov/known-exploited-vulnerabilities-catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) | Prioritizing real exploited vulnerabilities | Good reality check when a CVE looks scary only because the score is high. |
| SANS Cheat Sheets | [SANS Posters and Cheat Sheets](https://www.sans.org/posters/) | Security reference posters | Good for quick reminders, but verify details with primary docs. |

## My Rule Before Copying a Command

If a cheatsheet gives me a command, I should write down:

- what the command does
- what system it applies to
- what permission or safety issue exists
- what output I expect

Otherwise I am just copy-pasting.

## Personal Cheatsheet Template

```text
Topic:
Source link:
Command or syntax:
What it means in plain English:
Where I tested it:
Expected output:
Mistake I made:
```
