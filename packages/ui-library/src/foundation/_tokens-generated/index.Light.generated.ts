import { wrapValuesWithCss } from '../../utils/wrap-values-with-css.js';
import { componentTokens } from './__component-tokens.Light.generated.mjs';
import { semanticTokens } from './__semantic-tokens.Light.generated.mjs';

const componentTokensWrapped = wrapValuesWithCss(componentTokens);
const semanticTokensWrapped = wrapValuesWithCss(semanticTokens);

export { componentTokensWrapped as componentTokens };
export { semanticTokensWrapped as semanticTokens };
