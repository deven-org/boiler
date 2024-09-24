import fs from 'fs';

import { componentTokens } from '../../ui-library/src/foundation/_tokens-generated/__component-tokens.Light.generated.mjs';
import { semanticTokens } from '../../ui-library/src/foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs';

const componentFileOutput = JSON.stringify(componentTokens);
const semanticFileOutput = JSON.stringify(semanticTokens);

fs.writeFileSync(
  `../ui-library/src/foundation/_tokens-generated/component.generated.json`,
  componentFileOutput,
  'utf-8',
);

fs.writeFileSync(`../ui-library/src/foundation/_tokens-generated/semantic.generated.json`, semanticFileOutput, 'utf-8');
