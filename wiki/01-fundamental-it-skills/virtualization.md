# Virtualization

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Fundamental IT Skills |
| Last Reviewed | To be filled |

## Why This Topic Matters

Virtualization is one of the most useful beginner skills for cybersecurity. It lets me run another computer inside my computer. That sounds weird at first, but it means I can build a small lab without buying many physical machines.

For cybersecurity learning, this is important because I should not test tools, vulnerable machines, or suspicious files directly on my main system. A virtual machine gives me a place to practice, make mistakes, take snapshots, and reset things when I break them.

## The Basic Idea

A virtual machine, or VM, is a software-based computer. It has virtual CPU, virtual RAM, virtual disk, and virtual network adapters. It runs an operating system just like a normal computer, but it shares the real hardware of the host machine.

My simple mental model:

- The physical laptop or desktop is the real machine.
- The host OS is the operating system installed on the real machine.
- The hypervisor is the software that creates and runs virtual machines.
- The guest OS is the operating system inside the VM.
- The VM is the whole virtual computer.

Example:

- Physical machine: my laptop
- Host OS: Windows 11
- Hypervisor: VirtualBox or VMware Workstation
- Guest OS: Ubuntu Linux
- VM: the Ubuntu machine running inside Windows

## Host OS

The host operating system is the OS installed directly on the real hardware. If I open the laptop normally and log in, that is the host OS.

The host controls:

- Real CPU
- Real RAM
- Real disk
- Real network adapters
- USB devices
- Display, keyboard, and mouse

Security note:

The host is more important than the guest. If the host is compromised, the attacker may be able to access or control the VMs. So I should not treat my host carelessly just because I have a lab.

## Guest OS

The guest operating system is the OS installed inside a VM.

Examples:

- Kali Linux as a guest
- Ubuntu Server as a guest
- Windows Server as a guest
- Metasploitable as a guest

The guest thinks it is running on a normal computer, but the hardware it sees is virtual.

Security note:

A guest is isolated from the host, but isolation is not magic. Shared folders, clipboard sharing, USB passthrough, and network settings can create paths between guest and host.

## Hypervisor

A hypervisor is the software or firmware that creates and manages virtual machines.

There are two common types:

### Type 1 Hypervisor

A Type 1 hypervisor runs directly on the hardware. It does not need a normal desktop operating system underneath it.

Examples:

- VMware ESXi
- Microsoft Hyper-V Server style deployments
- Proxmox VE

This is common in servers and enterprise environments.

### Type 2 Hypervisor

A Type 2 hypervisor runs as an application on top of a normal host OS.

Examples:

- VirtualBox on Windows
- VMware Workstation on Windows or Linux
- VMware Fusion on macOS

This is common for personal labs because it is easier to start with.

## VirtualBox

VirtualBox is free and open source virtualization software from Oracle. It is popular for beginner labs because it is easy to install and supports many guest operating systems.

Useful features:

- Snapshots
- Shared folders
- Virtual networking
- USB device support
- Importing and exporting appliances

Beginner warning:

Shared folders are convenient, but they reduce isolation. If I use a vulnerable or suspicious VM, I should avoid sharing sensitive host folders with it.

## VMware

VMware has several virtualization products. For personal labs, people often use VMware Workstation or VMware Fusion. In enterprise environments, VMware ESXi and vSphere are common.

Useful things:

- Good VM performance
- Snapshot support
- Many prebuilt lab images support VMware format
- Common in real companies

Beginner note:

The word "VMware" can mean different products, so I should be specific. VMware Workstation is not the same thing as ESXi.

## ESXi

ESXi is VMware's bare-metal Type 1 hypervisor. It is installed directly on server hardware.

Why it matters:

- It is used in enterprise virtualization.
- It hosts multiple server VMs.
- It is managed differently from a normal desktop app.

Security angle:

- If an ESXi host is compromised, many VMs may be affected.
- Admin access to the hypervisor is very powerful.
- ESXi itself must be patched and monitored.

## Proxmox

Proxmox VE is an open-source virtualization management platform. It can run virtual machines using KVM and containers using LXC.

Why beginners may like it:

- It has a web interface.
- It is free and powerful.
- It can be used to build a home lab.
- It supports snapshots, backups, clustering, and storage management.

Security angle:

- Proxmox management access should not be exposed casually.
- Backups and snapshots are useful, but they may also contain sensitive data.
- Lab networks still need isolation.

## Snapshots

A snapshot saves the state of a VM at a point in time. If I break the VM later, I can roll back.

This is very useful for learning because I will break things.

Good uses:

- Before installing a risky tool
- Before changing system settings
- Before starting a lab exercise
- Before malware analysis in a safe lab

Beginner warning:

Snapshots are not the same as backups. They are convenient restore points, but I should not rely on them as the only copy of important data.

## VM Network Modes

This part is confusing at first, but it matters a lot for security labs.

### NAT

With NAT mode, the VM can usually reach the internet through the host, but outside devices cannot directly reach the VM easily.

Use case:

- General learning
- Installing packages
- Browsing from a test VM

Security note:

NAT is often safer for beginners than bridging a vulnerable VM directly onto the home network.

### Bridged

With bridged mode, the VM appears like another machine on the same network as the host.

Use case:

- Testing services from another device
- Simulating a real network host

Security note:

This can be risky if the VM is vulnerable. A vulnerable machine in bridged mode may be reachable by other devices on the network.

### Host-only

With host-only mode, the VM communicates with the host and other host-only VMs, but usually not the wider network or internet.

Use case:

- Isolated lab networks
- Attacker VM and target VM practice
- Safer experiments

Security note:

Host-only is often useful for vulnerable lab machines because it limits exposure.

## Why Isolation Matters

Isolation means keeping risky things separated from important things.

For a beginner lab, I should avoid:

- Running unknown tools on my main OS
- Putting vulnerable VMs directly on my home network
- Sharing real personal folders with lab VMs
- Logging into important accounts from test systems
- Reusing passwords in lab machines

Virtualization helps with isolation, but only if I configure it carefully.

## A Simple Beginner Lab Plan

My first lab does not need to be fancy.

Possible setup:

- Host OS: Windows or Linux laptop
- Hypervisor: VirtualBox or VMware Workstation
- VM 1: Ubuntu Linux for general practice
- VM 2: Kali Linux for security tools later
- VM 3: A deliberately vulnerable machine later, only in host-only mode

First practice tasks:

- Install Ubuntu as a VM.
- Take a snapshot after fresh install.
- Test NAT mode.
- Create a host-only network.
- Record IP addresses inside each VM.
- Revert a snapshot once just to understand how it works.

## Resource Planning

VMs use real resources from the host.

Before creating many VMs, I should check:

- How much RAM the host has
- How much free disk space is available
- Whether virtualization is enabled in BIOS/UEFI
- Whether the CPU supports virtualization features

Rough beginner rule:

- Lightweight Linux VM: 2 GB RAM may be enough.
- Windows VM: usually needs more RAM and disk.
- Running many VMs at once can make the host slow.

## Things I Keep Forgetting

- A VM is not a completely separate physical computer.
- A snapshot is not the same as a backup.
- Bridged mode can expose a VM to the real network.
- Shared clipboard and shared folders reduce isolation.
- The hypervisor itself needs updates.
- A lab should be boring and controlled, not mysterious and dangerous.

## Review Questions

- What is the difference between host OS and guest OS?
- What does a hypervisor do?
- Why is host-only networking useful for security labs?
- Why can bridged networking be risky?
- What is a snapshot good for?
- Why should I avoid shared folders with risky VMs?

## References

- [Red Hat: What is a hypervisor?](https://www.redhat.com/en/topics/virtualization/what-is-a-hypervisor)
- [Microsoft Azure: What is a virtual machine?](https://azure.microsoft.com/en-gb/resources/cloud-computing-dictionary/what-is-a-virtual-machine)
- [VirtualBox](https://www.virtualbox.org/)
- [VirtualBox Documentation](https://www.virtualbox.org/wiki/Documentation)
- [VMware](https://www.vmware.com/)
- [VMware ESXi](https://www.vmware.com/products/cloud-infrastructure/esxi-and-esx)
- [Proxmox](https://www.proxmox.com/en/)
