# Tools

Tools are not the skill by themselves. A tool is useful only when I know what question I am asking and whether I am allowed to run it.

## Tool Index

| Tool | Category | Link | Use Case | Notes |
| --- | --- | --- | --- | --- |
| Wireshark | Network | [wireshark.org](https://www.wireshark.org/) | Packet analysis | Best for seeing DNS, TCP, HTTP, TLS metadata, and troubleshooting traffic. |
| tcpdump | Network | [tcpdump manual](https://www.tcpdump.org/manpages/tcpdump.1.html) | Command-line packet capture | Useful on servers or remote Linux systems without a GUI. |
| Nmap | Network | [nmap.org](https://nmap.org/) | Discovery and scanning in authorized environments | Only scan systems I own or have explicit permission to test. |
| Burp Suite Community | Web Security | [PortSwigger Burp Suite](https://portswigger.net/burp/communitydownload) | Intercepting and testing web traffic | Learn request/response behavior before relying on scanner features. |
| OWASP ZAP | Web Security | [ZAP](https://www.zaproxy.org/) | Web proxy and testing | Open-source alternative for learning web testing basics. |
| CyberChef | Analysis | [CyberChef](https://gchq.github.io/CyberChef/) | Encoding, decoding, hashing, quick data transforms | Very useful for CTFs, logs, and small transformations. |
| Sysinternals Suite | Windows | [Microsoft Sysinternals](https://learn.microsoft.com/en-us/sysinternals/) | Windows process, file, network, and system inspection | Use carefully; good for Windows troubleshooting and investigation. |
| OpenSSL | Crypto / TLS | [openssl.org](https://www.openssl.org/) | Certificates, TLS checks, crypto experiments | Good for understanding certificates, but command options can be sharp. |
| YARA | Detection | [YARA](https://virustotal.github.io/yara/) | Pattern matching for malware and files | Useful later for malware and detection engineering. |
| Sigma | Detection | [SigmaHQ](https://sigmahq.io/) | Generic detection rule format | Helpful for thinking about SIEM-style detections. |
| Zeek | Network Security Monitoring | [zeek.org](https://zeek.org/) | Network metadata and protocol logs | Later blue-team tool; more useful after networking basics. |
| Suricata | IDS / Network Security | [suricata.io](https://suricata.io/) | Network intrusion detection | Learn after packet analysis and basic network protocols. |
| Wazuh | Security Monitoring | [wazuh.com](https://wazuh.com/) | Endpoint and security monitoring lab | Useful for a home SOC-style lab later. |
| Metasploit Framework | Offensive Security | [metasploit.com](https://www.metasploit.com/) | Exploit validation in authorized labs | Powerful tool; should not replace understanding the vulnerability. |

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

## Safety Rules

- Do not scan, exploit, intercept, or test systems without permission.
- Prefer local labs, CTFs, and explicitly authorized platforms.
- Do not paste secrets, tokens, VPN configs, or private data into online tools.
- Read tool output instead of only copying commands.
