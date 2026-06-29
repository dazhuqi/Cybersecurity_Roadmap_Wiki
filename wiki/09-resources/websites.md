# Websites

These are websites I can use as references while studying. Some are learning sites, some are official documentation, and some are knowledge bases. I should prefer these over random blog posts when I need reliable definitions.

## How I Choose a Website

When two sources disagree, I should usually trust this order:

1. official vendor or project documentation
2. standards and well-known security organizations
3. maintained learning platforms
4. blog posts and personal notes, only after checking the date and context

For news, vulnerabilities, and active threats, I should check the publish date. Old posts can still teach concepts, but they may be wrong about current versions.

## Roadmap and Study Structure

| Website | Topic | Use Case | Notes |
| --- | --- | --- | --- |
| [roadmap.sh Cyber Security](https://roadmap.sh/cyber-security) | Roadmap | Structure for this wiki | Good for seeing the big map, but it should not replace notes and practice. |

## Standards, Frameworks, and Official Guidance

| Website | Topic | Use Case | Notes |
| --- | --- | --- | --- |
| [OWASP](https://owasp.org/) | Web security | Web risks, projects, and guides | Start with OWASP Top 10 and WSTG when learning web security. |
| [MITRE ATT&CK](https://attack.mitre.org/) | Adversary behavior | Tactics, techniques, and procedure mapping | Useful for understanding how real attack behavior is categorized. |
| [MITRE D3FEND](https://d3fend.mitre.org/) | Defensive techniques | Connecting attacks to possible defenses | Helpful when I want to think beyond "what happened" and ask "what control helps". |
| [CISA](https://www.cisa.gov/) | Security advisories and guidance | Alerts, hardening guidance, and public-sector resources | Good for current security guidance and practical advisories. |
| [NIST Cybersecurity Center](https://www.nist.gov/cybersecurity) | Standards and frameworks | Frameworks, risk, identity, and guidance | More formal, but important for governance and standards. |
| [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) | Security framework | Understanding Identify, Protect, Detect, Respond, Recover | Good for learning how organizations talk about security programs. |
| [NIST Computer Security Resource Center](https://csrc.nist.gov/) | Standards and publications | NIST SP documents and security publications | Dense, but useful when I need formal definitions. |

## Vulnerability and Advisory References

| Website | Topic | Use Case | Notes |
| --- | --- | --- | --- |
| [CVE](https://www.cve.org/) | CVE records | Official CVE identifiers and records | Start here when I need the base CVE entry. |
| [NIST NVD](https://nvd.nist.gov/) | Vulnerabilities | CVE and CVSS research | Use for vulnerability details, but verify vendor advisories too. |
| [FIRST CVSS](https://www.first.org/cvss/) | Vulnerability scoring | Understanding CVSS versions and metrics | Useful when a score looks scary but I need to know why. |
| [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) | Exploited vulnerabilities | Prioritizing vulnerabilities seen in real exploitation | Good reminder that "high score" and "actively exploited" are not the same thing. |
| [Microsoft Security Response Center](https://msrc.microsoft.com/) | Microsoft advisories | Windows, Office, Azure, and Microsoft product security updates | Prefer this over random summaries for Microsoft CVEs. |
| [Red Hat Product Security](https://access.redhat.com/security/) | Linux and enterprise advisories | Linux package and product security information | Helpful for understanding vendor impact and fixed versions. |
| [Exploit-DB](https://www.exploit-db.com/) | Public exploit references | Researching exploit examples in authorized contexts | Treat as sensitive material; do not run code blindly. |

## Learning and Documentation

| Website | Topic | Use Case | Notes |
| --- | --- | --- | --- |
| [Microsoft Learn Security](https://learn.microsoft.com/en-us/security/) | Microsoft security | Windows, Defender, identity, Azure security | Prefer official docs for Microsoft-specific settings. |
| [Cloudflare Learning Center](https://www.cloudflare.com/learning/) | Networking and web security | Plain-language explanations | Helpful for DNS, HTTP, TLS, DDoS, and CDN concepts. |
| [Practical Networking](https://www.practicalnetworking.net/) | Networking | Subnetting and network fundamentals | Very useful when subnetting feels too abstract. |
| [Linux man-pages](https://man7.org/linux/man-pages/) | Linux reference | Command and syscall reference | Good when I need exact Linux behavior, not a simplified summary. |
| [MDN Web Docs](https://developer.mozilla.org/) | Web platform | HTTP, JavaScript, browser, and web API reference | Useful for web security because browser behavior matters. |
| [PortSwigger Web Security Academy](https://portswigger.net/web-security) | Web security practice | Web vulnerability explanations and labs | One of the best web security learning references. |
| [OffSec Blog](https://www.offsec.com/blog/) | Offensive security | Methodology, training updates, and security posts | Read selectively; pair with labs. |

## Research, Incident Reports, and Threat Learning

| Website | Topic | Use Case | Notes |
| --- | --- | --- | --- |
| [Google Project Zero](https://googleprojectzero.blogspot.com/) | Vulnerability research | Deep technical research and exploit analysis | Advanced reading; good to save interesting posts for later review. |
| [The DFIR Report](https://thedfirreport.com/) | Incident reports | Real-world intrusion timelines and detection ideas | Good for connecting logs, malware, and attacker behavior. |
| [Malware Traffic Analysis](https://www.malware-traffic-analysis.net/) | Network traffic analysis | PCAP and malware traffic exercises | Use in an isolated lab and do not casually download samples. |
| [SANS Internet Storm Center](https://isc.sans.edu/) | Security diary and trends | Short security posts and attack observations | Good for seeing how defenders discuss daily activity. |
| [abuse.ch](https://abuse.ch/) | Threat tracking projects | Malware, botnet, URL, and threat data projects | Useful later for threat intel and detection practice. |
| [VirusTotal Blog](https://blog.virustotal.com/) | Malware and threat research | Research writeups and detection context | Do not upload private files or secrets to public analysis services. |

## How I Should Use Websites

- Use official docs when configuring tools or systems.
- Use learning centers for first explanations.
- Use standards/frameworks when writing governance or risk notes.
- Use vulnerability databases as starting points, then verify with vendor advisories.
- Save the exact page link in my notes when I rely on a source.

## Source Note Template

```text
Page title:
URL:
Publisher:
Date checked:
What I used it for:
Is it official documentation, a standard, a lab, or a blog?
What I still need to verify:
```
