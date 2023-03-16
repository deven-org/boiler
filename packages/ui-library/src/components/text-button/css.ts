import { css } from 'lit';

export const styleCustom = css`
  .blr-text-button {
    align-items: center;
    display: flex;
    cursor: pointer;
    outline-offset: -2px;
  }

  .blr-text-button:disabled {
    pointer-events: none;
  }

  .blr-text-button:focus {
    /*  Component Tokens for Outline are missing */
    /* Need to make sure we meet AA requirements with this custom outline */
    outline: 2px solid black;
  }
`;
