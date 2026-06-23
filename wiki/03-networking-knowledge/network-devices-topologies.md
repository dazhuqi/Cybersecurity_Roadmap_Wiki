# Network Devices and Topologies

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Networking Knowledge |
| Last Reviewed | To be filled |

## Why This Topic Matters

Network devices decide how traffic moves. If I do not understand routers, switches, firewalls, VLANs, and DMZs, network diagrams look like random boxes connected by lines.

For cybersecurity, the shape of the network matters a lot. A flat network is easier to move through. A segmented network can slow attackers down and make monitoring clearer.

## Router

A router connects different networks.

Home example:

- My laptop is on the home LAN.
- The router connects the home LAN to the ISP/internet.

Beginner idea:

> A router helps traffic leave one network and reach another network.

Security angle:

- Routers are important boundaries.
- Router admin interfaces should be protected.
- Bad routing can expose networks accidentally.
- Routers may also perform NAT and firewall functions in small environments.

## Switch

A switch connects devices inside the same local network.

Examples:

- Office desktops connected to a switch.
- Servers connected to a switch.
- Home router box with built-in switch ports.

Beginner idea:

> A switch helps local devices talk to each other.

Security angle:

- Switch ports can be abused if anyone can plug in.
- VLAN configuration matters.
- Port security and NAC can help control access.

## Firewall

A firewall controls allowed and blocked traffic.

Firewalls can be:

- Network firewalls
- Host firewalls
- Cloud security groups
- Next-generation firewalls

Beginner idea:

> A firewall is a traffic policy enforcement point.

Questions a firewall may ask:

- Source IP?
- Destination IP?
- Source port?
- Destination port?
- Protocol?
- Application?
- User?

Security angle:

- A firewall is only useful if rules are intentional.
- "Allow any any" is basically not a meaningful restriction.
- Firewall logs can be useful during investigations.

## Access Point

An access point provides WiFi access to a network.

Beginner note:

A home "router" may actually be several things in one box:

- Router
- Switch
- Firewall
- Access point
- DHCP server

This confused me because one physical device can perform multiple network roles.

## VLAN

VLAN means Virtual Local Area Network. It lets one physical switch infrastructure carry multiple separate logical networks.

Example:

- VLAN 10: Employees
- VLAN 20: Guests
- VLAN 30: Servers

Beginner idea:

> VLANs separate local networks logically, even if devices connect to the same physical switch.

Security angle:

- VLANs help segmentation.
- Guest WiFi should not be on the same VLAN as internal servers.
- Misconfigured VLANs can break isolation.

## DMZ

DMZ means demilitarized zone. In networking, it usually means a separate network area for systems that need to be reachable from less trusted networks.

Example:

- Public web server in DMZ.
- Internal database stays behind a stricter firewall.

Beginner idea:

> A DMZ is a buffer zone between the outside world and the internal network.

Security angle:

- If a DMZ server is compromised, the attacker should not automatically reach the internal network.
- Firewall rules between DMZ and internal networks should be strict.

## NAT

NAT means Network Address Translation. It changes IP address information as traffic passes through a device.

Home example:

- Laptop: `192.168.1.25`
- Router public IP: ISP-provided public address
- The router translates many private devices through one public IP.

Beginner note:

NAT is common, but NAT is not the same as a firewall.

Security angle:

- NAT can make internal devices less directly reachable.
- Port forwarding can expose internal services.
- I should know what ports are forwarded on a network.

## ACL

ACL means Access Control List. In networking, it can mean a rule list controlling traffic.

Example:

```text
Allow internal network to reach DNS server on port 53.
Deny guest network from reaching server VLAN.
```

Security angle:

ACLs are simple but powerful. A wrong ACL can block business traffic or allow dangerous traffic.

## Network Topologies

A topology is the shape or layout of a network.

### Star

Devices connect to a central point.

Example:

- Many office computers connected to one switch.

Pros:

- Easy to understand.
- If one cable fails, usually one device is affected.

Cons:

- The central device is important.

### Mesh

Devices have multiple paths between them.

Pros:

- More resilient.
- Traffic may have alternate paths.

Cons:

- More complex.
- Harder to design and troubleshoot.

### Bus

Devices share one main communication line.

Beginner note:

This is less common in modern LAN design, but it is useful historically.

### Ring

Devices connect in a circular path.

Beginner note:

Also less common in basic home/office networks today, but it appears in networking history and some specialized designs.

## Perimeter vs Segmentation

A perimeter is the boundary between trusted and untrusted areas, like internal network vs internet.

Segmentation is splitting the internal network into smaller zones.

Beginner mistake:

Thinking "we have a firewall at the edge, so the inside is safe." If an attacker gets inside, segmentation still matters.

## Simple Home Network Diagram

```text
Internet
   |
ISP Modem/Router
   |
Home Router / WiFi
   |------ Laptop
   |------ Phone
   |------ Printer
   |------ Smart TV
```

Security questions:

- Is the router admin password changed?
- Is guest WiFi separated?
- Are IoT devices isolated?
- Is remote admin disabled?
- Is firmware updated?

## Simple Office Network Idea

```text
Internet
   |
Firewall
   |
Core Switch
   |------ User VLAN
   |------ Server VLAN
   |------ Guest VLAN
   |------ DMZ
```

The exact design can vary, but the point is separation.

## Things I Keep Forgetting

- Router connects networks.
- Switch connects devices inside a local network.
- A home router box may do many jobs.
- VLANs are logical separation.
- DMZ is a buffer zone.
- NAT is not the same as firewalling.
- Segmentation matters after an attacker gets inside.

## Review Questions

- What is the difference between a router and a switch?
- Why is a guest VLAN useful?
- What is a DMZ for?
- Why is port forwarding risky?
- What does a firewall rule usually look at?
- Why is a flat network risky?

## References

- [Cisco: What is a network switch?](https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/network-switch-how.html)
- [Cloudflare: What is a router?](https://www.cloudflare.com/learning/network-layer/what-is-a-router/)
- [Cloudflare: What is a firewall?](https://www.cloudflare.com/learning/security/what-is-a-firewall/)
- [Cisco: What is a VLAN?](https://www.cisco.com/c/en/us/tech/lan-switching/virtual-lans-vlans/index.html)
