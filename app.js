/* ===== CONFIGURATION ===== */
const PROVIDERS = {
  openai: {
    name: 'OpenAI',
    adapter: 'openai',
    baseUrl: 'https://api.openai.com/v1',
    docsUrl: 'https://platform.openai.com/api-keys',
    models: [
      { id: 'gpt-5.6-sol', name: 'GPT-5.6 Sol' },
      { id: 'gpt-5.6-terra', name: 'GPT-5.6 Terra' },
      { id: 'gpt-5.6-luna', name: 'GPT-5.6 Luna' },
      { id: 'gpt-5.5', name: 'GPT-5.5' },
      { id: 'gpt-5.5-pro', name: 'GPT-5.5 Pro' },
      { id: 'gpt-5.4-mini', name: 'GPT-5.4 Mini' },
      { id: 'gpt-4.1', name: 'GPT-4.1' },
    ]
  },
  anthropic: {
    name: 'Anthropic',
    adapter: 'anthropic',
    baseUrl: 'https://api.anthropic.com/v1',
    docsUrl: 'https://console.anthropic.com/settings/keys',
    corsSupported: true,
    models: [
      { id: 'claude-opus-4-8', name: 'Claude Opus 4-8' },
      { id: 'claude-sonnet-5', name: 'Claude Sonnet 5' },
      { id: 'claude-opus-4-7', name: 'Claude Opus 4-7' },
      { id: 'claude-haiku-4-5', name: 'Claude Haiku 4-5' },
    ]
  },
  gemini: {
    name: 'Google Gemini',
    adapter: 'gemini',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
    docsUrl: 'https://aistudio.google.com/app/apikey',
    models: [
      { id: 'gemini-3.6-flash', name: 'Gemini 3.6 Flash' },
      { id: 'gemini-3.5-flash-lite', name: 'Gemini 3.5 Flash Lite' },
      { id: 'gemini-3.1-pro-preview', name: 'Gemini 3.1 Pro Preview' },
      { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro' },
    ]
  },
  xai: {
    name: 'xAI',
    adapter: 'openai',
    baseUrl: 'https://api.x.ai/v1',
    docsUrl: 'https://console.x.ai/',
    models: [
      { id: 'grok-4.5', name: 'Grok 4.5' },
    ]
  },
  deepseek: {
    name: 'DeepSeek',
    adapter: 'openai',
    baseUrl: 'https://api.deepseek.com/v1',
    docsUrl: 'https://platform.deepseek.com/api_keys',
    models: [
      { id: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro' },
      { id: 'deepseek-v4-flash', name: 'DeepSeek V4 Flash' },
    ]
  },
  qwen: {
    name: 'Alibaba Qwen',
    adapter: 'openai',
    baseUrl: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1',
    docsUrl: 'https://bailian.console.aliyun.com/',
    models: [
      { id: 'qwen3.8-max-preview', name: 'Qwen 3.8 Max Preview' },
      { id: 'qwen3.6-27b', name: 'Qwen 3.6 27B' },
    ]
  },
  moonshot: {
    name: 'Moonshot',
    adapter: 'openai',
    baseUrl: 'https://api.moonshot.cn/v1',
    docsUrl: 'https://platform.moonshot.cn/',
    models: [
      { id: 'kimi-k3', name: 'Kimi K3' },
      { id: 'kimi-k2.6', name: 'Kimi K2.6' },
    ]
  },
  openrouter: {
    name: 'OpenRouter',
    adapter: 'openai',
    baseUrl: 'https://openrouter.ai/api/v1',
    docsUrl: 'https://openrouter.ai/keys',
    corsSupported: true,
    models: [
      { id: 'openai/gpt-5.6-sol', name: 'GPT-5.6 Sol' },
      { id: 'openai/gpt-5.5-pro', name: 'GPT-5.5 Pro' },
      { id: 'openai/gpt-4.1', name: 'GPT-4.1' },
      { id: 'anthropic/claude-opus-4-8', name: 'Claude Opus 4-8' },
      { id: 'anthropic/claude-sonnet-5', name: 'Claude Sonnet 5' },
      { id: 'anthropic/claude-haiku-4-5', name: 'Claude Haiku 4-5' },
      { id: 'google/gemini-3.6-flash', name: 'Gemini 3.6 Flash' },
      { id: 'xai/grok-4.5', name: 'Grok 4.5' },
      { id: 'deepseek/deepseek-v4-pro', name: 'DeepSeek V4 Pro' },
      { id: 'qwen/qwen3.8-max-preview', name: 'Qwen 3.8 Max Preview' },
      { id: 'moonshot/kimi-k3', name: 'Kimi K3' },
    ],
    allowCustomModel: true
  },
  opencode: {
    name: 'OpenCode Zen',
    adapter: 'openai',
    baseUrl: 'https://opencode.ai/zen/v1',
    docsUrl: 'https://opencode.ai/docs/zen',
    models: [
      { id: 'opencode/deepseek-v4-flash-free', name: 'DeepSeek V4 Flash (Gratuit)', free: true },
      { id: 'opencode/big-pickle', name: 'Big Pickle (Gratuit)', free: true },
      { id: 'opencode/mimo-v2.5-free', name: 'Mimo v2.5 (Gratuit)', free: true },
      { id: 'opencode/laguna-s-2.1-free', name: 'Laguna S 2.1 (Gratuit)', free: true },
      { id: 'opencode/north-mini-code-free', name: 'North Mini Code (Gratuit)', free: true },
      { id: 'opencode/nemotron-3-ultra-free', name: 'Nemotron 3 Ultra (Gratuit)', free: true },
      { id: 'opencode/claude-sonnet-4-5', name: 'Claude Sonnet 4-5' },
      { id: 'opencode/deepseek-v4-pro', name: 'DeepSeek V4 Pro' },
    ],
    allowCustomModel: true
  }
};

const PROVIDER_KEYS = Object.keys(PROVIDERS);

const STORAGE_KEYS = {
  apiKeys: 'omnichat_apiKeys',
  conversations: 'omnichat_conversations',
  settings: 'omnichat_settings',
  activeConv: 'omnichat_activeConv',
  theme: 'omnichat_theme',
};

const SUGGESTED_PROMPTS = [
  'Explique-moi le théorème de Pythagore simplement',
  'Écris un script Python pour analyser un fichier CSV',
  'Rédige un email professionnel de refus de candidature',
  'Donne-moi 5 idées de projets pour apprendre React',
  'Traduis cette phrase en anglais courant',
  'Résume les points clés du développement durable',
];

const ERRORS = {
  401: 'Clé API invalide pour ce fournisseur. Vérifie-la dans les Paramètres.',
  403: 'Accès refusé. Vérifie ta clé API dans les Paramètres.',
  404: 'Modèle introuvable. Vérifie le nom du modèle.',
  429: 'Limite de débit atteinte. Attends un moment puis réessaie.',
  500: 'Erreur serveur. Réessaie plus tard.',
  502: 'Service temporairement indisponible. Réessaie.',
  503: 'Service indisponible. Réessaie plus tard.',
};

/* ===== STATE ===== */
let state = {
  conversations: [],
  activeConvId: null,
  settings: {
    temperature: 0.7,
    maxTokens: 4096,
    systemPrompt: 'Tu es un assistant IA utile, précis et concis.',
  },
  apiKeys: {},
  theme: null, // 'light' | 'dark' | null (auto)
  selectedProvider: 'openai',
  selectedModel: 'gpt-5.6-sol',
  streaming: false,
  abortController: null,
  editingMessageId: null,
};

function loadState() {
  try {
    const c = localStorage.getItem(STORAGE_KEYS.conversations);
    if (c) state.conversations = JSON.parse(c);
    const a = localStorage.getItem(STORAGE_KEYS.activeConv);
    if (a) state.activeConvId = a;
    const s = localStorage.getItem(STORAGE_KEYS.settings);
    if (s) state.settings = { ...state.settings, ...JSON.parse(s) };
    const k = localStorage.getItem(STORAGE_KEYS.apiKeys);
    if (k) state.apiKeys = JSON.parse(k);
    const t = localStorage.getItem(STORAGE_KEYS.theme);
    if (t) state.theme = t;
  } catch (e) { console.warn('State load error', e); }
}

function saveConversations() {
  localStorage.setItem(STORAGE_KEYS.conversations, JSON.stringify(state.conversations));
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(state.settings));
}

function saveApiKeys() {
  localStorage.setItem(STORAGE_KEYS.apiKeys, JSON.stringify(state.apiKeys));
}

function saveActiveConv() {
  if (state.activeConvId) {
    localStorage.setItem(STORAGE_KEYS.activeConv, state.activeConvId);
  } else {
    localStorage.removeItem(STORAGE_KEYS.activeConv);
  }
}

function saveTheme() {
  if (state.theme) {
    localStorage.setItem(STORAGE_KEYS.theme, state.theme);
  } else {
    localStorage.removeItem(STORAGE_KEYS.theme);
  }
}

function getActiveConversation() {
  return state.conversations.find(c => c.id === state.activeConvId) || null;
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function formatTime(ts) {
  const d = new Date(ts);
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  if (sameDay) {
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  return d.toLocaleDateString([], { day: 'numeric', month: 'short' }) + ' ' +
         d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatDate(ts) {
  const d = new Date(ts);
  const now = new Date();
  const diff = now - d;
  if (diff < 60000) return 'À l\'instant';
  if (diff < 3600000) return Math.floor(diff/60000) + ' min';
  if (diff < 86400000) return Math.floor(diff/3600000) + 'h';
  if (diff < 604800000) return Math.floor(diff/86400000) + 'j';
  return d.toLocaleDateString([], { day: 'numeric', month: 'short' });
}

/* ===== CONVERSATIONS ===== */
function createConversation() {
  const conv = {
    id: generateId(),
    title: 'Nouveau chat',
    messages: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    provider: state.selectedProvider,
    model: state.selectedModel,
  };
  state.conversations.unshift(conv);
  state.activeConvId = conv.id;
  saveConversations();
  saveActiveConv();
  return conv;
}

function deleteConversation(id) {
  state.conversations = state.conversations.filter(c => c.id !== id);
  if (state.activeConvId === id) {
    state.activeConvId = state.conversations.length > 0 ? state.conversations[0].id : null;
    if (!state.activeConvId) {
      createConversation();
    }
  }
  saveConversations();
  saveActiveConv();
}

function renameConversation(id, title) {
  const conv = state.conversations.find(c => c.id === id);
  if (conv) {
    conv.title = title.trim() || 'Sans titre';
    conv.updatedAt = Date.now();
    saveConversations();
  }
}

function updateConversationTimestamp(id) {
  const conv = state.conversations.find(c => c.id === id);
  if (conv) {
    conv.updatedAt = Date.now();
    saveConversations();
  }
}

function sortConversations() {
  state.conversations.sort((a, b) => b.updatedAt - a.updatedAt);
  saveConversations();
}

function getConversationTitle(conv) {
  if (conv.title && conv.title !== 'Nouveau chat') return conv.title;
  const firstUserMsg = conv.messages.find(m => m.role === 'user');
  if (firstUserMsg) {
    const text = firstUserMsg.content.trim();
    return text.length > 50 ? text.slice(0, 50) + '…' : text;
  }
  return 'Nouveau chat';
}

/* ===== ADAPTERS ===== */

// --- OpenAI-compatible (OpenAI, OpenRouter, DeepSeek, Qwen, Moonshot, OpenCode Zen, xAI) ---
async function sendOpenAI({ messages, model, signal, onToken, onError }) {
  const provider = PROVIDERS[state.selectedProvider];
  const baseUrl = state.settings.customBaseUrl || provider.baseUrl;
  const apiKey = state.apiKeys[state.selectedProvider];

  const body = {
    model,
    messages: messages.map(m => ({ role: m.role, content: m.content })),
    temperature: state.settings.temperature,
    max_tokens: Math.floor(state.settings.maxTokens),
    stream: true,
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };
  if (state.selectedProvider === 'openrouter') {
    headers['HTTP-Referer'] = location.origin;
    headers['X-Title'] = 'OmniChat';
  }

  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
    signal,
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    onError(res.status, errText);
    return;
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || !trimmed.startsWith('data: ')) continue;
      const data = trimmed.slice(6).trim();
      if (data === '[DONE]') return;

      try {
        const json = JSON.parse(data);
        const content = json.choices?.[0]?.delta?.content || '';
        if (content) onToken(content);
        if (json.choices?.[0]?.finish_reason) return;
      } catch (e) {
        // skip parse errors
      }
    }
  }
}

// --- Anthropic ---
async function sendAnthropic({ messages, model, signal, onToken, onError }) {
  const apiKey = state.apiKeys['anthropic'];

  // Convert messages to Anthropic format
  const systemMessages = messages.filter(m => m.role === 'system');
  const systemPrompt = systemMessages.map(m => m.content).join('\n');
  const history = messages.filter(m => m.role !== 'system').map(m => ({
    role: m.role === 'assistant' ? 'assistant' : 'user',
    content: m.content,
  }));

  const body = {
    model,
    system: systemPrompt || undefined,
    messages: history.length > 0 ? history : [{ role: 'user', content: 'Hello' }],
    max_tokens: Math.floor(state.settings.maxTokens),
    temperature: state.settings.temperature,
    stream: true,
  };

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify(body),
    signal,
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    onError(res.status, errText);
    return;
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || !trimmed.startsWith('data: ')) continue;
      const data = trimmed.slice(6).trim();
      if (!data) continue;

      try {
        const json = JSON.parse(data);
        if (json.type === 'content_block_start' && json.content_block?.text) {
          onToken(json.content_block.text);
        }
        if (json.type === 'content_block_delta' && json.delta?.text) {
          onToken(json.delta.text);
        }
        if (json.type === 'message_stop' || json.type === 'message_delta') {
          if (json.type === 'message_stop') return;
          continue;
        }
      } catch (e) {
        // skip parse errors
      }
    }
  }
}

// --- Google Gemini ---
async function sendGemini({ messages, model, signal, onToken, onError }) {
  const apiKey = state.apiKeys['gemini'];

  const systemMessages = messages.filter(m => m.role === 'system');
  const systemPrompt = systemMessages.map(m => m.content).join('\n');
  const history = messages.filter(m => m.role !== 'system');

  const contents = history.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  const body = {
    systemInstruction: systemPrompt ? { parts: [{ text: systemPrompt }] } : undefined,
    contents: contents.length > 0 ? contents : [{ role: 'user', parts: [{ text: 'Hello' }] }],
    generationConfig: {
      temperature: state.settings.temperature,
      maxOutputTokens: Math.floor(state.settings.maxTokens),
    },
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`;

  // Clean undefined fields
  if (!body.systemInstruction) delete body.systemInstruction;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    onError(res.status, errText);
    return;
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || !trimmed.startsWith('data: ')) continue;
      const data = trimmed.slice(6).trim();

      try {
        const json = JSON.parse(data);
        const text = json.candidates?.[0]?.content?.parts?.[0]?.text || '';
        if (text) onToken(text);
      } catch (e) {
        // skip
      }
    }
  }
}

const ADAPTERS = {
  openai: sendOpenAI,
  anthropic: sendAnthropic,
  gemini: sendGemini,
};

/* ===== SEND MESSAGE ===== */
async function sendMessage(content) {
  if (state.streaming) return;
  if (!content || !content.trim()) return;

  const provider = PROVIDERS[state.selectedProvider];
  const apiKey = state.apiKeys[state.selectedProvider];
  if (!apiKey) {
    openSettings();
    return;
  }

  state.editingMessageId = null;

  let conv = getActiveConversation();
  if (!conv) {
    conv = createConversation();
  }

  // Add user message
  const userMsg = { id: generateId(), role: 'user', content: content.trim(), createdAt: Date.now() };
  conv.messages.push(userMsg);
  conv.updatedAt = Date.now();
  if (conv.title === 'Nouveau chat') {
    conv.title = content.trim().slice(0, 50) + (content.trim().length > 50 ? '…' : '');
  }
  saveConversations();
  sortConversations();

  renderConversationList();
  renderMessages();

  // Prepare assistant message placeholder
  const assistantMsg = { id: generateId(), role: 'assistant', content: '', createdAt: Date.now(), model: `${provider.name} · ${state.selectedModel}` };
  conv.messages.push(assistantMsg);
  saveConversations();

  renderMessages();
  scrollToBottom();

  streamAssistantResponse(conv, assistantMsg);
}

function showError(conv, msg, text) {
  msg.content = text;
  msg.isError = true;
  saveConversations();
  const el = document.getElementById(`msg-${msg.id}`);
  if (el) {
    el.classList.remove('streaming');
    el.classList.add('error');
    const contentEl = el.querySelector('.msg-content');
    if (contentEl) {
      contentEl.textContent = text;
    }
    // Show retry button
    const actions = el.querySelector('.msg-actions');
    if (actions) {
      const retryBtn = document.createElement('button');
      retryBtn.className = 'msg-action-btn';
      retryBtn.setAttribute('aria-label', 'Réessayer');
      retryBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>';
      retryBtn.addEventListener('click', () => regenerateLastMessage());
      actions.prepend(retryBtn);
    }
  }
}

function regenerateLastMessage() {
  const conv = getActiveConversation();
  if (!conv || conv.messages.length < 2) return;

  while (conv.messages.length > 0 && conv.messages[conv.messages.length - 1].role !== 'user') {
    conv.messages.pop();
  }
  if (conv.messages.length === 0) return;

  saveConversations();
  renderMessages();

  const provider = PROVIDERS[state.selectedProvider];
  const assistantMsg = {
    id: generateId(),
    role: 'assistant',
    content: '',
    createdAt: Date.now(),
    model: `${provider.name} \u00b7 ${state.selectedModel}`
  };
  conv.messages.push(assistantMsg);
  saveConversations();
  renderMessages();
  scrollToBottom();

  streamAssistantResponse(conv, assistantMsg);
}

async function streamAssistantResponse(conv, assistantMsg) {
  // Capture current config at stream start
  const provider = PROVIDERS[state.selectedProvider];
  const currentModel = state.selectedModel;
  const adapter = ADAPTERS[provider.adapter];
  if (!adapter) {
    showError(conv, assistantMsg, 'Adaptateur non trouvé pour ce fournisseur.');
    return;
  }

  state.streaming = true;
  state.abortController = new AbortController();
  updateComposerState();

  const apiMessages = [];
  if (state.settings.systemPrompt) {
    apiMessages.push({ role: 'system', content: state.settings.systemPrompt });
  }
  for (let i = 0; i < conv.messages.length - 1; i++) {
    const m = conv.messages[i];
    if (m.role === 'user' || m.role === 'assistant') {
      apiMessages.push({ role: m.role, content: m.content });
    }
  }

  const msgEl = document.getElementById(`msg-${assistantMsg.id}`);
  const contentEl = msgEl?.querySelector('.msg-content');

  try {
    let hasError = false;
    await adapter({
      messages: apiMessages,
      model: currentModel,
      signal: state.abortController.signal,
      onToken: (token) => {
        if (hasError) return;
        assistantMsg.content += token;
        if (contentEl) {
          renderMessageContent(contentEl, assistantMsg.content);
          const liveRegion = document.getElementById('liveRegion');
          if (liveRegion) liveRegion.textContent = assistantMsg.content.slice(-200);
        }
        saveConversations();
      },
      onError: (status, body) => {
        hasError = true;
        const errMsg = ERRORS[status] || `Erreur ${status}: ${body || 'Réponse inconnue'}`;
        showError(conv, assistantMsg, errMsg);
      },
    });
    if (!hasError) {
      const w = document.getElementById(`msg-${assistantMsg.id}`);
      if (w) w.classList.remove('streaming');
    }
  } catch (err) {
    if (err.name === 'AbortError') {
      const w = document.getElementById(`msg-${assistantMsg.id}`);
      if (w) w.classList.remove('streaming');
      assistantMsg.content += '\n\n*[Génération interrompue]*';
      if (contentEl) renderMessageContent(contentEl, assistantMsg.content);
      saveConversations();
    } else {
      console.error('Stream error:', err);
      showError(conv, assistantMsg, 'Erreur de connexion. Vérifie ta connexion Internet ou réessaie.');
    }
  }

  state.streaming = false;
  state.abortController = null;
  updateComposerState();
  renderConversationList();
}

function editAndResend(msgId) {
  const conv = getActiveConversation();
  if (!conv) return;

  const msg = conv.messages.find(m => m.id === msgId);
  if (!msg || msg.role !== 'user') return;

  // Remove this message and all after it
  const idx = conv.messages.indexOf(msg);
  conv.messages = conv.messages.slice(0, idx);
  conv.updatedAt = Date.now();
  saveConversations();
  sortConversations();
  renderConversationList();
  renderMessages();

  // Set textarea
  const textarea = document.getElementById('composerTextarea');
  textarea.value = msg.content;
  textarea.focus();
  autoResizeTextarea(textarea);
}

/* ===== RENDER MESSAGES ===== */
function renderMessages() {
  const container = document.getElementById('messagesInner');
  const conv = getActiveConversation();

  if (!conv || conv.messages.length === 0) {
    container.innerHTML = renderEmptyState();
    return;
  }

  let html = '';
  for (const msg of conv.messages) {
    const isUser = msg.role === 'user';
    const isError = msg.isError;
    const isStreaming = msg.role === 'assistant' && msg === conv.messages[conv.messages.length - 1] && state.streaming && !msg.content;

    const classes = [
      'message',
      isUser ? 'user' : (isError ? 'error' : 'assistant'),
      isStreaming ? 'streaming' : '',
    ].filter(Boolean).join(' ');

    html += `<div class="${classes}" id="msg-${msg.id}" role="listitem">`;
    html += `<div class="msg-content">${renderMarkdown(msg.content || '')}</div>`;
    html += `<div class="msg-meta">`;
    html += `<span class="msg-time">${formatTime(msg.createdAt)}</span>`;
    if (msg.model && !isUser) {
      html += `<span class="msg-model">${escapeHtml(msg.model)}</span>`;
    }
    if (msg.free) {
      html += `<span class="msg-model" style="color:var(--success)">Gratuit</span>`;
    }
    html += `<span class="msg-actions">`;
    if (isUser) {
      html += `<button class="msg-action-btn" onclick="window.__editResend('${msg.id}')" aria-label="Éditer et renvoyer" title="Éditer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>`;
    } else if (!isError) {
      html += `<button class="msg-action-btn" onclick="window.__regenerate('${msg.id}')" aria-label="Régénérer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg></button>`;
    }
    const encContent = encodeURIComponent(msg.content);
    html += `<button class="msg-action-btn" onclick="(function(){var t=decodeURIComponent('${encContent}');navigator.clipboard.writeText(t)})()" aria-label="Copier"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>`;
    if (isError) {
      html += `<button class="msg-action-btn" onclick="window.__regenerate()" aria-label="Réessayer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg></button>`;
    }
    html += `</span>`;
    html += `</div>`;
    html += `</div>`;
  }

  container.innerHTML = html;

  // Re-render code blocks with highlight.js
  container.querySelectorAll('pre code').forEach(block => {
    if (typeof hljs !== 'undefined') {
      hljs.highlightElement(block);
    }
  });

  // Add copy buttons
  container.querySelectorAll('.code-header .copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const code = btn.closest('pre')?.querySelector('code')?.textContent || '';
      navigator.clipboard.writeText(code).then(() => {
        btn.classList.add('copied');
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><polyline points="20 6 9 17 4 12"/></svg> Copié';
        setTimeout(() => {
          btn.classList.remove('copied');
          const lang = btn.dataset.lang || 'code';
          btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copier`;
        }, 2000);
      });
    });
  });

  updateScrollButton();
}

function renderMessageContent(el, content) {
  el.innerHTML = renderMarkdown(content);
  // Highlight code blocks
  el.querySelectorAll('pre code').forEach(block => {
    if (typeof hljs !== 'undefined') {
      hljs.highlightElement(block);
    }
  });
  // Wire copy buttons
  el.querySelectorAll('.code-header .copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const code = btn.closest('pre')?.querySelector('code')?.textContent || '';
      navigator.clipboard.writeText(code).then(() => {
        btn.classList.add('copied');
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><polyline points="20 6 9 17 4 12"/></svg> Copié';
        setTimeout(() => {
          btn.classList.remove('copied');
          const lang = btn.dataset.lang || 'code';
          btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copier`;
        }, 2000);
      });
    });
  });
}

function renderEmptyState() {
  const hasKeys = Object.values(state.apiKeys).some(k => k && k.trim());
  const setupMsg = hasKeys
    ? ''
    : '<div class="setup-link"><button onclick="openSettings()">Ajouter une clé API dans les Paramètres</button></div>';

  const prompts = SUGGESTED_PROMPTS.map(p =>
    `<button onclick="useSuggestedPrompt(this)" data-prompt="${escapeHtml(p)}">${escapeHtml(p)}</button>`
  ).join('');

  return `
    <div class="empty-state">
      <div class="empty-state-icon">💬</div>
      <h2>Bienvenue sur OmniChat</h2>
      <p>Chat avec plusieurs modèles d'IA depuis ton navigateur. Tes clés API restent sur ton appareil.</p>
      ${!hasKeys ? '<p style="font-weight:500;color:var(--accent)">Ajoute une clé API pour commencer.</p>' : ''}
      <div class="suggested-prompts">${prompts}</div>
      ${setupMsg}
    </div>`;
}

function renderMarkdown(text) {
  if (!text) return '';
  let html;
  try {
    if (typeof marked !== 'undefined') {
      html = marked.parse(text, { breaks: true, gfm: true });
    } else {
      html = text.replace(/\n/g, '<br>');
    }
  } catch (e) {
    html = text.replace(/\n/g, '<br>');
  }

  // Sanitize
  try {
    if (typeof DOMPurify !== 'undefined') {
      html = DOMPurify.sanitize(html, { ADD_ATTR: ['target'] });
    }
  } catch (e) {}

  // Enhance code blocks with header
  html = html.replace(/<pre><code class="language-(\w+)">/g, (match, lang) => {
    const icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
    return `<pre><div class="code-header"><span class="code-lang">${escapeHtml(lang)}</span><button class="copy-btn" data-lang="${escapeHtml(lang)}">${icon} Copier</button></div><code class="language-${escapeHtml(lang)}">`;
  });
  html = html.replace(/<pre><code>/g, () => {
    const icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
    return `<pre><div class="code-header"><span class="code-lang">code</span><button class="copy-btn" data-lang="code">${icon} Copier</button></div><code>`;
  });

  return html;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* ===== RENDER CONVERSATION LIST ===== */
function renderConversationList(searchTerm) {
  const list = document.getElementById('conversationList');
  const term = (searchTerm || '').toLowerCase().trim();

  let convs = [...state.conversations];
  if (term) {
    convs = convs.filter(c => {
      const title = getConversationTitle(c).toLowerCase();
      return title.includes(term);
    });
  }

  if (convs.length === 0) {
    list.innerHTML = `<div style="padding:16px;text-align:center;color:var(--text-tertiary);font-size:13px">${term ? 'Aucune conversation trouvée' : 'Aucune conversation'}</div>`;
    return;
  }

  let html = '';
  for (const conv of convs) {
    const active = conv.id === state.activeConvId ? 'active' : '';
    const title = getConversationTitle(conv);
    html += `
      <div class="conversation-item ${active}" data-id="${conv.id}" role="option" aria-selected="${active ? 'true' : 'false'}" tabindex="0">
        <span class="conv-title">${escapeHtml(title)}</span>
        <span class="conv-date">${formatDate(conv.updatedAt)}</span>
        <span class="conv-actions">
          <button class="conv-action-btn" data-action="rename" aria-label="Renommer" title="Renommer">✏️</button>
          <button class="conv-action-btn" data-action="delete" aria-label="Supprimer" title="Supprimer">🗑️</button>
        </span>
      </div>`;
  }
  list.innerHTML = html;
}

/* ===== MODEL SELECTOR ===== */
function populateModelSelector() {
  const providerSelect = document.getElementById('providerSelect');
  const modelSelect = document.getElementById('modelSelect');

  providerSelect.innerHTML = '';
  for (const [key, provider] of Object.entries(PROVIDERS)) {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = provider.name;
    if (key === state.selectedProvider) opt.selected = true;
    providerSelect.appendChild(opt);
  }

  updateModelSelector();
}

function updateModelSelector() {
  const provider = PROVIDERS[state.selectedProvider];
  const modelSelect = document.getElementById('modelSelect');
  modelSelect.innerHTML = '';

  if (provider.allowCustomModel) {
    // Add predefined options
    for (const m of provider.models) {
      const opt = document.createElement('option');
      opt.value = m.id;
      opt.textContent = m.free ? `${m.name}` : m.name;
      if (m.id === state.selectedModel) opt.selected = true;
      modelSelect.appendChild(opt);
    }
    // Add custom option at end
    const customOpt = document.createElement('option');
    customOpt.value = '__custom__';
    customOpt.textContent = 'Personnalisé…';
    modelSelect.appendChild(customOpt);
    // If current model isn't in our list, add it
    if (!provider.models.some(m => m.id === state.selectedModel)) {
      const currentOpt = document.createElement('option');
      currentOpt.value = state.selectedModel;
      currentOpt.textContent = state.selectedModel;
      currentOpt.selected = true;
      modelSelect.insertBefore(currentOpt, customOpt);
    }
  } else {
    for (const m of provider.models) {
      const opt = document.createElement('option');
      opt.value = m.id;
      opt.textContent = m.free ? `${m.name} (Gratuit)` : m.name;
      if (m.id === state.selectedModel) opt.selected = true;
      modelSelect.appendChild(opt);
    }
  }

  updateModelDisplayName();
}

function updateModelDisplayName() {
  const provider = PROVIDERS[state.selectedProvider];
  const display = document.getElementById('modelDisplayName');
  if (provider) {
    const model = provider.models.find(m => m.id === state.selectedModel);
    if (model) {
      display.textContent = `${provider.name} · ${model.name}`;
      if (model.free) display.textContent += ' · Gratuit';
    } else {
      display.textContent = `${provider.name} · ${state.selectedModel}`;
    }
  }
}

/* ===== THEME ===== */
function initTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let theme = state.theme;
  if (!theme) {
    theme = prefersDark ? 'dark' : 'light';
  }

  applyTheme(theme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  state.theme = theme;
  saveTheme();

  const icon = document.getElementById('themeIcon');
  if (theme === 'dark') {
    icon.innerHTML = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
  } else {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

/* ===== SETTINGS MODAL ===== */
function openSettings() {
  const modal = document.getElementById('settingsModal');
  const body = document.getElementById('settingsBody');

  let html = '';

  // API Keys
  html += '<h3>Clés API</h3>';
  html += '<p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px">Tes clés restent dans ton navigateur (localStorage). Jamais transmises ailleurs qu\'à l\'API choisie.</p>';

  for (const [key, provider] of Object.entries(PROVIDERS)) {
    const savedKey = state.apiKeys[key] || '';
    const hasKey = savedKey ? 'has-key' : '';
    const masked = savedKey ? savedKey.slice(0, 8) + '••••' + savedKey.slice(-4) : '';
    html += `
      <div class="settings-group">
        <label for="apikey-${key}">${provider.name}</label>
        <div class="api-key-field">
          <input type="password" id="apikey-${key}" class="${hasKey}" value="${escapeHtml(savedKey)}" placeholder="sk-..." autocomplete="off" spellcheck="false">
          <button class="api-key-toggle" id="toggle-${key}" aria-label="Afficher/masquer la clé" type="button">👁️</button>
          ${provider.docsUrl ? `<a href="${provider.docsUrl}" target="_blank" rel="noopener" style="display:flex;align-items:center;width:44px;justify-content:center" aria-label="Obtenir une clé ${provider.name}">🔑</a>` : ''}
        </div>
      </div>`;
  }

  // Parameters
  html += '<h3>Paramètres du modèle</h3>';
  html += `
    <div class="settings-row">
      <div class="settings-field">
        <label for="settingsTemp">Temperature</label>
        <input type="number" id="settingsTemp" min="0" max="2" step="0.1" value="${state.settings.temperature}">
      </div>
      <div class="settings-field">
        <label for="settingsMaxTokens">Max tokens</label>
        <input type="number" id="settingsMaxTokens" min="1" max="128000" step="1" value="${state.settings.maxTokens}">
      </div>
    </div>
    <div class="settings-field">
      <label for="settingsSystemPrompt">System prompt global</label>
      <textarea id="settingsSystemPrompt" rows="3">${escapeHtml(state.settings.systemPrompt || '')}</textarea>
    </div>
    <div class="settings-field">
      <label for="settingsCustomBaseUrl">Base URL personnalisée (proxy CORS)</label>
      <input type="text" id="settingsCustomBaseUrl" placeholder="https://mon-proxy.example.com/v1" value="${escapeHtml(state.settings.customBaseUrl || '')}">
    </div>
  `;

  body.innerHTML = html;

  // Wire toggle password visibility
  body.querySelectorAll('.api-key-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('input');
      input.type = input.type === 'password' ? 'text' : 'password';
      btn.textContent = input.type === 'password' ? '👁️' : '👁️‍🗨️';
    });
  });

  modal.classList.add('open');
  modal.querySelector('.modal-close')?.focus();
}

function closeSettings() {
  document.getElementById('settingsModal').classList.remove('open');
}

function saveSettingsFromModal() {
  // Save API keys
  for (const key of PROVIDER_KEYS) {
    const input = document.getElementById(`apikey-${key}`);
    if (input) {
      const val = input.value.trim();
      state.apiKeys[key] = val;
    }
  }
  saveApiKeys();

  // Save settings
  const temp = parseFloat(document.getElementById('settingsTemp')?.value);
  const maxTokens = parseInt(document.getElementById('settingsMaxTokens')?.value);
  const systemPrompt = document.getElementById('settingsSystemPrompt')?.value?.trim();
  const customBaseUrl = document.getElementById('settingsCustomBaseUrl')?.value?.trim();

  state.settings.temperature = isNaN(temp) ? 0.7 : temp;
  state.settings.maxTokens = isNaN(maxTokens) ? 4096 : maxTokens;
  state.settings.systemPrompt = systemPrompt || '';
  state.settings.customBaseUrl = customBaseUrl || '';
  saveSettings();

  closeSettings();

  // Update UI
  renderMessages();
  renderConversationList();
}

function clearAllData() {
  if (!confirm('Tout effacer ? Cette action supprime toutes les conversations, clés API et paramètres.')) return;

  state.conversations = [];
  state.apiKeys = {};
  state.settings = { temperature: 0.7, maxTokens: 4096, systemPrompt: 'Tu es un assistant IA utile, précis et concis.' };
  state.activeConvId = null;

  localStorage.removeItem(STORAGE_KEYS.conversations);
  localStorage.removeItem(STORAGE_KEYS.apiKeys);
  localStorage.removeItem(STORAGE_KEYS.settings);
  localStorage.removeItem(STORAGE_KEYS.activeConv);

  closeSettings();
  createConversation();
  renderMessages();
  renderConversationList();
  populateModelSelector();
  updateComposerState();
}

/* ===== COMPOSER ===== */
function autoResizeTextarea(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 200) + 'px';
}

function updateComposerState() {
  const sendBtn = document.getElementById('sendBtn');
  const stopBtn = document.getElementById('stopBtn');
  const textarea = document.getElementById('composerTextarea');
  const providerSelect = document.getElementById('providerSelect');
  const modelSelect = document.getElementById('modelSelect');

  if (state.streaming) {
    sendBtn.style.display = 'none';
    stopBtn.style.display = 'flex';
    textarea.disabled = true;
    providerSelect.disabled = true;
    modelSelect.disabled = true;
  } else {
    sendBtn.style.display = 'flex';
    stopBtn.style.display = 'none';
    textarea.disabled = false;
    providerSelect.disabled = false;
    modelSelect.disabled = false;
  }
}

function useSuggestedPrompt(btn) {
  const prompt = btn.dataset.prompt;
  const textarea = document.getElementById('composerTextarea');
  textarea.value = prompt;
  autoResizeTextarea(textarea);
  textarea.focus();
}

/* ===== SCROLL ===== */
function scrollToBottom() {
  const container = document.getElementById('messagesContainer');
  container.scrollTop = container.scrollHeight;
}

function isNearBottom() {
  const container = document.getElementById('messagesContainer');
  const threshold = 100;
  return container.scrollHeight - container.scrollTop - container.clientHeight < threshold;
}

function updateScrollButton() {
  const btn = document.getElementById('scrollBottomBtn');
  if (isNearBottom() || state.streaming) {
    btn.classList.remove('visible');
  } else {
    btn.classList.add('visible');
  }
}

/* ===== SIDEBAR ===== */
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const isOpen = sidebar.classList.toggle('open');
  overlay.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ===== INIT ===== */
function init() {
  loadState();

  // Theme
  initTheme();

  // Make sure we have at least one conversation
  if (state.conversations.length === 0) {
    createConversation();
  } else if (!state.activeConvId) {
    state.activeConvId = state.conversations[0].id;
    saveActiveConv();
  }

  // Restore selected provider/model from active conversation
  const conv = getActiveConversation();
  if (conv && conv.provider && conv.model) {
    state.selectedProvider = conv.provider;
    state.selectedModel = conv.model;
  }

  // Populate UI
  populateModelSelector();
  renderConversationList();
  renderMessages();
  updateComposerState();

  // Wire events
  wireEvents();

  // Auto-scroll on new content
  const observer = new MutationObserver(() => {
    if (state.streaming && isNearBottom()) {
      scrollToBottom();
    }
    updateScrollButton();
  });
  observer.observe(document.getElementById('messagesInner'), { childList: true, subtree: true, characterData: true });

  // Scroll on resize
  document.getElementById('composerTextarea').addEventListener('input', () => {
    if (isNearBottom()) {
      setTimeout(scrollToBottom, 50);
    }
  });

  // Handle visibility change to restore focus
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !state.streaming) {
      document.getElementById('composerTextarea')?.focus();
    }
  });
}

function wireEvents() {
  // Sidebar
  document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);
  document.getElementById('sidebarToggleSide').addEventListener('click', toggleSidebar);
  document.getElementById('sidebarClose').addEventListener('click', closeSidebar);
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

  // New chat
  document.getElementById('newChatBtn').addEventListener('click', () => {
    createConversation();
    renderConversationList();
    renderMessages();
    populateModelSelector();
    closeSidebar();
    document.getElementById('composerTextarea').focus();
  });

  // Conversation list delegation
  document.getElementById('conversationList').addEventListener('click', (e) => {
    const item = e.target.closest('.conversation-item');
    if (!item) return;

    const action = e.target.closest('[data-action]')?.dataset.action;

    if (action === 'delete') {
      deleteConversation(item.dataset.id);
      renderConversationList();
      renderMessages();
      populateModelSelector();
      return;
    }

    if (action === 'rename') {
      const currentTitle = getConversationTitle(state.conversations.find(c => c.id === item.dataset.id));
      const newTitle = prompt('Renommer la conversation :', currentTitle);
      if (newTitle !== null && newTitle.trim()) {
        renameConversation(item.dataset.id, newTitle.trim());
        renderConversationList();
      }
      return;
    }

    // Select conversation
    state.activeConvId = item.dataset.id;
    saveActiveConv();

    const conv = getActiveConversation();
    if (conv) {
      state.selectedProvider = conv.provider || state.selectedProvider;
      state.selectedModel = conv.model || state.selectedModel;
      populateModelSelector();
    }

    renderConversationList();
    renderMessages();
    closeSidebar();
    document.getElementById('composerTextarea').focus();
  });

  // Provider/Model selectors
  document.getElementById('providerSelect').addEventListener('change', (e) => {
    state.selectedProvider = e.target.value;
    const provider = PROVIDERS[state.selectedProvider];
    state.selectedModel = provider.models[0]?.id || '';
    updateModelSelector();
    updateModelDisplayName();

    // Update current conversation
    const conv = getActiveConversation();
    if (conv) {
      conv.provider = state.selectedProvider;
      conv.model = state.selectedModel;
      saveConversations();
    }
  });

  document.getElementById('modelSelect').addEventListener('change', (e) => {
    const val = e.target.value;
    if (val === '__custom__') {
      const customId = prompt('Entrez l\'identifiant du modèle (ex: openai/gpt-5.6-sol) :', state.selectedModel);
      if (customId && customId.trim()) {
        state.selectedModel = customId.trim();
      }
      // Reset select to current model
      updateModelSelector();
    } else {
      state.selectedModel = val;
    }
    updateModelDisplayName();
    const conv = getActiveConversation();
    if (conv) {
      conv.model = state.selectedModel;
      saveConversations();
    }
  });

  // Send
  document.getElementById('sendBtn').addEventListener('click', () => {
    const textarea = document.getElementById('composerTextarea');
    const content = textarea.value.trim();
    if (!content) return;
    textarea.value = '';
    autoResizeTextarea(textarea);
    sendMessage(content);
  });

  // Stop
  document.getElementById('stopBtn').addEventListener('click', () => {
    if (state.abortController) {
      state.abortController.abort();
    }
  });

  // Textarea
  const textarea = document.getElementById('composerTextarea');
  textarea.addEventListener('input', () => autoResizeTextarea(textarea));

  textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      document.getElementById('sendBtn').click();
    }
    if (e.key === 'Enter' && e.shiftKey) {
      // Allow newline
      return;
    }
    if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
      // In simple mode, Enter sends. But with shift+enter for newline.
      // Since we have Ctrl+Enter as primary, let's also allow plain Enter to send
      e.preventDefault();
      document.getElementById('sendBtn').click();
    }
  });

  // Theme
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Settings
  const openSettingsButtons = ['settingsBtn', 'headerSettingsBtn'];
  openSettingsButtons.forEach(id => {
    document.getElementById(id)?.addEventListener('click', openSettings);
  });

  document.getElementById('settingsClose').addEventListener('click', closeSettings);
  document.getElementById('settingsModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeSettings();
  });
  document.getElementById('settingsSaveBtn').addEventListener('click', saveSettingsFromModal);
  document.getElementById('clearAllBtn').addEventListener('click', clearAllData);

  // Scroll button
  document.getElementById('scrollBottomBtn').addEventListener('click', scrollToBottom);

  // Messages container scroll
  document.getElementById('messagesContainer').addEventListener('scroll', updateScrollButton);

  // Search
  document.getElementById('searchConv').addEventListener('input', (e) => {
    renderConversationList(e.target.value);
  });

  // Keyboard shortcuts (global)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.getElementById('settingsModal').classList.contains('open')) {
        closeSettings();
      } else if (state.editingMessageId) {
        state.editingMessageId = null;
        document.getElementById('composerTextarea').focus();
      } else if (window.innerWidth <= 768 && document.getElementById('sidebar').classList.contains('open')) {
        closeSidebar();
      }
    }
  });

  // Focus composer after load
  setTimeout(() => textarea.focus(), 100);
}

// Global functions for inline onclick
window.__regenerate = function(msgId) {
  if (msgId && typeof msgId === 'string') {
    // Regenerate from a specific assistant message
    const conv = getActiveConversation();
    if (!conv) return;
    const idx = conv.messages.findIndex(m => m.id === msgId);
    if (idx === -1) return;
    // Remove this and all after
    conv.messages = conv.messages.slice(0, idx);
    const lastUserIdx = [...conv.messages].reverse().findIndex(m => m.role === 'user');
    if (lastUserIdx === -1) return;
    const lastUserMsg = conv.messages[conv.messages.length - 1 - lastUserIdx];
    saveConversations();
    const textarea = document.getElementById('composerTextarea');
    textarea.value = lastUserMsg.content;
    document.getElementById('sendBtn').click();
  } else {
    regenerateLastMessage();
  }
};
window.__editResend = editAndResend;
window.openSettings = openSettings;
window.useSuggestedPrompt = useSuggestedPrompt;

/* ===== START ===== */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
