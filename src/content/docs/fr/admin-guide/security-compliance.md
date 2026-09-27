---
title: "Sécurité, journaux d'audit et conformité"
description: "Chiffrement des données, journalisation des événements, politiques de rétention et conformité RGPD / SOC 2."
---

Power Prompt intègre dès sa conception les exigences de sécurité et de conformité des environnements d'entreprise les plus exigeants.

---

## 1. Chiffrement et protection des données

La protection des actifs d'ingénierie et des clés d'accès repose sur une architecture cryptographique rigoureuse :
* **Chiffrement en transit :** Toutes les communications réseau (web, API, extensions) sont systématiquement chiffrées via TLS 1.3 avec suites cryptographiques modernes.
* **Chiffrement au repos :** Les contenus de prompts, métadonnées, historiques et secrets d'API sont chiffrés au repos en base de données selon l'algorithme standard **AES-256**.
* **Gestion et rotation des clés :** Les clés cryptographiques de chiffrement des données peuvent faire l'objet d'une rotation planifiée selon les politiques de sécurité de votre organisation.

---

## 2. Journal d’audit et traçabilité intégrale

Pour répondre aux exigences des auditeurs de conformité, Power Prompt enregistre de façon immuable l'ensemble des événements du système :
* **Authentification et accès :** Horodatage des connexions réussies, des échecs d'authentification et des renouvellements de session.
* **Cycle de vie des prompts :** Traçabilité exacte de chaque création, modification, suppression ou restauration de version de prompt, avec identification de l'auteur.
* **Administration des droits :** Enregistrement des changements de rôles, attributions de permissions et créations d'équipes.
* **Gestion des membres :** Historique complet des invitations envoyées, acceptées et des départs (offboarding).
* **Extraction et exports :** Journalisation de tout export de données ou rapport généré.
* **Actions d'infrastructure :** Modifications de configurations système, ajouts de clés API et changements de modèles homologués.

Les journaux d'audit sont infalsifiables et peuvent être exportés vers vos outils de supervision (SIEM).

---

## 3. Conformité réglementaire

Power Prompt s’aligne sur les cadres de conformité européens et internationaux :
* **Règlement Général sur la Protection des Données (RGPD) :**
  * Droit à l'effacement et à la portabilité des données.
  * Absence de réutilisation ou d'entraînement des modèles sur les données client saisies.
  * Hébergement au sein de l'Union Européenne ou sur votre propre infrastructure On-Premise.
* **Standard SOC 2 Type II :** Respect des critères de confiance relatifs à la sécurité, à la disponibilité et à la confidentialité des traitements.
* **Politiques de rétention et purge :** Possibilité de configurer des durées maximales de conservation pour les versions obsolètes ou les historiques de tests.
* **Sauvegarde et résilience :** Stratégie de sauvegardes automatisées et procédures documentées de reprise d'activité après sinistre (PRA/PCA).
