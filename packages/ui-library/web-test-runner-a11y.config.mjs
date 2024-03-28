import { esbuildPlugin } from '@web/dev-server-esbuild';

/**
 * @type {import('@web/dev-server').DevServerConfig}
 */
export default {
  nodeResolve: true,
  files: ['src/components/**/*.test.a11y.ts'],
  plugins: [esbuildPlugin({ ts: true })],
};
