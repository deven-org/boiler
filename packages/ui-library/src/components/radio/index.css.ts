import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";

export const staticStyles = css`
  ${ComponentThemeIterator((theme, cmp, css) => {
    const { radio, formlabel, formcaption } = cmp;

    return css`
      .blr-radio.${theme} {
        all: initial;
        margin: 0 !important;
        display: flex;
        flex-grow: 1;
        transition: all 0.25s ease 0s;

        .blr-form-label-inline {
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

          &:not(.disabled) {
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

            &:not(.disabled) {
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
