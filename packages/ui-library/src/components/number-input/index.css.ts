import { css } from "lit";

export const styleCustom = css`
  .blr-number-input {
    display: block;
    position: relative;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  .blr-number-input:disabled {
    pointer-events: none;
  }

  .blr-number-input-button-wrapper {
    position: absolute;
    right: 0;
  }

  .wrapper-vertical {
    position: relative;
    display: inline-flex;
    flex-direction: row;
    height: 100%;
  }

  .wrapper-horizontal {
    position: relative;
    display: inline-flex;
    flex-direction: column;
  }

  .left {
    position: absolute;
    left: 0;
  }

  .right {
    position: absolute;
    right: 0;
  }

  .blr-input-inner-container .spaceBetween {
    text-align: center;
  }
`;
