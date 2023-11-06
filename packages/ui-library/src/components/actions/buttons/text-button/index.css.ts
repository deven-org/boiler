import { css } from "nested-css-to-flat/lit-css";
import { componentTokens } from "../../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";

const { TextButton } = componentTokens.Action;

export const styleCustom = css`
  .blr-text-button {
    align-items: center;
    justify-content: center;
    display: inline-flex;
    cursor: pointer;
    outline-offset: -2px;
    position: relative;
  }

  .blr-text-button:disabled {
    pointer-events: none;
  }

  .blr-text-button:focus {
    /*  Component Tokens for Outline are missing */
    /* Need to make sure we meet AA requirements with this custom outline */
    outline: 2px solid black;
  }

  .blr-text-button.xs {
    gap: ${TextButton.XS.ItemSpacing};
    padding: ${TextButton.XS.Padding};
  }

  .blr-text-button.sm {
    gap: ${TextButton.SM.ItemSpacing};
    padding: ${TextButton.SM.Padding};
  }

  .blr-text-button.md {
    gap: ${TextButton.MD.ItemSpacing};
    padding: ${TextButton.MD.Padding};
  }

  .blr-text-button.lg {
    gap: ${TextButton.LG.ItemSpacing};
    padding: ${TextButton.LG.Padding};
  }

  .blr-text-button.xl {
    gap: ${TextButton.XL.ItemSpacing};
    padding: ${TextButton.XL.Padding};
  }

  .loading-class-icons,
  .loading-class-label {
    color: transparent;
  }

  .loader-class {
    position: absolute;
    display: inline-flex;
  }
`;
