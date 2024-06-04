import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

import { ComponentThemeIterator } from "../_tokens-generated/index.pseudo.generated";

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

export const staticStyles = typeSafeNestedCss/*css*/ `
  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { Radio, RadioGroup, formlabel, formcaption } = cmp;

    return typeSafeCss/*css*/ `
      .blr-legend-wrapper.${theme} {
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
          ${
            // to override constructed css
            ""
          }
          margin: 0 !important;
          color: ${RadioGroup.Legend.textcolor.default};

          &.sm {
            font-weight: ${RadioGroup.Legend.SM.fontWeight};
            font-size: ${RadioGroup.Legend.SM.fontSize};
            font-family: ${RadioGroup.Legend.SM.fontFamily}, sans-serif;
            line-height: ${RadioGroup.Legend.SM.lineHeight};
          }
    
          &.md {
            font-weight: ${RadioGroup.Legend.MD.fontWeight};
            font-size: ${RadioGroup.Legend.MD.fontSize};
            font-family: ${RadioGroup.Legend.MD.fontFamily}, sans-serif;
            line-height: ${RadioGroup.Legend.MD.lineHeight};
          }
    
          &.lg {
            font-weight: ${RadioGroup.Legend.LG.fontWeight};
            font-size: ${RadioGroup.Legend.LG.fontSize};
            font-family: ${RadioGroup.Legend.LG.fontFamily}, sans-serif;
            line-height: ${RadioGroup.Legend.LG.lineHeight};
          }
    
          &.error {
            color: ${RadioGroup.Legend.textcolor.error};
          }
        }
      }

      .caption-group.${theme} {
        ${
          // To override constructed margin
          ""
        }
        all: initial;
        margin: 0;
      
        &.sm {
          ${
            // Can be merged with the .caption-group above
            ""
          }
          padding-top: ${RadioGroup.CaptionSlot.PaddingTop.SM};
        }

        &.md {
          ${
            // Can be merged with the .caption-group above
            ""
          }
          padding-top: ${RadioGroup.CaptionSlot.PaddingTop.MD};
        }

        &.lg {
          ${
            // Can be merged with the .caption-group above
            ""
          }
          padding-top: ${RadioGroup.CaptionSlot.PaddingTop.LG};
        }
      }

      .blr-radio-group.${theme} {
        display: flex;
        align-items: flex-start;
        position: relative;
        flex-flow: nowrap;
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

      .blr-radio.${theme} {
        _FIX_: To override constructed margin;
        all: initial;
        margin: 0 !important;
        display: flex;
        flex-grow: 1;
        transition: all 0.25s ease 0s;

        .blr-form-label-inline {
          _FIX?_: "LabelNextToControl states";
          color: ${formlabel.inlinelabel.textcolor.rest};
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
              padding: ${formcaption.container.padding.sm};
              gap: ${formcaption.container.itemspacing.sm};
            }

            .blr-form-label-inline {
              font-family: ${formlabel.inlinelabel.typography.sm.fontFamily}, sans-serif;
              font-weight: ${formlabel.inlinelabel.typography.sm.fontWeight};
              line-height: ${formlabel.inlinelabel.typography.sm.lineHeight};
              font-size: ${formlabel.inlinelabel.typography.sm.fontSize};
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
              padding: ${formcaption.container.padding.md};
              gap: ${formcaption.container.itemspacing.md};
            }

            .blr-form-label-inline {
              font-family: ${formlabel.inlinelabel.typography.md.fontFamily}, sans-serif;
              font-weight: ${formlabel.inlinelabel.typography.md.fontWeight};
              line-height: ${formlabel.inlinelabel.typography.md.lineHeight};
              font-size: ${formlabel.inlinelabel.typography.md.fontSize};
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
              padding: ${formcaption.container.padding.lg};
              gap: ${formcaption.container.itemspacing.lg};
            }

            .blr-form-label-inline {
              font-family: ${formlabel.inlinelabel.typography.lg.fontFamily}, sans-serif;
              font-weight: ${formlabel.inlinelabel.typography.lg.fontWeight};
              line-height: ${formlabel.inlinelabel.typography.lg.lineHeight};
              font-size: ${formlabel.inlinelabel.typography.lg.fontSize};
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
                  color: ${formlabel.inlinelabel.textcolor.hover};
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
                  color: ${formlabel.inlinelabel.textcolor.pressed};
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
                  color: ${formlabel.inlinelabel.textcolor.focus};
                }
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

              &:focus {
                background-color: ${Radio.Control.Container.BackgroundColor.Active.Focus};
                
                &::before {
                  content: "";
                  background-color: ${Radio.Control.Icon.IconColor.Active.Focus};
                  width: ${Radio.Control.Icon.IconSize.SM.Active.Focus};
                  height: ${Radio.Control.Icon.IconSize.SM.Active.Focus};
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
                color: ${formlabel.inlinelabel.textcolor.disabled};
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
                color: ${formlabel.inlinelabel.textcolor.error};
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
          pointer-events: none;

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
                color: ${formlabel.inlinelabel.textcolor.disabled};
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
                color: ${formlabel.inlinelabel.textcolor.readonly};
              }
            }
          }
        }

        .blr-form-caption {
          margin-top: 0;

          &.sm {
            padding: ${formcaption.textwrapper.padding.sm};
            font-family: ${formcaption.text.typography.sm.fontFamily}, sans-serif;
            font-size: ${formcaption.text.typography.sm.fontSize};
            line-height: ${formcaption.text.typography.sm.lineHeight};
          }

          &.md {
            padding: ${formcaption.textwrapper.padding.md};
            font-family: ${formcaption.text.typography.md.fontFamily}, sans-serif;
            font-size: ${formcaption.text.typography.md.fontSize};
            line-height: ${formcaption.text.typography.md.lineHeight};
          }

          &.lg {
            padding: ${formcaption.textwrapper.padding.lg};
            font-family: ${formcaption.text.typography.lg.fontFamily}, sans-serif;
            font-size: ${formcaption.text.typography.lg.fontSize};
            line-height: ${formcaption.text.typography.lg.lineHeight};
          }
        }
      }
    `;
  })}
`;
