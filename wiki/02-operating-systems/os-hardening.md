# OS Hardening

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Operating Systems |
| Last Reviewed | To be filled |

## Why This Topic Matters

OS hardening means reducing unnecessary risk on an operating system. It does not mean making a computer impossible to hack. It means removing easy mistakes, limiting what attackers can use, and making the system easier to monitor.

Beginner version:

> Hardening is turning off what I do not need, protecting what I do need, and making sure I can notice problems.

## The Basic Idea

A fresh operating system may be usable, but not always secure enough for its environment. Some defaults are convenient. Some defaults are broad because the OS needs to support many use cases.

Hardening tries to answer:

- What software is installed?
- What services are running?
- Which accounts exist?
- Who has admin access?
- Are updates installed?
- Is the firewall enabled?
- Are logs available?
- Is sensitive data encrypted?
- Are backups working?

## Patching

Patching means installing updates that fix bugs and security vulnerabilities.

Why it matters:

- Known vulnerabilities are often easier to exploit.
- Attackers may scan for systems missing old patches.
- Security tools cannot fully compensate for an unpatched system.

Beginner practice:

- Check update status.
- Install updates in a test or safe window.
- Reboot when needed.
- Record what changed.

Security note:

Some patches break things, so organizations usually test and schedule them. But never patching is worse.

## Remove Unneeded Software

Every installed program adds possible risk.

Examples:

- Old browser
- Unused remote access tool
- Trial software
- Unmaintained utilities
- Unknown installers in Downloads

Beginner rule:

If I do not know why a program is installed, I should investigate before deleting it. But if it is clearly unused and unnecessary, removing it reduces attack surface.

## Disable Unneeded Services

Services run in the background. Some listen on network ports.

Why this matters:

- A service can contain vulnerabilities.
- A service can expose a port.
- A service can run with high privileges.

Examples to review:

- Remote Desktop
- SSH
- File sharing
- Print services
- Web servers
- Database services

Beginner warning:

Do not disable random services on a production system. Learn in a lab first.

## Account Hardening

Accounts are one of the biggest security areas.

Things to check:

- Are unused accounts disabled?
- Who is an administrator?
- Are default accounts active?
- Are passwords strong?
- Is MFA available?
- Are service accounts overpowered?

Security angle:

- Admin accounts should be limited.
- Daily work should not always happen as admin.
- Shared accounts make auditing harder.
- Old accounts are easy to forget and easy to abuse.

## Password and Lockout Policies

Useful controls:

- Minimum password length
- Account lockout after repeated failed attempts
- Password manager use
- MFA where possible

Beginner note:

Password complexity alone is not everything. Long unique passwords and MFA matter more than weird short passwords with symbols.

## Firewall

A host firewall controls network traffic on the machine.

Basic goals:

- Block unexpected inbound traffic.
- Allow only needed services.
- Avoid exposing admin services unnecessarily.

Examples:

- Windows Firewall
- `ufw` on Ubuntu
- `firewalld` on some Linux systems
- macOS Application Firewall

Security angle:

If a service does not need to be reachable from the network, the firewall should not allow it.

## Logging

Logging helps me understand what happened.

Important logs:

- Login attempts
- Admin actions
- Service failures
- Security alerts
- Firewall events
- Application errors

Beginner mistake:

Only checking logs after something bad happens, then discovering logs were not enabled or were overwritten.

## Backups

Backups are part of security because they help recover from:

- Ransomware
- Accidental deletion
- Disk failure
- Bad updates
- Misconfiguration

Good backup questions:

- What is backed up?
- How often?
- Where is it stored?
- Who can access it?
- Has restore been tested?

Beginner note:

A backup that has never been restored is only a hope, not proof.

## Encryption

Disk encryption protects data if a device is lost or stolen.

Examples:

- BitLocker on Windows
- FileVault on macOS
- LUKS on Linux

Security angle:

Encryption helps when the attacker has the device but not the unlock key. It does not protect everything while the system is already unlocked and running.

## Least Privilege

Least privilege means users and programs should only have the access they need.

Examples:

- Normal user instead of admin for daily work
- Service account with limited permissions
- File shares limited to the right group
- App permissions reviewed

Beginner version:

Do not give "full control" because it is easier.

## Basic Hardening Checklist

- [ ] Install OS updates.
- [ ] Remove software that is not needed.
- [ ] Disable services that are not needed.
- [ ] Review local admin users.
- [ ] Enable host firewall.
- [ ] Enable built-in security tools.
- [ ] Enable disk encryption where appropriate.
- [ ] Review file sharing settings.
- [ ] Enable useful logging.
- [ ] Configure backups.
- [ ] Test restore from backup.
- [ ] Document changes.

## Hardening by OS

### Windows

Things to review:

- Windows Update
- Microsoft Defender
- Windows Firewall
- Local Administrators group
- Remote Desktop status
- BitLocker
- Event logs
- Startup programs and scheduled tasks

### Linux

Things to review:

- Package updates
- SSH configuration
- `sudo` permissions
- Listening services
- Firewall rules
- `/var/log`
- File permissions
- Unused users

### macOS

Things to review:

- System updates
- FileVault
- Gatekeeper
- Firewall
- Privacy permissions
- Keychain prompts
- LaunchAgents and LaunchDaemons

## Things I Keep Forgetting

- Hardening is not one setting.
- Convenience often increases risk.
- Backups need restore testing.
- Firewalls do not help much if everything is allowed.
- Admin access should be rare, not normal.
- Patching is boring until an old vulnerability gets exploited.

## Review Questions

- What does OS hardening mean?
- Why should unused services be disabled?
- Why are backups part of security?
- What is least privilege?
- Why should logs be enabled before incidents?
- What does disk encryption protect against?

## References

- [Microsoft Security Baselines](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/security-baselines)
- [Ubuntu Security Documentation](https://ubuntu.com/security)
- [Apple Platform Security](https://support.apple.com/guide/security/welcome/web)
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks)
