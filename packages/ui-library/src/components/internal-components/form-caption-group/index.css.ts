import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

import { semanticTokens } from "../../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";
import { componentTokens } from "../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";

const { CaptionGroup } = componentTokens.cmp;
const { captionslot } = semanticTokens.sem.forms;

export const formCaptionGroupStyle = typeSafeNestedCss`
  .blr-form-caption-group {
    display: flex;
    flex-direction: column;
    
    &.sm {
      gap: ${CaptionGroup.Container.ItemSpacing.SM};
      margin: ${captionslot.margin.sm};
    }

    &.md {
      gap: ${CaptionGroup.Container.ItemSpacing.MD};
      margin: ${captionslot.margin.md};
    }

    &.lg {
      gap: ${CaptionGroup.Container.ItemSpacing.LG};
      margin: ${captionslot.margin.lg};
    }
  }
`;
