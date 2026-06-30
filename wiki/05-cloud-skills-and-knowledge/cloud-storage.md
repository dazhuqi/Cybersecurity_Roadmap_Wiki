# Cloud Storage

| Field | Value |
| --- | --- |
| Status | Learning |
| Roadmap Area | Cloud Skills and Knowledge |
| Last Reviewed | 2026-06-30 |

Cloud storage sounds simple: put files somewhere online. Security-wise, it is one of the easiest places to make a painful mistake, because storage is often connected to sharing, backups, applications, logs, and sensitive documents.

Beginner version:

> Cloud storage is not just "a folder on the internet." It has permissions, policies, links, logs, encryption, versions, and sometimes public access.

## Covered Services

From the roadmap:

- Amazon S3
- Dropbox
- iCloud
- Box
- OneDrive
- Google Drive

Related provider storage services:

- Azure Blob Storage
- Google Cloud Storage

## Types of Cloud Storage

| Type | Beginner Meaning | Examples | Common Use |
| --- | --- | --- | --- |
| Object storage | Stores objects in buckets or containers | S3, Azure Blob Storage, Google Cloud Storage | backups, logs, static files, application assets |
| File storage | Shared filesystem-like storage | cloud file shares, network file services | shared app files, lift-and-shift workloads |
| Block storage | Disk-like storage for machines | cloud disks, volumes | VM disks, databases |
| SaaS file storage | User-facing file sync and sharing | Dropbox, iCloud, Box, OneDrive, Google Drive | documents, collaboration, personal or business files |

Object storage is very important in security because it is often reachable through APIs and can accidentally become public.

## Buckets, Objects, and Containers

Different providers use different words:

| Concept | AWS | Azure | Google Cloud |
| --- | --- | --- | --- |
| Top storage grouping | Bucket | Storage account / container | Bucket |
| Stored item | Object | Blob | Object |
| Access rules | IAM, bucket policy, ACLs, Block Public Access | Azure RBAC, ACLs, shared access signatures, network rules | IAM, ACLs, public access prevention |

Beginner note:

A bucket is not exactly the same as a normal folder. It is a cloud resource with its own permissions, settings, logs, encryption options, lifecycle rules, and sometimes public website features.

## Public Access

Public access means someone outside the intended users may be able to read or write data.

Common public access patterns:

- a bucket allows anonymous read
- a bucket allows anonymous write
- a file has a public sharing link
- an access token is leaked
- a service account has broad read permissions
- a storage firewall allows too many networks

The scary part is that "public" may not look dramatic in the console. It might be one checkbox, one policy statement, one shared link setting, or one inherited permission.

## Shared Links

SaaS storage tools often use shared links.

Shared links can be:

- private to specific users
- available to anyone in an organization
- available to anyone with the link
- password protected
- time-limited
- view-only or editable

Beginner warning:

"Anyone with the link" is not the same as private. It may not be indexed by search engines, but anyone who receives the link can access it unless extra controls exist.

## Access Control

Important access control ideas:

- owner: controls the storage resource
- reader/viewer: can read data
- writer/editor: can change or upload data
- admin: can change permissions and settings
- service account: non-human identity used by apps
- inherited permission: access received from a parent folder, group, project, or account

Questions to ask:

- Who can read this?
- Who can write this?
- Who can change permissions?
- Is access granted to a person, group, role, or anonymous public user?
- Is a link public?
- Is a service account overpowered?

## Encryption

Cloud storage commonly supports encryption at rest and in transit.

Useful terms:

- provider-managed encryption: the provider manages the keys
- customer-managed keys: I manage or control the key more directly through KMS or Key Vault
- TLS: protects data in transit
- key rotation: replacing keys over time

Important note:

Encryption does not solve bad sharing. If I give someone permission to read a file, the service will decrypt it for them.

## Versioning, Retention, and Deletion

Cloud storage may support:

- versioning
- soft delete
- retention policies
- object lock
- lifecycle rules
- backup or snapshot features

Security angle:

These features can help recover from accidental deletion or ransomware-like behavior. But they also need access control, because an attacker with enough permissions may try to delete versions or change retention settings.

## Logging and Monitoring

For storage, useful logs may show:

- who read an object
- who uploaded an object
- who changed permissions
- who created a sharing link
- which IP address accessed data
- whether public access was enabled

Beginner mistake:

Only checking if the file exists, but not checking who can access it or whether access is logged.

## Common Storage Risks

| Risk | Example | Why It Matters |
| --- | --- | --- |
| Public read | A bucket or link is open to anyone. | Sensitive data can leak. |
| Public write | Anonymous users can upload files. | Attackers can store unwanted or malicious files. |
| Overbroad internal sharing | Everyone in the organization can read a folder. | Internal data exposure still matters. |
| Leaked token or signed URL | A temporary access URL is posted publicly. | Access may bypass normal login expectations. |
| No versioning | A file is deleted or overwritten. | Recovery is harder. |
| No logging | Suspicious access happens. | Investigation is weak. |
| Secrets in storage | Keys or passwords are uploaded. | Storage leak becomes credential leak. |
| Weak lifecycle rules | Old sensitive data stays forever. | Data retention risk grows. |

## Cloud Drive Services

### Dropbox

Dropbox is a SaaS file storage and sharing service. Security settings usually focus on account protection, shared links, team folders, connected apps, and device sessions.

Things to check:

- MFA
- shared link visibility
- team sharing rules
- connected applications
- device list

### iCloud

iCloud is Apple's cloud storage and sync ecosystem. It can contain device backups, photos, documents, passwords through Keychain, and synced app data.

Things to check:

- Apple Account security
- two-factor authentication
- shared albums or shared folders
- device access
- recovery options

### Box

Box is often used in business environments. It has sharing, collaboration, retention, and enterprise controls.

Things to check:

- shared links
- external collaboration
- folder permissions
- retention policies
- admin reports

### OneDrive

OneDrive is closely tied to Microsoft accounts and Microsoft 365. Business environments often manage it through Entra ID and Microsoft 365 admin settings.

Things to check:

- sharing links
- external sharing
- conditional access
- MFA
- retention and audit logs

### Google Drive

Google Drive is tied to Google accounts and Google Workspace. It supports personal files, shared drives, and many sharing modes.

Things to check:

- link sharing
- external sharing
- shared drives
- group permissions
- connected apps

## Storage Review Checklist

- [ ] Is the storage private by default?
- [ ] Is any object, folder, bucket, or link public?
- [ ] Are write permissions limited?
- [ ] Are admin permissions limited?
- [ ] Are service accounts using least privilege?
- [ ] Is MFA enabled for human admins?
- [ ] Are logs enabled?
- [ ] Is sensitive data encrypted?
- [ ] Is versioning or recovery configured where needed?
- [ ] Is old data deleted or archived by a policy?

## Practice

- [ ] Summarize one cloud storage permission model.
- [ ] Design a least-privilege sharing plan for a class project folder.
- [ ] Explain why "anyone with the link" is risky.
- [ ] Compare S3, Azure Blob Storage, and Google Cloud Storage names.
- [ ] Write a checklist for reviewing a storage bucket before making it public.

## Things I Keep Forgetting

- A bucket is a resource, not just a folder.
- Public read and public write are different risks.
- Shared links can spread outside the intended group.
- Encryption does not fix bad permissions.
- Versioning helps only if it is enabled before the problem.
- Logs matter for knowing what happened.

## Review Questions

- What is object storage?
- What is the difference between a bucket and an object?
- Why is public write dangerous?
- Why can "anyone with the link" be risky?
- What does versioning help with?
- Why should storage access be logged?

## References

- [AWS S3 Security Best Practices](https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html)
- [AWS S3 Block Public Access](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html)
- [Microsoft Azure Storage security recommendations](https://learn.microsoft.com/en-us/azure/storage/blobs/security-recommendations)
- [Google Cloud Storage best practices](https://cloud.google.com/storage/docs/best-practices)
- [Google Cloud Storage public access prevention](https://cloud.google.com/storage/docs/public-access-prevention)
- [Dropbox Help: Share files and folders](https://help.dropbox.com/share)
- [Box Support: Shared links](https://support.box.com/hc/en-us/articles/360044196273-Shared-Links)
- [Microsoft Support: Share OneDrive files and folders](https://support.microsoft.com/en-us/office/share-onedrive-files-and-folders-9fcc2f7d-de0c-4cec-93b0-a82024800c07)
- [Google Drive Help: Share files from Google Drive](https://support.google.com/drive/answer/2494822)
