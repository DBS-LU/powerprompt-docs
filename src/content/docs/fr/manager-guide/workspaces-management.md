---
title: "Gestion des espaces de travail et périmètres d'accès"
description: "Créer, configurer, isoler et superviser les espaces de travail et leurs membres depuis l'onglet Workspaces."
---

L’**espace de travail (Workspace)** constitue l'unité fondamentale d'organisation et de collaboration dans Power Prompt. Accessible depuis l'onglet **Workspaces** du menu **Organisation** (section *Analyses* de la barre latérale), cette vue permet aux responsables d'administrer les périmètres étanches au sein des équipes, d'affecter les collaborateurs et de gérer le cycle de vie des bibliothèques de prompts.

![Gestion des espaces de travail dans le menu Organisation](/images/manager-workspaces-interface.jpg)

---

## 1. La console des espaces de travail (`Workspaces`)

L'écran regroupe les outils de filtrage, un tableau de synthèse des espaces créés et un volet d'inspection latérale affichant la composition de l'espace sélectionné.

### Barre d'outils et filtres

En haut du tableau, plusieurs contrôles facilitent la recherche et la gestion des espaces :
* **Barre de recherche (`Search...`)** : filtre textuel instantané sur les intitulés des espaces.
* **Filtre Team (`Team: All`)** : restreint l'affichage aux espaces rattachés à une équipe spécifique (ex: *Demo Team*).
* **Filtre Status (`Status: All`)** : filtre selon l'état opérationnel (*Active*, *Inactive*).
* **Bouton `+ Create Workspace`** : ouvre le formulaire de création d'un nouvel espace de travail.

---

## 2. Le tableau des espaces de travail

Le tableau répertorie l'ensemble des espaces configurés au sein de l'organisation :

| Colonne | Description | Rôle opérationnel |
|---|---|---|
| **WORKSPACES** | Nom de l'espace avec emoji / icône | Identification visuelle rapide (ex: `🤖 AI Prompt Lab (FR)`, `🚀 Business Prod (EN)`). |
| **TEAM** | Équipe parente de rattachement | Équipe propriétaire des droits et des ressources de l'espace. |
| **MEMBERS** | Compteur de membres affectés | Nombre de collaborateurs ayant accès à l'espace. |
| **STATUS** | Badge d'état opérationnel | Statut de disponibilité (`Active` en vert). |
| **UPDATED DATE** | Horodatage de dernière révision | Date et heure de la dernière modification apportée à l'espace. |
| **ACTIONS** | 2 icônes d'action rapide | Crayon (éditer les paramètres) et Corbeille rouge (supprimer ou archiver l'espace). |

Une barre de pagination en bas de tableau (`Showing X to Y of Z`, `Previous`, `Next`) permet de naviguer dans les listes volumineuses.

---

## 3. Le volet d'inspection d'espace (Panneau latéral droit)

Le clic sur une ligne du tableau (signalé par une barre bleue d'activation sur le bord gauche) ouvre la fiche détaillée de l'espace dans le volet droit :

### En-tête de l'espace

* **Titre et icône** : affiche l'intitulé complet de l'espace (ex: `Workspaces "🤖 AI Prompt Lab (FR)"`).
* **Badge de statut** : confirme l'état opérationnel (`Active`).
* **Bouton de fermeture (`✕`)** : permet de refermer le panneau latéral pour élargir la vue tabulaire.
* **Sous-titre d'équipe** : rappelle l'équipe parente assignée (`Team: Demo Team`).

---

### Description fonctionnelle (DESCRIPTION)

Ce bloc documente l'objet métier de l'espace (ex: *Espace de travail pour les francophones*). Il oriente les collaborateurs sur la destination et le contexte d'utilisation des prompts qui y sont regroupés.

---

### Annuaire des membres assignés (MEMBERS)

Le volet liste nominativement l'ensemble des collaborateurs habilités à intervenir dans l'espace :
* **Badge avatar** : initiales du collaborateur (ex: `SM`, `AM`, `SC`).
* **Identité et coordonnées** : nom complet et adresse email professionnelle (ex: *Sarah Mitchell, sarah.mitchell@powerprompt.eu*).
* **Statut individuel** : badge d'accès vert (`Active`).

---

## 4. Créer et paramétrer un nouvel espace de travail

Pour provisionner un nouvel espace :
1. Rendez-vous dans le menu **Organisation** puis cliquez sur l'onglet **Workspaces**.
2. Cliquez sur le bouton bleu **`+ Create Workspace`**.
3. Renseignez :
   * **Nom de l'espace** : intitulé explicite, précédé le cas échéant d'un emoji ou indicateur linguistique (ex: `🤖 Support Technique (FR)`).
   * **Description** : finalité et règles d'usage attendues.
   * **Équipe de rattachement** : sélectionnez l'équipe parente dans le menu déroulant.
4. Sélectionnez les membres initiaux habilités à y accéder.
5. Enregistrez : l'espace devient immédiatement actif et visible pour les collaborateurs désignés.

---

## 5. Structuration interne et bonnes pratiques

Pour maintenir vos espaces de travail clairs et exploitables :
* **Isolation linguistique ou métier** : utilisez des espaces distincts selon la langue de travail (ex: FR vs EN) ou selon les départements (Marketing, Support, Juridique).
* **Catégorisation claire** : créez de 3 à 6 catégories maîtresses par espace pour classer les prompts par thématique.
* **Discipline sur les tags** : veillez à respecter la règle de 4 tags maximum par prompt pour maintenir une recherche transversale efficace.
