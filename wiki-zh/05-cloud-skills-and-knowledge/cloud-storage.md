# 云存储

| 字段 | 值 |
| --- | --- |
| 状态 | 学习中 |
| 路线图区域 | Cloud Skills and Knowledge |
| 最后复习 | 2026-06-30 |

云存储听起来很简单：把文件放到网上。但从安全角度看，它是最容易出大问题的地方之一，因为存储经常和共享、备份、应用、日志、敏感文档连在一起。

新手版理解：

> 云存储不是“互联网上的文件夹”。它有权限、策略、链接、日志、加密、版本，有时还有公开访问。

## 覆盖服务

路线图里提到：

- Amazon S3
- Dropbox
- iCloud
- Box
- OneDrive
- Google Drive

相关云服务商存储：

- Azure Blob Storage
- Google Cloud Storage

## 云存储类型

| 类型 | 新手理解 | 例子 | 常见用途 |
| --- | --- | --- | --- |
| Object storage | 把对象存到 bucket 或 container | S3, Azure Blob Storage, Google Cloud Storage | 备份、日志、静态文件、应用资源 |
| File storage | 像共享文件系统一样 | cloud file shares, network file services | 共享应用文件、迁移旧系统 |
| Block storage | 给机器用的磁盘类存储 | cloud disks, volumes | VM 磁盘、数据库 |
| SaaS file storage | 面向用户的文件同步和共享 | Dropbox, iCloud, Box, OneDrive, Google Drive | 文档、协作、个人或企业文件 |

对象存储在安全里很重要，因为它经常能通过 API 访问，也很容易不小心变成公开。

## Buckets、Objects、Containers

不同服务商用词不同：

| 概念 | AWS | Azure | Google Cloud |
| --- | --- | --- | --- |
| 顶层存储分组 | Bucket | Storage account / container | Bucket |
| 存储项 | Object | Blob | Object |
| 访问规则 | IAM, bucket policy, ACLs, Block Public Access | Azure RBAC, ACLs, shared access signatures, network rules | IAM, ACLs, public access prevention |

新手提醒：

Bucket 不完全等于普通文件夹。它是一个云资源，有自己的权限、设置、日志、加密选项、生命周期规则，有时还有 public website 功能。

## 公开访问

公开访问表示预期用户以外的人可能可以读取或写入数据。

常见公开访问方式：

- bucket 允许 anonymous read
- bucket 允许 anonymous write
- 文件有 public sharing link
- access token 泄露
- service account 有过宽读取权限
- storage firewall 允许太多网络

可怕的地方是，“public” 在控制台里可能看起来并不夸张。它可能只是一个 checkbox、一条 policy statement、一个 shared link 设置，或者一个继承权限。

## 共享链接

SaaS 存储工具经常使用共享链接。

共享链接可能是：

- 只给特定用户
- 给组织内任何人
- anyone with the link
- 带密码
- 有过期时间
- 只读或可编辑

新手警告：

“Anyone with the link” 不等于私有。它可能不会被搜索引擎索引，但任何拿到链接的人都能访问，除非有额外控制。

## 访问控制

重要访问控制概念：

- owner：控制存储资源
- reader/viewer：能读数据
- writer/editor：能修改或上传数据
- admin：能改权限和设置
- service account：应用使用的非人类身份
- inherited permission：从父文件夹、组、project 或账号继承来的访问

要问的问题：

- 谁能读？
- 谁能写？
- 谁能改权限？
- 访问是给个人、组、角色，还是匿名 public user？
- 链接是否公开？
- service account 是否权限过大？

## 加密

云存储通常支持静态加密和传输加密。

有用术语：

- provider-managed encryption：服务商管理密钥
- customer-managed keys：我通过 KMS 或 Key Vault 更直接控制密钥
- TLS：保护传输中的数据
- key rotation：随时间替换密钥

重要提醒：

加密不能解决错误共享。如果我允许某人读取文件，服务会正常为他解密。

## 版本、保留和删除

云存储可能支持：

- versioning
- soft delete
- retention policies
- object lock
- lifecycle rules
- backup 或 snapshot 功能

安全角度：

这些功能可以帮助从误删或类似勒索软件的行为中恢复。但它们也需要访问控制，因为权限足够大的攻击者可能试图删除版本或修改保留设置。

## 日志和监控

存储相关日志可能显示：

- 谁读取了 object
- 谁上传了 object
- 谁修改了权限
- 谁创建了共享链接
- 哪个 IP 访问了数据
- 是否启用了公开访问

新手错误：

只看文件是否存在，但不检查谁能访问它，也不检查访问是否有日志。

## 常见存储风险

| 风险 | 例子 | 为什么重要 |
| --- | --- | --- |
| 公开读 | bucket 或链接对任何人开放 | 敏感数据可能泄露 |
| 公开写 | 匿名用户能上传文件 | 攻击者能存放不想要或恶意文件 |
| 内部共享过宽 | 组织里所有人都能读一个文件夹 | 内部数据暴露也很重要 |
| token 或 signed URL 泄露 | 临时访问 URL 被公开发出 | 可能绕过正常登录预期 |
| 没有 versioning | 文件被删除或覆盖 | 恢复更困难 |
| 没有日志 | 发生可疑访问 | 调查能力弱 |
| secrets 放在存储里 | keys 或 passwords 被上传 | 存储泄露变成凭据泄露 |
| 生命周期规则弱 | 老敏感数据永远保留 | 数据保留风险变大 |

## 云盘服务

### Dropbox

Dropbox 是 SaaS 文件存储和共享服务。安全设置通常关注账号保护、共享链接、团队文件夹、connected apps 和设备会话。

要检查：

- MFA
- shared link visibility
- team sharing rules
- connected applications
- device list

### iCloud

iCloud 是 Apple 的云存储和同步生态。它可能包含设备备份、照片、文档、Keychain 密码和同步 app 数据。

要检查：

- Apple Account security
- two-factor authentication
- shared albums 或 shared folders
- device access
- recovery options

### Box

Box 经常用于企业环境。它有共享、协作、保留和企业控制。

要检查：

- shared links
- external collaboration
- folder permissions
- retention policies
- admin reports

### OneDrive

OneDrive 和 Microsoft accounts、Microsoft 365 关系很紧。企业环境通常通过 Entra ID 和 Microsoft 365 admin settings 管理它。

要检查：

- sharing links
- external sharing
- conditional access
- MFA
- retention and audit logs

### Google Drive

Google Drive 和 Google accounts、Google Workspace 关联。它支持个人文件、shared drives 和多种共享模式。

要检查：

- link sharing
- external sharing
- shared drives
- group permissions
- connected apps

## 存储审查清单

- [ ] 存储默认是否私有？
- [ ] 是否有 object、folder、bucket 或 link 是 public？
- [ ] 写权限是否有限制？
- [ ] admin 权限是否有限制？
- [ ] service accounts 是否使用最小权限？
- [ ] 人类管理员是否启用 MFA？
- [ ] 是否启用日志？
- [ ] 敏感数据是否加密？
- [ ] 需要时是否配置 versioning 或恢复功能？
- [ ] 老数据是否通过策略删除或归档？

## 练习

- [ ] 总结一种云存储权限模型。
- [ ] 给一个课程项目文件夹设计最小权限共享方案。
- [ ] 解释为什么 “anyone with the link” 有风险。
- [ ] 对比 S3、Azure Blob Storage、Google Cloud Storage 的名称。
- [ ] 写一份 bucket 公开前的审查清单。

## 我总是忘的点

- Bucket 是资源，不只是文件夹。
- Public read 和 public write 是不同风险。
- Shared links 可能传播到预期群体外。
- 加密不能修复错误权限。
- Versioning 只有在问题发生前启用才有帮助。
- 日志对知道发生了什么很重要。

## 复习问题

- 什么是 object storage？
- bucket 和 object 有什么区别？
- 为什么 public write 危险？
- 为什么 “anyone with the link” 有风险？
- versioning 能帮什么？
- 为什么存储访问应该有日志？

## 参考资料

- [AWS S3 Security Best Practices](https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html)
- [AWS S3 Block Public Access](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html)
- [Microsoft Azure Storage security recommendations](https://learn.microsoft.com/en-us/azure/storage/blobs/security-recommendations)
- [Google Cloud Storage best practices](https://cloud.google.com/storage/docs/best-practices)
- [Google Cloud Storage public access prevention](https://cloud.google.com/storage/docs/public-access-prevention)
- [Dropbox Help: Share files and folders](https://help.dropbox.com/share)
- [Box Support: Shared links](https://support.box.com/hc/en-us/articles/360044196273-Shared-Links)
- [Microsoft Support: Share OneDrive files and folders](https://support.microsoft.com/en-us/office/share-onedrive-files-and-folders-9fcc2f7d-de0c-4cec-93b0-a82024800c07)
- [Google Drive Help: Share files from Google Drive](https://support.google.com/drive/answer/2494822)
