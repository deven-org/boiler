require('./_foundation-format.js');

module.exports = {
  source: ['figma-design-tokens/input/tokens.normalized.json'],
  platforms: {
    scss: {
      transforms: ['attribute/cti', 'name/cti/kebab'],
      prefix: 'boiler',
      buildPath: 'figma-design-tokens/',
      files: [
        {
          destination: '../src/foundation/foundation.scss',
          format: 'foundation',
        },
      ],
    },
  },
};
