/* OmniChat: configuration kept deliberately at the top for easy editing. */
const PROVIDERS = {
  openai: {
    name: 'OpenAI',
    adapter: 'openai',
    baseUrl: 'https://api.openai.com/v1',
    docsUrl: 'https://platform.openai.com/api-keys',
    keyPlaceholder: 'sk-…',
    models: [
      { id: 'gpt-5.6-sol', name: 'GPT-5.6 Sol' },
      { id: 'gpt-5.6-terra', name: 'GPT-5.6 Terra' },
      { id: 'gpt-5.6-luna', name: 'GPT-5.6 Luna' },
      { id: 'gpt-5.6', name: 'GPT-5.6' },
      { id: 'gpt-5.5', name: 'GPT-5.5' },
      { id: 'gpt-5.5-pro', name: 'GPT-5.5 Pro' },
      { id: 'gpt-5.4-mini', name: 'GPT-5.4 Mini' },
      { id: 'gpt-4.1', name: 'GPT-4.1' }
    ]
  },
  anthropic: {
    name: 'Anthropic',
    adapter: 'anthropic',
    baseUrl: 'https://api.anthropic.com/v1',
    docsUrl: 'https://console.anthropic.com/settings/keys',
    keyPlaceholder: 'sk-ant-…',
    models: [
      { id: 'claude-opus-5', name: 'Claude Opus 5' },
      { id: 'claude-opus-4-8', name: 'Claude Opus 4.8' },
      { id: 'claude-sonnet-5', name: 'Claude Sonnet 5' },
      { id: 'claude-opus-4-7', name: 'Claude Opus 4.7' },
      { id: 'claude-haiku-4-5', name: 'Claude Haiku 4.5' }
    ]
  },
  gemini: {
    name: 'Google Gemini',
    adapter: 'gemini',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
    docsUrl: 'https://aistudio.google.com/app/apikey',
    keyPlaceholder: 'AIza…',
    models: [
      { id: 'gemini-3.6-flash', name: 'Gemini 3.6 Flash' },
      { id: 'gemini-3.5-flash-lite', name: 'Gemini 3.5 Flash Lite' },
      { id: 'gemini-3.5-flash', name: 'Gemini 3.5 Flash' },
      { id: 'gemini-3.1-pro-preview', name: 'Gemini 3.1 Pro Preview' },
      { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro' }
    ]
  },
  xai: {
    name: 'xAI',
    adapter: 'openai',
    baseUrl: 'https://api.x.ai/v1',
    docsUrl: 'https://console.x.ai/',
    keyPlaceholder: 'xai-…',
    models: [
      { id: 'grok-4.5', name: 'Grok 4.5' },
      { id: 'grok-4.3', name: 'Grok 4.3' },
      { id: 'grok-4.20-0309-reasoning', name: 'Grok 4.20 Reasoning' }
    ]
  },
  deepseek: {
    name: 'DeepSeek',
    adapter: 'openai',
    baseUrl: 'https://api.deepseek.com/v1',
    docsUrl: 'https://platform.deepseek.com/api_keys',
    keyPlaceholder: 'sk-…',
    models: [
      { id: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro' },
      { id: 'deepseek-v4-flash', name: 'DeepSeek V4 Flash' },
      { id: 'deepseek-chat', name: 'DeepSeek Chat' },
      { id: 'deepseek-reasoner', name: 'DeepSeek Reasoner' }
    ]
  },
  qwen: {
    name: 'Alibaba Qwen',
    adapter: 'openai',
    baseUrl: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1',
    docsUrl: 'https://bailian.console.aliyun.com/',
    keyPlaceholder: 'sk-…',
    models: [
      { id: 'qwen3.7-max', name: 'Qwen 3.7 Max' },
      { id: 'qwen3.7-plus', name: 'Qwen 3.7 Plus' },
      { id: 'qwen3.6-flash', name: 'Qwen 3.6 Flash' },
      { id: 'qwen3.5-plus', name: 'Qwen 3.5 Plus' }
    ]
  },
  moonshot: {
    name: 'Moonshot AI',
    adapter: 'openai',
    baseUrl: 'https://api.moonshot.ai/v1',
    docsUrl: 'https://platform.moonshot.ai/docs/api/chat',
    keyPlaceholder: 'sk-…',
    models: [
      { id: 'kimi-k3', name: 'Kimi K3' },
      { id: 'kimi-k2.6', name: 'Kimi K2.6' },
      { id: 'kimi-k2.5', name: 'Kimi K2.5' },
      { id: 'kimi-k2-thinking', name: 'Kimi K2 Thinking' }
    ]
  },
  openrouter: {
    name: 'OpenRouter',
    adapter: 'openai',
    baseUrl: 'https://openrouter.ai/api/v1',
    docsUrl: 'https://openrouter.ai/keys',
    keyPlaceholder: 'sk-or-…',
    allowCustomModel: true,
    models: [
      { id: 'openai/gpt-5.6-sol', name: 'GPT-5.6 Sol' },
      { id: 'anthropic/claude-opus-4.8', name: 'Claude Opus 4.8' },
      { id: 'google/gemini-3.6-flash', name: 'Gemini 3.6 Flash' },
      { id: 'x-ai/grok-4.5', name: 'Grok 4.5' },
      { id: 'deepseek/deepseek-v4-pro', name: 'DeepSeek V4 Pro' },
      { id: 'qwen/qwen3.7-max', name: 'Qwen 3.7 Max' },
      { id: 'moonshotai/kimi-k3', name: 'Kimi K3' },
      { id: 'openrouter/auto', name: 'Auto Router' }
    ]
  },
  opencode: {
    name: 'OpenCode Zen',
    adapter: 'openai',
    baseUrl: 'https://opencode.ai/zen/v1',
    docsUrl: 'https://opencode.ai/docs/zen',
    keyPlaceholder: '…',
    allowCustomModel: true,
    models: [
      { id: 'opencode/big-pickle', name: 'Big Pickle', free: true },
      { id: 'opencode/deepseek-v4-flash-free', name: 'DeepSeek V4 Flash', free: true },
      { id: 'opencode/mimo-v2.5-free', name: 'MiMo V2.5', free: true },
      { id: 'opencode/laguna-s-2.1-free', name: 'Laguna S 2.1', free: true },
      { id: 'opencode/north-mini-code-free', name: 'North Mini Code', free: true },
      { id: 'opencode/nemotron-3-ultra-free', name: 'Nemotron 3 Ultra', free: true }
    ]
  }
};

/* Zen exposes several API families. This app deliberately uses Chat Completions
   for Zen, so these documented model families must not be sent to that route. */
const ZEN_NON_CHAT_COMPLETIONS_PREFIXES = ['gpt-', 'claude-', 'gemini-', 'qwen'];

const PROVIDER_KEYS = Object.keys(PROVIDERS);
const STORAGE = {
  apiKeys: 'omnichat_apiKeys',
  conversations: 'omnichat_conversations',
  settings: 'omnichat_settings',
  activeConversation: 'omnichat_activeConv',
  selection: 'omnichat_selection',
  theme: 'omnichat_theme'
};

const DEFAULT_SETTINGS = {
  temperature: 0.7,
  maxTokens: 4096,
  systemPrompt: 'Tu es un assistant IA utile, précis et concis.'
};

const SUGGESTED_PROMPTS = [
  'Explique-moi le théorème de Pythagore simplement',
  'Écris un script Python pour analyser un fichier CSV',
  'Rédige un email professionnel de refus de candidature',
  'Donne-moi 5 idées de projets pour apprendre React',
  'Traduis cette phrase en anglais courant'
];

const ERROR_MESSAGES = {
  400: 'La requête a été refusée. Vérifie le modèle et les paramètres choisis.',
  401: 'Clé API invalide pour ce fournisseur. Vérifie-la dans les paramètres.',
  403: 'Accès refusé. Vérifie les droits associés à cette clé API.',
  404: 'Modèle ou point d’accès introuvable. Vérifie le modèle sélectionné.',
  408: 'La requête a expiré. Réessaie.',
  413: 'La conversation est trop volumineuse pour ce modèle. Démarre un nouveau chat ou raccourcis le contexte.',
  429: 'Limite de débit atteinte. Attends un moment puis réessaie.',
  500: 'Erreur temporaire du fournisseur. Réessaie plus tard.',
  502: 'Le fournisseur est momentanément indisponible. Réessaie.',
  503: 'Le fournisseur est momentanément indisponible. Réessaie.',
  504: 'Le fournisseur a mis trop de temps à répondre. Réessaie.'
};

const ICONS = {
  copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
  edit: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10"/><path d="m15 4 5 5M12 17l1-4 7-7a2.1 2.1 0 0 0-3-3l-7 7-1 4Z"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11a8 8 0 1 0 2 5.5"/><path d="M20 4v7h-7"/></svg>',
  trash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>',
  eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></svg>',
  eyeOff: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.2A11.8 11.8 0 0 1 12 5c6.5 0 10 7 10 7a18 18 0 0 1-3.1 3.8M6.1 6.1C3.5 7.8 2 12 2 12s3.5 7 10 7a10.8 10.8 0 0 0 3.1-.5"/></svg>',
  download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 20h16"/></svg>'
};

const state = {
  conversations: [],
  activeConversationId: null,
  apiKeys: {},
  settings: Object.assign({}, DEFAULT_SETTINGS),
  selectedProvider: 'openai',
  selectedModel: 'gpt-5.6-sol',
  themePreference: 'system',
  zenModels: [],
  streaming: false,
  streamingMessageId: null,
  abortController: null,
  requestNumber: 0,
  editingMessageId: null,
  pickerKind: null,
  pickerMode: 'options',
  pickerReturnFocus: null,
  followOutput: true
};

let pendingAssistantRender = null;
let assistantRenderQueued = false;
let lastFocusedElement = null;
let settingsFocusProvider = null;

function byId(id) {
  return document.getElementById(id);
}

function makeElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined && text !== null) element.textContent = text;
  return element;
}

function makeIcon(name) {
  const template = document.createElement('template');
  template.innerHTML = ICONS[name] || '';
  const svg = template.content.firstElementChild;
  if (svg) {
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
  }
  return svg;
}

function makeActionButton(label, iconName, onClick, extraClass) {
  const button = makeElement('button', extraClass || 'msg-action-btn');
  button.type = 'button';
  button.setAttribute('aria-label', label);
  button.title = label;
  const icon = makeIcon(iconName);
  if (icon) button.append(icon);
  button.addEventListener('click', onClick);
  return button;
}

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch (error) {
    console.warn('Impossible de lire le stockage local.', error);
    return fallback;
  }
}

function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Impossible d’écrire dans le stockage local.', error);
    announce('Impossible d’enregistrer localement. Vérifie l’espace disponible dans le navigateur.');
    return false;
  }
}

function clamp(value, minimum, maximum, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(maximum, Math.max(minimum, number));
}

function generateId() {
  if (window.crypto && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function knownProvider(providerKey) {
  return Object.prototype.hasOwnProperty.call(PROVIDERS, providerKey);
}

function zenSupportsChatCompletions(modelId) {
  const bareId = String(modelId || '').replace(/^opencode\//, '');
  return !ZEN_NON_CHAT_COMPLETIONS_PREFIXES.some(function (prefix) {
    return bareId.indexOf(prefix) === 0;
  });
}

function modelsFor(providerKey) {
  const provider = PROVIDERS[providerKey];
  if (!provider) return [];
  const staticModels = provider.models || [];
  if (providerKey !== 'opencode' || state.zenModels.length === 0) return staticModels;

  const knownIds = new Set(staticModels.map(function (model) { return model.id; }));
  return staticModels.concat(state.zenModels.filter(function (model) {
    return !knownIds.has(model.id);
  }));
}

function modelFor(providerKey, modelId) {
  return modelsFor(providerKey).find(function (model) {
    return model.id === modelId;
  }) || { id: modelId, name: modelId, custom: true };
}

function firstModelId(providerKey) {
  const first = modelsFor(providerKey)[0];
  return first ? first.id : '';
}

function formatModelLabel(providerKey, modelId) {
  const provider = PROVIDERS[providerKey];
  const model = modelFor(providerKey, modelId);
  if (!provider) return modelId || 'Modèle inconnu';
  return provider.name + ' · ' + model.name + (model.free ? ' · Gratuit' : '');
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatRelativeDate(timestamp) {
  const date = new Date(timestamp);
  const difference = Date.now() - date.getTime();
  if (!Number.isFinite(difference) || difference < 60000) return 'À l’instant';
  if (difference < 3600000) return Math.floor(difference / 60000) + ' min';
  if (difference < 86400000) return Math.floor(difference / 3600000) + ' h';
  if (difference < 604800000) return Math.floor(difference / 86400000) + ' j';
  return date.toLocaleDateString([], { day: 'numeric', month: 'short' });
}

function conversationTitle(conversation) {
  if (conversation.title && conversation.title !== 'Nouveau chat') return conversation.title;
  const firstMessage = conversation.messages.find(function (message) {
    return message.role === 'user' && message.content;
  });
  if (!firstMessage) return 'Nouveau chat';
  const compact = firstMessage.content.replace(/\s+/g, ' ').trim();
  return compact.length > 54 ? compact.slice(0, 54) + '…' : compact;
}

function normaliseMessage(message) {
  if (!message || (message.role !== 'user' && message.role !== 'assistant')) return null;
  return {
    id: typeof message.id === 'string' ? message.id : generateId(),
    role: message.role,
    content: typeof message.content === 'string' ? message.content : '',
    createdAt: Number.isFinite(Number(message.createdAt)) ? Number(message.createdAt) : Date.now(),
    providerKey: knownProvider(message.providerKey) ? message.providerKey : null,
    modelId: typeof message.modelId === 'string' ? message.modelId : null,
    modelLabel: typeof message.model === 'string' ? message.model : null,
    free: Boolean(message.free),
    isError: Boolean(message.isError),
    stopped: Boolean(message.stopped)
  };
}

function normaliseConversation(conversation) {
  if (!conversation || typeof conversation !== 'object') return null;
  const providerKey = knownProvider(conversation.provider) ? conversation.provider : 'openai';
  const fallbackModel = firstModelId(providerKey);
  const modelId = typeof conversation.model === 'string' && conversation.model ? conversation.model : fallbackModel;
  const messages = Array.isArray(conversation.messages) ? conversation.messages.map(normaliseMessage).filter(Boolean) : [];
  return {
    id: typeof conversation.id === 'string' ? conversation.id : generateId(),
    title: typeof conversation.title === 'string' && conversation.title ? conversation.title : 'Nouveau chat',
    messages: messages,
    createdAt: Number.isFinite(Number(conversation.createdAt)) ? Number(conversation.createdAt) : Date.now(),
    updatedAt: Number.isFinite(Number(conversation.updatedAt)) ? Number(conversation.updatedAt) : Date.now(),
    provider: providerKey,
    model: modelId
  };
}

function loadState() {
  const storedConversations = readJson(STORAGE.conversations, []);
  state.conversations = Array.isArray(storedConversations) ? storedConversations.map(normaliseConversation).filter(Boolean) : [];
  state.conversations.sort(function (a, b) { return b.updatedAt - a.updatedAt; });

  const storedKeys = readJson(STORAGE.apiKeys, {});
  if (storedKeys && typeof storedKeys === 'object') {
    PROVIDER_KEYS.forEach(function (providerKey) {
      if (typeof storedKeys[providerKey] === 'string' && storedKeys[providerKey].trim()) {
        state.apiKeys[providerKey] = storedKeys[providerKey].trim();
      }
    });
  }

  const storedSettings = readJson(STORAGE.settings, {});
  state.settings.temperature = clamp(storedSettings.temperature, 0, 2, DEFAULT_SETTINGS.temperature);
  state.settings.maxTokens = Math.round(clamp(storedSettings.maxTokens, 1, 128000, DEFAULT_SETTINGS.maxTokens));
  state.settings.systemPrompt = typeof storedSettings.systemPrompt === 'string' ? storedSettings.systemPrompt : DEFAULT_SETTINGS.systemPrompt;

  const storedSelection = readJson(STORAGE.selection, {});
  const legacyActive = localStorage.getItem(STORAGE.activeConversation);
  const activeId = typeof legacyActive === 'string' ? legacyActive : null;
  state.activeConversationId = state.conversations.some(function (conversation) {
    return conversation.id === activeId;
  }) ? activeId : (state.conversations[0] ? state.conversations[0].id : null);

  const activeConversation = getActiveConversation();
  const requestedProvider = knownProvider(storedSelection.provider) ? storedSelection.provider : (activeConversation ? activeConversation.provider : 'openai');
  state.selectedProvider = requestedProvider;
  const requestedModel = typeof storedSelection.model === 'string' ? storedSelection.model : (activeConversation ? activeConversation.model : firstModelId(requestedProvider));
  state.selectedModel = requestedModel || firstModelId(requestedProvider);

  const savedTheme = localStorage.getItem(STORAGE.theme);
  state.themePreference = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'system';
}

function saveConversations() {
  writeJson(STORAGE.conversations, state.conversations);
}

function saveApiKeys() {
  writeJson(STORAGE.apiKeys, state.apiKeys);
}

function saveSettings() {
  writeJson(STORAGE.settings, state.settings);
}

function saveSelection() {
  writeJson(STORAGE.selection, {
    provider: state.selectedProvider,
    model: state.selectedModel
  });
  if (state.activeConversationId) {
    localStorage.setItem(STORAGE.activeConversation, state.activeConversationId);
  } else {
    localStorage.removeItem(STORAGE.activeConversation);
  }
}

function getActiveConversation() {
  return state.conversations.find(function (conversation) {
    return conversation.id === state.activeConversationId;
  }) || null;
}

function createConversation() {
  const now = Date.now();
  const conversation = {
    id: generateId(),
    title: 'Nouveau chat',
    messages: [],
    createdAt: now,
    updatedAt: now,
    provider: state.selectedProvider,
    model: state.selectedModel
  };
  state.conversations.unshift(conversation);
  state.activeConversationId = conversation.id;
  saveConversations();
  saveSelection();
  return conversation;
}

function ensureActiveConversation() {
  return getActiveConversation() || createConversation();
}

function touchConversation(conversation) {
  conversation.updatedAt = Date.now();
  state.conversations.sort(function (a, b) { return b.updatedAt - a.updatedAt; });
}

function announce(message) {
  const region = byId('liveRegion');
  if (!region) return;
  region.textContent = '';
  window.setTimeout(function () {
    region.textContent = message;
  }, 20);
}

function applyTheme() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const resolvedTheme = state.themePreference === 'system' ? (prefersDark ? 'dark' : 'light') : state.themePreference;
  document.documentElement.setAttribute('data-theme', resolvedTheme);
  const themeButton = byId('themeToggle');
  const icon = byId('themeIcon');
  if (themeButton) themeButton.setAttribute('aria-pressed', resolvedTheme === 'dark' ? 'true' : 'false');
  if (icon) {
    icon.innerHTML = resolvedTheme === 'dark'
      ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>'
      : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>';
  }
}

function toggleTheme() {
  const resolvedTheme = document.documentElement.getAttribute('data-theme');
  state.themePreference = resolvedTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(STORAGE.theme, state.themePreference);
  applyTheme();
}

function makeMarkdownHtml(text) {
  const source = String(text || '');
  if (!source) return '';
  let html;
  try {
    if (window.marked && typeof window.marked.parse === 'function') {
      html = window.marked.parse(source, { breaks: true, gfm: true });
    } else {
      html = source.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
    }
  } catch (error) {
    html = source.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
  }

  if (window.DOMPurify && typeof window.DOMPurify.sanitize === 'function') {
    return window.DOMPurify.sanitize(html, {
      ADD_ATTR: ['target', 'rel'],
      USE_PROFILES: { html: true }
    });
  }
  return html;
}

function setCopiedState(button, label) {
  const initialLabel = button.getAttribute('aria-label') || label;
  button.classList.add('copied');
  button.setAttribute('aria-label', 'Copié');
  button.replaceChildren(makeIcon('check'));
  window.setTimeout(function () {
    if (!button.isConnected) return;
    button.classList.remove('copied');
    button.setAttribute('aria-label', initialLabel);
    button.replaceChildren(makeIcon('copy'));
  }, 2000);
}

async function copyText(text, button, label) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const fallback = document.createElement('textarea');
      fallback.value = text;
      fallback.setAttribute('readonly', '');
      fallback.style.position = 'fixed';
      fallback.style.opacity = '0';
      document.body.append(fallback);
      fallback.select();
      const copied = document.execCommand('copy');
      fallback.remove();
      if (!copied) throw new Error('Copie indisponible');
    }
    setCopiedState(button, label);
  } catch (error) {
    announce('La copie a échoué. Sélectionne le texte puis copie-le manuellement.');
  }
}

function renderRichContent(container, content) {
  container.replaceChildren();
  if (!content) {
    if (state.streaming && container.closest('[data-message-id]') && container.closest('[data-message-id]').dataset.messageId === state.streamingMessageId) {
      container.textContent = 'Réponse en cours…';
    }
    return;
  }

  const template = document.createElement('template');
  template.innerHTML = makeMarkdownHtml(content);

  template.content.querySelectorAll('a').forEach(function (link) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  template.content.querySelectorAll('pre > code').forEach(function (code) {
    const pre = code.parentElement;
    if (!pre || !pre.parentNode) return;
    const wrapper = makeElement('div', 'code-block');
    const header = makeElement('div', 'code-header');
    const className = Array.from(code.classList).find(function (name) {
      return name.indexOf('language-') === 0;
    });
    const language = className ? className.slice('language-'.length) : 'code';
    header.append(makeElement('span', 'code-lang', language));
    const copyButton = makeActionButton('Copier le code', 'copy', function () {
      copyText(code.textContent || '', copyButton, 'Copier le code');
    }, 'copy-btn');
    header.append(copyButton);
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.append(header, pre);
    if (window.hljs && typeof window.hljs.highlightElement === 'function') {
      try {
        window.hljs.highlightElement(code);
      } catch (error) {
        console.warn('Coloration du code indisponible.', error);
      }
    }
  });

  container.append(template.content);
}

function makeMessageMeta(message) {
  const meta = makeElement('footer', 'msg-meta');
  meta.append(makeElement('time', 'msg-time', formatTime(message.createdAt)));

  if (message.role === 'assistant' && !message.isError) {
    const label = message.modelLabel || formatModelLabel(message.providerKey || state.selectedProvider, message.modelId || state.selectedModel);
    meta.append(makeElement('span', 'msg-model', label));
  }
  if (message.free) meta.append(makeElement('span', 'msg-free', 'Gratuit'));
  if (message.stopped) meta.append(makeElement('span', 'msg-status', 'Interrompue'));
  return meta;
}

function beginEditing(messageId) {
  if (state.streaming) return;
  state.editingMessageId = messageId;
  renderMessages();
  const editor = byId('edit-' + messageId);
  if (editor) {
    editor.focus();
    editor.setSelectionRange(editor.value.length, editor.value.length);
  }
}

function cancelEditing() {
  if (!state.editingMessageId) return;
  state.editingMessageId = null;
  renderMessages();
}

function resendEditedMessage(messageId, nextContent) {
  const conversation = getActiveConversation();
  if (!conversation || state.streaming || !nextContent.trim()) return;
  const index = conversation.messages.findIndex(function (message) { return message.id === messageId; });
  if (index < 0) return;
  conversation.messages = conversation.messages.slice(0, index);
  state.editingMessageId = null;
  touchConversation(conversation);
  saveConversations();
  renderMessages();
  sendMessage(nextContent);
}

function makeEditBox(message) {
  const editor = makeElement('div', 'message-edit');
  const textarea = makeElement('textarea', 'message-edit-textarea');
  textarea.id = 'edit-' + message.id;
  textarea.value = message.content;
  textarea.rows = Math.max(2, Math.min(8, message.content.split('\n').length + 1));
  textarea.setAttribute('aria-label', 'Modifier votre message');
  textarea.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      cancelEditing();
    }
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      resendEditedMessage(message.id, textarea.value);
    }
  });
  const actions = makeElement('div', 'edit-actions');
  const cancel = makeElement('button', 'btn btn-secondary', 'Annuler');
  cancel.type = 'button';
  cancel.addEventListener('click', cancelEditing);
  const resend = makeElement('button', 'btn btn-primary', 'Enregistrer et renvoyer');
  resend.type = 'button';
  resend.addEventListener('click', function () {
    resendEditedMessage(message.id, textarea.value);
  });
  actions.append(cancel, resend);
  editor.append(textarea, actions);
  return editor;
}

function createMessageElement(message) {
  const article = makeElement('article', 'message');
  article.id = 'message-' + message.id;
  article.dataset.messageId = message.id;
  article.setAttribute('role', 'listitem');
  article.classList.add(message.role === 'user' ? 'user' : (message.isError ? 'error' : 'assistant'));
  if (state.streaming && state.streamingMessageId === message.id) article.classList.add('streaming');

  const body = makeElement('div', 'message-body');
  const content = makeElement('div', 'msg-content');
  content.dataset.messageContent = message.id;
  if (state.editingMessageId === message.id && message.role === 'user') {
    body.append(makeEditBox(message));
  } else if (message.isError) {
    content.textContent = message.content;
    body.append(content);
  } else {
    renderRichContent(content, message.content);
    body.append(content);
  }
  body.append(makeMessageMeta(message));

  const actions = makeElement('div', 'msg-actions');
  if (message.role === 'user' && state.editingMessageId !== message.id) {
    actions.append(makeActionButton('Éditer et renvoyer', 'edit', function () {
      beginEditing(message.id);
    }));
  }

  actions.append(makeActionButton('Copier le message', 'copy', function (event) {
    copyText(message.content, event.currentTarget, 'Copier le message');
  }));

  if (message.role === 'assistant' && !state.streaming) {
    actions.append(makeActionButton(message.isError ? 'Réessayer' : 'Régénérer', 'refresh', function () {
      retryAssistantMessage(message.id);
    }));
  }

  body.append(actions);
  article.append(body);
  return article;
}

function renderEmptyState() {
  const container = byId('messagesInner');
  const stateElement = makeElement('div', 'empty-state');
  stateElement.append(makeElement('div', 'empty-state-icon', '✦'));
  stateElement.append(makeElement('h2', '', 'Bienvenue sur OmniChat'));
  stateElement.append(makeElement('p', '', 'Un seul espace pour utiliser plusieurs modèles d’IA. Tes clés API restent dans ce navigateur.'));

  const hasKey = Object.keys(state.apiKeys).some(function (providerKey) {
    return Boolean(state.apiKeys[providerKey]);
  });
  if (!hasKey) {
    stateElement.append(makeElement('p', 'empty-state-note', 'Ajoute une clé API pour commencer.'));
  }

  const prompts = makeElement('div', 'suggested-prompts');
  SUGGESTED_PROMPTS.forEach(function (prompt) {
    const button = makeElement('button', '', prompt);
    button.type = 'button';
    button.addEventListener('click', function () {
      const textarea = byId('composerTextarea');
      textarea.value = prompt;
      resizeTextarea();
      textarea.focus();
    });
    prompts.append(button);
  });
  stateElement.append(prompts);

  if (!hasKey) {
    const setup = makeElement('div', 'setup-link');
    const setupButton = makeElement('button', '', 'Ajouter une clé API dans les paramètres');
    setupButton.type = 'button';
    setupButton.addEventListener('click', function () { openSettings(state.selectedProvider); });
    setup.append(setupButton);
    stateElement.append(setup);
  }
  container.replaceChildren(stateElement);
}

function renderMessages() {
  const container = byId('messagesInner');
  const conversation = getActiveConversation();
  if (!conversation || conversation.messages.length === 0) {
    renderEmptyState();
    updateScrollButton();
    return;
  }

  const fragment = document.createDocumentFragment();
  conversation.messages.forEach(function (message) {
    fragment.append(createMessageElement(message));
  });
  container.replaceChildren(fragment);
  updateScrollButton();
}

function queueAssistantRender(message) {
  pendingAssistantRender = message;
  if (assistantRenderQueued) return;
  assistantRenderQueued = true;
  window.requestAnimationFrame(function () {
    assistantRenderQueued = false;
    const pending = pendingAssistantRender;
    pendingAssistantRender = null;
    if (!pending) return;
    const messageElement = byId('message-' + pending.id);
    const content = messageElement ? messageElement.querySelector('[data-message-content]') : null;
    if (content) renderRichContent(content, pending.content);
    if (messageElement) messageElement.classList.add('streaming');
    if (state.followOutput) scrollToBottom(false);
    else updateScrollButton();
  });
}

function isNearBottom() {
  const container = byId('messagesContainer');
  if (!container) return true;
  return container.scrollHeight - container.scrollTop - container.clientHeight < 96;
}

function updateScrollButton() {
  const button = byId('scrollBottomBtn');
  if (!button) return;
  button.hidden = isNearBottom();
}

function scrollToBottom(smooth) {
  const container = byId('messagesContainer');
  if (!container) return;
  if (smooth && typeof container.scrollTo === 'function') {
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  } else {
    container.scrollTop = container.scrollHeight;
  }
  state.followOutput = true;
  window.requestAnimationFrame(updateScrollButton);
}

function renderConversationList() {
  const list = byId('conversationList');
  const term = byId('searchConv').value.trim().toLocaleLowerCase();
  const conversations = state.conversations.filter(function (conversation) {
    return !term || conversationTitle(conversation).toLocaleLowerCase().includes(term);
  });

  list.replaceChildren();
  if (conversations.length === 0) {
    list.append(makeElement('li', 'conversation-empty', term ? 'Aucune conversation trouvée' : 'Aucune conversation'));
    return;
  }

  conversations.forEach(function (conversation) {
    const item = makeElement('li', 'conversation-item');
    if (conversation.id === state.activeConversationId) item.classList.add('active');
    const select = makeElement('button', 'conversation-select');
    select.type = 'button';
    select.setAttribute('aria-current', conversation.id === state.activeConversationId ? 'page' : 'false');
    select.append(makeElement('span', 'conv-title', conversationTitle(conversation)));
    select.append(makeElement('span', 'conv-date', formatRelativeDate(conversation.updatedAt)));
    select.addEventListener('click', function () { selectConversation(conversation.id); });

    const actions = makeElement('div', 'conv-actions');
    actions.append(makeActionButton('Renommer la conversation', 'edit', function () {
      renameConversation(conversation.id);
    }, 'conv-action-btn'));
    actions.append(makeActionButton('Supprimer la conversation', 'trash', function () {
      deleteConversation(conversation.id);
    }, 'conv-action-btn'));
    item.append(select, actions);
    list.append(item);
  });
}

function selectConversation(conversationId) {
  const conversation = state.conversations.find(function (candidate) {
    return candidate.id === conversationId;
  });
  if (!conversation) return;
  state.activeConversationId = conversation.id;
  state.selectedProvider = knownProvider(conversation.provider) ? conversation.provider : state.selectedProvider;
  state.selectedModel = conversation.model || firstModelId(state.selectedProvider);
  state.editingMessageId = null;
  saveSelection();
  populateSelectors();
  renderConversationList();
  renderMessages();
  closeSidebar();
}

function renameConversation(conversationId) {
  const conversation = state.conversations.find(function (candidate) {
    return candidate.id === conversationId;
  });
  if (!conversation) return;
  const nextTitle = window.prompt('Renommer la conversation :', conversationTitle(conversation));
  if (nextTitle === null) return;
  const trimmed = nextTitle.trim();
  if (!trimmed) return;
  conversation.title = trimmed.slice(0, 120);
  touchConversation(conversation);
  saveConversations();
  renderConversationList();
}

function deleteConversation(conversationId) {
  if (state.streaming && conversationId === state.activeConversationId) {
    announce('Arrête la réponse en cours avant de supprimer cette conversation.');
    return;
  }
  const conversation = state.conversations.find(function (candidate) {
    return candidate.id === conversationId;
  });
  if (!conversation) return;
  if (!window.confirm('Supprimer définitivement « ' + conversationTitle(conversation) + ' » ? Cette action est irréversible.')) return;

  state.conversations = state.conversations.filter(function (candidate) {
    return candidate.id !== conversationId;
  });
  if (state.activeConversationId === conversationId) {
    state.activeConversationId = state.conversations[0] ? state.conversations[0].id : null;
    const next = getActiveConversation();
    if (next) {
      state.selectedProvider = next.provider;
      state.selectedModel = next.model;
    }
  }
  saveConversations();
  saveSelection();
  populateSelectors();
  renderConversationList();
  renderMessages();
  announce('Conversation supprimée.');
}

function populateSelectors() {
  const provider = PROVIDERS[state.selectedProvider];
  if (!provider) return;
  const models = modelsFor(state.selectedProvider);
  const hasSelectedModel = models.some(function (model) {
    return model.id === state.selectedModel;
  });
  if (!hasSelectedModel && !provider.allowCustomModel) {
    state.selectedModel = firstModelId(state.selectedProvider);
  }

  const model = modelFor(state.selectedProvider, state.selectedModel);
  const providerButton = byId('providerMenuBtn');
  const modelButton = byId('modelMenuBtn');
  byId('providerMenuValue').textContent = provider.name;
  byId('modelMenuValue').textContent = model.name + (model.free ? ' · Gratuit' : '');
  providerButton.setAttribute('aria-label', 'Choisir le fournisseur : ' + provider.name);
  modelButton.setAttribute('aria-label', 'Choisir le modèle : ' + model.name);
  updatePickerTriggerState();
  updateModelDisplay();
}

function populateModelSelector() {
  populateSelectors();
}

function updateModelDisplay() {
  const display = byId('modelDisplayName');
  if (display) display.textContent = 'Modèle actif : ' + formatModelLabel(state.selectedProvider, state.selectedModel);
}

function applySelectionToActiveConversation() {
  const conversation = getActiveConversation();
  if (!conversation) return;
  conversation.provider = state.selectedProvider;
  conversation.model = state.selectedModel;
  touchConversation(conversation);
  saveConversations();
}

function selectProvider(providerKey) {
  if (!knownProvider(providerKey)) return;
  state.selectedProvider = providerKey;
  state.selectedModel = firstModelId(providerKey);
  state.editingMessageId = null;
  applySelectionToActiveConversation();
  saveSelection();
  populateSelectors();
  renderConversationList();
  closePicker();
}

function selectModel(nextValue) {
  if (nextValue === '__custom__') {
    openCustomModelForm();
    return;
  }
  if (!nextValue) return;
  state.selectedModel = nextValue;
  state.editingMessageId = null;
  applySelectionToActiveConversation();
  saveSelection();
  populateSelectors();
  closePicker();
}

function updatePickerTriggerState() {
  const providerButton = byId('providerMenuBtn');
  const modelButton = byId('modelMenuBtn');
  if (!providerButton || !modelButton) return;
  providerButton.setAttribute('aria-expanded', state.pickerKind === 'provider' ? 'true' : 'false');
  modelButton.setAttribute('aria-expanded', state.pickerKind === 'model' ? 'true' : 'false');
}

function makePickerOption(label, selected, onSelect, options) {
  const settings = options || {};
  const button = makeElement('button', 'picker-option');
  button.type = 'button';
  button.setAttribute('role', settings.action ? 'menuitem' : 'menuitemradio');
  if (!settings.action) button.setAttribute('aria-checked', selected ? 'true' : 'false');

  const text = makeElement('span', 'picker-option-text');
  text.append(makeElement('span', 'picker-option-label', label));
  if (settings.detail) text.append(makeElement('span', 'picker-option-detail', settings.detail));
  button.append(text);
  if (settings.badge) button.append(makeElement('span', 'picker-option-badge', settings.badge));
  if (selected) {
    const check = makeIcon('check');
    if (check) {
      check.classList.add('picker-option-check');
      button.append(check);
    }
  }
  button.addEventListener('click', onSelect);
  button.addEventListener('keydown', handlePickerOptionKeydown);
  return button;
}

function handlePickerOptionKeydown(event) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
  const options = Array.from(byId('pickerOptions').querySelectorAll('.picker-option:not([disabled])'));
  const currentIndex = options.indexOf(event.currentTarget);
  if (currentIndex === -1 || options.length === 0) return;
  let nextIndex = currentIndex;
  if (event.key === 'ArrowDown') nextIndex = (currentIndex + 1) % options.length;
  if (event.key === 'ArrowUp') nextIndex = (currentIndex - 1 + options.length) % options.length;
  if (event.key === 'Home') nextIndex = 0;
  if (event.key === 'End') nextIndex = options.length - 1;
  event.preventDefault();
  options[nextIndex].focus();
}

function renderPicker() {
  const kind = state.pickerKind;
  if (!kind) return;
  const title = byId('pickerTitle');
  const kicker = byId('pickerKicker');
  const options = byId('pickerOptions');
  options.replaceChildren();

  if (state.pickerMode === 'custom') {
    kicker.textContent = 'OpenRouter ou OpenCode Zen';
    title.textContent = 'Ajouter un modèle';
    renderCustomModelForm(options);
    return;
  }

  if (kind === 'provider') {
    kicker.textContent = 'Fournisseurs';
    title.textContent = 'Choisir un fournisseur';
    PROVIDER_KEYS.forEach(function (providerKey) {
      const provider = PROVIDERS[providerKey];
      options.append(makePickerOption(provider.name, providerKey === state.selectedProvider, function () {
        selectProvider(providerKey);
      }));
    });
    return;
  }

  const provider = PROVIDERS[state.selectedProvider];
  const models = modelsFor(state.selectedProvider);
  const hasSelectedModel = models.some(function (model) {
    return model.id === state.selectedModel;
  });
  kicker.textContent = provider.name;
  title.textContent = 'Choisir un modèle';
  if (!hasSelectedModel && state.selectedModel) {
    options.append(makePickerOption(state.selectedModel, true, function () {
      selectModel(state.selectedModel);
    }, { detail: 'Identifiant personnalisé' }));
  }
  models.forEach(function (model) {
    options.append(makePickerOption(model.name, model.id === state.selectedModel, function () {
      selectModel(model.id);
    }, { badge: model.free ? 'Gratuit' : '' }));
  });
  if (provider.allowCustomModel) {
    options.append(makePickerOption('Ajouter un identifiant personnalisé', false, function () {
      selectModel('__custom__');
    }, { action: true, detail: 'Par exemple : fournisseur/modèle' }));
  }
}

function renderCustomModelForm(container) {
  const form = makeElement('form', 'picker-custom-form');
  const help = makeElement('p', 'picker-custom-help', 'Saisis l’identifiant exact communiqué par le fournisseur.');
  const input = makeElement('input');
  input.type = 'text';
  input.id = 'customModelInput';
  input.value = state.selectedModel || '';
  input.placeholder = 'fournisseur/modèle';
  input.autocomplete = 'off';
  input.spellcheck = false;
  input.setAttribute('aria-label', 'Identifiant du modèle personnalisé');
  const actions = makeElement('div', 'picker-custom-actions');
  const cancel = makeElement('button', 'btn btn-secondary', 'Retour');
  cancel.type = 'button';
  cancel.addEventListener('click', function () {
    state.pickerMode = 'options';
    renderPicker();
  });
  const confirm = makeElement('button', 'btn btn-primary', 'Utiliser ce modèle');
  confirm.type = 'submit';
  actions.append(cancel, confirm);
  form.append(help, input, actions);
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const customModel = input.value.trim();
    if (!customModel) {
      announce('Saisis un identifiant de modèle avant de continuer.');
      input.focus();
      return;
    }
    state.selectedModel = customModel;
    state.editingMessageId = null;
    applySelectionToActiveConversation();
    saveSelection();
    populateSelectors();
    closePicker();
  });
  container.append(form);
}

function openCustomModelForm() {
  state.pickerMode = 'custom';
  renderPicker();
  window.requestAnimationFrame(function () {
    const input = byId('customModelInput');
    if (input) input.focus();
  });
}

function openPicker(kind) {
  if (state.streaming || (kind !== 'provider' && kind !== 'model')) return;
  const modal = byId('settingsModal');
  if (modal && !modal.hidden) return;
  state.pickerKind = kind;
  state.pickerMode = 'options';
  state.pickerReturnFocus = document.activeElement && typeof document.activeElement.focus === 'function' ? document.activeElement : null;
  renderPicker();
  const overlay = byId('pickerOverlay');
  overlay.hidden = false;
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('picker-open');
  updatePickerTriggerState();
  window.requestAnimationFrame(function () {
    overlay.classList.add('open');
    const selected = overlay.querySelector('[aria-checked="true"]');
    const first = selected || overlay.querySelector('.picker-option, #customModelInput, #pickerClose');
    if (first && typeof first.focus === 'function') first.focus();
  });
}

function closePicker(restoreFocus) {
  const overlay = byId('pickerOverlay');
  if (!overlay || overlay.hidden) return;
  overlay.classList.remove('open');
  overlay.hidden = true;
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('picker-open');
  const returnFocus = state.pickerReturnFocus;
  state.pickerKind = null;
  state.pickerMode = 'options';
  state.pickerReturnFocus = null;
  updatePickerTriggerState();
  if (restoreFocus !== false && returnFocus && returnFocus.isConnected) returnFocus.focus();
}

function resizeTextarea() {
  const textarea = byId('composerTextarea');
  textarea.style.height = 'auto';
  textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
}

function isMobileViewport() {
  return window.matchMedia ? window.matchMedia('(max-width: 768px)').matches : window.innerWidth <= 768;
}

function updateComposer() {
  const textarea = byId('composerTextarea');
  const send = byId('sendBtn');
  const stop = byId('stopBtn');
  const provider = byId('providerMenuBtn');
  const model = byId('modelMenuBtn');
  const hasText = Boolean(textarea.value.trim());
  textarea.disabled = state.streaming;
  provider.disabled = state.streaming;
  model.disabled = state.streaming;
  if (state.streaming) closePicker(false);
  send.hidden = state.streaming;
  stop.hidden = !state.streaming;
  send.disabled = state.streaming || !hasText;
}

function setSidebarOpen(open) {
  const sidebar = byId('sidebar');
  const overlay = byId('sidebarOverlay');
  const shouldOpen = isMobileViewport() && Boolean(open);
  sidebar.classList.toggle('open', shouldOpen);
  sidebar.setAttribute('aria-hidden', shouldOpen || !isMobileViewport() ? 'false' : 'true');
  sidebar.inert = isMobileViewport() && !shouldOpen;
  overlay.hidden = !shouldOpen;
  overlay.classList.toggle('open', shouldOpen);
  overlay.setAttribute('aria-hidden', shouldOpen ? 'false' : 'true');
  byId('sidebarToggle').setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
}

function toggleSidebar() {
  setSidebarOpen(!byId('sidebar').classList.contains('open'));
}

function closeSidebar() {
  setSidebarOpen(false);
}

function clearSettingsBody() {
  byId('settingsBody').replaceChildren();
}

function makeSettingsField(labelText, control) {
  const field = makeElement('div', 'settings-field');
  const label = makeElement('label', '', labelText);
  if (control.id) label.htmlFor = control.id;
  field.append(label, control);
  return field;
}

function renderSettings() {
  const body = byId('settingsBody');
  clearSettingsBody();
  body.append(makeElement('h3', '', 'Clés API'));
  body.append(makeElement('p', 'settings-helper', 'Les clés sont enregistrées uniquement dans le localStorage de ce navigateur. Elles ne sont envoyées qu’au fournisseur que tu choisis.'));

  PROVIDER_KEYS.forEach(function (providerKey) {
    const provider = PROVIDERS[providerKey];
    const group = makeElement('div', 'settings-group');
    const label = makeElement('label', '', provider.name);
    label.htmlFor = 'apiKey-' + providerKey;
    const field = makeElement('div', 'api-key-field');
    const input = makeElement('input');
    input.type = 'password';
    input.id = 'apiKey-' + providerKey;
    input.value = state.apiKeys[providerKey] || '';
    input.placeholder = provider.keyPlaceholder || 'Clé API';
    input.autocomplete = 'off';
    input.spellcheck = false;
    input.setAttribute('aria-label', 'Clé API ' + provider.name);
    const visibility = makeActionButton('Afficher la clé', 'eye', function () {
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      visibility.setAttribute('aria-label', isPassword ? 'Masquer la clé' : 'Afficher la clé');
      visibility.replaceChildren(makeIcon(isPassword ? 'eyeOff' : 'eye'));
    }, 'api-key-toggle');
    field.append(input, visibility);
    if (provider.docsUrl) {
      const link = makeElement('a', 'api-key-docs');
      link.href = provider.docsUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', 'Obtenir une clé ' + provider.name);
      link.title = 'Obtenir une clé';
      link.append(makeIcon('external'));
      field.append(link);
    }
    group.append(label, field);
    body.append(group);
  });

  const zenTools = makeElement('div', 'settings-inline-action');
  const zenDescription = makeElement('p', 'settings-helper', 'Zen propose plusieurs formats d’API. OmniChat n’affiche que les modèles compatibles avec Chat Completions ; les six gratuits sont déjà intégrés.');
  const refreshZen = makeElement('button', 'btn btn-secondary', 'Rafraîchir les modèles Zen');
  refreshZen.type = 'button';
  refreshZen.append(makeIcon('download'));
  refreshZen.addEventListener('click', function () {
    refreshZenModels(refreshZen);
  });
  zenTools.append(zenDescription, refreshZen);
  body.append(zenTools);

  body.append(makeElement('h3', '', 'Paramètres du modèle'));
  const parameters = makeElement('div', 'settings-row');
  const temperature = makeElement('input');
  temperature.id = 'settingsTemperature';
  temperature.type = 'number';
  temperature.min = '0';
  temperature.max = '2';
  temperature.step = '0.1';
  temperature.value = String(state.settings.temperature);
  parameters.append(makeSettingsField('Température', temperature));
  const maxTokens = makeElement('input');
  maxTokens.id = 'settingsMaxTokens';
  maxTokens.type = 'number';
  maxTokens.min = '1';
  maxTokens.max = '128000';
  maxTokens.step = '1';
  maxTokens.value = String(state.settings.maxTokens);
  parameters.append(makeSettingsField('Max tokens', maxTokens));
  body.append(parameters);

  const systemPrompt = makeElement('textarea');
  systemPrompt.id = 'settingsSystemPrompt';
  systemPrompt.rows = 4;
  systemPrompt.value = state.settings.systemPrompt;
  body.append(makeSettingsField('System prompt global', systemPrompt));
}

function openSettings(focusProviderKey) {
  const pickerWasOpen = !byId('pickerOverlay').hidden;
  const pickerFocus = state.pickerReturnFocus;
  closePicker(false);
  lastFocusedElement = pickerWasOpen && pickerFocus ? pickerFocus : document.activeElement;
  settingsFocusProvider = knownProvider(focusProviderKey) ? focusProviderKey : null;
  renderSettings();
  const modal = byId('settingsModal');
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  window.requestAnimationFrame(function () {
    modal.classList.add('open');
    const target = settingsFocusProvider ? byId('apiKey-' + settingsFocusProvider) : byId('settingsClose');
    if (target) target.focus();
  });
}

function closeSettings(restoreFocus) {
  const modal = byId('settingsModal');
  if (modal.hidden) return;
  modal.classList.remove('open');
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (restoreFocus !== false && lastFocusedElement && typeof lastFocusedElement.focus === 'function' && lastFocusedElement.isConnected) {
    lastFocusedElement.focus();
  }
  lastFocusedElement = null;
  settingsFocusProvider = null;
}

function saveSettingsFromModal() {
  const nextKeys = {};
  PROVIDER_KEYS.forEach(function (providerKey) {
    const input = byId('apiKey-' + providerKey);
    const key = input ? input.value.trim() : '';
    if (key) nextKeys[providerKey] = key;
  });
  state.apiKeys = nextKeys;
  state.settings.temperature = clamp(byId('settingsTemperature').value, 0, 2, DEFAULT_SETTINGS.temperature);
  state.settings.maxTokens = Math.round(clamp(byId('settingsMaxTokens').value, 1, 128000, DEFAULT_SETTINGS.maxTokens));
  state.settings.systemPrompt = byId('settingsSystemPrompt').value.trim();
  saveApiKeys();
  saveSettings();
  closeSettings();
  renderMessages();
  announce('Paramètres enregistrés.');
}

async function refreshZenModels(button) {
  const initialText = button.textContent;
  button.disabled = true;
  button.textContent = 'Actualisation…';
  try {
    const response = await fetch(PROVIDERS.opencode.baseUrl + '/models');
    if (!response.ok) throw await responseError(response);
    const payload = await response.json();
    const candidates = Array.isArray(payload) ? payload : (Array.isArray(payload.data) ? payload.data : []);
    const unique = new Map();
    let skipped = 0;
    candidates.forEach(function (candidate) {
      const rawId = typeof candidate === 'string' ? candidate : candidate && candidate.id;
      if (!rawId || typeof rawId !== 'string') return;
      if (!zenSupportsChatCompletions(rawId)) {
        skipped += 1;
        return;
      }
      const id = rawId.indexOf('opencode/') === 0 ? rawId : 'opencode/' + rawId;
      const name = typeof candidate === 'object' && candidate.name ? candidate.name : rawId.replace(/^opencode\//, '');
      unique.set(id, {
        id: id,
        name: name,
        free: /free|big-pickle/i.test(id)
      });
    });
    state.zenModels = Array.from(unique.values()).sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    if (state.selectedProvider === 'opencode') populateModelSelector();
    announce(state.zenModels.length + ' modèles Zen compatibles Chat Completions disponibles dans cette session.' + (skipped ? ' ' + skipped + ' modèle(s) d’un autre format ont été ignorés.' : ''));
  } catch (error) {
    announce(friendlyError(error, PROVIDERS.opencode));
  } finally {
    button.disabled = false;
    button.textContent = initialText;
    button.prepend(makeIcon('download'));
  }
}

function clearAllData() {
  if (!window.confirm('Tout effacer ? Toutes les conversations, clés API, réglages et préférences de thème seront supprimés de ce navigateur.')) return;
  if (state.abortController) state.abortController.abort();
  state.requestNumber += 1;
  state.streaming = false;
  state.streamingMessageId = null;
  state.abortController = null;
  Object.keys(STORAGE).forEach(function (key) {
    localStorage.removeItem(STORAGE[key]);
  });
  state.conversations = [];
  state.activeConversationId = null;
  state.apiKeys = {};
  state.settings = Object.assign({}, DEFAULT_SETTINGS);
  state.selectedProvider = 'openai';
  state.selectedModel = firstModelId('openai');
  state.themePreference = 'system';
  state.zenModels = [];
  state.editingMessageId = null;
  closeSettings(false);
  applyTheme();
  populateSelectors();
  renderConversationList();
  renderMessages();
  updateComposer();
  announce('Les données locales ont été effacées.');
}

class ProviderRequestError extends Error {
  constructor(status, message) {
    super(message || 'Erreur du fournisseur');
    this.name = 'ProviderRequestError';
    this.status = status;
  }
}

async function responseError(response) {
  let message = '';
  try {
    const body = await response.text();
    try {
      const json = JSON.parse(body);
      message = json.error && typeof json.error.message === 'string' ? json.error.message : (json.message || '');
    } catch (error) {
      message = body.slice(0, 300);
    }
  } catch (error) {
    message = '';
  }
  return new ProviderRequestError(response.status, message);
}

function endpoint(baseUrl, path) {
  return baseUrl.replace(/\/+$/, '') + path;
}

function contentToText(content) {
  if (typeof content === 'string') return content;
  if (!Array.isArray(content)) return '';
  return content.map(function (part) {
    if (typeof part === 'string') return part;
    if (part && typeof part.text === 'string') return part.text;
    if (part && part.text && typeof part.text.value === 'string') return part.text.value;
    return '';
  }).join('');
}

async function consumeSse(response, onData) {
  if (!response.body || !response.body.getReader) throw new Error('Le fournisseur ne fournit pas de flux lisible.');
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  function consumeBlock(block) {
    const data = block.split(/\r?\n/).filter(function (line) {
      return line.indexOf('data:') === 0;
    }).map(function (line) {
      return line.slice(5).trimStart();
    }).join('\n').trim();
    if (data) onData(data);
  }

  while (true) {
    const chunk = await reader.read();
    if (chunk.done) break;
    buffer += decoder.decode(chunk.value, { stream: true });
    let boundary = buffer.search(/\r?\n\r?\n/);
    while (boundary !== -1) {
      const block = buffer.slice(0, boundary);
      const separatorLength = buffer.slice(boundary).indexOf('\r\n') === 0 ? 4 : 2;
      buffer = buffer.slice(boundary + separatorLength);
      consumeBlock(block);
      boundary = buffer.search(/\r?\n\r?\n/);
    }
  }
  buffer += decoder.decode();
  if (buffer.trim()) consumeBlock(buffer);
}

async function sendOpenAiCompatible(options) {
  if (options.providerKey === 'opencode' && !zenSupportsChatCompletions(options.modelId)) {
    throw new Error('Ce modèle Zen utilise un autre endpoint que Chat Completions. Choisis un modèle Zen compatible, par exemple Big Pickle ou DeepSeek V4 Flash Free.');
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + options.apiKey
  };
  if (options.providerKey === 'openrouter') {
    headers['HTTP-Referer'] = window.location.origin;
    headers['X-Title'] = 'OmniChat';
  }

  const body = {
    model: options.modelId,
    messages: options.messages,
    temperature: options.settings.temperature,
    stream: true
  };
  /* OpenAI deprecates max_tokens in favour of max_completion_tokens. The other
     compatible APIs still expect max_tokens, so keep their wire format intact. */
  body[options.providerKey === 'openai' ? 'max_completion_tokens' : 'max_tokens'] = options.settings.maxTokens;

  const response = await fetch(endpoint(options.provider.baseUrl, '/chat/completions'), {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
    signal: options.signal
  });
  if (!response.ok) throw await responseError(response);

  await consumeSse(response, function (data) {
    if (data === '[DONE]') return;
    try {
      const event = JSON.parse(data);
      const text = contentToText(event.choices && event.choices[0] && event.choices[0].delta ? event.choices[0].delta.content : '');
      if (text) options.onToken(text);
    } catch (error) {
      console.warn('Événement SSE OpenAI-compatible ignoré.', error);
    }
  });
}

async function sendAnthropic(options) {
  const system = options.messages.filter(function (message) {
    return message.role === 'system';
  }).map(function (message) {
    return message.content;
  }).join('\n');
  const messages = options.messages.filter(function (message) {
    return message.role !== 'system';
  });
  const body = {
    model: options.modelId,
    messages: messages,
    max_tokens: options.settings.maxTokens,
    temperature: options.settings.temperature,
    stream: true
  };
  if (system) body.system = system;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': options.apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify(body),
    signal: options.signal
  });
  if (!response.ok) throw await responseError(response);

  await consumeSse(response, function (data) {
    try {
      const event = JSON.parse(data);
      if (event.type === 'content_block_start' && event.content_block && event.content_block.text) {
        options.onToken(event.content_block.text);
      }
      if (event.type === 'content_block_delta' && event.delta && event.delta.text) {
        options.onToken(event.delta.text);
      }
    } catch (error) {
      console.warn('Événement SSE Anthropic ignoré.', error);
    }
  });
}

async function sendGemini(options) {
  const system = options.messages.filter(function (message) {
    return message.role === 'system';
  }).map(function (message) {
    return message.content;
  }).join('\n');
  const contents = options.messages.filter(function (message) {
    return message.role !== 'system';
  }).map(function (message) {
    return {
      role: message.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: message.content }]
    };
  });
  const body = {
    contents: contents,
    generationConfig: {
      temperature: options.settings.temperature,
      maxOutputTokens: options.settings.maxTokens
    }
  };
  if (system) body.systemInstruction = { parts: [{ text: system }] };

  const url = endpoint(options.provider.baseUrl, '/models/') + encodeURIComponent(options.modelId) + ':streamGenerateContent?alt=sse&key=' + encodeURIComponent(options.apiKey);
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: options.signal
  });
  if (!response.ok) throw await responseError(response);

  await consumeSse(response, function (data) {
    try {
      const event = JSON.parse(data);
      const parts = event.candidates && event.candidates[0] && event.candidates[0].content ? event.candidates[0].content.parts : [];
      const text = Array.isArray(parts) ? parts.map(function (part) { return part.text || ''; }).join('') : '';
      if (text) options.onToken(text);
    } catch (error) {
      console.warn('Événement SSE Gemini ignoré.', error);
    }
  });
}

const ADAPTERS = {
  openai: sendOpenAiCompatible,
  anthropic: sendAnthropic,
  gemini: sendGemini
};

function buildApiMessages(conversation, assistantMessage, systemPrompt) {
  const messages = [];
  if (systemPrompt) messages.push({ role: 'system', content: systemPrompt });
  const end = conversation.messages.findIndex(function (message) {
    return message.id === assistantMessage.id;
  });
  const source = end === -1 ? conversation.messages : conversation.messages.slice(0, end);
  source.forEach(function (message) {
    if ((message.role === 'user' || message.role === 'assistant') && message.content && !message.isError) {
      messages.push({ role: message.role, content: message.content });
    }
  });
  return messages;
}

function friendlyError(error, provider) {
  if (error && ERROR_MESSAGES[error.status]) return ERROR_MESSAGES[error.status];
  if (error && error.name === 'TypeError') {
    if (provider === PROVIDERS.opencode) {
      return 'OpenCode Zen ne répond pas actuellement aux appels CORS depuis GitHub Pages. Cette app statique ne peut pas contourner ce blocage du fournisseur ; utilise un autre fournisseur ou un proxy que tu contrôles.';
    }
    return 'Impossible de joindre ' + provider.name + '. Vérifie ta connexion et le CORS autorisé par ce fournisseur.';
  }
  if (error && error.message) {
    const message = error.message.replace(/\s+/g, ' ').trim();
    if (message && message.length < 220) return 'Erreur avec ' + provider.name + ' : ' + message;
  }
  return 'Erreur de connexion avec ' + provider.name + '. Vérifie ta connexion, la clé API et le CORS, puis réessaie.';
}

function markAssistantError(conversation, message, error, provider) {
  message.isError = true;
  message.stopped = false;
  message.content = friendlyError(error, provider);
  touchConversation(conversation);
  saveConversations();
  renderMessages();
  announce('La réponse a échoué. Un bouton Réessayer est disponible.');
}

async function startAssistantResponse(conversation, providerKey, modelId) {
  if (state.streaming) return;
  const provider = PROVIDERS[providerKey];
  const adapter = provider && ADAPTERS[provider.adapter];
  const apiKey = state.apiKeys[providerKey];
  if (!provider || !adapter || !apiKey) return;

  const model = modelFor(providerKey, modelId);
  const assistantMessage = {
    id: generateId(),
    role: 'assistant',
    content: '',
    createdAt: Date.now(),
    providerKey: providerKey,
    modelId: modelId,
    modelLabel: formatModelLabel(providerKey, modelId),
    free: Boolean(model.free),
    isError: false,
    stopped: false
  };
  const wasNearBottom = isNearBottom();
  conversation.messages.push(assistantMessage);
  touchConversation(conversation);
  state.streaming = true;
  state.streamingMessageId = assistantMessage.id;
  state.abortController = new AbortController();
  state.requestNumber += 1;
  const requestNumber = state.requestNumber;
  state.followOutput = wasNearBottom;
  saveConversations();
  renderMessages();
  updateComposer();
  if (wasNearBottom) scrollToBottom(false);
  announce('Réponse en cours avec ' + assistantMessage.modelLabel + '.');

  const settings = {
    temperature: state.settings.temperature,
    maxTokens: state.settings.maxTokens,
    systemPrompt: state.settings.systemPrompt
  };
  const messages = buildApiMessages(conversation, assistantMessage, settings.systemPrompt);

  try {
    await adapter({
      provider: provider,
      providerKey: providerKey,
      apiKey: apiKey,
      modelId: modelId,
      messages: messages,
      settings: settings,
      signal: state.abortController.signal,
      onToken: function (token) {
        if (requestNumber !== state.requestNumber) return;
        assistantMessage.content += token;
        queueAssistantRender(assistantMessage);
      }
    });
    if (requestNumber !== state.requestNumber) return;
    if (!assistantMessage.content.trim()) {
      markAssistantError(conversation, assistantMessage, new Error('Le fournisseur n’a renvoyé aucun texte.'), provider);
      return;
    }
    touchConversation(conversation);
    saveConversations();
    announce('Réponse terminée.');
  } catch (error) {
    if (requestNumber !== state.requestNumber) return;
    if (error && error.name === 'AbortError') {
      assistantMessage.stopped = true;
      touchConversation(conversation);
      saveConversations();
      announce('Génération interrompue.');
    } else {
      markAssistantError(conversation, assistantMessage, error, provider);
    }
  } finally {
    if (requestNumber === state.requestNumber) {
      state.streaming = false;
      state.streamingMessageId = null;
      state.abortController = null;
      renderConversationList();
      renderMessages();
      updateComposer();
      updateScrollButton();
    }
  }
}

function sendMessage(text) {
  const content = String(text || '').trim();
  if (!content || state.streaming) return;
  const provider = PROVIDERS[state.selectedProvider];
  if (!state.apiKeys[state.selectedProvider]) {
    announce('Ajoute une clé API pour le fournisseur sélectionné.');
    openSettings(state.selectedProvider);
    return;
  }
  const conversation = ensureActiveConversation();
  state.editingMessageId = null;
  const wasNearBottom = isNearBottom();
  conversation.provider = state.selectedProvider;
  conversation.model = state.selectedModel;
  conversation.messages.push({
    id: generateId(),
    role: 'user',
    content: content,
    createdAt: Date.now(),
    isError: false,
    stopped: false
  });
  if (conversation.title === 'Nouveau chat') conversation.title = conversationTitle(conversation);
  touchConversation(conversation);
  state.followOutput = wasNearBottom;
  saveConversations();
  saveSelection();
  renderConversationList();
  renderMessages();
  if (wasNearBottom) scrollToBottom(false);
  startAssistantResponse(conversation, state.selectedProvider, state.selectedModel);
}

function submitComposer() {
  const textarea = byId('composerTextarea');
  const content = textarea.value;
  if (!content.trim() || state.streaming) return;
  textarea.value = '';
  resizeTextarea();
  updateComposer();
  sendMessage(content);
}

function retryAssistantMessage(messageId) {
  if (state.streaming) return;
  const conversation = getActiveConversation();
  if (!conversation) return;
  const index = conversation.messages.findIndex(function (message) {
    return message.id === messageId;
  });
  if (index < 1 || conversation.messages[index].role !== 'assistant') return;
  const previousMessages = conversation.messages.slice(0, index);
  if (!previousMessages.some(function (message) { return message.role === 'user'; })) return;
  const original = conversation.messages[index];
  conversation.messages = previousMessages;
  touchConversation(conversation);
  saveConversations();
  renderMessages();
  startAssistantResponse(conversation, original.providerKey || state.selectedProvider, original.modelId || state.selectedModel);
}

function trapFocus(event, container) {
  const focusable = Array.from(container.querySelectorAll('button:not([disabled]), input:not([disabled]), textarea:not([disabled]), a[href]')).filter(function (element) {
    return !element.hidden;
  });
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function handleDocumentKeydown(event) {
  const picker = byId('pickerOverlay');
  const modal = byId('settingsModal');
  if (event.key === 'Escape') {
    if (!picker.hidden) {
      event.preventDefault();
      closePicker();
      return;
    }
    if (!modal.hidden) {
      event.preventDefault();
      closeSettings();
      return;
    }
    if (state.editingMessageId) {
      event.preventDefault();
      cancelEditing();
      return;
    }
    if (byId('sidebar').classList.contains('open')) {
      event.preventDefault();
      closeSidebar();
    }
  }

  if (event.key === 'Tab' && !picker.hidden) {
    trapFocus(event, picker);
    return;
  }

  if (event.key === 'Tab' && !modal.hidden) {
    trapFocus(event, modal);
  }
}

function wireEvents() {
  byId('newChatBtn').addEventListener('click', function () {
    if (state.streaming) {
      announce('Arrête la réponse en cours avant de créer un nouveau chat.');
      return;
    }
    createConversation();
    renderConversationList();
    renderMessages();
    closeSidebar();
  });
  byId('sidebarToggle').addEventListener('click', toggleSidebar);
  byId('sidebarToggleSide').addEventListener('click', closeSidebar);
  byId('sidebarClose').addEventListener('click', closeSidebar);
  byId('sidebarOverlay').addEventListener('click', closeSidebar);
  byId('searchConv').addEventListener('input', renderConversationList);

  byId('providerMenuBtn').addEventListener('click', function () { openPicker('provider'); });
  byId('modelMenuBtn').addEventListener('click', function () { openPicker('model'); });
  [
    { id: 'providerMenuBtn', kind: 'provider' },
    { id: 'modelMenuBtn', kind: 'model' }
  ].forEach(function (control) {
    byId(control.id).addEventListener('keydown', function (event) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        openPicker(control.kind);
      }
    });
  });
  byId('pickerClose').addEventListener('click', function () { closePicker(); });
  byId('pickerOverlay').addEventListener('click', function (event) {
    if (event.target === event.currentTarget) closePicker();
  });
  byId('themeToggle').addEventListener('click', toggleTheme);
  byId('settingsBtn').addEventListener('click', function () { openSettings(); });
  byId('headerSettingsBtn').addEventListener('click', function () { openSettings(); });
  byId('settingsClose').addEventListener('click', function () { closeSettings(); });
  byId('settingsSaveBtn').addEventListener('click', saveSettingsFromModal);
  byId('clearAllBtn').addEventListener('click', clearAllData);
  byId('settingsModal').addEventListener('click', function (event) {
    if (event.target === event.currentTarget) closeSettings();
  });

  byId('composerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    submitComposer();
  });
  byId('composerTextarea').addEventListener('input', function () {
    resizeTextarea();
    updateComposer();
  });
  byId('composerTextarea').addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      submitComposer();
    }
  });
  byId('stopBtn').addEventListener('click', function () {
    if (state.abortController) state.abortController.abort();
  });
  byId('messagesContainer').addEventListener('scroll', function () {
    state.followOutput = isNearBottom();
    updateScrollButton();
  });
  byId('scrollBottomBtn').addEventListener('click', function () {
    scrollToBottom(true);
  });
  document.addEventListener('keydown', handleDocumentKeydown);
  window.addEventListener('resize', function () {
    setSidebarOpen(byId('sidebar').classList.contains('open'));
    updateScrollButton();
  });
  if (window.matchMedia) {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    query.addEventListener('change', function () {
      if (state.themePreference === 'system') applyTheme();
    });
  }
}

function init() {
  loadState();
  if (window.marked && typeof window.marked.setOptions === 'function') {
    window.marked.setOptions({ breaks: true, gfm: true });
  }
  applyTheme();
  populateSelectors();
  setSidebarOpen(false);
  renderConversationList();
  renderMessages();
  resizeTextarea();
  updateComposer();
  wireEvents();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
