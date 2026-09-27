---
title: "Organisation et gestion des équipes"
description: "Piloter les équipes, superviser les membres, consulter les métriques et suivre l'activité depuis le menu Organisation."
---

Le menu **Organisation**, accessible dans la section **Analyses** (*Insights*) de la barre latérale, constitue le centre de pilotage des responsables d'équipe (*Team Managers*) et des gestionnaires d'organisation. Il centralise la gouvernance des structures humaines, des espaces de travail et des ressources d'inférence.

![Console Organisation et gestion des équipes](/images/organisation-teams-interface.jpg)

---

## 1. Les quatre piliers de l'Organisation

L'en-tête de la console présente quatre cartes d'indicateurs globaux qui font également office d'onglets de navigation rapide :

| Onglet / Compteur | Indicateur affiché | Rôle opérationnel |
|---|---|---|
| **Teams** (Équipes) | Nombre total d'équipes créées | Liste des équipes, configuration métier et suivi des activités. |
| **Users** (Utilisateurs) | Nombre de collaborateurs rattachés | Annuaire des utilisateurs, statuts des comptes et attributions de rôles. |
| **Workspaces** (Espaces) | Nombre d'espaces de travail configurés | Périmètres d'isolation des prompts et des catégories. |
| **API Keys** (Clés API) | Nombre de clés d'inférence actives | Gouvernance des accès aux modèles de langage (LLM). |

---

## 2. Vue d'ensemble des équipes (Teams overview)

Lorsque l'onglet **Teams** est sélectionné, l'écran s'organise en deux volets : la liste des équipes à gauche et la fiche détaillée de l'équipe sélectionnée à droite.

### Le panneau de gauche : Teams overview

Ce volet répertorie l'ensemble des équipes de votre périmètre :
* **Bouton `+ Create Team`** : permet de créer une nouvelle équipe en définissant son intitulé, son responsable et sa description.
* **Barre de recherche (`Search...`)** : filtre instantanément les équipes par mot-clé.
* **Cartes d'équipe** : chaque bloc résume les indicateurs essentiels :
  * Intitulé de l'équipe (ex: *Demo Team*).
  * Badge de statut opérationnel (ex: `Active` en vert).
  * Nombre de membres affectés (ex: *4 members*).
  * Nombre d'espaces de travail rattachés (ex: *2 workspaces*).
  * Icône de clé signalant si des clés API d'inférence sont associées à l'équipe.
* **Pagination** : contrôle de navigation (`Previous`, numéros de pages, `Next`).

---

## 3. Fiche détaillée de l'équipe sélectionnée

Le panneau de droite affiche la vue opérationnelle complète de l'équipe active.

### En-tête de gestion

* **Nom et statut** : titre de l'équipe avec badge d'état (`Active`).
* **Ligne des responsables** : affiche la liste des gestionnaires habilités (`Managers: Sarah Mitchell...`).
* **Bouton `Edit Team`** : permet de modifier le nom, la description ou les paramètres de l'équipe.
* **Bouton `Invite Member`** : ouvre le formulaire d'invitation pour ajouter un collaborateur directement dans cette équipe.

---

### Indicateurs de performance de l'équipe (KPIs)

Quatre cartes résument les ressources allouées à l'équipe sélectionnée :
1. **Members** : effectif total des collaborateurs rattachés.
2. **Workspaces** : nombre d'espaces de travail cloisonnés à disposition de l'équipe.
3. **Active AI Providers** : nombre de fournisseurs d'IA (OpenAI, Anthropic, Google, passerelles privées) raccordés et fonctionnels.
4. **Date** : date et heure de création de l'équipe dans le système.

---

### Volet Team Overview (Informations structurelles)

Ce bloc détaille l'identité administrative de l'équipe :
* **Team Manager** : nom et adresse email professionnelle du gestionnaire référent.
* **Team Description** : mission et périmètre fonctionnel (ex: *AI Innovation Team*).
* **Created Date** : horodatage de référence de la création.
* **Status** : état du compte (`Active`).

---

### Volet Recent Activity (Traçabilité et sécurité)

Le bloc **Recent Activity** fournit un journal d'audit en direct des événements liés à l'équipe :
* **Type d'événement** : ex: `LOGIN SUCCESS` lors d'une connexion réussie d'un membre.
* **Identité et rattachement** : nom du collaborateur et équipe concernée (ex: *Alex Morgan • Demo Team*).
* **Statut de l'événement** : badge de conformité (`SUCCESS`).
* **Horodatage à la minute près** : date et heure précises de l'événement (ex: *26/09/2026 13:23*), garantissant une surveillance continue des accès.

---

## 4. Inviter des collaborateurs et gérer les rôles

Pour ajouter un collaborateur à une équipe :
1. Cliquez sur le bouton bleu **`Invite Member`** dans l'en-tête de l'équipe (ou rendez-vous sur l'onglet **Users**).
2. Saisissez l'adresse email professionnelle du collaborateur.
3. Définissez son niveau de prérogatives :
   * **Utilisateur standard** : accède aux espaces de travail de l'équipe pour rédiger, tester et utiliser les prompts.
   * **Team Manager (Responsable d'équipe)** : supervise les membres, gère les espaces de travail et suit les statistiques de l'équipe.
4. Validez l'envoi : le collaborateur reçoit son invitation avec les instructions d'activation sécurisée de son compte.

---

## 5. Cycle de vie et départs (Offboarding)

En cas de réorganisation, de mobilité interne ou de départ d'un collaborateur :
* **Désactivation de compte** : révoque immédiatement les droits d'accès sans supprimer les prompts créés ni altérer l'historique des versions publiées.
* **Réassignation des prompts** : transférez la gestion des bibliothèques à un autre membre de l'équipe.
* **Audit préalable** : vérifiez le flux des actions dans le journal **Recent Activity** avant d'archiver un compte.
