import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://doc.powerprompt.eu',
  integrations: [
    starlight({
      title: 'Power Prompt Docs',
      logo: {
        src: './src/assets/logo-icon.png',
        replacesTitle: false,
      },
      favicon: '/favicon.png',
      credits: false,
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:site_name',
            content: 'Power Prompt Documentation',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://doc.powerprompt.eu/images/create-prompt-editor-interface.jpg',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#6366f1',
          },
        },
      ],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English (UK)',
          lang: 'en-GB',
        },
        fr: {
          label: 'Français',
          lang: 'fr',
        },
      },
      social: {
        linkedin: 'https://www.linkedin.com/company/power-prompt/home',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          translations: {
            fr: 'Démarrage rapide',
          },
          items: [
            { label: 'Platform Overview', translations: { fr: 'Vue d’ensemble' }, slug: 'getting-started/overview' },
            { label: 'Roles & Access Rights', translations: { fr: 'Rôles & droits d’accès' }, slug: 'getting-started/roles' },
            { label: 'Team & Enterprise Onboarding', translations: { fr: 'Embarquement Team & Enterprise' }, slug: 'getting-started/onboarding-team' },
            { label: 'Personal Account Setup', translations: { fr: 'Démarrage Compte Personnel' }, slug: 'getting-started/personal-account' },
            { label: 'Account Login & Security', translations: { fr: 'Connexion & sécurité du compte' }, slug: 'getting-started/account-security' },
          ],
        },
        {
          label: '1. User Guide',
          translations: {
            fr: '1. Guide Utilisateur',
          },
          items: [
            { label: 'Creating & Managing Prompts', translations: { fr: 'Création & gestion des prompts' }, slug: 'user-guide/creating-prompts' },
            { label: 'Library, Categories & Tags', translations: { fr: 'Bibliothèque, catégories & tags' }, slug: 'user-guide/categories-and-library' },
            { label: 'Dynamic Variables in Prompts', translations: { fr: 'Variables dynamiques dans vos prompts' }, slug: 'user-guide/templates-and-variables' },
            { label: 'Prompt Template Catalogue', translations: { fr: 'Catalogue de modèles de prompts' }, slug: 'user-guide/template-catalog' },
            { label: 'Versioning & Visual Diff', translations: { fr: 'Versioning & historique des prompts' }, slug: 'user-guide/versioning-and-history' },
            { label: 'Prompt Lab: Architect & Improver', translations: { fr: 'Prompt Lab : Architect & Improver' }, slug: 'user-guide/prompt-lab' },
            { label: 'Testing & Multi-Model Evaluation', translations: { fr: 'Test & évaluation multi-modèles' }, slug: 'user-guide/testing-and-evaluation' },
            { label: 'Collaboration & Comments', translations: { fr: 'Collaboration & commentaires' }, slug: 'user-guide/collaboration-and-comments' },
            { label: 'Browser Extensions', translations: { fr: 'Extensions pour navigateurs' }, slug: 'user-guide/browser-extension' },
          ],
        },
        {
          label: '2. Manager Guide',
          translations: {
            fr: '2. Guide Manager',
          },
          items: [
            { label: 'Organisation & Team Hierarchy', translations: { fr: 'Organisation & équipes' }, slug: 'manager-guide/organization-and-teams' },
            { label: 'User Directory & Permissions', translations: { fr: 'Utilisateurs & gestion des accès' }, slug: 'manager-guide/users-management' },
            { label: 'Workspace Management', translations: { fr: 'Gestion des Workspaces & accès' }, slug: 'manager-guide/workspaces-management' },
            { label: 'AI Integrations & Team Keys', translations: { fr: 'Intégrations IA & clés d’équipe' }, slug: 'manager-guide/team-api-keys' },
            { label: 'Analytics, Costs & Alerts', translations: { fr: 'Analyses, coûts & alertes' }, slug: 'manager-guide/cost-tracking' },
          ],
        },
        {
          label: '3. Administrator Guide',
          translations: {
            fr: '3. Guide Administrateur',
          },
          items: [
            { label: 'Platform Governance & Multi-Tenancy', translations: { fr: 'Gouvernance plateforme & multi-tenancy' }, slug: 'admin-guide/platform-governance' },
            { label: 'System API Keys & Infrastructure', translations: { fr: 'Clés API Système & infrastructure' }, slug: 'admin-guide/system-api-keys' },
            { label: 'Authorised AI Models Governance', translations: { fr: 'Gouvernance des modèles IA autorisés' }, slug: 'admin-guide/authorized-ai-models' },
            { label: 'RBAC Roles & Permissions Matrix', translations: { fr: 'Matrice des rôles & permissions RBAC' }, slug: 'admin-guide/rbac-matrix' },
            { label: 'Security, Audit & Compliance', translations: { fr: 'Sécurité, audit & conformité' }, slug: 'admin-guide/security-compliance' },
          ],
        },
        {
          label: '4. IT & Infrastructure Guide',
          translations: {
            fr: '4. Guide IT & Infrastructure',
          },
          items: [
            { label: 'System Architecture Overview', translations: { fr: 'Architecture système générale' }, slug: 'architecture/system-overview' },
            { label: 'On-Premise Deployment Guide', translations: { fr: 'Guide de déploiement On-Premise' }, slug: 'installation/on-premise' },
            { label: 'Secrets Management Policy', translations: { fr: 'Politique de gestion des secrets' }, slug: 'installation/secrets-management' },
            { label: 'Datacenter CORS & Network', translations: { fr: 'Réseau et CORS Datacenter' }, slug: 'installation/datacenter-cors' },
            { label: 'Platform Integration API', translations: { fr: 'API d’intégration & Prompts' }, slug: 'api/platform-core-api' },
          ],
        },
        {
          label: 'Best Practices & Reference',
          translations: {
            fr: 'Bonnes pratiques & Références',
          },
          items: [
            { label: 'Best Practices & Prompt Architecture', translations: { fr: 'Bonnes pratiques & structure de prompts' }, slug: 'references/best-practices' },
            { label: 'Glossary & Onboarding Checklists', translations: { fr: 'Glossaire & checklists de démarrage' }, slug: 'references/glossary-and-checklist' },
          ],
        },
      ],
    }),
  ],
});
