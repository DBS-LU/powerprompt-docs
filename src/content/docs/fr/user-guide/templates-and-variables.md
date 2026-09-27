---
title: "Variables dynamiques dans vos prompts"
description: "Transformer vos prompts en modèles réutilisables grâce aux variables dynamiques, formulaires de saisie et options de copie."
---

Les **variables dynamiques** permettent de transformer n'importe quelle consigne de travail en prompt paramétrable réutilisable par l'ensemble de vos collaborateurs. Elles reposent sur l'insertion de balises textuelles encadrées par des doubles accolades : `{{nom_de_variable}}`.

---

## 1. Déclarer une variable dans l'éditeur

Tout prompt rédigé ou modifié depuis **Mes prompts** peut intégrer une ou plusieurs variables dynamiques :

1. Dans l'éditeur de prompt (onglet **Write**), rédigez vos instructions habituelles.
2. Aux emplacements destinés à recevoir des informations variables, insérez le nom de la variable entre doubles accolades : `{{client}}`, `{{contexte}}`, `{{objectif}}`.
3. Vous pouvez également cliquer sur le bouton **Variables** situé sous l'éditeur pour faciliter l'insertion ou identifier les balises détectées dans le texte.

Dès que des doubles accolades sont présentes, Power Prompt reconnaît automatiquement la variable et prépare les formulaires associés.

---

## 2. Fonctionnement technique : un champ textuel polyvalent

D'un point de vue informatique, chaque variable définie dans Power Prompt est actuellement traitée comme un **champ textuel universel**. 

Même s'il s'agit techniquement d'une entrée texte sans typage strict, ce champ universel s'adapte à tous vos besoins opérationnels :

* **Donnée courte :** Renseigner un nom de personne, une marque, un intitulé de poste ou une consigne concise (ex: `{{audience}}`).
* **Valeur chiffrée ou métrique :** Indiquer un seuil, une limite de mots, un pourcentage ou un objectif chiffré (ex: `{{nombre_mots}}`).
* **Date ou période temporelle :** Préciser une date de livraison, un calendrier ou une échéance (ex: `{{date_limite}}`).
* **Bloc de texte volumineux :** Insérer un document source complet, un relevé d'incident, un email client ou un compte-rendu de réunion (ex: `{{document_source}}`).

---

## 3. Outils de copie rapide sous l'éditeur

Sous la zone de rédaction du prompt, deux boutons d'action rapide simplifient la manipulation des variables :

* **Copier avec Variables :** Copie le texte brut du prompt en conservant l'ensemble des balises `{{nom_de_variable}}`. Idéal pour partager la structure brute d'un prompt ou la documenter dans une autre application.
* **Copier avec Valeurs :** Remplace instantanément chaque variable par la valeur de test renseignée dans les champs de saisie, puis copie le résultat final dans le presse-papiers. Idéal pour injecter directement le prompt résolu dans une interface IA externe.

---

## 4. Exemple concret de prompt paramétrable

Voici un exemple d'instructions structurées intégrant plusieurs variables textuelles :

```markdown
Tu es un consultant expert en organisation et amélioration continue.

Contexte d'intervention :
L'entreprise {{nom_entreprise}} fait face à des difficultés sur son processus {{nom_processus}}.

Données transmises par l'équipe :
"""
{{donnees_observation}}
"""

Consignes d'analyse :
1. Identifie les trois principaux dysfonctionnements en moins de {{limite_mots}} mots.
2. Propose un plan d'action priorisé pour l'échéance du {{date_cible}}.
3. Adopte un style de rédaction {{ton_livrable}}.
```

---

## 5. Exécution et formulaire de saisie

Lorsque vous ou un membre de votre espace de travail souhaitez exécuter le prompt :

1. Cliquez sur **▶ Exécuter le Prompt** ou visualisez le prompt en mode consultation.
2. Power Prompt génère automatiquement un formulaire interactif présentant un champ de saisie pour chaque variable détectée.
3. Le collaborateur renseigne les informations demandées sans risque de modifier par inadvertance les consignes structurelles ou les garde-fous du prompt.
4. L'onglet **Preview** permet de vérifier le rendu finalisé du texte avant son envoi vers l'un des modèles d'IA connectés.
