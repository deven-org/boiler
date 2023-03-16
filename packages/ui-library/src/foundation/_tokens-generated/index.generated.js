import { wrapValuesWithCss } from '@boiler/figma-design-tokens/config/wrap-values-with-css.mjs';
import { componentTokens } from './__component-tokens.generated.js';
import { semanticTokens } from './__semantic-tokens.generated.js';

const componentTokensWrapped = wrapValuesWithCss(componentTokens);
const semanticTokensWrapped = wrapValuesWithCss(semanticTokens);

export { componentTokensWrapped as componentTokens };
export { semanticTokensWrapped as semanticTokens };
