import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";
import { ComponentThemeIterator, SemanticThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated";

export const staticStyles = typeSafeNestedCss/*css*/ `
  .blr-label-toggleswitch {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;

    &.has-state-label {
      flex-direction: column;
    }

    & input {
      all: initial;
    }

    .focus-ring {
      position: absolute;
      inset: 0;
      outline-color: transparent;
      outline-style: solid;

      &.focus {
        outline-offset: 2px;
      }
    }

    &.leading {
      flex-direction: column;
    }

    &.trailing {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    & > .toggle-content-col {
      display: flex;
      flex-direction: column;
    }

    .knob {
      z-index: 1;
      outline-style: solid;
    }

    .blr-label-switch-wrapper:not(.disabled):not(.readonly) {
      cursor: pointer;
    }

    & > .label-container {
      all: initial;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      & > .blr-label-switch-wrapper {
        position: relative;
        outline-style: solid;
        outline-width: 0;

        .knob {
          border-radius: 50%;
          transition: transform 0.2s ease;
          display: block;
          position: absolute;
        }
      
        & > .toggle-icon {
          position: absolute;
          top: 0;
          display: flex;
          align-items:center;
        }

        & > .toggle-switch-unselect {
          left: 0;
        }

        & > .toggle-switch-select {
          right: 0;
        }
        
        &:not(.checked) {
          &.active {
            .toggle-icon > .toggle-icon-class {
              color: pink;
            }
          }
        }
      }
    }
  }

  ${SemanticThemeIterator((theme, sem, typeSafeCss) => {
    const { focusring } = sem.global;

    return typeSafeCss/*css*/ `
      .blr-label-toggleswitch.${theme} {
        .focus-ring {
          &.focus {
            outline: ${focusring.border.width} ${focusring.border.style} ${focusring.border.color};
          }
        }
      }
    `;
  })}

  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { toggleswitch, formlabel } = cmp;

    return typeSafeCss/*css*/ `
      .blr-label-toggleswitch.${theme} {
        .focus-ring {
          &.focus {
            border-radius: ${toggleswitch.control.container.borderradius};
          }
        }

        & > .toggle-content-col {
          & > .blr-form-label-inline {
            color: ${formlabel.inlinelabel.textcolor.rest};
          }
        }

        .knob {
          outline-color: ${toggleswitch.control.knob.bordercolor.inactive.rest};
          outline-width: ${toggleswitch.control.knob.borderwidth.sm.inactive.rest};
          outline-offset: calc(${toggleswitch.control.knob.borderwidth.sm.inactive.rest} * -1);
        }

        & > .label-container {
          & > .blr-label-switch-wrapper {
            border-radius: ${toggleswitch.control.container.borderradius};

            .knob {
              background-color: ${toggleswitch.control.knob.bgcolor.active.rest};
            }
      
            & > .blr-form-label-inline {
              color: ${formlabel.inlinelabel.textcolor.rest};
            }
            
            &:not(.checked) {
              background-color: ${toggleswitch.control.container.bgcolor.inactive.rest};
              outline-color: ${toggleswitch.control.container.bordercolor.inactive.rest};
              .knob {
                outline-color: ${toggleswitch.control.knob.bordercolor.inactive.rest};
              }
              .toggle-icon > .toggle-icon-class {
                color: ${toggleswitch.control.ay11icon.iconcolor.inactive.rest};
              }

              &.focus {
                background-color: ${toggleswitch.control.container.bgcolor.inactive.focus};
                outline-color: ${toggleswitch.control.container.bordercolor.inactive.focus};
                .knob {
                  outline-color: ${toggleswitch.control.knob.bordercolor.inactive.focus};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${toggleswitch.control.ay11icon.iconcolor.inactive.focus};
                }
              }

              &.hover {
                background-color: ${toggleswitch.control.container.bgcolor.inactive.hover};
                outline-color: ${toggleswitch.control.container.bordercolor.inactive.hover};
                .knob {
                  outline-color: ${toggleswitch.control.knob.bordercolor.inactive.hover};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${toggleswitch.control.ay11icon.iconcolor.inactive.hover};
                }
              }

              &.active {
                background-color: ${toggleswitch.control.container.bgcolor.inactive.pressed};
                outline-color: ${toggleswitch.control.container.bordercolor.inactive.pressed};
                .knob {
                  outline-color: ${toggleswitch.control.knob.bordercolor.inactive.pressed};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${toggleswitch.control.ay11icon.iconcolor.inactive.pressed};
                }
              }

              &.disabled {
                background-color: ${toggleswitch.control.container.bgcolor.inactive.disabled};
                outline-color: ${toggleswitch.control.container.bordercolor.inactive.disabled};
                .knob {
                  outline-color: ${toggleswitch.control.knob.bordercolor.inactive.disabled};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${toggleswitch.control.ay11icon.iconcolor.inactive.disabled};
                }
              }

              &.readonly {
                background-color: ${toggleswitch.control.container.bgcolor.inactive.readonly};
                outline-color: ${toggleswitch.control.container.bordercolor.inactive.readonly};
                .knob {
                  outline-color: ${toggleswitch.control.knob.bordercolor.inactive.readonly};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${toggleswitch.control.ay11icon.iconcolor.inactive.readonly};
                }
              }
            }

            &.checked {
              background-color: ${toggleswitch.control.container.bgcolor.active.rest};
              outline-color: ${toggleswitch.control.container.bordercolor.active.rest};
              .knob {
                outline-color: ${toggleswitch.control.knob.bordercolor.inactive.rest};
              }
              .toggle-icon > .toggle-icon-class {
                color: ${toggleswitch.control.ay11icon.iconcolor.active.rest};
              }

              &.focus {
                background-color: ${toggleswitch.control.container.bgcolor.active.focus};
                outline-color: ${toggleswitch.control.container.bordercolor.active.focus};
                .knob {
                  outline-color: ${toggleswitch.control.knob.bordercolor.active.focus};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${toggleswitch.control.ay11icon.iconcolor.active.focus};
                }
              }

              &.hover {
                background-color: ${toggleswitch.control.container.bgcolor.active.hover};
                outline-color: ${toggleswitch.control.container.bordercolor.active.hover};
                .knob {
                  outline-color: ${toggleswitch.control.knob.bordercolor.active.hover};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${toggleswitch.control.ay11icon.iconcolor.active.hover};
                }
              }

              &.active {
                background-color: ${toggleswitch.control.container.bgcolor.active.pressed};
                outline-color: ${toggleswitch.control.container.bordercolor.active.pressed};
                .knob {
                  outline-color: ${toggleswitch.control.knob.bordercolor.active.pressed};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${toggleswitch.control.ay11icon.iconcolor.active.pressed};
                }
              }

              &.disabled {
                background-color: ${toggleswitch.control.container.bgcolor.active.disabled};
                outline-color: ${toggleswitch.control.container.bordercolor.active.disabled};
                .knob {
                  outline-color: ${toggleswitch.control.knob.bordercolor.active.disabled};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${toggleswitch.control.ay11icon.iconcolor.active.disabled};
                }
              }

              &.readonly {
                background-color: ${toggleswitch.control.container.bgcolor.active.readonly};
                outline-color: ${toggleswitch.control.container.bordercolor.active.readonly};
                .knob {
                  outline-color: ${toggleswitch.control.knob.bordercolor.active.readonly};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${toggleswitch.control.ay11icon.iconcolor.active.readonly};
                }
              }
            }
          }

          & > .blr-form-label-inline {
            color: ${formlabel.inlinelabel.textcolor.rest};
          }
        }

        &.disabled {
          & > .toggle-content-col {
            & > .blr-form-label-inline {
              color: ${formlabel.inlinelabel.textcolor.disabled};
            }
          }
        }

        &.readonly {
          > .toggle-content-col {
            > .blr-form-label-inline {
              color: ${formlabel.inlinelabel.textcolor.readonly};
            }
          }
        }

        &.sm {
          gap: ${toggleswitch.container.itemspacing.sm};

          & > .toggle-content-col {
            gap: ${toggleswitch.contentcol.itemspacing.sm};
          }

          & > .label-container {
            gap: ${toggleswitch.controlwithstatelabel.container.itemspacing.sm};

            & > .blr-label-switch-wrapper {
              width: ${toggleswitch.control.container.width.sm};
              height: ${toggleswitch.control.container.height.sm};

              &:not(.checked) {
                outline-width: ${toggleswitch.control.container.borderwidth.sm.inactive.rest};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.sm.inactive.rest} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.sm.inactive.rest};
                  outline-offset: calc(${toggleswitch.control.knob.borderwidth.sm.inactive.rest});
                }

                &.hover {
                  outline-width: ${toggleswitch.control.container.borderwidth.sm.inactive.hover};
                  outline-offset: calc(${toggleswitch.control.container.borderwidth.sm.inactive.hover} * -1);
                  .knob {
                    outline-width: ${toggleswitch.control.knob.borderwidth.sm.inactive.hover};
                    outline-offset: calc(${toggleswitch.control.knob.borderwidth.sm.inactive.hover});
                  }
                }
                &.active {
                  outline-width: ${toggleswitch.control.container.borderwidth.sm.inactive.pressed};
                  outline-offset: calc(${toggleswitch.control.container.borderwidth.sm.inactive.pressed} * -1);
                  .knob {
                    outline-width: ${toggleswitch.control.knob.borderwidth.sm.inactive.pressed};
                    outline-offset: calc(${toggleswitch.control.knob.borderwidth.sm.inactive.pressed});
                  }
                }

                &.disabled {
                  outline-width: ${toggleswitch.control.container.borderwidth.sm.inactive.disabled};
                  outline-offset: calc(${toggleswitch.control.container.borderwidth.sm.inactive.disabled} * -1);
                  .knob {
                    outline-width: ${toggleswitch.control.knob.borderwidth.sm.inactive.disabled};
                    outline-offset: calc(${toggleswitch.control.knob.borderwidth.sm.inactive.disabled});
                  }
                }
                &.readonly {
                  outline-width: ${toggleswitch.control.container.borderwidth.sm.inactive.readonly};
                  outline-offset: calc(${toggleswitch.control.container.borderwidth.sm.inactive.readonly} * -1);
                  .knob {
                    outline-width: ${toggleswitch.control.knob.borderwidth.sm.inactive.readonly};
                    outline-offset: calc(${toggleswitch.control.knob.borderwidth.sm.inactive.readonly});
                  }
                }
              }
              &.checked {
                outline-width: ${toggleswitch.control.container.borderwidth.sm.active.rest};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.sm.active.rest} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.sm.active.rest};
                  outline-offset: calc(${toggleswitch.control.knob.borderwidth.sm.active.rest});
                }
                
                &.hover {
                  outline-width: ${toggleswitch.control.container.borderwidth.sm.active.hover};
                  outline-offset: calc(${toggleswitch.control.container.borderwidth.sm.active.hover} * -1);
                  .knob {
                    outline-width: ${toggleswitch.control.knob.borderwidth.sm.active.hover};
                    outline-offset: calc(${toggleswitch.control.knob.borderwidth.sm.active.hover});
                  }
                }
                &.active {
                  outline-width: ${toggleswitch.control.container.borderwidth.sm.active.pressed};
                  outline-offset: calc(${toggleswitch.control.container.borderwidth.sm.active.pressed} * -1);
                  .knob {
                    outline-width: ${toggleswitch.control.knob.borderwidth.sm.active.pressed};
                    outline-offset: calc(${toggleswitch.control.knob.borderwidth.sm.active.pressed});
                  }
                }

                &.disabled {
                  outline-width: ${toggleswitch.control.container.borderwidth.sm.active.disabled};
                  outline-offset: calc(${toggleswitch.control.container.borderwidth.sm.active.disabled} * -1);
                  .knob {
                    outline-width: ${toggleswitch.control.knob.borderwidth.sm.active.disabled};
                    outline-offset: calc(${toggleswitch.control.knob.borderwidth.sm.active.disabled});
                  }
                }
                &.readonly {
                  outline-width: ${toggleswitch.control.container.borderwidth.sm.active.readonly};
                  outline-offset: calc(${toggleswitch.control.container.borderwidth.sm.active.readonly} * -1);
                  .knob {
                    outline-width: ${toggleswitch.control.knob.borderwidth.sm.active.readonly};
                    outline-offset: calc(${toggleswitch.control.knob.borderwidth.sm.active.readonly});
                  }
                }
              }

              &  > .toggle-switch-slider {
                & > .knob {
                  width: ${toggleswitch.control.knob.size.sm};
                  height: ${toggleswitch.control.knob.size.sm};
                  top: ${toggleswitch.control.container.padding.sm};
                  left: ${toggleswitch.control.container.padding.sm};;
                }
              }

              & > input:checked + .toggle-switch-slider > .knob {
                transform: translateX( calc(${toggleswitch.control.container.width.sm} * 0.5 - ${toggleswitch.control.container.padding.sm}));
              }

              &  > .toggle-icon {
                height: ${toggleswitch.control.container.height.sm};

                & > .toggle-icon-class {
                  width: ${toggleswitch.control.ay11icon.iconsize.sm};
                  padding: 0 calc(${toggleswitch.control.ay11iconcontainer.padding_h.sm} + ${toggleswitch.control.container.padding.sm});
                }
              }
            }
          }
        }

        &.md {
          gap: ${toggleswitch.container.itemspacing.md};

          & > .toggle-content-col {
            gap: ${toggleswitch.contentcol.itemspacing.md};
          }

          & > .label-container {
            gap: ${toggleswitch.controlwithstatelabel.container.itemspacing.md};
          }

          & > .label-container > .blr-label-switch-wrapper {
            width: ${toggleswitch.control.container.width.md};
            height: ${toggleswitch.control.container.height.md};

            &:not(.checked) {
              outline-width: ${toggleswitch.control.container.borderwidth.md.inactive.rest};
              outline-offset: calc(${toggleswitch.control.container.borderwidth.md.inactive.rest} * -1);
              .knob {
                outline-width: ${toggleswitch.control.knob.borderwidth.md.inactive.rest};
                outline-offset: calc(${toggleswitch.control.knob.borderwidth.md.inactive.rest} * -1);
              }
              
              &.hover {
                outline-width: ${toggleswitch.control.container.borderwidth.md.inactive.hover};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.md.inactive.hover} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.md.inactive.hover};
                  outline-offset: calc(${toggleswitch.control.knob.borderwidth.md.inactive.hover} * -1);
                }
              }

              &.active {
                outline-width: ${toggleswitch.control.container.borderwidth.md.inactive.pressed};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.md.inactive.pressed} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.md.inactive.pressed};
                  outline-offset: calc(${toggleswitch.control.knob.borderwidth.md.inactive.pressed} * -1);
                }
              }

              &.disabled {
                outline-width: ${toggleswitch.control.container.borderwidth.md.inactive.disabled};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.md.inactive.disabled} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.md.inactive.disabled};
                  outline-offset: calc(${toggleswitch.control.knob.borderwidth.md.inactive.disabled} * -1);
                }
              }

              &.readonly {
                outline-width: ${toggleswitch.control.container.borderwidth.md.inactive.readonly};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.md.inactive.readonly} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.md.inactive.readonly};
                  outline-offset: calc(${toggleswitch.control.knob.borderwidth.md.inactive.readonly} * -1);
                }
              }
            }

            &.checked {
              outline-width: ${toggleswitch.control.container.borderwidth.md.active.rest};
              outline-offset: calc(${toggleswitch.control.container.borderwidth.md.active.rest} * -1);
              .knob {
                outline-width: ${toggleswitch.control.knob.borderwidth.md.active.rest};
                outline-offset: calc(${toggleswitch.control.knob.borderwidth.md.active.rest} * -1);
              }

              &.hover {
                outline-width: ${toggleswitch.control.container.borderwidth.md.active.hover};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.md.active.hover} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.md.active.hover};
                  outline-offset: calc(${toggleswitch.control.knob.borderwidth.md.active.hover} * -1);
                }
              }

              &.active {
                outline-width: ${toggleswitch.control.container.borderwidth.md.active.pressed};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.md.active.pressed} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.md.active.pressed};
                  outline-offset: calc(${toggleswitch.control.knob.borderwidth.md.active.pressed} * -1);
                }
              }

              &.disabled {
                outline-width: ${toggleswitch.control.container.borderwidth.md.active.disabled};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.md.active.disabled} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.md.active.disabled};
                  outline-offset: calc(${toggleswitch.control.knob.borderwidth.md.active.disabled} * -1);
                }
              }

              &.readonly {
                outline-width: ${toggleswitch.control.container.borderwidth.md.active.readonly};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.md.active.readonly} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.md.active.readonly};
                  outline-offset: calc(${toggleswitch.control.knob.borderwidth.md.active.readonly} * -1);
                }
              }
            }

            & > .toggle-switch-slider {
              & > .knob {
                width: ${toggleswitch.control.knob.size.md};
                height: ${toggleswitch.control.knob.size.md};
                top: ${toggleswitch.control.container.padding.md};
                left: ${toggleswitch.control.container.padding.md};;
              }
            }

            & > input:checked + .toggle-switch-slider > .knob {
              transform: translateX( calc(${toggleswitch.control.container.width.md} * 0.5 - ${toggleswitch.control.container.padding.md}));
            }

            & > .toggle-icon {
              height: ${toggleswitch.control.container.height.md};

              & > .toggle-icon-class {
                width: ${toggleswitch.control.ay11icon.iconsize.md};
                padding: 0 calc(${toggleswitch.control.ay11iconcontainer.padding_h.md} + ${toggleswitch.control.container.padding.md});
              }
            }
          }
        }


        &.lg {
          gap: ${toggleswitch.container.itemspacing.lg};

          & > .toggle-content-col {
            gap: ${toggleswitch.contentcol.itemspacing.lg};
          }

          & > .label-container {
            gap: ${toggleswitch.controlwithstatelabel.container.itemspacing.lg};
          }

          & > .label-container > .blr-label-switch-wrapper {
            width: ${toggleswitch.control.container.width.lg};
            height: ${toggleswitch.control.container.height.lg};

            &:not(.checked) {
              outline-width: ${toggleswitch.control.container.borderwidth.lg.inactive.rest};
              outline-offset: calc(${toggleswitch.control.container.borderwidth.lg.inactive.rest} * -1);
              .knob {
                outline-width: ${toggleswitch.control.knob.borderwidth.lg.inactive.rest};
                outline-offset: calc( ${toggleswitch.control.knob.borderwidth.lg.inactive.rest} * -1);
              }
              
              &.hover {
                outline-width: ${toggleswitch.control.container.borderwidth.lg.inactive.hover};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.lg.inactive.hover} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.lg.inactive.hover};
                  outline-offset: calc( ${toggleswitch.control.knob.borderwidth.lg.inactive.hover} * -1);
                }
              }

              &.active {
                outline-width: ${toggleswitch.control.container.borderwidth.lg.inactive.pressed};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.lg.inactive.pressed} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.lg.inactive.pressed};
                  outline-offset: calc( ${toggleswitch.control.knob.borderwidth.lg.inactive.pressed} * -1);
                }
              }

              &.disabled {
                outline-width: ${toggleswitch.control.container.borderwidth.lg.inactive.disabled};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.lg.inactive.disabled} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.lg.inactive.disabled};
                  outline-offset: calc( ${toggleswitch.control.knob.borderwidth.lg.inactive.disabled} * -1);
                }
              }

              &.readonly {
                outline-width: ${toggleswitch.control.container.borderwidth.lg.inactive.readonly};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.lg.inactive.readonly} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.lg.inactive.readonly};
                  outline-offset: calc( ${toggleswitch.control.knob.borderwidth.lg.inactive.readonly} * -1);
                }
              }
            }

            &.checked {
              outline-width: ${toggleswitch.control.container.borderwidth.lg.active.rest};
              outline-offset: calc(${toggleswitch.control.container.borderwidth.lg.active.rest} * -1);
              .knob {
                outline-width: ${toggleswitch.control.knob.borderwidth.lg.active.rest};
                outline-offset: calc( ${toggleswitch.control.knob.borderwidth.lg.active.rest} * -1);
              }

              &.hover {
                outline-width: ${toggleswitch.control.container.borderwidth.lg.active.hover};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.lg.active.hover} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.lg.active.hover};
                  outline-offset: calc( ${toggleswitch.control.knob.borderwidth.lg.active.hover} * -1);
                }
              }

              &.active {
                outline-width: ${toggleswitch.control.container.borderwidth.lg.active.pressed};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.lg.active.pressed} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.lg.active.pressed};
                  outline-offset: calc( ${toggleswitch.control.knob.borderwidth.lg.active.pressed} * -1);
                }
              }

              &.disabled {
                outline-width: ${toggleswitch.control.container.borderwidth.lg.active.disabled};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.lg.active.disabled} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.lg.active.disabled};
                  outline-offset: calc( ${toggleswitch.control.knob.borderwidth.lg.active.disabled} * -1);
                }
              }
              
              &.readonly {
                outline-width: ${toggleswitch.control.container.borderwidth.lg.active.readonly};
                outline-offset: calc(${toggleswitch.control.container.borderwidth.lg.active.readonly} * -1);
                .knob {
                  outline-width: ${toggleswitch.control.knob.borderwidth.lg.active.readonly};
                  outline-offset: calc( ${toggleswitch.control.knob.borderwidth.lg.active.readonly} * -1);
                }
              }
            }
            
            & > .toggle-switch-slider {
              & > .knob {
                width: ${toggleswitch.control.knob.size.lg};
                height: ${toggleswitch.control.knob.size.lg};
                top: ${toggleswitch.control.container.padding.lg};
                left: ${toggleswitch.control.container.padding.lg};;
              }
            }

            & > input:checked + .toggle-switch-slider > .knob {
              transform: translateX( calc(${toggleswitch.control.container.width.lg} * 0.5 - ${toggleswitch.control.container.padding.lg}));
            }

            & > .toggle-icon {
              height: ${toggleswitch.control.container.height.lg};

              & > .toggle-icon-class {
                width: ${toggleswitch.control.ay11icon.iconsize.lg};
                padding: 0 calc(${toggleswitch.control.ay11iconcontainer.padding_h.lg} + ${toggleswitch.control.container.padding.lg});
              }
            }
          }
        }
      }
    `;
  })}
`;
