# 速查表

速查表是用来快速提醒的，不是用来跳过基础的。如果我经常查同一个速查表，说明应该把重复使用的部分整理成自己的笔记。

## 速查索引

| 主题 | 链接 | 用途 | 备注 |
| --- | --- | --- | --- |
| OWASP Cheat Sheet Series | [cheatsheetseries.owasp.org](https://cheatsheetseries.owasp.org/) | Web 和应用安全指导 | 安全编码和 Web 防御参考很好用。 |
| OWASP Web Security Testing Guide | [OWASP WSTG](https://owasp.org/www-project-web-security-testing-guide/) | Web 测试方法论 | 比随机 payload 列表更适合结构化测试。 |
| Nmap Reference Guide | [nmap.org/book/man.html](https://nmap.org/book/man.html) | Nmap 选项和扫描行为 | 官方参考，只在授权环境使用。 |
| Wireshark Display Filters | [Wireshark Wiki](https://wiki.wireshark.org/DisplayFilters) | 抓包显示过滤器 | 忘记过滤器语法时很有用。 |
| tcpdump Manual | [tcpdump.org](https://www.tcpdump.org/manpages/tcpdump.1.html) | 抓包过滤器和命令选项 | 适合命令行抓包。 |
| GTFOBins | [gtfobins.github.io](https://gtfobins.github.io/) | Unix binary 行为和权限提升实验 | 只在授权实验里使用；适合理解危险 binary。 |
| LOLBAS | [lolbas-project.github.io](https://lolbas-project.github.io/) | Windows living-off-the-land binaries | 对 Windows 防御和检测思路很有帮助。 |
| MITRE ATT&CK | [attack.mitre.org](https://attack.mitre.org/) | 技术查找 | 把观察到的行为映射到技术名称。 |
| Sigma Rules | [SigmaHQ](https://sigmahq.io/) | 检测规则格式 | 学检测怎么写时有用。 |
| SANS Cheat Sheets | [SANS Posters and Cheat Sheets](https://www.sans.org/posters/) | 安全参考海报 | 适合快速提醒，但细节要用 primary docs 验证。 |

## 我的规则

如果速查表给我一个命令，我应该写下：

- 这个命令做什么
- 适用于什么系统
- 有什么权限或安全问题
- 我期待看到什么输出

不然就只是复制粘贴。
