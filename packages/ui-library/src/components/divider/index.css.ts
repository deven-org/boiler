import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

export const staticStyles = typeSafeNestedCss`
  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { divider } = cmp;

    return typeSafeCss/*css*/ `
      .blr-divider.${theme} {
        background-color: ${divider.container.bgcolor};

        &.vertical {
          width: ${divider.container.vertical.width};
          height: 100%;
        }

        &.horizontal {
          width: 100%;
          height: ${divider.container.horizontal.height};
        }
      }
    `;
  })}
`;
