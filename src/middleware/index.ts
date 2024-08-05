import type { Hono } from 'hono';
import type { ApiType } from './api';
import apiMiddleware from './api';

export type ServerType = ApiType;

export type ServerSchema = ServerType extends Hono<any, infer S, any>
  ? S
  : never;

export const onRequest = apiMiddleware;
