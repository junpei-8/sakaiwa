import { defineMiddleware } from 'astro:middleware';
import { Hono } from 'hono';
import chatGet from './routes/chat.get';

export const API_PATH = '/api';

// API ルートの定義
const api = new Hono().basePath(API_PATH).route('/', chatGet);

// API の型
export type ApiType = typeof api;

// API Middleware を定義
export default defineMiddleware(async (context, next) => {
  // API Request の場合は API に処理を委譲
  if (context.url.pathname.startsWith(API_PATH)) {
    return api.fetch(context.request);
  }

  return next();
});
