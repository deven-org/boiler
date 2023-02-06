const kebabCase = require('lodash.kebabcase');
const StyleDictionary = require('style-dictionary');
const { fileHeader } = StyleDictionary.formatHelpers;

const baseFontSize = '16px';

const remFunction = `
// Function to translate px to rem
@function rem($px) {
  @return #{math.div($px, ${baseFontSize})}rem;
}\n\n`;

StyleDictionary.registerFormat({
  name: 'custom/format/font-sizes',
  formatter: function ({ dictionary, file }) {
    let fontSizes = [];

    dictionary.allTokens.map((token) => {
      if (token.attributes.item !== 'base') {
        const value = Function('return ' + token.value)();
        fontSizes.push(`--blr-${kebabCase(token.attributes.type)}-${token.attributes.item}: #{rem(${value}px)};`);
      }
    });

    return `@use 'sass:math';\n\n` + fileHeader({ file }) + remFunction + `:root {\n` + fontSizes.join('\n') + '\n}\n';
  },
});
