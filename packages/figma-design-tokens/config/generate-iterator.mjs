import fs from 'fs';
import themes from './themes_generated.cjs';
import { buildpaths } from './buildpaths.mjs';

// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// Template for the generated file
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

const fileTemplate = `import { makeIterator, joinCss } from '../../utils/css-in-ts/make-token-part-iterator.js';
{{imports}}

export const componentTokenTree = {
{{componentTree}}
};

export const semanticTokenTree = {
{{semanticTree}}
};

export const ComponentThemeIterator = (
  renderFunction: (
    theme: keyof typeof componentTokenTree,
    cmp: typeof componentTokenTree.{{firstTheme}},
    css: typeof joinCss,
  ) => string,
) => {
  const it = makeIterator<typeof componentTokenTree>();

  return it(componentTokenTree, renderFunction);
};

export const SemanticThemeIterator = (
  renderFunction: (
    theme: keyof typeof semanticTokenTree,
    sem: typeof semanticTokenTree.{{firstTheme}},
    css: typeof joinCss,
  ) => string,
) => {
  const it = makeIterator<typeof semanticTokenTree>();

  return it(semanticTokenTree, renderFunction);
};`;

// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// Generate imports, component tree, and semantic tree dynamically. Then fill the template.
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

const imports = themes.array
  .map((theme) => {
    const prefix = theme.split('_')[0];
    return `import { tokens as cmp${prefix} } from './mjs_modules/__component-tokens.${theme}.generated.mjs';\nimport { tokens as sem${prefix} } from './mjs_modules/__semantic-tokens.${theme}.generated.mjs';`;
  })
  .join('\n');

const componentTree = themes.array
  .map((theme) => {
    const prefix = theme.split('_')[0];
    return `  ${theme}: cmp${prefix}.cmp`;
  })
  .join(',\n');

const semanticTree = themes.array
  .map((theme) => {
    const prefix = theme.split('_')[0];
    return `  ${theme}: sem${prefix}.sem`;
  })
  .join(',\n');

// Fill the template with the generated content
const fileContent = fileTemplate
  .replace('{{imports}}', imports)
  .replace('{{componentTree}}', componentTree)
  .replace('{{semanticTree}}', semanticTree)
  .replace(/{{firstTheme}}/g, themes.array[0]);

// Write the generated content to a new file
fs.writeFileSync(`${buildpaths._tg}/iterator.generated.ts`, fileContent, 'utf-8');

console.log('File generated successfully!');
