# Command Line

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Operating Systems |
| Last Reviewed | To be filled |

## Why This Topic Matters

The command line feels scary at first because there is no friendly button telling me what to click. But it is one of the most useful skills in IT and cybersecurity because commands are fast, repeatable, easy to document, and often available when a GUI is not.

I do not need to memorize every command immediately. I need to understand what kind of question each command answers.

## My Basic Rule

Before running a command, I should ask:

> What am I trying to learn or change?

This helps avoid copy-pasting commands blindly.

## Shells

A shell is the program that reads commands and runs them.

Common examples:

- PowerShell on Windows
- Command Prompt on Windows
- Bash on Linux
- zsh on macOS

Beginner note:

PowerShell commands often work with objects. Bash commands often work with text streams. That is why their style feels different.

## Navigation Commands

### Windows PowerShell

```powershell
pwd
Get-ChildItem
Set-Location C:\Users
```

Aliases also exist:

```powershell
ls
cd
dir
```

### Linux/macOS

```bash
pwd
ls -la
cd /home
```

What these answer:

- `pwd`: Where am I?
- `ls` or `Get-ChildItem`: What is in this directory?
- `cd` or `Set-Location`: Move to another directory.

## Reading Files

### Windows PowerShell

```powershell
Get-Content .\file.txt
Get-Content .\file.txt -Tail 20
Select-String -Path .\file.txt -Pattern "error"
```

### Linux/macOS

```bash
cat file.txt
less file.txt
head file.txt
tail file.txt
tail -f file.txt
grep "error" file.txt
```

Security angle:

Reading logs is one of the most common defensive tasks. I should get comfortable searching text.

## Creating, Copying, Moving, and Removing Files

### Windows PowerShell

```powershell
New-Item notes.txt
Copy-Item notes.txt notes-copy.txt
Move-Item notes-copy.txt archive.txt
Remove-Item archive.txt
```

### Linux/macOS

```bash
touch notes.txt
cp notes.txt notes-copy.txt
mv notes-copy.txt archive.txt
rm archive.txt
```

Beginner warning:

Deleting from the command line may not go to a recycle bin. I should slow down with delete commands.

## Processes

### Windows PowerShell

```powershell
Get-Process
Get-Process | Sort-Object CPU -Descending | Select-Object -First 10
Stop-Process -Id <pid>
```

### Linux/macOS

```bash
ps aux
top
pgrep <name>
kill <pid>
```

What these answer:

- What is running?
- Which process is using resources?
- Which user started the process?
- Can I stop it?

Security angle:

A process list can show suspicious programs, but I should check path, parent process, user, and network connections before jumping to conclusions.

## Services

### Windows PowerShell

```powershell
Get-Service
Get-Service | Where-Object {$_.Status -eq "Running"}
Restart-Service <name>
```

### Linux

```bash
systemctl status <service>
systemctl list-units --type=service
sudo systemctl restart <service>
```

What these answer:

- What background services are running?
- Did a service fail?
- Can I restart it?

Security angle:

Services can be normal system components or persistence mechanisms.

## Network Commands

### Windows PowerShell and Command Prompt

```powershell
ipconfig /all
ping 8.8.8.8
nslookup example.com
tracert example.com
netstat -ano
Get-NetTCPConnection
```

### Linux/macOS

```bash
ip addr
ip route
ping 8.8.8.8
dig example.com
traceroute example.com
ss -tulpen
curl -I https://example.com
```

What these answer:

- What is my IP address?
- Can I reach another host?
- Does DNS work?
- What route does traffic take?
- What ports are listening?
- Can I reach a web service?

## Searching

### Windows PowerShell

```powershell
Select-String -Path .\*.log -Pattern "failed"
Get-ChildItem -Recurse -Filter *.log
```

### Linux/macOS

```bash
grep -R "failed" .
find . -name "*.log"
```

Security angle:

Searching is basic but powerful. A lot of investigation is finding the right line in a large amount of text.

## Redirection and Pipes

Pipes send output from one command into another command.

### Windows PowerShell

```powershell
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5
Get-Service | Where-Object {$_.Status -eq "Running"}
```

### Linux/macOS

```bash
ps aux | grep ssh
cat auth.log | grep "Failed password"
```

Redirection saves output:

```bash
ip addr > network-info.txt
```

PowerShell:

```powershell
Get-NetIPAddress > network-info.txt
```

## Admin Privileges

Some commands need elevated privileges.

Windows:

- Run PowerShell as Administrator.

Linux/macOS:

```bash
sudo <command>
```

Beginner warning:

Admin privileges are powerful. If I do not understand a command, I should not run it with admin rights just because a tutorial says so.

## My Command Note Format

When I learn a command, I should record it like this:

```text
Command:
What it answers:
Example:
Important options:
Risk:
Output I should recognize:
```

## Small Practice

- [ ] List files in a directory.
- [ ] Read the last 20 lines of a log file.
- [ ] Find running processes.
- [ ] Check IP address and DNS.
- [ ] Search for a word inside text files.
- [ ] Save command output to a file.

## Things I Keep Forgetting

- Commands are tools for answering questions.
- PowerShell and Bash have different styles.
- I should understand delete commands before running them.
- Admin rights should not be used casually.
- A command that works on Linux may not work the same way on macOS.

## Review Questions

- What does a pipe do?
- Why is `sudo` sensitive?
- What command can show running processes?
- How can I search for a word in a file?
- Why should I record command output during troubleshooting?
- What is the difference between reading a file and executing a file?

## References

- [Microsoft Learn: PowerShell documentation](https://learn.microsoft.com/en-us/powershell/)
- [GNU Bash Manual](https://www.gnu.org/software/bash/manual/)
- [Ubuntu: Using the terminal](https://help.ubuntu.com/community/UsingTheTerminal)
- [Apple: Terminal User Guide](https://support.apple.com/guide/terminal/welcome/mac)
