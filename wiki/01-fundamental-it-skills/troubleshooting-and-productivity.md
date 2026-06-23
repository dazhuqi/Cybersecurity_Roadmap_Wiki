# Troubleshooting and Productivity Suites

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Fundamental IT Skills |
| Last Reviewed | To be filled |

## Why This Topic Matters

Troubleshooting is not just "fixing random computer problems." It is a way of thinking. A lot of beginner mistakes come from changing settings too quickly, guessing the cause, or following a tutorial without understanding what problem it is actually solving.

Productivity suites also look boring at first, but they are everywhere in real companies. Email, documents, spreadsheets, shared folders, calendars, and meetings are normal business tools. Because people use them every day, attackers also target them every day.

## My Basic Troubleshooting Rule

The rule I want to remember is:

> Change one thing at a time, and write down what happened.

If I change five things at once, I may accidentally fix the issue but still not know what fixed it. That is bad for learning and bad for real support work.

## A Simple Troubleshooting Process

### 1. Identify the symptom

The first step is to describe the problem clearly.

Bad description:

- "The computer is broken."

Better description:

- "The laptop connects to WiFi, but websites do not load."
- "Only one user cannot open a shared document."
- "The machine boots, but it becomes very slow after login."

The more specific the symptom is, the easier it is to test.

### 2. Ask what changed

Many problems happen after something changed.

Questions to ask:

- Was software installed or updated?
- Was a cable moved?
- Did the user change a password?
- Did the device move to another network?
- Did the issue start after a reboot?
- Is anyone else having the same problem?

This does not always find the answer, but it gives me clues.

### 3. Check the simple things first

This sounds obvious, but it matters.

Simple checks:

- Is the device powered on?
- Is the cable plugged in fully?
- Is WiFi enabled?
- Is airplane mode off?
- Is the account locked?
- Is storage full?
- Is the service down for everyone?

I should not feel silly checking simple things. Professionals check them too because simple things break all the time.

### 4. Narrow the scope

I need to figure out whether the issue is:

- One user
- One device
- One application
- One network
- One website/service
- Everyone

Examples:

- If only one user cannot log in, it may be an account issue.
- If everyone on the same WiFi cannot browse, it may be a network issue.
- If one application fails but other apps work, it may be an application issue.
- If one website fails but others work, the problem may be that website or DNS.

### 5. Make a hypothesis

A hypothesis is just a possible explanation.

Example:

- Symptom: The laptop is connected to WiFi but cannot browse websites.
- Clue: It has no default gateway.
- Hypothesis: DHCP did not assign full network settings.

The hypothesis should be testable. If I cannot test it, it is only a guess.

### 6. Test one thing

Test one idea and record the result.

Examples:

- Ping the default gateway.
- Try a different browser.
- Restart only the affected service.
- Test with another user account.
- Connect with Ethernet instead of WiFi.

If the test fails, that is still useful information.

### 7. Fix and verify

After applying a fix, I should verify that the original problem is actually solved.

For example, if the issue was "user cannot open shared document," the final check is not just "I changed permissions." The final check is "the user can now open the document."

### 8. Document the result

At minimum, I should record:

- Symptom
- Cause if known
- What I tested
- What fixed it
- What to check next time

This is how troubleshooting becomes reusable knowledge instead of one-time pain.

## Common Troubleshooting Areas

### Performance problems

Slow systems may be caused by:

- High CPU usage
- Low RAM
- Slow or failing disk
- Too many startup programs
- Malware or unwanted software
- Network delays
- Browser extensions
- Background sync tools

I should check Task Manager, Activity Monitor, or system monitoring tools before assuming the cause.

### Login problems

Login problems may involve:

- Wrong password
- Expired password
- Locked account
- MFA issue
- Wrong username format
- No network access to the identity provider
- Time sync issue

Security angle:

- Many failed login attempts may indicate password guessing.
- A real user locked out can also be normal human error.
- Context matters.

### Network problems

For network issues, I should check:

- IP address
- Default gateway
- DNS server
- WiFi signal
- Cable link light
- VPN status
- Proxy settings

Beginner mistake: saying "the internet is down" when only DNS is broken.

### Application problems

Applications can fail because of:

- Bad configuration
- Missing permissions
- Corrupt cache
- Old version
- Server-side outage
- Expired license
- Blocked network access

It helps to test whether the issue happens in another browser, another profile, or another machine.

## Productivity Suites

Productivity suites are collections of tools for work. They usually include documents, spreadsheets, presentations, email, calendars, meetings, cloud storage, and sharing features.

The roadmap mentions Microsoft Office, Google Workspace, and iCloud. These are not "security tools," but they hold a lot of sensitive data.

## Microsoft Office and Microsoft 365

Microsoft Office includes tools like Word, Excel, PowerPoint, Outlook, OneNote, Teams, and OneDrive depending on the plan.

Beginner notes:

- Word is for documents.
- Excel is for spreadsheets and data.
- PowerPoint is for presentations.
- Outlook is for email and calendar.
- Teams is for chat, meetings, and collaboration.
- OneDrive and SharePoint are used for file storage and sharing.

Security angle:

- Email phishing often arrives through Outlook or another mail client.
- Office files can contain macros, which can be abused.
- Shared links can expose documents if permissions are too open.
- OneDrive sync can copy sensitive files to multiple devices.
- Teams messages and files may contain internal information.

Things to check:

- Is MFA enabled?
- Who can access a shared file?
- Is the link public or organization-only?
- Are macros blocked by default?
- Can external users be invited?

## Google Workspace

Google Workspace includes Gmail, Drive, Docs, Sheets, Slides, Meet, Calendar, and admin/security features for organizations.

Beginner notes:

- Gmail is email.
- Drive stores files.
- Docs, Sheets, and Slides are browser-based editing tools.
- Meet is for video meetings.
- Admin settings control users, devices, apps, and sharing policies.

Security angle:

- A compromised Google account can expose email and Drive files.
- Public sharing can accidentally expose internal documents.
- Third-party app access can be risky if users grant too many permissions.
- Gmail is a common place for phishing and malicious links.

Things to check:

- Is 2-step verification enabled?
- Are files shared publicly?
- Which third-party apps have account access?
- Are recovery email and phone settings safe?
- Are suspicious login alerts enabled?

## iCloud

iCloud is Apple's cloud service for syncing photos, files, contacts, device backups, passwords, and more across Apple devices.

Beginner notes:

- iCloud Drive stores files.
- Photos can sync pictures and videos.
- Keychain can sync passwords.
- Find My helps locate devices.
- Backups can restore an iPhone or iPad.

Security angle:

- Apple ID security is very important because it can control many connected services.
- Device backups may contain sensitive data.
- Lost devices matter more if they are unlocked or poorly protected.
- Shared albums and shared folders need permission review.

Things to check:

- Is two-factor authentication enabled for Apple ID?
- Are trusted devices still current?
- Is Find My enabled?
- Are old devices removed from the account?
- Are shared folders still needed?

## Why Office Tools Matter in Cybersecurity

I used to think security was mostly about networks and hacking, but office tools are often where real attacks start.

Examples:

- Phishing email asks the user to open a fake login page.
- Malicious attachment pretends to be an invoice.
- Shared document link asks for a password.
- Attacker logs into a cloud account and downloads files.
- Misconfigured sharing exposes internal spreadsheets.

So learning productivity suites is not just "how to use Word." It is also learning where business data lives and how users accidentally expose it.

## Small Practice

- [ ] Write a troubleshooting note for one small problem I solved.
- [ ] Check sharing settings on one test document.
- [ ] Review account security settings for one cloud suite I use.
- [ ] Find where login history or security activity is shown.
- [ ] Create a mini checklist for suspicious email review.

## Troubleshooting Template

```text
Problem:
Who is affected:
When it started:
What changed:
Tests performed:
Result of each test:
Likely cause:
Fix:
Verification:
What to remember next time:
```

## Things I Keep Forgetting

- The first explanation is not always the right explanation.
- "It works for me" does not mean the problem is fake.
- Permissions are part of troubleshooting.
- Cloud file sharing is a security topic.
- MFA problems can look like login problems, but the password may be correct.

## Review Questions

- Why should I change only one thing at a time?
- How can I tell whether a problem affects one user or everyone?
- What is one security risk of Microsoft Office files?
- Why can public document sharing be dangerous?
- What should I check if a user says they cannot log in?
- Why is documentation part of troubleshooting?

## References

- [roadmap.sh: Cyber Security Roadmap](https://roadmap.sh/cyber-security)
- [Microsoft 365 apps and services](https://www.microsoft.com/en-gb/microsoft-365/products-apps-services)
- [Google Workspace](https://workspace.google.com)
- [iCloud](https://www.icloud.com/)
- [CompTIA A+ OS troubleshooting video](https://www.youtube.com/watch?v=6gainrNiypc)
