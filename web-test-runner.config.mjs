import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  nodeResolve: true,
  files: ['src/components/**/*.test.ts'],
  plugins: [esbuildPlugin({ ts: true })],
};
