---
title: "Utilisateurs et gestion des accès"
description: "Gérer l'annuaire des membres, attribuer les rôles, administrer les invitations, réinitialiser les mots de passe et exporter les données."
---

L'onglet **Users** du menu **Organisation** (section *Analyses* de la barre latérale) permet aux gestionnaires de piloter l'annuaire des collaborateurs, d'ajuster leurs rôles, de surveiller les dernières connexions et d'exécuter des actions administratives directes (réinitialisation d'accès, suspension de compte, export CSV).

![Console de gestion des utilisateurs dans le menu Organisation](/images/manager-users-interface.jpg)

---

## 1. La console de gestion des utilisateurs

L'interface réunit des filtres de recherche rapides, un tableau complet des collaborateurs et un volet d'administration latérale pour l'utilisateur sélectionné.

### Barre d'outils, filtres et actions

Au-dessus du tableau, plusieurs contrôles permettent d'administrer l'annuaire :
* **Barre de recherche (`Search...`)** : recherche textuelle instantanée par nom ou adresse email.
* **Filtre Role (`Role: All Roles`)** : isole les collaborateurs selon leur rôle (*User*, *Team Manager*, *Org Manager*).
* **Filtre Status (`Status: All Statuses`)** : filtre selon l'état opérationnel du compte (*Active*, *Suspended*).
* **Bouton `Export CSV`** : télécharge l'intégralité de l'annuaire des utilisateurs au format CSV (utile pour les audits de conformité RH et sécurité).
* **Bouton `+ Invite Member`** : ouvre le formulaire d'embarquement pour inviter un nouveau collaborateur par email.

---

## 2. Le tableau des membres de l'organisation

Le tableau liste nominativement chaque utilisateur rattaché à l'organisation avec ses prérogatives :

| Colonne | Description | Rôle opérationnel |
|---|---|---|
| **MEMBERS** | Case à cocher, nom complet et email | Identification du collaborateur avec possibilité de sélection multiple. |
| **ROLE** | Badge du rôle attribué | Niveau d'habilitation dans la plateforme (*User*, *Team Manager*, *Org Manager*). |
| **LAST LOGIN** | Horodatage de dernière connexion | Date et heure de la dernière authentification réussie. |
| **STATUS** | Badge d'état du compte | Indique si le compte est actif (`Active` en vert) ou suspendu. |

Toutes les colonnes disposent d'un tri dynamique (`⇅`), et une pagination en bas de tableau (`Showing X to Y of Z`, `Previous`, `Next`) assure la navigation dans les annuaires volumineux.

---

### La typologie des rôles dans l'interface

Power Prompt distingue trois rôles opérationnels avec des codes visuels distincts :
1. **User (badge vert)** : utilisateur standard. Il utilise la plateforme pour concevoir, tester et exécuter des prompts dans les espaces de travail qui lui sont assignés.
2. **Team Manager (badge cyan)** : responsable d'équipe. Il supervise les membres de son équipe, administre les espaces de travail associés et suit l'activité de son équipe.
3. **Org Manager (badge violet)** : responsable d'organisation. Il dispose d'une visibilité globale sur l'ensemble des équipes, des espaces de travail, des clés API et de la facturation de l'organisation.

---

## 3. Le volet d'administration utilisateur (Panneau latéral droit)

Le clic sur une ligne du tableau (signalé par une bordure bleue sur la gauche) ouvre la fiche détaillée du collaborateur dans le volet droit :

### En-tête du profil

* **Identité et statut** : nom complet (ex: *Sophia Carter*), badge vert *Active*, adresse email professionnelle et bouton de fermeture `✕`.

---

### Télémétrie d'accès

Deux cartes d'horodatage précisent le cycle de vie du compte :
* **Created Date** : date et heure de création initiale du profil (ex: *07/08/2026 16:33*).
* **Last Login** : date et heure de la dernière session active (ex: *22/08/2026 20:23*), facilitant l'identification des comptes inactifs.

---

### Modification immédiate du rôle (ROLE)

Un menu déroulant permet de modifier instantanément le niveau de privilège de l'utilisateur (*User*, *Team Manager*, *Org Manager*) sans avoir à recréer son profil. La modification prend effet dès la prochaine action du collaborateur.

---

### Actions d'accès et sécurité (EMAIL & ACCESS ACTIONS)

Deux boutons d'action rapide permettent de gérer les urgences opérationnelles :
1. **`Send Password Reset`** : déclenche l'envoi immédiat d'un email contenant un lien sécurisé permettant au collaborateur de réinitialiser son mot de passe.
2. **`Suspend` (bouton d'avertissement orange)** : gèle instantanément les accès du compte à la plateforme en cas de départ ou d'investigation de sécurité, tout en préservant l'historique complet de ses prompts.

---

## 4. Inviter un nouveau collaborateur

Pour intégrer un membre dans l'organisation :
1. Cliquez sur le bouton bleu **`+ Invite Member`** en haut à droite.
2. Saisissez son adresse email professionnelle.
3. Attribuez son rôle initial (*User* ou *Team Manager*).
4. Sélectionnez l'équipe et les espaces de travail auxquels il doit avoir accès.
5. Validez : le collaborateur reçoit une invitation sécurisée avec les consignes d'activation de son compte.
