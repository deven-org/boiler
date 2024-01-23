import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: radioLight, tokenizedDark: radioDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { SM, MD, LG, Legend } = semanticTokens.Forms;
  const { Radio, RadioGroup, FormLabel, CaptionComponent } = componentTokens.Forms;

  /* ToDos:

  - [ ] seperate radio/radio group css and move them to their component folders
  - [ ] Fix margin of caption-group
  - [ ] Prevent click in readOnly
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
        color: ${FormLabel.InlineLabel.TextColor.Rest};
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
            padding: ${CaptionComponent.Container.Padding.SM};
            gap: ${CaptionComponent.Container.ItemSpacing.SM};
          }

          .blr-form-label-inline {
            font-family: ${FormLabel.InlineLabel.Typography.SM.fontFamily}, sans-serif;
            font-weight: ${FormLabel.InlineLabel.Typography.SM.fontWeight};
            line-height: ${FormLabel.InlineLabel.Typography.SM.lineHeight};
            font-size: ${FormLabel.InlineLabel.Typography.SM.fontSize};
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
            padding: ${CaptionComponent.Container.Padding.MD};
            gap: ${CaptionComponent.Container.ItemSpacing.MD};
          }

          .blr-form-label-inline {
            font-family: ${FormLabel.InlineLabel.Typography.MD.fontFamily}, sans-serif;
            font-weight: ${FormLabel.InlineLabel.Typography.MD.fontWeight};
            line-height: ${FormLabel.InlineLabel.Typography.MD.lineHeight};
            font-size: ${FormLabel.InlineLabel.Typography.MD.fontSize};
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
            padding: ${CaptionComponent.Container.Padding.LG};
            gap: ${CaptionComponent.Container.ItemSpacing.LG};
          }

          .blr-form-label-inline {
            font-family: ${FormLabel.InlineLabel.Typography.LG.fontFamily}, sans-serif;
            font-weight: ${FormLabel.InlineLabel.Typography.LG.fontWeight};
            line-height: ${FormLabel.InlineLabel.Typography.LG.lineHeight};
            font-size: ${FormLabel.InlineLabel.Typography.LG.fontSize};
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
                  color: ${FormLabel.InlineLabel.TextColor.Hover};
                }
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
                  color: ${FormLabel.InlineLabel.TextColor.Pressed};
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
                color: ${FormLabel.InlineLabel.TextColor.Focus};
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
                color: ${FormLabel.InlineLabel.TextColor.Disabled};
              }
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
              color: ${FormLabel.InlineLabel.TextColor.Error};
            }
          }

          &.checked,
          &:checked {
            &::before {
              width: ${Radio.Control.Icon.IconSize.SM.Active.Error};
              height: ${Radio.Control.Icon.IconSize.SM.Active.Error};
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
              color: ${FormLabel.InlineLabel.TextColor.Disabled};
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
              color: ${FormLabel.InlineLabel.TextColor.ReadOnly};
            }
          }
        }
      }

      .blr-form-caption {
        margin-top: 0;

        &.sm {
          padding: ${CaptionComponent.TextWrapper.Padding.SM};
          font-family: ${CaptionComponent.Text.Typography.SM.fontFamily}, sans-serif;
          font-size: ${CaptionComponent.Text.Typography.SM.fontSize};
          line-height: ${CaptionComponent.Text.Typography.SM.lineHeight};
        }

        &.md {
          padding: ${CaptionComponent.TextWrapper.Padding.MD};
          font-family: ${CaptionComponent.Text.Typography.MD.fontFamily}, sans-serif;
          font-size: ${CaptionComponent.Text.Typography.MD.fontSize};
          line-height: ${CaptionComponent.Text.Typography.MD.lineHeight};
        }

        &.lg {
          padding: ${CaptionComponent.TextWrapper.Padding.LG};
          font-family: ${CaptionComponent.Text.Typography.LG.fontFamily}, sans-serif;
          font-size: ${CaptionComponent.Text.Typography.LG.fontSize};
          line-height: ${CaptionComponent.Text.Typography.LG.lineHeight};
        }
      }
    }
  `;
});
