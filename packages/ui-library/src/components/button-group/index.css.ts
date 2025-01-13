import { ComponentThemeIterator } from "../../foundation/_tokens-generated/iterator.generated.js";
import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = css`
  ${ComponentThemeIterator((theme, cmp, css) => {
    const { buttongroup } = cmp;

    return css`
      .blr-button-group.${theme} {
        display: flex;

        &.left {
          justify-content: flex-start;
        }

        &.center {
          justify-content: center;
        }

        &.right {
          justify-content: flex-end;
        }

        &.xs {
          gap: ${buttongroup.container.itemspacing.xs};
        }

        &.sm {
          gap: ${buttongroup.container.itemspacing.sm};
        }

        &.md {
          gap: ${buttongroup.container.itemspacing.md};
        }

        &.lg {
          gap: ${buttongroup.container.itemspacing.lg};
        }

        &.xl {
          gap: ${buttongroup.container.itemspacing.xl};
        }
      }
    `;
  })}
`;
