---
title: "API d'intégration & Exécution de Prompts"
description: "Spécification de l'API REST publique pour intégrer l'exécution de prompts Power Prompt dans vos applications et flux métier."
---


L'API REST publique de Power Prompt permet aux organisations de connecter leurs systèmes informatiques (ERP, CRM, scripts d'automatisation, outils internes) au moteur d'exécution de prompts de la plateforme.

Toutes les communications s'effectuent exclusivement via HTTPS et les échanges de données utilisent le format standard JSON.

---

## 1. Authentification & Sécurité

L'accès à l'API publique s'effectue au moyen d'une **Clé d'API d'équipe** générée par un responsable depuis l'interface d'administration (**Gestion d'équipe > Intégrations & Clés API**).

### En-tête obligatoire

Chaque requête adressée à l'API doit inclure votre clé d'API dans l'en-tête HTTP suivant :

```http
X-API-Key: pp_live_votre_cle_api_securisee
```

> [!IMPORTANT]
> **Règles de sécurité pour les clés d'API :**
> * Ne transmettez jamais votre clé d'API côté client (dans du code JavaScript navigateur ou une application mobile publique).
> * Conservez vos clés dans un gestionnaire de secrets sécurisé sur vos serveurs applicatifs.
> * Chaque clé est strictement cloisonnée au périmètre des espaces de travail attribués à son équipe.

---

## 2. Exécution d'un prompt paramétrable

Ce point de terminaison permet de déclencher l'exécution d'un modèle de prompt validé en lui injectant dynamiquement les variables requises.

### Requête

* **Méthode :** `POST`
* **Chemin :** `/api/v1/prompts/execute`
* **En-têtes :**
  * `Content-Type: application/json`
  * `X-API-Key: pp_live_...`

#### Corps de la requête (JSON)

```json
{
  "prompt_id": "pr_8f4d92a1-3b7c-4e8a-9f12-0a1b2c3d4e5f",
  "variables": {
    "client_name": "Société Exemple SA",
    "document_type": "Contrat de maintenance",
    "notes": "Renouvellement annuel avec clause d'indexation."
  },
  "options": {
    "temperature": 0.2
  }
}
```

#### Paramètres

| Champ | Type | Obligatoire | Description |
|---|---|---|---|
| `prompt_id` | Chaîne (UUID) | Oui | Identifiant unique du prompt à exécuter. |
| `variables` | Objet clé/valeur | Oui | Valeurs des variables dynamiques (`{{nom_variable}}`) attendues par le prompt. |
| `options.temperature` | Nombre (0.0 à 1.0) | Non | Niveau de créativité du modèle IA (optionnel, prend par défaut la valeur configurée sur le prompt). |

---

### Réponse

#### Succès (`200 OK`)

```json
{
  "success": true,
  "execution_id": "exec_5a6b7c8d-9e0f-1a2b-3c4d-5e6f7a8b9c0d",
  "prompt_id": "pr_8f4d92a1-3b7c-4e8a-9f12-0a1b2c3d4e5f",
  "version": 3,
  "result": "Contenu final généré par le modèle d'intelligence artificielle...",
  "usage": {
    "total_tokens": 420
  },
  "created_at": "2026-09-27T10:30:00Z"
}
```

---

## 3. Gestion des erreurs (Norme RFC 7807)

En cas d'anomalie, l'API renvoie un code HTTP approprié accompagné d'un objet d'erreur standardisé conforme à la spécification **RFC 7807** (*Problem Details for HTTP APIs*).

```json
{
  "type": "https://doc.powerprompt.eu/errors/missing-variable",
  "title": "Variable requise manquante",
  "status": 400,
  "detail": "La variable obligatoire {{client_name}} n'a pas été fournie dans la requête.",
  "instance": "/api/v1/prompts/execute"
}
```

### Codes d'erreurs courants

| Code HTTP | Signification | Cause fréquente |
|---|---|---|
| `400 Bad Request` | Requête invalide | Syntaxe JSON incorrecte ou variable requise absente. |
| `401 Unauthorized` | Authentification échouée | En-tête `X-API-Key` manquant ou clé invalide. |
| `403 Forbidden` | Accès refusé | La clé d'API n'a pas l'autorisation d'exécuter ce prompt ou d'accéder à cet espace de travail. |
| `404 Not Found` | Ressource introuvable | L'identifiant de prompt renseigné n'existe pas ou est archivé. |
| `429 Too Many Requests` | Limite de débit atteinte | Nombre maximal de requêtes par minute dépassé pour cette clé. |
| `502 / 504 Gateway Error` | Indisponibilité du fournisseur IA | Le modèle IA distant met trop de temps à répondre ou subit une coupure. |

---

## 4. Limitation de débit & Bonnes pratiques

* **Quotas d'appels :** Par défaut, chaque clé d'API dispose d'un plafond fixé à 60 requêtes par minute. Pour des besoins industriels supérieurs, contactez votre administrateur d'organisation.
* **Gestion des relances (Retry) :** En cas d'erreur transitoire (`429` ou `503`), appliquez un mécanisme de retrait exponentiel avec gigue aléatoire (*exponential backoff with jitter*).
* **Validation amont :** Assurez-vous que toutes les variables obligatoires sont complétées dans votre application avant d'émettre la requête vers l'API.