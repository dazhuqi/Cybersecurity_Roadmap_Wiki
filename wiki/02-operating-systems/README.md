# 02 Operating Systems

This module is about learning how operating systems actually feel and behave. I used to treat Windows, Linux, and macOS as just "different interfaces," but for cybersecurity they are more than that. They decide how files are stored, how users log in, how permissions work, how software runs, how logs are created, and how attackers or defenders interact with a machine.

The goal here is not to become a Windows administrator, Linux administrator, and macOS expert all at once. The goal is to get comfortable enough that I can open a terminal, inspect basic system state, understand permissions, and avoid being scared by normal OS concepts.

## Learning Order

1. [windows.md](windows.md)
2. [linux.md](linux.md)
3. [macos.md](macos.md)
4. [command-line.md](command-line.md)
5. [file-permissions.md](file-permissions.md)
6. [os-hardening.md](os-hardening.md)

I put Windows, Linux, and macOS first because I need a mental map of the systems before collecting commands. After that, command line, permissions, and hardening make more sense.

## Roadmap Alignment

This folder maps to these roadmap topics:

- Windows
- Linux
- MacOS
- Installation and Configuration
- Navigating using GUI and CLI
- Understand Permissions
- Installing Software and Applications
- Performing CRUD on Files
- Troubleshooting
- Common Commands
- Operating System Hardening

## Why Operating Systems Matter for Security

Most security events eventually touch an operating system.

Examples:

- A suspicious process is running on Windows.
- A Linux server has strange SSH login attempts.
- A macOS laptop has an unknown profile installed.
- A file permission is too open.
- A patch was not installed.
- Logs show an account was used at an odd time.

If I do not understand the operating system, I can still copy commands, but I will not really understand what I am looking at.

## What I Should Be Able to Explain

After finishing this module, I should be able to explain:

- What an operating system does.
- How Windows, Linux, and macOS are different at a beginner level.
- How users, groups, files, processes, services, and logs fit together.
- Why command line skills matter.
- Why permissions are security controls.
- What basic hardening means.

## My Study Method

For each OS topic, I will try to answer:

- Where do files live?
- How do users and permissions work?
- How do I install software?
- How do I see running processes?
- Where are logs?
- How would I check network settings?
- What settings matter for basic security?

This is a practical module. I should not only read it. I should open a VM or real machine and try commands.

## Completion Checklist

- [ ] I can describe the job of an operating system.
- [ ] I can find basic system information on Windows, Linux, and macOS.
- [ ] I can navigate files using both GUI and CLI.
- [ ] I can explain users, groups, and permissions in beginner language.
- [ ] I can inspect processes and services.
- [ ] I can find basic logs.
- [ ] I can write a small OS hardening checklist.

## References

- [Microsoft Learn: Windows documentation](https://learn.microsoft.com/en-us/windows/)
- [Ubuntu Documentation](https://help.ubuntu.com/)
- [Apple Platform Security](https://support.apple.com/guide/security/welcome/web)
- [Red Hat: Linux permissions](https://www.redhat.com/sysadmin/linux-file-permissions-explained)
