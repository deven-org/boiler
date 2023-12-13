import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

import { semanticTokens } from "../../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";
import { componentTokens } from "../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";

const { CaptionGroup } = componentTokens.Forms;
const { SM, MD, LG } = semanticTokens.Forms;

export const formCaptionGroupStyle = typeSafeNestedCss`
  .blr-form-caption-group {
    display: flex;
    flex-direction: column;
    
    &.sm {
      gap: ${CaptionGroup.Container.ItemSpacing.SM};
      margin: ${SM.CaptionSlot.Margin};
    }

    &.md {
      gap: ${CaptionGroup.Container.ItemSpacing.MD};
      margin: ${MD.CaptionSlot.Margin};
    }

    &.lg {
      gap: ${CaptionGroup.Container.ItemSpacing.LG};
      margin: ${LG.CaptionSlot.Margin};
    }
  }
`;
