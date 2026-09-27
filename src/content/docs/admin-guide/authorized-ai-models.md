---
title: "Authorised AI Models Governance"
description: "Enforce enterprise allowlists for AI models and external providers."
---

To comply with regulatory standards (**GDPR**, **EU NIS2**, and the **EU AI Act**), the Platform Administrator defines model access policies across the enterprise.

---

## 1. Allowlist Principles

In Power Prompt, users and managers can only select AI models previously vetted and enabled by the administrator:

* **Eliminating Shadow AI:** No user can connect an unapproved model without prior validation by the technical or security team.
* **Granular Provider Selection:** Administrators can authorise specific providers (e.g. West Europe-hosted Azure OpenAI) while strictly disallowing public consumer API endpoints.
* **Sovereign Local Model Support:** Capability to enforce self-hosted open-weights models (vLLM, Ollama, TGI) for business units handling confidential or regulated data.

---

## 2. Managing Authorised AI Models

1. Navigate to **Administration > AI Models & Providers**.
2. The detected models list displays each model along with its status:
   * **Approved (Whitelisted):** Immediately available in the model selector across all workspaces.
   * **Disabled:** Completely hidden and blocked from execution.
3. For each approved model, administrators can configure:
   * **Maximum Context Window.**
   * **Token Cap per Request (Max Output Tokens).**
   * **Restriction on unverified models** for production environments.