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

        
        .input-control[type=checkbox] {
          all: initial;
          margin: 0;
          position: relative;
          outline-offset: 2px;
          transition: all 0.25s ease 0s;
          border-style: none;
          border-width: 0;
          outline-width: 0;
          outline-style: solid;
          outline-offset: 0;

          &:disabled + label {
            cursor: not-allowed;
            pointer-events: none;
          }

          &[readonly]{
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
            color: red;
            _color: ${LabelNextToControl.Disabled};
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
          .label-wrapper {
            .blr-form-label-inline {
              color: ${LabelNextToControl.Rest};

              &:hover {
                &:not(:disabled):not([readonly]) {
                  color: ${LabelNextToControl.Hover};
                }
              }
              &:focus {
                color: ${LabelNextToControl.Focus};
              }
              &:active {
                &:not(:disabled):not([readonly]) {
                  color: ${LabelNextToControl.Pressed};
                }
              }
              &:disabled {
                color: green;
              }
              &[readonly] {
                color: ${LabelNextToControl.ReadOnly};
              }
            }
          }
        }
        &.error {
          color: ${LabelNextToControl.Error};
        }
        

        &:not(.error) {
          .input-control {
            &:checked {
              background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Rest};
              outline-color: ${Checkbox.Control.Container.BorderColor.Active.Rest};

              &:hover {
                &:not(:disabled):not([readonly]) {
                  background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Hover};
                  outline-color: ${Checkbox.Control.Container.BorderColor.Active.Hover};
                }
              }
              &:focus {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Focus};
                outline-color: ${Checkbox.Control.Container.BorderColor.Active.Focus};
              }
              &:active {
                &:not(:disabled):not([readonly]) {
                  background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Pressed};
                  outline-color: ${Checkbox.Control.Container.BorderColor.Active.Pressed};
                }
              }
              &:disabled {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Disabled};
                outline-color: ${Checkbox.Control.Container.BorderColor.Active.Disabled};
              }
              &[readonly] {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Active.ReadOnly};
                outline-color: ${Checkbox.Control.Container.BorderColor.Active.ReadOnly};
              }
            }

            &:not(:checked) {
              background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Rest};
              outline-color: ${Checkbox.Control.Container.BorderColor.Inactive.Rest};

              &:hover {
                &:not(:disabled):not([readonly]) {
                  background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Hover};
                  outline-color: ${Checkbox.Control.Container.BorderColor.Inactive.Hover};
                }
              }
              &:focus {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Focus};
                outline-color: ${Checkbox.Control.Container.BorderColor.Inactive.Focus};
              }
              &:active {
                &:not(:disabled):not([readonly]) {
                  background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Pressed};
                  outline-color: ${Checkbox.Control.Container.BorderColor.Inactive.Pressed};
                }
              }
              &:disabled {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Disabled};
                outline-color: ${Checkbox.Control.Container.BorderColor.Inactive.Disabled};
              }
              &[readonly] {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.ReadOnly};
                outline-color: ${Checkbox.Control.Container.BorderColor.Inactive.ReadOnly};
              }
            }
          }
        }
    
        &.error {
          .input-control {
            &:not(:checked) {
              background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Error};
              outline-color: ${Checkbox.Control.Container.BorderColor.Inactive.Error};
            }
          }
        }

        &.sm {
          &:not(.error) {
            .input-control {

              &:not(:checked){
                outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Rest};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Inactive.Rest} * -1);
                

                &:hover {
                  &:not(:disabled):not([readonly]) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Hover};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Inactive.Hover} * -1);
                  }
                }
                &:focus {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Focus};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Inactive.Focus} * -1);
                  
                }
                &:active {
                  &:not(:disabled):not([readonly]) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Pressed};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Inactive.Pressed} * -1);
                  }
                }
                &:disabled {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Disabled};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Inactive.Disabled} * -1);
                  
                }
                &[readonly] {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.ReadOnly};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Inactive.ReadOnly} * -1);
                }
              }

              &:checked{
                outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Rest};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Active.Rest} * -1);

                &:hover {
                  &:not(:disabled):not([readonly]) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Hover};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Active.Hover} * -1);
                  }
                }
                &:focus {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Focus};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Active.Focus} * -1);
                  
                }
                &:active {
                  &:not(:disabled):not([readonly]) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Pressed};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Active.Pressed} * -1);
                  }
                }
                &:disabled {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Disabled};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Active.Disabled} * -1);
                  
                }
                &[readonly] {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.ReadOnly};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Active.ReadOnly} * -1);
                }
              }      
            }
          }
          &.error{
            .input-control {
              &:not(:checked){
                outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Error};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Inactive.Error} * -1);
              }
              &:checked{
                outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Error};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Active.Error} * -1);
              }
            }
          }
        }


        &.md {
          &:not(.error) {
            .input-control {

              &:not(:checked){
                outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Rest};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Inactive.Rest} * -1);
                

                &:hover {
                  &:not(:disabled):not([readonly]) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Hover};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Inactive.Hover} * -1);
                  }
                }
                &:focus {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Focus};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Inactive.Focus} * -1);
                  
                }
                &:active {
                  &:not(:disabled):not([readonly]) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Pressed};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Inactive.Pressed} * -1);
                  }
                }
                &:disabled {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Disabled};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Inactive.Disabled} * -1);
                  
                }
                &[readonly] {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.ReadOnly};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Inactive.ReadOnly} * -1);
                }
              }

              &:checked{
                outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Rest};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Active.Rest} * -1);

                &:hover {
                  &:not(:disabled):not([readonly]) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Hover};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Active.Hover} * -1);
                  }
                }
                &:focus {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Focus};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Active.Focus} * -1);
                  
                }
                &:active {
                  &:not(:disabled):not([readonly]) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Pressed};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Active.Pressed} * -1);
                  }
                }
                &:disabled {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Disabled};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Active.Disabled} * -1);
                  
                }
                &[readonly] {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.ReadOnly};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Active.ReadOnly} * -1);
                }
              }      
            }
          }
          &.error{
            .input-control {
              &:not(:checked){
                outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Error};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Inactive.Error} * -1);
              }
              &:checked{
                outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Error};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Active.Error} * -1);
              }
            }
          }
        }


        &.lg {
          &:not(.error) {
            .input-control {

              &:not(:checked){
                outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Rest};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Inactive.Rest} * -1);
                

                &:hover {
                  &:not(:disabled):not([readonly]) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Hover};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Inactive.Hover} * -1);
                  }
                }
                &:focus {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Focus};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Inactive.Focus} * -1);
                  
                }
                &:active {
                  &:not(:disabled):not([readonly]) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Pressed};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Inactive.Pressed} * -1);
                  }
                }
                &:disabled {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Disabled};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Inactive.Disabled} * -1);
                  
                }
                &[readonly] {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.ReadOnly};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Inactive.ReadOnly} * -1);
                }
              }

              &:checked{
                outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Rest};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Active.Rest} * -1);

                &:hover {
                  &:not(:disabled):not([readonly]) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Hover};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Active.Hover} * -1);
                  }
                }
                &:focus {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Focus};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Active.Focus} * -1);
                  
                }
                &:active {
                  &:not(:disabled):not([readonly]) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Pressed};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Active.Pressed} * -1);
                  }
                }
                &:disabled {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Disabled};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Active.Disabled} * -1);
                  
                }
                &[readonly] {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.ReadOnly};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Active.ReadOnly} * -1);
                }
              }      
            }
          }
          &.error{
            .input-control {
              &:not(:checked){
                outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Error};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Inactive.Error} * -1);
              }
              &:checked{
                outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Error};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Active.Error} * -1);
              }
            }
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


       

        


      }
    `;
  }
);
