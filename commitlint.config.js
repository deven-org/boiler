module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 140],
    'scope-enum': [2, 'always', ['all', 'ui-library', 'icons', 'figma-design-tokens', 'tokens', 'storybook']],
  },
};
