# File Permissions

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Operating Systems |
| Last Reviewed | To be filled |

## Why This Topic Matters

File permissions are one of the most basic security controls. They answer a simple question:

> Who is allowed to do what with this file or folder?

If permissions are too open, people or programs may read, change, or execute things they should not touch. If permissions are too strict, normal work breaks. So permissions are both a security topic and a troubleshooting topic.

## The Basic Permission Question

When I look at permissions, I should ask:

- Who owns this file?
- Which group is related to it?
- Who can read it?
- Who can modify it?
- Who can execute it?
- Are permissions inherited from a parent folder?
- Does the permission match the actual need?

## Linux Permission Model

Linux commonly shows permissions like this:

```text
-rwxr-x---
```

Breakdown:

```text
-   rwx   r-x   ---
|   |     |     |
|   |     |     others
|   |     group
|   owner
file type
```

Permission letters:

- `r` means read.
- `w` means write.
- `x` means execute.
- `-` means that permission is not granted.

## Linux Permission Examples

Example:

```text
-rw-r--r--
```

My interpretation:

- Owner can read and write.
- Group can read.
- Others can read.
- Nobody can execute it.

Example:

```text
drwxr-xr-x
```

My interpretation:

- It is a directory.
- Owner can read, write, and enter it.
- Group can read and enter it.
- Others can read and enter it.

For directories, execute means the ability to enter/traverse the directory.

## Linux Commands

```bash
ls -l
chmod
chown
chgrp
umask
```

Examples:

```bash
chmod 600 private-key.txt
chmod 755 script.sh
sudo chown alice:developers project.txt
```

Beginner warning:

I should not run `chmod -R 777` just because something is not working. It may "fix" access by making everything too open, which is a bad security habit.

## Numeric Permissions

Linux permissions are often written as numbers.

```text
read    = 4
write   = 2
execute = 1
```

Examples:

- `7` = read + write + execute
- `6` = read + write
- `5` = read + execute
- `4` = read only
- `0` = no permissions

Common modes:

- `644`: owner can read/write, group and others can read.
- `600`: only owner can read/write.
- `755`: owner can read/write/execute, group and others can read/execute.
- `700`: only owner can read/write/execute.

Security note:

Private keys should usually be very restricted, often like `600`.

## Windows Permissions

Windows commonly uses ACLs, or Access Control Lists. An ACL is a list of entries saying which users or groups have which permissions.

Common Windows permissions:

- Full control
- Modify
- Read & execute
- Read
- Write

Beginner version:

Windows permissions are less visually compact than Linux permissions, but the idea is the same: users and groups get allowed or denied actions.

## Windows Inheritance

Windows folders can pass permissions down to files and subfolders. This is called inheritance.

Why it matters:

- A file may have a permission because its parent folder gave it that permission.
- Changing a parent folder can affect many files.
- Troubleshooting access often requires checking inheritance.

## Windows Tools and Commands

GUI:

```text
Right click file/folder -> Properties -> Security
```

Command line:

```powershell
icacls .\file.txt
icacls .\folder
```

PowerShell:

```powershell
Get-Acl .\file.txt
```

Security angle:

- Sensitive folders should not grant broad write access.
- Shared folders need careful review.
- Deny rules can make troubleshooting confusing.

## Read, Write, and Execute Risks

### Read risk

If someone can read a file, they may see sensitive data.

Examples:

- Passwords
- API keys
- Private keys
- Customer data
- Internal documents

### Write risk

If someone can write to a file or folder, they may change data.

Examples:

- Modify configuration
- Replace scripts
- Change web content
- Add malicious files

### Execute risk

If someone can execute a file, they can run it.

Examples:

- Run a script
- Start a program
- Execute malware

This is why write access to a directory that runs scripts can be dangerous.

## Permissions and Privilege Escalation

Bad permissions can help attackers gain more access.

Examples:

- A normal user can edit a script that runs as admin/root.
- A service folder is writable by low-privileged users.
- A private key is readable by everyone.
- A shared folder exposes sensitive files.

This is why permissions are not just boring file settings.

## Troubleshooting Access Problems

If a user cannot open or edit a file, I should check:

1. Does the file exist?
2. Who owns it?
3. What permissions are set?
4. Is the user in the required group?
5. Are permissions inherited?
6. Is the file locked by another program?
7. Is the file on a network share?
8. Is there a deny rule?

## Small Practice

- [ ] Create a Linux file and inspect it with `ls -l`.
- [ ] Change Linux permissions with `chmod`.
- [ ] Change Linux ownership with `chown` in a lab.
- [ ] Inspect a Windows folder ACL with the GUI.
- [ ] Run `icacls` on a test folder.
- [ ] Explain why `777` is usually a bad idea.

## Things I Keep Forgetting

- Read access can be dangerous even without write access.
- Write access can become code execution if scripts or programs use that path.
- Linux directory execute permission means entering/traversing the directory.
- Windows inherited permissions can hide where access really comes from.
- Fixing access by making everything public is not a real fix.

## Review Questions

- What do `r`, `w`, and `x` mean on Linux?
- What does `chmod 600` mean?
- What is a Windows ACL?
- Why can write permission be dangerous?
- What is permission inheritance?
- Why is `chmod -R 777` risky?

## References

- [Red Hat: Linux file permissions explained](https://www.redhat.com/sysadmin/linux-file-permissions-explained)
- [Microsoft Learn: Access control lists](https://learn.microsoft.com/en-us/windows/win32/secauthz/access-control-lists)
- [Microsoft Learn: icacls](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/icacls)
