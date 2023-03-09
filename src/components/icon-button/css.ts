import { css } from 'lit';

export const styleCustom = css`
  .blr-icon-button {
    align-items: center;
    justify-content: center;
    display: flex;
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
