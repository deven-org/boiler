import { SemanticThemeIterator, ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";
import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticBaseStyles = css`
  .noPointerEvents {
    pointer-events: none;
  }

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

export const staticSemanticStyles = css`
  ${SemanticThemeIterator((theme, sem, css) => {
    const { inputfield, labelslot } = sem.forms;

    return css`
      .blr-input-field-number.${theme} {
        &.sm {
          & > .label-wrapper {
            display: flex;
            padding: ${labelslot.padding.sm};
          }
        }

        &.md {
          & > .label-wrapper {
            display: flex;
            padding: ${labelslot.padding.md};
          }
        }

        &.lg {
          & > .label-wrapper {
            display: flex;
            padding: ${labelslot.padding.lg};
          }
        }
      }

      .input-wrapper.${theme} {
        box-sizing: border-box;
        width: 100%;
        outline-width: ${inputfield.container.border.default.rest.width};
        outline-offset: calc(${inputfield.container.border.default.rest.width} * -1);
        outline-style: ${inputfield.container.border.default.rest.style};
        outline-color: ${inputfield.container.border.default.rest.color};
        border-radius: ${inputfield.container.borderradius};

        &.readonly {
          color: ${inputfield.userinput.textcolor.default.readonly};
          background-color: ${inputfield.container.bgcolor.default.readonly};

          & > input {
            color: ${inputfield.userinput.textcolor.default.readonly};

            &::placeholder {
              color: ${inputfield.placeholder.textcolor.default.readonly};
            }
          }
        }

        &:focus-within {
          outline-offset: calc(${inputfield.container.border.default.focus.width} * -1);
          outline-width: ${inputfield.container.border.default.focus.width};
          outline-style: ${inputfield.container.border.default.focus.style};
          outline-color: ${inputfield.container.border.default.focus.color};
          background-color: ${inputfield.container.bgcolor.default.focus};

          & > input {
            color: ${inputfield.userinput.textcolor.default.focus};

            &::placeholder {
              color: ${inputfield.placeholder.textcolor.default.focus};
            }
          }
        }
      }
      input.${theme} {
        all: inherit;
        color: ${inputfield.userinput.textcolor.default.rest};
        border: none;

        &::placeholder {
          color: ${inputfield.placeholder.textcolor.default.rest};
        }

        &.readonly {
          color: ${inputfield.userinput.textcolor.default.readonly};
          background-color: ${inputfield.container.bgcolor.default.readonly};

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.default.readonly};
          }
        }

        &:disabled {
          color: ${inputfield.userinput.textcolor.default.disabled};
          background-color: ${inputfield.container.bgcolor.default.disabled};

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.default.disabled};
          }
        }
      }

      .input-unit-container.${theme} {
        .unit {
          color: ${inputfield.prefixsuffix.textcolor.default.rest};
        }
      }

      .unit.${theme}, input.${theme} {
        &.sm {
          font-weight: ${inputfield.userinput.typography.sm.fontWeight};
          font-size: ${inputfield.userinput.typography.sm.fontSize};
          font-family: ${inputfield.userinput.typography.sm.fontFamily}, sans-serif;
          line-height: ${inputfield.userinput.typography.sm.lineHeight};
          padding: ${inputfield.container.padding.sm};
        }

        &.md {
          font-weight: ${inputfield.userinput.typography.md.fontWeight};
          font-size: ${inputfield.userinput.typography.md.fontSize};
          font-family: ${inputfield.userinput.typography.md.fontFamily}, sans-serif;
          line-height: ${inputfield.userinput.typography.md.lineHeight};
          padding: ${inputfield.container.padding.md};
        }

        &.lg {
          font-weight: ${inputfield.userinput.typography.lg.fontWeight};
          font-size: ${inputfield.userinput.typography.lg.fontSize};
          font-family: ${inputfield.userinput.typography.lg.fontFamily}, sans-serif;
          line-height: ${inputfield.userinput.typography.lg.lineHeight};
          padding: ${inputfield.container.padding.lg};
        }
      }

      &.disabled.${theme} {
        outline: ${inputfield.container.border.default.disabled.width} ${inputfield.container.border.default.disabled.style}
          ${inputfield.container.border.default.disabled.color};
        background-color: ${inputfield.container.bgcolor.default.disabled};
        cursor: not-allowed;
      }

      &.error-input.${theme} {
        outline: ${inputfield.container.border.error.rest.width} ${inputfield.container.border.error.rest.style}
          ${inputfield.container.border.error.rest.color};
        color: ${inputfield.userinput.textcolor.error.rest};
        background-color: ${inputfield.container.bgcolor.error.rest};

        &::placeholder {
          color: ${inputfield.placeholder.textcolor.error.rest};
        }

        &:hover {
          outline: ${inputfield.container.border.error.hover.width} ${inputfield.container.border.error.hover.style}
            ${inputfield.container.border.error.hover.color};
          color: ${inputfield.userinput.textcolor.error.hover};
          background-color: ${inputfield.container.bgcolor.error.hover};

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.error.hover};
          }
        }

        &:active {
          outline: ${inputfield.container.border.error.pressed.width} ${inputfield.container.border.error.pressed.style}
            ${inputfield.container.border.error.pressed.color};
          color: ${inputfield.userinput.textcolor.error.pressed};
          background-color: ${inputfield.container.bgcolor.error.pressed};

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.error.pressed};
          }
        }

        &:focus-within {
          outline: ${inputfield.container.border.error.focus.width} ${inputfield.container.border.error.focus.style}
            ${inputfield.container.border.error.focus.color};
          color: ${inputfield.userinput.textcolor.error.focus};
          background-color: ${inputfield.container.bgcolor.error.focus};

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.error.focus};
          }
        }
      }

      &.readonly.${theme} {
        outline: ${inputfield.container.border.default.readonly.width} ${inputfield.container.border.default.readonly.style}
          ${inputfield.container.border.default.readonly.color};
        color: ${inputfield.userinput.textcolor.default.readonly};
        background-color: ${inputfield.container.bgcolor.default.readonly};

        &::placeholder {
          color: ${inputfield.placeholder.textcolor.default.readonly};
        }
      }
    `;
  })}
`;

export const staticComponentStyles = css`
  ${ComponentThemeIterator((theme, cmp, css) => {
    const { StepperButton, StepperCombo, InputFieldNumber } = cmp;

    return css`
      .input-unit-container.${theme} {
        &.sm {
          gap: ${InputFieldNumber.InputField.TextWrapper.ItemSpacing.SM};
        }

        &.md {
          gap: ${InputFieldNumber.InputField.TextWrapper.ItemSpacing.MD};
        }

        &.lg {
          gap: ${InputFieldNumber.InputField.TextWrapper.ItemSpacing.LG};
        }
      }

      .split.${theme} {
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

      .stepper-combo.${theme} {
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

      .custom-stepper-button.${theme} {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        padding: 0;
        background-color: ${StepperButton.Container.BackgroundColor.Rest};
        color: ${StepperButton.Icon.IconColor.Rest};

        &:hover:not(:disabled) {
          background-color: ${StepperButton.Container.BackgroundColor.Hover};
          color: ${StepperButton.Icon.IconColor.Hover};
        }

        &:active:not(:disabled) {
          background-color: ${StepperButton.Container.BackgroundColor.Pressed};
          color: ${StepperButton.Icon.IconColor.Pressed};
        }

        &:disabled {
          background-color: ${StepperButton.Container.BackgroundColor.Disabled};
          color: ${StepperButton.Icon.IconColor.Disabled};
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
  })}
`;
