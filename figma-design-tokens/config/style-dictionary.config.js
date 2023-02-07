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
          destination: '../src/foundation/_breakpoints.generated.scss',
          filter: (token) => token.attributes.category === 'core' && token.attributes.type === 'breakpoint',
        },
        {
          format: 'custom/format/font-sizes',
          destination: '../src/foundation/_font-sizes.generated.scss',
          filter: (token) => token.attributes.category === 'core' && token.attributes.type === 'fontSizes',
        },
        {
          format: 'custom/format/colors',
          destination: '../src/foundation/_colors.generated.scss',
          filter: (token) => token.attributes.category === 'core' && token.attributes.type === 'color',
        },
        {
          format: 'custom/format/spacings',
          destination: '../src/foundation/_spacings.generated.scss',
          filter: (token) => token.attributes.category === 'spacing',
        },
      ],
    },
  },
};
