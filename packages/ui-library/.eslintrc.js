module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    ecmaVersion: 2022,
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint'],
  extends: ['../eslint-config-boiler'],
  ignorePatterns: ['types/', '*.svg', '*.scss', '*.css', '*.md', '*.config.mjs', '.*', 'webpack*.js'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['lit'],
            importNamePattern: 'LitElement',
            message: `Don't use the default LitElement class. Import from /utils/lit-element-custom instead`,
          },
        ],
      },
    ],
  },
};
