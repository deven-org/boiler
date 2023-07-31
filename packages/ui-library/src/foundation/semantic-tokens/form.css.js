import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: formLight, tokenizedDark: formDark } = renderThemedCssStrings(
  (componentTokens, semanticTokens) => {
    const { UserInput, SurfaceFill, SM, MD, LG, Input, InputBorderRadius, Placeholder, Caption, Label, LabelAppendix } =
      semanticTokens.Forms;
    const { Select, TextArea } = componentTokens.Forms;

    return css`
      .blr-form-element {
        all: initial;
        width: 100%;
        color: ${UserInput.Default.Rest};
        background-color: ${SurfaceFill.Default.Rest};
        font-weight: ${MD.UserInput.fontWeight};
        font-size: ${MD.UserInput.fontSize};
        font-family: ${MD.UserInput.fontFamily}, sans-serif;
        border: ${Input.Default.Rest.width} ${Input.Default.Rest.style} ${Input.Default.Rest.color};
        border-radius: ${InputBorderRadius};

        box-sizing: border-box;
        color: ${UserInput.Default.Rest};
        background-color: ${SurfaceFill.Default.Rest};
        &::placeholder {
          color: ${Placeholder.Default.Rest};
        }

        &:hover {
          border-width: ${Input.Default.Hover.width};
          border-style: ${Input.Default.Hover.style};
          border-color: ${Input.Default.Rest.color};
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
          color: ${Placeholder.Default.ReadOnly};
          border-color: transparent;
          outline: ${Input.Default.Hover.width} ${Input.Default.ReadOnly.style} ${Input.Default.ReadOnly.color};
          color: ${UserInput.Default.ReadOnly};
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
          padding-bottom: ${SM.LabelSlot.Padding};
          margin: ${SM.InputSlot.Margin};

          .blr-input-icon {
            right: ${Select.SM.IconPaddingRight};
          }
        }

        &.md {
          padding-bottom: ${MD.LabelSlot.Padding};
          margin: ${MD.InputSlot.Margin};

          .blr-input-icon {
            right: ${Select.MD.IconPaddingRight};
          }
        }

        &.lg {
          padding-bottom: ${LG.LabelSlot.Padding};
          margin: ${LG.InputSlot.Margin};

          .blr-input-icon {
            right: ${Select.LG.IconPaddingRight};
          }
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

      .blr-counter {
        &.sm {
          font-family: ${SM.Caption.fontFamily}, sans-serif;
          font-weight: ${SM.Caption.fontWeight};
          font-size: ${SM.Caption.fontSize};
          font-family: ${SM.Caption.fontFamily}, sans-serif;
          line-height: ${SM.Caption.lineHeight};
        }

        &.md {
          font-family: ${MD.Caption.fontFamily}, sans-serif;
          font-weight: ${MD.Caption.fontWeight};
          font-size: ${MD.Caption.fontSize};
          font-family: ${MD.Caption.fontFamily}, sans-serif;
          line-height: ${MD.Caption.lineHeight};
        }

        &.lg {
          font-family: ${LG.Caption.fontFamily}, sans-serif;
          font-weight: ${LG.Caption.fontWeight};
          font-size: ${LG.Caption.fontSize};
          font-family: ${LG.Caption.fontFamily}, sans-serif;
          line-height: ${LG.Caption.lineHeight};
        }
      }
      .blr-form-hint,
      .blr-counter {
        .hint-container {
          display: flex;
          align-items: flex-start;
          word-break: break-all;
          .label-wrapper {
            padding: 0rem 0px;
            display: flex;
            .blr-caption-text {
              color: ${Caption.Hint};
            }
          }
        }
        &.error {
          color: ${Caption.Error};
          .hint-container {
            .label-wrapper {
              .blr-caption-text {
                color: ${Caption.Error};
              }
            }
          }
        }
        &.sm {
          .hint-container {
            padding: ${SM.CaptionComponent.Padding};
            gap: ${SM.CaptionComponent.ItemSpacing};
            .icon-wrapper {
              padding: ${SM.CaptionComponent.IconWrapper.Padding};
            }
            .label-wrapper {
              padding: ${SM.CaptionComponent.CaptionLabelWrapper.Padding};
              .blr-caption-text {
                font-family: ${SM.Caption.fontFamily}, sans-serif;
                font-weight: ${SM.Caption.fontWeight};
                font-size: ${SM.Caption.fontSize};
                font-family: ${SM.Caption.fontFamily}, sans-serif;
                line-height: ${SM.Caption.lineHeight};
              }
            }
          }
        }
        &.md {
          .hint-container {
            padding: ${MD.CaptionComponent.Padding};
            gap: ${MD.CaptionComponent.ItemSpacing};
            .icon-wrapper {
              padding: ${MD.CaptionComponent.IconWrapper.Padding};
            }
            .label-wrapper {
              padding: ${MD.CaptionComponent.CaptionLabelWrapper.Padding};
              .blr-caption-text {
                font-family: ${MD.Caption.fontFamily}, sans-serif;
                font-weight: ${MD.Caption.fontWeight};
                font-size: ${MD.Caption.fontSize};
                line-height: ${MD.Caption.lineHeight};
              }
            }
          }
        }
        &.lg {
          .hint-container {
            padding: ${LG.CaptionComponent.Padding};
            gap: ${LG.CaptionComponent.ItemSpacing};
            .icon-wrapper {
              padding: ${LG.CaptionComponent.IconWrapper.Padding};
            }
            .label-wrapper {
              padding: ${LG.CaptionComponent.CaptionLabelWrapper.Padding};
              .blr-caption-text {
                font-weight: ${LG.Caption.fontWeight};
                font-size: ${LG.Caption.fontSize};
                font-family: ${LG.Caption.fontFamily}, sans-serif;
                line-height: ${LG.Caption.lineHeight};
              }
            }
          }
        }
      }
      .blr-form-label {
        display: flex;
        align-items: baseline;
        color: ${Label.Rest};
        &:focus {
          color: ${Label.Focus};
        }
        &:hover {
          color: ${Label.Hover};
        }
        &:disabled {
          color: ${Label.Disabled};
        }
        &[readonly] {
          color: ${Label.ReadOnly};
        }
        &.sm {
          padding: ${SM.LabelSlot.Padding};
          font-weight: ${SM.Label.fontWeight};
          font-size: ${SM.Label.fontSize};
          font-family: ${SM.Label.fontFamily}, sans-serif;
          line-height: ${SM.Label.lineHeight};
          gap: ${SM.FormsLabelComponent.ItemSpacing};
          color: ${Label.Rest};
        }
        &.md {
          padding: ${MD.LabelSlot.Padding};
          font-weight: ${MD.Label.fontWeight};
          font-size: ${MD.Label.fontSize};
          font-family: ${MD.Label.fontFamily}, sans-serif;
          line-height: ${MD.Label.lineHeight};
          gap: ${MD.FormsLabelComponent.ItemSpacing};
        }
        &.lg {
          padding: ${LG.LabelSlot.Padding};
          font-weight: ${LG.Label.fontWeight};
          font-size: ${LG.Label.fontSize};
          font-family: ${LG.Label.fontFamily}, sans-serif;
          line-height: ${LG.Label.lineHeight};
          color: ${Label.Rest};
          gap: ${LG.FormsLabelComponent.ItemSpacing};
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
        padding-left: ${MD.LabelSlot.Padding};
        font-weight: ${MD.LabelAppendix.fontWeight};
        font-size: ${MD.LabelAppendix.fontSize};
        font-family: ${MD.LabelAppendix.fontFamily}, sans-serif;
        line-height: ${MD.LabelAppendix.lineHeight};
        color: ${LabelAppendix.Rest};
        &.sm {
          padding-left: ${SM.LabelSlot.Padding};
          font-weight: ${SM.LabelAppendix.fontWeight};
          font-size: ${SM.LabelAppendix.fontSize};
          font-family: ${MD.LabelAppendix.fontFamily}, sans-serif;
          line-height: ${MD.LabelAppendix.lineHeight};
        }
        &.lg {
          padding-left: ${LG.LabelSlot.Padding};
          font-weight: ${LG.LabelAppendix.fontWeight};
          font-size: ${LG.LabelAppendix.fontSize};
          font-family: ${LG.LabelAppendix.fontFamily}, sans-serif;
          line-height: ${LG.LabelAppendix.lineHeight};
        }

        .error {
          color: ${Caption.Error};
        }

        .hint {
          color: ${Caption.Hint};
        }
      }

      .blr-textarea {
        &.sm {
          .label-wrapper {
            padding: ${SM.LabelSlot.Padding};
          }

          .input-wrapper {
            margin: ${SM.InputSlot.Margin};

            .textarea-input-control {
              min-height: ${TextArea.SM.MinHeight};
            }
          }

          .hint-wrapper {
            margin: ${SM.CaptionSlot.Margin};
          }
        }

        &.md {
          .label-wrapper {
            padding: ${MD.LabelSlot.Padding};
          }

          .input-wrapper {
            margin: ${MD.InputSlot.Margin};

            .textarea-input-control {
              min-height: ${TextArea.MD.MinHeight};
            }
          }

          .hint-wrapper {
            margin: ${MD.CaptionSlot.Margin};
          }
        }

        &.lg {
          .label-wrapper {
            padding: ${LG.LabelSlot.Padding};
          }

          .input-wrapper {
            margin: ${LG.InputSlot.Margin};

            .textarea-input-control {
              min-height: ${TextArea.LG.MinHeight};
            }
          }

          .hint-wrapper {
            margin: ${LG.CaptionSlot.Margin};
          }
        }
      }
    `;
  }
);
