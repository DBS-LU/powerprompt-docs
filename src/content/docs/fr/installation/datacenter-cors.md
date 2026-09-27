---
title: "Configuration Réseau & CORS Datacenter"
description: "Paramétrage du contrôle d'accès réseau et des règles CORS pour les déploiements en datacenter privé."
---


Ce guide détaille la configuration des règles de partage de ressources cross-origin (**CORS**) et des contrôles d'accès réseau lors du déploiement de Power Prompt au sein du datacenter privé ou du cloud d'entreprise d'un client.

---

## 1. Vue d'ensemble

Lorsque Power Prompt est déployé sur l'infrastructure d'un client avec des noms de domaine d'entreprise personnalisés (par exemple `https://powerprompt.entreprise.local` ou `https://ai.client.internal`), le backend Fastify valide les en-têtes `Origin` transmis par les navigateurs pour prévenir toute attaque de type CSRF et bloquer les accès cross-origin non autorisés.

---

## 2. Emplacement du fichier de configuration

Tous les paramètres de domaine et de filtrage CORS sont centralisés dans **un fichier de configuration d'environnement unique** :

* **Chemin en production / datacenter :** `/etc/powerprompt/backend.env` ou `/opt/powerprompt/.env`
* **Permissions strictes du fichier :** `chmod 600 /etc/powerprompt/backend.env` (accessible uniquement par l'utilisateur système `root` ou `powerprompt`).

---

## 3. Variables de configuration réseau

Définissez les variables suivantes dans le fichier de configuration :

| Nom de variable | Rôle | Exemple de valeur | Obligatoire |
|---|---|---|---|
| `FRONTEND_URL` | URL principale de l'interface web SPA | `https://powerprompt.entreprise.local` | **Recommandé** |
| `BACKEND_URL` | URL de base de la passerelle API | `https://powerprompt.entreprise.local/api` | Optionnel |
| `ALLOWED_ORIGINS` | Liste séparée par des virgules d'origines autorisées | `https://powerprompt.entreprise.local,https://portal.entreprise.local` | Optionnel |

---

## 4. Liste blanche automatique sans configuration (Zero-Config)

Le backend Fastify de Power Prompt intègre une détection automatique des origines privées sécurisées :

1. **Sous-réseaux privés d'entreprise (RFC 1918) :**
   * `10.0.0.0/8` (ex: `http://10.0.1.10:3000`, `http://10.200.1.5:3000`)
   * `172.16.0.0/12` (ex: `http://172.20.0.15`)
   * `192.168.0.0/16` (ex: `http://192.168.1.100`)
   * `localhost` / `127.0.0.1` (tests locaux et proxys inverses)
   * *Toutes les adresses IP internes situées dans ces plages sont automatiquement acceptées.*

2. **Extensions de navigateur Power Prompt :**
   * Toutes les origines d'extensions (`chrome-extension://*`) sont autorisées par défaut pour permettre le fonctionnement du volet latéral.

3. **Requêtes serveur à serveur (Server-to-Server) :**
   * Les sondes de santé, scripts de monitoring, commandes curl et intégrations d'API qui ne transmettent pas d'en-tête `Origin` sont acceptées sans restriction.

---

## 5. Application des modifications

Après toute modification du fichier de configuration :

```bash
# Pour un déploiement Docker Compose :
cd /opt/powerprompt && sudo docker compose restart backend

# Pour un déploiement natif Linux systemd :
sudo systemctl restart powerprompt-backend
sudo journalctl -u powerprompt-backend -n 25 --no-pager
```
