// import { css } from 'lit';
import { css } from 'nested-css-to-flat/lit-css';

export const styleCustom = css`
  .blr-label-checkbox {
    all: initial;

    & > input {
      all: initial;
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 2px;
      border: 1px solid black;
      outline-offset: 2px;
    }

    &.checked > input {
      background-color: black;
    }

    &.focus > input {
      outline: 1px solid red;
    }
  }
`;
