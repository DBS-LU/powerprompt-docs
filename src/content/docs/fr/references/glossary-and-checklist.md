---
title: "Glossaire et checklists de démarrage"
description: "Définitions des concepts clés de Power Prompt et checklists opérationnelles de mise en route."
---

Retrouvez ici le glossaire terminologique de référence et les listes de contrôle opérationnelles pour accompagner vos premiers pas sur la plateforme.

---

## 1. Glossaire terminologique

| Terme | Définition opérationnelle |
|---|---|
| **Prompt** | Consigne ou ensemble de directives rédigées en langage naturel destinées à être exécutées par un modèle d'intelligence artificielle (LLM). |
| **Modèle de prompt** | Consigne standardisée et réutilisable comportant une trame fixe et des variables dynamiques `{{...}}`. |
| **Variable** | Champ dynamique universel substitué par une valeur saisie lors de l'exécution d'un prompt paramétrable. |
| **Espace de travail (Workspace)** | Environnement collaboratif cloisonné regroupant bibliothèques de prompts, catégories, tags et clés IA d'une équipe. |
| **Équipe (Team)** | Ensemble de collaborateurs partageant un même périmètre d'activité (département, service, projet transversal). |
| **Organisation (Tenant)** | Entité d'entreprise globale chapeautant l'ensemble des équipes, espaces de travail et politiques de gouvernance. |
| **Version** | Empreinte immuable de l'état d'un prompt à un instant donné (contenu, métadonnées, paramètres et auteur). |
| **Bouton « Compare les versions »** | Outil visuel de comparaison côte-à-côte (Diff) mettant en évidence les ajouts, suppressions et modifications entre deux versions. |
| **Tag** | Mot-clé transversal facilitant le filtrage rapide (limité à un maximum de 4 tags par prompt). |
| **Fonction « Improve »** | Assistant d'ingénierie intégré permettant d'optimiser la clarté, la structure et la robustesse d'un prompt en un clic. |
| **Clés API Système** | Identifiants d'infrastructure mutualisés gérés par l'administrateur plateforme pour alimenter les fonctionnalités intelligentes natives (fonction Improve et Prompt Lab : Architect & Improver). |
| **Clés API d'organisation / d'équipe** | Identifiants d'inférence configurés par les responsables dans le menu Organisation pour permettre aux collaborateurs d'exécuter et de tester leurs prompts face aux modèles IA autorisés. |

---

## 2. Checklists opérationnelles de démarrage

### Checklist pour le responsable d'équipe ou d'organisation

| Action de mise en service | Validation |
|---|:---:|
| Organisation ou équipe vérifiée dans les paramètres d'administration | [ ] |
| Collaborateurs invités par email ou via import en masse | [ ] |
| Équipes créées selon les départements métier | [ ] |
| Utilisateurs assignés à leurs équipes respectives | [ ] |
| Au moins un espace de travail créé et associé à chaque équipe | [ ] |
| Rôles et niveaux de permissions configurés | [ ] |
| Intégrations IA (OpenAI, Anthropic, Google) testées et actives | [ ] |
| Catégories maîtresses de la bibliothèque initialisées | [ ] |
| Conventions de nommage et règle des 4 tags communiquées | [ ] |
| Invitation et documentation d'accueil transmises aux collaborateurs | [ ] |

---

### Checklist pour l'utilisateur standard

| Action de prise en main | Validation |
|---|:---:|
| Compte utilisateur activé via l'email de bienvenue | [ ] |
| Profil complété (nom, prénom, photo ou spécialité) | [ ] |
| Accès vérifié à l'espace de travail de son équipe | [ ] |
| Premier prompt rédigé en Markdown avec titre explicite et description | [ ] |
| Tags (jusqu'à 4) et catégorie de classement associés | [ ] |
| Prompt testé en direct ou optimisé via la fonction « Improve » | [ ] |
| Première version enregistrée dans la bibliothèque | [ ] |
| Extension pour navigateur installée et connectée | [ ] |
