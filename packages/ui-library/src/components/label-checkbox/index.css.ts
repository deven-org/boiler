// import { css } from 'lit';
import { css } from 'nested-css-to-flat/lit-css';

export const styleCustom = css`
  .blr-label-checkbox {
    & > input {
      all: initial;
    }

    & > label::after {
      content: ' ';
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      border: 1px solid black;
    }

    &.checked > label::after {
      background-color: black;
    }
  }
`;
