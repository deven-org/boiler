import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: formLight, tokenizedDark: formDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { UserInput, SurfaceFill, SM, MD, LG, Input, InputBorderRadius, Placeholder, Caption, InputIcon } = semanticTokens.Forms;
  const { Select, FormLabel } = componentTokens.Forms;

  return typeSafeNestedCss`
    .blr-form-element {
      all: initial;
      width: 100%;
      color: ${UserInput.Default.Rest};
      font-weight: ${MD.UserInput.fontWeight};
      font-size: ${MD.UserInput.fontSize};
      font-family: ${MD.UserInput.fontFamily}, sans-serif;
      border: ${Input.Default.Rest.width} ${Input.Default.Rest.style} ${Input.Default.Rest.color};
      border-radius: ${InputBorderRadius};
      box-sizing: border-box;

      &::placeholder {
        color: ${Placeholder.Default.Rest};
      }

      &:hover {
        border-width: ${Input.Default.Hover.width};
        border-style: ${Input.Default.Hover.style};
        border-color: ${Input.Default.Hover.color};
        color: ${UserInput.Default.Hover};
        background-color: ${SurfaceFill.Default.Hover};

        &::placeholder {
          color: ${Placeholder.Default.Hover};
        }
      }

      &:active {
        border-width: ${Input.Default.Pressed.width};
        border-style: ${Input.Default.Pressed.style};
        border-color: transparent;
        outline: ${Input.Default.Pressed.width} ${Input.Default.Pressed.style} ${Input.Default.Pressed.color};
        color: ${UserInput.Default.Pressed};
        background-color: ${SurfaceFill.Default.Pressed};

        &::placeholder {
          color: ${Placeholder.Default.Pressed};
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

      &:disabled {
        border-width: ${Input.Default.ReadOnly.width};
        border-style: ${Input.Default.Disabled.style};
        border-color: transparent;
        outline: ${Input.Default.Disabled.width} ${Input.Default.Disabled.style} ${Input.Default.Disabled.color};
        color: ${UserInput.Default.Disabled};
        background-color: ${SurfaceFill.Default.Disabled};
        cursor: not-allowed;

        &::placeholder {
          color: ${Placeholder.Default.Disabled};
        }
      }

      &:focus {
        border-width: ${Input.Default.Rest.width};
        border-style: ${Input.Default.Rest.style};
        border-color: transparent;
        outline: ${Input.Default.Focus.width} ${Input.Default.Focus.style} ${Input.Default.Focus.color};
        color: ${UserInput.Default.Focus};
        background-color: ${SurfaceFill.Default.Focus};

        &::placeholder {
          color: ${Placeholder.Default.Focus};
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
          border-style: ${Input.Error.Pressed.color};
          outline: ${Input.Error.Pressed.width} ${Input.Error.Pressed.style} ${Input.Error.Pressed.color};
          color: ${UserInput.Error.Pressed};
          background-color: ${SurfaceFill.Error.Pressed};

          &::placeholder {
            color: ${Placeholder.Error.Pressed};
          }
        }

        &:focus {
          border-width: ${Input.Error.Rest.width};
          border-style: ${Input.Error.Rest.style};
          border-color: transparent;
          outline: ${Input.Error.Focus.width} ${Input.Error.Focus.style} ${Input.Error.Focus.color};
          color: ${UserInput.Error.Focus};
          background-color: ${SurfaceFill.Error.Focus};

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

    .blr-input-inner-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .blr-input-icon {
        position: absolute;
        color: ${Placeholder.Default.Rest};
      }

      &.error-input {
        .blr-input-icon {
          color: ${Input.Error.Rest.color};
        }
      }

      &.sm {
        padding: ${SM.LabelSlot.Padding};
        margin: ${SM.InputSlot.Margin};

        .blr-input-icon {
          right: ${Select.SM.IconPaddingRight};
        }
      }

      &.md {
        padding: ${MD.LabelSlot.Padding};
        margin: ${MD.InputSlot.Margin};

        .blr-input-icon {
          right: ${Select.MD.IconPaddingRight};
        }
      }

      &.lg {
        padding: ${LG.LabelSlot.Padding};
        margin: ${LG.InputSlot.Margin};

        .blr-input-icon {
          right: ${Select.LG.IconPaddingRight};
        }
      }

      &:hover {
        & input:not(:disabled) + .blr-input-icon {
          color: ${InputIcon.Hover};
        }

        & .error-input:not(:disabled) + .blr-input-icon {
          color: ${Input.Error.Rest.color};
          cursor: default;
        }
      }
    }

    .blr-caption-text {
      word-break: break-all;
    }

    .caption-wrapper {
      display: flex;
      flex-direction: column;

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

    .blr-form-label {
      display: flex;
      align-items: center;
      color: ${FormLabel.Label.TextColor.Rest};
      word-break: break-all;
      
      &:focus {
        color: ${FormLabel.Label.TextColor.Focus};
        .blr-form-label-appendix {
          color: ${FormLabel.LabelAppendix.TextColor.Focus};
        }
      }

      &:hover {
        color: ${FormLabel.Label.TextColor.Hover};
        .blr-form-label-appendix {
          color: ${FormLabel.LabelAppendix.TextColor.Hover};
        }
      }

      &:disabled {
        color: ${FormLabel.Label.TextColor.Disabled};
        .blr-form-label-appendix {
          color: ${FormLabel.LabelAppendix.TextColor.Disabled};
        }
      }

      &[readonly] {
        color: ${FormLabel.Label.TextColor.ReadOnly};
        .blr-form-label-appendix {
          color: ${FormLabel.LabelAppendix.TextColor.ReadOnly};
        }
      }

      &.error {
        color: ${FormLabel.Label.TextColor.Error};
        .blr-form-label-appendix {
          color: ${FormLabel.LabelAppendix.TextColor.Error};
        }
      }

      &.sm {
        font-weight: ${FormLabel.Label.Typography.SM.fontWeight};
        font-size: ${FormLabel.Label.Typography.SM.fontSize};
        font-family: ${FormLabel.Label.Typography.SM.fontFamily}, sans-serif;
        line-height: ${FormLabel.Label.Typography.SM.lineHeight};
        gap: ${FormLabel.Container.ItemSpacing.SM};
      }

      &.md {
        font-weight: ${FormLabel.Label.Typography.MD.fontWeight};
        font-size: ${FormLabel.Label.Typography.MD.fontSize};
        font-family: ${FormLabel.Label.Typography.MD.fontFamily}, sans-serif;
        line-height: ${FormLabel.Label.Typography.MD.lineHeight};
        gap: ${FormLabel.Container.ItemSpacing.MD};
      }

      &.lg {
        font-weight: ${FormLabel.Label.Typography.LG.fontWeight};
        font-size: ${FormLabel.Label.Typography.LG.fontSize};
        font-family: ${FormLabel.Label.Typography.LG.fontFamily}, sans-serif;
        line-height: ${FormLabel.Label.Typography.LG.lineHeight};
        gap: ${FormLabel.Container.ItemSpacing.LG};
      }
    }





    .blr-form-label-inline {
      flex: 1;

      &.sm {
        font-weight: ${FormLabel.InlineLabel.Typography.SM.fontWeight};
        font-size: ${FormLabel.InlineLabel.Typography.SM.fontSize};
        font-family: ${FormLabel.InlineLabel.Typography.SM.fontFamily}, sans-serif;
        line-height: ${FormLabel.InlineLabel.Typography.SM.lineHeight};
      }

      &.md {
        font-weight: ${FormLabel.InlineLabel.Typography.MD.fontWeight};
        font-size: ${FormLabel.InlineLabel.Typography.MD.fontSize};
        font-family: ${FormLabel.InlineLabel.Typography.MD.fontFamily}, sans-serif;
        line-height: ${FormLabel.InlineLabel.Typography.MD.lineHeight};
      }

      &.lg {
        font-weight: ${FormLabel.InlineLabel.Typography.LG.fontWeight};
        font-size: ${FormLabel.InlineLabel.Typography.LG.fontSize};
        font-family: ${FormLabel.InlineLabel.Typography.LG.fontFamily}, sans-serif;
        line-height: ${FormLabel.InlineLabel.Typography.LG.lineHeight};
      }
    }




    .blr-form-label-appendix {
      color: ${FormLabel.LabelAppendix.TextColor.Rest};

      &.sm {
        padding-left: ${SM.LabelSlot.Padding};
        font-weight: ${FormLabel.LabelAppendix.Typography.SM.fontWeight};
        font-size: ${FormLabel.LabelAppendix.Typography.SM.fontSize};
        font-family: ${FormLabel.LabelAppendix.Typography.SM.fontFamily}, sans-serif;
        line-height: ${FormLabel.LabelAppendix.Typography.SM.lineHeight};
      }

      &.md {
        padding-left: ${MD.LabelSlot.Padding};
        font-weight: ${FormLabel.LabelAppendix.Typography.MD.fontWeight};
        font-size: ${FormLabel.LabelAppendix.Typography.MD.fontSize};
        font-family: ${FormLabel.LabelAppendix.Typography.MD.fontFamily}, sans-serif;
        line-height: ${FormLabel.LabelAppendix.Typography.MD.lineHeight};
      }

      &.lg {
        padding-left: ${LG.LabelSlot.Padding};
        font-weight: ${FormLabel.LabelAppendix.Typography.LG.fontWeight};
        font-size: ${FormLabel.LabelAppendix.Typography.LG.fontSize};
        font-family: ${FormLabel.LabelAppendix.Typography.LG.fontFamily}, sans-serif;
        line-height: ${FormLabel.LabelAppendix.Typography.LG.lineHeight};
      }

      .__fix__error {
        color: ${FormLabel.LabelAppendix.TextColor.Error};
      }

      .__fix__hint {
        color: ${Caption.Hint};
      }
    }
  `;
});
