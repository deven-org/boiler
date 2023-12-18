import { typeSafeNestedCss as css } from "../../../utils/nested-typesafe-css-literals";
import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";

import { componentTokens } from "../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";
import { makeIterator } from "../../../utils/token-part-iterator-css-in-ts";
const { NumberInput } = componentTokens.Forms;

export const { tokenizedLight: wrapperLight, tokenizedDark: wrapperDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { UserInput, SurfaceFill, Placeholder, Input, InputBorderRadius, SM, MD, LG, PrefixSuffix } = semanticTokens.Forms;
  const { StepperCombo } = componentTokens.Action;

  const forEachStepperComboSize = makeIterator<typeof StepperCombo>();

  return css`
    .input-wrapper {
      outline: ${Input.Default.Rest.width} ${Input.Default.Rest.style} ${Input.Default.Rest.color};
      border-radius: ${InputBorderRadius};

      > input {
        border: none;
        outline: none;
        color: inherit;
      }

      .unit {
        color: ${PrefixSuffix.OnPopulatedField.Default.Rest};
      }

      > * {
        background-color: transparent;
      }

      &.split {
        ${forEachStepperComboSize(StepperCombo, (key, tokenPart, css) => {
          return css`
            &.${key.toLocaleLowerCase()} {
              & > .custom-stepper-button {
                width: ${tokenPart.Vertical.Width};
              }
            }
          `;
        })}

        > .unit {
          text-align: left;
        }

        > input {
          text-align: right;

          &.sm {
            padding-right: ${NumberInput.Input.TextContainer.ItemSpacing.SM};
          }

          &.md {
            padding-right: ${NumberInput.Input.TextContainer.ItemSpacing.MD};
          }

          &.lg {
            padding-right: ${NumberInput.Input.TextContainer.ItemSpacing.LG};
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
          color: ${UserInput.Error.Focused};
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
        &.horizontal {
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

        &.vertical {
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

        &.horizontal {
          width: unset;
        }

        &.vertical {
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

    &.split {
      > button:first-of-type {
        order: -2;
      }

      .unit {
        order: 0;
        padding-left: 0;
      }

      .unit.prepend {
        order: -1;
        text-align: right;
        padding-right: 0;
      }

      > input.prepend {
        text-align: left;
      }

      > button:last-of-type {
        margin-left: auto;
      }

      > input {
        padding-right: 0;
      }
    }

    &.horizontal,
    &.vertical {
      .unit.prepend {
        order: -1;
        padding-right: 0;
      }

      > input.prepend {
        &.sm {
          padding-left: ${NumberInput.Input.TextContainer.ItemSpacing.SM};
        }

        &.md {
          padding-left: ${NumberInput.Input.TextContainer.ItemSpacing.MD};
        }

        &.lg {
          padding-left: ${NumberInput.Input.TextContainer.ItemSpacing.LG};
        }
      }
    }
  }
`;
