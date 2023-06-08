// import { css } from 'lit';
import { css } from 'nested-css-to-flat/lit-css';

export const styleCustom = css`
  .blr-label-checkbox {
    display: flex;
    align-items: center;

    & > input {
      all: initial;
      display: inline-block;

      &:checked {
        background-color: black;
      }

      &:focus {
        outline: 1px solid red;
      }
    }
  }
`;
