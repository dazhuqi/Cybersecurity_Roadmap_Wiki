# GWAPT

| Field | Value |
| --- | --- |
| Status | Not Started |
| Purpose | Web application penetration testing |
| Official Website | [GIAC GWAPT](https://www.giac.org/certifications/web-application-penetration-tester-gwapt) |

## Notes

GWAPT stands for GIAC Web Application Penetration Tester. It focuses on testing web applications, understanding web attack surfaces, and finding vulnerabilities in HTTP-based systems.

For my roadmap, GWAPT is relevant if I choose a web security or application security direction. It should come after basic networking, HTTP, JavaScript, web authentication, and common vulnerability classes.

## Why It Matters for My Roadmap

Web applications are one of the most common attack surfaces. GWAPT-style study connects to:

- HTTP and HTTPS
- browser behavior
- authentication and session management
- input validation
- access control
- client-side and server-side vulnerabilities
- report writing for web findings

This is not just "run a scanner." I need to understand requests, responses, state, and application logic.

## What I Should Learn From It

- Web architecture and HTTP basics.
- Authentication, authorization, and session management.
- Injection vulnerabilities.
- Cross-site scripting and client-side issues.
- Access control weaknesses.
- Testing methodology and evidence collection.
- Remediation-focused reporting.

## How I Would Prepare

1. Learn HTTP deeply enough to read raw requests and responses.
2. Practice with PortSwigger Web Security Academy, DVWA, Juice Shop, or similar authorized labs.
3. Learn how cookies, sessions, CSRF tokens, and headers work.
4. Write notes for every vulnerability pattern in my own words.
5. Compare GWAPT with other web security learning paths before deciding.

## Practice Ideas

- Capture web traffic in a proxy and explain each request.
- Practice testing access control in a safe lab.
- Write a short note for XSS, SQL injection, CSRF, and SSRF.
- Turn one web lab into a finding with impact and remediation.

## Beginner Things I Need to Be Careful About

- Web testing starts with understanding how the application works, not clicking random payloads.
- HTTP methods, headers, cookies, sessions, and status codes are basic language for this path.
- Authentication and authorization bugs are different. I need to test both.
- A finding should include reproduction steps that another person can follow.
- Web labs are safe places to practice. Real websites are not targets unless I have permission.

## Small Checkpoints

- I can proxy traffic through Burp Suite and explain each request.
- I can identify where input enters the application and where output appears.
- I can test a simple login flow, session cookie, and access control rule in a lab.
- I can explain common OWASP-style vulnerabilities with one example each.
- I can write remediation that is more useful than "sanitize input" by itself.

## Decision Notes

| Question | My Answer |
| --- | --- |
| Am I focusing on web/app security? | To be filled |
| Can I read HTTP traffic comfortably? | To be filled |
| Which web vulnerability classes still confuse me? | To be filled |
| Target date if I take it | To be filled |

## References

- [GIAC GWAPT](https://www.giac.org/certifications/web-application-penetration-tester-gwapt)
