---
title: "Création et gestion des prompts"
description: "Rédiger des prompts professionnels avec l'éditeur Markdown, métadonnées, limitation à 20 000 caractères, variables et cycle de publication."
---

La création et l'édition de prompts dans Power Prompt allient clarté rédactionnelle, métadonnées structurées, assistance intelligente à l'optimisation et contrôle rigoureux du cycle de vie.

![Interface de création et d'édition de prompt dans Power Prompt](/images/create-prompt-editor-interface.jpg)

---

## 1. Créer ou modifier un prompt

L'écran d'édition est identique à l'écran de création d'un prompt :

### Procédure de création

1. Rendez-vous dans la section **Mes prompts** de votre espace de travail.
2. Cliquez sur le bouton bleu **Créer un prompt** (situé en haut à droite).
3. Renseignez les informations de la fiche :
   * **Titre du prompt \*** : Intitulé explicite décrivant l'action métier ciblée (ex: *Test simple pour réponse LLM*).
   * **Description \*** : Contexte d'utilisation, finalité et cas d'usage préconisés.
   * **Contenu du Prompt \*** : Corps textuel des consignes rédigé en Markdown.
   * **Tags** : Mots-clés de repérage transversaux (jusqu'à 4 tags par prompt, ex: `support`, `incident`, `qualite`).
4. Choisissez l'action d'enregistrement :
   * **Enregistrer (ou raccourci `Ctrl+S`)** : Enregistre le prompt sous forme de version **Brouillon**. Cette version reste strictement personnelle et privée, invisible pour les autres membres de l'espace de travail.
   * **Publier la version** : Formalise la version, la rend **Actif** (visible et utilisable par l'ensemble du groupe / espace de travail) et incrémente le numéro officiel de version (ex: passage à `V1`, `V2`, etc.).

---

## 2. Structure et métadonnées associées

Chaque prompt enregistré dans Power Prompt conserve un jeu structuré de métadonnées :

| Métadonnée | Description | Rôle opérationnel |
|---|---|---|
| **Titre** | Intitulé court et percutant | Identification immédiate dans Mes prompts et l'extension navigateur |
| **Description** | Contexte et consignes d'usage | Guide le collaborateur sur la bonne utilisation du prompt |
| **Statut** | Brouillon (personnel et privé) ou Publié / Actif (partagé) | Gestion de la confidentialité et du cycle de diffusion |
| **Contenu** | Corps textuel en syntaxe Markdown (jusqu'à 20 000 caractères) | Consignes exécutées par le modèle d'IA |
| **Tags** | Mots-clés thématiques (maximum 4) | Filtrage transversal rapide |
| **Catégorie** | Dossier métier de classement | Structuration logique de l'espace de travail |
| **Modèle IA cible** | Fournisseur / modèle préconisé via *Modèles d'exécution* | Optimisation des performances et des coûts |
| **Auteur** | Créateur et derniers éditeurs | Traçabilité des contributions |
| **Versions** | Numéro de version incrémenté (ex: V1, V2, V4) | Audit, historique et possibilité de rollback |

---

## 3. L'éditeur de prompts professionnel

L'éditeur offre un environnement de travail ergonomique et précis pour concevoir et tester vos consignes :

### Onglets de rédaction : Write et Preview

Au-dessus de la zone de saisie du contenu, deux onglets permettent de contrôler votre texte :
* **`Write`** : Saisie libre du texte et des balises Markdown (titres `#`, listes, blocs de code, tableaux).
* **`Preview`** : Rendu visuel immédiat du prompt mis en forme tel qu'il sera interprété.

### Compteur et limite de caractères

Un compteur situé en haut à droite du bloc de contenu affiche la volumétrie en temps réel (ex: `16 / 20,000`). La taille maximale d'un prompt est fixée à **20 000 caractères**.

### Barre d'outils d'ingénierie sous l'éditeur

Sous la zone de texte, 5 boutons d'action spécialisés facilitent la manipulation du prompt :
1. **`Améliorer le prompt`** : Lance l'optimisation rapide assistée par IA directement dans l'éditeur.
2. **`Variables`** (`{ }`) : Ouvre l'interface de détection et de configuration des variables dynamiques `{{nom_variable}}`.
3. **`Copier avec Variables`** : Copie l'intégralité du prompt dans le presse-papier en conservant la syntaxe des balises `{{...}}`.
4. **`Copier avec Valeurs`** : Copie le prompt dans le presse-papier en injectant automatiquement les valeurs réelles de test attribuées aux variables.
5. **`Modèles d'exécution`** (`i`) : Permet de préconiser ou configurer le modèle d'IA le plus adapté à l'exécution de la consigne.

---

## 4. Volet latéral droit : Statut, Exécution, Versions et Commentaires

La colonne latérale droite de l'éditeur regroupe les outils de pilotage opérationnel du prompt :

### Statut du prompt et exécution directe

* **Indicateur de statut** : Badge indiquant l'état actuel (`• Publié` en vert ou `Brouillon`).
* **Indicateur de modifications** : Puce orange signalant les modifications non enregistrées, avec rappel du raccourci `Ctrl+S`.
* **Bouton `Publier la version`** : Déploie officiellement la nouvelle version pour l'équipe.
* **Bouton `▶ Exécuter le Prompt`** : Permet de tester et d'exécuter immédiatement le prompt sur le modèle connecté, sans quitter l'écran d'édition.

### Version actuelle et comparateur

* Affiche le numéro de version actif (ex: badge vert `V4`).
* Le bouton **`Comparer les versions`** ouvre le comparateur visuel côte-à-côte (diff) pour inspecter les écarts ligne par ligne entre deux versions.

### Commentaires et collaboration contextuelle

* **Fil de discussion intégré** : Permet aux membres de l'équipe de poster des remarques, questions ou suggestions.
* **Filtre de version** : Le menu déroulant `Version actuelle ▾` permet d'isoler les commentaires rattachés à la révision en cours.
* **Ancrage temporel** : Chaque message affiche un badge précisant la version sur laquelle il a été formulé (ex: `Draft of V3`), garantissant la continuité des échanges.

---

## 5. Améliorer la qualité de vos prompts

Power Prompt propose deux mécanismes complémentaires pour améliorer vos prompts :

- **Améliorer le prompt** : amélioration rapide directement depuis l'éditeur.
- **Prompt Improver** : optimisation avancée disponible dans le Prompt Lab.

Ces deux fonctionnalités utilisent l'intelligence artificielle mais répondent à des besoins différents.

---

### 5.1 Améliorer le prompt

La fonction **Améliorer le prompt** permet d'optimiser instantanément un prompt en cours de rédaction sans quitter l'éditeur.

#### Pourquoi utiliser cette fonctionnalité ?

- Clarifier des consignes ambiguës ou incomplètes.
- Structurer automatiquement le prompt.
- Renforcer la précision des instructions.
- Ajouter des contraintes et garde-fous pertinents.
- Améliorer la qualité et la cohérence des réponses générées.

#### Comment l'utiliser ?

1. Rédigez votre prompt dans l'éditeur.
2. Cliquez sur **Améliorer le prompt**.
3. Power Prompt analyse votre texte et génère une version optimisée.
4. Comparez la proposition avec votre version initiale.
5. Cliquez sur **Appliquer** pour remplacer le contenu actuel ou poursuivez vos modifications manuellement.

> Cette fonctionnalité est recommandée pour obtenir rapidement un prompt plus performant en un seul clic.

---

### 5.2 Utiliser le Prompt Improver

Le **Prompt Improver** est un outil avancé accessible depuis le **Prompt Lab**. Il permet d'optimiser, restructurer et enrichir un prompt avec un niveau de contrôle plus élevé.

#### Pourquoi utiliser le Prompt Improver ?

- Optimiser un prompt selon des objectifs spécifiques.
- Améliorer la structure, la clarté ou la précision du contenu.
- Ajouter des contraintes métier avancées.
- Transformer un prompt statique en modèle de prompt réutilisable avec des variables dynamiques `{{variable}}`.
- Générer et comparer plusieurs variantes d'un même prompt.
- Adapter un prompt à un cas d'usage, un domaine ou un public particulier.

#### Comment l'utiliser ?

1. Ouvrez le **Prompt Lab**.
2. Lancez l'outil **Prompt Improver**.
3. Saisissez ou importez le prompt à optimiser.
4. Configurez les options d'amélioration souhaitées.
5. Exécutez l'analyse.
6. Comparez les propositions générées et retenez la version la plus adaptée à votre besoin.

> Le Prompt Improver est destiné aux utilisateurs souhaitant aller au-delà de l'amélioration automatique et bénéficier d'un environnement dédié à l'ingénierie de prompt.

---

### 5.3 Quelle fonctionnalité choisir ?

| Besoin | Fonction recommandée |
|---|---|
| Améliorer rapidement un prompt en cours de rédaction | **Améliorer le prompt** |
| Obtenir une version optimisée en un clic | **Améliorer le prompt** |
| Contrôler précisément le processus d'amélioration | **Prompt Improver** |
| Créer plusieurs variantes d'un prompt | **Prompt Improver** |
| Transformer un prompt en modèle de prompt paramétrable | **Prompt Improver** |
| Réaliser un travail avancé d'ingénierie de prompt | **Prompt Improver** |

> **Améliorer le prompt** est conçu pour les optimisations rapides du quotidien, tandis que **Prompt Improver** fournit un atelier d'optimisation avancée pour les utilisateurs souhaitant concevoir et perfectionner leurs prompts de manière plus approfondie. Pour le guide complet du laboratoire et de ses deux modes, consultez la page dédiée : [Prompt Lab : Architect & Improver](/fr/user-guide/prompt-lab/).
