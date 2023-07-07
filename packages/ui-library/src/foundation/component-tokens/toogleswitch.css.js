// import { componentTokens } from "../_tokens-generated/index.generated";
// import { semanticTokens } from "../_tokens-generated/__semantic-tokens.generated";
import { css } from "nested-css-to-flat/lit-css";

// const { Checkbox } = componentTokens.Forms;
// const { Forms } = semanticTokens;
// const { FocusBorder } = semanticTokens.Global;

export const checkboxStyles = css`
  .blr-label-toggleswitch {
    &.leading {
      flex-direction: column;
    }

    &.trailing {
      flex-direction: row;
    }

    &.sm {
      > .blr-label-checkbox-wrapper {
        width: 36px;
        height: 20px;

        > .toggle-switch-slider {
          &::after {
            width: 16px;
            height: 16px;
            top: 2px;
            left: 2px;
          }
        }

        > input:checked + .toggle-switch-slider::after {
          transform: translateX(16px);
        }

        > .toggle-switch-unselect {
          &::after {
            top: 7px;
            left: 9px;
            width: 1px;
            height: 5px;
          }
        }

        > .toggle-switch-select {
          &::after {
            top: 7px;
            right: 8px;
            width: 4px;
            height: 4px;
          }
        }
      }
    }

    &.md {
      > .blr-label-checkbox-wrapper {
        width: 44px;
        height: 24px;

        > .toggle-switch-slider {
          &::after {
            width: 20px;
            height: 20px;
            top: 2px;
            left: 2px;
          }
        }

        > input:checked + .toggle-switch-slider::after {
          transform: translateX(20px);
        }

        > .toggle-switch-unselect {
          &::after {
            top: 8px;
            left: 10px;
            width: 1px;
            height: 7px;
          }
        }

        > .toggle-switch-select {
          &::after {
            top: 8px;
            right: 8px;
            width: 6px;
            height: 6px;
          }
        }
      }
    }

    &.lg {
      > .blr-label-checkbox-wrapper {
        width: 52px;
        height: 28px;

        > .toggle-switch-slider {
          &::after {
            width: 24px;
            height: 24px;
            top: 2px;
            left: 2px;
          }
        }

        > input:checked + .toggle-switch-slider::after {
          transform: translateX(23px);
        }

        > .toggle-switch-unselect {
          &::after {
            top: 9px;
            left: 13px;
            width: 1px;
            height: 10px;
          }
        }

        > .toggle-switch-select {
          &::after {
            top: 9px;
            right: 9px;
            width: 8px;
            height: 8px;
          }
        }
      }
    }

    > .blr-label-checkbox-wrapper {
      background-color: #50a825;
      border-radius: 15px;
      position: relative;
      cursor: pointer;

      > input {
        display: none;
      }

      > .toggle-switch-slider {
        &::after {
          // eslint-disable-next-line
          content: "";
          position: absolute;
          background-color: white;
          border-radius: 50%;
          transition: transform 0.2s ease;
        }
      }

      > input:checked + .toggle-switch-slider::after {
        background-color: white;
      }

      > .toggle-switch-unselect {
        &::after {
          // eslint-disable-next-line
          content: "";
          position: absolute;
          border-right: 1px solid white;
        }
      }

      > .toggle-switch-select {
        &::after {
          // eslint-disable-next-line
          content: "";
          position: absolute;
          border-radius: 100%;
          border: 1px solid white;
        }
      }
    }

    &:not(.error) {
      > .blr-label-checkbox-wrapper {
        &:hover {
          background-color: #3c7e1c;
        }

        &:active {
          background-color: #285412;
        }

        &:focus {
          background-color: #50a825;
          outline: 2px solid black;
        }

        &[disabled] {
          background-color: #ccc;
        }

        &[readonly] {
          background-color: #abb0ba;
        }

        > input:disabled + .toggle-switch-slider::after {
          pointer-events: none;
          opacity: 0.5;
          background-color: white;
        }
      }
    }

    &.error {
      > .blr-label-checkbox-wrapper {
        outline: 2px solid #ff0;

        &:hover {
          background-color: #3c7e1c;
        }

        &:active {
          background-color: #285412;
        }

        &:focus {
          background-color: #50a825;
          outline: 2px solid black;
        }

        &[disabled] {
          background-color: #ccc;
        }

        &[readonly] {
          background-color: #abb0ba;
        }

        > input:disabled + .toggle-switch-slider::after {
          pointer-events: none;
          opacity: 0.5;
          background-color: white;
        }
      }
    }
  }
`;

// outline-style: ${FocusBorder.style};
// outline-width: ${FocusBorder.width};
// outline-color: ${FocusBorder.color};
