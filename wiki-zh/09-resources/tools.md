# 工具

工具本身不是能力。只有当我知道自己在问什么问题，并且确认被允许运行它时，工具才有用。

## 安装工具前先问自己

对于每个工具，我应该能回答：

- 它解决什么问题。
- 它需要什么输入。
- 我应该期待什么输出。
- 它会不会影响其他系统或产生很多流量。
- 有没有更安全的实验环境可以先练。

如果这些问题还答不上来，我应该先读文档，并在小实验里测试。

## 日常基础工具

| 工具 | 分类 | 链接 | 用途 | 备注 |
| --- | --- | --- | --- | --- |
| Git | 版本控制 | [git-scm.com](https://git-scm.com/) | 跟踪笔记、实验和代码变化 | 安全学习需要可复现的笔记和清晰历史。 |
| Docker | 实验环境 | [docker.com](https://www.docker.com/) | 运行隔离的练习服务 | 适合 Web 实验和本地测试，但容器不是绝对安全沙箱。 |
| Python | 脚本 | [python.org](https://www.python.org/) | 小脚本、日志解析、自动化 | 先写可读脚本，再追求花哨的一行命令。 |
| PowerShell | Windows / 自动化 | [Microsoft Learn](https://learn.microsoft.com/en-us/powershell/) | Windows 管理和调查 | Windows 安全和蓝队工作里非常重要。 |
| jq | 数据处理 | [jqlang.org](https://jqlang.org/) | 阅读和过滤 JSON | 处理 API 输出、日志和云 CLI 响应时很方便。 |
| ripgrep | 搜索 | [GitHub](https://github.com/BurntSushi/ripgrep) | 快速搜索文本文件 | 查源码、日志和笔记仓库都很有用。 |

## 网络和流量工具

| 工具 | 分类 | 链接 | 用途 | 备注 |
| --- | --- | --- | --- | --- |
| Wireshark | 网络 | [wireshark.org](https://www.wireshark.org/) | 数据包分析 | 适合观察 DNS、TCP、HTTP、TLS 元数据和排查流量。 |
| tcpdump | 网络 | [tcpdump manual](https://www.tcpdump.org/manpages/tcpdump.1.html) | 命令行抓包 | 适合没有 GUI 的服务器或远程 Linux 系统。 |
| Nmap | 网络 | [nmap.org](https://nmap.org/) | 授权环境里的发现和扫描 | 只扫描自己拥有或明确获准测试的系统。 |
| Zeek | 网络安全监控 | [zeek.org](https://zeek.org/) | 网络元数据和协议日志 | 后期蓝队工具，网络基础后更有用。 |
| Suricata | IDS / 网络安全 | [suricata.io](https://suricata.io/) | 网络入侵检测 | 学完抓包和基础协议后再看。 |
| OpenSSL | Crypto / TLS | [openssl.org](https://www.openssl.org/) | 证书、TLS 检查、密码学实验 | 适合理解证书，但命令选项有时比较锋利。 |

## Web 安全工具

| 工具 | 分类 | 链接 | 用途 | 备注 |
| --- | --- | --- | --- | --- |
| Burp Suite Community | Web 安全 | [PortSwigger Burp Suite](https://portswigger.net/burp/communitydownload) | 拦截和测试 Web 流量 | 先学请求/响应，不要只依赖扫描功能。 |
| OWASP ZAP | Web 安全 | [ZAP](https://www.zaproxy.org/) | Web 代理和测试 | 开源替代工具，适合学习 Web 测试基础。 |
| ffuf | Web Fuzzing | [GitHub](https://github.com/ffuf/ffuf) | 在授权实验里发现隐藏路径或参数 | 请求量可能很大，所以速率和权限很重要。 |
| Gobuster | Web / DNS 枚举 | [GitHub](https://github.com/OJ/gobuster) | 目录、DNS、虚拟主机枚举 | 理解 wordlist 和状态码以后再在实验里用。 |
| Nuclei | 漏洞模板 | [ProjectDiscovery Docs](https://docs.projectdiscovery.io/tools/nuclei/overview) | 授权测试里的模板化检查 | 很强，但模板输出仍然要人工确认。 |
| SecLists | 字典 | [GitHub](https://github.com/danielmiessler/SecLists) | 实验用 wordlist | 整理好字典，不要对未授权系统使用。 |

## 分析和编码工具

| 工具 | 分类 | 链接 | 用途 | 备注 |
| --- | --- | --- | --- | --- |
| CyberChef | 分析 | [CyberChef](https://gchq.github.io/CyberChef/) | 编码、解码、哈希、快速数据转换 | CTF、日志、小转换任务很好用。 |
| Ghidra | 逆向工程 | [ghidra-sre.org](https://ghidra-sre.org/) | 静态逆向分析 | 后期工具，先学文件格式、汇编基础和安全恶意软件实验室习惯。 |
| REMnux | 恶意软件分析实验室 | [remnux.org](https://remnux.org/) | 恶意软件分析和逆向环境 | 只在隔离实验室和可信训练样本中使用。 |

## Windows、终端和 DFIR 工具

| 工具 | 分类 | 链接 | 用途 | 备注 |
| --- | --- | --- | --- | --- |
| Sysinternals Suite | Windows | [Microsoft Sysinternals](https://learn.microsoft.com/en-us/sysinternals/) | Windows 进程、文件、网络和系统检查 | 用时要小心，适合 Windows 排错和调查。 |
| osquery | 终端可见性 | [osquery.io](https://osquery.io/) | 用类似 SQL 的方式查询系统状态 | 是系统管理和安全监控之间很好的桥。 |
| Velociraptor | DFIR / 终端采集 | [velociraptor.app](https://docs.velociraptor.app/) | 终端采集和调查实验 | 后期 DFIR 工具，先理解 artifacts，再采集一堆东西。 |
| Volatility 3 | 内存取证 | [Read the Docs](https://volatility3.readthedocs.io/) | 内存镜像分析 | 留到取证和恶意软件模块，需要耐心记笔记。 |
| Autopsy | 数字取证 | [autopsy.com](https://www.autopsy.com/) | 磁盘镜像和取证案例分析 | 用准备好的证据镜像做入门 DFIR 实验比较合适。 |
| FTK Imager | 数字取证 | [Exterro](https://www.exterro.com/digital-forensics-software/ftk-imager) | 磁盘成像和证据预览 | 在把它当普通文件浏览器前，先学证据链概念。 |

## 检测和监控工具

| 工具 | 分类 | 链接 | 用途 | 备注 |
| --- | --- | --- | --- | --- |
| YARA | 检测 | [YARA](https://virustotal.github.io/yara/) | 恶意软件和文件模式匹配 | 后期学 malware 和 detection engineering 时有用。 |
| Sigma | 检测 | [SigmaHQ](https://sigmahq.io/) | 通用检测规则格式 | 有助于理解 SIEM 检测怎么写。 |
| Wazuh | 安全监控 | [wazuh.com](https://wazuh.com/) | 终端和安全监控实验室 | 后期可以搭 home SOC 风格实验室。 |
| Elastic Security | SIEM / 检测 | [elastic.co/security](https://www.elastic.co/security) | 搜索日志和测试检测思路 | 等我有足够日志数据后更有用。 |

## 进攻实验工具

| 工具 | 分类 | 链接 | 用途 | 备注 |
| --- | --- | --- | --- | --- |
| Metasploit Framework | 进攻安全 | [metasploit.com](https://www.metasploit.com/) | 授权实验里的漏洞验证 | 很强，但不能代替理解漏洞本身。 |
| Kali Linux | 安全实验系统 | [kali.org](https://www.kali.org/) | 带很多安全工具的实验 VM | 很方便，但我还是要理解每个工具做什么。 |

## 我的工具笔记格式

当我把工具写进实验笔记时，应该记录：

```text
Tool:
Question I used it to answer:
Command or action:
Important output:
Risk or permission note:
What I learned:
```

## 最先练习的工具

| 阶段 | 工具 | 练习想法 |
| --- | --- | --- |
| 基础 IT | Git, Python, PowerShell, Docker | 用 Git 管笔记，写小脚本，跑一个本地容器。 |
| 网络 | Wireshark, tcpdump, Nmap | 抓自己的实验流量，只扫描本地 VM。 |
| Web 安全 | Burp Suite, ZAP, ffuf, Gobuster | 使用本地故意漏洞应用，记录每个请求。 |
| 蓝队 | Sysinternals, osquery, Wazuh, Sigma | 查看 Windows 进程，查询系统状态，写一条简单检测笔记。 |
| 后期 DFIR | Volatility, Autopsy, FTK Imager | 使用训练镜像，并认真记录证据。 |

## 安全规则

- 没有许可，不扫描、不利用、不拦截、不测试系统。
- 优先使用本地实验室、CTF 和明确授权的平台。
- 不把 secrets、tokens、VPN 配置或私人数据粘贴进在线工具。
- 阅读工具输出，不要只复制命令。
