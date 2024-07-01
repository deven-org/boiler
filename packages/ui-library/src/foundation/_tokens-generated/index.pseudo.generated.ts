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
import { makeIterator, joinCss } from '../../utils/css-in-ts/make-token-part-iterator.js';
import { componentTokens as cmpLight } from './__component-tokens.Light.generated.mjs';
import { componentTokens as cmpDark } from './__component-tokens.Dark.generated.mjs';
import { semanticTokens as semLight } from './__semantic-tokens.Light.generated.mjs';
import { semanticTokens as semDark } from './__semantic-tokens.Dark.generated.mjs';

export const componentTokenTree = {
  Light: cmpLight.cmp,
  Dark: cmpDark.cmp,
};

export const semanticTokenTree = {
  Light: semLight.sem,
  Dark: semDark.sem,
};

export const ComponentThemeIterator = (
  renderFunction: (
    theme: keyof typeof componentTokenTree,
    cmp: typeof componentTokenTree.Light,
    css: typeof joinCss,
  ) => string,
) => {
  const it = makeIterator<typeof componentTokenTree>();

  return it(componentTokenTree, renderFunction);
};

export const SemanticThemeIterator = (
  renderFunction: (
    theme: keyof typeof semanticTokenTree,
    sem: typeof semanticTokenTree.Light,
    css: typeof joinCss,
  ) => string,
) => {
  const it = makeIterator<typeof semanticTokenTree>();

  return it(semanticTokenTree, renderFunction);
};
