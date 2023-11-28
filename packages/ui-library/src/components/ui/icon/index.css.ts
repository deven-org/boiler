import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

import { componentTokens } from "../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";

const { UI } = componentTokens;

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

    .blr-icon.full {
      width: 100%;
    }

    .blr-icon.xxs {
      width: ${UI.Icon.Container.Size.XXS};
    }

    .blr-icon.xs {
      width: ${UI.Icon.Container.Size.XS};
    }

    .blr-icon.sm {
      width: ${UI.Icon.Container.Size.SM};
    }

    .blr-icon.md {
      width: ${UI.Icon.Container.Size.MD};
    }

    .blr-icon.lg {
      width: ${UI.Icon.Container.Size.LG};
    }

    .blr-icon.xl {
      width: ${UI.Icon.Container.Size.XL};
    }
  }
`;
