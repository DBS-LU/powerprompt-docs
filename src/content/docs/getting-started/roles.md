---
title: "Roles and Permissions"
description: "User profiles, operational scopes, responsibilities, and visibility matrix in Power Prompt."
---

Power Prompt relies on a Role-Based Access Control (RBAC) model.

The permissions granted to each user depend on their role within the organisation and the authorisations assigned to them in the workspaces to which they belong.

## Roles Overview

| Role | Description | Visibility |
|---|---|---|
| **Standard User** (`User`) | Business user leveraging platform capabilities on a daily basis. | Visible according to their team or organisation |
| **Team Manager** (`Team Manager`) | Operational lead for one or more teams. Supervises content, members, and usage. | Visible to members of their team |
| **Organisation Manager** (`Org Manager`) | Functional administrator for an organisation. Manages users, teams, workspaces, and governance policies. | Visible to all members of the same organisation |
| **Platform Administrator** (`Platform Admin`) | Global administrator of the Power Prompt environment. Reserved for operations teams and On-Premise deployments. | Hidden from regular users |

## Standard User (`User`)

The standard user uses Power Prompt as part of their day-to-day professional activities.

Depending on granted permissions, they can specifically:

- Create and edit prompts.
- Use organisational prompt templates.
- Execute simple prompts and parameterized prompts.
- Leverage assistance and enhancement features.
- Test prompts against authorised AI models.
- Review and compare versions.
- Participate in collaborative discussions.
- Share content with authorised members.
- Access their content.

## Team Manager (`Team Manager`)

The team manager oversees the operational management of one or more teams.

Their responsibilities specifically include:

- Managing team members.
- Organising categories.
- Defining standards and naming conventions.
- Managing authorised AI providers for the team.
- Monitoring usage statistics and token consumption.
- Validating, publishing, archiving, or withdrawing content.

## Organisation Manager (`Org Manager`)

The organisation manager leads the adoption and governance of Power Prompt within their organisation.

Their responsibilities specifically include:

- Configuring organisation settings.
- Managing users and teams.
- Creating and administering workspaces.
- Assigning roles and permissions.
- Managing security and compliance policies.
- Tracking consolidated consumption and costs.
- Accessing organisational reports and audit logs.

## Platform Administrator

The platform administrator holds full access to the entire Power Prompt infrastructure.

Their responsibilities specifically include:

- Creating and administering organisations.
- Managing users globally and their affiliations.
- Managing authorised AI models at the platform level.
- Managing shared system API keys.
- Configuring global security settings.
- Supervising audit logs.
- Monitoring platform performance and metrics.

> [!NOTE]
> This role is reserved for administrators of On-Premise deployments and authorised operations teams.
