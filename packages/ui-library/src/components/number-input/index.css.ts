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

      &.focus {
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
    }
  `;
});

export const { tokenizedLight: formLight, tokenizedDark: formDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { UserInput, Placeholder, SM, MD, LG } = semanticTokens.Forms;

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
        grid-row: span 2;
      }

      .stepper-combo.vertical.md {
        grid-area: right2;
        grid-row: span 2;
      }

      .stepper-combo.vertical.lg {
        grid-area: right2;
        grid-row: span 2;
      }

      & > .unit:not(.prepend) {
        grid-area: unitright;
        grid-row: span 2;
      }

      & > .unit.prepend {
        grid-area: unitleft;
        grid-row: span 2;
      }
    }
  }

  .divider-horizontal {
    position: absolute;
    top: 45%;
    width: 60%;
    padding-left: 20%;
  }

  .divider-vertical {
    position: absolute;
    left: 60%;
    height: 60%;
    padding-top: 10%;
  }
`;
