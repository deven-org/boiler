// import { css } from 'lit';
import { css } from "nested-css-to-flat/lit-css";

export const styleCustom = css`
  .blr-checkbox {
    display: flex;
    align-items: flex-start;

    & > input {
      all: initial;

      &:disabled + label {
        cursor: not-allowed;
        pointer-events: none;
      }

      &:checked {
        &:disabled + label {
          cursor: not-allowed;
          pointer-events: none;
        }
      }

      &:focus {
        outline-offset: 2px;
      }
    }
  }
`;
