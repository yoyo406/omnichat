# OmniChat — Chat IA multi-modèles

Application 100 % statique en HTML, CSS et JavaScript vanilla. Elle ne demande ni compte OmniChat, ni build, ni serveur : elle est prévue pour GitHub Pages.

Les clés API, conversations, réglages et préférence de thème sont conservés uniquement dans le `localStorage` du navigateur. Une clé est envoyée uniquement au fournisseur sélectionné, sauf si tu configures volontairement le relais privé OpenCode Zen : dans ce cas, elle transite aussi par ce relais que tu contrôles.

## Déploiement sur GitHub Pages

1. Place `index.html`, `styles.css`, `app.js` et ce fichier à la racine de la branche utilisée par Pages (`master` dans ce dépôt).
2. Dans **Settings → Pages**, choisis **Deploy from a branch**.
3. Sélectionne cette branche, puis le dossier **/(root)**, et enregistre.
4. Attends la publication sur `https://<utilisateur>.github.io/<dépôt>/`.

Les liens locaux sont relatifs (`./styles.css` et `./app.js`) : l’application fonctionne donc aussi depuis un dépôt servi sous un sous-dossier, comme `/omnichat/`.

## Utilisation

1. Ouvre l’application et clique sur **Paramètres**.
2. Colle une clé pour le fournisseur voulu, puis enregistre.
3. Choisis le fournisseur et le modèle dans l’en-tête.
4. Écris un message.

`Ctrl`/`Cmd` + `Entrée` envoie le message. `Maj` + `Entrée` ajoute une ligne et `Échap` annule une édition. Sur mobile, utilise le bouton menu pour ouvrir les conversations.

## Fournisseurs

La configuration éditable se trouve au début de [`app.js`](app.js). Les identifiants de modèles et URLs y sont regroupés par fournisseur.

- OpenAI, Anthropic et Google Gemini disposent de leurs adaptateurs natifs de streaming.
- xAI, DeepSeek, Qwen, Moonshot et OpenRouter utilisent le format OpenAI-compatible.
- OpenRouter accepte aussi un identifiant de modèle libre.
- OpenCode Zen affiche par défaut ses modèles gratuits compatibles avec `chat/completions`. L’interface conserve le format `opencode/<model-id>` et envoie l’identifiant API attendu par Zen (`<model-id>`).

Un navigateur ne peut pas contourner le CORS d’un fournisseur. Les appels directs configurés ici répondent actuellement au prévol CORS, sauf OpenCode Zen. Pour Zen, OmniChat propose dans les paramètres l’URL d’un relais CORS privé ; le fichier [`ZEN_PROXY_WORKER.js`](ZEN_PROXY_WORKER.js) et le [guide de déploiement](ZEN_PROXY.md) permettent de le configurer sans ajouter de serveur à GitHub Pages.

## Fichiers

- `index.html` — structure sémantique et accessibilité
- `styles.css` — design tokens, mise en page responsive et thèmes
- `app.js` — état local, interfaces, adaptateurs API et streaming SSE
- `README.md` — installation et limites connues
- `ZEN_PROXY_WORKER.js` — relais CORS OpenCode Zen à déployer séparément sous ton contrôle
- `ZEN_PROXY.md` — guide de déploiement et de sécurité du relais

## Stack

- HTML5 sémantique, CSS moderne, JavaScript ES modules
- CDN : marked, highlight.js et DOMPurify
- `localStorage` pour les données locales
- Markdown nettoyé, coloration de code, streaming, annulation, régénération et thème clair/sombre
