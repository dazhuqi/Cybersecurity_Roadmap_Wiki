# CompTIA Linux+

| 字段 | 内容 |
| --- | --- |
| 状态 | 未开始 |
| 目的 | Linux 基础 |
| 官方网站 | [CompTIA Linux+](https://www.comptia.org/en-us/certifications/linux/) |
| 考试提供方 | [Pearson VUE CompTIA](https://www.pearsonvue.com/us/en/comptia.html) |

## 笔记

CompTIA Linux+ 关注 Linux 管理基础。对网络安全来说，Linux 很重要，因为很多服务器、工具、容器、云系统和实验机器都用 Linux。

除非我需要 Linux 方向证书，否则它不一定是第一优先级。但 Linux 知识非常有用。真正做安全实验之前，我应该能舒服地使用 Linux。

## 为什么它和我的路线图有关

Linux+ 风格学习支持：

- `02-operating-systems/linux.md`
- 命令行信心
- 服务器和云基础
- shell scripting 基础
- 安全工具使用
- 日志读取和服务排错

如果我害怕终端，很多安全实验会变得更难。

## 我应该学到什么

- Linux 文件系统结构和导航。
- 用户、组、权限、所有权和 `sudo`。
- 包管理和软件更新。
- 进程、服务、systemd、日志。
- 网络命令和 SSH。
- 存储基础、shell 脚本和排错。
- 基础安全加固。

## 我会怎么准备

1. 用 Linux VM 做一段时间日常练习系统。
2. 完成 Linux、命令行、权限、加固笔记。
3. 建一个带例子和输出的个人命令笔记本。
4. 在实验环境里练习弄坏和修复服务。
5. 不只运行命令，还要读日志。

## 实操练习

- 在 Linux VM 创建用户和组。
- 修改文件权限并解释结果。
- 安装、启动、停止、启用、禁用服务。
- 读取认证日志和系统日志。
- 在实验环境安全配置 SSH。
- 写一个检查系统信息的小 Bash 脚本。

## 初学者容易混的点

- shell 不是魔法，它只是把命令发给程序的一种方式。
- root 很容易把系统弄坏，所以用 `sudo` 前要知道命令在做什么。
- 文件权限可以先按三组理解：owner、group、others。
- service 是长期运行的程序，log 往往是 service 出问题时第一个要看的地方。
- 从网上复制命令有风险，除非我能解释每个参数。

## 小检查点

- 我能用 `pwd`、`ls`、`cd`、`find`、`grep` 做基础导航和搜索。
- 我能解释 `rwx` 权限，并在实验环境里修改它。
- 我能创建 users、groups 和一个简单共享目录。
- 我能检查 running processes 和 service status。
- 我能写一个短脚本，用来备份目录或处理简单文本文件。

## 决策记录

| 问题 | 我的答案 |
| --- | --- |
| 我是否需要 Linux 专项证书？ | 待填写 |
| 我能否不复制命令也使用 Linux？ | 待填写 |
| 哪些 Linux 主题还需要实验？ | 待填写 |
| 如果要考，目标日期 | 待填写 |

## 参考资料

- [CompTIA Linux+](https://www.comptia.org/en-us/certifications/linux/)
- [Pearson VUE: CompTIA](https://www.pearsonvue.com/us/en/comptia.html)
