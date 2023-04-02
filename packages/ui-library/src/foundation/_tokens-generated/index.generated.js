import { wrapValuesWithCss } from '../../utils/wrap-values-with-css.mjs';
import { allTokens } from './__all-tokens.generated.js';
import { componentTokens } from './__component-tokens.generated.js';
import { semanticTokens } from './__semantic-tokens.generated.js';

const allTokensWrapped = wrapValuesWithCss(allTokens);
const componentTokensWrapped = wrapValuesWithCss(componentTokens);
const semanticTokensWrapped = wrapValuesWithCss(semanticTokens);

export { allTokensWrapped as allTokens };
export { componentTokensWrapped as componentTokens };
export { semanticTokensWrapped as semanticTokens };
