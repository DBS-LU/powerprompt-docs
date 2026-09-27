---
title: "Test et évaluation multi-modèles"
description: "Tester vos prompts en direct, évaluer la qualité des réponses et comparer les performances entre fournisseurs IA."
---

La fonctionnalité de test de Power Prompt permet de valider le comportement d'un prompt dans des conditions réelles avant de le déployer ou de le partager largement avec votre équipe.

---

## 1. Préparer un test d'exécution

Avant de lancer l'exécution d'un prompt, vérifiez les prérequis suivants :
1. Un fournisseur d'IA compatible est configuré au niveau de l'organisation ou de l'équipe (OpenAI, Anthropic, Google ou passerelle compatible).
2. La clé API d'organisation ou d'équipe associée (propre ou héritée) est active et valide.
3. Le modèle cible est sélectionné (ex: GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro).
4. Les variables dynamiques `{{...}}` éventuelles sont renseignées avec des données de test cohérentes.
5. Les hyperparamètres (température, pénalités, longueur maximale) sont définis.

---

## 2. Lancer un test en direct

Pour exécuter un test :
1. Ouvrez la fiche du prompt dans votre espace de travail.
2. Basculez sur l'onglet **Tester**.
3. Sélectionnez le fournisseur IA et le modèle cible dans les listes déroulantes.
4. Remplissez les champs de variables dynamiques générés automatiquement.
5. Cliquez sur le bouton **Lancer le test**.
6. Consultez la réponse générée en temps réel, ainsi que la durée d'exécution (latence) et le volume de jetons consommés.

---

## 3. Comparer les résultats entre modèles IA

Power Prompt vous permet d'évaluer le comportement d'un même prompt face à plusieurs modèles de langage simultanément.

### Critères d'arbitrage comparatif :

| Fournisseur / Modèle | Temps de réponse | Qualité et fidélité aux consignes | Coût estimé par requête |
|---|---|---|---|
| **OpenAI (GPT-4o)** | Rapide | Élevée (structuration et raisonnement logique) | Variable selon le ratio entrée/sortie |
| **Anthropic (Claude 3.5 Sonnet)** | Moyen | Très élevée (nuances rédactionnelles, précision d'analyse) | Variable selon le volume de contexte |
| **Google (Gemini 1.5 Pro / Flash)** | Très rapide | Excellente sur les très longs contextes documentaires | Très économique sur les versions Flash |

### Pourquoi comparer les modèles ?
* **Optimisation des coûts :** Un modèle plus léger et économique (ex: Gemini Flash ou GPT-4o mini) peut suffire pour des tâches de classification ou de triage simple.
* **Respect du formatage :** Vérifier que les contraintes strictes (JSON, tableaux Markdown) sont scrupuleusement respectées quel que soit le fournisseur.
* **Résilience et souveraineté :** Identifier le modèle de secours optimal en cas d'indisponibilité temporaire d'un fournisseur ou selon les contraintes de localisation des données.
