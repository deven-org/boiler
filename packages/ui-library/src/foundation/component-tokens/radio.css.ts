import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

import { ComponentThemeIterator } from "../_tokens-generated/index.pseudo.generated.js";

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

export const staticStyles = css`
  ${ComponentThemeIterator((theme, cmp, css) => {
    const { radio, radiogroup, formlabel, formcaption } = cmp;

    return css`
      .blr-legend-wrapper.${theme} {
        &.sm {
          padding-bottom: ${radiogroup.legendwrapper.paddingbottom.sm};
        }

        &.md {
          padding-bottom: ${radiogroup.legendwrapper.paddingbottom.md};
        }

        &.lg {
          padding-bottom: ${radiogroup.legendwrapper.paddingbottom.lg};
        }

        .blr-legend {
          ${
            // to override constructed css
            ""
          }
          margin: 0 !important;
          color: ${radiogroup.legend.textcolor.default};

          &.sm {
            font-weight: ${radiogroup.legend.sm.fontWeight};
            font-size: ${radiogroup.legend.sm.fontSize};
            font-family: ${radiogroup.legend.sm.fontFamily}, sans-serif;
            line-height: ${radiogroup.legend.sm.lineHeight};
          }

          &.md {
            font-weight: ${radiogroup.legend.md.fontWeight};
            font-size: ${radiogroup.legend.md.fontSize};
            font-family: ${radiogroup.legend.md.fontFamily}, sans-serif;
            line-height: ${radiogroup.legend.md.lineHeight};
          }

          &.lg {
            font-weight: ${radiogroup.legend.lg.fontWeight};
            font-size: ${radiogroup.legend.lg.fontSize};
            font-family: ${radiogroup.legend.lg.fontFamily}, sans-serif;
            line-height: ${radiogroup.legend.lg.lineHeight};
          }

          &.error {
            color: ${radiogroup.legend.textcolor.error};
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
          padding-top: ${radiogroup.captionslot.paddingtop.sm};
        }

        &.md {
          ${
            // Can be merged with the .caption-group above
            ""
          }
          padding-top: ${radiogroup.captionslot.paddingtop.md};
        }

        &.lg {
          ${
            // Can be merged with the .caption-group above
            ""
          }
          padding-top: ${radiogroup.captionslot.paddingtop.lg};
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
          column-gap: ${radiogroup.radiostackhorizontal.itemspacing.sm};
          row-gap: ${radiogroup.radiostackvertical.itemspacing.sm};
        }

        &.md {
          _FIX_: "We need to differentiate between horizontal and vertical gaps, but this seems all wrong anyhow";
          column-gap: ${radiogroup.radiostackhorizontal.itemspacing.md};
          row-gap: ${radiogroup.radiostackvertical.itemspacing.md};
        }

        &.lg {
          _FIX_: "We need to differentiate between horizontal and vertical gaps, but this seems all wrong anyhow";
          column-gap: ${radiogroup.radiostackhorizontal.itemspacing.lg};
          row-gap: ${radiogroup.radiostackvertical.itemspacing.lg};
        }
      }

      .blr-radio.${theme} {
        /* FIX: to override constructed margin; */
        all: initial;
        margin: 0 !important;
        display: flex;
        flex-grow: 1;
        transition: all 0.25s ease 0s;

        .blr-form-label-inline {
          /* FIX?: "LabelNextToControl states"; */
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
          border-radius: ${radio.control.container.borderradius};
          display: grid;
          place-content: center;

          &::before {
            content: "";
            transition: all 0.25s ease 0s;
            border-radius: ${radio.control.container.borderradius};
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
          gap: ${radio.contentrow.itemspacing.sm};
          padding: ${radio.contentrow.padding.sm};

          .input-control {
            margin-top: ${radio.controlwrapper.paddingtop.sm};
          }

          .label-wrapper {
            padding-top: ${radio.contentcol.paddingtop.sm};
            gap: ${radio.contentcol.itemspacing.sm};

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
          gap: ${radio.contentrow.itemspacing.md};
          padding: ${radio.contentrow.padding.md};

          .input-control {
            margin-top: ${radio.controlwrapper.paddingtop.md};
          }

          .label-wrapper {
            padding-top: ${radio.contentcol.paddingtop.md};
            gap: ${radio.contentcol.itemspacing.md};

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
          gap: ${radio.contentrow.itemspacing.lg};
          padding: ${radio.contentrow.padding.lg};

          .input-control {
            margin-top: ${radio.controlwrapper.paddingtop.lg};
          }

          .label-wrapper {
            padding-top: ${radio.contentcol.paddingtop.lg};
            gap: ${radio.contentcol.itemspacing.lg};

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
          background-color: ${radio.control.container.bgcolor.inactive.rest};
          width: ${radio.control.container.size.sm};
          min-width: ${radio.control.container.size.sm};
          height: ${radio.control.container.size.sm};
          min-height: ${radio.control.container.size.sm};

          &::before {
            background-color: ${radio.control.icon.iconcolor.inactive.rest};
            width: ${radio.control.icon.iconsize.sm.inactive.rest};
            height: ${radio.control.icon.iconsize.sm.inactive.rest};
          }

          &:not(.disabled, .readonly) {
            &:hover {
              background-color: ${radio.control.container.bgcolor.inactive.hover};

              &::before {
                content: "";
                background-color: ${radio.control.icon.iconcolor.inactive.hover};
                width: ${radio.control.icon.iconsize.sm.inactive.hover};
                height: ${radio.control.icon.iconsize.sm.inactive.hover};
              }

              & + .label-wrapper {
                .blr-form-label-inline {
                  color: ${formlabel.inlinelabel.textcolor.hover};
                }
              }
            }

            &:active {
              background-color: ${radio.control.container.bgcolor.inactive.pressed};

              &::before {
                content: "";
                background-color: ${radio.control.icon.iconcolor.inactive.pressed};
                width: ${radio.control.icon.iconsize.sm.inactive.pressed};
                height: ${radio.control.icon.iconsize.sm.inactive.pressed};
              }

              & + .label-wrapper {
                .blr-form-label-inline {
                  color: ${formlabel.inlinelabel.textcolor.pressed};
                }
              }
            }

            &:focus {
              background-color: ${radio.control.container.bgcolor.inactive.focus};
              _FIX_: "needs focus ring";

              outline: black solid 2px;
              outline-offset: 2px;

              &::before {
                content: "";
                background-color: ${radio.control.icon.iconcolor.inactive.focus};
                width: ${radio.control.icon.iconsize.sm.inactive.focus};
                height: ${radio.control.icon.iconsize.sm.inactive.focus};
              }

              & + .label-wrapper {
                .blr-form-label-inline {
                  color: ${formlabel.inlinelabel.textcolor.focus};
                }
              }
            }
          }

          &.checked, 
          &:checked {
            background-color: ${radio.control.container.bgcolor.active.rest};

            &::before {
              content: "";
              background-color: ${radio.control.icon.iconcolor.active.rest};
              width: ${radio.control.icon.iconsize.sm.active.rest};
              height: ${radio.control.icon.iconsize.sm.active.rest};
            }

            &:not(.disabled, .readonly) {
              &:hover {
                background-color: ${radio.control.container.bgcolor.active.hover};

                &::before {
                  content: "";
                  background-color: ${radio.control.icon.iconcolor.active.hover};
                  width: ${radio.control.icon.iconsize.sm.active.hover};
                  height: ${radio.control.icon.iconsize.sm.active.hover};
                }
              }

              &:active {
                background-color: ${radio.control.container.bgcolor.active.pressed};

                &::before {
                  content: "";
                  background-color: ${radio.control.icon.iconcolor.active.pressed};
                  width: ${radio.control.icon.iconsize.sm.active.pressed};
                  height: ${radio.control.icon.iconsize.sm.active.pressed};
                }
              }

              &:focus {
                background-color: ${radio.control.container.bgcolor.active.focus};

                &::before {
                  content: "";
                  background-color: ${radio.control.icon.iconcolor.active.focus};
                  width: ${radio.control.icon.iconsize.sm.active.focus};
                  height: ${radio.control.icon.iconsize.sm.active.focus};
                }
              }
            }

            &:disabled {
              background-color: ${radio.control.container.bgcolor.active.disabled};

              &::before {
                content: "";
                background-color: ${radio.control.icon.iconcolor.active.disabled};
                width: ${radio.control.icon.iconsize.sm.active.disabled};
                height: ${radio.control.icon.iconsize.sm.active.disabled};
              }
            }

            &[readonly] {
              background-color: ${radio.control.container.bgcolor.active.readonly};

              &::before {
                content: "";
                background-color: ${radio.control.icon.iconcolor.active.readonly};
                width: ${radio.control.icon.iconsize.sm.active.readonly};
                height: ${radio.control.icon.iconsize.sm.active.readonly};
              }
            }
          }

          &:disabled {
            cursor: not-allowed;
            background-color: ${radio.control.container.bgcolor.inactive.disabled};

            &::before {
              content: "";
              background-color: ${radio.control.icon.iconcolor.inactive.disabled};
              width: ${radio.control.icon.iconsize.sm.inactive.disabled};
              height: ${radio.control.icon.iconsize.sm.inactive.disabled};
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
            background-color: ${radio.control.container.bgcolor.inactive.error};

            &::before {
              background-color: ${radio.control.icon.iconcolor.inactive.error};
              width: ${radio.control.icon.iconsize.sm.inactive.error};
              height: ${radio.control.icon.iconsize.sm.inactive.error};
            }

            & + .label-wrapper {
              .blr-form-label-inline {
                color: ${formlabel.inlinelabel.textcolor.error};
              }
            }

            &.checked,
            &:checked {
              &::before {
                width: ${radio.control.icon.iconsize.sm.active.error};
                height: ${radio.control.icon.iconsize.sm.active.error};
              }
            }

            &.checked,
            &:checked {
              &::before {
                width: ${radio.control.icon.iconsize.sm.active.error};
                height: ${radio.control.icon.iconsize.sm.active.error};
              }
            }
          }
        }

        &.disabled {
          pointer-events: none;

          .input-control {
            background-color: ${radio.control.container.bgcolor.inactive.disabled};
            width: ${radio.control.container.size.sm};
            height: ${radio.control.container.size.sm};

            &::before {
              content: "";
              background-color: ${radio.control.icon.iconcolor.inactive.disabled};
              width: ${radio.control.icon.iconsize.sm.inactive.rest};
              height: ${radio.control.icon.iconsize.sm.inactive.rest};
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
            background-color: ${radio.control.container.bgcolor.inactive.readonly};
            width: ${radio.control.icon.iconsize.sm.inactive.readonly};
            height: ${radio.control.icon.iconsize.sm.inactive.readonly};

            &::before {
              content: "";
              background-color: ${radio.control.icon.iconcolor.inactive.readonly};
              width: ${radio.control.icon.iconsize.sm.inactive.readonly};
              height: ${radio.control.icon.iconsize.sm.inactive.readonly};
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
