import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

import { componentTokens } from "../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";

const { ButtonGroup } = componentTokens.cmp;

export const styleCustom = typeSafeNestedCss`
  .blr-button-group {
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
      gap: ${ButtonGroup.Container.ItemSpacing.XS};
    }

    &.sm {
      gap: ${ButtonGroup.Container.ItemSpacing.SM};
    }

    &.md {
      gap: ${ButtonGroup.Container.ItemSpacing.MD};
    }

    &.lg {
      gap: ${ButtonGroup.Container.ItemSpacing.LG};
    }

    &.xl {
      gap: ${ButtonGroup.Container.ItemSpacing.XL};
    }
  }
`;
