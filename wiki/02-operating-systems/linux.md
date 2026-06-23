# Linux

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Operating Systems |
| Last Reviewed | To be filled |

## Why This Topic Matters

Linux is everywhere in cybersecurity. Web servers, cloud servers, containers, security tools, routers, and lab machines often use Linux. Even if I use Windows as my main computer, I still need basic Linux comfort because many security tutorials, labs, and real systems assume it.

At first Linux can feel unfriendly because there is more terminal usage. But the terminal is also why Linux is good for learning: it makes actions visible and repeatable.

## What Linux Is

Linux is an operating system kernel, and most people use it as part of a Linux distribution. A distribution combines the Linux kernel with tools, package managers, desktop environments, and default configurations.

Examples:

- Ubuntu
- Debian
- Fedora
- Kali Linux
- Arch Linux
- CentOS Stream

Beginner note:

When people say "Linux," they may mean the kernel, a server OS, a desktop distro, or just the command-line environment. Context matters.

## File System Layout

Linux uses a single directory tree starting at `/`.

Important directories:

```text
/
/home
/root
/etc
/var
/var/log
/tmp
/usr
/bin
/sbin
/opt
```

How I understand them:

- `/` is the root of the whole file system.
- `/home` contains normal user home directories.
- `/root` is the root user's home directory.
- `/etc` contains system configuration.
- `/var` contains variable data such as logs and caches.
- `/var/log` contains many logs.
- `/tmp` is temporary storage.
- `/usr` contains many userland programs and libraries.
- `/opt` is often used for optional third-party software.

Security angle:

- `/etc` is important because configuration mistakes can become security problems.
- `/var/log` is important for investigations.
- `/tmp` is writable and sometimes abused by attackers.
- `/home` can contain user secrets, SSH keys, browser data, and documents.

## Users and Groups

Linux has users and groups. A user owns processes and files. Groups help manage shared permissions.

Useful commands:

```bash
whoami
id
cat /etc/passwd
cat /etc/group
```

Beginner notes:

- The `root` user is the superuser.
- Normal users should not do everything as root.
- `sudo` lets permitted users run commands with elevated privileges.
- A user can belong to multiple groups.

Security angle:

- Root access is extremely powerful.
- Misconfigured sudo permissions can lead to privilege escalation.
- SSH keys in user home directories are sensitive.

## File Permissions

Linux permissions are usually shown as read, write, and execute for owner, group, and others.

Example:

```text
-rwxr-x---
```

Simple breakdown:

- First character shows file type.
- Next three are owner permissions.
- Next three are group permissions.
- Last three are other permissions.

Useful commands:

```bash
ls -l
chmod
chown
chgrp
```

Security angle:

- World-writable files can be dangerous.
- Executable permissions matter for scripts.
- Wrong ownership can break services or expose data.

## Processes

A process is a running program.

Useful commands:

```bash
ps aux
top
htop
pgrep ssh
kill <pid>
```

Things I should look at:

- Which user started the process?
- What command is running?
- How much CPU and memory is used?
- Is the process expected?

Security angle:

- A strange process running as root is important.
- Malware may use names that look normal.
- Process command lines can reveal scripts, paths, or suspicious arguments.

## Services and systemd

Many Linux distributions use systemd to manage services.

Useful commands:

```bash
systemctl status ssh
systemctl list-units --type=service
sudo systemctl restart ssh
sudo systemctl enable ssh
sudo systemctl disable ssh
```

Beginner note:

A service can run in the background without a logged-in user. This is normal for servers.

Security angle:

- Unneeded services increase attack surface.
- Service files can be persistence locations.
- Restarting a service can temporarily fix symptoms, but I should still find the cause.

## Package Management

Linux uses package managers to install and update software.

Common examples:

```bash
# Debian/Ubuntu
sudo apt update
sudo apt install <package>
sudo apt upgrade

# Fedora/RHEL-style systems
sudo dnf install <package>
```

Security angle:

- Updates are important for patching vulnerabilities.
- Installing random scripts from the internet is risky.
- Official repositories are usually safer than unknown downloads.

## Logs

Linux logs are often under `/var/log`.

Common places:

```text
/var/log/syslog
/var/log/auth.log
/var/log/secure
/var/log/messages
```

Useful commands:

```bash
tail -f /var/log/syslog
journalctl
journalctl -u ssh
```

Security angle:

- Auth logs can show login attempts.
- Service logs can show crashes or errors.
- Attackers may try to delete or tamper with logs.

## Networking Checks

Useful commands:

```bash
ip addr
ip route
ss -tulpen
ping 8.8.8.8
dig example.com
curl -I https://example.com
```

What they answer:

- `ip addr`: What IP addresses do I have?
- `ip route`: Where does traffic go?
- `ss`: What ports are listening or connected?
- `ping`: Can I reach a host?
- `dig`: Does DNS work?
- `curl`: Can I talk to an HTTP service?

## SSH

SSH is used to remotely access Linux systems.

Useful files:

```text
~/.ssh/id_rsa
~/.ssh/id_rsa.pub
~/.ssh/authorized_keys
/etc/ssh/sshd_config
```

Security angle:

- Private keys must be protected.
- Password login over SSH can be risky if exposed.
- Failed SSH login attempts are common on internet-facing servers.
- `authorized_keys` controls which keys can log in.

## Small Practice

- [ ] Install or open a Linux VM.
- [ ] Run `pwd`, `ls -la`, `cd`, and `cat`.
- [ ] Create a test user.
- [ ] Create a file and change its permissions.
- [ ] Check running processes.
- [ ] Check listening ports with `ss`.
- [ ] Read a log file under `/var/log`.

## Things I Keep Forgetting

- `/root` and `/` are not the same thing.
- `sudo` is powerful and should not be used casually.
- File ownership and file permissions are different but related.
- Logs may be in different files depending on the distribution.
- A service can run even when no desktop app is open.

## Review Questions

- What is the difference between root and a normal user?
- What does `/etc` usually contain?
- Why is `/var/log` useful for security?
- What does `chmod` change?
- Why can SSH keys be sensitive?
- What command shows listening ports?

## References

- [Ubuntu Documentation](https://help.ubuntu.com/)
- [Linux Foundation: Introduction to Linux](https://training.linuxfoundation.org/training/introduction-to-linux/)
- [Red Hat: Linux file permissions explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)
- [systemd Documentation](https://systemd.io/)
