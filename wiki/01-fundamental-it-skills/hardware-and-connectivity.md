# Hardware and Connectivity

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Fundamental IT Skills |
| Last Reviewed | To be filled |

## Why This Topic Matters

Cybersecurity still runs on physical computers. Even if the work later becomes about logs, malware, cloud accounts, or network traffic, there is always hardware somewhere underneath it. If I do not understand the basic parts of a computer, it is easy to misunderstand where a problem might be happening.

For example, a "slow computer" could be caused by low RAM, a dying disk, too many startup programs, malware, overheating, or a network issue. Those are very different problems. Hardware knowledge does not magically solve them, but it helps me ask better first questions.

## Computer Hardware Components

### CPU

The CPU, or Central Processing Unit, is the part that executes instructions. I think of it as the main "worker" that follows program instructions one step at a time, very quickly.

Important beginner notes:

- More CPU cores can help with multitasking, but not every program uses many cores well.
- A CPU can become slow if it overheats and throttles itself.
- Some security tools, virtual machines, and scans can use a lot of CPU.
- If the CPU is always near 100 percent, the system may feel frozen even if nothing is technically broken.

Security angle:

- Malware can consume CPU for mining, encryption, unpacking, or scanning files.
- A suspicious process using a lot of CPU is not proof of malware, but it is worth investigating.
- Virtual machines need CPU resources from the host machine, so a weak CPU can make a lab painful.

### RAM

RAM is temporary memory. Programs use it while they are running. When the computer shuts down, normal RAM contents are lost.

I keep mixing up RAM and storage, so this simple version helps:

- RAM is the desk space.
- Storage is the filing cabinet.
- The bigger the desk, the more things can be open at the same time.

If RAM is too low, the computer may use the disk as extra memory. That is usually much slower, especially on older hard drives.

Security angle:

- Memory can contain sensitive data while the system is running.
- Incident responders sometimes collect memory dumps to look for malware, processes, connections, and secrets.
- Malware may run only in memory to avoid leaving obvious files on disk.

### Storage

Storage keeps data after the computer powers off. Common types are HDDs and SSDs.

An HDD has moving parts and is usually slower. An SSD has no moving spinning disk and is usually much faster. For daily use, moving from HDD to SSD can make an old computer feel completely different.

Things I should know:

- The operating system lives on storage.
- User files live on storage.
- Logs live on storage.
- Deleted files may still be recoverable depending on how deletion and overwriting happened.
- Disk health matters because a failing disk can cause random crashes, slow boot, or file corruption.

Security angle:

- Full disk encryption protects data if a device is lost.
- Backups protect against hardware failure and ransomware.
- Forensics often starts with storage images so investigators can examine data without changing the original disk.

### Motherboard

The motherboard connects the major components together. CPU, RAM, storage, power, expansion cards, and ports all connect through it in some way.

I do not need to know every circuit, but I should understand that the motherboard provides the paths that components use to talk to each other.

Security angle:

- Firmware settings such as UEFI/BIOS boot order matter.
- Secure Boot and TPM are related to trust at startup.
- If a machine can boot from an external USB drive, that can be useful for repair but also risky if physical access is not controlled.

### Network Interface Card

The network interface lets the computer communicate with a network. It can be wired Ethernet, WiFi, or both.

Useful things to check:

- Does the interface have an IP address?
- Is it connected to the expected network?
- Is it using wired or wireless?
- Does it have a default gateway?
- Is DNS configured?

Security angle:

- The network card has a MAC address.
- Network monitoring often starts with interface traffic.
- If a device has multiple interfaces, traffic might go through a path I did not expect.

### Power Supply and Battery

The power supply provides electricity to desktop components. Laptops also have batteries and chargers.

Power problems can look strange. A weak charger or failing power supply can cause random shutdowns, boot problems, or hardware instability.

Security angle:

- Availability is part of security. A system that cannot stay powered on is not reliable.
- UPS devices are important for servers and network equipment.
- Sudden power loss can damage data or interrupt logging.

## Connection Types

Connection types are how devices talk to each other or to a network. I should not just memorize names. I should know the distance, speed, physical/wireless nature, and common use case.

### Ethernet

Ethernet is a wired network connection. It usually uses an RJ45 cable in home and office networks.

Why it matters:

- It is usually more stable than WiFi.
- It is common for desktops, servers, routers, switches, and access points.
- It is easier to reason about because the cable shows the physical path.

Security angle:

- Plugging into an Ethernet port may give direct access to an internal network if there are no controls.
- Network Access Control can limit what unknown devices can do.
- Physical ports should not be ignored during security reviews.

### WiFi

WiFi is wireless networking using radio signals. It is convenient because devices can move around without cables.

Beginner notes:

- WiFi usually runs on 2.4 GHz, 5 GHz, and sometimes 6 GHz bands.
- 2.4 GHz reaches farther but is often crowded.
- 5 GHz is usually faster but may not travel as far through walls.
- The router or access point creates the wireless network.

Security angle:

- Weak WiFi passwords are a real risk.
- Old encryption like WEP is not safe.
- Rogue access points and evil twin attacks abuse the fact that users may connect to a network name they recognize.
- Guest networks help separate visitors from internal devices.

### Bluetooth

Bluetooth is short-range wireless communication. It is common for headphones, keyboards, mice, watches, phones, and car systems.

It is not the same as WiFi. WiFi is normally used for network and internet access. Bluetooth is usually used for direct nearby device communication.

Security angle:

- Leaving Bluetooth discoverable can increase exposure.
- Pairing should be done carefully, especially in public places.
- Older devices or outdated firmware may have Bluetooth vulnerabilities.
- If I do not need Bluetooth, turning it off reduces unnecessary attack surface.

### NFC

NFC means Near Field Communication. It works over very short distances, usually a few centimeters. Contactless payments and access cards often use NFC-style interaction.

The short range is useful because the devices normally need to be very close. But "short range" does not mean "no risk."

Security angle:

- NFC is used in payments and access control, so it can be tied to identity and money.
- Lost phones or cards matter if they can still authorize actions.
- I should understand the difference between convenience and trust.

### Infrared

Infrared uses light for short-range communication. A TV remote is the easiest example.

It usually needs line of sight. If something blocks the path, it may stop working.

Security angle:

- Infrared is less central in modern computer networking, but it still appears in remote controls and some device communication.
- It is a reminder that wireless does not always mean radio.

### Fiber

Fiber-optic connections use light through fiber cables. They are common for high-speed and long-distance networking.

Security angle:

- Fiber is used in backbone and enterprise networks.
- Physical access to network cabling still matters.
- Fiber problems may require different tools than copper Ethernet problems.

### Cellular

Cellular connections use mobile networks such as 4G or 5G. Phones, tablets, hotspots, and some laptops can use them.

Security angle:

- Cellular can bypass company WiFi monitoring if a device uses its own connection.
- Mobile device management matters when work data is on phones.
- Lost mobile devices can become data exposure incidents.

## How I Would Troubleshoot a Connection Problem

If a device cannot connect, I should slow down and ask:

1. Is it a physical connection problem?
2. Is the adapter enabled?
3. Does the device have an IP address?
4. Does it have a default gateway?
5. Does DNS work?
6. Is only one website broken, or is all internet broken?
7. Is this a local device issue, a router issue, or an upstream network issue?

I should avoid changing five settings at once because then I will not know what fixed it.

## Small Practice

- [ ] Open system information and write down CPU, RAM, and storage type.
- [ ] Check whether the machine is using Ethernet, WiFi, or both.
- [ ] Find the MAC address of the active network adapter.
- [ ] Turn Bluetooth off and on, and note where the setting lives.
- [ ] Look at the router or access point and identify which ports are WAN and LAN.

## Things I Keep Forgetting

- RAM is temporary, storage is persistent.
- WiFi and Bluetooth are both wireless, but they solve different problems.
- A cable being plugged in does not always mean the network is configured correctly.
- Physical access is a security issue, not just an IT support issue.
- A slow system is not automatically infected with malware.

## Review Questions

- What is the difference between CPU and RAM?
- Why does SSD storage usually feel faster than HDD storage?
- Why is Ethernet often more stable than WiFi?
- What is one security risk of Bluetooth?
- Why can an open Ethernet port be risky?
- What should I check before assuming a website is down?

## References

- [IBM: What is computer hardware?](https://www.ibm.com/think/topics/hardware)
- [NordVPN: Network connection types explained](https://nordvpn.com/blog/network-connection-types/)
- [TechTarget: What is Ethernet?](https://www.techtarget.com/searchnetworking/definition/Ethernet)
- [HowStuffWorks: How WiFi works](https://computer.howstuffworks.com/wireless-network.htm)
- [HowStuffWorks: How Bluetooth works](https://electronics.howstuffworks.com/bluetooth.htm)
- [Spiceworks: What is Near Field Communication?](https://www.spiceworks.com/tech/networking/articles/what-is-near-field-communication/)
