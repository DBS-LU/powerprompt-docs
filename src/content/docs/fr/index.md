---
title: Documentation Power Prompt
description: Plateforme de gestion, collaboration, versioning et test de prompts d'intelligence artificielle.
template: splash
hero:
  tagline: Centralisez les connaissances, standardisez les pratiques, maîtrisez les coûts et transformez les usages IA individuels en un patrimoine organisationnel durable.
  actions:
    - text: Démarrage rapide
      link: /fr/getting-started/overview/
      icon: right-arrow
      variant: primary
    - text: Guide d'installation On-Premise
      link: /fr/installation/on-premise/
      icon: external
      variant: secondary
    - text: Ouvrir l'application
      link: https://app.powerprompt.eu
      icon: external
      variant: minimal
    - text: Site officiel
      link: https://powerprompt.eu/fr
      icon: external
      variant: minimal
---

## Documentation par Rôle

Sélectionnez votre profil pour accéder à la documentation et aux guides adaptés à vos responsabilités :

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">

:::note[👤 1. Guide Utilisateur]
Pour les créateurs de prompts, analystes métier et collaborateurs opérationnels.
* **[Création & Gestion des Prompts](/fr/user-guide/creating-prompts/)** : Rédiger en Markdown, estimer les jetons et utiliser la fonction « Improve ».
* **[Bibliothèque, Catégories & Tags](/fr/user-guide/categories-and-library/)** : Organiser, filtrer et déplacer vos prompts (règle des 4 tags).
* **[Variables Dynamiques & Paramétrage](/fr/user-guide/templates-and-variables/)** : Créer des prompts paramétrables avec variables et prévisualisation.
* **[Catalogue de Modèles de Prompts](/fr/user-guide/template-catalog/)** : Explorer et instancier les 4 000 modèles prêts à l'emploi.
* **[Versioning & Comparateur de Versions](/fr/user-guide/versioning-and-history/)** : Historique immuable, comparateur visuel (Diff) et restauration.
* **[Prompt Lab : Architect & Improver](/fr/user-guide/prompt-lab/)** : Atelier d'ingénierie avancée, génération de prompts et durcissement.
* **[Test & Évaluation Multi-Modèles](/fr/user-guide/testing-and-evaluation/)** : Valider en direct et comparer les modèles (OpenAI, Anthropic, Google).
* **[Collaboration & Commentaires](/fr/user-guide/collaboration-and-comments/)** : Échanger en équipe, fils de discussion et mentions.
* **[Extension Navigateur](/fr/user-guide/browser-extension/)** : Accès rapide aux favoris et injection directe dans vos outils web.
:::

:::note[👥 2. Guide Manager]
Pour les responsables d'équipe (`Team Managers`).
* **[Organisation & Gestion des Équipes](/fr/manager-guide/organization-and-teams/)** : Structurer la hiérarchie et gérer les invitations de membres.
* **[Espaces de Travail](/fr/manager-guide/workspaces-management/)** : Provisionner les espaces, isoler les projets et calibrer les droits.
* **[Intégrations IA & Clés d'Équipe](/fr/manager-guide/team-api-keys/)** : Raccorder les fournisseurs IA et gouverner les identifiants d'équipe.
* **[Analyses, Coûts & Alertes](/fr/manager-guide/cost-tracking/)** : Suivre la consommation de jetons, les dépenses et paramétrer des alertes.
:::

:::note[🛡️ 3. Guide Administrateur]
Pour les responsables d'organisation (`Org Managers`) et administrateurs plateforme (`Platform Admins`).
* **[Gouvernance de Plateforme](/fr/admin-guide/platform-governance/)** : Supervision globale multi-organisations (Enterprise et On-Premise).
* **[Clés API Système & Infrastructure](/fr/admin-guide/system-api-keys/)** : Alimenter les fonctionnalités natives (Improve, Prompt Lab) et surveiller les quotas.
* **[Gouvernance des Modèles IA Autorisés](/fr/admin-guide/authorized-ai-models/)** : Figer la liste blanche des LLM, bloquer le Shadow AI et filtrer les fournisseurs.
* **[Matrice des Permissions RBAC](/fr/admin-guide/rbac-matrix/)** : Administrer la grille détaillée des rôles et privilèges.
* **[Sécurité, Audit & Conformité](/fr/admin-guide/security-compliance/)** : Chiffrement AES-256, traçabilité intégrale et conformité RGPD / SOC 2.
:::

:::note[⚙️ 4. Guide IT & Infrastructure]
Pour les DSI, équipes DevOps, ingénieurs système et intégrateurs On-Premise.
* **[Architecture Système Générale](/fr/architecture/system-overview/)** : Backend Fastify, frontend Next.js et base PostgreSQL 17.
* **[Déploiement On-Premise](/fr/installation/on-premise/)** : Recette de déploiement conteneurisé Docker Compose et Nginx SSL.
* **[Gestion des Secrets](/fr/installation/secrets-management/)** : Politiques de configuration `.env` et rotation des clés.
* **[Réseau, CORS & Reverse Proxy](/fr/installation/datacenter-cors/)** : Sécurisation réseau datacenter et interconnexions d'API.
* **[API d'intégration & Prompts](/fr/api/platform-core-api/)** : Intégration programmatique et exécution de prompts sécurisée.
:::

</div>
