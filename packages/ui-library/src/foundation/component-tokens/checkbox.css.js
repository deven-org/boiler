import { componentTokens } from "../_tokens-generated/index.generated";
import { css } from "nested-css-to-flat/lit-css";

const { Checkbox } = componentTokens.Forms;

export const checkboxStyles = css`
  .blr-label-checkbox {
    gap: ${Checkbox.MD.ItemSpacing};
    > input {
      height: ${Checkbox.Control.Background.Unselected.Rest};
      width: ${Checkbox.Control.Background.Unselected.Rest};
      border-color: ${Checkbox.Control.Background.Unselected.Stroke.Rest};
      border-style: ${Checkbox.Control.Unselected.Rest.style};
      border-width: ${Checkbox.Control.Unselected.Rest.width};
      border-radius: ${Checkbox.ControlBorderRadius};
      background-color: ${Checkbox.Control.Background.Unselected.Fill.Rest};
    }
    &:hover {
      > input {
        height: ${Checkbox.Control.Background.Unselected.Hover};
        width: ${Checkbox.Control.Background.Unselected.Hover};
        border-style: ${Checkbox.Control.Unselected.Hover.style};
        border-width: ${Checkbox.Control.Unselected.Hover.width};
        border-color: ${Checkbox.Control.Background.Unselected.Stroke.Hover};
        background-color: ${Checkbox.Control.Background.Unselected.Fill.Hover};
      }
    }
    &:active {
      > input {
        height: ${Checkbox.Control.Background.Unselected.Pressed};
        width: ${Checkbox.Control.Background.Unselected.Pressed};
        border-style: ${Checkbox.Control.Unselected.Pressed.style};
        border-width: ${Checkbox.Control.Unselected.Pressed.width};
        border-color: ${Checkbox.Control.Background.Unselected.Stroke.Pressed};
        background-color: ${Checkbox.Control.Background.Unselected.Fill.Pressed};
      }
    }
    &:focused {
      > input {
        height: ${Checkbox.Control.Background.Unselected.Focus};
        width: ${Checkbox.Control.Background.Unselected.Focus};
        border-style: ${Checkbox.Control.Unselected.Focus.style};
        border-width: ${Checkbox.Control.Unselected.Focus.width};
        border-color: ${Checkbox.Control.Background.Unselected.Stroke.Focus};
        background-color: ${Checkbox.Control.Background.Unselected.Fill.Focus};
      }
    }
    &:disabled {
      > input {
        height: ${Checkbox.Control.Background.Unselected.Disabled};
        width: ${Checkbox.Control.Background.Unselected.Disabled};
        border-style: ${Checkbox.Control.Unselected.Disabled.style};
        border-width: ${Checkbox.Control.Unselected.Disabled.width};
        border-color: ${Checkbox.Control.Background.Unselected.Stroke.Disabled};
        background-color: ${Checkbox.Control.Background.Unselected.Fill.Disabled};
      }
    }
    &[readonly] {
      > input {
        height: ${Checkbox.Control.Background.Unselected.ReadOnly};
        width: ${Checkbox.Control.Background.Unselected.ReadOnly};
        border-style: ${Checkbox.Control.Unselected.ReadOnly.style};
        border-width: ${Checkbox.Control.Unselected.ReadOnly.width};
        border-color: ${Checkbox.Control.Background.Unselected.Stroke.ReadOnly};
        background-color: ${Checkbox.Control.Background.Unselected.Fill.ReadOnly};
      }
    }
    &.error {
      > input {
        height: ${Checkbox.Control.Background.Unselected.Error};
        width: ${Checkbox.Control.Background.Unselected.Error};
        border-style: ${Checkbox.Control.Unselected.Error.style};
        border-width: ${Checkbox.Control.Unselected.Error.width};
        border-color: ${Checkbox.Control.Background.Unselected.Stroke.Error};
        background-color: ${Checkbox.Control.Background.Unselected.Fill.Error};
      }
  }
`;
