<div align="center">

# Power Prompt Documentation

[![Live Documentation](https://img.shields.io/badge/docs-doc.powerprompt.eu-6366f1?style=flat-square)](https://doc.powerprompt.eu)
[![Website](https://img.shields.io/badge/website-powerprompt.eu-0f172a?style=flat-square)](https://powerprompt.eu)
[![Built with Starlight](https://img.shields.io/badge/framework-Astro_Starlight-e0234e?style=flat-square)](https://starlight.astro.build)
[![Deployed on Cloudflare Pages](https://img.shields.io/badge/deployment-Cloudflare_Pages-f38020?style=flat-square)](https://pages.cloudflare.com)
[![License](https://img.shields.io/badge/license-proprietary_documentation-gray?style=flat-square)](#license--intellectual-property)

**Official open-access documentation repository for [Power Prompt](https://powerprompt.eu), the enterprise platform for AI prompt management, governance, collaborative version control, and multi-model evaluation.**

[English Documentation](https://doc.powerprompt.eu/) • [Documentation en Français](https://doc.powerprompt.eu/fr/) • [Official Website](https://powerprompt.eu/) • [Launch Application](https://app.powerprompt.eu)

</div>

---

## Overview

**Power Prompt** empowers organizations to centralize generative AI prompt knowledge, standardize best practices, monitor FinOps telemetry, and deploy enterprise AI consistently, securely, and at scale.

This repository contains the complete source code, guides, technical architecture specifications, and API documentation published live at **[doc.powerprompt.eu](https://doc.powerprompt.eu)**.

---

## Documentation Pillars

The documentation portal is structured into four role-based tracks, fully localized in English and French:

| Section | Target Audience | Key Topics Covered |
|---|---|---|
| **[Getting Started](https://doc.powerprompt.eu/getting-started/overview/)** | All users | Platform concepts, tenancy model, role matrix, and personal account onboarding. |
| **[User Guide](https://doc.powerprompt.eu/user-guide/creating-prompts/)** | Prompt Engineers & Business Users | Prompt editor, Prompt Lab (Architect & Improver), dynamic variables, multi-model evaluation, immutable versioning, and the native **Browser Extension**. |
| **[Manager Guide](https://doc.powerprompt.eu/manager-guide/organization-and-teams/)** | Team Managers & Department Leads | Team management, workspace isolation, shared AI keys, FinOps analytics, and token cost tracking. |
| **[Admin Guide](https://doc.powerprompt.eu/admin-guide/platform-governance/)** | Org Managers & Platform Admins | Multi-tenant governance, system API keys, authorized LLM whitelist, RBAC matrix, and GDPR / SOC 2 compliance. |
| **[IT & Infrastructure](https://doc.powerprompt.eu/architecture/system-overview/)** | DevOps & Enterprise Systems Engineers | System architecture (Fastify, PostgreSQL 17, Next.js), **On-Premise deployment guide** (Docker Compose, Nginx SSL), secrets management, and REST API. |

---

## Repository Structure

```text
powerprompt-docs/
├── src/
│   ├── assets/              # Brand icons and visual assets
│   ├── content/
│   │   └── docs/            # Markdown documentation guides
│   │       ├── fr/          # Complete French documentation tree
│   │       └── ...          # Root English (en-GB) documentation tree
│   └── styles/              # Custom layout and typography overrides
├── public/                  # Static assets (images, headers, favicons)
├── astro.config.mjs         # Starlight multilingual configuration & navigation sidebar
└── package.json             # Dependencies and build scripts
```

---

## Local Development

### Prerequisites

* **Node.js** v20.x or v22.x LTS
* **npm** v10.x or later

### Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/DBS-LU/powerprompt-docs.git
cd powerprompt-docs

# 2. Install dependencies
npm install

# 3. Start local development server (with hot-reload at http://localhost:4321)
npm run dev

# 4. Build static production site (generates dist/ with Pagefind search index)
npm run build

# 5. Preview production build locally
npm run preview
```

---

## Continuous Deployment

This portal is automatically built and deployed to **[doc.powerprompt.eu](https://doc.powerprompt.eu)** on the Cloudflare global edge network upon every push to the `main` branch:

* **Engine:** [Astro](https://astro.build) with [Starlight](https://starlight.astro.build)
* **Search:** [Pagefind](https://pagefind.app) multilingual client-side search indexer
* **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com) with automated TLS/SSL certificate renewal

---

## Contributing & Feedback

We welcome contributions to improve the accuracy, clarity, and coverage of our documentation:

* **Report Issues:** Found a typo, unclear explanation, or broken link? Please open an issue in this repository.
* **Submit Fixes:** Direct improvements and translations are welcome via Pull Requests against the `main` branch.
* **Technical Support:** For platform support, licensing, or commercial inquiries, contact our team at `support@powerprompt.eu`.

---

## License & Intellectual Property

© 2026 **Digital Business Services (DBS)**. All rights reserved.

The documentation text, architecture blueprints, diagrams, and illustrative examples contained in this repository are the intellectual property of Digital Business Services. Power Prompt application source code, proprietary algorithms, and enterprise modules are maintained in private repositories.
