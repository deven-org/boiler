import { css } from "nested-css-to-flat/lit-css";

import { componentTokens } from "../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";

const { ButtonGroup } = componentTokens.UI;

export const styleCustom = css`
  .blr-button-group {
    align-items: center;
    justify-content: center;
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
      gap: ${ButtonGroup.XS.ItemSpacing};
    }

    &.sm {
      gap: ${ButtonGroup.SM.ItemSpacing};
    }

    &.md {
      gap: ${ButtonGroup.MD.ItemSpacing};
    }

    &.lg {
      gap: ${ButtonGroup.LG.ItemSpacing};
    }

    &.xl {
      gap: ${ButtonGroup.XL.ItemSpacing};
    }
  }
`;
