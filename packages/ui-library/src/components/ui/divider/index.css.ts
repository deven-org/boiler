import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: dividerLight, tokenizedDark: dividerDark } = renderThemedCssStrings((componentTokens) => {
  const { UI } = componentTokens;

  return typeSafeNestedCss`
    .blr-divider {
      background-color: ${UI.Divider.Container.BackgroundColor};

      &.vertical {
        width: ${UI.Divider.Container.Vertical.Width};
        height: 100%;
      }

      &.horizontal {
        width: 100%;
        height: ${UI.Divider.Container.Horizontal.Height};
      }
    }
  `;
});
