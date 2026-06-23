# Network Troubleshooting Tools

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Networking Knowledge |
| Last Reviewed | To be filled |

## Why This Topic Matters

Network troubleshooting tools help me answer small questions instead of guessing. When the internet does not work, I should not immediately say "the network is down." I need to find out which part is failing: local IP, gateway, DNS, route, port, service, firewall, or something else.

The beginner mistake is running random commands and not knowing what the output means. My goal here is to connect each tool to the question it answers.

## My Troubleshooting Flow

When a device cannot reach something, I can move from simple to more specific:

1. Do I have a network connection?
2. Do I have an IP address?
3. Do I have a default gateway?
4. Can I reach the gateway?
5. Can I reach a public IP?
6. Does DNS work?
7. Is the route strange?
8. Is the target port open?
9. Is the application responding?

This flow is not perfect, but it stops me from jumping straight to complicated explanations.

## `ping`

`ping` tests basic reachability using ICMP.

Examples:

```bash
ping 8.8.8.8
ping example.com
```

Windows:

```powershell
ping 8.8.8.8
```

What it answers:

- Can I reach this host at a basic network level?
- Is there packet loss?
- How long does a response take?

Beginner notes:

- If `ping 8.8.8.8` works but `ping example.com` fails, DNS may be the issue.
- If ping fails, it does not always mean the host is down. Some systems block ICMP.
- Ping is useful, but not final proof.

Security angle:

- ICMP can be blocked by firewalls.
- Ping sweeps can be used for discovery.
- Defenders may see ICMP activity in network logs.

## `traceroute` and `tracert`

Traceroute shows the path traffic takes toward a destination.

Linux/macOS:

```bash
traceroute example.com
```

Windows:

```powershell
tracert example.com
```

What it answers:

- Which hops are between me and the target?
- Where does traffic seem to stop?
- Is the route unexpectedly long or strange?

Beginner notes:

- Some hops may not respond.
- Asterisks do not always mean the route is broken.
- The final destination not responding may be more important than one silent hop.

Security angle:

- Traceroute can reveal network paths.
- Attackers can use route information for reconnaissance.
- Defenders can use it to understand routing issues.

## `ipconfig`

`ipconfig` is common on Windows.

Examples:

```powershell
ipconfig
ipconfig /all
ipconfig /release
ipconfig /renew
ipconfig /flushdns
```

What it answers:

- What IP address do I have?
- What is my subnet mask?
- What is my default gateway?
- What DNS servers am I using?
- Did DHCP give me settings?

Beginner notes:

- `ipconfig /all` gives more detail.
- `ipconfig /renew` asks DHCP for a new lease.
- `ipconfig /flushdns` clears the local DNS resolver cache.

Security angle:

- Wrong DNS server can be suspicious.
- Unexpected network adapters may appear from VPNs, virtualization, or malware.

## `ip`

`ip` is common on Linux.

Examples:

```bash
ip addr
ip route
ip link
```

What it answers:

- What interfaces exist?
- What IP addresses are assigned?
- What routes exist?
- Is an interface up or down?

Beginner notes:

- `ip addr` is like checking addresses.
- `ip route` is like checking where traffic goes.
- The default route is especially important.

## `route`

Route commands show routing table information.

Windows:

```powershell
route print
```

Linux:

```bash
ip route
```

macOS:

```bash
netstat -rn
```

What it answers:

- Where does traffic go by default?
- Are there specific routes for certain networks?
- Is the default gateway set?

Beginner note:

If there is no default route, the machine may not know how to reach outside networks.

## `arp`

ARP maps IP addresses to MAC addresses on a local network.

Examples:

```bash
arp -a
```

Windows:

```powershell
arp -a
```

What it answers:

- Which local IP addresses map to which MAC addresses?
- Has the machine recently talked to local devices?

Security angle:

- ARP spoofing can redirect local traffic.
- Strange ARP entries can be a clue, but they need context.

Beginner note:

ARP is local. It is not used to find MAC addresses across the whole internet.

## `netstat`

`netstat` shows network connections and listening ports.

Windows:

```powershell
netstat -ano
```

Linux/macOS:

```bash
netstat -an
```

What it answers:

- What connections exist?
- What local ports are listening?
- Which process ID is involved on Windows with `-o`?

Beginner note:

On Linux, `ss` is often preferred now, but `netstat` is still seen in many tutorials.

## `ss`

`ss` is a Linux tool for socket information.

Examples:

```bash
ss -tulpen
ss -tan
```

What it answers:

- Which TCP/UDP ports are listening?
- What connections exist?
- Which process owns a socket, if permissions allow it?

Security angle:

- Listening ports show exposed local services.
- Unexpected listening ports deserve investigation.

## `nslookup`

`nslookup` queries DNS.

Examples:

```bash
nslookup example.com
nslookup example.com 8.8.8.8
```

What it answers:

- Does this name resolve?
- Which IP address does it resolve to?
- Does a different DNS server give a different answer?

Beginner note:

If name lookup fails but direct IP access works, DNS is a strong suspect.

## `dig`

`dig` is a DNS lookup tool common on Linux/macOS and available on many systems.

Examples:

```bash
dig example.com
dig example.com A
dig example.com MX
dig +short example.com
```

What it answers:

- What DNS records exist?
- Which resolver answered?
- How long did the query take?

Security angle:

- DNS records can reveal infrastructure.
- MX records show mail servers.
- TXT records may show SPF, DKIM, or verification data.

## `curl`

`curl` makes network requests from the command line.

Examples:

```bash
curl -I https://example.com
curl -v https://example.com
```

What it answers:

- Can I reach a web service?
- What HTTP status code returns?
- Are headers visible?
- Is TLS negotiation working?

Beginner note:

`curl -I` asks for headers only. This is useful for quick checks.

## `nmap`

`nmap` is a network scanning tool.

Examples:

```bash
nmap <target>
nmap -sV <target>
```

What it answers:

- Which ports appear open?
- What services might be running?
- What versions may be exposed?

Important safety note:

Only scan systems I own or have explicit permission to test. Scanning random systems is not okay.

Security angle:

- Attackers use scanners for reconnaissance.
- Defenders use scanners for asset discovery and validation.
- Scan results need verification because banners can be misleading.

## A Simple Troubleshooting Example

Problem:

```text
Browser cannot open example.com.
```

Steps:

```text
1. ipconfig /all or ip addr
2. ping default gateway
3. ping 8.8.8.8
4. nslookup example.com
5. curl -I https://example.com
6. traceroute/tracert example.com
```

Possible conclusions:

- No IP address: DHCP or interface issue.
- Gateway unreachable: local network issue.
- Public IP reachable but DNS fails: DNS issue.
- DNS works but HTTPS fails: port, firewall, TLS, or application issue.

## Things I Keep Forgetting

- Ping failing does not always mean the host is down.
- DNS can fail even when the internet path works.
- A listening port is not automatically bad, but it is exposure.
- `nmap` needs permission.
- Routes explain where traffic goes.
- ARP is local network behavior.

## Review Questions

- What does `ping` test?
- Why might ping fail even if a host is online?
- What does `ipconfig /all` show?
- What is the difference between `nslookup` and `dig`?
- Why is `ss -tulpen` useful?
- Why should I be careful with `nmap`?

## References

- [Microsoft: ipconfig](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig)
- [Microsoft: tracert](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert)
- [Nmap Reference Guide](https://nmap.org/book/man.html)
- [curl Documentation](https://curl.se/docs/)
- [Linux ip command man page](https://man7.org/linux/man-pages/man8/ip.8.html)
