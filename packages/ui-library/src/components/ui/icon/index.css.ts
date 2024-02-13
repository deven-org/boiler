import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

import { componentTokens } from "../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";

const { Icon } = componentTokens.cmp;

/*
  the full class is used by "ignoreSize" attribute, so that consumers can take care about sizing
  by defining the container size

  we only set hights everywhere here, because svgs will retain their correct aspect ratios,
  when only setting their widths
*/

export const styleCustom = typeSafeNestedCss`
  :host {
    display: inline-flex;
    flex-shrink: 0;

    .blr-icon {
      line-height: 0;
    }

    .blr-icon.full > svg {
      width: 100%;
    }

    .blr-icon.xxs > svg {
      width: ${Icon.Container.Size.XXS};
    }

    .blr-icon.xs > svg {
      width: ${Icon.Container.Size.XS};
    }

    .blr-icon.sm > svg {
      width: ${Icon.Container.Size.SM};
    }

    .blr-icon.md > svg {
      width: ${Icon.Container.Size.MD};
    }

    .blr-icon.lg > svg {
      width: ${Icon.Container.Size.LG};
    }

    .blr-icon.xl > svg {
      width: ${Icon.Container.Size.XL};
    }
  }
`;
