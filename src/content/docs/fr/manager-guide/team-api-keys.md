---
title: "Intégrations IA et gestion des clés API"
description: "Administrer les clés API d'organisation et d'équipe, gérer l'héritage des clés, suivre les coûts et superviser les fournisseurs d'IA."
---

Pour permettre aux utilisateurs de tester et d'exécuter leurs prompts, Power Prompt intègre une console centralisée de gouvernance des clés API. Accessible depuis l'onglet **API Keys** du menu **Organisation** (section *Analyses* de la barre latérale), cette interface permet aux gestionnaires de superviser les raccordements aux modèles de langage, d'auditer la consommation et de piloter les droits d'accès.

![Gestion des clés API dans le menu Organisation](/images/manager-api-keys-interface.jpg)

---

## 1. La console de gestion des clés

L'écran s'articule autour d'une barre de filtrage multi-critères, d'un tableau récapitulatif des identifiants et d'un volet d'inspection en temps réel.

### Barre d'outils et filtres de recherche

Au-dessus du tableau, cinq contrôles permettent d'isoler rapidement les clés recherchées :
* **Barre de recherche (`Search...`)** : recherche textuelle immédiate par nom ou fragment.
* **Provider (Fournisseur)** : filtre sur un fournisseur spécifique (ex: *OpenRouter*, *Anthropic*, *Google*, *Mistral AI*, *OpenAI*).
* **Scope (Périmètre)** : filtre par niveau de rattachement (*Organisation* ou *Équipe*).
* **Team (Équipe)** : sélection d'une équipe précise de l'organisation.
* **Status (Statut)** : filtrage selon l'état opérationnel (*Active*, *Inactive*).
* **Bouton `+ Add`** : ouvre le formulaire de raccordement d'une nouvelle clé API.

---

## 2. Le tableau des clés et le principe d'héritage

Le tableau central liste les identifiants configurés avec leurs attributs de gouvernance :

| Colonne | Description | Rôle opérationnel |
|---|---|---|
| **PROVIDER** | Logo et nom du fournisseur IA | Identification visuelle immédiate du service raccordé. |
| **TARGET SCOPE** | Entité cible affectée | Périmètre d'application : organisation racine (*Demo Tenant*) ou équipe dédiée (*Demo Team*). |
| **EFFECTIVE KEY** | Nature et provenance de la clé | Distingue une clé propre d'organisation (`ORG KEY`) d'une clé automatiquement héritée (`INHERITED (ORG KEY)`). |
| **STATUS** | Badge d'état opérationnel | Indique la disponibilité du service (`Active` en vert). |
| **LAST ROTATED** | Horodatage de rotation | Date et heure du dernier renouvellement de la clé. |
| **ACTIONS** | 4 boutons d'action rapide | Pilotage direct : suspension, édition, vérification et révocation. |

---

### Le mécanisme d'héritage des clés (Key Inheritance)

Power Prompt simplifie l'administration grâce à l'héritage automatique des clés :
* **Clé d'organisation (`ORG KEY` en violet)** : configurée au niveau racine du tenant de l'organisation. Elle sert de socle commun à l'ensemble de l'entreprise.
* **Clé héritée (`INHERITED (ORG KEY)` en vert)** : les équipes rattachées héritent par défaut des clés d'organisation sans nécessiter de configuration redondante.
* **Surcharge par équipe** : si une équipe dispose de son propre budget ou d'accords spécifiques, le manager peut configurer une clé propre qui se substituera à la clé héritée.

---

### Actions rapides d'administration (ACTIONS)

Chaque ligne du tableau dispose de quatre icônes d'action :
1. **Activer / Mettre en veille (icône Power)** : suspend temporairement les requêtes d'une clé sans détruire sa configuration.
2. **Éditer (icône Crayon)** : met à jour le secret ou modifie le périmètre d'affectation.
3. **Tester et synchroniser (icône Refresh)** : exécute un test de connectivité en direct auprès de l'API distante et actualise le statut de vérification (*Last Checked*).
4. **Supprimer (icône Corbeille)** : révoque définitivement la clé du système.

---

## 3. Le volet d'inspection de clé (Panneau latéral droit)

Le clic sur une ligne du tableau ouvre une fiche détaillée dans le panneau droit, segmentée en deux volets :

### Détails de configuration (CONFIGURATION DETAILS)

* **Scope** : entité juridique ou équipe bénéficiaire de la clé.
* **Masked Key** : affichage masqué respectant les normes de sécurité (ex: `*********84756`), préservant les derniers caractères pour vérification sans dévoiler le secret.
* **Last Checked** : date et heure de la dernière validation de fonctionnement réussie.

---

### Consommation et métriques (USAGE - LAST 30 DAYS)

Ce bloc restitue la télémétrie d'usage sur les 30 derniers jours pour la clé sélectionnée :
* **Lien `Analytics ↗`** : renvoie directement vers le tableau de bord d'analyse pour un examen approfondi de la consommation.
* **Invocations** : compteur du nombre d'exécutions et de tests lancés avec cette clé (ex: `52 / 30 Days`).
* **Estimated Cost** : montant financier estimé consommé sur la période (ex: `€0.0308 EUR`).
* **Success Rate** : taux de succès des appels API (ex: `100% Operational` en vert).
* **Last Active** : horodatage exact de la dernière requête d'inférence exécutée par un collaborateur.

---

## 4. Fournisseurs d'IA pris en charge

La plateforme gère nativement les principaux fournisseurs et passerelles du marché :
* **OpenRouter** : passerelle universelle donnant accès à une vaste gamme de modèles avec routage dynamique et optimisation des coûts.
* **Anthropic** : intégration directe des modèles Claude (Claude 3.5 Sonnet, Claude 3.5 Haiku, Claude 3 Opus).
* **Google** : intégration des modèles Gemini (Gemini 1.5 Pro, Gemini 1.5 Flash, Gemini 2.0).
* **Mistral AI** : intégration des modèles souverains européens (Mistral Large, Codestral, Pixtral).
* **OpenAI** : intégration des familles GPT-4o, GPT-4o mini et des modèles de raisonnement avancé (o1, o3-mini).
* **Passerelles compatibles et modèles locaux** : raccordement d'endpoints privés compatibles OpenAI (ex: vLLM, Ollama, LiteLLM) pour les déploiements souverains ou On-Premise.

---

## 5. Bonnes pratiques de sécurité et renouvellement

* **Chiffrement AES-256** : toutes les clés stockées sont chiffrées au repos dans la base de données.
* **Masquage strict** : la clé complète n'est jamais exposée dans le navigateur après sa saisie initiale.
* **Rotation régulière** : surveillez la colonne `LAST ROTATED` et procédez à un renouvellement périodique des clés (recommandé tous les 90 jours).
