# Packet Analysis

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Networking Knowledge |
| Last Reviewed | To be filled |

## Why This Topic Matters

Packet analysis is like looking at the actual conversation on the network. Logs tell me what systems decided to record. Packet captures show the traffic itself, or at least the parts that are visible.

At first, Wireshark looks overwhelming because there are so many lines and colors. The beginner goal is not to understand every packet. The first goal is to find simple things: DNS queries, TCP handshakes, HTTP requests, IP addresses, ports, and timing.

## What Is a Packet?

A packet is a small unit of network data.

When data travels across a network, it is split into pieces. Each piece has headers that help devices deliver and understand it.

Beginner idea:

- Packet payload is the data being carried.
- Packet headers are information about how to deliver or interpret it.

Security angle:

Packets can show evidence of scanning, malware communication, failed connections, suspicious DNS, or data transfer.

## Packet Capture

A packet capture records network traffic.

Common file extensions:

```text
.pcap
.pcapng
```

A capture may include:

- Source IP
- Destination IP
- Source port
- Destination port
- Protocol
- Packet timing
- Some payload data

Encrypted traffic may hide content, but metadata is still useful.

## Packet Sniffer vs Protocol Analyzer

These terms are easy to mix up.

Packet sniffer:

- Captures traffic.

Protocol analyzer:

- Helps interpret captured traffic by protocol.

Wireshark does both in practice: it captures traffic and helps decode protocols.

## Wireshark

Wireshark is a graphical packet analysis tool.

Beginner things to learn first:

- Open a capture file.
- Start a capture on one interface.
- Use display filters.
- Follow a TCP stream.
- Find DNS queries.
- Find HTTP requests.
- Inspect packet details.

Important warning:

Capturing traffic may include sensitive data. I should not casually share pcaps without sanitizing them.

## tcpdump

`tcpdump` is a command-line packet capture tool.

Examples:

```bash
sudo tcpdump -i eth0
sudo tcpdump -i eth0 host 8.8.8.8
sudo tcpdump -i eth0 port 53
sudo tcpdump -i eth0 -w capture.pcap
```

What these answer:

- What traffic is visible on this interface?
- Is this host talking to that IP?
- Is DNS traffic happening?
- Can I save traffic for later analysis?

Beginner note:

Using the wrong interface is a common mistake. I should check which interface actually has traffic.

## Interfaces

When capturing traffic, I must choose an interface.

Examples:

- Ethernet adapter
- WiFi adapter
- Loopback interface
- VPN adapter
- Virtual machine adapter

Beginner mistake:

Capturing on an inactive interface and thinking there is no traffic.

## Display Filters in Wireshark

Display filters control what Wireshark shows after capture.

Useful beginner filters:

```text
dns
http
tcp
udp
ip.addr == 8.8.8.8
tcp.port == 443
udp.port == 53
```

Important note:

Display filters do not remove packets from the file. They only change what I see.

## Capture Filters vs Display Filters

Capture filters decide what gets captured.

Display filters decide what gets shown after capture.

Beginner rule:

If I am learning, capture more and display-filter later. If I capture too narrowly, I may miss useful evidence.

## TCP Three-Way Handshake

TCP connections usually start with a three-way handshake:

```text
SYN
SYN-ACK
ACK
```

Beginner meaning:

- Client asks to start.
- Server agrees.
- Client confirms.

Why it matters:

- If SYN goes out but no SYN-ACK comes back, the server may be down, filtered, or unreachable.
- If handshake works but the application fails, the issue may be above TCP.

## DNS in Packet Captures

DNS traffic can show what names a device tried to resolve.

Example filter:

```text
dns
```

Things to look for:

- Query name
- Response IP
- DNS server used
- NXDOMAIN responses
- Repeated strange domains

Security angle:

Suspicious DNS can be a clue for malware, phishing, or misconfiguration.

## HTTP in Packet Captures

HTTP is plaintext unless protected by TLS.

Filter:

```text
http
```

Things that may be visible:

- Host header
- URL path
- User-Agent
- Status code
- Some content

Security warning:

Plain HTTP can expose sensitive data. This is one reason HTTPS matters.

## HTTPS and TLS

HTTPS traffic is encrypted with TLS. I usually cannot see the full page content in a normal capture.

But I may still see:

- IP addresses
- Ports
- TLS handshake details
- Server Name Indication in some cases
- Certificate information
- Timing and size patterns

Security angle:

Encryption hides content, but metadata can still help investigations.

## ARP in Packet Captures

ARP helps find MAC addresses for local IP addresses.

Filter:

```text
arp
```

Security angle:

ARP spoofing attacks manipulate local network address mapping. Seeing unusual ARP behavior can be a clue.

## ICMP in Packet Captures

ICMP is used by tools like ping.

Filter:

```text
icmp
```

Things to observe:

- Echo request
- Echo reply
- Destination unreachable

## A Beginner Capture Exercise

Goal:

Capture one website visit and identify the basic traffic.

Steps:

1. Start Wireshark on the active interface.
2. Open a browser.
3. Visit `https://example.com`.
4. Stop the capture.
5. Filter for `dns`.
6. Find the query for `example.com`.
7. Filter for `tcp.port == 443`.
8. Look for the TCP handshake.
9. Look at the TLS handshake.
10. Save the capture only if it does not contain sensitive traffic.

## Sanitizing Captures

Before sharing a pcap, I should think about whether it contains:

- Internal IP addresses
- Hostnames
- Usernames
- Cookies
- Tokens
- Plaintext credentials
- Private URLs
- Email addresses

Beginner rule:

Do not upload random packet captures publicly.

## Things I Keep Forgetting

- Wireshark display filters do not delete packets.
- Capture filters are applied before traffic is saved.
- Encrypted traffic still has metadata.
- DNS is often very useful in investigations.
- The wrong interface can make a capture look empty.
- A pcap can contain sensitive data.

## Review Questions

- What is a pcap file?
- What is the difference between a capture filter and a display filter?
- What are the three TCP handshake steps?
- What can DNS traffic show?
- Why can HTTPS still be useful in packet analysis even if content is encrypted?
- Why should packet captures be sanitized before sharing?

## References

- [Wireshark User's Guide](https://www.wireshark.org/docs/wsug_html_chunked/)
- [Wireshark Display Filters](https://wiki.wireshark.org/DisplayFilters)
- [tcpdump Manual Page](https://www.tcpdump.org/manpages/tcpdump.1.html)
- [Cloudflare: What is a packet?](https://www.cloudflare.com/learning/network-layer/what-is-a-packet/)
