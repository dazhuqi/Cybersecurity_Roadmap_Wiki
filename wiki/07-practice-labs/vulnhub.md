# VulnHub

| Field | Value |
| --- | --- |
| Status | Learning |
| Official Website | [vulnhub.com](https://www.vulnhub.com/) |
| VM List | [Vulnerable machines](https://www.vulnhub.com/) |
| Last Reviewed | 2026-07-01 |

VulnHub is different from browser-based platforms because I usually download a vulnerable VM and run it in my own lab. That gives me more control, but it also means I am responsible for isolation and network settings.

This is probably better after I am comfortable with VirtualBox or VMware, host-only networks, snapshots, and basic Linux commands.

## When I Should Use It

VulnHub is useful when:

- I want local vulnerable machines instead of browser-only labs.
- I want to practice VM setup and network isolation.
- I want retired-style machines without active platform restrictions.
- I want to learn how services behave in a local network.

It is not the first place I should start if I still feel lost with virtualization or IP addressing.

## Lab Setup Checklist

- [ ] Download only from the official VulnHub page or a trusted mirror linked from it.
- [ ] Read the VM description before importing it.
- [ ] Verify checksum if one is provided.
- [ ] Import the VM into VirtualBox or VMware.
- [ ] Prefer host-only or isolated lab networking.
- [ ] Take a snapshot before starting if the VM allows it.
- [ ] Record VM name, source URL, network mode, and IP address.
- [ ] Shut down or remove the VM when I am done.

## Network Mode Notes

| Mode | Beginner Meaning | Security Note |
| --- | --- | --- |
| Host-only | VM talks to host and other host-only VMs | Usually safer for isolated practice. |
| NAT | VM can reach out through host NAT | Useful for updates, but check what can talk to the VM. |
| Bridged | VM appears on the same network as real devices | Avoid unless I understand the risk and need it. |

Beginner rule:

Do not bridge vulnerable VMs onto my normal home network just because it is convenient.

## What to Record

```text
VM name:
Source URL:
Download date:
Checksum:
Hypervisor:
Network mode:
Attacker VM:
Target IP:
Goal:
Important services:
Main path:
Cleanup done:
```

## Practice Workflow

### 1. Prepare

- Import the VM.
- Set an isolated network.
- Start attacker VM and target VM.
- Identify the target IP safely.

### 2. Enumerate

Record:

- discovered host
- open ports
- service versions
- web paths or shares
- credentials or hints found in the lab

### 3. Solve Carefully

When I find a vulnerability or weak configuration, I should write why it works. If I use exploit code, I should read it first and understand the expected effect.

### 4. Clean Up

- Shut down the target VM.
- Revert or delete snapshots if no longer needed.
- Remove downloaded files if I do not need them.
- Keep only sanitized notes and writeups.

## Safety and Scope

- Do not bridge vulnerable VMs onto my normal home network unless I know exactly why.
- Do not log into real accounts from vulnerable VMs.
- Keep vulnerable machines separated from personal files and work files.
- Remove or shut down old lab VMs when I am done using them.
- Do not upload suspicious VM files to public scanners if that violates licensing or privacy expectations.

## Troubleshooting Notes

Common beginner problems:

- I cannot find the target IP.
- Host-only adapter is not configured.
- Attacker VM and target VM are on different networks.
- The VM needs a specific hypervisor setting.
- The downloaded archive was not fully extracted.
- DHCP did not give the target an address.

Useful checks:

- confirm both VMs are powered on
- check adapter settings
- check host-only network range
- use safe local discovery only inside the lab network
- reread the VM page for special instructions

## Useful Links

- [VulnHub](https://www.vulnhub.com/)
- [VulnHub FAQ](https://www.vulnhub.com/faq/)

## Review Questions

- What network mode did I use and why?
- Did I keep the vulnerable VM isolated?
- What was the first useful service?
- What mistake slowed me down?
- Did I clean up the VM after the lab?

## Completed VMs

| VM | Source URL | Difficulty | Date | Writeup |
| --- | --- | --- | --- | --- |
