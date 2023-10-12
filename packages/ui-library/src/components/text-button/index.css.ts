import { css } from "nested-css-to-flat/lit-css";

export const styleCustom = css`
  .blr-text-button {
    all: inital;
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

  .loading-class-label-icons {
    color: transparent;
  }

  .loader-class {
    position: absolute;
  }
`;
