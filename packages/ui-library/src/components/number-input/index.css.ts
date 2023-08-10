import { css } from "nested-css-to-flat/lit-css";

export const styleCustom = css`
  .grid {
    display: grid;
    grid-template-areas: "left center right";
    grid-template-columns: fit-content(100%) 1fr fit-content(100%);

    &.mode1 {
      .increment {
        grid-area: right;
      }

      .decrement {
        grid-area: left;
      }

      .input {
        grid-area: center;
      }
    }

    &.mode2 {
      grid-template-columns: 1fr fit-content(100%) fit-content(100%);

      .increment {
        grid-area: right;
      }

      .decrement {
        grid-area: center;
      }

      .input {
        grid-area: left;
      }
    }

    &.mode3 {
      grid-template-columns: 1fr fit-content(100%) fit-content(100%);

      .increment {
        grid-area: right;
        height: 10px;
      }

      .decrement {
        grid-area: right;
        grid-row: 2;
        height: 10px;
      }

      .input {
        grid-area: left;
        grid-row: span 2;
      }
    }
  }
`;
