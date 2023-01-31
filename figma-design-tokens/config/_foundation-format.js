const StyleDictionary = require('style-dictionary');
const { fileHeader } = StyleDictionary.formatHelpers;

/*
 _____ _____  ______ _____  ______ _____ _   _  _____ 
|_   _|  _  | | ___ \  ___| |  _  \  _  | \ | ||  ___|
  | | | | | | | |_/ / |__   | | | | | | |  \| || |__  
  | | | | | | | ___ \  __|  | | | | | | | . ` ||  __| 
  | | \ \_/ / | |_/ / |___  | |/ /\ \_/ / |\  || |___ 
  \_/  \___/  \____/\____/  |___/  \___/\_| \_/\____/     
  
  - breakpoints need to be the css variables and not hardcoded ⛔ 
  - the way we prefix the var in the template string with "--" or "$" is maybe not the best solution. ⛔
  - we should probably split the logic into multiple files ⛔
  - before style-dictionary runs, the figma json needs to be transformed so that the UNI nodes disappear. ⛔
  - implement better error handling and console.logs for information ⛔
*/

StyleDictionary.registerFormat({
  name: 'foundation',
  formatter: function ({ dictionary, file }) {
    const breakpoints = [];
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

      if (!category || !type || !item) {
        return;
      }

      // Format core tokens here
      if (category === 'core') {
        if (type === 'breakpoint') {
          return breakpoints.push(`boiler-${type}-${item}: ${token.value}px;\n`);
        }
      }

      // Format spacing tokens here
      if (category === 'spacing') {
        // Calculate the Figma string "x * y" to an actual value.
        const value = Function('return ' + token.value)();
        const cssVar = `--boiler-${category}-${type}: ${value}px;`;

        // If the tokens value is equal to its precursor, do not add it to the spacings object.
        if (token.value === dictionary.allTokens[index - 1].value) {
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
      }
    });

    console.log('🧮 creating breakpoints...\n', breakpoints);
    console.log('🧮 creating spacings...\n', spacings);

    const generateMediaquery = (breakpoint, group) => {
      // if group in spacings object is empty, we don't need a media-query

      console.log(breakpoint, group);
      return group.length > 0
        ? `@media (min-width: $boiler-breakpoint-${breakpoint}) {\n ${group.map((item) => item).join('\n')}\n}`
        : '';
    };

    const breakpointsTemplate = `
    \n
    // BREAKPOINTS\n\n 
    // SCSS VARIABLES\n 
    $${breakpoints.join('$')} \n\n --${breakpoints.join('--')}
    `;

    const spacingsTemplate = `\n// SPACINGS \n\n
    ${spacings.bpXS.map((item) => item).join('\n')}\n
    ${generateMediaquery('sm', spacings.bpSM)}\n
    ${generateMediaquery('md', spacings.bpMD)}\n
    ${generateMediaquery('l', spacings.bpLG)}\n
    ${generateMediaquery('xl', spacings.bpXL)}\n
    ${generateMediaquery('xxl', spacings.bpXXL)}
    `;

    return fileHeader({ file }) + `:root {\n` + breakpointsTemplate + spacingsTemplate + '\n}\n';
  },
});
