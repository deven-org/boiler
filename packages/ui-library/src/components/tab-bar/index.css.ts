import { css } from "nested-css-to-flat/lit-css";

export const styleCustom = css`
  .panel-wrapper {
    margin-top: 2rem;

    > slot {
      display: none;

      &.active {
        display: block;
      }
    }
  }
`;
