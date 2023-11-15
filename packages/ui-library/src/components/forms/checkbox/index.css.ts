import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: styleCustomLight, tokenizedDark: styleCustomDark } = renderThemedCssStrings(
  (componentTokens, semanticTokens) => {
    const { Checkbox } = componentTokens.Forms;
    const { SM, MD, LG, LabelNextToControl } = semanticTokens.Forms;

    return typeSafeNestedCss`
      .blr-checkbox {
        display: flex;
        align-items: flex-start;
        transition: all 0.25s ease 0s;

        .blr-form-label-inline {
          color: ${LabelNextToControl.Rest};
        }
        .input-control[type=checkbox] {
          all: initial;
          margin: 0;
          position: relative;
          outline-offset: 2px;
          transition: all 0.25s ease 0s;
          border-style: solid;

          &:disabled + label {
            cursor: not-allowed;
            pointer-events: none;
          }
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
          .blr-form-label-inline {
            font-family: ${SM.LabelNextToControl.fontFamily}, 'sans-serif';
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
          gap: ${Checkbox.ContentRow.ItemSpacing.SM};
          .input-control {
            width: ${Checkbox.Control.Container.Size.SM};
            height: ${Checkbox.Control.Container.Size.SM};
            margin-top: ${Checkbox.ControlWrapper.PaddingTop.SM};
            border-radius: ${Checkbox.Control.Container.BorderRadius.SM};
          }
          .label-wrapper {
            padding-top: ${Checkbox.ContentCol.PaddingTop.SM};
            gap: ${Checkbox.ContentCol.ItemSpacing.SM};
            .blr-form-label-inline {
              font-weight: ${SM.LabelNextToControl.fontWeight};
              line-height: ${SM.LabelNextToControl.lineHeight};
              font-size: ${SM.LabelNextToControl.fontSize};
            }
          }
          .input-control {
            &:checked {
              &::after {
                width: ${Checkbox.Control.Icon.IconSize.SM.Rest};
                height: ${Checkbox.Control.Icon.IconSize.SM.Rest};
              }
            }
          }
        }

        &.md {
          gap: ${Checkbox.ContentRow.ItemSpacing.MD};
          .input-control {
            width: ${Checkbox.Control.Container.Size.MD};
            height: ${Checkbox.Control.Container.Size.MD};
            margin-top: ${Checkbox.ControlWrapper.PaddingTop.MD};
            border-radius: ${Checkbox.Control.Container.BorderRadius.MD};
          }
          .label-wrapper {
            padding-top: ${Checkbox.ContentCol.PaddingTop.MD};
            gap: ${Checkbox.ContentCol.ItemSpacing.MD};
            .blr-form-label-inline {
              font-weight: ${MD.LabelNextToControl.fontWeight};
              line-height: ${MD.LabelNextToControl.lineHeight};
              font-size: ${MD.LabelNextToControl.fontSize};
            }
          }
          .input-control {
            &:checked {
              &::after {
                width: ${Checkbox.Control.Icon.IconSize.MD.Rest};
                height: ${Checkbox.Control.Icon.IconSize.MD.Rest};
              }
            }
          }
        }

        &.lg {
          gap: ${Checkbox.ContentRow.ItemSpacing.LG};
          .input-control {
            width: ${Checkbox.Control.Container.Size.LG};
            height: ${Checkbox.Control.Container.Size.LG};
            margin-top: ${Checkbox.ControlWrapper.PaddingTop.LG};
            border-radius: ${Checkbox.Control.Container.BorderRadius.LG};
          }
          .label-wrapper {
            padding-top: ${Checkbox.ContentCol.PaddingTop.LG};
            gap: ${Checkbox.ContentCol.ItemSpacing.LG};
            .blr-form-label-inline {
              font-weight: ${LG.LabelNextToControl.fontWeight};
              line-height: ${LG.LabelNextToControl.lineHeight};
              font-size: ${LG.LabelNextToControl.fontSize};
            }
          }
          .input-control {
            &:checked {
              &::after {
                width: ${Checkbox.Control.Icon.IconSize.LG.Rest};
                height: ${Checkbox.Control.Icon.IconSize.LG.Rest};
              }
            }
          }
        }

        &:not(.error) {
          .input-control {
            &:checked {
              background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Rest};
              border-color: ${Checkbox.Control.Container.BorderColor.Active.Rest};

              &:hover {
                &:not(:disabled):not([readonly]) {
                  background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Hover};
                  border-color: ${Checkbox.Control.Container.BorderColor.Active.Hover};
                }
              }
              &:focus {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Focus};
                border-color: ${Checkbox.Control.Container.BorderColor.Active.Focus};
              }
              &:active {
                &:not(:disabled):not([readonly]) {
                  background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Pressed};
                  border-color: ${Checkbox.Control.Container.BorderColor.Active.Pressed};
                }
              }
              &:disabled {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Disabled};
                border-color: ${Checkbox.Control.Container.BorderColor.Active.Disabled};
              }
              &[readonly] {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Active.ReadOnly};
                border-color: ${Checkbox.Control.Container.BorderColor.Active.ReadOnly};
              }
            }

            &:not(:checked) {
              background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Rest};
              border-color: ${Checkbox.Control.Container.BorderColor.Inactive.Rest};

              &:hover {
                &:not(:disabled):not([readonly]) {
                  background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Hover};
                  border-color: ${Checkbox.Control.Container.BorderColor.Inactive.Hover};
                }
              }
              &:focus {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Focus};
                border-color: ${Checkbox.Control.Container.BorderColor.Inactive.Focus};
              }
              &:active {
                &:not(:disabled):not([readonly]) {
                  background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Pressed};
                  border-color: ${Checkbox.Control.Container.BorderColor.Inactive.Pressed};
                }
              }
              &:disabled {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Disabled};
                border-color: ${Checkbox.Control.Container.BorderColor.Inactive.Disabled};
              }
              &[readonly] {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.ReadOnly};
                border-color: ${Checkbox.Control.Container.BorderColor.Inactive.ReadOnly};
              }
            }
          }
        }
    
        &.error {
          .input-control {
            background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Error};
            border-color: ${Checkbox.Control.Container.BorderColor.Inactive.Error};
          }
        }

        &:not(.indeterminate) {
          .input-control {
            &::after {
              content: " ";
              margin-right: 1rem;
              float: left;
              transition: 0.15s all ease-out; 
              background-repeat: no-repeat;
              background-position: center center;
              background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"%3E%3Cpath d="M3.35834 8.9759L5.39724 10.9618C5.65804 11.2159 6.07374 11.2159 6.33454 10.9618L12.7617 4.70166" stroke="white" stroke-width="0.671667" stroke-linecap="round" stroke-linejoin="round" /%3E%3C/svg%3E');
            }
          }  
        }

        &.indeterminate {
          .input-control {
            &::after {
              content: " ";
              display: block;
              width: 10px;
              border-style: solid;
              border-color: white;
              border-width: 2px 0px 0px;
              position: absolute;
              top: calc(50% - 1px);
              margin: 0px auto;  
            }
          }  
        }

        .sm {
          &:checked {
            border-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Rest};

            &:hover {
              &:not(:disabled):not([readonly]) {
                border-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Hover};
              }
            }
            &:focus {
              border-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Focus};
            }
            &:active {
              &:not(:disabled):not([readonly]) {
                border-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Pressed};
              }
            }
            &:disabled {
              border-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Disabled};
            }
            &[readonly] {
              border-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.ReadOnly};
            }
          }

          &:not(:checked) {
            border-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Rest};

            &:hover {
              &:not(:disabled):not([readonly]) {
                border-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Hover};
              }
            }
            &:focus {
              border-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Focus};
            }
            &:active {
              &:not(:disabled):not([readonly]) {
                border-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Pressed};
              }
            }
            &:disabled {
              border-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Disabled};
            }
            &[readonly] {
              border-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.ReadOnly};
            }
          }
        }

        .md {
          &:checked {
            border-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Rest};

            &:hover {
              &:not(:disabled):not([readonly]) {
                border-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Hover};
              }
            }
            &:focus {
              border-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Focus};
            }
            &:active {
              &:not(:disabled):not([readonly]) {
                border-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Pressed};
              }
            }
            &:disabled {
              border-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Disabled};
            }
            &[readonly] {
              border-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.ReadOnly};
            }
          }

          &:not(:checked) {
            border-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Rest};

            &:hover {
              &:not(:disabled):not([readonly]) {
                border-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Hover};
              }
            }
            &:focus {
              border-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Focus};
            }
            &:active {
              &:not(:disabled):not([readonly]) {
                border-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Pressed};
              }
            }
            &:disabled {
              border-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Disabled};
            }
            &[readonly] {
              border-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.ReadOnly};
            }
          }
        }

        .lg {
          &:checked {
            border-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Rest};

            &:hover {
              &:not(:disabled):not([readonly]) {
                border-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Hover};
              }
            }
            &:focus {
              border-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Focus};
            }
            &:active {
              &:not(:disabled):not([readonly]) {
                border-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Pressed};
              }
            }
            &:disabled {
              border-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Disabled};
            }
            &[readonly] {
              border-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.ReadOnly};
            }
          }

          &:not(:checked) {
            border-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Rest};

            &:hover {
              &:not(:disabled):not([readonly]) {
                border-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Hover};
              }
            }
            &:focus {
              border-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Focus};
            }
            &:active {
              &:not(:disabled):not([readonly]) {
                border-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Pressed};
              }
            }
            &:disabled {
              border-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Disabled};
            }
            &[readonly] {
              border-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.ReadOnly};
            }
          }
        }
      }
    `;
  }
);
