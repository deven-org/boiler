import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";
import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = css`
  ${ComponentThemeIterator((theme, cmp, css) => {
    const { Divider } = cmp;

    return css`
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
