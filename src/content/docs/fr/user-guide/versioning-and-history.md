---
title: "Versioning et historique des prompts"
description: "Création automatique de versions, comparateur visuel (Side-by-Side et Visual Diff), notes de version et restauration sécurisée."
---

Power Prompt garantit la traçabilité et la robustesse des prompts grâce à un système complet de gestion de versions. Chaque modification est enregistrée de façon immuable pour sécuriser le cycle de vie de vos prompts de production.

![Modal Comparer les versions (Side-by-Side et Visual Diff)](/images/compare-versions-interface.jpg)

---

## 1. Création de versions et gestion des brouillons

Power Prompt distingue le travail de rédaction en cours de la publication officielle :

* **Enregistrer (ou `Ctrl+S`)** : sauvegarde vos modifications sous forme de version **Brouillon** (*Draft* avec puce orange dans le volet droit). Ce brouillon reste strictement personnel et privé, sans incrémenter de version officielle et sans impacter les utilisateurs du prompt en production.
* **Publier la version (`Publish Version`)** : formalise vos modifications et génère automatiquement une nouvelle version incrémentée (`V1`, `V2`, `V3`). Le prompt passe au statut `• Publié` (badge vert) et devient la version officielle accessible aux collaborateurs. Cette action réinitialise le fil de commentaires pour la nouvelle version : les échanges de la version antérieure sont automatiquement archivés et demeurent consultables dans l'historique grâce au filtre de version.

Chaque version publiée conserve l'empreinte complète de l'état du prompt :
* **Horodatage exact** : date et heure précises de la publication.
* **Auteur** : identité du collaborateur ayant publié le changement.
* **Notes de version (Release Notes)** : texte explicatif décrivant les améliorations apportées (ex: *"Exemples ajoutés pour plus de contexte"*).
* **Contenu intégral** : instructions, rôles système, variables dynamiques et modèles d'exécution associés.
* **Fil de discussion dédié** : les échanges et commentaires de l'équipe restent fidèlement rattachés à cette révision dans l'historique.

---

## 2. Le comparateur visuel de versions (Compare versions)

Pour analyser précisément les écarts entre deux révisions avant un déploiement ou pour comprendre une régression, Power Prompt intègre un comparateur visuel accessible en un clic.

### Ouvrir le comparateur

1. Ouvrez le prompt souhaité en mode édition.
2. Dans le volet latéral droit, sous l'indicateur de version active (ex: badge vert `V2`), cliquez sur le bouton **`Compare versions`** (ou *Comparer les versions*).
3. La fenêtre modale **Compare versions** s'ouvre au centre de l'écran.

---

### Les deux modes d'affichage

Le comparateur propose deux modes de visualisation en onglets supérieurs :

* **Side-by-Side (Côte-à-côte)** : affiche la version actuelle dans la colonne gauche et la version historique sélectionnée dans la colonne droite. Idéal pour relire l'intégralité du texte en parallèle et vérifier la continuité des variables `{{variable}}`.
* **Visual Diff (Différentiel visuel)** : met en relief les ajouts (surlignés en vert), les suppressions (surlignées en rouge) et les modifications de caractères ligne par ligne.

---

### Sélecteur de version et Notes de version

Dans la colonne droite de la fenêtre modale :
* **Menu déroulant de version** : sélectionnez n'importe quelle version antérieure (`V1`, `V2`...). L'intitulé de la version s'affiche en en-tête (ex: `Version Name: Beta version`).
* **Bloc Release Notes** : affiche les notes de version respectives de la version actuelle et de l'ancienne version, garantissant une compréhension immédiate du contexte métier d'époque.
* **Horodatage de référence** : rappelle la date de création de l'ancienne version (ex: `15/08/2026`).

---

## 3. Restaurer une ancienne version (Rollback)

Si une mise à jour récente dégrade la fidélité des réponses générées ou introduit des comportements indésirables :

1. Dans la fenêtre modale de comparaison, sélectionnez la version saine dans la colonne de droite.
2. Cliquez sur le bouton bleu **`Rollback to this version`** (situé en bas à droite de la modale).
3. Power Prompt restaure immédiatement le contenu, les variables et les paramètres de cette version antérieure.

### Principe d'immuabilité et de traçabilité

La restauration n'écrase jamais l'historique : elle crée une **nouvelle version** reprenant le contenu de l'ancienne version choisie. La chaîne de traçabilité demeure ainsi continue et auditable à tout moment.
