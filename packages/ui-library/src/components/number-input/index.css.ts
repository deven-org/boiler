import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: wrapperLight, tokenizedDark: wrapperDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { UserInput, SurfaceFill, Placeholder, Input, InputBorderRadius, SM, MD, LG } = semanticTokens.Forms;
  const { StepperCombo } = componentTokens.Action;

  return css`
    .input-wrapper {
      outline: ${Input.Default.Rest.width} ${Input.Default.Rest.style} ${Input.Default.Rest.color};
      border-radius: ${InputBorderRadius};

      > input {
        border: none;
        outline: none;
        color: inherit;
      }

      > * {
        background-color: transparent;
      }

      &.mode1 {
        &.sm {
          > .custom-stepper-button {
            width: ${StepperCombo.SM.Vertical.Width};
          }
        }

        &.md {
          > .custom-stepper-button {
            width: ${StepperCombo.MD.Vertical.Width};
          }
        }

        &.lg {
          > .custom-stepper-button {
            width: ${StepperCombo.LG.Vertical.Width};
          }
        }
      }

      > .unit,
      input {
        &.sm {
          font-weight: ${SM.UserInput.fontWeight};
          font-size: ${SM.UserInput.fontSize};
          font-family: ${SM.UserInput.fontFamily}, sans-serif;
          line-height: ${SM.UserInput.lineHeight};
          padding: ${SM.InputField.Padding};
        }

        &.md {
          font-weight: ${MD.UserInput.fontWeight};
          font-size: ${MD.UserInput.fontSize};
          font-family: ${MD.UserInput.fontFamily}, sans-serif;
          line-height: ${MD.UserInput.lineHeight};
          padding: ${MD.InputField.Padding};
        }

        &.lg {
          font-weight: ${LG.UserInput.fontWeight};
          font-size: ${LG.UserInput.fontSize};
          font-family: ${LG.UserInput.fontFamily}, sans-serif;
          line-height: ${LG.UserInput.lineHeight};
          padding: ${LG.InputField.Padding};
        }
      }

      &.disabled {
        outline: ${Input.Default.Disabled.width} ${Input.Default.Disabled.style} ${Input.Default.Disabled.color};
        background-color: ${SurfaceFill.Default.Disabled};
        cursor: not-allowed;

        & > input {
          color: ${UserInput.Default.Disabled};
          cursor: not-allowed;

          &::placeholder {
            color: ${Placeholder.Default.Disabled};
          }
        }
      }

      &:focus-within {
        outline: ${Input.Default.Focus.width} ${Input.Default.Focus.style} ${Input.Default.Focus.color};
        background-color: ${SurfaceFill.Default.Focus};

        & > input {
          color: ${UserInput.Default.Focus};

          &::placeholder {
            color: ${Placeholder.Default.Focus};
          }
        }
      }

      &.error-input {
        outline: ${Input.Error.Rest.width} ${Input.Error.Rest.style} ${Input.Error.Rest.color};
        color: ${UserInput.Error.Rest};
        background-color: ${SurfaceFill.Error.Rest};

        &::placeholder {
          color: ${Placeholder.Error.Rest};
        }

        &:hover {
          outline: ${Input.Error.Hover.width} ${Input.Error.Hover.style} ${Input.Error.Hover.color};
          color: ${UserInput.Error.Hover};
          background-color: ${SurfaceFill.Error.Hover};

          &::placeholder {
            color: ${Placeholder.Error.Hover};
          }
        }

        &:active {
          outline: ${Input.Error.Pressed.width} ${Input.Error.Pressed.style} ${Input.Error.Pressed.color};
          color: ${UserInput.Error.Pressed};
          background-color: ${SurfaceFill.Error.Pressed};

          &::placeholder {
            color: ${Placeholder.Error.Pressed};
          }
        }

        &:focus-within {
          outline: ${Input.Error.Focus.width} ${Input.Error.Focus.style} ${Input.Error.Focus.color};
          color: ${Input.Error.Focus};
          background-color: ${SurfaceFill.Error.Focus};

          &::placeholder {
            color: ${Placeholder.Error.Focus};
          }
        }
      }

      &[readonly] {
        outline: ${Input.Default.Hover.width} ${Input.Default.ReadOnly.style} ${Input.Default.ReadOnly.color};
        background-color: ${SurfaceFill.Default.ReadOnly};

        &::placeholder {
          color: ${Placeholder.Default.ReadOnly};
        }
      }
    }
  `;
});

export const { tokenizedLight: StepperComboLight, tokenizedDark: StepperComboDark } = renderThemedCssStrings(
  (componentTokens, semanticTokens) => {
    const { StepperCombo } = componentTokens.Action;
    const { Silent } = semanticTokens.Action;

    return css`
      .stepper-combo {
        &.mode2 {
          display: grid;
          grid-template-columns: 1fr 0 1fr;
          justify-content: center;

          &.sm {
            width: ${StepperCombo.SM.Horizontal.Width};

            > blr-divider {
              padding: ${StepperCombo.SM.Horizontal.DividerWrapper.Padding};
            }
          }

          &.md {
            width: ${StepperCombo.MD.Horizontal.Width};

            > blr-divider {
              padding: ${StepperCombo.MD.Horizontal.DividerWrapper.Padding};
            }
          }

          &.lg {
            width: ${StepperCombo.LG.Horizontal.Width};

            > blr-divider {
              padding: ${StepperCombo.LG.Horizontal.DividerWrapper.Padding};
            }
          }
        }

        &.mode3 {
          display: grid;
          grid-template-rows: 1fr 0 1fr;
          justify-content: center;

          &.sm {
            width: ${StepperCombo.SM.Vertical.Width};

            > blr-divider {
              padding: ${StepperCombo.SM.Vertical.DividerWrapper.Padding};
            }
          }

          &.md {
            width: ${StepperCombo.MD.Vertical.Width};

            > blr-divider {
              padding: ${StepperCombo.MD.Vertical.DividerWrapper.Padding};
            }
          }

          &.lg {
            width: ${StepperCombo.LG.Vertical.Width};

            > blr-divider {
              padding: ${StepperCombo.LG.Vertical.DividerWrapper.Padding};
            }
          }
        }
      }

      .custom-stepper-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: ${Silent.SurfaceFill.Rest};
        color: ${Silent.Icon.Rest};
        padding: 0;

        &:hover:not(:disabled) {
          background-color: ${Silent.SurfaceFill.Hover};
          color: ${Silent.Icon.Hover};
        }

        &:active:not(:disabled) {
          background-color: ${Silent.SurfaceFill.Pressed};
          color: ${Silent.Icon.Pressed};
        }

        &:disabled {
          color: ${Silent.Icon.Disabled};
          cursor: not-allowed;
        }

        &.mode2 {
          width: unset;
        }

        &.mode3 {
          width: inherit;
        }
      }
    `;
  }
);

export const baseStyle = css`
  .input-wrapper {
    display: flex;
    overflow: hidden;
    box-sizing: border-box;

    & > input::-webkit-outer-spin-button,
    & > input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    > input {
      flex-grow: 1;
    }

    > input[type="number"] {
      -moz-appearance: textfield;
    }

    &.mode1 {
      > button:first-of-type {
        order: -2;
      }

      .unit {
        order: -1;
      }

      .unit.prepend {
        order: 0;
      }

      & > input {
        text-align: center;
      }
    }

    &.mode2,
    &.mode3 {
      .unit.prepend {
        order: -1;
      }
    }
  }
`;
