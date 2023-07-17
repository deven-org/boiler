import { css } from "nested-css-to-flat/lit-css";

export const styleCustom = css`
  .input-wrapper {
    display: grid;
    grid-template-areas: "left center right";

    border: 1px solid lightgray;
    padding: 4px;
    border-radius: 5px;

    &.focus {
      border-color: black;
    }

    &.disabled {
      background-color: gray;
    }

    & > input {
      all: initial;
      margin: 0 2px;
    }

    & > input::-webkit-outer-spin-button,
    & > input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    & > input[type="number"] {
      -moz-appearance: textfield;
    }

    &.mode1 {
      grid-template-columns: fit-content(100%) 1fr fit-content(100%);

      .increment {
        grid-area: right;
      }

      .decrement {
        grid-area: left;
      }

      & > input {
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

      & > input {
        grid-area: left;
      }
    }

    &.mode3 {
      grid-template-columns: 1fr fit-content(100%);

      .increment {
        grid-area: right;
        height: 10px;
      }

      .decrement {
        grid-area: right;
        grid-row: 2;
        height: 10px;
      }

      & > input {
        grid-area: left;
        grid-row: span 2;
      }
    }
  }
`;
