---
title: "Bibliothèque, catégories et tags"
description: "Structurer, classer, filtrer et déplacer vos prompts dans l'espace Mes prompts."
---

La section **Mes prompts** constitue votre bibliothèque personnelle au sein de votre espace de travail. Elle centralise l'ensemble de vos prompts, classés par catégories (dossiers) et balisés par des tags pour éviter la dispersion et garantir un accès immédiat à vos actifs IA.

---

## 1. Organisation multi-niveaux

Dans Power Prompt, la recherche et l'organisation d'un prompt s'articulent autour de plusieurs axes complémentaires :

* **Espace de travail :** Périmètre de collaboration de l'équipe (ex: *Prompts Support*, *Prompts Marketing*).
* **Catégorie :** Arborescence thématique ou fonctionnelle structurée (ex: *Triage*, *Analyse de Données*, *Rédaction Web*).
* **Statut :** Visibilité du prompt (*Brouillon* personnel ou *Actif* partagé).
* **Tags :** Mots-clés transversaux facilitant le filtrage rapide.
* **Auteur :** Identité du créateur ou des contributeurs.
* **Modèle IA compatible :** Préconisation d'inférence (OpenAI, Anthropic, Google).
* **Horodatage :** Dates de création et de dernière modification.

---

## 2. Structuration par catégories

Dans Power Prompt, les **catégories** constituent les répertoires logiques permettant de classer et d'organiser vos prompts selon vos processus métier. Elles fonctionnent de la même manière que des dossiers de fichiers.

### Créer une catégorie

1. Rendez-vous dans la section **Mes prompts** de votre espace de travail.
2. Cliquez sur **Nouvelle catégorie** (ou sur l'icône `+`).
3. Renseignez :
   * **Nom :** Intitulé clair (ex: *Support Client*, *Conformité RGPD*, *Rédaction B2B*).
   * **Description :** Précisez le périmètre et la finalité des prompts classés ici.
   * **Icône ou couleur de repérage :** Pour une identification visuelle immédiate.
4. Enregistrez : la catégorie apparaît instantanément dans l'arborescence de votre espace.

Une fois dans une catégorie, le titre affiche le nombre total de prompts qu'elle contient (ex: *Gestion de projet (11)*) et une icône d'édition (crayon) permet de modifier son nom ou sa description à tout moment.

---

## 3. Modes d'affichage et actions rapides

L'interface de consultation propose deux modes d'affichage et des actions rapides directement sur les fiches :

### Modes d'affichage (Grille et Liste)

En haut à droite de l'espace de consultation, deux icônes permettent de choisir votre affichage préférentiel :
* **Vue Grille (par défaut) :** Affiche les prompts sous forme de cartes synthétiques. Idéale pour parcourir visuellement vos consignes, consulter leurs descriptions et identifier rapidement leurs statuts et tags.
* **Vue Liste :** Affiche les prompts sous forme de tableau condensé, pratique pour balayer rapidement un inventaire volumineux.

### Actions rapides sur les cartes de prompts

Chaque carte de prompt en vue grille offre des raccourcis opérationnels :
* **Case à cocher (en haut à droite) :** Permet de sélectionner un ou plusieurs prompts afin d'activer le bouton **Déplacer le Prompt**.
* **Badge de statut :** Indique en un coup d'œil si le prompt est en mode **Brouillon** (rouge) ou **Actif** (vert).
* **Tags associés :** Affiche les premiers tags sous forme de badges bleus, complétés par un indicateur (`+1`, `+2`) si le prompt comporte davantage de mots-clés.
* **Favori / Étoile :** Cliquez sur l'icône étoile au bas de la carte pour marquer le prompt comme favori personnel. L'étoile devient dorée pour le repérer immédiatement.
* **Copier le prompt (icône deux feuilles) :** Cliquez sur cette icône pour copier directement l'intégralité du contenu du prompt dans votre presse-papier, prêt à être collé et utilisé dans une autre application (ChatGPT, Claude, interface web externe, etc.).

---

## 4. Ajout et gestion des tags (Mots-clés)

Les tags offrent une dimension de recherche transversale indépendante de la hiérarchie des catégories.

### La règle des 4 tags maximum

Afin de préserver la lisibilité de la bibliothèque et d'éviter l'encombrement par des dizaines de mots-clés hétérogènes, **Power Prompt autorise jusqu'à 4 tags par prompt**.

### Exemples de tags recommandés :

* `marketing`
* `support`
* `resume`
* `classification`
* `traduction`
* `legal`
* `production`

Choisissez des termes standards partagés par votre équipe pour maximiser l'efficacité des recherches.

---

## 5. Déplacer un ou plusieurs prompts

Le déplacement de prompts s'effectue directement depuis la vue d'une catégorie, sans ouvrir la fiche détaillée d'un prompt :

### Procédure de déplacement

1. Rendez-vous dans la catégorie contenant les prompts à déplacer.
2. Sur la carte de chaque prompt, cochez la case située en **haut à droite**. Vous pouvez cocher un seul prompt ou en sélectionner plusieurs pour un déplacement groupé.
3. Dès qu'au moins une case est cochée, le bouton **Déplacer le Prompt** devient actif.
4. Cliquez sur **Déplacer le Prompt** et sélectionnez la catégorie de destination.
5. Validez pour finaliser le déplacement : les prompts sélectionnés sont immédiatement reclassés.

> **Règle de sécurité et gouvernance :** Le déplacement d'un ou plusieurs prompts s'effectue exclusivement **au sein du même espace de travail**. Pour des raisons strictes de gouvernance, de cloisonnement des accès et de sécurité des données, il n'est pas possible de transférer un prompt vers un autre espace de travail via cette fonction.

---

## 6. Barre d'outils de recherche et filtres

Power Prompt propose une barre d'outils complète pour retrouver et filtrer instantanément vos prompts :

### Les 5 filtres disponibles

1. **Rechercher... (Recherche plein texte) :** Analyse simultanément les titres, descriptions, le contenu Markdown complet et les métadonnées.
2. **Date :** Sélecteur calendrier pour filtrer par date de création ou de dernière révision.
3. **Statut (Brouillon vs Actif) :** Filtre selon le niveau de visibilité et de maturité du prompt :
   * **Brouillon :** Version strictement personnelle à l'utilisateur. Les autres membres de l'équipe ou de l'espace de travail ne voient jamais les brouillons de leurs collègues. Ce mode garantit une totale confidentialité durant la phase de conception et de test.
   * **Actif :** Version finalisée et officielle. Le prompt est visible et utilisable par l'ensemble des membres de l'équipe et de l'espace de travail.
4. **IA/Modèle :** Isole les prompts optimisés ou recommandés pour un fournisseur ou un modèle d'IA particulier (OpenAI, Anthropic, Google, etc.).
5. **Tags :** Filtre déroulant permettant de sélectionner un ou plusieurs mots-clés thématiques.
