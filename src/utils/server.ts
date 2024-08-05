import type { ServerType } from '@/middleware';
import { hc } from 'hono/client';

export const server = hc<ServerType>('/');
