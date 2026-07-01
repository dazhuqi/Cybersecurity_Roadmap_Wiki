# CCNA

| Field | Value |
| --- | --- |
| Status | Not Started |
| Purpose | Networking foundations and Cisco networking |
| Official Website | [Cisco CCNA](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html) |
| Exam Topics | [Cisco Learning Network: CCNA Exam Topics](https://learningnetwork.cisco.com/s/ccna-exam-topics) |

## Notes

CCNA is Cisco's associate-level networking certification. It is more vendor-specific than Network+, but it can build stronger networking habits because it goes deeper into routing, switching, VLANs, wireless, IP services, and network operations.

For cybersecurity, CCNA is useful because many security problems are really network visibility and segmentation problems first.

## Why It Matters for My Roadmap

CCNA-style study supports:

- understanding routing and switching diagrams
- VLAN and subnet design
- firewall and network segmentation conversations
- network troubleshooting
- packet analysis
- later blue team or infrastructure security work

Even if I do not become a network engineer, I need enough networking skill to avoid guessing.

## What I Should Learn From It

- Network fundamentals and the OSI/TCP-IP model.
- IPv4 and IPv6 addressing.
- Switching, VLANs, trunks, and STP concepts.
- Routing fundamentals and basic routing protocols.
- Wireless networking basics.
- IP services such as DHCP, DNS, NAT, NTP, and SNMP.
- Security fundamentals and device access control.
- Automation and programmability basics.

## How I Would Prepare

1. Finish the `03-networking-knowledge` notes.
2. Practice subnetting until it feels mechanical.
3. Use Packet Tracer, Cisco Modeling Labs, or a small lab to practice configs.
4. Keep a command notebook for `show`, `configure`, and troubleshooting commands.
5. Read official exam topics before choosing study material.

## Hands-On Practice Ideas

- Build a small topology with two LANs and a router.
- Configure VLANs and test host reachability.
- Practice default gateway and routing troubleshooting.
- Capture traffic and match it to the topology.
- Write a short explanation of router vs switch without using memorized wording.

## Beginner Things I Need to Be Careful About

- CCNA is not just "Network+ but Cisco." It expects more configuration thinking.
- I should understand why a command is used, not only paste a working config.
- VLANs separate broadcast domains. Trunks carry multiple VLANs. Access ports usually belong to one VLAN.
- Routing tables answer where traffic should go next. They do not magically mean the return path works.
- Troubleshooting should start from the symptom and evidence, not from deleting the whole lab.

## Small Checkpoints

- I can subnet common private ranges and explain the result.
- I can configure basic switch access ports, trunk ports, and VLANs in a simulator.
- I can set up static routing and verify it with show commands.
- I can explain what ARP is doing when two hosts talk on the same LAN.
- I can document a small topology so another beginner can rebuild it.

## Decision Notes

| Question | My Answer |
| --- | --- |
| Do I want deeper networking than Network+? | To be filled |
| Do I need Cisco-specific knowledge for my goal? | To be filled |
| Can I configure and troubleshoot, not just read? | To be filled |
| Target date if I take it | To be filled |

## References

- [Cisco CCNA](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html)
- [Cisco Learning Network: CCNA Exam Topics](https://learningnetwork.cisco.com/s/ccna-exam-topics)
