---
title: "Dynamic Variables in Prompts"
description: "Turn your prompts into reusable templates using dynamic variables, automatic input forms, and quick-copy options."
---

**Dynamic variables** allow you to transform any standard prompt instruction into a standardised, reusable template for your entire team. They rely on text placeholders enclosed in double curly braces: `{{variable_name}}`.

---

## 1. Declaring a Variable in the Editor

Any prompt drafted or edited within **Mes prompts** can include one or more dynamic variables:

1. In the prompt editor (**Write** tab), write your standard instructions.
2. Wherever dynamic data is required, insert the variable name between double curly braces: `{{client}}`, `{{context}}`, `{{objective}}`.
3. You can also click the **Variables** button below the editor to quickly insert or identify variable tags detected in the text.

Whenever double curly braces are present, Power Prompt automatically recognises the placeholder and configures the corresponding input forms.

---

## 2. Technical Behaviour: A Versatile Text Field

From an architectural standpoint, every variable defined in Power Prompt is currently processed as a **universal text input field**.

While it operates without strict datatype constraints, this universal text field accommodates all operational use cases:

* **Short text:** Enter a client name, product title, job role, or brief instruction (e.g. `{{audience}}`).
* **Numeric metrics:** Specify a threshold, word count limit, percentage, or quantitative target (e.g. `{{word_count}}`).
* **Dates and timeframes:** State a delivery deadline, schedule, or milestone date (e.g. `{{target_date}}`).
* **Long text blocks:** Paste an entire source document, incident report, customer email, or meeting transcript (e.g. `{{source_document}}`).

---

## 3. Quick Copy Options Under the Editor

Below the prompt writing area, two dedicated buttons streamline how you manipulate variables:

* **Copier avec Variables (Copy with Variables):** Copies the raw prompt body while preserving all `{{variable_name}}` tags. Ideal for sharing raw prompt structures or documenting them across external platforms.
* **Copier avec Valeurs (Copy with Values):** Replaces each placeholder with test values entered into the input fields, then copies the resolved prompt directly to the clipboard. Ideal for pasting straight into external AI tools.

---

## 4. Concrete Example of a Parameterised Prompt

Here is a structured example illustrating multiple variable placeholders:

```markdown
You are an expert continuous improvement and operations consultant.

Engagement context:
The enterprise {{company_name}} is experiencing operational bottlenecks in its {{process_name}} workflow.

Data provided by the team:
"""
{{observation_data}}
"""

Analysis instructions:
1. Identify the three primary bottlenecks in fewer than {{word_limit}} words.
2. Formulate a prioritised action roadmap due by {{target_date}}.
3. Maintain a {{deliverable_tone}} communication style.
```

---

## 5. Execution and Runtime Input Forms

When you or a workspace team member execute the prompt:

1. Click **▶ Exécuter le Prompt** or open the prompt in view mode.
2. Power Prompt automatically renders an interactive form featuring a dedicated text field for each detected variable.
3. The collaborator inputs the required parameters without any risk of accidentally altering the underlying prompt rules or governance safeguards.
4. The **Preview** tab allows you to inspect the final text before submitting it to connected AI models.
