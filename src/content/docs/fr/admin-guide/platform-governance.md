---
title: "Gouvernance de plateforme et multi-tenancy"
description: "Administration globale des organisations, réassignation des utilisateurs et supervision système (réservé Enterprise et On-Premise)."
---

Le rôle d'**Administrateur plateforme** dispose des privilèges suprêmes sur l'ensemble du système Power Prompt. Cette fonction est strictement réservée aux administrateurs informatiques des instances hébergées en mode On-Premise et aux gestionnaires d'infrastructure dédiés.

---

## 1. Périmètre de l'administrateur plateforme

L'administrateur plateforme supervise l'infrastructure logicielle et les entités clientes au plus haut niveau :
* **Gestion multi-organisations (Multi-Tenancy) :** Créer, suspendre, archiver ou reconfigurer les organisations clientes hébergées sur l'instance.
* **Réassignation globale :** Déplacer des utilisateurs ou des équipes entre différentes organisations lors de réorganisations d'entreprise.
* **Gestion des clés API Système :** Provisionner et maintenir les clés d'infrastructure mutualisées alimentant les services centraux.
* **Liste blanche des modèles autorisés :** Figer les fournisseurs et modèles d'IA homologués au niveau du système complet.
* **Supervision de la sécurité globale :** Contrôler l'intégrité de la base de données, les journaux d'audit et les flux réseau.

---

## 2. Administration des organisations (Tenants)

Dans les déploiements de grande envergure regroupant plusieurs filiales ou entités juridiques :
1. Accédez au volet **Organisations** de la console centrale.
2. Pour chaque organisation cliente, vous pouvez :
   * Définir le quota maximal d'utilisateurs et d'espaces de travail autorisés.
   * Assigner le ou les responsables d'organisation initiaux.
   * Restreindre les fournisseurs IA accessibles pour respecter les accords de conformité locaux.
   * Superviser la volumétrie globale de prompts stockés et de jetons consommés.

---

## 3. Réassignation et gestion des utilisateurs transversaux

En cas de mobilité interne ou de restructuration :
* **Transfert d'utilisateur :** L'administrateur plateforme peut transférer un profil collaborateur vers une autre organisation tout en auditant ses droits antérieurs.
* **Réassignation d'équipe :** Une équipe complète peut être réassociée à une entité parente différente sans rompre la structure de ses espaces de travail ni ses versions de prompts.

---

## 4. Supervision de l'intégrité et disponibilité

Depuis le tableau de bord d'administration système :
* **Surveillance des micro-services :** Statut en temps réel du backend d'API, de la base PostgreSQL 17 et du reverse proxy SSL.
* **Contrôle des journaux système :** Détection précoce d'erreurs d'infrastructure, de ralentissements réseau ou d'anomalies de latence sur les inférences IA.
