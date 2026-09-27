---
title: "Vue d'ensemble de la plateforme"
description: "Introduction à Power Prompt, missions de la plateforme, types d'abonnements et concepts fondamentaux."
---

**Power Prompt** est une plateforme d'entreprise dédiée à l'adoption, à la gouvernance et à l'industrialisation de l'intelligence artificielle générative.

Elle permet aux utilisateurs, aux équipes et aux organisations de centraliser leurs connaissances IA, de gérer et améliorer leurs prompts, de standardiser les bonnes pratiques, de gouverner les usages et de déployer l'IA de manière cohérente et sécurisée à grande échelle.

La plateforme fournit un environnement unifié pour concevoir, organiser, tester, partager et suivre l'évolution des actifs IA de l'entreprise, tout en intégrant plusieurs fournisseurs de modèles et en garantissant la traçabilité des changements et des usages.

Power Prompt répond à un défi majeur rencontré par de nombreuses organisations : transformer des initiatives IA souvent dispersées, individuelles et difficiles à gouverner en un patrimoine d'entreprise structuré, collaboratif, mesurable et réutilisable.

Au-delà de la gestion des prompts, Power Prompt aide les organisations à capitaliser leur savoir-faire, accélérer l'adoption de l'IA, maîtriser les coûts d'usage et construire progressivement des processus, workflows et capacités IA pérennes.

---

## Types d'abonnements et publics concernés

Power Prompt s’adapte aux différents besoins d’usage à travers trois niveaux d’abonnements :

| Type d’abonnement | Public concerné | Configuration initiale |
|---|---|---|
| **Compte Personnel** (gratuit ou payant) | Utilisateur individuel | Espace de travail et groupe créés automatiquement par défaut |
| **Abonnement Team** | Équipe ou service avec plusieurs collaborateurs | Configuration initiale requise par un responsable d'équipe |
| **Abonnement Enterprise** | Organisation complète avec gouvernance avancée | Configuration initiale réalisée par un responsable d’organisation |

Les fonctionnalités disponibles peuvent varier selon le type d’abonnement, les droits attribués et les paramètres définis par l’organisation.

---

## Concepts clés de la plateforme

Comprendre l'articulation de ces cinq entités permet d'exploiter pleinement Power Prompt :

### 1. Organisation
Une **organisation** représente une entreprise, une entité juridique ou une structure cliente dans Power Prompt. Elle regroupe l'ensemble des équipes, des espaces de travail et des utilisateurs de l'entité.
* *Exemple :* Organisation : `ACME Consulting`

### 2. Équipe (Team)
Une **équipe** rassemble les collaborateurs d'un même périmètre opérationnel (service métier, département, projet transversal ou pôle d'expertise). Chaque équipe peut être associée à un ou plusieurs espaces de travail.
* *Exemples :* Équipes `Marketing`, `Produit`, `Support client`, `Ressources humaines`.

### 3. Espace de travail (Workspace)

Un **espace de travail** est l’environnement collaboratif dans lequel les utilisateurs et les équipes créent, organisent, testent, partagent et gouvernent leurs actifs IA.

Chaque espace de travail constitue un périmètre de collaboration indépendant et contient notamment :

- Des bibliothèques de prompts.
- Des catégories de classement.
- Des membres, rôles et permissions d'accès.
- Des tableaux de bord et indicateurs d’usage.

Un espace de travail permet de structurer les connaissances IA d’une équipe ou d’une organisation tout en assurant la sécurité, la collaboration et la traçabilité des activités.

### 4. Prompt

Un **prompt** est une instruction ou un ensemble de directives structurées destinées à être exécutées par un modèle d’intelligence artificielle générative.

Dans Power Prompt, un prompt peut notamment comporter :

- Un titre et une description.
- Un contenu rédigé en Markdown.
- Des variables et paramètres d’entrée.
- Jusqu’à quatre tags de classification.
- Une catégorie métier ou fonctionnelle.
- Des commentaires et fils de discussion collaboratifs.
- Un historique complet des versions et modifications.
- Un ou plusieurs modèles IA recommandés.
- Des paramètres d’exécution (température, longueur maximale de réponse, etc.).
- Des métriques d’utilisation et de performance.
- Des évaluations et retours des utilisateurs.

Chaque prompt constitue un actif IA réutilisable, maintenable et gouverné, pouvant être partagé, amélioré et exploité au sein de l’organisation.

### 5. Typologie des prompts et modèles de prompts

Power Prompt distingue deux grands types de prompts :

#### Prompt simple

Un **prompt simple** est composé exclusivement d'un contenu statique prêt à être exécuté immédiatement, sans nécessiter de saisie complémentaire.

Les prompts simples sont particulièrement adaptés aux demandes ponctuelles, aux consignes directes et aux requêtes récurrentes sans paramétrage variable.

#### Prompt paramétrable (Modèle de prompt)

Un **prompt paramétrable** (ou **modèle de prompt**) contient une trame fixe et une ou plusieurs variables dynamiques représentées entre doubles accolades `{{...}}`.

Exemple :

```text
Rédige un compte-rendu de réunion destiné à {{audience}} en mettant l'accent sur {{objectif}}.
```

Lors de l'exécution, Power Prompt génère automatiquement un formulaire permettant de renseigner chaque variable pour personnaliser le prompt sans altérer sa structure de référence.

---

## Cycle de vie d'un prompt dans Power Prompt

Power Prompt accompagne l'ensemble du cycle de vie d'un prompt, depuis sa conception jusqu'à son adoption à grande échelle au sein de l'organisation.

1. **Création et amélioration :** Rédigez vos prompts en Markdown, estimez leur consommation de jetons et améliorez leur qualité grâce aux fonctionnalités d'assistance et d'optimisation intégrées.
2. **Structuration et organisation :** Classez vos prompts dans des catégories thématiques, appliquez des tags de classification et construisez des bibliothèques de connaissances IA faciles à rechercher et à maintenir.
3. **Standardisation et réutilisation :** Transformez vos consignes en modèles de prompts réutilisables grâce aux variables dynamiques et standardisez les meilleures pratiques au sein des équipes.
4. **Test et validation :** Exécutez vos prompts sur différents modèles d'intelligence artificielle, comparez les résultats obtenus et identifiez les configurations les plus performantes pour chaque cas d'usage.
5. **Gestion des versions et traçabilité :** Suivez l'évolution complète de vos prompts grâce à l'historique des versions, comparez les modifications apportées et restaurez à tout moment une version antérieure.
6. **Collaboration et gouvernance :** Partagez les connaissances, échangez via les commentaires, recueillez les retours des utilisateurs et diffusez les prompts validés par l'organisation.
7. **Adoption opérationnelle :** Accédez rapidement à vos prompts depuis les bibliothèques personnelles ou l'extension navigateur afin de les utiliser au quotidien dans vos activités professionnelles.
8. **Analyse et amélioration continue :** Mesurez l'utilisation de vos prompts, identifiez les actifs les plus performants et capitalisez progressivement les meilleures pratiques de votre organisation.
