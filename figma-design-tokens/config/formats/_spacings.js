const StyleDictionary = require('style-dictionary');
const { fileHeader } = StyleDictionary.formatHelpers;

StyleDictionary.registerFormat({
  name: 'custom/format/spacings',
  formatter: function ({ dictionary, file }) {
    const spacings = {
      bpXS: [],
      bpSM: [],
      bpMD: [],
      bpLG: [],
      bpXL: [],
      bpXXL: [],
    };

    dictionary.allTokens.forEach((token, index) => {
      const { category, type, item } = token.attributes;

      // Calculate the Figma string "x * y" to an actual value.
      const value = Function('return ' + token.value)();
      const cssVar = `--blr-${category}-${type}: ${value}px;`;

      // If the tokens value is equal to its precursor, do not add it to the spacings object.

      const previousValue = index > 0 && dictionary.allTokens[index - 1].value;

      if (token.value === previousValue) {
        return;
      }

      switch (item) {
        case 'bpXS':
          return spacings.bpXS.push(cssVar);
        case 'bpSM':
          return spacings.bpSM.push(cssVar);
        case 'bpMD':
          return spacings.bpMD.push(cssVar);
        case 'bpLG':
          return spacings.bpLG.push(cssVar);
        case 'bpXL':
          return spacings.bpXL.push(cssVar);
        case 'bpXXL':
          return spacings.bpXXL.push(cssVar);
      }
    });

    const generateMediaquery = (breakpoint, group) =>
      // if group in spacings object is empty, we don't need a media-query
      group.length > 0
        ? `@media (min-width: $blr-breakpoint-${breakpoint}) {\n ${group.map((item) => item).join('\n')}\n}`
        : '';

    const spacingsTemplate = `
    ${spacings.bpXS.map((item) => item).join('\n')}\n
    ${generateMediaquery('s', spacings.bpSM)}\n
    ${generateMediaquery('m', spacings.bpMD)}\n
    ${generateMediaquery('l', spacings.bpLG)}\n
    ${generateMediaquery('xl', spacings.bpXL)}\n
    ${generateMediaquery('xxl', spacings.bpXXL)}
    `;

    return (
      `@use 'sass:math';\n` +
      `@use 'breakpoints.generated' as *;\n\n` +
      fileHeader({ file }) +
      `:root {\n` +
      spacingsTemplate +
      '\n}\n'
    );
  },
});
