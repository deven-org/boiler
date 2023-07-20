import { componentTokens, semanticTokens } from "../_tokens-generated/index.generated";
import { css } from "nested-css-to-flat/lit-css";

const { Checkbox } = componentTokens.Forms;
const { SM, MD, LG, LabelNextToControl } = semanticTokens.Forms;

export const checkbox = css`
  .blr-label-checkbox {
    display: flex;
    gap: ${Checkbox.SM.MainContainer.ItemSpacing};
    transition: all 0.25s ease 0s;
    .blr-form-label-inline {
      color: ${LabelNextToControl.Rest};
    }
    .input-control {
      outline-offset: 2px;
      appearance: none;
      transition: all 0.25s ease 0s;
      border-radius: ${Checkbox.ControlBorderRadius};
      background-color: ${Checkbox.Control.Background.Unselected.Fill.Rest};
      border: ${Checkbox.Control.Unselected.Rest.width} ${Checkbox.Control.Unselected.Rest.style} ${Checkbox.Control.Background.Unselected.Stroke.Rest};
    }
    .label-wrapper {
      display: flex;
      flex-wrap: wrap;
      .hint-wrapper, .error-wrapper {
        flex-basis: 100%;
      }
    }
    &.disabled {
      cursor: not-allowed;
      .blr-form-label-inline {
        color: ${LabelNextToControl.Disabled};
        cursor: not-allowed;
      }
    }
    &.sm {
      .input-control {
        width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Rest};
        min-width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Rest};
        height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Rest};
        min-height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Rest};
      }
      .label-wrapper {
        padding-top: ${Checkbox.SM.ContentCol.PaddingTop};
        gap: ${Checkbox.SM.ContentCol.ItemSpacing};
        .blr-form-label-inline {
          font-family: ${SM.LabelNextToControl.fontFamily}, 'sans-serif';
          font-weight: ${SM.LabelNextToControl.fontWeight};
          lineHeight: ${SM.LabelNextToControl.lineHeight};
          font-size: ${SM.LabelNextToControl.fontSize};
        }
      }
      .input-control {
        &:checked {
          width: ${Checkbox.SM.Control.Background.Sizing.Selected.Rest};
          min-width: ${Checkbox.SM.Control.Background.Sizing.Selected.Rest};
          height: ${Checkbox.SM.Control.Background.Sizing.Selected.Rest};
          min-height: ${Checkbox.SM.Control.Background.Sizing.Selected.Rest};
          &:after {
            width: ${Checkbox.SM.Control.Background.Sizing.Selected.Rest};
            height: ${Checkbox.SM.Control.Background.Sizing.Selected.Rest};
          }
          &:hover {
            width: ${Checkbox.SM.Control.Background.Sizing.Selected.Hover};
            height: ${Checkbox.SM.Control.Background.Sizing.Selected.Hover};
          }
          &:disabled {
            width: ${Checkbox.SM.Control.Background.Sizing.Selected.Disabled};
            height: ${Checkbox.SM.Control.Background.Sizing.Selected.Disabled};
          }
        }
      }
    }
    &.md {
      .input-control {
        width: ${Checkbox.MD.Control.Background.Sizing.Unselected.Rest};
        min-width: ${Checkbox.MD.Control.Background.Sizing.Unselected.Rest};
        height: ${Checkbox.MD.Control.Background.Sizing.Unselected.Rest};
        min-height: ${Checkbox.MD.Control.Background.Sizing.Unselected.Rest};
      }
      .label-wrapper {
        padding-top: ${Checkbox.MD.ContentCol.PaddingTop};
        gap: ${Checkbox.MD.ContentCol.ItemSpacing};
        .blr-form-label-inline {
          font-family: ${MD.LabelNextToControl.fontFamily}, 'sans-serif';
          font-weight: ${MD.LabelNextToControl.fontWeight};
          lineHeight: ${MD.LabelNextToControl.lineHeight};
          font-size: ${MD.LabelNextToControl.fontSize};
        }
      }
      .input-control {
        &:checked {
          width: ${Checkbox.MD.Control.Background.Sizing.Selected.Rest};
          min-width: ${Checkbox.MD.Control.Background.Sizing.Selected.Rest};
          height: ${Checkbox.MD.Control.Background.Sizing.Selected.Rest};
          min-height: ${Checkbox.MD.Control.Background.Sizing.Selected.Rest};
          &:after {
            width: ${Checkbox.MD.Control.Background.Sizing.Selected.Rest};
            height: ${Checkbox.MD.Control.Background.Sizing.Selected.Rest};
          }
          &:hover {
            width: ${Checkbox.MD.Control.Background.Sizing.Selected.Hover};
            height: ${Checkbox.MD.Control.Background.Sizing.Selected.Hover};
          }
          &:disabled {
            width: ${Checkbox.MD.Control.Background.Sizing.Selected.Disabled};
            height: ${Checkbox.MD.Control.Background.Sizing.Selected.Disabled};
          }
        }
      }
    }
    &.lg {
      .input-control {
        width: ${Checkbox.LG.Control.Background.Sizing.Unselected.Rest};
        min-width: ${Checkbox.LG.Control.Background.Sizing.Unselected.Rest};
        height: ${Checkbox.LG.Control.Background.Sizing.Unselected.Rest};
        min-height: ${Checkbox.LG.Control.Background.Sizing.Unselected.Rest};
      }
      .label-wrapper {
        padding-top: ${Checkbox.LG.ContentCol.PaddingTop};
        gap: ${Checkbox.LG.ContentCol.ItemSpacing};
        .blr-form-label-inline {
          font-family: ${LG.LabelNextToControl.fontFamily}, 'sans-serif';
          font-weight: ${LG.LabelNextToControl.fontWeight};
          lineHeight: ${LG.LabelNextToControl.lineHeight};
          font-size: ${LG.LabelNextToControl.fontSize};
        }
      }
      .input-control {
        &:checked {
          width: ${Checkbox.LG.Control.Background.Sizing.Selected.Rest};
          min-width: ${Checkbox.LG.Control.Background.Sizing.Selected.Rest};
          height: ${Checkbox.LG.Control.Background.Sizing.Selected.Rest};
          min-height: ${Checkbox.LG.Control.Background.Sizing.Selected.Rest};
          &:after {
            width: ${Checkbox.LG.Control.Background.Sizing.Selected.Rest};
            height: ${Checkbox.LG.Control.Background.Sizing.Selected.Rest};
          }
          &:hover {
            width: ${Checkbox.LG.Control.Background.Sizing.Selected.Hover};
            height: ${Checkbox.LG.Control.Background.Sizing.Selected.Hover};
          }
          &:disabled {
            width: ${Checkbox.LG.Control.Background.Sizing.Selected.Disabled};
            height: ${Checkbox.LG.Control.Background.Sizing.Selected.Disabled};
          }
        }
      }
    }
  }
    &:not(.error) {
      .input-control {
        &:disabled {
          cursor: not-allowed;
          background-color: ${Checkbox.Control.Background.Unselected.Fill.Disabled};
          border-color: ${Checkbox.Control.Background.Unselected.Stroke.Disabled};
          width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Disabled};
          height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Disabled};
        }
        &:hover {
          &:(:disabled [readonly]) {
            background-color: ${Checkbox.Control.Background.Unselected.Fill.Hover};
            border-color: ${Checkbox.Control.Background.Unselected.Stroke.Hover};
            width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Hover};
            height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Hover};
          }
        }
        &:active {
          &:not(:disabled, [readonly]) {
            background-color: ${Checkbox.Control.Background.Unselected.Fill.Pressed};
            border-color: ${Checkbox.Control.Background.Unselected.Stroke.Pressed};
            width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Pressed};
            height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Pressed};
          }
        }
        &:focus {
          background-color: ${Checkbox.Control.Background.Unselected.Fill.Focus};
          border-color: ${Checkbox.Control.Background.Unselected.Stroke.Focus};
          width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Focus};
          height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Focus};
          outline: 2px solid black;
        }
        &[readonly] {
          &:not(.checked) {
          background-color: ${Checkbox.Control.Background.Unselected.Fill.ReadOnly};
          border-color: ${Checkbox.Control.Background.Unselected.Stroke.ReadOnly};
          width: ${Checkbox.SM.Control.Background.Sizing.Unselected.ReadOnly};
          height: ${Checkbox.SM.Control.Background.Sizing.Unselected.ReadOnly};
          }
        }
        &:checked {
          background-color: ${Checkbox.Control.Background.Selected.Fill.Rest};
          &:disabled {
            background-color: ${Checkbox.Control.Background.Selected.Fill.Disabled};
            border-color: ${Checkbox.Control.Background.Selected.Stroke.Disabled};
            width: ${Checkbox.SM.Control.Background.Sizing.Selected.Disabled};
            min-width: ${Checkbox.SM.Control.Background.Sizing.Selected.Disabled};
            height: ${Checkbox.SM.Control.Background.Sizing.Selected.Disabled};
            min-height: ${Checkbox.SM.Control.Background.Sizing.Selected.Disabled};
          }
          &:hover {
            &:not(:disabled, [readonly]) {
              background-color: ${Checkbox.Control.Background.Selected.Fill.Hover};
              border-color: ${Checkbox.Control.Background.Selected.Stroke.Hover};
            }
          }
          &:after {
            content: "";
            margin-right: 1rem;
            float: left;
            transition: 0.15s all ease-out; 
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"%3E%3Cpath d="M3.35834 8.9759L5.39724 10.9618C5.65804 11.2159 6.07374 11.2159 6.33454 10.9618L12.7617 4.70166" stroke="white" stroke-width="0.671667" stroke-linecap="round" stroke-linejoin="round" /%3E%3C/svg%3E');
          }
          &:hover {
            &:not(:disabled, [readonly]) {
              background-color: ${Checkbox.Control.Background.Selected.Fill.Hover};
              border-color: ${Checkbox.Control.Background.Selected.Stroke.Hover};
              width: ${Checkbox.SM.Control.Background.Sizing.Selected.Hover};
              min-width: ${Checkbox.SM.Control.Background.Sizing.Selected.Hover};
              height: ${Checkbox.SM.Control.Background.Sizing.Selected.Hover};
              min-height: ${Checkbox.SM.Control.Background.Sizing.Selected.Hover};
            }
          }
          &:active {
            &:not(:disabled, [readonly]) {
              background-color: ${Checkbox.Control.Background.Selected.Fill.Pressed};
              border-color: ${Checkbox.Control.Background.Selected.Stroke.Pressed};
              width: ${Checkbox.SM.Control.Background.Sizing.Selected.Pressed};
              min-width: ${Checkbox.SM.Control.Background.Sizing.Selected.Pressed};
              height: ${Checkbox.SM.Control.Background.Sizing.Selected.Pressed};
              min-height: ${Checkbox.SM.Control.Background.Sizing.Selected.Pressed};
            }
          }
          &:focus {
            background-color: ${Checkbox.Control.Background.Selected.Fill.Focus};
            border-color: ${Checkbox.Control.Background.Selected.Stroke.Focus};
            width: ${Checkbox.SM.Control.Background.Sizing.Selected.Focus};
            min-width: ${Checkbox.SM.Control.Background.Sizing.Selected.Focus};
            height: ${Checkbox.SM.Control.Background.Sizing.Selected.Focus};
            min-height: ${Checkbox.SM.Control.Background.Sizing.Selected.Focus};
            outline: 2px solid black;
          }
          &:[readonly] {
            background-color: ${Checkbox.Control.Background.Selected.Fill.ReadOnly};
            border-color: ${Checkbox.Control.Background.Selected.Stroke.ReadOnly};
            width: ${Checkbox.SM.Control.Background.Sizing.Selected.ReadOnly};
            min-width: ${Checkbox.SM.Control.Background.Sizing.Selected.ReadOnly};
            height: ${Checkbox.SM.Control.Background.Sizing.Selected.ReadOnly};
            min-height: ${Checkbox.SM.Control.Background.Sizing.Selected.ReadOnly};
          }
        }
      }
    }

    &.error {
      &.sm {
        .input-control {
          width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Error};
          height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Error};
        }
      }
      &.md {
        .input-control {
          width: ${Checkbox.MD.Control.Background.Sizing.Unselected.Error};
          height: ${Checkbox.MD.Control.Background.Sizing.Unselected.Error};
        }
      }
      &.lg {
        .input-control {
          width: ${Checkbox.LG.Control.Background.Sizing.Unselected.Error};
          height: ${Checkbox.LG.Control.Background.Sizing.Unselected.Error};
        }
      }
      .input-control {
        background-color: ${Checkbox.Control.Background.Unselected.Fill.Error};
        border-color: ${Checkbox.Control.Background.Unselected.Stroke.Error};
      }
    }

      &.lg {
        > input {
          width: ${Checkbox.LG.Control.Background.Sizing.Unselected.Rest};
          min-width: ${Checkbox.LG.Control.Background.Sizing.Unselected.Rest};
          height: ${Checkbox.LG.Control.Background.Sizing.Unselected.Rest};
          min-height: ${Checkbox.MD.Control.Background.Sizing.Unselected.Rest};
          &:hover {
            &:not(.disabled, .readonly) {
              background-color: ${Checkbox.Control.Background.Unselected.Fill.Hover};
              border-color: ${Checkbox.Control.Background.Unselected.Stroke.Hover};
              width: ${Checkbox.LG.Control.Background.Sizing.Unselected.Hover};
              min-width: ${Checkbox.LG.Control.Background.Sizing.Unselected.Hover};
              height: ${Checkbox.LG.Control.Background.Sizing.Unselected.Hover};
              min-height: ${Checkbox.LG.Control.Background.Sizing.Unselected.Hover};

              + label {

              }
            }
          }
          &:active {
            &:not(.disabled, .readonly) {
              background-color: ${Checkbox.Control.Background.Unselected.Fill.Pressed};
              border-color: ${Checkbox.Control.Background.Unselected.Stroke.Pressed};
              width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Pressed};
              min-width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Pressed};
              height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Pressed};
              min-height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Pressed};

              + label {

              }
            }
          }
          &:focus {
            &:not(.disabled, .readonly) {
              background-color: ${Checkbox.Control.Background.Unselected.Fill.Focus};
              border-color: ${Checkbox.Control.Background.Unselected.Stroke.Focus};
              width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Focus};
              min-width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Focus};
              height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Focus};
              min-height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Focus};

              + label {

              }
            }
          }
        }
      }

      > input {
        position: relative;

        &:hover {

        }

        &:checked,
        &:indeterminate {


          &:hover {

          }

          &:active {

          }

          &[disabled] {

          }

          &[readonly] {

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
            display: block;
            position: absolute;
            width: 16px;
            height: 16px;
          }
        }

        &:focus {
          outline: 2px solid black;
        }

        &[readonly] {

        }

        &[disabled] {

          + label {
          }
        }

        &:active {
        }
      }
    }
  }
`;

// outline-style: ${FocusBorder.style};
// outline-width: ${FocusBorder.width};
// outline-color: ${FocusBorder.color};
