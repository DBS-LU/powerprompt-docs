---
title: "RBAC Roles and Permissions Matrix"
description: "Comprehensive breakdown of operational permissions and privileges by user role in Power Prompt."
---

Power Prompt implements granular Role-Based Access Control (RBAC) enforcing the principle of least privilege across all tenant activities.

---

## Complete Role Permissions Matrix

| Functional Domain | Action / Privilege | Platform Administrator (`Platform Admin`) | Organisation Manager (`Org Manager`) | Team Manager (`Team Manager`) | Standard User (`User`) |
|---|---|:---:|:---:|:---:|:---:|
| **Tenants & Organisations** | Provision / modify organisations | Yes | No | No | No |
| | Migrate users / teams across organisations | Yes | No | No | No |
| **Users & Teams** | Invite new collaborators | Yes | Yes | Yes (within team) | No |
| | Create and structure teams | Yes | Yes | No | No |
| | Assign members to teams | Yes | Yes | Yes (assigned scope) | No |
| **Workspaces** | Provision new workspaces | Yes | Yes | Yes | No |
| | Configure categories and workspace rules | Yes | Yes | Yes | No |
| | Manage workspace member access tiers | Yes | Yes | Yes | No |
| **Prompt Engineering** | Author and edit prompts | Yes | Yes | Yes | Yes |
| | Leverage "Improve" assistant | Yes | Yes | Yes | Yes |
| | Move prompts (single or bulk batch) | Yes | Yes | Yes | Yes |
| | Certify / approve enterprise prompts | Yes | Yes | Yes | No |
| **Versioning & History** | Inspect version history & visual diffs | Yes | Yes | Yes | Yes |
| | Revert to a previous prompt version | Yes | Yes | Yes | Yes |
| **Testing & Evaluation** | Execute tests against approved models | Yes | Yes | Yes | Yes |
| | Perform side-by-side multi-model comparison | Yes | Yes | Yes | Yes |
| **Collaboration** | Post comments | Yes | Yes | Yes | Yes |
| **Credentials & Governance** | Manage shared System API Keys | Yes | No | No | No |
| | Enforce authorised model whitelist | Yes | No | No | No |
| | Configure organisation API keys | Yes | Yes | No | No |
| | Configure team API keys | Yes | Yes | Yes | No |
| **Analytics & Compliance** | Review usage dashboards and costs | Yes (Global) | Yes (Organisation) | Yes (Team) | No |
| | Configure budget overrun alerts | Yes | Yes | No | No |
| | Inspect security audit trail logs | Yes | Yes | No | No |
| | Export governance and telemetry reports | Yes | Yes | Yes | No |

---

## Governance Best Practices

* **Least Privilege Default:** Default all newly invited members to the **Standard User (`User`)** role.
* **Separation of Duties:** Restrict Organisation Manager (`Org Manager`) credentials to a designated minimum of compliance leads.
* **Periodic Access Audits:** Conduct quarterly reviews of team assignments and administrative role grants.