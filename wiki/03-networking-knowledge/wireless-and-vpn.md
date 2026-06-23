# Wireless and VPN

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Networking Knowledge |
| Last Reviewed | To be filled |

## Why This Topic Matters

Wireless networking is convenient, which is exactly why it matters for security. A cable limits where someone can connect. WiFi lets devices connect through the air. That is useful, but it also means the network boundary is less visible.

VPNs are also easy to misunderstand. A VPN can protect traffic in some situations and provide remote access, but it does not magically make everything safe.

## WiFi

WiFi is wireless networking based on IEEE 802.11 standards. It lets devices connect without Ethernet cables.

Beginner notes:

- WiFi uses radio signals.
- Home WiFi usually comes from a router or access point.
- Devices join a network name called an SSID.
- WiFi commonly uses 2.4 GHz, 5 GHz, and sometimes 6 GHz bands.

## 2.4 GHz vs 5 GHz

Simple comparison:

| Band | Beginner Notes |
| --- | --- |
| 2.4 GHz | Longer range, more crowded, often slower |
| 5 GHz | Shorter range, usually faster, less crowded |
| 6 GHz | Newer, used by WiFi 6E/7 devices, more capacity |

Walls, distance, interference, and device support all matter.

## SSID

SSID is the WiFi network name users see.

Example:

```text
Home-WiFi
Guest-WiFi
Company-WiFi
```

Security angle:

- A familiar SSID can be copied by an attacker.
- Hiding an SSID is not strong security.
- Guest SSIDs should be separated from internal networks.

## WPA, WPA2, WPA3, and WEP

These are WiFi security standards.

### WEP

WEP is old and insecure. I should treat it as broken.

### WPA

WPA improved on WEP but is also old now.

### WPA2

WPA2 is still common. WPA2-Personal uses a shared password. WPA2-Enterprise uses centralized authentication, often with RADIUS.

### WPA3

WPA3 is newer and improves security in several areas.

Beginner rule:

Use WPA2 or WPA3. Do not use WEP.

## Personal vs Enterprise WiFi

### Personal

Everyone uses a shared WiFi password.

Example:

- Home network
- Small office

Risk:

- If one person shares the password, many people may know it.
- Changing access means changing the shared password.

### Enterprise

Users authenticate individually, usually through centralized identity systems.

Example:

- Company WiFi
- University WiFi

Benefit:

- Individual accounts can be disabled.
- Access can be logged and controlled more centrally.

## WPS

WPS means Wi-Fi Protected Setup. It was designed to make joining WiFi easier.

Beginner note:

Convenient features can create risk.

Security angle:

- WPS PIN methods have had security problems.
- Many security guides recommend disabling WPS if it is not needed.

## Rogue Access Point

A rogue access point is an unauthorized access point connected to a network.

Example:

Someone plugs in a cheap WiFi router inside an office without approval.

Security risk:

- It may bypass normal network controls.
- It may be poorly configured.
- It may give attackers or outsiders a path into the network.

## Evil Twin

An evil twin is a malicious WiFi network pretending to be a legitimate one.

Example:

Real network:

```text
CoffeeShop-WiFi
```

Fake network:

```text
CoffeeShop-WiFi
```

Security risk:

- Users may connect to the fake network.
- Attackers may capture traffic or show fake login pages.

## Deauthentication Attacks

A deauthentication attack tries to kick clients off a WiFi network.

Why attackers may do this:

- Force users to reconnect.
- Push users toward an evil twin.
- Disrupt service.

Beginner note:

Wireless attacks must only be tested in authorized environments.

## VPN

VPN means Virtual Private Network. It creates an encrypted tunnel between a device and a VPN endpoint.

Common uses:

- Remote employee access to company network
- Protecting traffic on untrusted WiFi
- Connecting branch offices
- Accessing internal services

## What a VPN Does

A VPN can:

- Encrypt traffic between the client and VPN server.
- Make a remote device appear connected to another network.
- Route traffic through a controlled endpoint.

## What a VPN Does Not Do

A VPN does not automatically:

- Make malware safe.
- Make phishing impossible.
- Protect against everything after traffic leaves the VPN server.
- Fix weak passwords.
- Replace endpoint security.

Beginner mistake:

Thinking "VPN on" means "safe." It depends on the threat and the VPN configuration.

## Split Tunnel vs Full Tunnel

### Full Tunnel

All traffic goes through the VPN.

Pros:

- More centralized control.
- Easier traffic monitoring.

Cons:

- More load on VPN infrastructure.
- May slow down traffic.

### Split Tunnel

Only some traffic goes through the VPN. Other traffic goes directly to the internet.

Pros:

- Less VPN load.
- Can be faster for normal browsing.

Cons:

- Less centralized visibility.
- Policy can be more complex.

## Wireless and VPN Security Checklist

- [ ] Use WPA2 or WPA3.
- [ ] Avoid WEP.
- [ ] Use strong WiFi passwords.
- [ ] Disable WPS if not needed.
- [ ] Separate guest WiFi from internal systems.
- [ ] Keep router/access point firmware updated.
- [ ] Watch for unknown access points.
- [ ] Use VPN on untrusted networks when appropriate.
- [ ] Do not assume VPN solves all security problems.

## Things I Keep Forgetting

- WiFi security depends on configuration, not just signal.
- Hidden SSID is not real protection.
- Guest WiFi should be isolated.
- WPS can be risky.
- VPN protects a path, not the whole universe.
- Evil twin attacks abuse user trust in network names.

## Review Questions

- Why is WEP unsafe?
- What is the difference between WPA2-Personal and WPA2-Enterprise?
- What is an evil twin attack?
- Why should guest WiFi be separated?
- What does a VPN tunnel protect?
- What is the difference between split tunnel and full tunnel?

## References

- [Wi-Fi Alliance: Security](https://www.wi-fi.org/discover-wi-fi/security)
- [Cloudflare: What is a VPN?](https://www.cloudflare.com/learning/access-management/what-is-a-vpn/)
- [CISA: Securing Wireless Networks](https://www.cisa.gov/news-events/news/securing-wireless-networks)
- [HowStuffWorks: How WiFi works](https://computer.howstuffworks.com/wireless-network.htm)
