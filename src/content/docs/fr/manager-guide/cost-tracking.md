---
title: "Analyses, surveillance des coûts et télémétrie IA"
description: "Piloter les indicateurs FinOps, analyser la consommation par modèle, ventiler les coûts et exporter les rapports d'usage."
---

Le module **Analyses** (*Analytics*), accessible sous la section **Analyses** (*Insights*) de la barre latérale, offre aux responsables d'organisation et d'équipe une observabilité complète sur les dépenses d'inférence, la consommation de jetons et l'adoption opérationnelle des modèles de langage (LLM).

![Tableau de bord Overview du menu Analytiques](/images/manager-analytics-interface.jpg)

---

## 1. Organisation du module Analytiques

L'en-tête du module propose cinq onglets thématiques spécialisés ainsi qu'un bouton d'exportation globale :

* **Overview (Vue d'ensemble)** : tableau de bord synthétique réunissant les indicateurs de performance clés (KPIs), la consommation par modèle, la ventilation des coûts et le classement des clés API les plus actives.
* **AI Usage (Usage des modèles)** : analyse granulaire approfondie de la volumétrie de jetons et des courbes d'inférence par modèle et par période temporelle.
* **AI Strategy (Stratégie IA)** : gouvernance et politique d'orientation des modèles, seuils d'arbitrage et adéquation des modèles aux cas d'usage métiers.
* **Activity Logs (Journaux d'activité)** : traçabilité chronologique exhaustive des requêtes d'inférence et des statuts d'exécution.
* **API Keys (Analytique des clés)** : ventilation budgétaire détaillée par identifiant d'inférence et par équipe.
* **Bouton `Export CSV`** : téléchargement immédiat des métriques pour le contrôle de gestion et la facturation interne.

---

## 2. Les quatre indicateurs directeurs (KPIs de tête)

Quatre cartes d'indicateurs synthétisent en temps réel l'activité sur la période observée :

| Indicateur | Valeur d'exemple | Signification opérationnelle |
|---|---|---|
| **PROMPT EXECUTIONS** | `544` | Volume cumulé d'appels et d'exécutions de prompts traités par la plateforme. |
| **DAILY TOKEN USAGE** | `779,811` | Volume total de jetons traités au cours de la journée (entrée et sortie confondues). |
| **COST** | `€2.8351` | Dépense financière cumulée sur la période observée en devise de référence. |
| **COST / 1M TOKENS** | `€3.6357` | Coût moyen unitaire par million de jetons. Métrique de référence FinOps permettant de comparer l'efficacité économique globale de vos prompts. |

---

## 3. Analyse de consommation par modèle (Model Usage)

Le tableau central **Model Usage** détaille les performances et les coûts imputés à chaque modèle d'IA en production :

* **Colonnes de suivi** :
  * `ACTIVE AI MODELS` : identifiant technique précis du modèle (ex: `claude-3-5-sonnet-20241022`, `gpt-4o`, `mistral-large-2407`, `gemini-1.5-pro`, `claude-3-haiku-20240307`, `gpt-4o-mini`, `meta-llama/llama-3.1-70b-instruct`, `gemini-1.5-flash`).
  * `PROMPT EXECUTIONS` : nombre de requêtes traitées par ce modèle.
  * `DAILY TOKEN USAGE` : jetons consommés par ce modèle spécifique.
  * `COST` : coût financier total généré.
* **Lien `View Details >`** : renvoie directement vers l'onglet spécialisé **AI Usage** pour visualiser l'historique et les tendances par modèle.

---

## 4. Ventilation des coûts (Cost Breakdown)

Le bloc supérieur droit décompose la structure financière des requêtes selon trois composantes techniques :

* **Input Cost (Coût d'entrée)** : dépense liée aux jetons injectés dans le prompt (instructions système, contexte et variables). Représente généralement 30% à 45% de la dépense globale (ex: *40% / €1.1341*).
* **Output Cost (Coût de sortie)** : dépense liée aux jetons générés par le modèle lors de sa réponse. Ce coût unitaire étant généralement plus élevé que l'entrée, il représente souvent la majorité de la dépense (ex: *60% / €1.7011*).
* **Prompt Cache Cost (Économie de cache)** : mesure de l'impact financier de la mise en cache des invites (*Prompt Caching* sur Claude et OpenAI). Lorsqu'un prompt système volumineux est réutilisé en boucle, la lecture depuis le cache réduit la dépense de 50% à 90% sur les jetons mis en mémoire.

---

## 5. Classement des clés API (Top API Keys)

Le bloc inférieur droit classe les clés d'inférence les plus sollicitées par les équipes :
* **Colonnes** : libellé de la clé (`API KEYS`, ex: *Demo Team - Anthropic*, *Demo Team - OpenAI*, *Demo Team - Mistral*), nombre d'exécutions (`PROMPT EXECUTIONS`) et dépense cumulée (`COST`).
* **Lien `View Details >`** : bascule vers l'onglet dédié **API Keys** pour inspecter les plafonds et l'historique de chaque clé.

---

## 6. Pratiques recommandées pour les managers

1. **Surveiller le ratio Coût / Million de jetons** : si cette métrique augmente de manière imprévue, vérifiez si des prompts simples ne sont pas indûment exécutés sur des modèles très onéreux (ex: Claude 3.5 Sonnet ou GPT-4o) alors qu'un modèle léger (ex: Haiku, GPT-4o mini, Flash) suffirait.
2. **Optimiser la taille du prompt d'entrée** : utilisez le **Prompt Improver** du Prompt Lab pour éliminer les formulations redondantes et abaisser mécaniquement le *Input Cost*.
3. **Exploiter la mise en cache** : pour les prompts systèmes complexes réutilisés fréquemment, veillez à stabiliser les premières balises afin de maximiser le taux de succès du *Prompt Caching*.
