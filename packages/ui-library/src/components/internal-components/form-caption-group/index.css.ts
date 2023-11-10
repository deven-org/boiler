import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: formCaptionGroupLight, tokenizedDark: formCaptionGroupDark } = renderThemedCssStrings(
  (_componentTokens, semanticTokens) => {
    const { SM, MD, LG } = semanticTokens.Forms;

    return css`
      .blr-form-caption-group-container {
        &.sm {
          margin: ${SM.CaptionSlot.Margin};
        }

        &.md {
          margin: ${MD.CaptionSlot.Margin};
        }

        &.lg {
          margin: ${LG.CaptionSlot.Margin};
        }
      }
    `;
  }
);
