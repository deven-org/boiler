// import { css } from 'lit';
import { css } from 'nested-css-to-flat/lit-css';

export const styleCustom = css`
  .blr-label-checkbox {
    & > input {
      all: initial;
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 2px;
      border: 1px solid black;
      outline-offset: 2px;

      background-color: transparent;

      &:checked {
        background-color: black;
      }

      &:focus {
        outline: 1px solid red;
      }

      &:disabled {
        opacity: 0.25;
      }
    }
  }
`;
