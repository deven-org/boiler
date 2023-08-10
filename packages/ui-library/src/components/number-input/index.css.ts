import { css } from "lit";

export const styleCustom = css`
  .grid {
    display: grid;
    grid-template-areas: "left center right";

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
      .increment {
        grid-area: right;
      }

      .decrement {
        grid-area: right;
      }

      .input {
        grid-area: left;
      }
    }
  }
`;
