# Basic Computer Networking

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Fundamental IT Skills |
| Last Reviewed | To be filled |

## Why This Topic Matters

Networking is one of the foundations of cybersecurity. Almost everything security-related eventually touches a network: logging into a website, downloading malware, sending email, scanning a host, connecting to a cloud service, using a VPN, or investigating suspicious traffic.

At the beginner level, I do not need to know every protocol deeply yet. But I do need to understand the basic path: how one computer talks to another computer.

## My Simple Definition

A computer network is a group of devices connected so they can share data or resources.

Examples:

- A laptop connected to home WiFi
- A phone using mobile data
- Office computers connected to a switch
- Servers connected inside a data center
- Cloud systems connected over the internet

The internet is basically a huge network of networks.

## Basic Network Devices

### Host

A host is any device that participates in a network. It can send or receive network traffic.

Examples:

- Laptop
- Desktop
- Phone
- Printer
- Server
- Virtual machine
- Router interface

In beginner notes, I can think of "host" as "a device with a network identity."

### Network Interface

A network interface is how a device connects to a network.

Examples:

- Ethernet adapter
- WiFi adapter
- Virtual adapter inside a VM
- VPN adapter

A device can have more than one interface. This matters because traffic may go out through a different interface than I expected.

### Switch

A switch connects devices inside a local network. In a home network, the switch may be built into the router.

Simple idea:

- A switch helps devices on the same local network talk to each other.
- It works mostly with MAC addresses.
- It does not usually decide how to reach the internet. That is the router's job.

### Router

A router connects different networks together. At home, the router connects the local network to the internet through the ISP.

Simple idea:

- A switch connects local devices.
- A router connects networks.

Security angle:

- The router is an important boundary.
- Weak router admin passwords are dangerous.
- Router firmware should be updated.
- Exposed management interfaces are risky.

### Access Point

An access point provides WiFi connectivity. In many homes, the router, switch, firewall, and access point are all in the same physical box.

That confused me at first. One box can perform multiple roles.

## IP Address

An IP address is a logical address used for network communication.

Example:

```text
192.168.1.25
```

If two devices want to communicate over IP, they need IP addresses.

Beginner notes:

- IPv4 addresses look like four numbers separated by dots.
- Private IP addresses are commonly used inside home and office networks.
- Public IP addresses are used on the internet.
- A device may have both local/private addressing and communicate through a public IP using NAT.

Common private IPv4 ranges:

```text
10.0.0.0/8
172.16.0.0/12
192.168.0.0/16
```

I do not fully need subnet math here yet, but I should recognize that `192.168.x.x` is usually private/local.

## MAC Address

A MAC address is a hardware address for a network interface.

Example format:

```text
AA:BB:CC:DD:EE:FF
```

Simple idea:

- IP addresses help communication across networks.
- MAC addresses help communication on the local network segment.

Security angle:

- MAC addresses can help identify devices.
- MAC filtering exists, but it should not be treated as strong security because MAC addresses can be spoofed.

## Default Gateway

The default gateway is where a device sends traffic when the destination is outside the local network.

For a home computer, the default gateway is usually the home router.

Example:

```text
Device IP:       192.168.1.25
Default gateway: 192.168.1.1
```

If the gateway is missing or wrong, the device may talk to local devices but fail to reach the internet.

## DNS

DNS means Domain Name System. It translates names into IP addresses.

Humans like names:

```text
example.com
```

Computers need addresses:

```text
93.184.216.34
```

DNS is why I can type a website name instead of memorizing IP addresses.

Beginner troubleshooting idea:

- If `ping 8.8.8.8` works but `ping google.com` fails, the network may be working but DNS may be broken.

Security angle:

- DNS logs can show what domains a device tried to reach.
- Malware often uses DNS to find command-and-control servers.
- Phishing domains often rely on confusing names.

## DHCP

DHCP automatically gives network settings to devices.

It can provide:

- IP address
- Subnet mask
- Default gateway
- DNS server

Without DHCP, I may need to configure these manually.

Beginner symptom:

- If a device has an address like `169.254.x.x`, it may have failed to get a proper DHCP address.

## NAT

NAT means Network Address Translation. A home router commonly uses NAT so many private devices can share one public IP address.

Simple version:

- My laptop has a private IP.
- The router has a public IP from the ISP.
- The router translates traffic between private devices and the internet.

Security note:

NAT is not the same as a firewall, but it does affect how reachable internal devices are from the internet.

## What Happens When I Visit a Website

Example: I type `https://example.com` into a browser.

Very simplified path:

1. The browser needs to know the IP address for `example.com`.
2. The computer asks DNS for the IP address.
3. The computer sends traffic toward the default gateway.
4. The router sends the traffic toward the internet.
5. The traffic reaches the web server.
6. The browser and server set up a connection.
7. HTTPS uses TLS to protect the communication.
8. The server sends the web page back.
9. The browser displays it.

This is simplified, but it helps me see where things can fail:

- DNS can fail.
- Gateway can be wrong.
- WiFi can be disconnected.
- The website can be down.
- Firewall rules can block traffic.
- TLS certificate problems can happen.
- The browser can have a proxy or extension issue.

## LAN, WAN, and Internet

### LAN

LAN means Local Area Network. It is a network in a small area like a home, office, or lab.

Example:

- My laptop, phone, printer, and router at home.

### WAN

WAN means Wide Area Network. It covers larger distances and connects multiple networks.

Example:

- A company connecting branch offices.
- ISP networks.

### Internet

The internet is the global network of networks. It connects many public and private networks using common protocols.

## Basic Commands

### Windows

```powershell
ipconfig
ipconfig /all
ping 8.8.8.8
nslookup example.com
tracert example.com
```

### Linux/macOS

```bash
ip addr
ip route
ping 8.8.8.8
dig example.com
traceroute example.com
```

I should record what each command tells me, not just run commands blindly.

## Basic Troubleshooting Flow

If a computer cannot reach a website:

1. Check physical or WiFi connection.
2. Check IP address.
3. Check default gateway.
4. Ping the gateway.
5. Ping a public IP address.
6. Test DNS with `nslookup` or `dig`.
7. Try another website.
8. Check VPN, proxy, firewall, or browser settings.

The goal is to narrow the problem step by step.

## Small Practice

- [ ] Find my local IP address.
- [ ] Find my default gateway.
- [ ] Find my DNS server.
- [ ] Ping my default gateway.
- [ ] Use `nslookup` or `dig` on three domains.
- [ ] Draw a simple diagram of my home network.

## Things I Keep Forgetting

- DNS is about names to addresses.
- The default gateway is the way out of the local network.
- A router and a switch are not the same thing.
- A home router box may contain router, switch, firewall, and access point functions.
- Private IP addresses are normal inside local networks.
- If only names fail but IPs work, check DNS.

## Review Questions

- What is the difference between a host and a router?
- What does DNS do?
- What does DHCP provide?
- Why does a device need a default gateway?
- What is the difference between private and public IP addresses?
- What is one reason a website might fail to load even when WiFi is connected?

## References

- [Cisco: Networking basics](https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html)
- [YouTube: Computer Networking in 100 seconds](https://www.youtube.com/watch?v=keeqnciDVOo)
- [YouTube: Computer Networks - Crash Course Computer Science #28](https://www.youtube.com/watch?v=3QhU9jd03a0)
