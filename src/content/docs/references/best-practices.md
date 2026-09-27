---
title: "Best Practices and Prompt Engineering"
description: "Methodological recommendations for managers, users, and writing high-impact enterprise prompts."
---

Maximising the value of Power Prompt relies on shared methodology and disciplined operational habits across your teams.

---

## 1. Best Practices for Managers

* **Start with a Lean Structure:** Establish a concise category hierarchy (3 to 6 top folders) before considering subcategories.
* **Map Groups to Clear Workspaces:** Every working group should centre its core assets within a dedicated, easily recognizable workspace.
* **Standardise Naming Conventions:** Adopt standard title prefixes (e.g., `[Support] Incident Summary`, `[Legal] Contract Clause Review`).
* **Enforce Least Privilege:** Assign standard user privileges by default, reserving managerial access to authorised leads.
* **Enforce Multi-Factor Authentication:** Require MFA for all accounts possessing administrative or workspace configuration permissions.
* **Monitor Expenditure Weekly:** Review telemetry dashboards weekly to spot unexpected traffic surges or inefficient prompt executions.
* **Preserve Engineering Rationale in Comments:** Use comment threads to document why specific model parameters or prompt revisions were approved.

---

## 2. Best Practices for Users

* **Use Actionable Titles:** Ensure titles immediately state the operational objective rather than generic headlines.
* **Provide Contextual Descriptions:** Detail target users, recommended business contexts, and edge cases to avoid.
* **Adhere to the 4-Tag Rule:** Tag prompts with up to four standardised keywords for clean, consistent multi-dimensional filtering.
* **Test Thoroughly Before Distribution:** Validate outputs across several realistic inputs before marking a prompt certified.
* **Prefer Versioning Over Duplication:** Revise existing prompts to increment version history rather than creating cluttering clones (`prompt_v2_final`).
* **Document Version Notes:** Briefly record the rationale behind major revisions.
* **Convert Repetitive Tasks into Templates:** Whenever a prompt is reused regularly, substitute variable data with typed `{{...}}` tags.

---

## 3. Recommended Enterprise Prompt Architecture

To achieve deterministic, repeatable, and hallucination-free outputs, structure enterprise prompts according to the 5 structural pillars:

```markdown
# 1. ROLE
You are a [certified expert persona or specific domain specialist].

# 2. CONTEXT
[Describe the business situation, operational objectives, and constraints].

# 3. TASK
[Detail the exact sequential execution directives expected from the model].

# 4. CONSTRAINTS & SAFEGUARDS
- Never assume facts: rely exclusively on the supplied reference documentation.
- Maintain a [concise / neutral / professional] tone.
- Privacy guideline: redact or anonymize all personal identifying information.

# 5. EXPECTED OUTPUT FORMAT
Return the output strictly as a Markdown table with the following headers:
| Element | Finding | Risk Level | Corrective Action |
```

This structural discipline minimises model misunderstanding and ensures consistent deliverables across all organisational teams.
