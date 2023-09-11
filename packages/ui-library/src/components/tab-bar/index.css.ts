import { css } from "nested-css-to-flat/lit-css";

export const styleCustom = css`
  .wrapper-horizontal {
    position: relative;
    display: block;
  }

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
