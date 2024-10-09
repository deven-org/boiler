/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/*
  This is a template of what we want to have typed/generated
  Its transformer which you can give a renderFunction which receives component- and semantictokens 
  and the entire thing returns renderedCssStrings per Theme.

  This file should be generated according to the count of themes.
  Pseudo-code here is for two themes.

  This will make it possible to switch prebuild themes on the fly on a component level
*/

console.log('# # # pseudo generated');
import { makeIterator, joinCss } from '../../utils/css-in-ts/make-token-part-iterator.js';
import { componentTokens as cmpLight } from './__component-tokens.Licht_value.generated.mjs';
import { componentTokens as cmpDark } from './__component-tokens.Dunkel_value.generated.mjs';
import { semanticTokens as semLight } from './__semantic-tokens.Licht_value.generated.mjs';
import { semanticTokens as semDark } from './__semantic-tokens.Dunkel_value.generated.mjs';

export const componentTokenTree = {
  Licht_value: cmpLight.cmp,
  Dunkel_value: cmpDark.cmp,
};

export const semanticTokenTree = {
  Licht_value: semLight.sem,
  Dunkel_value: semDark.sem,
};

export const ComponentThemeIterator = (
  renderFunction: (
    theme: keyof typeof componentTokenTree,
    cmp: typeof componentTokenTree.Licht_value,
    css: typeof joinCss,
  ) => string,
) => {
  const it = makeIterator<typeof componentTokenTree>();

  return it(componentTokenTree, renderFunction);
};

export const SemanticThemeIterator = (
  renderFunction: (
    theme: keyof typeof semanticTokenTree,
    sem: typeof semanticTokenTree.Licht_value,
    css: typeof joinCss,
  ) => string,
) => {
  const it = makeIterator<typeof semanticTokenTree>();

  return it(semanticTokenTree, renderFunction);
};
