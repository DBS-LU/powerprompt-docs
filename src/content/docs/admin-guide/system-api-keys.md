---
title: "System API Keys and Authorised AI Models"
description: "Administration of centralised infrastructure credentials and governance of enterprise model whitelists."
---

Power Prompt maintains a strict separation between two categories of inference credentials: **organisation/team keys** (used for user testing) and **System API Keys** (managed centrally to power native platform features).

---

## 1. The Purpose of System API Keys

**System API Keys** represent the shared infrastructure foundation of Power Prompt. They power built-in intelligent features transparently for all users:
1. **The "Improve" feature in prompt editing:** Instantly analyses, refines, and formats draft prompts directly in the editor in a single click.
2. **The "Prompt Architect" feature in the Prompt Lab:** Used for creating and structuring complete, production-ready prompts from natural language requirements.
3. **The "Prompt Improver" feature in the Prompt Lab:** Used for analysing, restructuring, clarifying, and strengthening existing prompts with advanced engineering controls.

By centralising these system-level credentials at the platform level, the user experience remains smooth and operational from day one, without requiring individual user API keys.

---

## 2. Authorised AI Models Whitelist

To ensure regulatory compliance, data residency adherence, and cost governance, administrators maintain the **enterprise whitelist of authorised AI models**:

### Model Whitelisting Criteria:
* **Data Processing Residency:** Confirming regional boundaries (e.g., European Union processing for GDPR compliance).
* **Vendor Privacy Guarantees:** Verification of zero-retention policies and formal commitments that customer inputs are never used for model training.
* **Security & Encryption Standards:** TLS 1.3 encryption in transit and SOC 2 Type II vendor compliance.
* **Cost-to-Capability Alignment:** Approving optimal model tiers for specific departmental workloads.

---

## 3. Configuration and Key Rotation Policy

1. In the platform administration console, navigate to **System Keys & Models**.
2. Enter enterprise API credentials for approved providers (OpenAI, Anthropic, Google).
3. Toggle individual models on or off according to corporate security directives.
4. Establish system-wide rate limits and monthly infrastructure spending caps.
5. Enforce **regular credential rotation** (recommended every 90 days) to adhere to enterprise cybersecurity standards.