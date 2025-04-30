import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

import { ComponentThemeIterator, SemanticThemeIterator } from "../../foundation/_tokens-generated/iterator.generated.js";

export const staticStyles = css`
  ${ComponentThemeIterator((theme, cmp, css) => {
    const { radio, formlabel, formcaption } = cmp;

    return css`
      .blr-radio.${theme} {
        all: initial;
        margin: 0 !important;
        max-width: 100%;
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
              }

              &:active {
                background-color: ${radio.control.container.bgcolor.inactive.pressed};

                &::before {
                  content: "";
                  background-color: ${radio.control.icon.iconcolor.inactive.pressed};
                  width: ${radio.control.icon.iconsize.sm.inactive.pressed};
                  height: ${radio.control.icon.iconsize.sm.inactive.pressed};
                }
              }

              &:focus:not(:active) {
                background-color: ${radio.control.container.bgcolor.inactive.focus};

                &::before {
                  content: "";
                  background-color: ${radio.control.icon.iconcolor.inactive.focus};
                  width: ${radio.control.icon.iconsize.sm.inactive.focus};
                  height: ${radio.control.icon.iconsize.sm.inactive.focus};
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

                &:focus:not(:active) {
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
            }
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
            background-color: ${radio.control.container.bgcolor.inactive.rest};
            width: ${radio.control.container.size.md};
            min-width: ${radio.control.container.size.md};
            height: ${radio.control.container.size.md};
            min-height: ${radio.control.container.size.md};

            &::before {
              background-color: ${radio.control.icon.iconcolor.inactive.rest};
              width: ${radio.control.icon.iconsize.md.inactive.rest};
              height: ${radio.control.icon.iconsize.md.inactive.rest};
            }

            &:not(.disabled) {
              &:hover {
                background-color: ${radio.control.container.bgcolor.inactive.hover};

                &::before {
                  content: "";
                  background-color: ${radio.control.icon.iconcolor.inactive.hover};
                  width: ${radio.control.icon.iconsize.md.inactive.hover};
                  height: ${radio.control.icon.iconsize.md.inactive.hover};
                }
              }

              &:active {
                background-color: ${radio.control.container.bgcolor.inactive.pressed};

                &::before {
                  content: "";
                  background-color: ${radio.control.icon.iconcolor.inactive.pressed};
                  width: ${radio.control.icon.iconsize.md.inactive.pressed};
                  height: ${radio.control.icon.iconsize.md.inactive.pressed};
                }
              }

              &:focus:not(:active) {
                background-color: ${radio.control.container.bgcolor.inactive.focus};

                &::before {
                  content: "";
                  background-color: ${radio.control.icon.iconcolor.inactive.focus};
                  width: ${radio.control.icon.iconsize.md.inactive.focus};
                  height: ${radio.control.icon.iconsize.md.inactive.focus};
                }
              }
            }

            &.checked,
            &:checked {
              background-color: ${radio.control.container.bgcolor.active.rest};

              &::before {
                content: "";
                background-color: ${radio.control.icon.iconcolor.active.rest};
                width: ${radio.control.icon.iconsize.md.active.rest};
                height: ${radio.control.icon.iconsize.md.active.rest};
              }

              &:not(.disabled) {
                &:hover {
                  background-color: ${radio.control.container.bgcolor.active.hover};

                  &::before {
                    content: "";
                    background-color: ${radio.control.icon.iconcolor.active.hover};
                    width: ${radio.control.icon.iconsize.md.active.hover};
                    height: ${radio.control.icon.iconsize.md.active.hover};
                  }
                }

                &:active {
                  background-color: ${radio.control.container.bgcolor.active.pressed};

                  &::before {
                    content: "";
                    background-color: ${radio.control.icon.iconcolor.active.pressed};
                    width: ${radio.control.icon.iconsize.md.active.pressed};
                    height: ${radio.control.icon.iconsize.md.active.pressed};
                  }
                }

                &:focus:not(:active) {
                  background-color: ${radio.control.container.bgcolor.active.focus};

                  &::before {
                    content: "";
                    background-color: ${radio.control.icon.iconcolor.active.focus};
                    width: ${radio.control.icon.iconsize.md.active.focus};
                    height: ${radio.control.icon.iconsize.md.active.focus};
                  }
                }
              }

              &:disabled {
                background-color: ${radio.control.container.bgcolor.active.disabled};

                &::before {
                  content: "";
                  background-color: ${radio.control.icon.iconcolor.active.disabled};
                  width: ${radio.control.icon.iconsize.md.active.disabled};
                  height: ${radio.control.icon.iconsize.md.active.disabled};
                }
              }
            }

            &:disabled {
              cursor: not-allowed;
              background-color: ${radio.control.container.bgcolor.inactive.disabled};

              &::before {
                content: "";
                background-color: ${radio.control.icon.iconcolor.inactive.disabled};
                width: ${radio.control.icon.iconsize.md.inactive.disabled};
                height: ${radio.control.icon.iconsize.md.inactive.disabled};
              }
            }
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
            background-color: ${radio.control.container.bgcolor.inactive.rest};
            width: ${radio.control.container.size.lg};
            min-width: ${radio.control.container.size.lg};
            height: ${radio.control.container.size.lg};
            min-height: ${radio.control.container.size.lg};

            &::before {
              background-color: ${radio.control.icon.iconcolor.inactive.rest};
              width: ${radio.control.icon.iconsize.lg.inactive.rest};
              height: ${radio.control.icon.iconsize.lg.inactive.rest};
            }

            &:not(.disabled) {
              &:hover {
                background-color: ${radio.control.container.bgcolor.inactive.hover};

                &::before {
                  content: "";
                  background-color: ${radio.control.icon.iconcolor.inactive.hover};
                  width: ${radio.control.icon.iconsize.lg.inactive.hover};
                  height: ${radio.control.icon.iconsize.lg.inactive.hover};
                }
              }

              &:active {
                background-color: ${radio.control.container.bgcolor.inactive.pressed};

                &::before {
                  content: "";
                  background-color: ${radio.control.icon.iconcolor.inactive.pressed};
                  width: ${radio.control.icon.iconsize.lg.inactive.pressed};
                  height: ${radio.control.icon.iconsize.lg.inactive.pressed};
                }
              }

              &:focus:not(:active) {
                background-color: ${radio.control.container.bgcolor.inactive.focus};

                &::before {
                  content: "";
                  background-color: ${radio.control.icon.iconcolor.inactive.focus};
                  width: ${radio.control.icon.iconsize.lg.inactive.focus};
                  height: ${radio.control.icon.iconsize.lg.inactive.focus};
                }
              }
            }

            &.checked,
            &:checked {
              background-color: ${radio.control.container.bgcolor.active.rest};

              &::before {
                content: "";
                background-color: ${radio.control.icon.iconcolor.active.rest};
                width: ${radio.control.icon.iconsize.lg.active.rest};
                height: ${radio.control.icon.iconsize.lg.active.rest};
              }

              &:not(.disabled) {
                &:hover {
                  background-color: ${radio.control.container.bgcolor.active.hover};

                  &::before {
                    content: "";
                    background-color: ${radio.control.icon.iconcolor.active.hover};
                    width: ${radio.control.icon.iconsize.lg.active.hover};
                    height: ${radio.control.icon.iconsize.lg.active.hover};
                  }
                }

                &:active {
                  background-color: ${radio.control.container.bgcolor.active.pressed};

                  &::before {
                    content: "";
                    background-color: ${radio.control.icon.iconcolor.active.pressed};
                    width: ${radio.control.icon.iconsize.lg.active.pressed};
                    height: ${radio.control.icon.iconsize.lg.active.pressed};
                  }
                }

                &:focus:not(:active) {
                  background-color: ${radio.control.container.bgcolor.active.focus};

                  &::before {
                    content: "";
                    background-color: ${radio.control.icon.iconcolor.active.focus};
                    width: ${radio.control.icon.iconsize.lg.active.focus};
                    height: ${radio.control.icon.iconsize.lg.active.focus};
                  }
                }
              }

              &:disabled {
                background-color: ${radio.control.container.bgcolor.active.disabled};

                &::before {
                  content: "";
                  background-color: ${radio.control.icon.iconcolor.active.disabled};
                  width: ${radio.control.icon.iconsize.lg.active.disabled};
                  height: ${radio.control.icon.iconsize.lg.active.disabled};
                }
              }
            }

            &:disabled {
              cursor: not-allowed;
              background-color: ${radio.control.container.bgcolor.inactive.disabled};

              &::before {
                content: "";
                background-color: ${radio.control.icon.iconcolor.inactive.disabled};
                width: ${radio.control.icon.iconsize.lg.inactive.disabled};
                height: ${radio.control.icon.iconsize.lg.inactive.disabled};
              }
            }
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

        &.error {
          .input-control {
            background-color: ${radio.control.container.bgcolor.inactive.error};

            &::before {
              background-color: ${radio.control.icon.iconcolor.inactive.error};
            }

            & + .label-wrapper {
              .blr-form-label-inline {
                color: ${formlabel.inlinelabel.textcolor.error};
              }
            }

            &.checked,
            &:checked {
              &::before {
                background-color: ${radio.control.icon.iconcolor.active.error};
              }
            }
          }

          &.sm {
            .input-control {
              &::before {
                width: ${radio.control.icon.iconsize.sm.inactive.error};
                height: ${radio.control.icon.iconsize.sm.inactive.error};
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

          &.md {
            .input-control {
              &::before {
                width: ${radio.control.icon.iconsize.md.inactive.error};
                height: ${radio.control.icon.iconsize.md.inactive.error};
              }

              &.checked,
              &:checked {
                &::before {
                  width: ${radio.control.icon.iconsize.md.active.error};
                  height: ${radio.control.icon.iconsize.md.active.error};
                }
              }
            }
          }

          &.lg {
            .input-control {
              &::before {
                width: ${radio.control.icon.iconsize.lg.inactive.error};
                height: ${radio.control.icon.iconsize.lg.inactive.error};
              }

              &.checked,
              &:checked {
                &::before {
                  width: ${radio.control.icon.iconsize.lg.active.error};
                  height: ${radio.control.icon.iconsize.lg.active.error};
                }
              }
            }
          }
        }

        &.disabled {
          pointer-events: none;

          .input-control {
            background-color: ${radio.control.container.bgcolor.inactive.disabled};

            &::before {
              content: "";
              background-color: ${radio.control.icon.iconcolor.inactive.disabled};
            }

            & + .label-wrapper {
              .blr-form-label-inline {
                color: ${formlabel.inlinelabel.textcolor.disabled};
              }
            }
          }

          &.sm {
            .input-control {
              width: ${radio.control.container.size.sm};
              height: ${radio.control.container.size.sm};

              &::before {
                width: ${radio.control.icon.iconsize.sm.inactive.rest};
                height: ${radio.control.icon.iconsize.sm.inactive.rest};
              }
            }
          }

          &.md {
            .input-control {
              width: ${radio.control.container.size.md};
              height: ${radio.control.container.size.md};

              &::before {
                width: ${radio.control.icon.iconsize.md.inactive.rest};
                height: ${radio.control.icon.iconsize.md.inactive.rest};
              }
            }
          }

          &.lg {
            .input-control {
              width: ${radio.control.container.size.lg};
              height: ${radio.control.container.size.lg};

              &::before {
                width: ${radio.control.icon.iconsize.lg.inactive.rest};
                height: ${radio.control.icon.iconsize.lg.inactive.rest};
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

  ${SemanticThemeIterator((theme, sem, css) => {
    const { global } = sem;

    return css`
      .blr-radio.${theme} {
        .input-control {
          &:focus:not(:active) {
            outline: ${global.focusring.border.color} ${global.focusring.border.width} ${global.focusring.border.style};
            outline-offset: 2px;
          }
        }
      }
    `;
  })}
`;
