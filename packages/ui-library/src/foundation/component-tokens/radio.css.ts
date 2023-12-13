import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: radioLight, tokenizedDark: radioDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { SM, MD, LG, LabelNextToControl, Legend } = semanticTokens.Forms;
  const { Radio, RadioGroup } = componentTokens.Forms;

  /* ToDos:

  - [x] improve styling of hover inactive
  - [ ] Fix margin of caption-group
  - [ ] Prevent click in readOnly
  - [x] Make radios take the same space
  - [X] Make radios label line break if they have not enough space
  - [ ] Would be nice to have an *optional* max-width for .blr-radio
  - [ ] Implement different sizing tokens (MD & LG) for .input-control and the icon (:before)
  - [ ] Check whats going on with vertical stacking, this layout variant is not available in SB (already implemented appropriate gap tokens)
  - [ ] Allow active opion in error state
  - [ ] It should be possible to predefine a selected option - setting to disabled or readonly allways resets
  - [ ] In disabled state, the legend should consume "Forms.Legend.Disabled"
  - [ ] In readOnly state, the legend should consume "Forms.Legend.ReadOnly"

  */

  return typeSafeNestedCss`
    


    .blr-legend-wrapper {
      &.sm {
        padding-bottom: ${RadioGroup.LegendWrapper.PaddingBottom.SM};
      }

      &.md {
        padding-bottom: ${RadioGroup.LegendWrapper.PaddingBottom.MD};
      }

      &.lg {
        padding-bottom: ${RadioGroup.LegendWrapper.PaddingBottom.LG};
      }

      .blr-legend {
        _FIX: to override constructed css;
        margin: 0 !important;
        &.sm {
          font-weight: ${SM.Legend.fontWeight};
          font-size: ${SM.Legend.fontSize};
          font-family: ${SM.Legend.fontFamily}, sans-serif;
          line-height: ${SM.Legend.lineHeight};
          color: ${Legend.Default};
        }
  
        &.md {
          font-weight: ${MD.Legend.fontWeight};
          font-size: ${MD.Legend.fontSize};
          font-family: ${MD.Legend.fontFamily}, sans-serif;
          line-height: ${MD.Legend.lineHeight};
          color: ${Legend.Default};
        }
  
        &.lg {
          font-weight: ${LG.Legend.fontWeight};
          font-size: ${LG.Legend.fontSize};
          font-family: ${LG.Legend.fontFamily}, sans-serif;
          line-height: ${LG.Legend.lineHeight};
          color: ${Legend.Default};
        }
  
        &.error {
          color: ${Legend.Error};
        }
      }
    }


    
     
    .caption-group {
    
      _FIX_: To override constructed margin;
      all: initial;
      margin: 0;
    
      &.sm {
        _FIX: "Can be merged with the .caption-group above";
        padding-top: ${RadioGroup.CaptionSlot.PaddingTop.SM};
      }

      &.md {
        _FIX: "Can be merged with the .caption-group above";
        padding-top: ${RadioGroup.CaptionSlot.PaddingTop.MD};
      }

      &.lg {
        _FIX: "Can be merged with the .caption-group above";
        padding-top: ${RadioGroup.CaptionSlot.PaddingTop.LG};
      }
    }



    .blr-radio-group {
      
      display: flex;
      align-items: flex-start;
      position: relative;
      flex-flow: nnowrap;
      justify-content: space-between;

      &.vertical {
        flex-direction: column;
      }

      &.sm {
        _FIX_: "We need to differentiate between horizontal and vertical gaps, but this seems all wrong anyhow";
        column-gap: ${RadioGroup.RadioStackHorizontal.ItemSpacing.SM};
        row-gap: ${RadioGroup.RadioStackVertical.ItemSpacing.SM};
      }

      &.md {
        _FIX_: "We need to differentiate between horizontal and vertical gaps, but this seems all wrong anyhow";
        column-gap: ${RadioGroup.RadioStackHorizontal.ItemSpacing.MD};
        row-gap: ${RadioGroup.RadioStackVertical.ItemSpacing.MD};
      }

      &.lg {
        _FIX_: "We need to differentiate between horizontal and vertical gaps, but this seems all wrong anyhow";
        column-gap: ${RadioGroup.RadioStackHorizontal.ItemSpacing.LG};
        row-gap: ${RadioGroup.RadioStackVertical.ItemSpacing.LG};
      }
    }

    
    

    .blr-radio {
      _FIX_: To override constructed margin;
      all: initial;
      margin: 0 !important;

      display: flex;
      flex-grow: 1;
      transition: all 0.25s ease 0s;

      .blr-form-label-inline {
        _FIX?_: "LabelNextToControl states";
        color: ${LabelNextToControl.Rest};
        transition: all 0.25s ease 0s;
        display: flex;
        align-items: center;
      }

      .input-control {
        position: relative;
        transition: all 0.25s ease 0s;
        appearance: none;
        margin: 0;
        border-radius: ${Radio.Control.Container.BorderRadius};
        display: grid;
        place-content: center;

        &::before {
          content: "";
          transition: all 0.25s ease 0s;
          border-radius: ${Radio.Control.Container.BorderRadius};
        }
      }

      .label-wrapper {
        display: flex;
        flex-direction: column;

        .caption-wrapper {
          flex-basis: 100%;

          .blr-form-caption {
            gap: 0;
          }
        }
      }


      &.sm {
        gap: ${Radio.ContentRow.ItemSpacing.SM};
        padding: ${Radio.ContentRow.Padding.SM};

        .input-control {
          margin-top: ${Radio.ControlWrapper.PaddingTop.SM};
        }

        .label-wrapper {
          padding-top: ${Radio.ContentCol.PaddingTop.SM};
          gap: ${Radio.ContentCol.ItemSpacing.SM};

          .caption-wrapper {
            padding: ${SM.CaptionComponent.Padding};
            gap: ${SM.CaptionComponent.ItemSpacing};
          }

          .blr-form-label-inline {
            font-family: ${SM.LabelNextToControl.fontFamily}, sans-serif;
            font-weight: ${SM.LabelNextToControl.fontWeight};
            line-height: ${SM.LabelNextToControl.lineHeight};
            font-size: ${SM.LabelNextToControl.fontSize};
          }
        }
      }

      &.md {
        gap: ${Radio.ContentRow.ItemSpacing.MD};
        padding: ${Radio.ContentRow.Padding.MD};

        .input-control {
          margin-top: ${Radio.ControlWrapper.PaddingTop.MD};
        }

        .label-wrapper {
          padding-top: ${Radio.ContentCol.PaddingTop.MD};
          gap: ${Radio.ContentCol.ItemSpacing.MD};

          .caption-wrapper {
            padding: ${MD.CaptionComponent.Padding};
            gap: ${MD.CaptionComponent.ItemSpacing};
          }

          .blr-form-label-inline {
            font-family: ${MD.LabelNextToControl.fontFamily}, sans-serif;
            font-weight: ${MD.LabelNextToControl.fontWeight};
            line-height: ${MD.LabelNextToControl.lineHeight};
            font-size: ${MD.LabelNextToControl.fontSize};
          }
        }
      }

      &.lg {
        gap: ${Radio.ContentRow.ItemSpacing.LG};
        padding: ${Radio.ContentRow.Padding.LG};

        .input-control {
          margin-top: ${Radio.ControlWrapper.PaddingTop.LG};
        }

        .label-wrapper {
          padding-top: ${Radio.ContentCol.PaddingTop.LG};
          gap: ${Radio.ContentCol.ItemSpacing.LG};

          .caption-wrapper {
            padding: ${LG.CaptionComponent.Padding};
            gap: ${LG.CaptionComponent.ItemSpacing};
          }

          .blr-form-label-inline {
            font-family: ${LG.LabelNextToControl.fontFamily}, sans-serif;
            font-weight: ${LG.LabelNextToControl.fontWeight};
            line-height: ${LG.LabelNextToControl.lineHeight};
            font-size: ${LG.LabelNextToControl.fontSize};
          }
        }
      }



      .input-control {
        background-color: ${Radio.Control.Container.BackgroundColor.Inactive.Rest};
        width: ${Radio.Control.Container.Size.SM};
        min-width: ${Radio.Control.Container.Size.SM};
        height: ${Radio.Control.Container.Size.SM};
        min-height: ${Radio.Control.Container.Size.SM};

        &::before {
          background-color: ${Radio.Control.Icon.IconColor.Inactive.Rest};
          width: ${Radio.Control.Icon.IconSize.SM.Inactive.Rest};
          height: ${Radio.Control.Icon.IconSize.SM.Inactive.Rest};
        }

        &:not(.disabled):not(.readonly) {
          &:hover {
            background-color: ${Radio.Control.Container.BackgroundColor.Inactive.Hover};
            &::before {
              content: "";
              background-color: ${Radio.Control.Icon.IconColor.Inactive.Hover};
              width: ${Radio.Control.Icon.IconSize.SM.Inactive.Hover};
              height: ${Radio.Control.Icon.IconSize.SM.Inactive.Hover};
            }

            & + .label-wrapper {
              .blr-form-label-inline {
                color: ${LabelNextToControl.Hover};
              }
            }
          }
        

          &:active {
          
            background-color: ${Radio.Control.Container.BackgroundColor.Inactive.Pressed};

            &::before {
              content: "";
              background-color: ${Radio.Control.Icon.IconColor.Inactive.Pressed};

              width: ${Radio.Control.Icon.IconSize.SM.Inactive.Pressed};
              height: ${Radio.Control.Icon.IconSize.SM.Inactive.Pressed};
            }

            & + .label-wrapper {
              .blr-form-label-inline {
                color: ${LabelNextToControl.Pressed};
              }
            }
          }
        }

        &:focus {
          background-color: ${Radio.Control.Container.BackgroundColor.Inactive.Focus};
          _FIX_: "needs focus ring";
          outline: black solid 2px;
          outline-offset: 2px;

          &::before {
            content: "";
            background-color: ${Radio.Control.Icon.IconColor.Inactive.Focus};
            width: ${Radio.Control.Icon.IconSize.SM.Inactive.Focus};
            height: ${Radio.Control.Icon.IconSize.SM.Inactive.Focus};
          }

          & + .label-wrapper {
            .blr-form-label-inline {
              color: ${LabelNextToControl.Focus};
            }
          }
        }


        &.checked, &:checked {
          background-color: ${Radio.Control.Container.BackgroundColor.Active.Rest};

          &::before {
            content: "";
            background-color: ${Radio.Control.Icon.IconColor.Active.Rest};
            width: ${Radio.Control.Icon.IconSize.SM.Active.Rest};
            height: ${Radio.Control.Icon.IconSize.SM.Active.Rest};
          }

          &:not(.disabled):not(.readonly) {
            
            &:hover {
              background-color: ${Radio.Control.Container.BackgroundColor.Active.Hover};

              &::before {
                content: "";
                background-color: ${Radio.Control.Icon.IconColor.Active.Hover};
                width: ${Radio.Control.Icon.IconSize.SM.Active.Hover};
                height: ${Radio.Control.Icon.IconSize.SM.Active.Hover};

              }
            }
          

            &:active {
              background-color: ${Radio.Control.Container.BackgroundColor.Active.Pressed};
              
              &::before {
                content: "";
                background-color: ${Radio.Control.Icon.IconColor.Active.Pressed};
                width: ${Radio.Control.Icon.IconSize.SM.Active.Pressed};
                height: ${Radio.Control.Icon.IconSize.SM.Active.Pressed};
              }
            }
          }

          &:disabled {
            background-color: ${Radio.Control.Container.BackgroundColor.Active.Disabled};

            &::before {
              content: "";
              background-color: ${Radio.Control.Icon.IconColor.Active.Disabled};
              width: ${Radio.Control.Icon.IconSize.SM.Active.Disabled};
              height: ${Radio.Control.Icon.IconSize.SM.Active.Disabled};
            }
          }

          &[readonly] {
            background-color: ${Radio.Control.Container.BackgroundColor.Active.ReadOnly};

            &::before {
              content: "";
              background-color: ${Radio.Control.Icon.IconColor.Active.ReadOnly};
              width: ${Radio.Control.Icon.IconSize.SM.Active.ReadOnly};
              height: ${Radio.Control.Icon.IconSize.SM.Active.ReadOnly};
            }
          }
        }

        &:disabled {
          cursor: not-allowed;
          background-color: ${Radio.Control.Container.BackgroundColor.Inactive.Disabled};
         
          &::before {
            content: "";
            background-color: ${Radio.Control.Icon.IconColor.Inactive.Disabled};
            width: ${Radio.Control.Icon.IconSize.SM.Inactive.Disabled};
            height: ${Radio.Control.Icon.IconSize.SM.Inactive.Disabled};
          }

          & + .label-wrapper {
            .blr-form-label-inline {
              cursor: not-allowed;
              color: ${LabelNextToControl.Disabled};
            }
          }
        }
      }

      &.error {
        .input-control {
          background-color: ${Radio.Control.Container.BackgroundColor.Inactive.Error};

          &::before {
            background-color: ${Radio.Control.Icon.IconColor.Inactive.Error};
            width: ${Radio.Control.Icon.IconSize.SM.Inactive.Error};
            height: ${Radio.Control.Icon.IconSize.SM.Inactive.Error};
          }

          & + .label-wrapper {
            .blr-form-label-inline {
              color: ${LabelNextToControl.Error};
            }
          }

          &.checked,
          &:checked {
            &::before {
              width: ${Radio.Control.Icon.IconSize.SM.Active.Error};
              height: ${Radio.Control.Icon.IconSize.SM.Active.Error};
            }
          }
        }
      }





      &.disabled {
        .input-control {
          background-color: ${Radio.Control.Container.BackgroundColor.Inactive.Disabled};
          width: ${Radio.Control.Container.Size.SM};
          height: ${Radio.Control.Container.Size.SM};

          &::before {
            content: "";
            background-color: ${Radio.Control.Icon.IconColor.Inactive.Disabled};
            width: ${Radio.Control.Icon.IconSize.SM.Inactive.Rest};
            height: ${Radio.Control.Icon.IconSize.SM.Inactive.Rest};
          }

          & + .label-wrapper {
            .blr-form-label-inline {
              color: ${LabelNextToControl.Disabled};
            }
          }
        }
      }

      &.readonly {
        .input-control {
          background-color: ${Radio.Control.Container.BackgroundColor.Inactive.ReadOnly};
          width: ${Radio.Control.Icon.IconSize.SM.Inactive.ReadOnly};
          height: ${Radio.Control.Icon.IconSize.SM.Inactive.ReadOnly};

          &::before {
            content: "";
            background-color: ${Radio.Control.Icon.IconColor.Inactive.ReadOnly};
            width: ${Radio.Control.Icon.IconSize.SM.Inactive.ReadOnly};
            height: ${Radio.Control.Icon.IconSize.SM.Inactive.ReadOnly};
          }

          & + .label-wrapper {
            .blr-form-label-inline {
              color: ${LabelNextToControl.ReadOnly};
            }
          }
        }
      }

      .blr-form-caption {
        margin-top: 0;

        &.sm {
          padding: ${SM.CaptionComponent.CaptionLabelWrapper.Padding};
          font-family: ${SM.Caption.fontFamily}, sans-serif;
          font-size: ${SM.Caption.fontSize};
        }

        &.md {
          padding: ${MD.CaptionComponent.CaptionLabelWrapper.Padding};
          font-family: ${MD.Caption.fontFamily}, sans-serif;
          font-size: ${MD.Caption.fontSize};
        }

        &.lg {
          padding: ${LG.CaptionComponent.CaptionLabelWrapper.Padding};
          font-family: ${LG.Caption.fontFamily}, sans-serif;
          font-size: ${LG.Caption.fontSize};
        }
      }
    }
  `;
});
