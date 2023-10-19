import { css } from "nested-css-to-flat/lit-css";
import { componentTokens } from "../../foundation/_tokens-generated/__component-tokens.Light.generated";

const { ButtonGroup } = componentTokens.UI;

export const styleCustom = css`
  .blr-text-button-group {
    align-items: center;
    display: flex;
    cursor: pointer;
    outline-offset: -2px;
  }

  .blr-text-button-group:disabled {
    pointer-events: none;
  }

  .blr-text-button-group:focus {
    /*  Component Tokens for Outline are missing */
    /* Need to make sure we meet AA requirements with this custom outline */
    outline: 2px solid black;
  }

  .wrapper {
    display: flex;

    &.flex-end {
      justify-content: flex-end;
    }

    &.flex-start {
      justify-content: flex-start;
    }

    &.center {
      justify-content: center;
    }
  }

  .blr-text-button-group.xs {
    gap: ${ButtonGroup.XS.ItemSpacing};
  }

  .blr-text-button-group.sm {
    gap: ${ButtonGroup.SM.ItemSpacing};
  }

  .blr-text-button-group.md {
    gap: ${ButtonGroup.MD.ItemSpacing};
  }

  .blr-text-button-group.lg {
    gap: ${ButtonGroup.LG.ItemSpacing};
  }

  .blr-text-button-group.xl {
    gap: ${ButtonGroup.XL.ItemSpacing};
  }
`;
