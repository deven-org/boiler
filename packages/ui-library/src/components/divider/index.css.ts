import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";
import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = css`
  ${ComponentThemeIterator((theme, cmp, css) => {
    const { divider } = cmp;

    return css`
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
