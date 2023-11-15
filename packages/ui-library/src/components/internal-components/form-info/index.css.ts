import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: formInfoLight, tokenizedDark: formInfoDark } = renderThemedCssStrings((_componentTokens, semanticTokens) => {
  const { SM, MD } = semanticTokens.Forms;

  return typeSafeNestedCss`
    .blr-form-info-container {
      &.sm {
        margin: ${SM.CaptionSlot.Margin};
      }

      &.md {
        margin: ${MD.CaptionSlot.Margin};
      }

      &.lg {
        margin: ${MD.CaptionSlot.Margin};
      }
    }
  `;
});
