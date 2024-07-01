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
  ignorePatterns: ['types/', '*.generated.*', '*.svg', '*.scss', '*.css', '*.md', '*.config.mjs', '.*', 'webpack*.js'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['lit', '!**/utils/lit'],
            importNamePattern: '^LitElement$',
            message: `Don't use the default LitElement class. Import LitElementCustom from /utils/lit/element.js instead`,
          },
          {
            group: ['lit', '!**/utils/lit'],
            importNamePattern: '^css$',
            message: `Don't use lit's css function. Use css from /utils/css-in-ts/nested-typesafe-css-literals instead`,
          },
          {
            group: ['lit', '!**/utils/lit'],
            importNamePattern: '^property$',
            message: `Don't use the default @property decorator. Import property from /utils/lit/decorators.js instead`,
          },
        ],
      },
    ],
  },
};
