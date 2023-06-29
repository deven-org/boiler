import { componentTokens } from "../_tokens-generated/index.generated";
import { semanticTokens } from "../_tokens-generated/__semantic-tokens.generated";
import { css } from "nested-css-to-flat/lit-css";

const { Checkbox } = componentTokens.Forms;
const { Forms } = semanticTokens;
// const { FocusBorder } = semanticTokens.Global;

export const checkboxStyles = css`
  .blr-label-checkbox {
    gap: ${Checkbox.MD.ItemSpacing};
    > input {
      margin: ${Checkbox.MD.ControlMargin};
    }

    &.sm {
      > input {
        margin: ${Checkbox.SM.ControlMargin};
      }
    }

    &.lg {
      > input {
        margin: ${Checkbox.LG.ControlMargin};
      }
    }

    &.error {
      > input {
        height: ${Checkbox.MD.Control.Background.Sizing.Unselected.Error};
        width: ${Checkbox.MD.Control.Background.Sizing.Unselected.Error};
        border-style: ${Checkbox.Control.Unselected.Error.style};
        border-width: ${Checkbox.Control.Unselected.Error.width};
        border-color: ${Checkbox.Control.Background.Unselected.Stroke.Error};
        border-radius: ${Checkbox.ControlBorderRadius};
        background-color: ${Checkbox.Control.Background.Unselected.Fill.Error};
      }

      &.sm {
        > input {
          height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Error};
          width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Error};
        }
      }

      &.lg {
        > input {
          height: ${Checkbox.LG.Control.Background.Sizing.Unselected.Error};
          width: ${Checkbox.LG.Control.Background.Sizing.Unselected.Error};
        }
      }

      .blr-form-label-inline {
        color: ${Forms.LabelNextToControl.Error};
      }
    }

    &:not(.error) {
      &.sm {
        > input {
          height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Rest};
          width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Rest};
        }
      }

      &.lg {
        > input {
          height: ${Checkbox.LG.Control.Background.Sizing.Unselected.Rest};
          width: ${Checkbox.LG.Control.Background.Sizing.Unselected.Rest};
        }
      }

      > input {
        position: relative;
        height: ${Checkbox.MD.Control.Background.Sizing.Unselected.Rest};
        width: ${Checkbox.MD.Control.Background.Sizing.Unselected.Rest};
        border-color: ${Checkbox.Control.Background.Unselected.Stroke.Rest};
        border-style: ${Checkbox.Control.Unselected.Rest.style};
        border-width: ${Checkbox.Control.Unselected.Rest.width};
        border-radius: ${Checkbox.ControlBorderRadius};
        background-color: ${Checkbox.Control.Background.Unselected.Fill.Rest};

        &:hover {
          border-style: ${Checkbox.Control.Unselected.Hover.style};
          border-width: ${Checkbox.Control.Unselected.Hover.width};
          border-color: ${Checkbox.Control.Background.Unselected.Stroke.Hover};
          background-color: ${Checkbox.Control.Background.Unselected.Fill.Hover};
        }

        &:checked,
        &:indeterminate {
          border-color: ${Checkbox.Control.Background.Selected.Stroke.Rest};
          border-style: ${Checkbox.Control.Unselected.Rest.style};
          border-width: ${Checkbox.Control.Unselected.Rest.width};
          background-color: ${Checkbox.Control.Background.Selected.Fill.Rest};

          &:hover {
            border-style: ${Checkbox.Control.Unselected.Hover.style};
            border-width: ${Checkbox.Control.Unselected.Hover.width};
            border-color: ${Checkbox.Control.Background.Unselected.Stroke.Hover};
            background-color: ${Checkbox.Control.Background.Selected.Fill.Hover};
          }

          &:active {
            border-style: ${Checkbox.Control.Unselected.Pressed.style};
            border-width: ${Checkbox.Control.Unselected.Pressed.width};
            border-color: ${Checkbox.Control.Background.Unselected.Stroke.Pressed};
            background-color: ${Checkbox.Control.Background.Selected.Fill.Pressed};
          }

          &[disabled] {
            border-width: ${Checkbox.Control.Unselected.Disabled.width};
            border-color: ${Checkbox.Control.Background.Selected.Stroke.Disabled};
          }

          &[readonly] {
            background-color: ${Checkbox.Control.Background.Selected.Fill.ReadOnly};
            border-color: ${Checkbox.Control.Background.Selected.Stroke.ReadOnly};
            border-style: ${Checkbox.Control.Unselected.ReadOnly.style};
            border-width: ${Checkbox.Control.Unselected.ReadOnly.width};
          }
        }

        &:indeterminate {
          &::after {
            content: "";
            display: block;
            width: 10px;
            height: 10px;
            border-style: solid;
            border-color: white;
            border-width: 2px 0 0;
            position: absolute;
            top: 7px;
            left: 3px;
          }
        }

        &:checked {
          &::after {
            content: "";
            display: block;
            position: absolute;
            left: 5px;
            top: 0;
            width: 4px;
            height: 10px;
            border: solid white;
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        }

        &:focus {
          outline: 2px solid black;
        }

        &[readonly] {
          border-style: ${Checkbox.Control.Unselected.ReadOnly.style};
          border-width: ${Checkbox.Control.Unselected.ReadOnly.width};
          border-color: ${Checkbox.Control.Background.Unselected.Stroke.ReadOnly};
          background-color: ${Checkbox.Control.Background.Unselected.Fill.ReadOnly};
        }

        &[disabled] {
          border-style: ${Checkbox.Control.Unselected.Disabled.style};
          border-width: ${Checkbox.Control.Unselected.Disabled.width};
          border-color: ${Checkbox.Control.Background.Unselected.Stroke.Disabled};
          background-color: ${Checkbox.Control.Background.Unselected.Fill.Disabled};

          + label {
            color: ${Forms.LabelNextToControl.Disabled};
          }
        }

        &:active {
          border-style: ${Checkbox.Control.Unselected.Pressed.style};
          border-width: ${Checkbox.Control.Unselected.Pressed.width};
          border-color: ${Checkbox.Control.Background.Unselected.Stroke.Pressed};
          background-color: ${Checkbox.Control.Background.Unselected.Fill.Pressed};
        }
      }
    }
  }
`;

// outline-style: ${FocusBorder.style};
// outline-width: ${FocusBorder.width};
// outline-color: ${FocusBorder.color};
