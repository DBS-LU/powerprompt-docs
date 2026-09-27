---
title: "Gouvernance des modèles IA autorisés"
description: "Définir la liste blanche des modèles d'intelligence artificielle approuvés au sein de l'entreprise."
---


Pour garantir la conformité aux exigences réglementaires (**RGPD**, directive européenne **NIS2**, et **EU AI Act**), l'Administrateur définit la politique d'accès aux modèles de langage utilisables au sein de l'entreprise.

---

## 1. Principe de la Liste Blanche (Allowlist)

Dans Power Prompt, les utilisateurs et les managers ne peuvent sélectionner que des modèles préalablement validés et activés par l'administrateur :

* **Blocage du Shadow AI :** Aucun utilisateur ne peut connecter de modèle non homologué par la direction technique ou le RSSI.
* **Sélection granulaire des fournisseurs :** L'administrateur peut autoriser un fournisseur spécifique (ex: Azure OpenAI hébergé en Europe de l'Ouest) tout en interdisant formellement les API directes US grand public.
* **Support des modèles locaux souverains :** Possibilité de forcer l'usage exclusif de modèles open-weights auto-hébergés (vLLM, Ollama, TGI) pour les départements traitant des données critiques ou du secret d'affaires.

---

## 2. Gérer la liste des modèles IA autorisés

1. Rendez-vous dans **Administration > Modèles IA & Fournisseurs**.
2. La liste des modèles détectés s'affiche avec leur statut :
   * **Approuvé (Whitelisted) :** Disponible immédiatement dans le menu déroulant de tous les espaces de travail.
   * **Désactivé :** Totalement masqué et bloqué à l'exécution.
3. Pour chaque modèle approuvé, l'administrateur peut paramétrer :
   * **La fenêtre de contexte maximale (Context Window).**
   * **Le plafond de jetons par requête (Max Output Tokens).**
   * **L'interdiction de modèles non vérifiés** pour les environnements de production.
