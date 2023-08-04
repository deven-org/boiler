import { wrapValuesWithCss } from '../../utils/wrap-values-with-css';
import { componentTokens } from './__component-tokens.Light.generated.js';
import { semanticTokens } from './__semantic-tokens.Light.generated.js';

const componentTokensWrapped = wrapValuesWithCss(componentTokens);
const semanticTokensWrapped = wrapValuesWithCss(semanticTokens);

export { componentTokensWrapped as componentTokens };
export { semanticTokensWrapped as semanticTokens };
