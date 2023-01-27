module.exports = {
  source: ['figma-design-tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'css',
      buildPath: 'figma-design-tokens/',
      files: [
        {
          destination: 'foundation.css',
          format: 'css/variables',
        },
      ],
    },
  },
};
