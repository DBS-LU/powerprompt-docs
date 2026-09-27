---
title: "Connexion et sécurité du compte"
description: "Authentification, authentification multi-facteur (MFA), réinitialisation de mot de passe et gestion des sessions."
---

Power Prompt met en œuvre des mécanismes de protection stricts afin de sécuriser l'accès aux comptes, aux bibliothèques de prompts et aux clés de modèles d'IA.

---

## Se connecter à Power Prompt

1. Rendez-vous sur la page de connexion officielle de votre instance Power Prompt.
2. Saisissez votre adresse email professionnelle.
3. Renseignez votre mot de passe et validez.
4. Si l'authentification multi-facteur est activée sur votre compte ou imposée par votre organisation, saisissez le code temporaire à 6 chiffres généré par votre application d'authentification (TOTP).

---

## Authentification multi-facteur (MFA)

L’authentification multi-facteur (MFA) ajoute une couche de protection essentielle contre le vol d'identifiants :
* **Obligatoire au niveau organisation :** Dans les abonnements Enterprise ou selon la politique de sécurité du client, le MFA peut être imposé à l'ensemble des collaborateurs.
* **Obligatoire par rôle :** Les rôles à privilèges élevés (*Administrateur plateforme*, *Responsable d'organisation*, *Responsable d'équipe*) doivent obligatoirement activer le MFA.
* **Optionnelle :** Tout utilisateur individuel peut activer le MFA depuis les paramètres de son profil utilisateur pour sécuriser son compte.

Power Prompt prend en charge les applications d'authentification standard (Google Authenticator, Microsoft Authenticator, 1Password, Bitwarden).

---

## Réinitialisation de mot de passe

En cas d'oubli de mot de passe :
1. Sur l'écran de connexion, cliquez sur le lien **Mot de passe oublié ?**.
2. Renseignez l’adresse email associée à votre compte.
3. Consultez votre boîte de réception et ouvrez l'email sécurisé de réinitialisation.
4. Cliquez sur le lien à usage unique (valable pour une durée limitée).
5. Définissez un nouveau mot de passe robuste respectant les critères minimaux de complexité imposés par la plateforme.

---

## Sessions actives et verrouillage automatique

Pour limiter les risques de compromission sur les postes de travail partagés ou distants :

- **Expiration de session par inactivité :** Après une période d’inactivité prolongée, la session expire et exige une ré-authentification.
- **Protection contre les attaques par force brute :** Le compte est temporairement verrouillé après plusieurs tentatives de connexion infructueuses consécutives.
- **Politique de complexité :** Les mots de passe doivent respecter des règles minimales de longueur, de mélange de caractères et ne pas figurer dans les dictionnaires de mots de passe compromis.
