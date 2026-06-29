# 速查表

速查表是用来快速提醒自己的，不是用来跳过基础的。如果我经常查同一个速查表，说明应该把重复使用的部分整理成自己的笔记。

## 我怎么使用速查表

我应该把速查表当成放在桌上的地图：

- 先读正常文档或课程内容。
- 忘记语法或需要快速对比时再查。
- 把真正有用的部分改写成自己的话。
- 至少写下一个我在实验里测试过的例子。

如果我只是收藏链接但从来不练习，那其实没有学进去。

## Web 和应用安全

| 主题 | 链接 | 用途 | 备注 |
| --- | --- | --- | --- |
| OWASP Cheat Sheet Series | [cheatsheetseries.owasp.org](https://cheatsheetseries.owasp.org/) | Web 和应用安全指导 | 安全编码和 Web 防御参考很好用。 |
| OWASP Web Security Testing Guide | [OWASP WSTG](https://owasp.org/www-project-web-security-testing-guide/) | Web 测试方法论 | 比随机 payload 列表更适合结构化测试。 |
| PortSwigger Web Security Academy | [portswigger.net/web-security](https://portswigger.net/web-security) | 漏洞解释和实验笔记 | 严格说不只是速查表，但主题页面很适合复习。 |
| PortSwigger XSS Cheat Sheet | [portswigger.net/web-security/cross-site-scripting/cheat-sheet](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet) | XSS 上下文提醒 | 只在实验或授权测试中使用。上下文比 payload 本身更重要。 |
| PortSwigger SQL Injection Cheat Sheet | [portswigger.net/web-security/sql-injection/cheat-sheet](https://portswigger.net/web-security/sql-injection/cheat-sheet) | SQL 注入语法提醒 | 要先理解查询是怎么拼出来的，再查语法。 |
| PayloadsAllTheThings | [swisskyrepo.github.io/PayloadsAllTheThings](https://swisskyrepo.github.io/PayloadsAllTheThings/) | 实验用 payload 示例 | 内容很多，不能盲目复制，要写清楚每个 payload 的目的。 |

## 网络和流量分析

| 主题 | 链接 | 用途 | 备注 |
| --- | --- | --- | --- |
| Nmap Reference Guide | [nmap.org/book/man.html](https://nmap.org/book/man.html) | Nmap 选项和扫描行为 | 官方参考，只在授权环境使用。 |
| Wireshark Display Filter Reference | [wireshark.org/docs/dfref](https://www.wireshark.org/docs/dfref/) | 精确的显示过滤字段 | 知道协议但忘记字段名时很有用。 |
| Wireshark Display Filters | [Wireshark Wiki](https://wiki.wireshark.org/DisplayFilters) | 抓包显示过滤器 | 适合看基础语法和例子。 |
| tcpdump Manual | [tcpdump.org](https://www.tcpdump.org/manpages/tcpdump.1.html) | 抓包过滤器和命令选项 | 适合命令行抓包。 |
| curl Manual | [curl.se/docs/manpage.html](https://curl.se/docs/manpage.html) | 终端里的 HTTP 请求 | 测试 header、跳转和简单 API 时很好用。 |
| Practical Networking Subnetting | [practicalnetworking.net](https://www.practicalnetworking.net/stand-alone/subnetting-mastery/) | 子网练习提醒 | CIDR 计算又开始糊的时候可以回来看。 |

## 操作系统和权限概念

| 主题 | 链接 | 用途 | 备注 |
| --- | --- | --- | --- |
| Linux man-pages | [man7.org](https://man7.org/linux/man-pages/) | Linux 命令和 syscall 参考 | 需要准确行为时看，不只看简化总结。 |
| Microsoft Sysinternals Documentation | [Microsoft Learn](https://learn.microsoft.com/en-us/sysinternals/) | Windows 调查工具 | 在真实机器上运行前先读工具页面。 |
| GTFOBins | [gtfobins.github.io](https://gtfobins.github.io/) | Unix binary 行为和提权实验 | 只在授权实验里使用，适合理解危险 binary。 |
| LOLBAS | [lolbas-project.github.io](https://lolbas-project.github.io/) | Windows living-off-the-land binaries | 对 Windows 防御和检测思路很有帮助。 |
| Windows Commands Reference | [Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands) | Windows 命令行提醒 | PowerShell 和 cmd 语法混起来时可以查。 |

## 检测、威胁情报和防御

| 主题 | 链接 | 用途 | 备注 |
| --- | --- | --- | --- |
| MITRE ATT&CK | [attack.mitre.org](https://attack.mitre.org/) | 技术查询 | 把观察到的行为映射到技术名称。 |
| MITRE D3FEND | [d3fend.mitre.org](https://d3fend.mitre.org/) | 防御技术查询 | 可以把攻击技术和可能的防御措施连起来。 |
| Sigma Rules | [SigmaHQ](https://sigmahq.io/) | 检测规则格式 | 学检测怎么写时有用。 |
| YARA Documentation | [yara.readthedocs.io](https://yara.readthedocs.io/) | 规则语法和示例 | 留到恶意软件和文件匹配练习时使用。 |
| CISA Known Exploited Vulnerabilities Catalog | [cisa.gov/known-exploited-vulnerabilities-catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) | 优先处理真实被利用的漏洞 | 当某个 CVE 只是分数高但不知道是否真实利用时，可以用来校准。 |
| SANS Cheat Sheets | [SANS Posters and Cheat Sheets](https://www.sans.org/posters/) | 安全参考海报 | 适合快速提醒，但细节要用 primary docs 验证。 |

## 复制命令前的规则

如果速查表给我一个命令，我应该写下：

- 这个命令做什么。
- 适用于什么系统。
- 有什么权限或安全问题。
- 我期待看到什么输出。

不然就只是复制粘贴。

## 我的速查表模板

```text
主题：
来源链接：
命令或语法：
用我自己的话解释：
我在哪里测试过：
期望输出：
我犯过的错误：
```
