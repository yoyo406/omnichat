# OmniChat — Chat IA multi-modèles

App 100% statique HTML/CSS/JS vanilla. Hébergeable sur GitHub Pages. Aucun back-end, aucun build, aucun compte.

## Déploiement GitHub Pages

1. Push ces fichiers dans un dépôt GitHub
2. Settings → Pages → Source: `main` + root `/`
3. Dispo sur `https://<user>.github.io/<repo>/`

Ou déploie direct avec `npx gh-pages -d .`

## Utilisation

1. Ouvre l'app
2. Clique ⚙️ Paramètres
3. Colle ta clé API pour le fournisseur voulu (OpenAI, Anthropic, etc.)
4. Choisis fournisseur + modèle dans l'en-tête
5. Écris un message et envoie (Entrée ou Ctrl+Entrée)

**Tes clés restent dans ton navigateur** (localStorage). Jamais transmises ailleurs qu'à l'API choisie.

## Fournisseurs supportés

| Fournisseur | Clé API | CORS navigateur |
|---|---|---|
| OpenAI | platform.openai.com/api-keys | ✅ |
| Anthropic | console.anthropic.com/settings/keys | ✅ |
| Google Gemini | aistudio.google.com/app/apikey | ✅ (clé dans URL) |
| xAI | console.x.ai | ✅ |
| DeepSeek | platform.deepseek.com | ✅ |
| Alibaba Qwen | bailian.console.aliyun.com | ✅ |
| Moonshot | platform.moonshot.cn | ✅ |
| OpenRouter | openrouter.ai/keys | ✅ |
| OpenCode Zen | opencode.ai/docs/zen | ✅ |

## Proxy CORS

Si un fournisseur bloque l'appel navigateur direct, ajoute une base URL proxy dans les Paramètres.

## Fichiers

- `index.html` — Structure HTML
- `styles.css` — Design tokens, layout, composants
- `app.js` — Logique complète (config, state, adaptateurs API, UI)
- `README.md` — Ce fichier

## Personnalisation

Édite `app.js` → objet `PROVIDERS` en haut du fichier pour ajouter/modifier fournisseurs et modèles.

## Stack

- HTML5 sémantique + CSS moderne (variables, flexbox, grid)
- JS vanilla (ES modules via defer)
- CDN : marked (Markdown GFM), highlight.js (coloration), DOMPurify (sanitize)
- Stockage : localStorage (clés, conversations, réglages)
- Accessibilité : WCAG 2.2 AA (aria-live, focus visible, contraste, clavier)
