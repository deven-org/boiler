const StyleDictionary = require('style-dictionary');
const { fileHeader } = StyleDictionary.formatHelpers;

StyleDictionary.registerFormat({
  name: `custom/format/breakpoints`,
  formatter: function ({ dictionary, file }) {
    let breakpoints = [];

    dictionary.allTokens.map((token) => {
      breakpoints.push(`$blr-${token.attributes.type}-${token.attributes.item}: ${token.value}px;`);
    });

    return fileHeader({ file }) + breakpoints.join(`\n`);
  },
});
