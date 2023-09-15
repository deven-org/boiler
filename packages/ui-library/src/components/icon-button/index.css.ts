import { css } from "nested-css-to-flat/lit-css";

export const styleCustom = css`
  .blr-icon-button {
    all: inital;
    align-items: center;
    justify-content: center;
    display: inline-block;
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
`;
