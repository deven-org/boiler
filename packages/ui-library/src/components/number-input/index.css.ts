import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: formLight, tokenizedDark: formDark } = renderThemedCssStrings(
  (componentTokens, semanticTokens) => {
    const { UserInput, SurfaceFill, Placeholder, SM, MD, LG } = semanticTokens.Forms;
    const { Select } = componentTokens.Forms;

    return css`
      .custom-form-input {
        all: initial;
        color: ${UserInput.Default.Rest};
        background-color: ${SurfaceFill.Default.Rest};

        &::placeholder {
          color: ${Placeholder.Default.Rest};
        }

        &.sm {
          font-weight: ${SM.UserInput.fontWeight};
          font-size: ${SM.UserInput.fontSize};
          font-family: ${SM.UserInput.fontFamily}, sans-serif;
          line-height: ${SM.UserInput.lineHeight};
          padding: ${Select.SM.InputFieldPadding};
        }

        &.md {
          font-weight: ${MD.UserInput.fontWeight};
          font-size: ${MD.UserInput.fontSize};
          font-family: ${MD.UserInput.fontFamily}, sans-serif;
          line-height: ${MD.UserInput.lineHeight};
          padding: ${Select.MD.InputFieldPadding};
        }

        &.lg {
          font-weight: ${LG.UserInput.fontWeight};
          font-size: ${LG.UserInput.fontSize};
          font-family: ${LG.UserInput.fontFamily}, sans-serif;
          line-height: ${LG.UserInput.lineHeight};
          padding: ${Select.LG.InputFieldPadding};
        }
      }
    `;
  }
);

export const { tokenizedLight: StepperComboLight, tokenizedDark: StepperComboDark } = renderThemedCssStrings(
  (componentTokens, semanticTokens) => {
    const { StepperCombo, StepperButton } = componentTokens.Action;
    const { Silent } = semanticTokens.Action;

    return css`
      .stepper-combo {
        position: relative;

        &.horizontal {
          &.sm {
            width: ${StepperCombo.SM.Horizontal.Width};
          }

          &.md {
            width: ${StepperCombo.MD.Horizontal.Width};
          }

          &.lg {
            width: ${StepperCombo.LG.Horizontal.Width};
          }
        }

        &.vertical {
          &.sm {
            width: ${StepperCombo.SM.Vertical.Width};
          }

          &.md {
            width: ${StepperCombo.MD.Vertical.Width};
          }

          &.lg {
            width: ${StepperCombo.LG.Vertical.Width};
          }
        }
      }

      .custom-stepper-button {
        all: initial;
        line-height: 0;
        text-align: center;
        background-color: ${Silent.SurfaceFill.Rest};
        color: ${Silent.Icon.Rest};

        &.fullWidthHeight {
          width: 100%;
          height: 100%;
        }

        &:hover {
          background-color: ${Silent.SurfaceFill.Hover};
          color: ${Silent.Icon.Hover};
        }

        &:active {
          background-color: ${Silent.SurfaceFill.Pressed};
          color: ${Silent.Icon.Pressed};
        }

        &:disabled {
          background-color: ${Silent.SurfaceFill.Pressed};
          color: ${Silent.Icon.Disabled};
        }

        &.sm {
          width: ${StepperButton.SM.Width};
        }

        &.md {
          width: ${StepperButton.MD.Width};
        }

        &.lg {
          width: ${StepperButton.LG.Width};
        }
      }
    `;
  }
);

export const baseStyle = css`
  .input-wrapper {
    display: grid;
    grid-template-areas: "left center right";
    overflow: hidden;

    border: 1px solid lightgray;
    border-radius: 5px;

    &.focus {
      border-color: black;
    }

    &.disabled {
      background-color: gray;
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
        text-align: center;
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
      }

      .decrement {
        grid-area: right;
        grid-row: 2;
      }

      & > input {
        grid-area: left;
        grid-row: span 2;
      }
    }
  }
`;
