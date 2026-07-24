# Relais CORS privé pour OpenCode Zen

OpenCode Zen expose bien `https://opencode.ai/zen/v1`, mais son endpoint ne répond pas au prévol CORS envoyé par une page GitHub Pages. Un navigateur bloque donc la requête avant même que la clé API ou le modèle soient envoyés.

Les autres fournisseurs configurés dans OmniChat répondent actuellement au prévol CORS. Seul Zen a besoin de ce relais.

## Déploiement avec Cloudflare Workers

Le fichier [`ZEN_PROXY_WORKER.js`](ZEN_PROXY_WORKER.js) est un relais minimal, limité à OpenCode Zen. Il ne conserve pas de clé : le navigateur transmet la clé Zen au Worker, qui la relaie immédiatement vers OpenCode.

1. Crée un compte Cloudflare puis ouvre **Workers & Pages → Create → Create Worker**.
2. Remplace le contenu du Worker par le fichier `ZEN_PROXY_WORKER.js` de ce dépôt.
3. Vérifie `ALLOWED_ORIGINS` : `https://yoyo406.github.io` est déjà présent. Ajoute ton propre domaine ou ton port local de développement si nécessaire. Ne mets pas `*`.
4. Déploie le Worker et copie son URL HTTPS, par exemple `https://omnichat-zen-proxy.<ton-compte>.workers.dev`.
5. Dans OmniChat, ouvre **Paramètres → OpenCode Zen**, colle cette URL dans **URL du relais CORS Zen**, puis enregistre.
6. Sélectionne OpenCode Zen, ajoute ta clé API Zen, puis envoie un message. Le bouton **Rafraîchir les modèles Zen** passe également par le relais.

Avec la CLI Cloudflare, la même publication peut se faire depuis le dossier du dépôt :

```sh
npx wrangler deploy ZEN_PROXY_WORKER.js --name omnichat-zen-proxy
```

## Sécurité

- N’utilise pas un proxy CORS public pour une clé API : il pourrait lire ta clé et tes messages.
- Le Worker fourni accepte seulement ton origine GitHub Pages et seulement `GET /models` et `POST /chat/completions` vers OpenCode Zen.
- Le Worker ne contient ni clé ni journalisation applicative. Il reste néanmoins sous ton contrôle : garde son code tel quel et protège l’accès à ton compte Cloudflare.

## Pourquoi ce relais est nécessaire

Une application GitHub Pages ne peut pas désactiver ou contourner CORS. `mode: "no-cors"` ne rendrait pas la réponse lisible et ne permettrait pas le streaming. Le relais ajoute les en-têtes CORS côté serveur tout en conservant OmniChat lui-même comme application statique.
