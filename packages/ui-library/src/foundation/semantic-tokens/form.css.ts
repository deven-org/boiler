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
          color: ${UserInput.Error.Focused};
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

    .blr-form-caption {
      display: flex;
      color: ${Caption.Hint};

      &.error {
        color: ${Caption.Error};
      }

      &.sm {
        padding: ${SM.CaptionComponent.Padding};
        gap: ${SM.CaptionComponent.ItemSpacing};

        .blr-icon {
          padding-top: ${SM.CaptionComponent.IconWrapper.PaddingTop};
          height: ${SM.CaptionComponent.IconDimension};
          width: ${SM.CaptionComponent.IconDimension};
        }

        .blr-caption-text {
          padding: ${SM.CaptionComponent.CaptionLabelWrapper.Padding};
          font-family: ${SM.Caption.fontFamily}, sans-serif;
          font-weight: ${SM.Caption.fontWeight};
          font-size: ${SM.Caption.fontSize};
          line-height: ${SM.Caption.lineHeight};
        }
      }

      &.md {
        padding: ${MD.CaptionComponent.Padding};
        gap: ${MD.CaptionComponent.ItemSpacing};

        .blr-icon {
          padding-top: ${MD.CaptionComponent.IconWrapper.PaddingTop};
          height: ${MD.CaptionComponent.IconDimension};
          width: ${MD.CaptionComponent.IconDimension};
        }

        .blr-caption-text {
          padding: ${MD.CaptionComponent.CaptionLabelWrapper.Padding};
          font-family: ${MD.Caption.fontFamily}, sans-serif;
          font-weight: ${MD.Caption.fontWeight};
          font-size: ${MD.Caption.fontSize};
          line-height: ${MD.Caption.lineHeight};
        }
      }

      &.lg {
        padding: ${LG.CaptionComponent.Padding};
        gap: ${LG.CaptionComponent.ItemSpacing};

        .blr-icon {
          padding-top: ${LG.CaptionComponent.IconWrapper.PaddingTop};
          height: ${LG.CaptionComponent.IconDimension};
          width: ${LG.CaptionComponent.IconDimension};
        }

        .blr-caption-text {
          padding: ${LG.CaptionComponent.CaptionLabelWrapper.Padding};
          font-weight: ${LG.Caption.fontWeight};
          font-size: ${LG.Caption.fontSize};
          font-family: ${LG.Caption.fontFamily}, sans-serif;
          line-height: ${LG.Caption.lineHeight};
        }
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
        padding: ${SM.LabelSlot.Padding};
        font-weight: ${FormLabel.Label.Typography.SM.fontWeight};
        font-size: ${FormLabel.Label.Typography.SM.fontSize};
        font-family: ${FormLabel.Label.Typography.SM.fontFamily}, sans-serif;
        line-height: ${FormLabel.Label.Typography.SM.lineHeight};
        gap: ${FormLabel.Container.ItemSpacing.SM};
        __FIX__color: ${FormLabel.Label.TextColor.Rest};

        &.__FIX__error {
          color: ${FormLabel.Label.TextColor.Error};
        }
      }

      &.md {
        padding: ${MD.LabelSlot.Padding};
        font-weight: ${FormLabel.Label.Typography.MD.fontWeight};
        font-size: ${FormLabel.Label.Typography.MD.fontSize};
        font-family: ${FormLabel.Label.Typography.MD.fontFamily}, sans-serif;
        line-height: ${FormLabel.Label.Typography.MD.lineHeight};
        gap: ${FormLabel.Container.ItemSpacing.MD};
      }

      &.lg {
        padding: ${LG.LabelSlot.Padding};
        font-weight: ${FormLabel.Label.Typography.LG.fontWeight};
        font-size: ${FormLabel.Label.Typography.LG.fontSize};
        font-family: ${FormLabel.Label.Typography.LG.fontFamily}, sans-serif;
        line-height: ${FormLabel.Label.Typography.LG.lineHeight};
        gap: ${FormLabel.Container.ItemSpacing.LG};

        &.__FIX__error {
          color: ${FormLabel.Label.TextColor.Error};
        }
      }
    }





    .blr-form-label-inline {
      flex: 1;

      &.sm {
        font-weight: ${SM.LabelNextToControl.fontWeight};
        font-size: ${SM.LabelNextToControl.fontSize};
        font-family: ${SM.LabelNextToControl.fontFamily}, sans-serif;
        line-height: ${SM.LabelNextToControl.lineHeight};
      }

      &.md {
        font-weight: ${MD.LabelNextToControl.fontWeight};
        font-size: ${MD.LabelNextToControl.fontSize};
        font-family: ${MD.LabelNextToControl.fontFamily}, sans-serif;
        line-height: ${MD.LabelNextToControl.lineHeight};
      }

      &.lg {
        font-weight: ${LG.LabelNextToControl.fontWeight};
        font-size: ${LG.LabelNextToControl.fontSize};
        font-family: ${LG.LabelNextToControl.fontFamily}, sans-serif;
        line-height: ${LG.LabelNextToControl.lineHeight};
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
