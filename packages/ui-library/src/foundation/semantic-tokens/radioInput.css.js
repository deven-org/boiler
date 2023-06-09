import { css, unsafeCSS } from "lit";
import { componentTokens, semanticTokens } from "../_tokens-generated/index.generated";

const { Caption, Control, SM, MD, LG, Input, LabelNextToControl } = semanticTokens.Forms;
const { Radio } = componentTokens.Forms;

const sizes = {
  radioinput: {
    sm: {
      width: "50px",
      height: "100px",
    },
    md: {
      width: "100px",
      height: "200px",
    },
    lg: {
      width: "200px",
      height: "300px",
    },
  },
};

export const radioInput = css`
  /* stylelint-disable */
  .blr-radio-input-group {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    border-width: ${Input.Default.Rest.width};
    border-style: ${Input.Default.Rest.style};
    border-color: ${Input.Default.Rest.color};
    .blr-radio-input {
      display: flex;
      + label {
        transition: all 0.25s ease 0s;
        display: flex;
        align-items: center;
        font-family: ${MD.LabelNextToControl.fontFamily};
        font-weight: ${MD.LabelNextToControl.fontWeight};
        line-height: ${MD.LabelNextToControl.lineHeight};
        font-size: ${MD.LabelNextToControl.fontSize};
        color: ${LabelNextToControl.Rest}
        margin: ${Radio.MD.ControlMargin}
      }
      > input {
        appearance: none;
        display: flex;
        background-color: ${Radio.Control.Background.Unselected.Fill.Rest};
        width: ${Radio.Control.Background.Unselected.Rest};
        height: ${Radio.Control.Background.Unselected.Rest};
        margin-right: ${Radio.SM.ItemSpacing};
        transition: all 0.25s ease 0s;
        border-radius: ${Radio.ControlBorderRadius};
        display: grid;
        place-content: center;
        padding: ${Radio.SM.ControlMargin};
        &::before {
          content: '';
          background-color: ${Radio.Control.Foreground.Unselected.Fill.Rest};
          width: ${Radio.Control.Foreground.Unselected.Rest};
          height: ${Radio.Control.Foreground.Unselected.Rest};
          border-radius: ${Radio.ControlBorderRadius};
        }
        &:hover {
          background-color: ${Radio.Control.Background.Unselected.Fill.Hover};
          width: ${Radio.Control.Background.Unselected.Hover};
          height: ${Radio.Control.Background.Unselected.Hover};
          &::before {
            content: '';
            background-color: ${Radio.Control.Foreground.Unselected.Fill.Hover};
            width: ${Radio.Control.Foreground.Unselected.Hover};
            height: ${Radio.Control.Foreground.Unselected.Hover};
          }
          + label {
            color: ${LabelNextToControl.Hover}
          }
        }
        &:active {
          background-color: ${Radio.Control.Background.Unselected.Fill.Pressed};
          width: ${Radio.Control.Background.Unselected.Pressed};
          height: ${Radio.Control.Background.Unselected.Pressed};
          &::before {
            content: '';
            background-color: ${Radio.Control.Foreground.Unselected.Fill.Pressed};
            width: ${Radio.Control.Foreground.Unselected.Pressed};
            height: ${Radio.Control.Foreground.Unselected.Pressed};
          }
          + label {
            color: ${LabelNextToControl.Pressed}
          }
        }
        &[readonly] {
          background-color: ${Radio.Control.Background.Unselected.Fill.ReadOnly};
          width: ${Radio.Control.Background.Unselected.ReadOnly};
          height: ${Radio.Control.Background.Unselected.ReadOnly};
          &::before {
            content: '';
            background-color: ${Radio.Control.Foreground.Unselected.Fill.ReadOnly};
            width: ${Radio.Control.Foreground.Unselected.ReadOnly};
            height: ${Radio.Control.Foreground.Unselected.ReadOnly};
          }
          + label {
            color: ${LabelNextToControl.ReadOnly}
          }
        }
        &:disabled {
          background-color: ${Radio.Control.Background.Unselected.Fill.Disabled};
          width: ${Radio.Control.Background.Unselected.Disabled};
          height: ${Radio.Control.Background.Unselected.Disabled};
          &::before {
            content: '';
            background-color: ${Radio.Control.Foreground.Unselected.Fill.Disabled};
            width: ${Radio.Control.Foreground.Unselected.Disabled};
            height: ${Radio.Control.Foreground.Unselected.Disabled};
          }
          + label {
            color: ${LabelNextToControl.Disabled}
          }
        }
        &:focus {
          background-color: ${Radio.Control.Background.Unselected.Fill.Focus};
          width: ${Radio.Control.Background.Unselected.Focus};
          height: ${Radio.Control.Background.Unselected.Focus};
          &::before {
            content: '';
            background-color: ${Radio.Control.Foreground.Unselected.Fill.Focus};
            width: ${Radio.Control.Foreground.Unselected.Focus};
            height: ${Radio.Control.Foreground.Unselected.Focus};
            outline: black solid 2px;
            outline-offset: 2px;
          }
          + label {
            color: ${LabelNextToControl.Focus}
          }
        }
        &:checked {
          background-color: ${Radio.Control.Background.Selected.Fill.Rest};
          &::before {
            content: '';
            background-color: ${Radio.Control.Foreground.Selected.Fill.Rest};
            width: ${Radio.Control.Foreground.Selected.Rest};
            height: ${Radio.Control.Foreground.Selected.Rest};
          }
        }
        &.error-input {

        }
      }
    }
  }

  .blr-radio-input-group.vertical {
    flex-direction: column;
  }

  .blr-radio-input.sm {
    min-width: ${unsafeCSS(sizes.radioinput.sm.width)};
    font-family: ${SM.UserInput.fontFamily}, sans-serif;
    font-weight: ${SM.UserInput.fontWeight};
    font-size: ${SM.UserInput.fontSize};
    padding: ${SM.InputField.Padding};
  }

  .blr-radio-input.md {
    min-width: ${unsafeCSS(sizes.radioinput.md.width)};
    font-family: ${MD.UserInput.fontFamily}, sans-serif;
    font-weight: ${MD.UserInput.fontWeight};
    font-size: ${MD.UserInput.fontSize};
    padding: ${MD.InputField.Padding};
  }

  .blr-radio-input.lg {
    min-width: ${unsafeCSS(sizes.radioinput.lg.width)};
    font-family: ${LG.UserInput.fontFamily}, sans-serif;
    font-weight: ${LG.UserInput.fontWeight};
    font-size: ${LG.UserInput.fontSize};
    padding: ${LG.InputField.Padding};
  }


  .blr-radio-input:active label {
    &::before {
      box-shadow: inset 0 0 0 0.125em black;
    }
  }

  .blr-radio-input:focus label {
    &::before {
      box-shadow: inset 0 0 0 0.125em black;
    }
  }

  .blr-radio-input.readonly label {
    &::before {
      box-shadow: inset 0 0 0 0.125em black;
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

  .error {
    color: ${Caption.Error};
  }

  .hint {
    color: ${Caption.Hint};
  }
  /* stylelint-ensable */
`;
