module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  // Specifies the ESLint parser
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    ecmaVersion: 2022,
    // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },

  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:wc/recommended',
    'plugin:lit/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:lit-a11y/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
  },
  settings: {},
  ignorePatterns: ['utils/create-icons-index.mjs', 'figma-design-tokens', 'types/', '*.svg', '*.scss', '*.css'],
};
