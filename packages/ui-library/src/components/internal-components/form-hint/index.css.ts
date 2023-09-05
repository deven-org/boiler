import { css } from "nested-css-to-flat/lit-css";

export const styleCustom = css`
  :host {
    display: inline-flex;
    flex-shrink: 0;
    max-width: 100%;
    width: 100%;
  }

  .blr-form-hint {
    width: 100%;
    justify-content: space-between;
    display: flex;
  }
`;
