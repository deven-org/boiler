import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: dividerLight, tokenizedDark: dividerDark } = renderThemedCssStrings((componentTokens) => {
  const { UI } = componentTokens;

  return css`
    .blr-divider {
      background-color: ${UI.Divider.Border.color};

      &.vertical {
        width: ${UI.Divider.Border.width};
        height: 100%;
      }

      &.horizontal {
        width: 100%;
        height: ${UI.Divider.Border.width};
      }
    }
  `;
});
