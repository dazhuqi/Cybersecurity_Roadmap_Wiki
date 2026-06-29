# Tools

Tools are not the skill by themselves. A tool is useful only when I know what question I am asking and whether I am allowed to run it.

## Before I Install a Tool

For every tool, I should be able to answer:

- What problem does it solve?
- What input does it need?
- What output should I expect?
- Can this tool affect another system or generate noisy traffic?
- Is there a safer lab version I can use first?

If I cannot answer those questions yet, I should read the docs and test in a small lab before using it seriously.

## Everyday Foundation Tools

| Tool | Category | Link | Use Case | Notes |
| --- | --- | --- | --- | --- |
| Git | Version Control | [git-scm.com](https://git-scm.com/) | Tracking notes, labs, and code changes | Important because security work needs repeatable notes and clean history. |
| Docker | Lab Environment | [docker.com](https://www.docker.com/) | Running isolated practice services | Useful for web labs and local testing, but containers are not magic sandboxes. |
| Python | Scripting | [python.org](https://www.python.org/) | Small scripts, parsing logs, automation | Start with readable scripts before trying clever one-liners. |
| PowerShell | Windows / Automation | [Microsoft Learn](https://learn.microsoft.com/en-us/powershell/) | Windows administration and investigation | Very important for Windows security and blue-team work. |
| jq | Data Handling | [jqlang.org](https://jqlang.org/) | Reading and filtering JSON | Handy for API output, logs, and cloud CLI responses. |
| ripgrep | Search | [GitHub](https://github.com/BurntSushi/ripgrep) | Fast searching through text files | Useful for source code, logs, and note repositories. |

## Network and Traffic Tools

| Tool | Category | Link | Use Case | Notes |
| --- | --- | --- | --- | --- |
| Wireshark | Network | [wireshark.org](https://www.wireshark.org/) | Packet analysis | Best for seeing DNS, TCP, HTTP, TLS metadata, and troubleshooting traffic. |
| tcpdump | Network | [tcpdump manual](https://www.tcpdump.org/manpages/tcpdump.1.html) | Command-line packet capture | Useful on servers or remote Linux systems without a GUI. |
| Nmap | Network | [nmap.org](https://nmap.org/) | Discovery and scanning in authorized environments | Only scan systems I own or have explicit permission to test. |
| Zeek | Network Security Monitoring | [zeek.org](https://zeek.org/) | Network metadata and protocol logs | Later blue-team tool; more useful after networking basics. |
| Suricata | IDS / Network Security | [suricata.io](https://suricata.io/) | Network intrusion detection | Learn after packet analysis and basic network protocols. |
| OpenSSL | Crypto / TLS | [openssl.org](https://www.openssl.org/) | Certificates, TLS checks, crypto experiments | Good for understanding certificates, but command options can be sharp. |

## Web Security Tools

| Tool | Category | Link | Use Case | Notes |
| --- | --- | --- | --- | --- |
| Burp Suite Community | Web Security | [PortSwigger Burp Suite](https://portswigger.net/burp/communitydownload) | Intercepting and testing web traffic | Learn request/response behavior before relying on scanner features. |
| OWASP ZAP | Web Security | [ZAP](https://www.zaproxy.org/) | Web proxy and testing | Open-source alternative for learning web testing basics. |
| ffuf | Web Fuzzing | [GitHub](https://github.com/ffuf/ffuf) | Finding hidden paths or parameters in authorized labs | Can create many requests quickly, so rate limits and permission matter. |
| Gobuster | Web / DNS Enumeration | [GitHub](https://github.com/OJ/gobuster) | Directory, DNS, and virtual host enumeration | Good for labs after I understand what wordlists and status codes mean. |
| Nuclei | Vulnerability Templates | [ProjectDiscovery Docs](https://docs.projectdiscovery.io/tools/nuclei/overview) | Template-based checks in authorized testing | Powerful, but template output still needs manual verification. |
| SecLists | Wordlists | [GitHub](https://github.com/danielmiessler/SecLists) | Practice wordlists for labs | Keep wordlists organized and do not aim them at systems without permission. |

## Analysis and Encoding Tools

| Tool | Category | Link | Use Case | Notes |
| --- | --- | --- | --- | --- |
| CyberChef | Analysis | [CyberChef](https://gchq.github.io/CyberChef/) | Encoding, decoding, hashing, quick data transforms | Very useful for CTFs, logs, and small transformations. |
| Ghidra | Reverse Engineering | [ghidra-sre.org](https://ghidra-sre.org/) | Static reverse engineering | Later tool; learn file formats, assembly basics, and safe malware lab habits first. |
| REMnux | Malware Analysis Lab | [remnux.org](https://remnux.org/) | Malware analysis and reverse engineering environment | Use only with safe lab isolation and samples from trusted training sources. |

## Windows, Endpoint, and DFIR Tools

| Tool | Category | Link | Use Case | Notes |
| --- | --- | --- | --- | --- |
| Sysinternals Suite | Windows | [Microsoft Sysinternals](https://learn.microsoft.com/en-us/sysinternals/) | Windows process, file, network, and system inspection | Use carefully; good for Windows troubleshooting and investigation. |
| osquery | Endpoint Visibility | [osquery.io](https://osquery.io/) | Querying system state with SQL-like syntax | Nice bridge between system administration and security monitoring. |
| Velociraptor | DFIR / Endpoint Collection | [velociraptor.app](https://docs.velociraptor.app/) | Endpoint collection and investigation labs | Later DFIR tool; understand artifacts before collecting everything. |
| Volatility 3 | Memory Forensics | [Read the Docs](https://volatility3.readthedocs.io/) | Memory image analysis | Save for forensics and malware modules. It needs patient note-taking. |
| Autopsy | Digital Forensics | [autopsy.com](https://www.autopsy.com/) | Disk image and forensic case analysis | Good for beginner DFIR labs with prepared evidence images. |
| FTK Imager | Digital Forensics | [Exterro](https://www.exterro.com/digital-forensics-software/ftk-imager) | Disk imaging and evidence preview | Learn chain-of-custody ideas before treating it like a normal file browser. |

## Detection and Monitoring Tools

| Tool | Category | Link | Use Case | Notes |
| --- | --- | --- | --- | --- |
| YARA | Detection | [YARA](https://virustotal.github.io/yara/) | Pattern matching for malware and files | Useful later for malware and detection engineering. |
| Sigma | Detection | [SigmaHQ](https://sigmahq.io/) | Generic detection rule format | Helpful for thinking about SIEM-style detections. |
| Wazuh | Security Monitoring | [wazuh.com](https://wazuh.com/) | Endpoint and security monitoring lab | Useful for a home SOC-style lab later. |
| Elastic Security | SIEM / Detection | [elastic.co/security](https://www.elastic.co/security) | Searching logs and testing detection ideas | Useful later when I have enough log data to search. |

## Offensive Lab Tools

| Tool | Category | Link | Use Case | Notes |
| --- | --- | --- | --- | --- |
| Metasploit Framework | Offensive Security | [metasploit.com](https://www.metasploit.com/) | Exploit validation in authorized labs | Powerful tool; should not replace understanding the vulnerability. |
| Kali Linux | Security Lab OS | [kali.org](https://www.kali.org/) | Lab VM with many security tools | Convenient, but I should still learn what each tool does instead of opening everything. |

## My Tool Note Format

When I add a tool to a lab note, I should record:

```text
Tool:
Question I used it to answer:
Command or action:
Important output:
Risk or permission note:
What I learned:
```

## First Tools to Practice

| Stage | Tools | Practice Idea |
| --- | --- | --- |
| Basic IT | Git, Python, PowerShell, Docker | Keep notes in Git, write small scripts, run a local container. |
| Networking | Wireshark, tcpdump, Nmap | Capture my own lab traffic and scan only a local VM. |
| Web Security | Burp Suite, ZAP, ffuf, Gobuster | Use a local intentionally vulnerable app and record each request. |
| Blue Team | Sysinternals, osquery, Wazuh, Sigma | Inspect a Windows process, query system state, and write a simple detection note. |
| DFIR Later | Volatility, Autopsy, FTK Imager | Use training images and record evidence carefully. |

## Safety Rules

- Do not scan, exploit, intercept, or test systems without permission.
- Prefer local labs, CTFs, and explicitly authorized platforms.
- Do not paste secrets, tokens, VPN configs, or private data into online tools.
- Read tool output instead of only copying commands.
