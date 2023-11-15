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

        & > input {
          all: initial;
    
          &:disabled + label {
            cursor: not-allowed;
            pointer-events: none;
          }
    
          &:checked {
            &:disabled + label {
              cursor: not-allowed;
              pointer-events: none;
            }
          }
        }
        .blr-form-label-inline {
          color: ${LabelNextToControl.Rest};
        }
        .input-control {
          position: relative;
          outline-offset: 2px;
          transition: all 0.25s ease 0s;
          background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Rest};
          border-color: ${Checkbox.Control.Container.BorderColor.Inactive.Rest};
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
            margin-top: ${Checkbox.ContentCol.PaddingTop.SM};
            border-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Rest};
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
            // TODO: Consider Size AND State and dont forget border-width
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
            margin-top: ${Checkbox.ContentCol.PaddingTop.MD};
            border-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Rest};
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
            // TODO: Consider Size AND State and dont forget border-width
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
            margin-top: ${Checkbox.ContentCol.PaddingTop.LG};
            border-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Rest};
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
            // TODO: Consider Size AND State and dont forget border-width
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
            &:checked, &:indeterminate {
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

            &:not(:checked),
            &:not(:indeterminate) {
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

        &:checked:not(:indeterminate)::after {
          content: "";
          margin-right: 1rem;
          float: left;
          transition: 0.15s all ease-out; 
          background-repeat: no-repeat;
          background-position: center center;
          background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"%3E%3Cpath d="M3.35834 8.9759L5.39724 10.9618C5.65804 11.2159 6.07374 11.2159 6.33454 10.9618L12.7617 4.70166" stroke="white" stroke-width="0.671667" stroke-linecap="round" stroke-linejoin="round" /%3E%3C/svg%3E');
        }

        &:indeterminate::after {
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
    `;
  }
);
