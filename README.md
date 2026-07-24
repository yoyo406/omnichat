# OmniChat — Chat IA multi-modèles

Application 100 % statique en HTML, CSS et JavaScript vanilla. Elle ne demande ni compte OmniChat, ni build, ni serveur : elle est prévue pour GitHub Pages.

Les clés API, conversations, réglages et préférence de thème sont conservés uniquement dans le `localStorage` du navigateur. Une clé n’est envoyée qu’au fournisseur sélectionné.

## Déploiement sur GitHub Pages

1. Place `index.html`, `styles.css`, `app.js` et ce fichier à la racine de la branche `main`.
2. Dans **Settings → Pages**, choisis **Deploy from a branch**.
3. Sélectionne la branche **main**, puis le dossier **/(root)**, et enregistre.
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
- OpenCode Zen utilise `opencode/<model-id>` et affiche par défaut ses modèles gratuits compatibles avec `chat/completions`. Les autres familles Zen (GPT, Claude, Gemini et Qwen) emploient d’autres endpoints et sont donc filtrées pour éviter une requête invalide.

Un navigateur ne peut pas contourner le CORS d’un fournisseur. Si une API refuse les appels directs depuis GitHub Pages, OmniChat affiche une erreur exploitable ; la seule solution est que le fournisseur active CORS pour le site ou d’utiliser un proxy que tu contrôles. À ce jour, l’endpoint Zen ne répond pas aux prérequis CORS des appels directs depuis GitHub Pages.

## Fichiers

- `index.html` — structure sémantique et accessibilité
- `styles.css` — design tokens, mise en page responsive et thèmes
- `app.js` — état local, interfaces, adaptateurs API et streaming SSE
- `README.md` — installation et limites connues

## Stack

- HTML5 sémantique, CSS moderne, JavaScript ES modules
- CDN : marked, highlight.js et DOMPurify
- `localStorage` pour les données locales
- Markdown nettoyé, coloration de code, streaming, annulation, régénération et thème clair/sombre
