---
title: "Rôles et droits d'accès"
description: "Périmètres, responsabilités et matrice de visibilité des profils utilisateurs dans Power Prompt."
---

Power Prompt s'appuie sur un modèle de contrôle d'accès basé sur les rôles (RBAC - Role-Based Access Control).

Les droits accordés à chaque utilisateur dépendent de son rôle au sein de l'organisation et des autorisations qui lui sont attribuées dans les espaces de travail auxquels il appartient.

## Vue d'ensemble des rôles

| Rôle | Description | Visibilité |
|---|---|---|
| **Utilisateur standard** (`User`) | Utilisateur métier exploitant les fonctionnalités de la plateforme au quotidien. | Visible selon son équipe ou son organisation |
| **Responsable d'équipe** (`Team Manager`) | Responsable opérationnel d'une ou plusieurs équipes. Supervise les contenus, les membres et les usages. | Visible par les membres de son équipe |
| **Responsable d'organisation** (`Org Manager`) | Administrateur fonctionnel d'une organisation. Gère les utilisateurs, les équipes, les espaces de travail et les politiques de gouvernance. | Visible par l’ensemble des membres de la même organisation |
| **Administrateur plateforme** (`Platform Admin`) | Administrateur global de l'environnement Power Prompt. Réservé aux équipes d'exploitation et aux déploiements On-Premise. | Masqué pour les utilisateurs réguliers |

## Utilisateur standard (`User`)

L'utilisateur standard utilise Power Prompt dans le cadre de ses activités professionnelles.

Selon les autorisations accordées, il peut notamment :

- Créer et modifier des prompts.
- Utiliser les modèles de prompts de l'organisation.
- Exécuter des prompts simples et des prompts paramétrables.
- Utiliser les fonctionnalités d'assistance et d'amélioration.
- Tester les prompts sur les modèles IA autorisés.
- Consulter et comparer les versions.
- Participer aux discussions collaboratives.
- Partager des contenus avec les membres autorisés.
- Accéder à ses contenus.

## Responsable d'équipe (`Team Manager`)

Le responsable d'équipe assure la gestion opérationnelle d'une ou plusieurs équipes.

Ses responsabilités incluent notamment :

- Gestion des membres de l'équipe.
- Organisation des catégories.
- Définition des standards et conventions de nommage.
- Gestion des fournisseurs IA autorisés pour l'équipe.
- Suivi des statistiques d'utilisation et de consommation.
- Validation, publication, archivage ou retrait des contenus.

## Responsable d'organisation (`Org Manager`)

Le responsable d'organisation pilote l'adoption et la gouvernance de Power Prompt au sein de son organisation.

Ses responsabilités incluent notamment :

- Configuration des paramètres de l'organisation.
- Gestion des utilisateurs et des équipes.
- Création et administration des espaces de travail.
- Attribution des rôles et permissions.
- Gestion des politiques de sécurité et de conformité.
- Suivi de la consommation et des coûts consolidés.
- Accès aux rapports et aux journaux d'audit organisationnels.

## Administrateur plateforme (`Platform Admin`)

L'administrateur plateforme dispose d'un accès complet à l'ensemble de l'infrastructure Power Prompt.

Ses responsabilités incluent notamment :

- Création et administration des organisations.
- Gestion globale des utilisateurs et de leur rattachement.
- Gestion des modèles IA autorisés au niveau plateforme.
- Gestion des clés API système mutualisées.
- Configuration des paramètres de sécurité globaux.
- Supervision des journaux d'audit.
- Surveillance des performances et métriques de la plateforme.

> [!NOTE]
> Ce rôle est réservé aux administrateurs des déploiements On-Premise et aux équipes d'exploitation autorisées.
