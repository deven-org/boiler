import { css } from "lit";
import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: textButtonLight, tokenizedDark: textButtonDark } = renderThemedCssStrings(
  (componentTokens) => {
    const { TextButton } = componentTokens.Action;

    return css`
      .blr-text-button.xs {
        padding: ${TextButton.XS.Padding};
      }

      .blr-text-button.sm {
        padding: ${TextButton.SM.Padding};
      }

      .blr-text-button.md {
        padding: ${TextButton.MD.Padding};
      }

      .blr-text-button.lg {
        padding: ${TextButton.LG.Padding};
      }

      .blr-text-button.xl {
        padding: ${TextButton.XL.Padding};
      }
    `;
  }
);

export const { tokenizedLight: iconButtonLight, tokenizedDark: iconButtonDark } = renderThemedCssStrings(
  (componentTokens) => {
    const { IconButton } = componentTokens.Action;

    return css`
      .blr-icon-button.xs {
        padding: ${IconButton.XS.Padding};
      }

      .blr-icon-button.sm {
        padding: ${IconButton.SM.Padding};
      }

      .blr-icon-button.md {
        padding: ${IconButton.MD.Padding};
      }

      .blr-icon-button.lg {
        padding: ${IconButton.LG.Padding};
      }

      .blr-icon-button.xl {
        padding: ${IconButton.XL.Padding};
      }
    `;
  }
);
