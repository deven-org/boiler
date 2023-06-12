// import { css } from 'lit';
import { css } from 'nested-css-to-flat/lit-css';

export const styleCustom = css`
  .blr-label-checkbox {
    display: flex;
    align-items: center;

    & > input {
      all: initial;

      &:focus {
        outline: 1px solid red;
      }
    }
  }
`;
