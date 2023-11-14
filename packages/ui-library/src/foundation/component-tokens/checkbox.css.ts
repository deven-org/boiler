import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: checkboxLight, tokenizedDark: checkboxDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { Checkbox } = componentTokens.Forms;
  const { SM, MD, LG, LabelNextToControl } = semanticTokens.Forms;

  return typeSafeNestedCss`
      .blr-checkbox {
        display: flex;
        transition: all 0.25s ease 0s;
        .blr-form-label-inline {
          color: ${LabelNextToControl.Rest};
        }
        .input-control {
          position: relative;
          outline-offset: 2px;
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
            .blr-form-hint {
              gap: 0px;
            }
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
          gap: ${Checkbox.SM.MainContainer.ItemSpacing};
          .input-control {
            width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Rest};
            min-width: ${Checkbox.SM.Control.Background.Sizing.Unselected.Rest};
            height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Rest};
            min-height: ${Checkbox.SM.Control.Background.Sizing.Unselected.Rest};
            margin-top: ${Checkbox.SM.ControlWrapper.TopMargin};
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
              margin-top: ${Checkbox.SM.ControlWrapper.TopMargin};
              &:after {
                width: ${Checkbox.SM.Control.Icon.Sizing.Selected.Rest};
                height: ${Checkbox.SM.Control.Icon.Sizing.Selected.Rest};
              }
              &:hover {
                width: ${Checkbox.SM.Control.Background.Sizing.Selected.Hover};
                height: ${Checkbox.SM.Control.Background.Sizing.Selected.Hover};
              }
              &:disabled {
                width: ${Checkbox.SM.Control.Background.Sizing.Selected.Disabled};
                height: ${Checkbox.SM.Control.Background.Sizing.Selected.Disabled};
              }
              &:[readonly] {
                width: ${Checkbox.SM.Control.Background.Sizing.Selected.ReadOnly};
                height: ${Checkbox.SM.Control.Background.Sizing.Selected.ReadOnly};
              }
            }
          }
        }
        &.md {
          gap: ${Checkbox.MD.MainContainer.ItemSpacing};
          .input-control {
            width: ${Checkbox.MD.Control.Background.Sizing.Unselected.Rest};
            min-width: ${Checkbox.MD.Control.Background.Sizing.Unselected.Rest};
            height: ${Checkbox.MD.Control.Background.Sizing.Unselected.Rest};
            min-height: ${Checkbox.MD.Control.Background.Sizing.Unselected.Rest};
            margin-top: ${Checkbox.MD.ControlWrapper.TopMargin};
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
              margin-top: ${Checkbox.MD.ControlWrapper.TopMargin};
              &:after {
                width: ${Checkbox.MD.Control.Icon.Sizing.Selected.Rest};
                height: ${Checkbox.MD.Control.Icon.Sizing.Selected.Rest};
              }
              &:hover {
                width: ${Checkbox.MD.Control.Background.Sizing.Selected.Hover};
                height: ${Checkbox.MD.Control.Background.Sizing.Selected.Hover};
              }
              &:disabled {
                width: ${Checkbox.MD.Control.Background.Sizing.Selected.Disabled};
                height: ${Checkbox.MD.Control.Background.Sizing.Selected.Disabled};
              }
              &:[readonly] {
                width: ${Checkbox.MD.Control.Background.Sizing.Selected.ReadOnly};
                height: ${Checkbox.MD.Control.Background.Sizing.Selected.ReadOnly};
              }
            }
          }
        }
        &.lg {
          gap: ${Checkbox.LG.MainContainer.ItemSpacing};
          .input-control {
            width: ${Checkbox.LG.Control.Background.Sizing.Unselected.Rest};
            min-width: ${Checkbox.LG.Control.Background.Sizing.Unselected.Rest};
            height: ${Checkbox.LG.Control.Background.Sizing.Unselected.Rest};
            min-height: ${Checkbox.LG.Control.Background.Sizing.Unselected.Rest};
            margin-top: ${Checkbox.LG.ControlWrapper.TopMargin};
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
              margin-top: ${Checkbox.LG.ControlWrapper.TopMargin};
              &:after {
                width: ${Checkbox.LG.Control.Icon.Sizing.Selected.Rest};
                height: ${Checkbox.LG.Control.Icon.Sizing.Selected.Rest};
              }
              &:hover {
                width: ${Checkbox.LG.Control.Background.Sizing.Selected.Hover};
                height: ${Checkbox.LG.Control.Background.Sizing.Selected.Hover};
              }
              &:disabled {
                width: ${Checkbox.LG.Control.Background.Sizing.Selected.Disabled};
                height: ${Checkbox.LG.Control.Background.Sizing.Selected.Disabled};
              }
              &:[readonly] {
                width: ${Checkbox.LG.Control.Background.Sizing.Selected.ReadOnly};
                height: ${Checkbox.LG.Control.Background.Sizing.Selected.ReadOnly};
              }
            }
          }
        }
      }
        &:not(.error) {
          .input-control {
            &:checked {
              background-color: ${Checkbox.Control.Background.Selected.Fill.Rest};
              &:disabled {
                background-color: ${Checkbox.Control.Background.Selected.Fill.Disabled};
                border-color: ${Checkbox.Control.Background.Selected.Stroke.Disabled};
              }
              &[readonly] {
                background-color: ${Checkbox.Control.Background.Selected.Fill.ReadOnly};
                border-color: ${Checkbox.Control.Background.Selected.Stroke.ReadOnly};
              }
              &:hover {
                &:not(:disabled):not([readonly]) {
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
                &:not(:disabled):not([readonly]) {
                  background-color: ${Checkbox.Control.Background.Selected.Fill.Hover};
                  border-color: ${Checkbox.Control.Background.Selected.Stroke.Hover};
                }
              }
              &:active {
                &:not(:disabled):not([readonly]) {
                  background-color: ${Checkbox.Control.Background.Selected.Fill.Pressed};
                  border-color: ${Checkbox.Control.Background.Selected.Stroke.Pressed};
                }
              }
              &:focus {
                background-color: ${Checkbox.Control.Background.Selected.Fill.Focus};
                border-color: ${Checkbox.Control.Background.Selected.Stroke.Focus};
                outline: 2px solid black;
              }
              &:indeterminate {
                background-color: ${Checkbox.Control.Background.Selected.Fill.ReadOnly};
                border-color: ${Checkbox.Control.Background.Selected.Stroke.ReadOnly};
                &::after {
                  content: "";
                  display: block;
                  width: 10px;
                  border-style: solid;
                  border-color: white;
                  border-width: 2px 0px 0px;
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  left: 0px;
                  right: 0px;
                  margin: 0px auto;
                }
              }
            }
            &:disabled {
              cursor: not-allowed;
              background-color: ${Checkbox.Control.Background.Unselected.Fill.Disabled};
              border-color: ${Checkbox.Control.Background.Unselected.Stroke.Disabled};
            }
            &:hover {
              &:(:disabled):not([readonly]) {
                background-color: ${Checkbox.Control.Background.Unselected.Fill.Hover};
                border-color: ${Checkbox.Control.Background.Unselected.Stroke.Hover};
              }
            }
            &:active {
              &:not(:disabled):not([readonly]) {
                background-color: ${Checkbox.Control.Background.Unselected.Fill.Pressed};
                border-color: ${Checkbox.Control.Background.Unselected.Stroke.Pressed};
              }
            }
            &:focus {
              background-color: ${Checkbox.Control.Background.Unselected.Fill.Focus};
              border-color: ${Checkbox.Control.Background.Unselected.Stroke.Focus};
              outline: 2px solid black;
            }
            &[readonly] {
              background-color: ${Checkbox.Control.Background.Unselected.Fill.ReadOnly};
              border-color: ${Checkbox.Control.Background.Unselected.Stroke.ReadOnly};
            }
            &:indeterminate {
              background-color: ${Checkbox.Control.Background.Selected.Fill.Rest};
              border-color: ${Checkbox.Control.Background.Selected.Stroke.Rest};
              &:hover {
                &:not(:disabled):not([readonly]) {
                  background-color: ${Checkbox.Control.Background.Selected.Fill.Hover};
                  border-color: ${Checkbox.Control.Background.Selected.Stroke.Hover};
                }
              }
              &:active {
                &:not(:disabled):not([readonly]) {
                  background-color: ${Checkbox.Control.Background.Selected.Fill.Pressed};
                  border-color: ${Checkbox.Control.Background.Selected.Stroke.Pressed};
                }
              }
              &:disabled {
                background-color: ${Checkbox.Control.Background.Selected.Fill.Disabled};
                border-color: ${Checkbox.Control.Background.Selected.Stroke.Disabled};
              }
              &:focus {
                background-color: ${Checkbox.Control.Background.Selected.Fill.Focus};
                border-color: ${Checkbox.Control.Background.Selected.Stroke.Focus};
              }
              &[readonly] {
                background-color: ${Checkbox.Control.Background.Selected.Fill.ReadOnly};
                border-color: ${Checkbox.Control.Background.Selected.Stroke.ReadOnly};
              }
              &::after {
                content: "";
                display: block;
                width: 10px;
                border-style: solid;
                border-color: white;
                border-width: 2px 0px 0px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0px;
                right: 0px;
                margin: 0px auto;
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
        }
      }
    `;
});
