import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: wrapperLight, tokenizedDark: wrapperDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { UserInput, SurfaceFill, Placeholder, Input, InputBorderRadius } = semanticTokens.Forms;

  return css`
    .input-wrapper {
      border: ${Input.Default.Rest.width} ${Input.Default.Rest.style} ${Input.Default.Rest.color};
      border-radius: ${InputBorderRadius};

      &.disabled {
        border-width: ${Input.Default.ReadOnly.width};
        border-style: ${Input.Default.Disabled.style};
        border-color: transparent;
        outline: ${Input.Default.Disabled.width} ${Input.Default.Disabled.style} ${Input.Default.Disabled.color};

        cursor: not-allowed;
        background-color: ${SurfaceFill.Default.Disabled};

        & > input {
          background-color: ${SurfaceFill.Default.Disabled};
          color: ${UserInput.Default.Disabled};

          &::placeholder {
            color: ${Placeholder.Default.Disabled};
          }
        }
      }

      &.focus:not(.error-input) {
        border-width: ${Input.Default.Rest.width};
        border-style: ${Input.Default.Rest.style};
        border-color: transparent;
        outline: ${Input.Default.Focus.width} ${Input.Default.Focus.style} ${Input.Default.Focus.color};
        background-color: ${SurfaceFill.Default.Focus};

        & > input {
          background-color: ${SurfaceFill.Default.Focus};
          color: ${UserInput.Default.Focus};

          &::placeholder {
            color: ${Placeholder.Default.Focus};
          }
        }
      }

      &:focus {
        border-width: ${Input.Default.Rest.width};
        border-style: ${Input.Default.Rest.style};
        border-color: transparent;
        outline: ${Input.Default.Focus.width} ${Input.Default.Focus.style} ${Input.Default.Focus.color};
        background-color: ${SurfaceFill.Default.Focus};

        & > input {
          background-color: ${SurfaceFill.Default.Focus};
          color: ${UserInput.Default.Focus};

          &::placeholder {
            color: ${Placeholder.Default.Focus};
          }
        }
      }

      &.error-input {
        border-width: ${Input.Error.Rest.width};
        border-style: ${Input.Error.Rest.style};
        border-color: ${Input.Error.Rest.color};
        color: ${UserInput.Error.Rest};
        background-color: ${SurfaceFill.Error.Rest};

        &::placeholder {
          color: ${Placeholder.Error.Rest};
        }

        &:hover {
          border-width: ${Input.Error.Hover.width};
          border-style: ${Input.Error.Hover.style};
          border-color: ${Input.Error.Hover.color};
          color: ${UserInput.Error.Hover};
          background-color: ${SurfaceFill.Error.Hover};

          &::placeholder {
            color: ${Placeholder.Error.Hover};
          }
        }

        &:active {
          border-width: ${Input.Error.Pressed.width};
          border-style: ${Input.Error.Pressed.style};
          border-color: ${Input.Error.Pressed.color};
          outline: ${Input.Error.Pressed.width} ${Input.Error.Pressed.style} ${Input.Error.Pressed.color};
          color: ${UserInput.Error.Pressed};
          background-color: ${SurfaceFill.Error.Pressed};

          &::placeholder {
            color: ${Placeholder.Error.Pressed};
          }
        }

        &.focus {
          border-width: ${Input.Error.Rest.width};
          border-style: ${Input.Error.Rest.style};
          border-color: transparent;
          outline: ${Input.Error.Focus.width} ${Input.Error.Focus.style} ${Input.Error.Focus.color};
          color: ${Input.Error.Focus};
          background-color: ${SurfaceFill.Error.Focus};

          &::placeholder {
            color: ${Placeholder.Error.Focus};
          }
        }
      }

      &[readonly] {
        border-width: ${Input.Default.ReadOnly.width};
        border-style: ${Input.Default.ReadOnly.style};
        border-color: transparent;
        outline: ${Input.Default.Hover.width} ${Input.Default.ReadOnly.style} ${Input.Default.ReadOnly.color};
        background-color: ${SurfaceFill.Default.ReadOnly};

        &::placeholder {
          color: ${Placeholder.Default.ReadOnly};
        }
      }
    }
  `;
});

export const { tokenizedLight: formLight, tokenizedDark: formDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { UserInput, Placeholder, SM, MD, LG, Input, SurfaceFill } = semanticTokens.Forms;

  return css`
    .custom-form-input {
      all: initial;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${UserInput.Default.Rest};

      &::placeholder {
        color: ${Placeholder.Default.Rest};
      }

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

      &.error-input {
        color: ${UserInput.Error.Rest};
      }
    }

    .hint-wrapper {
      display: flex;

      &.sm {
        margin: ${SM.CaptionSlot.Margin};
      }

      &.md {
        margin: ${MD.CaptionSlot.Margin};
      }

      &.lg {
        margin: ${MD.CaptionSlot.Margin};
      }
    }

    .unit {
      all: initial;
      display: flex;
      align-items: center;
      justify-content: center;

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

      &.disabled {
        color: ${UserInput.Default.Disabled};
      }

      &.error-input {
        color: ${UserInput.Error.Rest};
      }
    }
  `;
});

export const { tokenizedLight: StepperComboLight, tokenizedDark: StepperComboDark } = renderThemedCssStrings(
  (componentTokens, semanticTokens) => {
    const { StepperCombo, StepperButton } = componentTokens.Action;
    const { Silent } = semanticTokens.Action;

    return css`
      .stepper-combo {
        position: relative;

        &.horizontal {
          display: flex;
          justify-content: flex-end;

          &.sm {
            width: ${StepperCombo.SM.Horizontal.Width};

            > .divider-vertical {
              padding: ${StepperCombo.SM.Horizontal.DividerWrapper.Padding};
            }
          }

          &.md {
            width: ${StepperCombo.MD.Horizontal.Width};

            > .divider-vertical {
              padding: ${StepperCombo.MD.Horizontal.DividerWrapper.Padding};
            }
          }

          &.lg {
            width: ${StepperCombo.LG.Horizontal.Width};

            > .divider-vertical {
              padding: ${StepperCombo.LG.Horizontal.DividerWrapper.Padding};
            }
          }
        }
      }

      &.vertical {
        &.sm {
          width: ${StepperCombo.SM.Vertical.Width};
        }

        &.md {
          width: ${StepperCombo.MD.Vertical.Width};

          > .divider-horizontal {
            padding: ${StepperCombo.MD.Vertical.DividerWrapper.Padding};
          }
        }

        &.lg {
          width: ${StepperCombo.LG.Vertical.Width};

          > .divider-horizontal {
            padding: ${StepperCombo.LG.Vertical.DividerWrapper.Padding};
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
          height: 50%;
        }

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
    grid-template-areas: "left unitleft center unitright right1 right2";
    grid-template-columns: fit-content(100%) fit-content(100%) 1fr fit-content(100%) fit-content(100%) fit-content(100%);
    overflow: hidden;
    box-sizing: border-box;

    & > input::-webkit-outer-spin-button,
    & > input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    & > input[type="number"] {
      -moz-appearance: textfield;
    }

    &.mode1 {
      .increment {
        grid-area: right2;
      }

      .decrement {
        grid-area: left;
      }

      & > input {
        grid-area: center;
        text-align: center;
      }

      & > .unit:not(.prepend) {
        grid-area: unitright;
      }

      & > .unit.prepend {
        grid-area: unitleft;
      }
    }

    &.mode2 {
      .stepper-combo.horizontal.sm {
        grid-area: right2;

        & > .divider-vertical {
          position: absolute;
          left: 50%;
          height: 60%;
          padding-top: 10%;
        }
      }

      .stepper-combo.horizontal.md {
        grid-area: right2;
      }

      .stepper-combo.horizontal.lg {
        grid-area: right2;
      }

      & > input {
        grid-area: center;
      }

      & > .unit:not(.prepend) {
        grid-area: unitright;
      }

      & > .unit.prepend {
        grid-area: unitleft;
      }
    }

    &.mode3 {
      .stepper-combo.vertical.sm {
        grid-area: right2;

        & > .divider-horizontal {
          position: absolute;
          top: 50%;
          width: 60%;
          left: 20%;
        }
      }

      .stepper-combo.vertical.md {
        grid-area: right2;
      }

      .stepper-combo.vertical.lg {
        grid-area: right2;

        & > .divider-horizontal {
          position: absolute;
          top: 50%;
          width: 60%;
          left: 4%;
        }
      }

      & > .unit:not(.prepend) {
        grid-area: unitright;
      }

      & > .unit.prepend {
        grid-area: unitleft;
        grid-row: span 2;
      }
    }
  }

  .divider-horizontal {
    position: absolute;
    top: 50%;
    width: 60%;
  }

  .divider-vertical {
    position: absolute;
    left: 60%;
    height: 60%;
  }
`;
