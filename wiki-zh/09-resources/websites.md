# 网站

这些网站可以作为学习时的参考。有些是学习站点，有些是官方文档，有些是知识库。当我需要可靠定义时，应该优先看这些，而不是随便找博客。

## 我怎么选择网站

当两个来源说法不一样时，我通常应该按这个顺序信任：

1. 官方厂商或项目文档。
2. 标准组织和知名安全机构。
3. 持续维护的学习平台。
4. 博客和个人笔记，但要检查日期和上下文。

对于新闻、漏洞和活跃威胁，我要看发布日期。旧文章仍然可以讲概念，但可能不适用于当前版本。

## 路线图和学习结构

| 网站 | 主题 | 用途 | 备注 |
| --- | --- | --- | --- |
| [roadmap.sh Cyber Security](https://roadmap.sh/cyber-security) | 路线图 | 这个 wiki 的结构参考 | 适合看大地图，但不能替代笔记和练习。 |

## 标准、框架和官方指导

| 网站 | 主题 | 用途 | 备注 |
| --- | --- | --- | --- |
| [OWASP](https://owasp.org/) | Web 安全 | Web 风险、项目和指南 | 学 Web 安全时先看 OWASP Top 10 和 WSTG。 |
| [MITRE ATT&CK](https://attack.mitre.org/) | 攻击行为 | TTP 映射 | 用来理解真实攻击行为如何分类。 |
| [MITRE D3FEND](https://d3fend.mitre.org/) | 防御技术 | 把攻击和可能的防御连起来 | 有助于从“发生了什么”继续问“什么控制能帮忙”。 |
| [CISA](https://www.cisa.gov/) | 安全公告和指导 | 告警、加固指导和公开资源 | 适合看当前安全建议和实用公告。 |
| [NIST Cybersecurity Center](https://www.nist.gov/cybersecurity) | 标准和框架 | 框架、风险、身份和指导 | 更正式，但治理和标准学习很重要。 |
| [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) | 安全框架 | 理解 Identify、Protect、Detect、Respond、Recover | 适合学习组织如何讨论安全项目。 |
| [NIST Computer Security Resource Center](https://csrc.nist.gov/) | 标准和出版物 | NIST SP 文档和安全出版物 | 很密，但需要正式定义时有用。 |

## 漏洞和公告参考

| 网站 | 主题 | 用途 | 备注 |
| --- | --- | --- | --- |
| [CVE](https://www.cve.org/) | CVE 记录 | 官方 CVE 编号和记录 | 查 CVE 时可以从这里开始。 |
| [NIST NVD](https://nvd.nist.gov/) | 漏洞 | CVE 和 CVSS 查询 | 可作为漏洞细节起点，但也要查厂商公告。 |
| [FIRST CVSS](https://www.first.org/cvss/) | 漏洞评分 | 理解 CVSS 版本和指标 | 当分数看起来很吓人时，用来理解为什么。 |
| [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) | 已被利用漏洞 | 优先处理真实利用中的漏洞 | 提醒我“高分”和“正在被利用”不是同一件事。 |
| [Microsoft Security Response Center](https://msrc.microsoft.com/) | Microsoft 公告 | Windows、Office、Azure 和 Microsoft 产品安全更新 | Microsoft CVE 优先看这里，不只看摘要。 |
| [Red Hat Product Security](https://access.redhat.com/security/) | Linux 和企业公告 | Linux 包和产品安全信息 | 有助于理解厂商影响和修复版本。 |
| [Exploit-DB](https://www.exploit-db.com/) | 公开 exploit 参考 | 在授权场景研究 exploit 示例 | 内容敏感，不要盲目运行代码。 |

## 学习和文档

| 网站 | 主题 | 用途 | 备注 |
| --- | --- | --- | --- |
| [Microsoft Learn Security](https://learn.microsoft.com/en-us/security/) | Microsoft 安全 | Windows、Defender、身份、Azure 安全 | Microsoft 相关设置优先看官方文档。 |
| [Cloudflare Learning Center](https://www.cloudflare.com/learning/) | 网络和 Web 安全 | 白话解释 | DNS、HTTP、TLS、DDoS、CDN 概念很适合看。 |
| [Practical Networking](https://www.practicalnetworking.net/) | 网络 | 子网和网络基础 | 子网太抽象时很有帮助。 |
| [Linux man-pages](https://man7.org/linux/man-pages/) | Linux 参考 | 命令和 syscall 参考 | 需要准确 Linux 行为时看，不只看简化总结。 |
| [MDN Web Docs](https://developer.mozilla.org/) | Web 平台 | HTTP、JavaScript、浏览器和 Web API 参考 | Web 安全需要理解浏览器行为，所以很有用。 |
| [PortSwigger Web Security Academy](https://portswigger.net/web-security) | Web 安全练习 | Web 漏洞解释和实验 | 很好的 Web 安全学习参考。 |
| [OffSec Blog](https://www.offsec.com/blog/) | 进攻安全 | 方法论、培训更新和安全文章 | 选择性阅读，要配合实验。 |

## 研究、事件报告和威胁学习

| 网站 | 主题 | 用途 | 备注 |
| --- | --- | --- | --- |
| [Google Project Zero](https://googleprojectzero.blogspot.com/) | 漏洞研究 | 深度技术研究和 exploit 分析 | 偏高级，可以把感兴趣的文章存起来以后复盘。 |
| [The DFIR Report](https://thedfirreport.com/) | 事件报告 | 真实入侵时间线和检测思路 | 适合把日志、恶意软件和攻击行为连起来。 |
| [Malware Traffic Analysis](https://www.malware-traffic-analysis.net/) | 网络流量分析 | PCAP 和恶意流量练习 | 在隔离实验室使用，不要随便下载样本。 |
| [SANS Internet Storm Center](https://isc.sans.edu/) | 安全日志和趋势 | 短篇安全观察和攻击活动 | 可以看防御者如何讨论日常安全活动。 |
| [abuse.ch](https://abuse.ch/) | 威胁追踪项目 | 恶意软件、僵尸网络、URL 和威胁数据项目 | 后期学威胁情报和检测时有用。 |
| [VirusTotal Blog](https://blog.virustotal.com/) | 恶意软件和威胁研究 | 研究文章和检测上下文 | 不要把私人文件或秘密上传到公开分析服务。 |

## 我应该怎么用网站

- 配置工具或系统时优先看官方文档。
- 第一次理解概念时可以用 learning center。
- 写治理或风险笔记时看标准/框架。
- 漏洞数据库只是起点，要再查厂商公告。
- 如果笔记依赖某个来源，就保存具体页面链接。

## 来源记录模板

```text
页面标题：
URL：
发布方：
检查日期：
我用它做什么：
它是官方文档、标准、实验还是博客：
我还需要验证什么：
```
