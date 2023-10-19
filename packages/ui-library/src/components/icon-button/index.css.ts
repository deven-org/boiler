import { css } from "nested-css-to-flat/lit-css";

import { componentTokens } from "../../foundation/_tokens-generated/__component-tokens.Light.generated";

const { IconButton } = componentTokens.Action;

export const styleCustom = css`
  .blr-icon-button {
    all: inital;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    cursor: pointer;
  }

  .blr-icon-button:disabled {
    pointer-events: none;
  }

  .blr-icon-button:focus {
    /*  Component Tokens for Outline are missing */
    /* Need to make sure we meet AA requirements with this custom outline */
    outline: 2px solid black;
  }

  .blr-icon-button.xs {
    padding: ${IconButton.XS.Padding};
  }

  .blr-icon-button.sm {
    padding: ${IconButton.SM.Padding};
  }

  .blr-icon-button.md {
    padding: ${IconButton.MD.Padding};
  }

  .blr-icon-button.lg {
    padding: ${IconButton.LG.Padding};
  }

  .blr-icon-button.xl {
    padding: ${IconButton.XL.Padding};
  }
`;
