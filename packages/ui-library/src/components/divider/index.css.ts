import { renderThemedCssStrings } from "../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

export const { tokenizedLight: dividerLight, tokenizedDark: dividerDark } = renderThemedCssStrings((componentTokens) => {
  const { Divider } = componentTokens.cmp;

  return typeSafeNestedCss`
    .blr-divider {
      background-color: ${Divider.Container.BackgroundColor};

      &.vertical {
        width: ${Divider.Container.Vertical.Width};
        height: 100%;
      }

      &.horizontal {
        width: 100%;
        height: ${Divider.Container.Horizontal.Height};
      }
    }
  `;
});
