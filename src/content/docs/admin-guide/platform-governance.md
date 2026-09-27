---
title: "Platform Governance and Multi-Tenancy"
description: "Global organisation management, user reassignment, and system supervision (Enterprise and On-Premise exclusive)."
---

The **Platform Administrator** role holds unrestricted governance over the entire Power Prompt deployment. This operational level is exclusively reserved for On-Premise IT administrators and designated enterprise infrastructure leads.

---

## 1. Platform Administrator Scope

Platform administrators supervise infrastructure services and corporate client entities at the highest level:
* **Multi-Tenancy Supervision:** Create, configure, suspend, or archive client organisations (tenants) hosted on the instance.
* **Global Reassignments:** Migrate user profiles or working teams across organisations during corporate restructurings.
* **System API Keys Administration:** Provision and maintain centralised system credentials powering core platform services.
* **Approved Model Whitelisting:** Enforce the enterprise-wide whitelist of approved foundational models and sovereign gateways.
* **Security & Audit Oversight:** Monitor database encryption integrity, system audit logs, and network telemetry.

---

## 2. Organisation (Tenant) Administration

In large-scale multi-subsidiary deployments:
1. Navigate to the **Organisations** panel within the global admin console.
2. For each client tenant, administrators can:
   * Establish maximum user seat quotas and workspace allowances.
   * Designate initial Organisation Managers.
   * Restrict accessible model providers to comply with regional data processing agreements.
   * Supervise aggregated prompt counts and token expenditures.

---

## 3. User Transfers and Cross-Entity Governance

During departmental transfers or reorganizations:
* **User Profile Migration:** Platform administrators can transfer a user to a different client organisation while auditing prior permissions.
* **Team Reassignment:** An entire group and its associated workspaces can be remapped to a new parent entity without disrupting version histories or prompt assets.

---

## 4. System Health and Operational Integrity

Through the centralised system console:
* **Service Telemetry:** Monitor real-time health across the API backend, PostgreSQL 17 database, and SSL termination layers.
* **System Log Inspections:** Early detection of infrastructure anomalies, rate limit warnings, or model provider latency degradation.
