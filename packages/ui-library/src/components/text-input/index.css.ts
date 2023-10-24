import { css } from "nested-css-to-flat/lit-css";

export const styleCustom = css`
  .blr-text-input {
    display: flex;
    flex-direction: column;
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
