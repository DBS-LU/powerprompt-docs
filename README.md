# Power Prompt Documentation Portal (`doc.powerprompt.eu`)

Dépôt officiel du portail de documentation technique et fonctionnelle de **Power Prompt**, propulsé par [Starlight (Astro)](https://starlight.astro.build) et déployé sur **Cloudflare Pages**.

---

## 🌍 Structure Multilingue (i18n)

Le portail supporte nativement le bilinguisme Anglais / Français :

* **Racine / Anglais (défaut) :** `src/content/docs/`
* **Français :** `src/content/docs/fr/`
* **Configuration des langues et barre latérale :** `astro.config.mjs`

---

## 🛠️ Commandes Locales

```bash
# 1. Installation des dépendances
npm install

# 2. Lancement du serveur de développement local (http://localhost:4321)
npm run dev

# 3. Compilation statique de production (génère le dossier dist/)
npm run build

# 4. Prévisualisation locale du build
npm run preview
```

---

## 🚀 Déploiement sur Cloudflare Pages

1. **Création du projet sur Cloudflare Pages :**
   * Connecter le compte GitHub ou GitLab contenant ce dépôt.
   * Nom du projet : `powerprompt-docs`.
2. **Paramètres de compilation (Build settings) :**
   * **Framework preset :** `Astro`
   * **Build command :** `npm run build`
   * **Build output directory :** `dist`
   * **Variable d'environnement :** `NODE_VERSION` = `20`
3. **Domaine personnalisé :**
   * Ajouter le domaine personnalisé `doc.powerprompt.eu` dans l'onglet **Custom Domains**.
   * Créer l'enregistrement `CNAME` correspondant dans votre zone DNS (`powerprompt.eu`).
