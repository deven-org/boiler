import { css } from "lit";
import { componentTokens, semanticTokens } from "../_tokens-generated/index.generated";

const { Caption, SM, MD, LG, LabelNextToControl } = semanticTokens.Forms;
const { Radio } = componentTokens.Forms;

export const radio = css`
  /* stylelint-disable */
  .blr-radio-group {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    &.vertical {
      flex-direction: column;
    }
  }

  .blr-radio {
    display: flex;
    align-items: center;
    > label {
      transition: all 0.25s ease 0s;
      display: flex;
      align-items: center;
      color: ${LabelNextToControl.Rest};
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
        margin: ${Radio.SM.ControlMargin};
        margin-left: ${Radio.SM.ItemSpacing};
      }
    }
    &.md {
      > label {
        font-family: ${MD.LabelNextToControl.fontFamily}, sans-serif;
        font-weight: ${MD.LabelNextToControl.fontWeight};
        font-size: ${MD.LabelNextToControl.fontSize};
        line-height: ${MD.LabelNextToControl.lineHeight};
        margin: ${Radio.MD.ControlMargin};
        margin-left: ${Radio.MD.ItemSpacing};
      }
    }
    &.lg {
      > label {
        font-family: ${LG.LabelNextToControl.fontFamily}, sans-serif;
        font-weight: ${LG.LabelNextToControl.fontWeight};
        font-size: ${LG.LabelNextToControl.fontSize};
        line-height: ${LG.LabelNextToControl.lineHeight};
        margin: ${Radio.LG.ControlMargin};
        margin-left: ${Radio.LG.ItemSpacing};
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
          &:not(:disabled) {
            &:not(:readonly) {
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
          }
        }
        &:active {
          &:not(:disabled) {
            &:not(:readonly) {
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

  /* stylelint-ensable */
`;
