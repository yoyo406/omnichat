/*
 * Private CORS relay for OmniChat + OpenCode Zen.
 * Deploy this file as a Cloudflare Worker under an account you control.
 * It never stores or logs API keys: it only forwards the browser request.
 */

const ALLOWED_ORIGINS = new Set([
  'https://yoyo406.github.io',
  'http://localhost:4173',
  'http://127.0.0.1:4173'
]);

const ALLOWED_PATHS = new Set(['/models', '/chat/completions']);
const UPSTREAM_BASE = 'https://opencode.ai/zen/v1/';

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    'Access-Control-Expose-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin'
  };
}

function responseWithCors(body, init, origin) {
  const headers = new Headers(init && init.headers);
  Object.entries(corsHeaders(origin)).forEach(function (entry) {
    headers.set(entry[0], entry[1]);
  });
  return new Response(body, Object.assign({}, init, { headers: headers }));
}

export default {
  async fetch(request) {
    const origin = request.headers.get('Origin');
    if (!origin || !ALLOWED_ORIGINS.has(origin)) {
      return new Response('Origin not allowed.', { status: 403 });
    }

    if (request.method === 'OPTIONS') {
      return responseWithCors(null, { status: 204 }, origin);
    }

    const incomingUrl = new URL(request.url);
    const pathname = incomingUrl.pathname.replace(/\/+$/, '') || '/';
    const validMethod = (pathname === '/models' && request.method === 'GET') ||
      (pathname === '/chat/completions' && request.method === 'POST');

    if (!ALLOWED_PATHS.has(pathname) || !validMethod) {
      return responseWithCors('Not found.', {
        status: pathname === '/models' || pathname === '/chat/completions' ? 405 : 404,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      }, origin);
    }

    const upstreamUrl = new URL(pathname.slice(1), UPSTREAM_BASE);
    upstreamUrl.search = incomingUrl.search;
    const headers = new Headers(request.headers);
    headers.delete('Origin');
    headers.delete('Referer');
    headers.delete('Host');
    headers.delete('Content-Length');

    const upstream = await fetch(upstreamUrl, {
      method: request.method,
      headers: headers,
      body: request.method === 'POST' ? request.body : undefined,
      redirect: 'manual'
    });

    const responseHeaders = new Headers(upstream.headers);
    Object.entries(corsHeaders(origin)).forEach(function (entry) {
      responseHeaders.set(entry[0], entry[1]);
    });
    responseHeaders.delete('Content-Length');
    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: responseHeaders
    });
  }
};
