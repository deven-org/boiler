import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: buttonGroupLight, tokenizedDark: buttonGroupDark } = renderThemedCssStrings((componentTokens) => {
  const { ButtonGroup } = componentTokens.cmp;

  return typeSafeNestedCss`
    .blr-button-group.xs {
      gap: ${ButtonGroup.Container.ItemSpacing.XS};
    }

    .blr-button-group.sm {
      gap: ${ButtonGroup.Container.ItemSpacing.SM};
    }

    .blr-button-group.md {
      gap: ${ButtonGroup.Container.ItemSpacing.MD};
    }

    .blr-button-group.lg {
      gap: ${ButtonGroup.Container.ItemSpacing.LG};
    }

    .blr-button-group.xl {
      gap: ${ButtonGroup.Container.ItemSpacing.XL};
    }
  `;
});
