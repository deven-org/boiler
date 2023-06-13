import { css, unsafeCSS } from "lit";
import { componentTokens, semanticTokens } from "../_tokens-generated/index.generated";

const { Caption, Control, SM, MD, LG, Input, LabelNextToControl } = semanticTokens.Forms;
const { Radio } = componentTokens.Forms;

export const radioInput = css`
  /* stylelint-disable */
  .blr-radio-input-group {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    &.vertical {
      flex-direction: column;
    }
  }

  .blr-radio-input {
    display: flex;
    align-items: center;
    > label {
      transition: all 0.25s ease 0s;
      display: flex;
      align-items: center;
      color: ${LabelNextToControl.Rest};
      margin: ${Radio.MD.ControlMargin};
      margin-left: ${Radio.MD.ItemSpacing};
    }
    > input {
      appearance: none;
      display: flex;
      margin: 0px;
      margin-right: ${Radio.MD.ItemSpacing};
      transition: all 0.25s ease 0s;
      border-radius: ${Radio.ControlBorderRadius};
      display: grid;
      place-content: center;
      padding: ${Radio.MD.ControlMargin};
      &::before {
        content: '';
        transition: all 0.25s ease 0s;
        border-radius: ${Radio.ControlBorderRadius};
      }
    }
    &.sm {
      > label {
        font-family: ${SM.LabelNextToControl.fontFamily}, sans-serif;
        font-weight: ${SM.LabelNextToControl.fontWeight};
        font-size: ${SM.LabelNextToControl.fontSize};
        line-height: ${SM.LabelNextToControl.lineHeight};
      }
    }
    &.md {
      > label {
        font-family: ${MD.LabelNextToControl.fontFamily}, sans-serif;
        font-weight: ${MD.LabelNextToControl.fontWeight};
        font-size: ${MD.LabelNextToControl.fontSize};
        line-height: ${MD.LabelNextToControl.lineHeight};
      }
    }
    &.lg {
      > label {
        font-family: ${LG.LabelNextToControl.fontFamily}, sans-serif;
        font-weight: ${LG.LabelNextToControl.fontWeight};
        font-size: ${LG.LabelNextToControl.fontSize};
        line-height: ${LG.LabelNextToControl.lineHeight};
      }
    }
    &:not(.error-input) {
      > input {
        background-color: ${Radio.Control.Background.Unselected.Fill.Rest};
        width: ${Radio.Control.Background.Unselected.Rest};
        height: ${Radio.Control.Background.Unselected.Rest};
        &::before {
          background-color: ${Radio.Control.Foreground.Unselected.Fill.Rest};
          width: ${Radio.Control.Foreground.Unselected.Rest};
          height: ${Radio.Control.Foreground.Unselected.Rest};
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
          &:focus {
            background-color: ${Radio.Control.Background.Unselected.Fill.Focus};
            width: ${Radio.Control.Background.Unselected.Focus};
            height: ${Radio.Control.Background.Unselected.Focus};
            outline: black solid 2px;
            outline-offset: 2px;
            &::before {
              content: '';
              background-color: ${Radio.Control.Foreground.Unselected.Fill.Focus};
              width: ${Radio.Control.Foreground.Unselected.Focus};
              height: ${Radio.Control.Foreground.Unselected.Focus};
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
          &:hover {
            background-color: ${Radio.Control.Background.Selected.Fill.Hover};
            width: ${Radio.Control.Background.Selected.Hover};
            height: ${Radio.Control.Background.Selected.Hover};
            &::before {
              content: '';
              background-color: ${Radio.Control.Foreground.Selected.Fill.Hover};
              width: ${Radio.Control.Foreground.Selected.Hover};
              height: ${Radio.Control.Foreground.Selected.Hover};
            }
          }
          &:active {
            background-color: ${Radio.Control.Background.Selected.Fill.Pressed};
            width: ${Radio.Control.Background.Selected.Pressed};
            height: ${Radio.Control.Background.Selected.Pressed};
            &::before {
              content: '';
              background-color: ${Radio.Control.Foreground.Selected.Fill.Pressed};
              width: ${Radio.Control.Foreground.Selected.Pressed};
              height: ${Radio.Control.Foreground.Selected.Pressed};
            }
          }
          &:disabled {
            background-color: ${Radio.Control.Background.Selected.Fill.Disabled};
            width: ${Radio.Control.Background.Selected.Disabled};
            height: ${Radio.Control.Background.Selected.Disabled};
            &::before {
              content: '';
              background-color: ${Radio.Control.Foreground.Selected.Fill.Disabled};
              width: ${Radio.Control.Foreground.Selected.Disabled};
              height: ${Radio.Control.Foreground.Selected.Disabled};
            }
          }
          &:readonly {
            background-color: ${Radio.Control.Background.Selected.Fill.ReadOnly};
            width: ${Radio.Control.Background.Selected.ReadOnly};
            height: ${Radio.Control.Background.Selected.ReadOnly};
            &::before {
              content: '';
              background-color: ${Radio.Control.Foreground.Selected.Fill.ReadOnly};
              width: ${Radio.Control.Foreground.Selected.ReadOnly};
              height: ${Radio.Control.Foreground.Selected.ReadOnly};
            }
          }
        }
      } 
    }
    &.error-input {
      > input { 
        background-color: ${Radio.Control.Background.Unselected.Fill.Error};
        width: ${Radio.Control.Background.Unselected.Error};
        height: ${Radio.Control.Background.Unselected.Error};
        &::before {
          background-color: ${Radio.Control.Foreground.Unselected.Fill.Error};
          width: ${Radio.Control.Foreground.Unselected.Error};
          height: ${Radio.Control.Foreground.Unselected.Error};
        }
        + label {
          color: ${LabelNextToControl.Error}
        }
      }
    }
    &.disabled {
      > input {
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
    }
    &.readonly {
      > input {
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
    }
  }
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
