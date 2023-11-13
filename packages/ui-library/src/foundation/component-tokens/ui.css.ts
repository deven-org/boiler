import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: buttonGroupLight, tokenizedDark: buttonGroupDark } = renderThemedCssStrings((componentTokens) => {
  const { UI } = componentTokens;

  return css`
    .blr-button-group.xs {
      gap: ${UI.ButtonGroup.XS.ItemSpacing};
    }

    .blr-button-group.sm {
      gap: ${UI.ButtonGroup.SM.ItemSpacing};
    }

    .blr-button-group.md {
      gap: ${UI.ButtonGroup.MD.ItemSpacing};
    }

    .blr-button-group.lg {
      gap: ${UI.ButtonGroup.LG.ItemSpacing};
    }

    .blr-button-group.xl {
      gap: ${UI.ButtonGroup.XL.ItemSpacing};
    }
  `;
});
