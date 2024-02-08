import { renderThemedCssStrings } from "../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

export const { tokenizedLight: checkboxLight, tokenizedDark: checkboxDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { Checkbox, FormLabel } = componentTokens.Forms;
  //const { SM, MD, LG } = semanticTokens.Forms;
  const { FocusBorder } = semanticTokens.Global;

  return typeSafeNestedCss/* css */ `
      .blr-checkbox {
        all: initial;
        display: flex;

        .input-control {
          all: initial;
          position: absolute;
        }
        
        .visual-checkbox {
          all: initial;
          display: inline-block;
          margin: 0;
          position: relative;
          transition: background-color 0.25s ease 0s;
          outline-style: solid;

          & .checker-icon {
            position: absolute;
          }
        }

        .label-wrapper {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          .hint-wrapper, .error-wrapper {
            flex-basis: 100%;
            .blr-form-caption {
              gap: 0px;
            }
          }
          .blr-form-label-inline {
            font-family: ${FormLabel.InlineLabel.Typography.SM.fontFamily}, 'sans-serif';
          }
        }

        .focus-ring {
          position: absolute;
          inset: 0;
          outline-color: transparent;
          outline-style: solid;

          &.focus {
            outline-width: ${FocusBorder.width};
            outline-offset: 2px;
            outline-color: ${FocusBorder.color};
          }
        }
      
        &.sm {
          gap: ${Checkbox.ContentRow.ItemSpacing.SM};
          
          .visual-checkbox {
            width: ${Checkbox.Control.Container.Size.SM};
            height: ${Checkbox.Control.Container.Size.SM};
            margin-top: ${Checkbox.ControlWrapper.PaddingTop.SM};
            border-radius: ${Checkbox.Control.Container.BorderRadius.SM};
          }

          .focus-ring {
            border-radius: ${Checkbox.Control.Container.BorderRadius.SM};
          }
          
          & .label-wrapper, & .visual-checkbox {
            padding-top: ${Checkbox.ContentCol.PaddingTop.SM};
            gap: ${Checkbox.ContentCol.ItemSpacing.SM};
            .blr-form-label-inline {
              font-weight: ${FormLabel.InlineLabel.Typography.SM.fontWeight};
              line-height: ${FormLabel.InlineLabel.Typography.SM.lineHeight};
              font-size: ${FormLabel.InlineLabel.Typography.SM.fontSize};
            }
          }
        }

        &.md {
          gap: ${Checkbox.ContentRow.ItemSpacing.MD};

          .visual-checkbox {
            width: ${Checkbox.Control.Container.Size.MD};
            height: ${Checkbox.Control.Container.Size.MD};
            margin-top: ${Checkbox.ControlWrapper.PaddingTop.MD};
            border-radius: ${Checkbox.Control.Container.BorderRadius.MD};
          }

          .focus-ring {
            border-radius: ${Checkbox.Control.Container.BorderRadius.MD};
          }

          .label-wrapper {
            padding-top: ${Checkbox.ContentCol.PaddingTop.MD};
            gap: ${Checkbox.ContentCol.ItemSpacing.MD};
            .blr-form-label-inline {
              font-weight: ${FormLabel.InlineLabel.Typography.MD.fontWeight};
              line-height: ${FormLabel.InlineLabel.Typography.MD.lineHeight};
              font-size: ${FormLabel.InlineLabel.Typography.MD.fontSize};
            }
          }
        }

        &.lg {
          gap: ${Checkbox.ContentRow.ItemSpacing.LG};

          .visual-checkbox {
            width: ${Checkbox.Control.Container.Size.LG};
            height: ${Checkbox.Control.Container.Size.LG};
            margin-top: ${Checkbox.ControlWrapper.PaddingTop.LG};
            border-radius: ${Checkbox.Control.Container.BorderRadius.LG};
          }

          .focus-ring {
            border-radius: ${Checkbox.Control.Container.BorderRadius.LG};
          }

          .label-wrapper {
            padding-top: ${Checkbox.ContentCol.PaddingTop.LG};
            gap: ${Checkbox.ContentCol.ItemSpacing.LG};
            .blr-form-label-inline {
              font-weight: ${FormLabel.InlineLabel.Typography.LG.fontWeight};
              line-height: ${FormLabel.InlineLabel.Typography.LG.lineHeight};
              font-size: ${FormLabel.InlineLabel.Typography.LG.fontSize};
            }
          }
        }

        .label-wrapper {
          &:not(.disabled) {
            &:not(.error) {
              color: ${FormLabel.InlineLabel.TextColor.Rest};

              &:hover {
                &:not(.readonly) {
                  color: ${FormLabel.InlineLabel.TextColor.Hover};
                }
              }
              &.focus {
                color: ${FormLabel.InlineLabel.TextColor.Focus};
              }
              &.active {
                &:not(.readonly) {
                  color: ${FormLabel.InlineLabel.TextColor.Pressed};
                }
              }
              &.readonly {
                color: ${FormLabel.InlineLabel.TextColor.ReadOnly};
                .blr-form-label-inline {
                  cursor: not-allowed !important;
                  pointer-events: none;
                }
              }
            }
          }
          &.error {
            color: ${FormLabel.InlineLabel.TextColor.Error};
          }
          &.disabled {
            .blr-form-label-inline {
              cursor: not-allowed;
              color: ${FormLabel.InlineLabel.TextColor.Disabled};
            }
          }  
        }

        .visual-checkbox {
          & .checker-icon {
            color: ${Checkbox.Control.Icon.IconColor.Inactive.Rest};
          }

          &.disabled {
            & .checker-icon {
              color: ${Checkbox.Control.Icon.IconColor.Inactive.Disabled};
            }

            cursor: not-allowed;
          }
          &.readonly {
            pointer-events: none;
          }

          &:not(.error) {
            &.checked, &.indeterminate {
              background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Rest};
              outline-color: ${Checkbox.Control.Container.BorderColor.Active.Rest};
              & .checker-icon {
                color: ${Checkbox.Control.Icon.IconColor.Active.Rest};
              }

              &.hover {
                &:not(.disabled):not(.readonly) {
                  background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Hover};
                  outline-color: ${Checkbox.Control.Container.BorderColor.Active.Hover};
                  & .checker-icon {
                    color: ${Checkbox.Control.Icon.IconColor.Active.Hover};
                  }
                }
              }
              &.focus {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Focus};
                outline-color: ${Checkbox.Control.Container.BorderColor.Active.Focus};
                & .checker-icon {
                  color: ${Checkbox.Control.Icon.IconColor.Active.Focus};
                }
              }
              &.active {
                &:not(:disabled):not([readonly]) {
                  background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Pressed};
                  outline-color: ${Checkbox.Control.Container.BorderColor.Active.Pressed};
                  & .checker-icon {
                    color: ${Checkbox.Control.Icon.IconColor.Active.Pressed};
                  }
                }
              }
              &.disabled {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Disabled};
                outline-color: ${Checkbox.Control.Container.BorderColor.Active.Disabled};
                & .checker-icon {
                  color: ${Checkbox.Control.Icon.IconColor.Active.Disabled};
                }
              }
              &.readonly {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Active.ReadOnly};
                outline-color: ${Checkbox.Control.Container.BorderColor.Active.ReadOnly};
                & .checker-icon {
                  color: ${Checkbox.Control.Icon.IconColor.Active.ReadOnly};
                }
              }
            }

            &:not(.checked):not(.indeterminate) {
              background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Rest};
              outline-color: ${Checkbox.Control.Container.BorderColor.Inactive.Rest};
              & .checker-icon {
                color: ${Checkbox.Control.Icon.IconColor.Inactive.Rest};
              }

              &.hover {
                &:not(.disabled):not(.readonly) {
                  background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Hover};
                  outline-color: ${Checkbox.Control.Container.BorderColor.Inactive.Hover};
                  & .checker-icon {
                    color: ${Checkbox.Control.Icon.IconColor.Inactive.Hover};
                  }
                }
              }
              &.focus {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Focus};
                outline-color: ${Checkbox.Control.Container.BorderColor.Inactive.Focus};
                & .checker-icon {
                  color: ${Checkbox.Control.Icon.IconColor.Inactive.Focus};
                }
              }
              &.active {
                &:not(.disabled):not(.readonly) {
                  background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Pressed};
                  outline-color: ${Checkbox.Control.Container.BorderColor.Inactive.Pressed};
                  & .checker-icon {
                    color: ${Checkbox.Control.Icon.IconColor.Inactive.Pressed};
                  }
                }
              }
              &.disabled {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Disabled};
                outline-color: ${Checkbox.Control.Container.BorderColor.Inactive.Disabled};
                & .checker-icon {
                  color: ${Checkbox.Control.Icon.IconColor.Inactive.Disabled};
                }
              }
              &.readonly {
                background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.ReadOnly};
                outline-color: ${Checkbox.Control.Container.BorderColor.Inactive.ReadOnly};
                & .checker-icon {
                  color: ${Checkbox.Control.Icon.IconColor.Inactive.ReadOnly};
                }
              }
            }
          }

          &.error {
            &.checked {
              background-color: ${Checkbox.Control.Container.BackgroundColor.Active.Error};
              outline-color: ${Checkbox.Control.Container.BorderColor.Active.Error};
              & .checker-icon {
                color: ${Checkbox.Control.Icon.IconColor.Active.Error};
              }
            }
            &:not(.checked) {
              background-color: ${Checkbox.Control.Container.BackgroundColor.Inactive.Error};
              outline-color: ${Checkbox.Control.Container.BorderColor.Inactive.Error};
              & .checker-icon {
                color: ${Checkbox.Control.Icon.IconColor.Inactive.Error};
              }
            }
          }
        }


        &.sm {
          &:not(.error) {
            .visual-checkbox {
              & .checker-icon {
                width: ${Checkbox.Control.Icon.IconSize.SM.Rest};
                height: ${Checkbox.Control.Icon.IconSize.SM.Rest};
              }
              outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Rest};
              outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Inactive.Rest} * -1);
              

              &.hover {
                &:not(.disabled):not(.readonly) {
                  & .checker-icon {
                    width: ${Checkbox.Control.Icon.IconSize.SM.Hover};
                    height: ${Checkbox.Control.Icon.IconSize.SM.Hover};
                  }
                  outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Hover};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Inactive.Hover} * -1);
                }
              }
              &.focus {
                & .checker-icon {
                  width: ${Checkbox.Control.Icon.IconSize.SM.Focus};
                  height: ${Checkbox.Control.Icon.IconSize.SM.Focus};
                }
                outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Focus};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Inactive.Focus} * -1);
              }
              &.active {
                &:not(.disabled):not(.readonly) {
                  & .checker-icon {
                    width: ${Checkbox.Control.Icon.IconSize.SM.Pressed};
                    height: ${Checkbox.Control.Icon.IconSize.SM.Pressed};
                  }
                  outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Pressed};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Inactive.Pressed} * -1);
                }
              }
              &.disabled {
                & .checker-icon {
                  width: ${Checkbox.Control.Icon.IconSize.SM.Disabled};
                  height: ${Checkbox.Control.Icon.IconSize.SM.Disabled};
                }
                outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Disabled};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Inactive.Disabled} * -1);
                
              }
              &.readonly {
                & .checker-icon {
                  width: ${Checkbox.Control.Icon.IconSize.SM.ReadOnly};
                  height: ${Checkbox.Control.Icon.IconSize.SM.ReadOnly};
                }
                outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.ReadOnly};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Inactive.ReadOnly} * -1);
              }


              &.checked {
                outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Rest};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Active.Rest} * -1);

                &.hover {
                  &:not(.disabled):not(.readonly) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Hover};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Active.Hover} * -1);
                  }
                }
                &.focus {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Focus};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Active.Focus} * -1);
                }
                &.active {
                  &:not(.disabled):not(.readonly) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Pressed};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Active.Pressed} * -1);
                  }
                }
                &.disabled {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Disabled};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Active.Disabled} * -1);
                  
                }
                &.readonly {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.ReadOnly};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Active.ReadOnly} * -1);
                }
              }      
            }
          }
          &.error{
            .visual-checkbox {
              & .checker-icon {
                width: ${Checkbox.Control.Icon.IconSize.SM.Error};
                height: ${Checkbox.Control.Icon.IconSize.SM.Error};
              }

              &:not(.checked) {
                outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Inactive.Error};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Inactive.Error} * -1);
              }
              &.checked {
                outline-width: ${Checkbox.Control.Container.BorderWidth.SM.Active.Error};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.SM.Active.Error} * -1);
              }
            }
          }
        }


        &.md {
          &:not(.error) {
            .visual-checkbox {
              &:not(.checked) {
                outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Rest};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Inactive.Rest} * -1);
                

                &.hover {
                  &.not(.disabled):not(.readonly) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Hover};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Inactive.Hover} * -1);
                  }
                }
                &.focus {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Focus};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Inactive.Focus} * -1);
                  
                }
                &.active {
                  &:not(.disabled):not(.readonly) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Pressed};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Inactive.Pressed} * -1);
                  }
                }
                &.disabled {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Disabled};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Inactive.Disabled} * -1);
                  
                }
                &.readonly {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.ReadOnly};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Inactive.ReadOnly} * -1);
                }
              }

              &.checked {
                outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Rest};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Active.Rest} * -1);

                &.hover {
                  &:not(.disabled):not(.readonly) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Hover};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Active.Hover} * -1);
                  }
                }
                &.focus {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Focus};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Active.Focus} * -1);
                  
                }
                &.active {
                  &:not(.disabled):not(.readonly) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Pressed};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Active.Pressed} * -1);
                  }
                }
                &.disabled {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Disabled};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Active.Disabled} * -1);
                  
                }
                &.readonly {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.ReadOnly};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Active.ReadOnly} * -1);
                }
              }      
            }
          }
          &.error {
            .visual-checkbox {
              &:not(.checked) {
                outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Inactive.Error};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Inactive.Error} * -1);
              }
              &.checked {
                outline-width: ${Checkbox.Control.Container.BorderWidth.MD.Active.Error};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.MD.Active.Error} * -1);
              }
            }
          }
        }


        &.lg {
          &:not(.error) {
            .visual-checkbox {
              &:not(.checked) {
                outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Rest};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Inactive.Rest} * -1);
                
                &.hover {
                  &:not(.disabled):not(.readonly) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Hover};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Inactive.Hover} * -1);
                  }
                }
                &.focus {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Focus};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Inactive.Focus} * -1);
                  
                }
                &.active {
                  &:not(:disabled):not(.readonly) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Pressed};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Inactive.Pressed} * -1);
                  }
                }
                &.disabled {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Disabled};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Inactive.Disabled} * -1);
                  
                }
                &.readonly {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.ReadOnly};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Inactive.ReadOnly} * -1);
                }
              }

              &.checked{
                outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Rest};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Active.Rest} * -1);

                &.hover {
                  &:not(.disabled):not(.readonly) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Hover};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Active.Hover} * -1);
                  }
                }
                &.focus {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Focus};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Active.Focus} * -1);
                  
                }
                &.active {
                  &:not(.disabled):not(.readonly) {
                    outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Pressed};
                    outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Active.Pressed} * -1);
                  }
                }
                &.disabled {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Disabled};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Active.Disabled} * -1);
                  
                }
                &.readonly {
                  outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.ReadOnly};
                  outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Active.ReadOnly} * -1);
                }
              }      
            }
          }
          &.error:not(.disbaled) {
            .visual-checkbox {
              &:not(.checked) {
                outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Inactive.Error};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Inactive.Error} * -1);
              }
              &.checked {
                outline-width: ${Checkbox.Control.Container.BorderWidth.LG.Active.Error};
                outline-offset: calc(${Checkbox.Control.Container.BorderWidth.LG.Active.Error} * -1);
              }
            }
          }
        }
      }
    `;
});
