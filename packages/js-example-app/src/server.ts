import Koa from 'koa';
import { AddressInfo } from 'node:net';
import Router from '@koa/router';
import staticFiles from 'koa-static';
import { nodeResolve } from 'koa-node-resolve';
import { RenderResultReadable } from '@lit-labs/ssr/lib/render-result-readable.js';

import { renderIndex } from './index.server.js';

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

router.get('/', (ctx) => {
  ctx.type = 'text/html';
  ctx.body = new RenderResultReadable(renderIndex());
});

app.use(router.routes());
app.use(nodeResolve({ root: '../../' }));
app.use(staticFiles('../../', { maxage: Number.MAX_SAFE_INTEGER }));

const server = app.listen({ host: '0.0.0.0', port });
server.on('listening', () => console.info(`Server listening on port ${(server.address() as AddressInfo).port}`));
