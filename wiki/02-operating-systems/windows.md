# Windows

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Operating Systems |
| Last Reviewed | To be filled |

## Why This Topic Matters

Windows is everywhere: personal laptops, office desktops, domain-joined workstations, servers, and sometimes even security analyst machines. A lot of real incidents involve Windows because users open email, browse the web, download files, and log into company tools from Windows systems.

For me as a beginner, the goal is not to memorize every Windows feature. The goal is to know where to look first when something happens.

## What Windows Does

Windows is an operating system. It manages hardware, files, users, running programs, network settings, logs, and security controls.

The simple version:

- It lets users interact with the computer.
- It runs applications.
- It controls access to files and settings.
- It records events in logs.
- It provides built-in security features.

## File System Basics

Windows commonly uses NTFS as its file system. NTFS supports permissions, ownership, auditing, encryption features, and other metadata.

Important folders:

```text
C:\Windows
C:\Program Files
C:\Program Files (x86)
C:\Users
C:\Users\<username>\Downloads
C:\Users\<username>\AppData
```

Beginner notes:

- `C:\Windows` contains operating system files.
- `Program Files` contains installed applications.
- `Users` contains user profiles.
- `Downloads` is a common place where suspicious files may appear.
- `AppData` is hidden by default and often stores application data.

Security angle:

- Malware often hides in user-writable locations.
- `AppData` is important because many applications and some malware use it.
- File permissions decide who can read, write, or execute files.

## Users and Groups

Windows has users and groups. A user account represents a person or service. A group is a collection of accounts with shared permissions.

Common groups:

- Administrators
- Users
- Remote Desktop Users
- Backup Operators

The Administrators group is powerful. If an attacker gets admin access, they can usually do a lot of damage.

Things to check:

```powershell
whoami
net user
net localgroup
net localgroup administrators
```

Security angle:

- Too many local admins increases risk.
- Old unused accounts should be removed or disabled.
- Service accounts should not have more permissions than needed.

## UAC

UAC means User Account Control. It is the prompt that asks for permission when a task needs elevated privileges.

Beginner note:

UAC is not the same as being fully secure. It is a protection layer that makes privilege changes more visible, but users can still approve dangerous actions.

Security angle:

- If a user approves prompts without thinking, UAC becomes weaker.
- Some attacks try to bypass UAC.
- Running everything as administrator is a bad habit.

## Services

Windows services are background programs that can start automatically and run without a user opening them manually.

Examples:

- Windows Update
- Print Spooler
- Windows Defender services
- Remote Desktop Services

Useful commands:

```powershell
Get-Service
Get-Service | Where-Object {$_.Status -eq "Running"}
```

Security angle:

- Malicious persistence can be created through services.
- Unneeded services increase attack surface.
- Service permissions matter.

## Processes

A process is a running program.

Useful checks:

```powershell
Get-Process
tasklist
```

Things I should look at:

- Process name
- CPU usage
- Memory usage
- Parent process if available
- File path
- User running the process

Security angle:

- A strange process name is suspicious, but not proof.
- A normal-looking process in a strange path is suspicious.
- A process running from Downloads or Temp may be worth checking.

## Event Viewer and Logs

Windows logs many events. Event Viewer is the GUI tool for reading them.

Important logs:

- Application
- System
- Security
- Windows Defender logs
- PowerShell logs

Common things to investigate:

- Logon events
- Failed logons
- Service creation
- Scheduled task changes
- Defender detections
- System crashes

Useful PowerShell example:

```powershell
Get-EventLog -LogName System -Newest 20
```

Security angle:

Logs are one of the main ways defenders understand what happened. If logging is disabled or overwritten, investigation becomes much harder.

## Registry

The Windows Registry stores configuration data for the OS and applications.

Beginner note:

The registry is powerful and easy to break. I should not randomly edit it.

Security angle:

- Malware may use registry keys for persistence.
- Startup entries can live in the registry.
- Investigators often check registry artifacts.

Useful tool:

```text
regedit
```

## Task Scheduler

Task Scheduler runs programs at specific times or when certain events happen.

Normal uses:

- Updates
- Backups
- Maintenance tasks

Security angle:

- Attackers can create scheduled tasks for persistence.
- A task that runs an unknown script should be investigated.

Useful command:

```powershell
Get-ScheduledTask
```

## Windows Defender

Microsoft Defender is the built-in antimalware protection in modern Windows.

Things to know:

- It can scan files.
- It can detect malware.
- It has real-time protection.
- It records detections and events.

Useful place to check:

```text
Windows Security -> Virus & threat protection
```

Security angle:

- Defender alerts are important evidence.
- Turning off Defender without a reason is suspicious.
- Defender should be updated.

## Windows Firewall

Windows Firewall controls inbound and outbound network traffic based on rules.

Beginner version:

- Inbound rule: traffic coming into the computer.
- Outbound rule: traffic leaving the computer.

Useful checks:

```powershell
Get-NetFirewallProfile
Get-NetFirewallRule | Select-Object -First 10
```

Security angle:

- Opening ports without understanding them increases risk.
- Remote Desktop should not be exposed casually.
- Firewall rules can reveal what services are expected to run.

## Remote Desktop

RDP lets users remotely access Windows systems.

Security angle:

- Exposed RDP is a common target.
- Weak passwords make RDP dangerous.
- MFA, VPN, account lockout, and restricted access help reduce risk.

Beginner note:

If I see port `3389`, I should think about RDP.

## Basic Windows Commands

```powershell
whoami
hostname
ipconfig /all
net user
net localgroup administrators
Get-Process
Get-Service
Get-ScheduledTask
Get-NetIPAddress
Get-NetTCPConnection
```

I should not just collect commands. I should write down what question each command answers.

## Small Practice

- [ ] Find the Windows version.
- [ ] List local users.
- [ ] Check who is in the Administrators group.
- [ ] Open Event Viewer and find the Security log.
- [ ] Check Defender status.
- [ ] Check firewall profile status.
- [ ] Find the current IP address with `ipconfig /all`.

## Things I Keep Forgetting

- `AppData` matters a lot.
- UAC is not the same as perfect protection.
- A process name alone is not enough evidence.
- Logs are useful only if they exist and are retained.
- RDP is convenient but risky if exposed.
- Local admin access is very powerful.

## Review Questions

- What is the difference between a user and a group?
- Why is the Administrators group sensitive?
- What kind of information can Event Viewer show?
- Why might attackers use scheduled tasks?
- What is the security risk of exposed RDP?
- Why should I check file paths when looking at processes?

## References

- [Microsoft Learn: Windows documentation](https://learn.microsoft.com/en-us/windows/)
- [Microsoft Learn: Event Viewer](https://learn.microsoft.com/en-us/shows/inside/event-viewer)
- [Microsoft Learn: Microsoft Defender Antivirus](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows)
- [Microsoft Learn: Windows Defender Firewall](https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/)
