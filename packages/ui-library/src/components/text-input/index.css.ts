import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../../foundation/_tokens-generated/index.pseudo.generated";

export const styleCustom = typeSafeNestedCss`
  .blr-text-input {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .blr-text-input:disabled {
    pointer-events: none;
  }

  .blr-input-icon:hover {
    cursor: pointer;
  }

  .blr-input-icon:disabled {
    cursor: none;
  }

  .noPointerEvents {
    pointer-events: none;
  }
`;

export const { tokenizedLight: textInputLight, tokenizedDark: textInputDark } = renderThemedCssStrings(
  (_componentTokens, semanticTokens) => {
    const { UserInput, SurfaceFill, SM, MD, LG, Input, InputBorderRadius, Placeholder, InputIcon } = semanticTokens.Forms;

    return typeSafeNestedCss`

    .blr-text-input {
      &.sm {
        & > .label-wrapper {
          display: flex;
          padding: ${SM.LabelSlot.Padding};
        }
      }
      &.md {
        & > .label-wrapper {
          display: flex;
          padding: ${MD.LabelSlot.Padding};
        }
      }
      &.lg {
        & > .label-wrapper {
          display: flex;
          padding: ${LG.LabelSlot.Padding};
        }
      }
    }
    .blr-input-inner-container {
      flex-grow: 1;
      flex-shrink: 1;

      .blr-form-input {
        all: initial;
        border-radius: ${InputBorderRadius};
        box-sizing: border-box;
        width: 100%;
        border: none;
        outline: none;
        color: ${UserInput.Default.Rest};

        font-weight: ${MD.UserInput.fontWeight};
        font-size: ${MD.UserInput.fontSize};
        font-family: ${MD.UserInput.fontFamily}, sans-serif;

        &::placeholder {
          color: ${Placeholder.Default.Rest};
        }

        &:hover {
          &::placeholder {
            color: ${Placeholder.Default.Hover};
          }
        }

        &:active {
          &::placeholder {
            color: ${Placeholder.Default.Pressed};
          }
        }

        &[readonly] {
          &::placeholder {
            color: ${Placeholder.Default.ReadOnly};
          }
        }

        &.disabled {
          &::placeholder {
            color: ${Placeholder.Default.Disabled};
          }
        }

        &.focus {
          border: none;
          outline: none;

          &::placeholder {
            color: ${Placeholder.Default.Focus};
          }
        }

        &.error-input {
          border: none;
          outline: none;

          &.focus {
            border-width: ${Input.Error.Rest.width};
            border-style: ${Input.Error.Rest.style};
            border-color: transparent;
            outline: ${Input.Error.Focus.width} ${Input.Error.Focus.style} ${Input.Error.Focus.color};
            color: ${UserInput.Error.Focus};
            background-color: ${SurfaceFill.Error.Focus};
          }

          &:hover {
            border: none;
            outline: none;

            &::placeholder {
              color: ${Placeholder.Error.Hover};
            }
          }

          &:active {
            border: none;
            outline: none;

            &::placeholder {
              color: ${Placeholder.Error.Pressed};
            }
          }

          &.focus {
            border: none;
            outline: none;

            &::placeholder {
              color: ${Placeholder.Error.Focus};
            }
          }
        }

        &.sm {
          font-weight: ${SM.UserInput.fontWeight};
          font-size: ${SM.UserInput.fontSize};
          font-family: ${SM.UserInput.fontFamily}, sans-serif;
          line-height: ${SM.UserInput.lineHeight};
        }

        &.md {
          font-weight: ${MD.UserInput.fontWeight};
          font-size: ${MD.UserInput.fontSize};
          font-family: ${MD.UserInput.fontFamily}, sans-serif;
          line-height: ${MD.UserInput.lineHeight};
        }

        &.lg {
          font-weight: ${LG.UserInput.fontWeight};
          font-size: ${LG.UserInput.fontSize};
          font-family: ${LG.UserInput.fontFamily}, sans-serif;
          line-height: ${LG.UserInput.lineHeight};
        }
      }
    }

    .blr-input-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: ${Input.Default.Rest.width} ${Input.Default.Rest.style} ${Input.Default.Rest.color};
      border-radius: ${InputBorderRadius};
      box-sizing: border-box;

      .blr-input-icon {
        position: relative;
        color: ${Placeholder.Default.Rest};
      }

      &.sm {
        padding: ${SM.InputField.Padding};
        margin: ${SM.InputSlot.Margin};
      }

      &.md {
        padding: ${MD.InputField.Padding};
        margin: ${MD.InputSlot.Margin};
      }

      &.lg {
        padding: ${LG.InputField.Padding};
        margin: ${LG.InputSlot.Margin};
      }

      &:hover {
        border-width: ${Input.Default.Hover.width};
        border-style: ${Input.Default.Hover.style};
        border-color: ${Input.Default.Hover.color};
        color: ${UserInput.Default.Hover};
        background-color: ${SurfaceFill.Default.Hover};

        &.blr-input-icon {
          color: ${InputIcon.Hover};
        }

        &.error-input:not(.disabled) + .blr-input-icon {
          color: ${Input.Error.Rest.color};
          cursor: default;
        }
      }

      &.focus {
        border-width: ${Input.Default.Rest.width};
        border-style: ${Input.Default.Rest.style};
        border-color: transparent;
        outline: ${Input.Default.Focus.width} ${Input.Default.Focus.style} ${Input.Default.Focus.color};
        background-color: ${SurfaceFill.Default.Focus};
      }

      &.disabled {
        border-width: ${Input.Default.ReadOnly.width};
        border-style: ${Input.Default.Disabled.style};
        border-color: transparent;
        outline: ${Input.Default.Disabled.width} ${Input.Default.Disabled.style} ${Input.Default.Disabled.color};
        color: ${UserInput.Default.Disabled};
        background-color: ${SurfaceFill.Default.Disabled};
        cursor: not-allowed;

        .blr-form-input {
          border: none;
          outline: none;
          background: transparent;
          cursor: not-allowed;
        }

        .blr-input-icon {
          color: ${Placeholder.Default.Rest};
        }
      }

      &[readonly] {
        border-width: ${Input.Default.ReadOnly.width};
        border-style: ${Input.Default.ReadOnly.style};
        border-color: transparent;
        outline: ${Input.Default.Hover.width} ${Input.Default.ReadOnly.style} ${Input.Default.ReadOnly.color};
        background-color: ${SurfaceFill.Default.ReadOnly};
      }

      &:active {
        border-width: ${Input.Default.Pressed.width};
        border-style: ${Input.Default.Pressed.style};
        border-color: transparent;
        outline: ${Input.Default.Pressed.width} ${Input.Default.Pressed.style} ${Input.Default.Pressed.color};
        color: ${UserInput.Default.Pressed};
        background-color: ${SurfaceFill.Default.Pressed};
      }

      &.error-input {
        border-width: ${Input.Error.Rest.width};
        border-style: ${Input.Error.Rest.style};
        border-color: ${Input.Error.Rest.color};
        background-color: ${SurfaceFill.Error.Rest};

        &.focus {
          border-width: ${Input.Error.Rest.width};
          border-style: ${Input.Error.Rest.style};
          border-color: transparent;
          outline: ${Input.Error.Focus.width} ${Input.Error.Focus.style} ${Input.Error.Focus.color};
          color: ${UserInput.Error.Focus};
          background-color: ${SurfaceFill.Error.Focus};
        }

        &:hover {
          border-width: ${Input.Error.Hover.width};
          border-style: ${Input.Error.Hover.style};
          color: ${UserInput.Error.Hover};
          background-color: ${SurfaceFill.Error.Hover};
        }

        &:active {
          border-width: ${Input.Error.Pressed.width};
          border-style: ${Input.Error.Pressed.style};
          border-color: ${Input.Error.Pressed.color};
          outline: ${Input.Error.Pressed.width} ${Input.Error.Pressed.style} ${Input.Error.Pressed.color};
          color: ${UserInput.Error.Pressed};
          background-color: ${SurfaceFill.Error.Pressed};
        }

        .blr-input-icon {
          color: ${Input.Error.Rest.color};
        }

        .blr-form-input {
          background: transparent;
          color: ${UserInput.Error.Rest};
        }
      }
    }
  `;
  }
);
