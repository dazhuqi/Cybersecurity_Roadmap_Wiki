# 工具

工具本身不是能力。只有当我知道自己在问什么问题，并且确认允许运行它时，工具才有用。

## 工具索引

| 工具 | 分类 | 链接 | 用途 | 备注 |
| --- | --- | --- | --- | --- |
| Wireshark | 网络 | [wireshark.org](https://www.wireshark.org/) | 数据包分析 | 适合观察 DNS、TCP、HTTP、TLS 元数据和排查流量。 |
| tcpdump | 网络 | [tcpdump manual](https://www.tcpdump.org/manpages/tcpdump.1.html) | 命令行抓包 | 适合没有 GUI 的服务器或远程 Linux 系统。 |
| Nmap | 网络 | [nmap.org](https://nmap.org/) | 授权环境里的发现和扫描 | 只扫描自己拥有或明确获准测试的系统。 |
| Burp Suite Community | Web 安全 | [PortSwigger Burp Suite](https://portswigger.net/burp/communitydownload) | 拦截和测试 Web 流量 | 先学请求/响应，不要只依赖扫描功能。 |
| OWASP ZAP | Web 安全 | [ZAP](https://www.zaproxy.org/) | Web 代理和测试 | 开源替代工具，适合学习 Web 测试基础。 |
| CyberChef | 分析 | [CyberChef](https://gchq.github.io/CyberChef/) | 编码、解码、哈希、快速数据转换 | CTF、日志、小转换任务很好用。 |
| Sysinternals Suite | Windows | [Microsoft Sysinternals](https://learn.microsoft.com/en-us/sysinternals/) | Windows 进程、文件、网络和系统检查 | 用时要小心，适合 Windows 排错和调查。 |
| OpenSSL | Crypto / TLS | [openssl.org](https://www.openssl.org/) | 证书、TLS 检查、密码学实验 | 适合理解证书，但命令选项有时比较锋利。 |
| YARA | 检测 | [YARA](https://virustotal.github.io/yara/) | 恶意软件和文件模式匹配 | 后期学 malware 和 detection engineering 时有用。 |
| Sigma | 检测 | [SigmaHQ](https://sigmahq.io/) | 通用检测规则格式 | 有助于理解 SIEM 检测怎么写。 |
| Zeek | 网络安全监控 | [zeek.org](https://zeek.org/) | 网络元数据和协议日志 | 后期蓝队工具，网络基础后更有用。 |
| Suricata | IDS / 网络安全 | [suricata.io](https://suricata.io/) | 网络入侵检测 | 学完抓包和基础协议后再看。 |
| Wazuh | 安全监控 | [wazuh.com](https://wazuh.com/) | 终端和安全监控实验室 | 后期可以搭 home SOC 风格实验室。 |
| Metasploit Framework | 进攻安全 | [metasploit.com](https://www.metasploit.com/) | 授权实验里的漏洞验证 | 很强，但不能代替理解漏洞本身。 |

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

## 安全规则

- 没有许可，不扫描、不利用、不拦截、不测试系统。
- 优先使用本地实验室、CTF 和明确授权的平台。
- 不把 secrets、tokens、VPN 配置或私人数据粘贴进在线工具。
- 阅读工具输出，不要只复制命令。
