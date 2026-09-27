---
title: "Library, Categories, and Tags"
description: "Structure, classify, filter, and move prompts in the My Prompts workspace view."
---

The **My Prompts** section serves as your personal library within your workspace. It centralises all your prompts, organised by categories (folders) and tagged with keywords to prevent clutter and ensure immediate access to your enterprise AI assets.

---

## 1. Multi-Dimensional Taxonomy

Prompts within Power Prompt can be retrieved and grouped across several complementary attributes:

* **Workspace:** Team collaboration boundary (e.g., *Support Prompts*, *Marketing Prompts*).
* **Category / Folder:** Logical functional hierarchy (e.g., *Triage*, *Data Extraction*, *Web Copy*).
* **Status:** Prompt visibility (*Draft* personal mode or *Active* shared mode).
* **Tags:** Cross-cutting keywords enabling instant multi-category searches.
* **Author:** Creation and revision provenance.
* **Target AI Model:** Preferred inference provider (OpenAI, Anthropic, Google).
* **Timestamps:** Creation date and last modified date.

---

## 2. Structuring Categories and Folders

In Power Prompt, the terms **category** and **folder** denote the exact same functional entity: a logical directory used to group and organise prompts according to business workflows. Depending on your organisation's terminology or user preference, both terms can be used interchangeably (analogous to the terms "folder" and "directory" in desktop operating systems).

### Creating a Category (Folder)

1. Navigate to the **My Prompts** section in your workspace.
2. Click **New Category** (or the `+` icon in the sidebar tree).
3. Specify:
   * **Name:** Clear, unambiguous title (e.g., *Customer Support*, *GDPR Compliance*, *B2B Copywriting*).
   * **Description:** Detail the scope and expected inputs for prompts stored here.
   * **Visual Icon or Colour:** Facilitates visual recognition across the interface.
4. Click **Save**: the category appears immediately in your workspace navigation.

Once inside a category, the title displays the total number of prompts it contains (e.g., *Project Management (11)*), and an edit pencil icon allows you to modify its name or description at any time.

---

## 3. Display Modes and Quick Actions

The repository interface offers two display modes and instant operational shortcuts directly on cards:

### Display Modes (Grid and List Views)

In the top-right corner of the content area, two toggle icons allow you to switch views:
* **Grid View (default):** Displays prompts as modular cards. Ideal for visually scanning instructions, reviewing descriptions, and viewing badges and tags.
* **List View:** Displays prompts in a condensed tabular format, suited for quickly managing large prompt volumes.

### Quick Actions on Prompt Cards

In Grid View, each prompt card features actionable elements:
* **Checkbox (top-right corner):** Select one or more prompts to activate the **Move Prompt** button.
* **Status Badge:** Instantly shows whether the prompt is in **Draft** (red badge) or **Active** (green badge) mode.
* **Associated Tags:** Displays primary tag badges in light blue, along with an overflow counter (`+1`, `+2`) when additional tags are attached.
* **Favorite / Star:** Click the star icon at the bottom of the card to bookmark the prompt for your personal profile. The star turns yellow/gold for immediate recognition.
* **Copy Prompt (two-sheet icon):** Click this icon to copy the entire prompt text directly to your clipboard, ready to paste into any external application (ChatGPT, Claude, external web tools, etc.).

---

## 4. Adding Tags and the 4-Tag Rule

Tags provide horizontal categorisation that cuts across distinct vertical folders.

### The 4-Tag Maximum Rule

To ensure library cleanliness and prevent keyword dilution, **Power Prompt restricts prompts to a maximum of four tags**.

### Standard Tag Examples:

* `marketing`
* `support`
* `summary`
* `classification`
* `translation`
* `legal`
* `production`

Adopting standardised, team-wide vocabulary maximises retrieval speed and search relevance.

---

## 5. Moving One or Multiple Prompts

Moving prompts is performed directly from the category (folder) view, without opening individual prompt cards:

### How to Move Prompts

1. Navigate to the category (folder) containing the prompts you wish to move.
2. On each prompt card, select the checkbox located in the **top-right corner**. You can select a single prompt or multiple prompts for batch relocation.
3. Once at least one checkbox is checked, the **Move Prompt** button becomes active.
4. Click **Move Prompt** and select the destination category.
5. Confirm to finalize the relocation: the selected prompts are immediately reassigned.

> **Security and Governance Rule:** Prompts can only be moved **within the same workspace**. For strict data governance, access boundary, and security reasons, cross-workspace prompt transfers cannot be executed through this action.

---

## 6. Search Toolbar and Filters

Power Prompt provides a complete toolbar to quickly find and filter your prompts:

### The 5 Available Filters

1. **Search... (Full-Text Search):** Indexes prompt titles, descriptions, Markdown instructions, and metadata simultaneously.
2. **Date:** Calendar picker to filter by creation or update date.
3. **Status (Draft vs Active):** Filters prompts based on their lifecycle and visibility:
   * **Draft:** User's personal, private version. Other members of the team or workspace never see drafts created by colleagues. This ensures full privacy during initial drafting and testing.
   * **Active:** Validated, official version. The prompt is published and visible to all members of the group and workspace.
4. **AI/Model:** Isolates prompts recommended for a specific AI model or provider (OpenAI, Anthropic, Google, etc.).
5. **Tags:** Dropdown filter to select one or more operational tags.