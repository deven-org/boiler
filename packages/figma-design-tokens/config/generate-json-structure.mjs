import fs from 'fs';
import { array as themes } from './themes_generated.cjs';

const { componentTokens } = await import(
  `../../ui-library/src/foundation/_tokens-generated/__component-tokens.${themes[0]}.generated.mjs`
);
const { semanticTokens } = await import(
  `../../ui-library/src/foundation/_tokens-generated/__semantic-tokens.${themes[0]}.generated.mjs`
);

const componentFileOutput = JSON.stringify(componentTokens);
const semanticFileOutput = JSON.stringify(semanticTokens);

fs.writeFileSync(
  `../ui-library/src/foundation/_tokens-generated/component.generated.json`,
  componentFileOutput,
  'utf-8',
);

fs.writeFileSync(`../ui-library/src/foundation/_tokens-generated/semantic.generated.json`, semanticFileOutput, 'utf-8');
