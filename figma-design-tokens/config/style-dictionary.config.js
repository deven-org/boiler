require('./formats');

// todo:

// we need a clearer way to write the template(s)

module.exports = {
  source: ['figma-design-tokens/input/tokens.normalized.json'],
  platforms: {
    scss: {
      transforms: ['attribute/cti', 'name/cti/kebab'],
      prefix: 'blr',
      buildPath: 'figma-design-tokens/',
      files: [
        {
          format: 'custom/format/breakpoints',
          destination: '../src/foundation/scss/_breakpoints.scss',
          filter: (token) => token.attributes.category === 'core' && token.attributes.type === 'breakpoint',
        },
        {
          format: 'custom/format/font-sizes',
          destination: '../src/foundation/scss/_font-sizes.scss',
          filter: (token) => token.attributes.category === 'core' && token.attributes.type === 'fontSizes',
        },
        {
          format: 'custom/format/colors',
          destination: '../src/foundation/scss/_colors.scss',
          filter: (token) => token.attributes.category === 'core' && token.attributes.type === 'color',
        },
        {
          format: 'custom/format/spacings',
          destination: '../src/foundation/scss/_spacings.scss',
          filter: (token) => token.attributes.category === 'spacing',
        },
      ],
    },
  },
};
