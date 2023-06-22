import { componentTokens } from "../_tokens-generated/index.generated";
import { semanticTokens } from "../_tokens-generated/__semantic-tokens.generated";
import { css } from "nested-css-to-flat/lit-css";

const { Checkbox } = componentTokens.Forms;
const { Forms } = semanticTokens;
// const { FocusBorder } = semanticTokens.Global;

export const checkboxStyles = css`
  .blr-label-checkbox {
    gap: ${Checkbox.MD.ItemSpacing};

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

      .blr-form-label-inline {
        color: ${Forms.LabelNextToControl.Error};
      }
    }

    &:not(.error) {
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
          height: ${Checkbox.Control.Background.Unselected.Hover};
          width: ${Checkbox.Control.Background.Unselected.Hover};
          border-style: ${Checkbox.Control.Unselected.Hover.style};
          border-width: ${Checkbox.Control.Unselected.Hover.width};
          border-color: ${Checkbox.Control.Background.Unselected.Stroke.Hover};
          background-color: ${Checkbox.Control.Background.Unselected.Fill.Hover};
        }

        &:checked,
        &:indeterminate {
          height: ${Checkbox.MD.Control.Background.Sizing.Selected.Rest};
          width: ${Checkbox.MD.Control.Background.Sizing.Selected.Rest};
          border-color: ${Checkbox.Control.Background.Selected.Stroke.Rest};
          border-style: ${Checkbox.Control.Unselected.Rest.style};
          border-width: ${Checkbox.Control.Unselected.Rest.width};
          background-color: ${Checkbox.Control.Background.Selected.Fill.Rest};

          &:hover {
            height: ${Checkbox.MD.Control.Background.Sizing.Selected.Hover};
            width: ${Checkbox.MD.Control.Background.Sizing.Selected.Hover};
            border-style: ${Checkbox.Control.Unselected.Hover.style};
            border-width: ${Checkbox.Control.Unselected.Hover.width};
            border-color: ${Checkbox.Control.Background.Unselected.Stroke.Hover};
            background-color: ${Checkbox.Control.Background.Selected.Fill.Hover};
          }

          &:active {
            height: ${Checkbox.MD.Control.Background.Sizing.Selected.Pressed};
            width: ${Checkbox.MD.Control.Background.Sizing.Selected.Pressed};
            border-style: ${Checkbox.Control.Unselected.Pressed.style};
            border-width: ${Checkbox.Control.Unselected.Pressed.width};
            border-color: ${Checkbox.Control.Background.Unselected.Stroke.Pressed};
            background-color: ${Checkbox.Control.Background.Selected.Fill.Pressed};
          }

          &[disabled] {
            background-color: ${Checkbox.Control.Background.Selected.Fill.Disabled};
            border-style: ${Checkbox.Control.Unselected.Disabled.style};
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
          height: ${Checkbox.MD.Control.Background.Sizing.Unselected.Focus};
          width: ${Checkbox.MD.Control.Background.Sizing.Unselected.Focus};
          outline: 2px solid black;
        }

        &[readonly] {
          height: ${Checkbox.MD.Control.Background.Sizing.Unselected.ReadOnly};
          width: ${Checkbox.MD.Control.Background.Sizing.Unselected.ReadOnly};
          border-style: ${Checkbox.Control.Unselected.ReadOnly.style};
          border-width: ${Checkbox.Control.Unselected.ReadOnly.width};
          border-color: ${Checkbox.Control.Background.Unselected.Stroke.ReadOnly};
          background-color: ${Checkbox.Control.Background.Unselected.Fill.ReadOnly};
        }

        &[disabled] {
          height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Disabled};
          width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Disabled};
          border-style: ${Checkbox.Control.Unselected.Disabled.style};
          border-width: ${Checkbox.Control.Unselected.Disabled.width};
          border-color: ${Checkbox.Control.Background.Unselected.Stroke.Disabled};
          background-color: ${Checkbox.Control.Background.Unselected.Fill.Disabled};

          + label {
            color: ${Forms.LabelNextToControl.Disabled};
          }
        }

        &:active {
          height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Pressed};
          width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Pressed};
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
