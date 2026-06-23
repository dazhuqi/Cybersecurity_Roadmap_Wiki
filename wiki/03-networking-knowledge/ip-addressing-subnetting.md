# IP Addressing and Subnetting

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Networking Knowledge |
| Last Reviewed | To be filled |

## Why This Topic Matters

IP addressing is one of those topics that looks simple until subnetting appears. At the beginning, I only need to understand the basic purpose: devices need addresses so traffic can be delivered to the right place.

Subnetting is the part where I split a network into smaller networks. It feels math-heavy at first, but the idea is practical: organize addresses, reduce broadcast scope, and separate networks.

## What Is an IP Address?

An IP address is a logical network address.

Example:

```text
192.168.1.25
```

I can think of it like a network location. If a device wants to send traffic to another device using IP, it needs to know the destination IP address.

## IPv4

IPv4 addresses are usually written as four decimal numbers separated by dots.

Example:

```text
192.168.1.25
```

Each number is from 0 to 255 because each part is 8 bits.

IPv4 has 32 bits total:

```text
8 bits . 8 bits . 8 bits . 8 bits
```

Beginner note:

I do not need to do binary conversion perfectly at first, but I should know that subnetting is based on bits.

## Network Part and Host Part

An IP address has two conceptual parts:

- Network part: which network this address belongs to.
- Host part: which device inside that network.

Example:

```text
192.168.1.25/24
```

With `/24`, the first 24 bits describe the network. The remaining 8 bits describe hosts.

In beginner language:

- Network: `192.168.1.0`
- Host example: `192.168.1.25`
- Usable host range: usually `192.168.1.1` to `192.168.1.254`
- Broadcast: `192.168.1.255`

## CIDR Notation

CIDR notation uses a slash number.

Examples:

```text
192.168.1.0/24
10.0.0.0/8
172.16.0.0/12
```

The slash number tells how many bits are used for the network part.

Common beginner examples:

| CIDR | Subnet Mask | Simple Meaning |
| --- | --- | --- |
| `/8` | `255.0.0.0` | Large network |
| `/16` | `255.255.0.0` | Medium-sized network |
| `/24` | `255.255.255.0` | Common small LAN |
| `/32` | `255.255.255.255` | One single host address |

## Subnet Mask

A subnet mask is another way to show which part is network and which part is host.

Example:

```text
IP address:  192.168.1.25
Subnet mask: 255.255.255.0
CIDR:        /24
```

The mask `255.255.255.0` means the first three octets are the network part.

Beginner shortcut:

`/24` is the one I will see a lot in home labs.

## Network Address

The network address identifies the whole network.

Example:

```text
192.168.1.0/24
```

The `.0` address is usually the network address in this example, not a normal host.

## Broadcast Address

The broadcast address sends to all hosts in the subnet.

Example:

```text
192.168.1.255
```

For `192.168.1.0/24`, `.255` is usually the broadcast address.

Beginner note:

The first and last addresses in a subnet are often reserved: network address and broadcast address.

## Usable Host Range

For:

```text
192.168.1.0/24
```

The usual usable range is:

```text
192.168.1.1 - 192.168.1.254
```

That gives 254 usable host addresses.

## Private IP Addresses

Private IP addresses are used inside local networks. They are not directly routed on the public internet.

Common private ranges:

```text
10.0.0.0/8
172.16.0.0/12
192.168.0.0/16
```

Home networks often use `192.168.x.x`.

Security angle:

Private IPs are still important. Internal networks can still be attacked. "Private" does not mean "safe."

## Public IP Addresses

Public IP addresses are reachable on the internet, depending on routing and firewall rules.

Beginner note:

My laptop at home usually has a private IP, while my router has a public IP from the ISP.

Security angle:

Public-facing systems need more careful patching, firewalling, monitoring, and authentication because attackers can reach them more easily.

## Loopback and Localhost

Loopback usually means the local machine talking to itself.

Common loopback address:

```text
127.0.0.1
```

Common name:

```text
localhost
```

Use case:

- Testing a service running on the same machine.
- Local development.

Beginner note:

If a service listens only on `127.0.0.1`, other machines usually cannot connect to it.

## Default Gateway

The default gateway is where traffic goes when the destination is outside the local network.

Example:

```text
Device:          192.168.1.25
Default gateway: 192.168.1.1
```

If the default gateway is wrong, local communication may work, but internet access may fail.

## Why Subnetting Is Useful

Subnetting helps with:

- Organizing networks
- Reducing broadcast size
- Separating departments or functions
- Creating lab networks
- Supporting firewall rules
- Improving security boundaries

Security angle:

Segmentation depends on good addressing. If everything is in one flat network, movement becomes easier after one device is compromised.

## Tiny Subnetting Example

Network:

```text
192.168.1.0/24
```

If I split it into two `/25` networks:

```text
192.168.1.0/25
192.168.1.128/25
```

The first `/25` roughly covers:

```text
192.168.1.1 - 192.168.1.126
Broadcast: 192.168.1.127
```

The second `/25` roughly covers:

```text
192.168.1.129 - 192.168.1.254
Broadcast: 192.168.1.255
```

This is where the math starts to matter. I need practice, not just reading.

## Commands to Inspect IP Settings

Windows:

```powershell
ipconfig /all
route print
```

Linux:

```bash
ip addr
ip route
```

macOS:

```bash
ifconfig
netstat -rn
```

## Things I Keep Forgetting

- CIDR slash number is about network bits.
- `/24` usually means `255.255.255.0`.
- Private IP does not mean secure IP.
- The default gateway is the way out of the local network.
- `127.0.0.1` means this machine itself.
- Subnetting gets easier only by doing practice problems.

## Review Questions

- What does `/24` mean?
- What is a subnet mask?
- What is the difference between private and public IP addresses?
- What is the default gateway for?
- What is `127.0.0.1` used for?
- Why is subnetting useful for security?

## References

- [Microsoft: TCP/IP addressing and subnetting](https://learn.microsoft.com/en-us/troubleshoot/windows-client/networking/tcpip-addressing-and-subnetting)
- [Practical Networking: Subnetting](https://www.practicalnetworking.net/series/subnetting/subnetting/)
- [ARIN: Private IPv4 address space](https://www.arin.net/reference/research/statistics/address_filters/)
