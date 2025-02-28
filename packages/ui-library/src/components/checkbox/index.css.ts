import { ComponentThemeIterator, SemanticThemeIterator } from "../../foundation/_tokens-generated/iterator.generated.js";
import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = css`
  ${ComponentThemeIterator((theme, cmp, css) => {
    const { checkbox, formlabel } = cmp;

    return css`
      .blr-checkbox.${theme} {
        all: initial;
        display: flex;
        flex-direction: column;

        .input-control {
          all: initial;
        }

        .control-wrapper {
          display: flex;

          .visual-checkbox {
            all: initial;
            display: inline-block;
            margin: 0;
            position: relative;
            transition: background-color 0.25s ease 0s;
            outline-style: solid;

            & .checker-icon {
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          .label-wrapper {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;

            .hint-wrapper,
            .error-wrapper {
              flex-basis: 100%;

              .blr-form-caption {
                gap: 0;
              }
            }

            .blr-form-label-inline {
              font-family: ${formlabel.inlinelabel.typography.sm.fontFamily}, sans-serif;
            }
          }
        }

        .label-wrapper {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;

          .hint-wrapper,
          .error-wrapper {
            flex-basis: 100%;

            .blr-form-caption {
              gap: 0;
            }
          }

          .blr-form-label-inline {
            font-family: ${formlabel.inlinelabel.typography.sm.fontFamily}, sans-serif;
          }
        }

        &.sm {
          .visual-checkbox {
            min-width: ${checkbox.control.container.size.sm};
            height: ${checkbox.control.container.size.sm};
            margin-top: ${checkbox.controlwrapper.paddingtop.sm};
            border-radius: ${checkbox.control.container.borderradius.sm};
          }

          .focus-ring {
            border-radius: ${checkbox.control.container.borderradius.sm};
          }

          .control-wrapper {
            gap: ${checkbox.contentrow.itemspacing.sm};
          }

          & .label-wrapper,
          & .visual-checkbox {
            padding-top: ${checkbox.contentcol.paddingtop.sm};

            .blr-form-label-inline {
              font-weight: ${formlabel.inlinelabel.typography.sm.fontWeight};
              line-height: ${formlabel.inlinelabel.typography.sm.lineHeight};
              font-size: ${formlabel.inlinelabel.typography.sm.fontSize};
            }
          }
        }

        &.md {
          .visual-checkbox {
            min-width: ${checkbox.control.container.size.md};
            height: ${checkbox.control.container.size.md};
            margin-top: ${checkbox.controlwrapper.paddingtop.md};
            border-radius: ${checkbox.control.container.borderradius.md};
          }

          .focus-ring {
            border-radius: ${checkbox.control.container.borderradius.md};
          }

          .control-wrapper {
            gap: ${checkbox.contentrow.itemspacing.md};
          }

          .label-wrapper {
            padding-top: ${checkbox.contentcol.paddingtop.md};

            .blr-form-label-inline {
              font-weight: ${formlabel.inlinelabel.typography.md.fontWeight};
              line-height: ${formlabel.inlinelabel.typography.md.lineHeight};
              font-size: ${formlabel.inlinelabel.typography.md.fontSize};
            }
          }
        }

        &.lg {
          .visual-checkbox {
            min-width: ${checkbox.control.container.size.lg};
            height: ${checkbox.control.container.size.lg};
            margin-top: ${checkbox.controlwrapper.paddingtop.lg};
            border-radius: ${checkbox.control.container.borderradius.lg};
          }

          .focus-ring {
            border-radius: ${checkbox.control.container.borderradius.lg};
          }

          .control-wrapper {
            gap: ${checkbox.contentrow.itemspacing.lg};
          }

          .label-wrapper {
            padding-top: ${checkbox.contentcol.paddingtop.lg};

            .blr-form-label-inline {
              font-weight: ${formlabel.inlinelabel.typography.lg.fontWeight};
              line-height: ${formlabel.inlinelabel.typography.lg.lineHeight};
              font-size: ${formlabel.inlinelabel.typography.lg.fontSize};
            }
          }
        }

        .label-wrapper {
          &:not(.disabled) {
            &:not(.error) {
              color: ${formlabel.inlinelabel.textcolor.rest};

              &:hover {
                &:not(.readonly) {
                  color: ${formlabel.inlinelabel.textcolor.hover};
                }
              }

              &.focus {
                color: ${formlabel.inlinelabel.textcolor.focus};
              }

              &.active {
                &:not(.readonly) {
                  color: ${formlabel.inlinelabel.textcolor.pressed};
                }
              }
            }
          }

          &.error {
            color: ${formlabel.inlinelabel.textcolor.error};
          }

          &.disabled {
            .blr-form-label-inline {
              cursor: not-allowed;
              color: ${formlabel.inlinelabel.textcolor.disabled};
            }
          }
        }

        .visual-checkbox {
          & .checker-icon {
            color: ${checkbox.control.icon.iconcolor.inactive.rest};
          }

          &.disabled {
            & .checker-icon {
              color: ${checkbox.control.icon.iconcolor.inactive.disabled};
            }

            cursor: not-allowed;
          }

          &:not(.error) {
            &.checked,
            &.indeterminate {
              background-color: ${checkbox.control.container.bgcolor.active.rest};
              outline-color: ${checkbox.control.container.bordercolor.active.rest};

              & .checker-icon {
                color: ${checkbox.control.icon.iconcolor.active.rest};
              }

              &.hover {
                &:not(.disabled) {
                  background-color: ${checkbox.control.container.bgcolor.active.hover};
                  outline-color: ${checkbox.control.container.bordercolor.active.hover};

                  & .checker-icon {
                    color: ${checkbox.control.icon.iconcolor.active.hover};
                  }
                }
              }

              &.focus {
                background-color: ${checkbox.control.container.bgcolor.active.focus};
                outline-color: ${checkbox.control.container.bordercolor.active.focus};

                & .checker-icon {
                  color: ${checkbox.control.icon.iconcolor.active.focus};
                }
              }

              &.active {
                &:not(:disabled) {
                  background-color: ${checkbox.control.container.bgcolor.active.pressed};
                  outline-color: ${checkbox.control.container.bordercolor.active.pressed};

                  & .checker-icon {
                    color: ${checkbox.control.icon.iconcolor.active.pressed};
                  }
                }
              }

              &.disabled {
                background-color: ${checkbox.control.container.bgcolor.active.disabled};
                outline-color: ${checkbox.control.container.bordercolor.active.disabled};

                & .checker-icon {
                  color: ${checkbox.control.icon.iconcolor.active.disabled};
                }
              }
            }

            &:not(.checked, .indeterminate) {
              background-color: ${checkbox.control.container.bgcolor.inactive.rest};
              outline-color: ${checkbox.control.container.bordercolor.inactive.rest};

              & .checker-icon {
                color: ${checkbox.control.icon.iconcolor.inactive.rest};
              }

              &.hover {
                &:not(.disabled) {
                  background-color: ${checkbox.control.container.bgcolor.inactive.hover};
                  outline-color: ${checkbox.control.container.bordercolor.inactive.hover};

                  & .checker-icon {
                    color: ${checkbox.control.icon.iconcolor.inactive.hover};
                  }
                }
              }

              &.focus {
                background-color: ${checkbox.control.container.bgcolor.inactive.focus};
                outline-color: ${checkbox.control.container.bordercolor.inactive.focus};

                & .checker-icon {
                  color: ${checkbox.control.icon.iconcolor.inactive.focus};
                }
              }

              &.active {
                &:not(.disabled) {
                  background-color: ${checkbox.control.container.bgcolor.inactive.pressed};
                  outline-color: ${checkbox.control.container.bordercolor.inactive.pressed};

                  & .checker-icon {
                    color: ${checkbox.control.icon.iconcolor.inactive.pressed};
                  }
                }
              }

              &.disabled {
                background-color: ${checkbox.control.container.bgcolor.inactive.disabled};
                outline-color: ${checkbox.control.container.bordercolor.inactive.disabled};

                & .checker-icon {
                  color: ${checkbox.control.icon.iconcolor.inactive.disabled};
                }
              }
            }
          }

          &.error {
            &.checked,
            &.indeterminate {
              background-color: ${checkbox.control.container.bgcolor.active.error};
              outline-color: ${checkbox.control.container.bordercolor.active.error};

              & .checker-icon {
                color: ${checkbox.control.icon.iconcolor.active.error};
              }
            }

            &:not(.checked, .indeterminate) {
              background-color: ${checkbox.control.container.bgcolor.inactive.error};
              outline-color: ${checkbox.control.container.bordercolor.inactive.error};

              & .checker-icon {
                color: ${checkbox.control.icon.iconcolor.inactive.error};
              }
            }
          }
        }

        &.sm {
          &:not(.error) {
            .visual-checkbox {
              & .checker-icon {
                width: ${checkbox.control.icon.iconsize.sm.rest};
                height: ${checkbox.control.icon.iconsize.sm.rest};
              }

              outline-width: ${checkbox.control.container.borderwidth.sm.inactive.rest};
              outline-offset: calc(${checkbox.control.container.borderwidth.sm.inactive.rest} * -1);

              &.hover {
                &:not(.disabled) {
                  & .checker-icon {
                    width: ${checkbox.control.icon.iconsize.sm.hover};
                    height: ${checkbox.control.icon.iconsize.sm.hover};
                  }

                  outline-width: ${checkbox.control.container.borderwidth.sm.inactive.hover};
                  outline-offset: calc(${checkbox.control.container.borderwidth.sm.inactive.hover} * -1);
                }
              }

              &.focus {
                & .checker-icon {
                  width: ${checkbox.control.icon.iconsize.sm.focus};
                  height: ${checkbox.control.icon.iconsize.sm.focus};
                }

                outline-width: ${checkbox.control.container.borderwidth.sm.inactive.focus};
                outline-offset: calc(${checkbox.control.container.borderwidth.sm.inactive.focus} * -1);
              }

              &.active {
                &:not(.disabled) {
                  & .checker-icon {
                    width: ${checkbox.control.icon.iconsize.sm.pressed};
                    height: ${checkbox.control.icon.iconsize.sm.pressed};
                  }

                  outline-width: ${checkbox.control.container.borderwidth.sm.inactive.pressed};
                  outline-offset: calc(${checkbox.control.container.borderwidth.sm.inactive.pressed} * -1);
                }
              }

              &.disabled {
                & .checker-icon {
                  width: ${checkbox.control.icon.iconsize.sm.disabled};
                  height: ${checkbox.control.icon.iconsize.sm.disabled};
                }

                outline-width: ${checkbox.control.container.borderwidth.sm.inactive.disabled};
                outline-offset: calc(${checkbox.control.container.borderwidth.sm.inactive.disabled} * -1);
              }

              &.checked {
                outline-width: ${checkbox.control.container.borderwidth.sm.active.rest};
                outline-offset: calc(${checkbox.control.container.borderwidth.sm.active.rest} * -1);

                &.hover {
                  &:not(.disabled) {
                    outline-width: ${checkbox.control.container.borderwidth.sm.active.hover};
                    outline-offset: calc(${checkbox.control.container.borderwidth.sm.active.hover} * -1);
                  }
                }

                &.focus {
                  outline-width: ${checkbox.control.container.borderwidth.sm.active.focus};
                  outline-offset: calc(${checkbox.control.container.borderwidth.sm.active.focus} * -1);
                }

                &.active {
                  &:not(.disabled) {
                    outline-width: ${checkbox.control.container.borderwidth.sm.active.pressed};
                    outline-offset: calc(${checkbox.control.container.borderwidth.sm.active.pressed} * -1);
                  }
                }

                &.disabled {
                  outline-width: ${checkbox.control.container.borderwidth.sm.active.disabled};
                  outline-offset: calc(${checkbox.control.container.borderwidth.sm.active.disabled} * -1);
                }
              }
            }
          }

          &.error {
            .visual-checkbox {
              & .checker-icon {
                width: ${checkbox.control.icon.iconsize.sm.error};
                height: ${checkbox.control.icon.iconsize.sm.error};
              }

              &:not(.checked) {
                outline-width: ${checkbox.control.container.borderwidth.sm.inactive.error};
                outline-offset: calc(${checkbox.control.container.borderwidth.sm.inactive.error} * -1);
              }

              &.checked {
                outline-width: ${checkbox.control.container.borderwidth.sm.active.error};
                outline-offset: calc(${checkbox.control.container.borderwidth.sm.active.error} * -1);
              }
            }
          }
        }

        &.md {
          &:not(.error) {
            .visual-checkbox {
              & .checker-icon {
                width: ${checkbox.control.icon.iconsize.md.rest};
                height: ${checkbox.control.icon.iconsize.md.rest};
              }

              &:not(.checked) {
                outline-width: ${checkbox.control.container.borderwidth.md.inactive.rest};
                outline-offset: calc(${checkbox.control.container.borderwidth.md.inactive.rest} * -1);

                &.hover {
                  &:not(.disabled) {
                    outline-width: ${checkbox.control.container.borderwidth.md.inactive.hover};
                    outline-offset: calc(${checkbox.control.container.borderwidth.md.inactive.hover} * -1);
                  }
                }

                &.focus {
                  outline-width: ${checkbox.control.container.borderwidth.md.inactive.focus};
                  outline-offset: calc(${checkbox.control.container.borderwidth.md.inactive.focus} * -1);
                }

                &.active {
                  &:not(.disabled) {
                    outline-width: ${checkbox.control.container.borderwidth.md.inactive.pressed};
                    outline-offset: calc(${checkbox.control.container.borderwidth.md.inactive.pressed} * -1);
                  }
                }

                &.disabled {
                  outline-width: ${checkbox.control.container.borderwidth.md.inactive.disabled};
                  outline-offset: calc(${checkbox.control.container.borderwidth.md.inactive.disabled} * -1);
                }
              }

              &.checked {
                outline-width: ${checkbox.control.container.borderwidth.md.active.rest};
                outline-offset: calc(${checkbox.control.container.borderwidth.md.active.rest} * -1);

                &.hover {
                  &:not(.disabled) {
                    outline-width: ${checkbox.control.container.borderwidth.md.active.hover};
                    outline-offset: calc(${checkbox.control.container.borderwidth.md.active.hover} * -1);
                  }
                }

                &.focus {
                  outline-width: ${checkbox.control.container.borderwidth.md.active.focus};
                  outline-offset: calc(${checkbox.control.container.borderwidth.md.active.focus} * -1);
                }

                &.active {
                  &:not(.disabled) {
                    outline-width: ${checkbox.control.container.borderwidth.md.active.pressed};
                    outline-offset: calc(${checkbox.control.container.borderwidth.md.active.pressed} * -1);
                  }
                }

                &.disabled {
                  outline-width: ${checkbox.control.container.borderwidth.md.active.disabled};
                  outline-offset: calc(${checkbox.control.container.borderwidth.md.active.disabled} * -1);
                }
              }
            }
          }

          &.error {
            .visual-checkbox {
              & .checker-icon {
                width: ${checkbox.control.icon.iconsize.md.error};
                height: ${checkbox.control.icon.iconsize.md.error};
              }

              &:not(.checked) {
                outline-width: ${checkbox.control.container.borderwidth.md.inactive.error};
                outline-offset: calc(${checkbox.control.container.borderwidth.md.inactive.error} * -1);
              }

              &.checked {
                outline-width: ${checkbox.control.container.borderwidth.md.active.error};
                outline-offset: calc(${checkbox.control.container.borderwidth.md.active.error} * -1);
              }
            }
          }
        }

        &.lg {
          &:not(.error) {
            .visual-checkbox {
              & .checker-icon {
                width: ${checkbox.control.icon.iconsize.lg.rest};
                height: ${checkbox.control.icon.iconsize.lg.rest};
              }

              &:not(.checked) {
                outline-width: ${checkbox.control.container.borderwidth.lg.inactive.rest};
                outline-offset: calc(${checkbox.control.container.borderwidth.lg.inactive.rest} * -1);

                &.hover {
                  &:not(.disabled) {
                    outline-width: ${checkbox.control.container.borderwidth.lg.inactive.hover};
                    outline-offset: calc(${checkbox.control.container.borderwidth.lg.inactive.hover} * -1);
                  }
                }

                &.focus {
                  outline-width: ${checkbox.control.container.borderwidth.lg.inactive.focus};
                  outline-offset: calc(${checkbox.control.container.borderwidth.lg.inactive.focus} * -1);
                }

                &.active {
                  &:not(:disabled) {
                    outline-width: ${checkbox.control.container.borderwidth.lg.inactive.pressed};
                    outline-offset: calc(${checkbox.control.container.borderwidth.lg.inactive.pressed} * -1);
                  }
                }

                &.disabled {
                  outline-width: ${checkbox.control.container.borderwidth.lg.inactive.disabled};
                  outline-offset: calc(${checkbox.control.container.borderwidth.lg.inactive.disabled} * -1);
                }
              }

              &.checked {
                outline-width: ${checkbox.control.container.borderwidth.lg.active.rest};
                outline-offset: calc(${checkbox.control.container.borderwidth.lg.active.rest} * -1);

                &.hover {
                  &:not(.disabled) {
                    outline-width: ${checkbox.control.container.borderwidth.lg.active.hover};
                    outline-offset: calc(${checkbox.control.container.borderwidth.lg.active.hover} * -1);
                  }
                }

                &.focus {
                  outline-width: ${checkbox.control.container.borderwidth.lg.active.focus};
                  outline-offset: calc(${checkbox.control.container.borderwidth.lg.active.focus} * -1);
                }

                &.active {
                  &:not(.disabled) {
                    outline-width: ${checkbox.control.container.borderwidth.lg.active.pressed};
                    outline-offset: calc(${checkbox.control.container.borderwidth.lg.active.pressed} * -1);
                  }
                }

                &.disabled {
                  outline-width: ${checkbox.control.container.borderwidth.lg.active.disabled};
                  outline-offset: calc(${checkbox.control.container.borderwidth.lg.active.disabled} * -1);
                }
              }
            }
          }

          &.error:not(.disbaled) {
            .visual-checkbox {
              & .checker-icon {
                width: ${checkbox.control.icon.iconsize.lg.error};
                height: ${checkbox.control.icon.iconsize.lg.error};
              }

              &:not(.checked) {
                outline-width: ${checkbox.control.container.borderwidth.lg.inactive.error};
                outline-offset: calc(${checkbox.control.container.borderwidth.lg.inactive.error} * -1);
              }

              &.checked {
                outline-width: ${checkbox.control.container.borderwidth.lg.active.error};
                outline-offset: calc(${checkbox.control.container.borderwidth.lg.active.error} * -1);
              }
            }
          }
        }
      }
    `;
  })}

  ${SemanticThemeIterator((theme, sem, css) => {
    const { focusring } = sem.global;

    return css`
      .focus-ring.${theme} {
        position: absolute;
        inset: 0;
        outline-color: transparent;
        outline-style: solid;

        &.focus {
          outline-width: ${focusring.border.width};
          outline-offset: 2px;
          outline-color: ${focusring.border.color};
        }
      }
    `;
  })}
`;
