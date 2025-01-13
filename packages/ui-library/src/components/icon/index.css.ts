import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

import { ComponentThemeIterator } from "../../foundation/_tokens-generated/iterator.generated.js";

/*
  the full class is used by "ignoreSize" attribute, so that consumers can take care about sizing
  by defining the container size

  we only set hights everywhere here, because svgs will retain their correct aspect ratios,
  when only setting their widths
*/

export const styleCustom = css`
  :host {
    display: inline-flex;
    flex-shrink: 0;
  }

  ${ComponentThemeIterator((theme, cmp, css) => {
    const { icon } = cmp;

    return css`
      .blr-icon.${theme} {
        line-height: 0;

        &.full > svg {
          width: 100%;
        }

        &.xxs > svg {
          width: ${icon.container.size.xxs};
        }

        &.xs > svg {
          width: ${icon.container.size.xs};
        }

        &.sm > svg {
          width: ${icon.container.size.sm};
        }

        &.md > svg {
          width: ${icon.container.size.md};
        }

        &.lg > svg {
          width: ${icon.container.size.lg};
        }

        &.xl > svg {
          width: ${icon.container.size.xl};
        }
      }
    `;
  })}
`;
