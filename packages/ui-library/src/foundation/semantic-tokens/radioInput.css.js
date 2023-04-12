import { css, unsafeCSS, unsafeCSS } from "lit";
import { semanticTokens } from "../_tokens-generated/index.generated";

const { SM, MD, LG, LabelNextToControl } = semanticTokens.Forms;
const { Radio } = componentTokens.Forms;

export const radio = css`
  .blr-radio-group {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    border-width: ${Input.Default.Rest.width};
    border-style: ${Input.Default.Rest.style};
    border-color: ${Input.Default.Rest.color};
    border-radius: ${InputBorderRadius};
  }

  .blr-radio-input-group.vertical {
    flex-direction: column;
  }

  .blr-radio-input input {
    display: none;
  }

  .blr-radio-input label {
    display: flex;
    align-items: flex-start;
    max-width: 120px;
    > label {
      transition: all 0.25s ease 0s;
      display: flex;
      align-items: center;
      color: ${LabelNextToControl.Rest};
      max-width: 70px;
    }
    > input {
      appearance: none;
      display: flex;
      margin: 0px;
      transition: all 0.25s ease 0s;
      border-radius: ${Radio.ControlBorderRadius};
      display: grid;
      place-content: center;
      &::before {
        content: '';
        transition: all 0.25s ease 0s;
        border-radius: ${Radio.ControlBorderRadius};
      }
    }
    &.sm {
      > input {
        margin: ${Radio.SM.ControlMargin};
      }
      > label {
        font-family: ${SM.LabelNextToControl.fontFamily}, sans-serif;
        font-weight: ${SM.LabelNextToControl.fontWeight};
        font-size: ${SM.LabelNextToControl.fontSize};
        line-height: ${SM.LabelNextToControl.lineHeight};
        margin: ${Radio.SM.ItemSpacing};
      }
    }
    &.md {
      > input {
        margin: ${Radio.MD.ControlMargin};
      }
      > label {
        font-family: ${MD.LabelNextToControl.fontFamily}, sans-serif;
        font-weight: ${MD.LabelNextToControl.fontWeight};
        font-size: ${MD.LabelNextToControl.fontSize};
        line-height: ${MD.LabelNextToControl.lineHeight};
        margin-left: ${Radio.SM.ItemSpacing};
      }
    }
    &.lg {
      > input {
        margin: ${Radio.LG.ControlMargin};
      }
      > label {
        font-family: ${LG.LabelNextToControl.fontFamily}, sans-serif;
        font-weight: ${LG.LabelNextToControl.fontWeight};
        font-size: ${LG.LabelNextToControl.fontSize};
        line-height: ${LG.LabelNextToControl.lineHeight};
        margin-left: ${Radio.LG.ItemSpacing};
      }
    }
    &:not(.error-input) {
      > input {
        background-color: ${Radio.Control.Background.Unselected.Fill.Rest};
        width: ${Radio.Control.Background.Unselected.Rest};
        min-width: ${Radio.Control.Background.Unselected.Rest};
        height: ${Radio.Control.Background.Unselected.Rest};
        min-height: ${Radio.Control.Background.Unselected.Rest};
        &::before {
          background-color: ${Radio.Control.Foreground.Unselected.Fill.Rest};
          width: ${Radio.Control.Foreground.Unselected.Rest};
          height: ${Radio.Control.Foreground.Unselected.Rest};
        }
        &:hover {
          &:not(:disabled) {
            &:not(:[readonly]) {
              background-color: ${Radio.Control.Background.Unselected.Fill.Hover};
              width: ${Radio.Control.Background.Unselected.Hover};
              height: ${Radio.Control.Background.Unselected.Hover};
              &::before {
                content: "";
                background-color: ${Radio.Control.Foreground.Unselected.Fill.Hover};
                width: ${Radio.Control.Foreground.Unselected.Hover};
                height: ${Radio.Control.Foreground.Unselected.Hover};
              }
              + label {
                color: ${LabelNextToControl.Hover};
              }
            }
          }
        }
        &:active {
          &:not(:disabled) {
            &:not(:[readonly]) {
              background-color: ${Radio.Control.Background.Unselected.Fill.Pressed};
              width: ${Radio.Control.Background.Unselected.Pressed};
              height: ${Radio.Control.Background.Unselected.Pressed};
              &::before {
                content: "";
                background-color: ${Radio.Control.Foreground.Unselected.Fill.Pressed};
                width: ${Radio.Control.Foreground.Unselected.Pressed};
                height: ${Radio.Control.Foreground.Unselected.Pressed};
              }
              + label {
                color: ${LabelNextToControl.Pressed};
              }
            }
          }
        }
        &:focus {
          &:not(:disabled) {
            &:not(:readonly) {
              background-color: ${Radio.Control.Background.Unselected.Fill.Focus};
              width: ${Radio.Control.Background.Unselected.Focus};
              height: ${Radio.Control.Background.Unselected.Focus};
              outline: black solid 2px;
              outline-offset: 2px;
              outline-color: ${Radio.Control.Background.Unselected.Stroke};
              &::before {
                content: "";
                background-color: ${Radio.Control.Foreground.Unselected.Fill.Focus};
                width: ${Radio.Control.Foreground.Unselected.Focus};
                height: ${Radio.Control.Foreground.Unselected.Focus};
              }
              + label {
                color: ${LabelNextToControl.Focus};
              }
            }
          }
        }
      }
    }
  }

  .blr-radio-input.readonly label {
    &::before {
      box-shadow: inset 0 0 0 0.125em ${Control.Background.ReadOnly};
    }
  }

  .blr-input:disabled {
    border-width: ${Input.Default.Disabled.width};
    border-style: ${Input.Default.Disabled.style};
    border-color: ${Input.Default.Disabled.color};
  }

  .blr-input:focus {
    border-width: ${Input.Default.Focus.width};
    border-style: ${Input.Default.Focus.style};
    border-color: ${Input.Default.Focus.color};
  }

  .blr-input.error-input {
    border-width: ${Input.Error.Rest.width};
    border-style: ${Input.Error.Rest.style};
    border-color: ${Input.Error.Rest.color};
  }

  .blr-input.error-input:hover {
    border-width: ${Input.Error.Hover.width};
    border-style: ${Input.Error.Hover.style};
    border-color: ${Input.Error.Hover.color};
  }

  .blr-input.error-input:focus {
    border-width: ${Input.Error.Focus.width};
    border-style: ${Input.Error.Focus.style};
    border-color: ${Input.Error.Focus.color};
  }

  .blr-form-hint {
    display: flex;
    flex-direction: row;
  }

  .blr-form-hint.sm {
    padding: ${SM.CaptionComponent.Padding};
    font-weight: ${SM.Caption.fontWeight};
    font-size: ${SM.Caption.fontSize};
    line-height: ${SM.Caption.lineHeight};
    item-spacing: ${SM.CaptionComponent.ItemSpacing};
    margin: ${SM.CaptionSlot.Margin};
  }

  .blr-form-hint.md {
    padding: ${MD.CaptionComponent.Padding};
    font-weight: ${MD.Caption.fontWeight};
    font-size: ${MD.Caption.fontSize};
    line-height: ${MD.Caption.lineHeight};
    item-spacing: ${MD.CaptionComponent.ItemSpacing};
    margin: ${MD.CaptionSlot.Margin};
  }

  .blr-form-hint.lg {
    padding: ${LG.CaptionComponent.Padding};
    font-weight: ${LG.Caption.fontWeight};
    font-size: ${LG.Caption.fontSize};
    line-height: ${LG.Caption.lineHeight};
    item-spacing: ${LG.CaptionComponent.ItemSpacing};
    margin: ${LG.CaptionSlot.Margin};
  }
}
`;
