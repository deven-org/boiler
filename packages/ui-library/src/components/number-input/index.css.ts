import { css } from "lit";

export const styleCustom = css`
  .grid {
    display: grid;

    &.mode1 {
      grid-template-areas: "left center right";
      grid-template-columns: fit-content(100%) 1fr fit-content(100%);

      .increment {
        grid-area: right;
        justify-self: end;
      }

      .decrement {
        grid-area: left;
        justify-self: start;
      }

      .input {
        grid-area: center;
      }
    }

    &.mode2 {
      grid-template-areas: "left right right2";
      grid-template-columns: 1fr fit-content(100%) fit-content(100%);

      .increment {
        grid-area: right2;
        justify-self: end;
      }

      .decrement {
        grid-area: right;
        justify-self: start;
      }

      .input {
        grid-area: left;
      }
    }

    &.mode3 {
      grid-template-areas: "left right";
      grid-template-rows: auto auto;

      grid-template-columns: 1fr fit-content(100%) fit-content(100%);

      .increment {
        grid-area: right;
        grid-row: 1;
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
