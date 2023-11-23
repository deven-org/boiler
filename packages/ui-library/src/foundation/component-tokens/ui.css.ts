import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: buttonGroupLight, tokenizedDark: buttonGroupDark } = renderThemedCssStrings((componentTokens) => {
  const { UI } = componentTokens;

  return typeSafeNestedCss`
    .blr-button-group.xs {
      gap: ${UI.ButtonGroup.Container.ItemSpacing.XS};
    }

    .blr-button-group.sm {
      gap: ${UI.ButtonGroup.Container.ItemSpacing.SM};
    }

    .blr-button-group.md {
      gap: ${UI.ButtonGroup.Container.ItemSpacing.MD};
    }

    .blr-button-group.lg {
      gap: ${UI.ButtonGroup.Container.ItemSpacing.LG};
    }

    .blr-button-group.xl {
      gap: ${UI.ButtonGroup.Container.ItemSpacing.XL};
    }
  `;
});
