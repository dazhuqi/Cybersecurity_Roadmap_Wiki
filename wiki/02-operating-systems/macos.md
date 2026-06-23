# macOS

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Operating Systems |
| Last Reviewed | To be filled |

## Why This Topic Matters

macOS appears a lot in developer, design, executive, and personal environments. It feels different from Windows, but it still has users, files, permissions, processes, logs, network settings, and security controls.

For cybersecurity, macOS is worth learning because attackers also target it, and many companies have mixed environments. I should not assume "Macs do not get malware." That is a lazy shortcut.

## macOS and Unix

macOS is Unix-based. That means it shares many command-line ideas with Linux, although it is not the same as Linux.

Similarities:

- It has a terminal.
- It uses `/Users` for user home directories.
- It has Unix-style permissions.
- It supports shells like zsh.
- Commands like `ls`, `cd`, `cat`, `grep`, and `ps` exist.

Differences:

- It has Apple-specific security features.
- System folders and app management are different.
- Some command options differ from Linux.
- Apple controls more of the hardware and OS integration.

## File System Basics

Important locations:

```text
/Users
/Applications
/System
/Library
~/Library
/private/var/log
```

How I understand them:

- `/Users` contains user home folders.
- `/Applications` contains installed apps.
- `/System` contains protected system files.
- `/Library` contains system-wide support files.
- `~/Library` contains user-specific app data and settings.
- `/private/var/log` contains logs.

Security angle:

- `~/Library` can contain browser data, app settings, caches, and persistence locations.
- Applications should normally come from trusted sources.
- System Integrity Protection protects important system areas.

## Users and Permissions

macOS has users, groups, and file permissions.

Useful commands:

```bash
whoami
id
ls -la
chmod
chown
```

Beginner note:

The Finder GUI can hide some permission details, but the terminal shows them more directly.

Security angle:

- Admin users have more power than standard users.
- Sensitive files should not be readable by everyone.
- Permission prompts are part of macOS security.

## Gatekeeper

Gatekeeper helps control which apps can run. It checks whether apps are from identified developers and whether they are notarized by Apple.

Beginner version:

If I download a random app from the internet, macOS may block or warn before running it.

Security angle:

- Gatekeeper helps reduce casual execution of untrusted apps.
- It is not perfect security.
- If a user bypasses warnings without thinking, risk increases.

## FileVault

FileVault is full-disk encryption for macOS.

Why it matters:

- If a Mac is lost or stolen, FileVault helps protect data on the disk.
- Without encryption, someone with physical access may have more options to recover data.

Beginner check:

```text
System Settings -> Privacy & Security -> FileVault
```

## Keychain

Keychain stores passwords, certificates, keys, and secure notes.

Beginner version:

It is like a protected storage area for secrets used by macOS and apps.

Security angle:

- Keychain can contain very sensitive information.
- Access to an unlocked account may expose saved credentials.
- I should be careful with prompts asking to access Keychain items.

## Privacy Permissions

macOS has privacy permissions for things like:

- Camera
- Microphone
- Screen recording
- Full disk access
- Accessibility
- Location

Security angle:

- Full Disk Access is powerful.
- Accessibility permission can let apps control or observe user actions.
- Screen recording permission can expose sensitive data.

If I see an unknown app with these permissions, I should investigate.

## Processes and Activity Monitor

Activity Monitor is the GUI tool for viewing processes.

Terminal commands:

```bash
ps aux
top
pgrep <name>
kill <pid>
```

Things to check:

- Process name
- CPU usage
- Memory usage
- User running the process
- Path if possible

Security angle:

- Strange processes can be suspicious.
- Some malware uses LaunchAgents or LaunchDaemons for persistence.
- Process names alone are not enough evidence.

## LaunchAgents and LaunchDaemons

macOS uses LaunchAgents and LaunchDaemons to start programs automatically.

Common locations:

```text
~/Library/LaunchAgents
/Library/LaunchAgents
/Library/LaunchDaemons
```

Security angle:

- These folders are important persistence locations.
- Unknown plist files should be reviewed carefully.
- Legitimate apps also use these locations, so context matters.

## Logs

macOS has a unified logging system.

Useful command:

```bash
log show --last 10m
```

Other useful places:

```text
Console.app
/private/var/log
```

Security angle:

- Logs can show app crashes, authentication events, and system behavior.
- macOS logs can be noisy, so I need patience.

## Network Checks

Useful commands:

```bash
ifconfig
ipconfig getifaddr en0
netstat -rn
scutil --dns
ping 8.8.8.8
dig example.com
```

Beginner note:

Interface names like `en0` can be confusing. On many Macs, `en0` is WiFi, but I should verify instead of assuming.

## Small Practice

- [ ] Check macOS version.
- [ ] Open Terminal and run `whoami`, `id`, and `ls -la`.
- [ ] Find FileVault status.
- [ ] Review Privacy & Security permissions.
- [ ] Open Activity Monitor and inspect running processes.
- [ ] Look at LaunchAgents and LaunchDaemons folders.
- [ ] Run one DNS query with `dig`.

## Things I Keep Forgetting

- macOS is Unix-based, but not the same as Linux.
- `~/Library` is the user Library, not the system Library.
- Keychain stores sensitive secrets.
- Full Disk Access is a strong permission.
- Gatekeeper helps, but user decisions still matter.
- LaunchAgents and LaunchDaemons are important for persistence checks.

## Review Questions

- Why is FileVault useful?
- What does Keychain store?
- Why is Full Disk Access sensitive?
- What are LaunchAgents used for?
- How is macOS similar to Linux?
- Why should unknown apps with Accessibility permission be reviewed?

## References

- [Apple Platform Security](https://support.apple.com/guide/security/welcome/web)
- [Apple: Mac User Guide](https://support.apple.com/guide/mac-help/welcome/mac)
- [Apple: Protect your Mac from malware](https://support.apple.com/guide/mac-help/protect-your-mac-from-malware-mh40596/mac)
- [Apple: Use FileVault to encrypt your Mac startup disk](https://support.apple.com/en-us/102338)
