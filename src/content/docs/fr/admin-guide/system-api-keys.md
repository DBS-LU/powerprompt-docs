---
title: "Clés API Système et modèles IA autorisés"
description: "Administration des clés API d'infrastructure centralisées et gouvernance de la liste blanche des modèles homologués."
---

Power Prompt distingue rigoureusement deux catégories d'identifiants d'inférence : les **clés d'organisation / d'équipe** (utilisées pour les tests des collaborateurs) et les **clés API Système** (gérées centralement pour alimenter les fonctionnalités intelligentes natives de la plateforme).

---

## 1. Rôle des clés API Système

Les **clés API Système** constituent le socle technique mutualisé de Power Prompt. Elles permettent d'alimenter les fonctionnalités intelligentes natives de la plateforme de manière transparente pour les utilisateurs :
1. **La fonction « Improve » dans l'édition d'un prompt :** Analyse et optimise un prompt en cours de rédaction directement depuis l'éditeur, en un clic.
2. **La fonction « Prompt Architect » dans le Prompt Lab :** Utilisée pour la création et la structuration d'un prompt complet à partir d'un besoin exprimé en langage naturel.
3. **La fonction « Prompt Improver » dans le Prompt Lab :** Utilisée pour analyser, restructurer, clarifier et renforcer un prompt existant avec des contrôles avancés.

Grâce à ces clés système gérées au niveau de l'infrastructure, l'expérience utilisateur reste fluide et opérationnelle dès l'ouverture du compte, sans nécessiter de clé personnelle.

---

## 2. Gouvernance des modèles IA autorisés (Whitelist)

Pour garantir la conformité réglementaire, la souveraineté des données et la maîtrise des coûts, les administrateurs définissent la **liste blanche des modèles d'IA homologués** pour l'organisation :

### Critères d'homologation d'un modèle :
* **Localisation du traitement des données :** Vérification du respect des zones géographiques autorisées (ex: Union Européenne pour le RGPD).
* **Politique de confidentialité du fournisseur :** Garantie formelle de non-entraînement des modèles sur les données client saisies dans les prompts.
* **Niveau de sécurité :** Chiffrement des flux et conformité aux standards de sécurité d'entreprise.
* **Ratio coût/performance :** Homologation des versions de modèles optimales selon les cas d'usage métiers.

---

## 3. Configuration et politique de renouvellement

1. Dans la console d'administration, ouvrez l'onglet **Clés Système & Modèles**.
2. Renseignez les clés API des fournisseurs centraux (OpenAI, Anthropic, Google).
3. Activez ou désactivez chaque modèle de manière unitaire selon les politiques d'entreprise.
4. Définissez des limites de débit (Rate Limits) et des plafonds mensuels d'infrastructure.
5. Planifiez une **rotation périodique des clés** (recommandée tous les 90 jours) pour respecter les meilleures pratiques de cybersécurité.
