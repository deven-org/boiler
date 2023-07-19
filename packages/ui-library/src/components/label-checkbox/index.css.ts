// import { css } from 'lit';
import { css } from 'nested-css-to-flat/lit-css';

export const styleCustom = css`
  .blr-label-checkbox {
    &.checked > input {
      background-color: black;
    }

    &.focus:not(.disabled) > input {
      outline: 1px solid red;
    }

    &.disabled {
      opacity: 0.25;
    }
  }
`;
