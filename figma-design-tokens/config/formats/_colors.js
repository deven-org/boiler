const StyleDictionary = require('style-dictionary');
const kebabCase = require('lodash.kebabcase');
const { fileHeader } = StyleDictionary.formatHelpers;

StyleDictionary.registerFormat({
  name: `custom/format/colors`,
  formatter: function ({ dictionary, file }) {
    let colors = [];

    dictionary.allTokens.map((token) => {
      const { type, item, subitem } = token.attributes;
      colors.push(`--blr-${type}-${kebabCase(item)}${subitem ? `-${subitem}` : ''}: ${token.value};`);
    });

    return fileHeader({ file }) + `:root {\n` + colors.join('\n') + '\n}\n';
  },
});
