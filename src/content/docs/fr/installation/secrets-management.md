---
title: "Politique de gestion des secrets"
description: "Règles de génération, rotation et stockage sécurisé des clés cryptographiques et secrets applicatifs."
---

La sécurité des données et des clés d'API au sein de Power Prompt repose sur un chiffrement de niveau militaire et une séparation étanche des secrets.

---

## 1. Principes fondamentaux

1. **Zéro secret en clair dans le code :** Aucun mot de passe, secret de hachage ou token API n'est codé en dur dans les images logicielles.
2. **Permissions strictes sur l'hôte :** Tout fichier contenant des variables sensibles doit être verrouillé en `chmod 600` et appartenir à l'utilisateur d'exploitation.
3. **Chiffrement au repos (AES-256-GCM) :** Les clés API d'équipe et les clés d'infrastructure sont chiffrées avant leur écriture dans la base PostgreSQL 17 à l'aide de la clé maîtresse `DATA_ENCRYPTION_KEY`.

---

## 2. Génération des clés obligatoires

Lors du déploiement initial, l'administrateur doit générer des clés aléatoires cryptographiquement sûres à l'aide d'OpenSSL :

### Clé de session JWT (`JWT_SECRET`)
Utilisée pour signer les jetons d'authentification utilisateur :
```bash
openssl rand -base64 32
```
*Copiez la chaîne générée (minimum 32 caractères) dans la variable `JWT_SECRET`.*

### Clé de chiffrement des données (`DATA_ENCRYPTION_KEY`)
Utilisée par le coffre-fort applicatif pour chiffrer les clés API et les données sensibles avec AES-256-GCM :
```bash
openssl rand -hex 32
```
*Cette commande produit une chaîne de 64 caractères hexadécimaux représentant 256 bits d'entropie.*

---

## 3. Matrice des variables de sécurité

| Variable | Longueur minimale | Emplacement | Rôle |
|---|---|---|---|
| `JWT_SECRET` | 32 caractères | `.env` | Signature et vérification des jetons d'authentification |
| `DATA_ENCRYPTION_KEY` | 64 caractères hex | `.env` | Chiffrement symétrique AES-256-GCM des clés en base de données |
| `POSTGRES_PASSWORD` | 24 caractères | `.env` | Mot de passe de connexion à l'instance PostgreSQL 17 |
