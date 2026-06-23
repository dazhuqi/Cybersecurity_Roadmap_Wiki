# Network Services

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Networking Knowledge |
| Last Reviewed | To be filled |

## Why This Topic Matters

Network services are the "helper systems" that make networks usable. Without them, users would need to manually remember IP addresses, configure network settings, and manage authentication in awkward ways.

At first I thought networking was only routers, switches, and IP addresses. But services like DNS and DHCP are just as important because when they break, everything feels broken.

## DNS

DNS means Domain Name System. It translates names into IP addresses.

Example:

```text
example.com -> 93.184.216.34
```

Humans like names. Computers route using addresses.

### Common DNS Record Types

| Record | Meaning |
| --- | --- |
| A | Name to IPv4 address |
| AAAA | Name to IPv6 address |
| CNAME | Alias to another name |
| MX | Mail server for a domain |
| TXT | Text data, often used for verification or email security |
| NS | Name server for a domain |

### DNS Troubleshooting

Commands:

```bash
nslookup example.com
dig example.com
dig example.com MX
```

Beginner clue:

If connecting to `8.8.8.8` works but `example.com` does not resolve, DNS may be the issue.

### DNS Security Angle

DNS is useful for defenders because it shows what domains systems try to contact.

Security examples:

- Malware may use DNS to find command-and-control servers.
- Phishing sites depend on domain names.
- DNS tunneling can hide data inside DNS queries.
- Suspicious newly registered domains can be investigation clues.

## DHCP

DHCP means Dynamic Host Configuration Protocol. It automatically gives network settings to devices.

DHCP can provide:

- IP address
- Subnet mask
- Default gateway
- DNS server
- Lease time

Without DHCP, devices may need manual configuration.

### DHCP Lease

A DHCP lease is temporary. The device receives an address for a period of time and renews it later.

Beginner example:

My laptop joins WiFi. The router gives it `192.168.1.25`. That address is leased, not permanently owned forever.

### DHCP Troubleshooting

Possible symptoms:

- Device has no IP address.
- Device gets `169.254.x.x`.
- Device gets the wrong gateway.
- Two devices seem to have address conflict.

Useful commands:

Windows:

```powershell
ipconfig /all
ipconfig /release
ipconfig /renew
```

Linux:

```bash
ip addr
```

Security angle:

- Rogue DHCP servers can give bad network settings.
- DHCP logs can help identify when a device joined a network.

## NTP

NTP means Network Time Protocol. It keeps clocks synchronized.

This sounds boring, but it matters a lot.

Why time sync matters:

- Logs need accurate timestamps.
- Authentication systems may depend on time.
- Certificates have validity periods.
- Incident timelines need correct time.

Security angle:

If system clocks are wrong, investigation becomes harder. It may look like events happened in the wrong order.

## IPAM

IPAM means IP Address Management. It is the process or tool used to track IP address usage.

Beginner version:

IPAM is like a map or inventory for addresses.

It can track:

- Which subnet exists
- Which IP addresses are used
- Which device owns an address
- Reserved addresses
- DHCP scopes

Security angle:

If I do not know what IP addresses belong to my environment, it is harder to identify unknown devices.

## Kerberos

Kerberos is an authentication protocol commonly used in Windows Active Directory environments.

Very simplified idea:

- A user logs in.
- Kerberos gives tickets.
- The tickets let the user access services without sending the password everywhere.

Beginner note:

Kerberos can feel complicated. For now, I only need to know it is about authentication and tickets.

Security angle:

- Kerberos attacks exist, such as Kerberoasting.
- Time synchronization matters for Kerberos.
- Ticket abuse can be important in Windows domain incidents.

## RADIUS

RADIUS is often used for centralized authentication for network access.

Examples:

- VPN login
- WiFi enterprise authentication
- Network device admin login

Beginner version:

RADIUS helps a device ask a central server, "Is this user allowed?"

Security angle:

Central authentication is easier to manage, but the central service becomes important infrastructure.

## LDAP

LDAP is a protocol used to access directory information.

Examples of directory information:

- Users
- Groups
- Email addresses
- Organizational units

Active Directory can be queried using LDAP.

Beginner note:

LDAP is not just "login." It is more like asking a directory for information.

Security angle:

- Directory data can reveal users, groups, and structure.
- Anonymous or overly broad LDAP access can leak useful information to attackers.

## SSO

SSO means Single Sign-On. It lets a user log in once and access multiple services.

Benefits:

- Fewer passwords to remember.
- Centralized access control.
- Easier offboarding.

Risks:

- If the SSO account is compromised, many services may be exposed.
- MFA becomes very important.
- Session security matters.

## How These Services Fit Together

Example office login flow:

1. Device gets network settings from DHCP.
2. Device uses DNS to find services.
3. Time is synced with NTP.
4. User authenticates with SSO, Kerberos, LDAP, or another identity system.
5. Logs record what happened with timestamps.

When one of these services breaks, many other things can break too.

## Small Practice

- [ ] Run `nslookup` or `dig` for a domain.
- [ ] Find local DNS server settings.
- [ ] Check local IP and DHCP information.
- [ ] Look up what NTP server the system uses.
- [ ] Write a one-sentence difference between Kerberos, LDAP, RADIUS, and SSO.

## Things I Keep Forgetting

- DNS is names to addresses.
- DHCP gives network settings automatically.
- NTP matters because logs need correct time.
- LDAP is directory access, not exactly the same thing as authentication.
- SSO is convenient but increases the importance of protecting one account.
- Kerberos uses tickets.

## Review Questions

- What does DNS do?
- What settings can DHCP provide?
- Why is NTP important for incident response?
- What is IPAM used for?
- How is LDAP different from SSO?
- Where might RADIUS be used?

## References

- [Cloudflare: What is DNS?](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [Microsoft: DHCP overview](https://learn.microsoft.com/en-us/windows-server/networking/technologies/dhcp/dhcp-top)
- [NTP.org Documentation](https://www.ntp.org/documentation/)
- [Microsoft: Kerberos authentication overview](https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview)
- [Microsoft: LDAP overview](https://learn.microsoft.com/en-us/windows/win32/adsi/ldap)
