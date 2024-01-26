import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";
import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: wrapperLight, tokenizedDark: wrapperDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { UserInput, SurfaceFill, Placeholder, Input, InputBorderRadius, SM, MD, LG, PrefixSuffix } = semanticTokens.Forms;
  const { StepperButton } = componentTokens.Actions;
  const { NumberInput } = componentTokens.Forms;

  return typeSafeNestedCss`
    .noPointerEvents {
      pointer-events: none;
    }

    .input-wrapper {
      box-sizing: border-box;
      width: 100%;

      outline-width: ${Input.Default.Rest.width};
      outline-style: ${Input.Default.Rest.style};
      outline-color: ${Input.Default.Rest.color};
      border-radius: ${InputBorderRadius};

      &:focus-within {
        outline-width: ${Input.Default.Focus.width};
        outline-style: ${Input.Default.Focus.style};
        outline-color: ${Input.Default.Focus.color};

        background-color: ${SurfaceFill.Default.Focus};

        & > input {
          color: ${UserInput.Default.Focus};

          &::placeholder {
            color: ${Placeholder.Default.Focus};
          }
        }
      }
    }

    .input-unit-container {
      &.sm {
        gap: ${NumberInput.InputField.TextWrapper.ItemSpacing.SM};
      }

      &.md {
        gap: ${NumberInput.InputField.TextWrapper.ItemSpacing.MD};
      }

      &.lg {
        gap: ${NumberInput.InputField.TextWrapper.ItemSpacing.LG};
      }

      .unit {
        color: ${PrefixSuffix.OnPopulatedField.Default.Rest};
      }
    }

    input {
      all: initial;
    }

    & > * {
      background-color: transparent;
    }

    .split {
      &.sm {
        & > .custom-stepper-button {
          width: ${StepperButton.Container.Width.SM};
        }
      }

      &.md {
        & > .custom-stepper-button {
          width: ${StepperButton.Container.Width.MD};
        }
      }

      &.lg {
        & > .custom-stepper-button {
          width: ${StepperButton.Container.Width.LG};
        }
      }
    }

    .unit,
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
        color: ${UserInput.Error.Focused};
        background-color: ${SurfaceFill.Error.Focus};

        &::placeholder {
          color: ${Placeholder.Error.Focus};
        }
      }
    }

    &.readonly {
      outline: ${Input.Default.Hover.width} ${Input.Default.ReadOnly.style} ${Input.Default.ReadOnly.color};
      background-color: ${SurfaceFill.Default.ReadOnly};

      &::placeholder {
        color: ${Placeholder.Default.ReadOnly};
      }
    }
  `;
});

export const { tokenizedLight: StepperComboLight, tokenizedDark: StepperComboDark } = renderThemedCssStrings((componentTokens) => {
  const { StepperCombo, StepperButton } = componentTokens.Actions;

  return typeSafeNestedCss`
      .stepper-combo {
        &.horizontal {
          display: grid;
          grid-template-columns: 1fr 0 1fr;
          justify-content: center;

          &.sm {
            width: ${StepperCombo.Container.Width.Horizontal.SM};

            & > blr-divider {
              padding: ${StepperCombo.DividerWrapper.Padding.HorizontalLayout.SM};
            }
          }

          &.md {
            width: ${StepperCombo.Container.Width.Horizontal.MD};

            & > blr-divider {
              padding: ${StepperCombo.DividerWrapper.Padding.HorizontalLayout.MD};
            }
          }

          &.lg {
            width: ${StepperCombo.Container.Width.Horizontal.LG};

            & > blr-divider {
              padding: ${StepperCombo.DividerWrapper.Padding.HorizontalLayout.LG};
            }
          }
        }

        &.vertical {
          display: grid;
          grid-template-rows: 1fr 0 1fr;
          justify-content: center;

          &.sm {
            width: ${StepperCombo.Container.Width.Vertical.SM};

            & > blr-divider {
              padding: ${StepperCombo.DividerWrapper.Padding.VerticalLayout.SM};
            }
          }

          &.md {
            width: ${StepperCombo.Container.Width.Vertical.MD};

            & > blr-divider {
              padding: ${StepperCombo.DividerWrapper.Padding.VerticalLayout.MD};
            }
          }

          &.lg {
            width: ${StepperCombo.Container.Width.Vertical.LG};

            & > blr-divider {
              padding: ${StepperCombo.DividerWrapper.Padding.VerticalLayout.LG};
            }
          }
        }
      }

      .custom-stepper-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        padding: 0;

        background-color: ${StepperButton.Container.BackgroundColor.Rest};
        color: ${StepperButton.Icon.IconColor.Rest};

        &:hover:not(:disabled) {
          background-color: ${StepperButton.Container.BackgroundColor.Hover};
        color: ${StepperButton.Icon.IconColor.Hover}
        }

        &:active:not(:disabled) {
          background-color: ${StepperButton.Container.BackgroundColor.Pressed};
        color: ${StepperButton.Icon.IconColor.Pressed}
        }

        &:disabled {
          background-color: ${StepperButton.Container.BackgroundColor.Disabled};
          color: ${StepperButton.Icon.IconColor.Disabled}
          cursor: not-allowed;
        }

        &.horizontal {
          width: unset;
        }

        &.vertical {
          width: inherit;
        }
      }
    `;
});

export const baseStyle = typeSafeNestedCss`
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .input-wrapper {
    display: flex;
    overflow: hidden;
    box-sizing: border-box;

    .input-unit-container {
      display: flex;
    }

    .input-unit-container .unit.prepend {
      grid-area: first;
      padding-right: 0;
      order: -2;
    }

    .input-unit-container input.prepend {
      grid-area: second;
      padding-left: 0;
    }

    .input-unit-container .unit:not(.prepend) {
      grid-area: second;
      padding-left: 0;
    }

    .input-unit-container input:not(.prepend) {
      grid-area: first;
      padding-right: 0;
    }

    .input-unit-container.split {
      flex: 1;
      display: inline-grid;
      grid-template-columns: 1fr auto auto 1fr;
      grid-template-areas: "left-gap first second right-gap";
    }

    .input-unit-container.split .input-container > input {
      text-align: center;
    }

    .input-unit-container.split input {
      text-align: left;
    }
  }

  .split > button:first-of-type {
    order: -2;
  }

  .split > button:last-of-type {
    _margin-left: auto;
  }

  &:not(.split) {
    .input-unit-container {
      width: 100%;
    }

    .input-unit-container input:not(.prepend) {
      width: 100%;
    }
  }
`;
