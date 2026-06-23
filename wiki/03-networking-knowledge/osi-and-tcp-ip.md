# OSI and TCP/IP Models

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Networking Knowledge |
| Last Reviewed | To be filled |

## Why This Topic Matters

Network models are maps. They do not show every messy detail of the real world, but they help me organize where a problem might be happening.

Before learning this, I used to hear things like "Layer 3 issue" or "Layer 7 traffic" and it sounded like magic. The OSI model makes those phrases less scary because it gives names to different parts of communication.

## The Basic Idea

When two computers communicate, many things happen:

- A user interacts with an application.
- Data may be encrypted.
- A connection may be created.
- IP addresses are used.
- Frames move across local network hardware.
- Bits travel through cables or radio waves.

The OSI model splits this into seven layers. The TCP/IP model groups the same basic idea into fewer layers.

## OSI Model

The OSI model has seven layers:

| Layer | Name | Beginner Meaning |
| --- | --- | --- |
| 7 | Application | What the user or app is trying to do |
| 6 | Presentation | Data format, encoding, encryption ideas |
| 5 | Session | Managing conversations/sessions |
| 4 | Transport | End-to-end communication, ports, TCP/UDP |
| 3 | Network | IP addressing and routing |
| 2 | Data Link | Local network delivery, MAC addresses |
| 1 | Physical | Cables, radio, electrical/light signals |

I do not need to perfectly categorize everything at first. I need to know what each layer is roughly responsible for.

## Layer 1: Physical

This is the actual signal.

Examples:

- Ethernet cable
- Fiber cable
- WiFi radio signal
- Electrical signal
- Light signal

Problems at this layer:

- Cable unplugged
- Bad cable
- Weak WiFi signal
- Broken port
- Power issue

Beginner clue:

If the device does not even show a link or signal, start low.

## Layer 2: Data Link

This layer handles local network communication.

Examples:

- Ethernet frames
- MAC addresses
- Switches
- VLANs
- ARP

Problems at this layer:

- Wrong VLAN
- MAC address conflict
- Switch port issue
- ARP problem

Security angle:

- ARP spoofing and VLAN hopping are related to local network behavior.
- Switches operate heavily at Layer 2.

## Layer 3: Network

This layer handles IP addressing and routing.

Examples:

- IPv4
- IPv6
- Routers
- ICMP
- Subnets

Problems at this layer:

- Wrong IP address
- Wrong subnet mask
- Missing default gateway
- Routing issue

Security angle:

- Firewalls often make decisions using IP addresses.
- Network segmentation depends on Layer 3 design.

## Layer 4: Transport

This layer handles communication between processes using ports.

Examples:

- TCP
- UDP
- Port numbers

TCP is connection-oriented and cares about reliability. UDP is connectionless and lighter.

Problems at this layer:

- Port blocked
- Service not listening
- TCP handshake failing
- Firewall rule blocking traffic

Security angle:

- Port scanning looks for reachable services.
- Open ports increase attack surface.
- TCP and UDP behave differently during scanning and troubleshooting.

## Layer 5: Session

This layer is about managing sessions or conversations.

Beginner note:

In real-world TCP/IP discussions, this layer is often not separated clearly. I should know it exists, but not panic if tools do not show a "session layer" directly.

Examples:

- Login sessions
- Connection state
- Session setup and teardown ideas

## Layer 6: Presentation

This layer is about how data is represented.

Examples:

- Encoding
- Compression
- Encryption
- File/data formats

Beginner note:

TLS encryption is often discussed around this area, although real-world mapping is not always perfectly clean.

## Layer 7: Application

This is closest to the user and application.

Examples:

- HTTP
- DNS
- SMTP
- SSH
- FTP

Problems at this layer:

- Wrong URL
- Bad HTTP response
- Authentication failure
- Application error
- DNS query failure

Security angle:

- Web attacks often happen at Layer 7.
- Logs at this layer can show URLs, usernames, user agents, and application behavior.

## TCP/IP Model

The TCP/IP model usually has four layers:

| TCP/IP Layer | Rough OSI Mapping |
| --- | --- |
| Application | OSI Layers 5-7 |
| Transport | OSI Layer 4 |
| Internet | OSI Layer 3 |
| Network Access | OSI Layers 1-2 |

This model is closer to how the internet protocol suite is usually discussed.

## Example: Visiting a Website

If I visit `https://example.com`, the layers roughly appear like this:

- Application: Browser uses HTTPS.
- Presentation-ish: TLS encrypts traffic.
- Transport: TCP connection to port 443.
- Network: IP routes packets to the server.
- Data Link: Local frames move through my LAN.
- Physical: WiFi or Ethernet carries signals.

Again, this is simplified, but it helps me understand the path.

## Troubleshooting With Layers

If something fails, I can ask layer-based questions:

1. Physical: Is there a connection or signal?
2. Data Link: Am I on the right local network or VLAN?
3. Network: Do I have a valid IP and gateway?
4. Transport: Is the destination port reachable?
5. Application: Is the service responding correctly?

Example:

- If `ping 8.8.8.8` works but `curl https://example.com` fails, lower layers may be okay and the issue may be DNS, TLS, firewall, or application behavior.
- If there is no IP address, I should not start by blaming the website.

## Things I Keep Forgetting

- OSI is a learning model, not a perfect real-world diagram.
- Layer 2 is local network delivery.
- Layer 3 is IP and routing.
- Layer 4 is TCP/UDP and ports.
- Layer 7 is where many user-visible problems appear.
- Not every protocol fits perfectly into one neat layer.

## Review Questions

- What is Layer 3 mainly responsible for?
- What is Layer 4 mainly responsible for?
- Why are ports usually discussed at Layer 4?
- What is the difference between a model and real traffic?
- If DNS fails, which layer might I first think about?
- If a cable is unplugged, why is that not an application problem?

## References

- [Cloudflare: What is the OSI model?](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/)
- [Cisco: OSI model and networking basics](https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html)
- [Microsoft: TCP/IP fundamentals](https://learn.microsoft.com/en-us/troubleshoot/windows-client/networking/tcpip-addressing-and-subnetting)
