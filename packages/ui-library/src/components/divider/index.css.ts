import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";
import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = typeSafeNestedCss`
  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { Divider } = cmp;

    return typeSafeCss/*css*/ `
      .blr-divider.${theme} {
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
  })}
`;
