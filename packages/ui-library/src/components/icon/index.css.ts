import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated";

/*
  the full class is used by "ignoreSize" attribute, so that consumers can take care about sizing
  by defining the container size

  we only set hights everywhere here, because svgs will retain their correct aspect ratios,
  when only setting their widths
*/

export const styleCustom = typeSafeNestedCss/* css */ `
  :host {
    display: inline-flex;
    flex-shrink: 0;
  }

  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { Icon } = cmp;

    return typeSafeCss/*css*/ `
      .blr-icon.${theme} {
        line-height: 0;

        &.full > svg {
          width: 100%;
        }

        &.xxs > svg {
          width: ${Icon.Container.Size.XXS};
        }

        &.xs > svg {
          width: ${Icon.Container.Size.XS};
        }

        &.sm > svg {
          width: ${Icon.Container.Size.SM};
        }

        &.md > svg {
          width: ${Icon.Container.Size.MD};
        }

        &.lg > svg {
          width: ${Icon.Container.Size.LG};
        }

        &.xl > svg {
          width: ${Icon.Container.Size.XL};
        }
      }
    `;
  })}
`;
