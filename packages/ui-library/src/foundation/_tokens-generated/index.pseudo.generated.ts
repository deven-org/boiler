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
import {
  semanticTokens as semanticTokensLight,
  componentTokens as componentTokensLight,
} from './index.Light.generated';

import { semanticTokens as semanticTokensDark, componentTokens as componentTokensDark } from './index.Dark.generated';
import { CSSResult } from 'lit';

export function renderThemedCssStrings(renderFunc: (cT: any, sT: any) => CSSResult): {
  tokenizedLight: CSSResult;
  tokenizedDark: CSSResult;
} {
  let tokenizedLight, tokenizedDark;

  try {
    tokenizedLight = renderFunc(componentTokensLight, semanticTokensLight);
  } catch (error) {
    console.error(error);
  }

  try {
    tokenizedDark = renderFunc(componentTokensDark, semanticTokensDark);
  } catch (error) {
    console.error(error);
  }

  return {
    tokenizedLight,
    tokenizedDark,
  };
}
