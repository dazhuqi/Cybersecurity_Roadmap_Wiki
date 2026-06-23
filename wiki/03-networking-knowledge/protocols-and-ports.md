# Protocols and Ports

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Networking Knowledge |
| Last Reviewed | To be filled |

## Why This Topic Matters

Protocols and ports are how I start connecting "network traffic" to actual services. If I see port `22`, I should think SSH. If I see port `443`, I should think HTTPS. This does not tell the whole story, but it gives me a starting point.

For cybersecurity, open ports are important because they often show what services are reachable. Reachable services can become attack surface.

## What Is a Protocol?

A protocol is a set of rules for communication.

Beginner examples:

- HTTP tells browsers and web servers how to talk.
- DNS tells clients and resolvers how name lookups work.
- SSH tells clients and servers how secure remote login works.

Without protocols, devices may be connected but not understand each other.

## What Is a Port?

A port is a number used to identify a service or application on a host.

Example:

```text
192.168.1.10:22
```

This means:

- Host: `192.168.1.10`
- Port: `22`

If IP is like the building address, the port is like a specific room or service desk inside the building.

## TCP and UDP

Ports are used with transport protocols, mainly TCP and UDP.

### TCP

TCP is connection-oriented. It tries to make communication reliable.

Beginner idea:

- Sets up a connection.
- Tracks delivery.
- Retransmits missing data.
- Used when reliability matters.

Examples:

- HTTP/HTTPS
- SSH
- FTP
- RDP

### UDP

UDP is connectionless. It is lighter and does not guarantee delivery in the same way TCP does.

Beginner idea:

- No full connection setup like TCP.
- Faster and simpler.
- The application handles missing data if it cares.

Examples:

- DNS often uses UDP.
- NTP uses UDP.
- Some VPNs use UDP.
- Streaming and voice traffic may use UDP.

## Common Ports

| Port | Protocol | Common Use | Beginner Notes |
| --- | --- | --- | --- |
| 20/21 | FTP | File transfer | Old and often insecure if not protected |
| 22 | SSH | Secure remote login | Very common on Linux servers |
| 23 | Telnet | Remote login | Insecure plaintext, avoid if possible |
| 25 | SMTP | Mail transfer | Used between mail servers |
| 53 | DNS | Name resolution | Often UDP, sometimes TCP |
| 67/68 | DHCP | Automatic network configuration | Client gets IP settings |
| 80 | HTTP | Web traffic | Plaintext web |
| 110 | POP3 | Email retrieval | Older mail retrieval protocol |
| 123 | NTP | Time sync | Important for accurate logs |
| 143 | IMAP | Email access | Mailbox access |
| 389 | LDAP | Directory access | Common in enterprise identity |
| 443 | HTTPS | Encrypted web traffic | Very common |
| 445 | SMB | Windows file sharing | High-value internal protocol |
| 636 | LDAPS | LDAP over TLS | Encrypted LDAP |
| 993 | IMAPS | IMAP over TLS | Encrypted mailbox access |
| 995 | POP3S | POP3 over TLS | Encrypted POP3 |
| 3389 | RDP | Windows Remote Desktop | Dangerous if exposed badly |

## Secure vs Insecure Protocols

Some protocols send data in plaintext. Others encrypt communication.

Examples:

| Insecure or Older | Safer Alternative |
| --- | --- |
| HTTP | HTTPS |
| FTP | SFTP or FTPS |
| Telnet | SSH |
| LDAP | LDAPS |
| POP3 | POP3S |
| IMAP | IMAPS |

Beginner note:

Encrypted does not always mean safe. It means the traffic is protected in transit. The server, account, or application can still be insecure.

## HTTP and HTTPS

HTTP is the protocol for web communication. HTTPS is HTTP protected by TLS.

Main difference:

- HTTP: plaintext
- HTTPS: encrypted and uses certificates

Security angle:

- HTTP can expose credentials or sensitive data.
- HTTPS helps protect confidentiality and integrity in transit.
- Certificate warnings should not be ignored casually.

## SSH

SSH is used for secure remote administration.

Common use:

```bash
ssh user@server
```

Security angle:

- SSH should use strong authentication.
- Password login exposed to the internet is risky.
- SSH keys must be protected.
- Failed SSH attempts are common in logs.

## RDP

RDP is Windows Remote Desktop.

Security angle:

- Exposed RDP is a common attack target.
- Weak passwords are dangerous.
- RDP should usually be behind VPN or other access controls.
- MFA and account lockout help.

## FTP and SFTP

FTP transfers files but is old and can be insecure.

SFTP uses SSH for secure file transfer.

Beginner note:

SFTP is not just "FTP with a letter added." It is a different secure file transfer protocol based on SSH.

## SMB

SMB is used for Windows file sharing and other network file operations.

Security angle:

- SMB is very common inside Windows networks.
- Exposed SMB can be dangerous.
- Old SMB versions have had serious vulnerabilities.
- File share permissions matter.

## TLS and Certificates

TLS helps encrypt traffic and prove server identity using certificates.

Beginner idea:

- The browser checks a certificate.
- The browser and server agree on encryption.
- Traffic is protected from easy reading or tampering.

Security angle:

- Expired or invalid certificates can break trust.
- Attackers may use HTTPS too, so HTTPS alone does not mean a site is good.

## Ports in Security Work

When I see an open port, I should ask:

- What service is supposed to be here?
- Is this service needed?
- Is it exposed internally or publicly?
- Is it patched?
- Does it require authentication?
- Is the traffic encrypted?
- Are logs available?

## Basic Commands

Windows:

```powershell
netstat -ano
Get-NetTCPConnection
```

Linux:

```bash
ss -tulpen
nmap -sV <target>
```

Beginner warning:

Only scan systems I own or have permission to test.

## Things I Keep Forgetting

- A port number suggests a service, but it does not prove the service.
- TCP and UDP are different.
- HTTPS protects traffic, but malicious sites can also use HTTPS.
- RDP and SMB should not be exposed casually.
- Open ports are not automatically bad, but they are attack surface.

## Review Questions

- What is a port?
- What is the difference between TCP and UDP?
- Why is Telnet considered insecure?
- Why is HTTPS safer than HTTP?
- What service commonly uses port 22?
- Why should exposed RDP be treated carefully?

## References

- [IANA: Service Name and Transport Protocol Port Number Registry](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml)
- [Cloudflare: What is HTTPS?](https://www.cloudflare.com/learning/ssl/what-is-https/)
- [OpenSSH Manual Pages](https://www.openssh.com/manual.html)
- [Microsoft Learn: Remote Desktop Services](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/welcome-to-rds)
