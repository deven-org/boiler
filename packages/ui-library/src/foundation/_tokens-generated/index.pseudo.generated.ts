import { makeIterator, joinCss } from '../../utils/css-in-ts/make-token-part-iterator.js';
import { tokens as cmpLicht } from './mjs_modules/__component-tokens.Licht_value.generated.mjs';
import { tokens as semLicht } from './mjs_modules/__semantic-tokens.Licht_value.generated.mjs';
import { tokens as cmpDunkel } from './mjs_modules/__component-tokens.Dunkel_value.generated.mjs';
import { tokens as semDunkel } from './mjs_modules/__semantic-tokens.Dunkel_value.generated.mjs';

export const componentTokenTree = {
  Licht_value: cmpLicht.cmp,
  Dunkel_value: cmpDunkel.cmp,
};

export const semanticTokenTree = {
  Licht_value: semLicht.sem,
  Dunkel_value: semDunkel.sem,
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
