import { css } from "nested-css-to-flat/lit-css";
import { componentTokens } from "../../foundation/_tokens-generated/__component-tokens.Light.generated";

const { TextButton } = componentTokens.Action;

export const styleCustom = css`
  .blr-text-button-link {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline-offset: -2px;
    text-decoration: none;

    &:disabled {
      pointer-events: none;
    }

    /*  Component Tokens for Outline are missing */
    &:focus {
      /* Need to make sure we meet AA requirements with this custom outline */
      outline: 2px solid black;
    }

    &.xs {
      gap: ${TextButton.XS.ItemSpacing};
      padding: ${TextButton.XS.Padding};
    }

    &.sm {
      gap: ${TextButton.SM.ItemSpacing};
      padding: ${TextButton.SM.Padding};
    }

    &.md {
      gap: ${TextButton.MD.ItemSpacing};
      padding: ${TextButton.MD.Padding};
    }

    &.lg {
      gap: ${TextButton.LG.ItemSpacing};
      padding: ${TextButton.LG.Padding};
    }

    &.xl {
      gap: ${TextButton.XL.ItemSpacing};
      padding: ${TextButton.XL.Padding};
    }
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
