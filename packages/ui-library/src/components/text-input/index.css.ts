import { css } from "nested-css-to-flat/lit-css";

export const styleCustom = css`
  .blr-text-input {
    display: block;
    position: relative;
  }

  .blr-text-input:disabled {
    pointer-events: none;
  }

  .blr-input-icon:hover {
    cursor: pointer;
  }

  .blr-input-icon:disabled {
    cursor: none;
  }
`;
