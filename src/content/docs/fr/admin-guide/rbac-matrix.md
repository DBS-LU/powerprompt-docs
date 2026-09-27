---
title: "Matrice des rôles et permissions RBAC"
description: "Tableau exhaustif des privilèges et droits d'accès par rôle utilisateur dans Power Prompt."
---

Power Prompt implémente un contrôle d'accès basé sur les rôles (Role-Based Access Control) garantissant le respect strict du principe de moindre privilège.

---

## Matrice complète des droits d'accès

| Domaine fonctionnel | Action / Privilège | Administrateur plateforme (`Platform Admin`) | Responsable d’organisation (`Org Manager`) | Responsable d'équipe (`Team Manager`) | Utilisateur standard (`User`) |
|---|---|:---:|:---:|:---:|:---:|
| **Organisations & Tenants** | Créer / modifier des organisations | Oui | Non | Non | Non |
| | Déplacer des équipes / utilisateurs entre organisations | Oui | Non | Non | Non |
| **Utilisateurs & Équipes** | Inviter de nouveaux utilisateurs | Oui | Oui | Oui (dans son équipe) | Non |
| | Créer et structurer les équipes | Oui | Oui | Non | Non |
| | Assigner des membres aux équipes | Oui | Oui | Oui (sur son périmètre) | Non |
| **Espaces de travail** | Créer et provisionner des espaces de travail | Oui | Oui | Oui | Non |
| | Configurer les catégories et règles d'un espace | Oui | Oui | Oui | Non |
| | Définir les droits des membres au sein d'un espace | Oui | Oui | Oui | Non |
| **Ingénierie de Prompts** | Créer et modifier des prompts | Oui | Oui | Oui | Oui |
| | Utiliser la fonction d'assistance « Improve » | Oui | Oui | Oui | Oui |
| | Déplacer des prompts (unitaire ou par lot) | Oui | Oui | Oui | Oui |
| | Valider / approuver des prompts d'entreprise | Oui | Oui | Oui | Non |
| **Versioning & Audit** | Consulter l'historique et le comparateur visuel (Diff) | Oui | Oui | Oui | Oui |
| | Restaurer une version antérieure | Oui | Oui | Oui | Oui |
| **Tests & Évaluation** | Tester des prompts face aux modèles IA autorisés | Oui | Oui | Oui | Oui |
| | Comparer les réponses entre plusieurs modèles | Oui | Oui | Oui | Oui |
| **Collaboration** | Déposer des commentaires | Oui | Oui | Oui | Oui |
| **Gouvernance & Clés** | Gérer les clés API Système mutualisées | Oui | Non | Non | Non |
| | Gérer la liste blanche des modèles IA autorisés | Oui | Non | Non | Non |
| | Configurer les clés API d'organisation | Oui | Oui | Non | Non |
| | Configurer les clés API d'équipe | Oui | Oui | Oui | Non |
| **Analyses & Conformité** | Consulter les tableaux de bord et coûts | Oui (global) | Oui (organisation) | Oui (son équipe) | Non |
| | Paramétrer les alertes budgétaires | Oui | Oui | Non | Non |
| | Consulter les journaux d'audit de sécurité | Oui | Oui | Non | Non |
| | Exporter des rapports de gouvernance | Oui | Oui | Oui | Non |

---

## Règles d'attribution et bonnes pratiques

* **Principe du moindre privilège :** Attribuez par défaut le rôle d'**Utilisateur standard (`User`)** à tout nouveau collaborateur.
* **Ségrégation des tâches administratives :** Réservez le rôle de Responsable d'organisation (`Org Manager`) à un nombre très restreint de référents désignés.
* **Revue périodique des accès :** Procédez à un contrôle trimestriel des affectations d'équipes et des droits administrateurs.
