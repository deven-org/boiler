import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";
import { ComponentThemeIterator, SemanticThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";

export const staticStyles = css`
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
          align-items: center;
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

  ${SemanticThemeIterator((theme, sem, css) => {
    const { focusring } = sem.global;

    return css`
      .blr-label-toggleswitch.${theme} {
        .focus-ring {
          &.focus {
            outline: ${focusring.border.width} ${focusring.border.style} ${focusring.border.color};
          }
        }
      }
    `;
  })}

  ${ComponentThemeIterator((theme, cmp, css) => {
    const { ToggleSwitch, formlabel } = cmp;

    return css`
      .blr-label-toggleswitch.${theme} {
        .focus-ring {
          &.focus {
            border-radius: ${ToggleSwitch.Control.Container.BorderRadius};
          }
        }

        & > .toggle-content-col {
          & > .blr-form-label-inline {
            color: ${formlabel.inlinelabel.textcolor.rest};
          }
        }

        .knob {
          outline-color: ${ToggleSwitch.Control.Knob.BorderColor.Inactive.Rest};
          outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.SM.Inactive.Rest};
          outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.SM.Inactive.Rest} * -1);
        }

        & > .label-container {
          & > .blr-label-switch-wrapper {
            border-radius: ${ToggleSwitch.Control.Container.BorderRadius};

            .knob {
              background-color: ${ToggleSwitch.Control.Knob.BackgroundColor.Active.Rest};
            }

            & > .blr-form-label-inline {
              color: ${formlabel.inlinelabel.textcolor.rest};
            }

            &:not(.checked) {
              background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Rest};
              outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Rest};
              .knob {
                outline-color: ${ToggleSwitch.Control.Knob.BorderColor.Inactive.Rest};
              }
              .toggle-icon > .toggle-icon-class {
                color: ${ToggleSwitch.Control.AY11Icon.IconColor.Inactive.Rest};
              }

              &.focus {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Focus};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Focus};
                .knob {
                  outline-color: ${ToggleSwitch.Control.Knob.BorderColor.Inactive.Focus};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${ToggleSwitch.Control.AY11Icon.IconColor.Inactive.Focus};
                }
              }

              &.hover {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Hover};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Hover};
                .knob {
                  outline-color: ${ToggleSwitch.Control.Knob.BorderColor.Inactive.Hover};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${ToggleSwitch.Control.AY11Icon.IconColor.Inactive.Hover};
                }
              }

              &.active {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Pressed};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Pressed};
                .knob {
                  outline-color: ${ToggleSwitch.Control.Knob.BorderColor.Inactive.Pressed};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${ToggleSwitch.Control.AY11Icon.IconColor.Inactive.Pressed};
                }
              }

              &.disabled {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Disabled};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Disabled};
                .knob {
                  outline-color: ${ToggleSwitch.Control.Knob.BorderColor.Inactive.Disabled};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${ToggleSwitch.Control.AY11Icon.IconColor.Inactive.Disabled};
                }
              }

              &.readonly {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.ReadOnly};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.ReadOnly};
                .knob {
                  outline-color: ${ToggleSwitch.Control.Knob.BorderColor.Inactive.ReadOnly};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${ToggleSwitch.Control.AY11Icon.IconColor.Inactive.ReadOnly};
                }
              }
            }

            &.checked {
              background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Rest};
              outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Rest};
              .knob {
                outline-color: ${ToggleSwitch.Control.Knob.BorderColor.Inactive.Rest};
              }
              .toggle-icon > .toggle-icon-class {
                color: ${ToggleSwitch.Control.AY11Icon.IconColor.Active.Rest};
              }

              &.focus {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Focus};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Focus};
                .knob {
                  outline-color: ${ToggleSwitch.Control.Knob.BorderColor.Active.Focus};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${ToggleSwitch.Control.AY11Icon.IconColor.Active.Focus};
                }
              }

              &.hover {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Hover};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Hover};
                .knob {
                  outline-color: ${ToggleSwitch.Control.Knob.BorderColor.Active.Hover};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${ToggleSwitch.Control.AY11Icon.IconColor.Active.Hover};
                }
              }

              &.active {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Pressed};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Pressed};
                .knob {
                  outline-color: ${ToggleSwitch.Control.Knob.BorderColor.Active.Pressed};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${ToggleSwitch.Control.AY11Icon.IconColor.Active.Pressed};
                }
              }

              &.disabled {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Disabled};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Disabled};
                .knob {
                  outline-color: ${ToggleSwitch.Control.Knob.BorderColor.Active.Disabled};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${ToggleSwitch.Control.AY11Icon.IconColor.Active.Disabled};
                }
              }

              &.readonly {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.ReadOnly};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.ReadOnly};
                .knob {
                  outline-color: ${ToggleSwitch.Control.Knob.BorderColor.Active.ReadOnly};
                }
                .toggle-icon > .toggle-icon-class {
                  color: ${ToggleSwitch.Control.AY11Icon.IconColor.Active.ReadOnly};
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
          gap: ${ToggleSwitch.Container.ItemSpacing.SM};

          & > .toggle-content-col {
            gap: ${ToggleSwitch.ContentCol.ItemSpacing.SM};
          }

          & > .label-container {
            gap: ${ToggleSwitch.ControlWithStateLabel.Container.ItemSpacing.SM};

            & > .blr-label-switch-wrapper {
              width: ${ToggleSwitch.Control.Container.Width.SM};
              height: ${ToggleSwitch.Control.Container.Height.SM};

              &:not(.checked) {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Rest};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Rest} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.SM.Inactive.Rest};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.SM.Inactive.Rest});
                }

                &.hover {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Hover};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Hover} * -1);
                  .knob {
                    outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.SM.Inactive.Hover};
                    outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.SM.Inactive.Hover});
                  }
                }
                &.active {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Pressed};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Pressed} * -1);
                  .knob {
                    outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.SM.Inactive.Pressed};
                    outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.SM.Inactive.Pressed});
                  }
                }

                &.disabled {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Disabled};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Disabled} * -1);
                  .knob {
                    outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.SM.Inactive.Disabled};
                    outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.SM.Inactive.Disabled});
                  }
                }
                &.readonly {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.ReadOnly};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.ReadOnly} * -1);
                  .knob {
                    outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.SM.Inactive.ReadOnly};
                    outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.SM.Inactive.ReadOnly});
                  }
                }
              }
              &.checked {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Rest};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Rest} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.SM.Active.Rest};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.SM.Active.Rest});
                }

                &.hover {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Hover};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Hover} * -1);
                  .knob {
                    outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.SM.Active.Hover};
                    outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.SM.Active.Hover});
                  }
                }
                &.active {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Pressed};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Pressed} * -1);
                  .knob {
                    outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.SM.Active.Pressed};
                    outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.SM.Active.Pressed});
                  }
                }

                &.disabled {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Disabled};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Disabled} * -1);
                  .knob {
                    outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.SM.Active.Disabled};
                    outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.SM.Active.Disabled});
                  }
                }
                &.readonly {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.ReadOnly};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.ReadOnly} * -1);
                  .knob {
                    outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.SM.Active.ReadOnly};
                    outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.SM.Active.ReadOnly});
                  }
                }
              }

              & > .toggle-switch-slider {
                & > .knob {
                  width: ${ToggleSwitch.Control.Knob.Size.SM};
                  height: ${ToggleSwitch.Control.Knob.Size.SM};
                  top: ${ToggleSwitch.Control.Container.Padding.SM};
                  left: ${ToggleSwitch.Control.Container.Padding.SM};
                }
              }

              & > input:checked + .toggle-switch-slider > .knob {
                transform: translateX(
                  calc(${ToggleSwitch.Control.Container.Width.SM} * 0.5 - ${ToggleSwitch.Control.Container.Padding.SM})
                );
              }

              & > .toggle-icon {
                height: ${ToggleSwitch.Control.Container.Height.SM};

                & > .toggle-icon-class {
                  width: ${ToggleSwitch.Control.AY11Icon.IconSize.SM};
                  padding: 0 calc(${ToggleSwitch.Control.AY11IconContainer.Padding_H.SM} + ${ToggleSwitch.Control.Container.Padding.SM});
                }
              }
            }
          }
        }

        &.md {
          gap: ${ToggleSwitch.Container.ItemSpacing.MD};

          & > .toggle-content-col {
            gap: ${ToggleSwitch.ContentCol.ItemSpacing.MD};
          }

          & > .label-container {
            gap: ${ToggleSwitch.ControlWithStateLabel.Container.ItemSpacing.MD};
          }

          & > .label-container > .blr-label-switch-wrapper {
            width: ${ToggleSwitch.Control.Container.Width.MD};
            height: ${ToggleSwitch.Control.Container.Height.MD};

            &:not(.checked) {
              outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Rest};
              outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Rest} * -1);
              .knob {
                outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.MD.Inactive.Rest};
                outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.MD.Inactive.Rest} * -1);
              }

              &.hover {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Hover};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Hover} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.MD.Inactive.Hover};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.MD.Inactive.Hover} * -1);
                }
              }

              &.active {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Pressed};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Pressed} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.MD.Inactive.Pressed};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.MD.Inactive.Pressed} * -1);
                }
              }

              &.disabled {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Disabled};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Disabled} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.MD.Inactive.Disabled};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.MD.Inactive.Disabled} * -1);
                }
              }

              &.readonly {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.ReadOnly};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.ReadOnly} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.MD.Inactive.ReadOnly};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.MD.Inactive.ReadOnly} * -1);
                }
              }
            }

            &.checked {
              outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Rest};
              outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Rest} * -1);
              .knob {
                outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.MD.Active.Rest};
                outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.MD.Active.Rest} * -1);
              }

              &.hover {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Hover};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Hover} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.MD.Active.Hover};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.MD.Active.Hover} * -1);
                }
              }

              &.active {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Pressed};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Pressed} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.MD.Active.Pressed};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.MD.Active.Pressed} * -1);
                }
              }

              &.disabled {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Disabled};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Disabled} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.MD.Active.Disabled};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.MD.Active.Disabled} * -1);
                }
              }

              &.readonly {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.ReadOnly};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.ReadOnly} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.MD.Active.ReadOnly};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.MD.Active.ReadOnly} * -1);
                }
              }
            }

            & > .toggle-switch-slider {
              & > .knob {
                width: ${ToggleSwitch.Control.Knob.Size.MD};
                height: ${ToggleSwitch.Control.Knob.Size.MD};
                top: ${ToggleSwitch.Control.Container.Padding.MD};
                left: ${ToggleSwitch.Control.Container.Padding.MD};
              }
            }

            & > input:checked + .toggle-switch-slider > .knob {
              transform: translateX(calc(${ToggleSwitch.Control.Container.Width.MD} * 0.5 - ${ToggleSwitch.Control.Container.Padding.MD}));
            }

            & > .toggle-icon {
              height: ${ToggleSwitch.Control.Container.Height.MD};

              & > .toggle-icon-class {
                width: ${ToggleSwitch.Control.AY11Icon.IconSize.MD};
                padding: 0 calc(${ToggleSwitch.Control.AY11IconContainer.Padding_H.MD} + ${ToggleSwitch.Control.Container.Padding.MD});
              }
            }
          }
        }

        &.lg {
          gap: ${ToggleSwitch.Container.ItemSpacing.LG};

          & > .toggle-content-col {
            gap: ${ToggleSwitch.ContentCol.ItemSpacing.LG};
          }

          & > .label-container {
            gap: ${ToggleSwitch.ControlWithStateLabel.Container.ItemSpacing.LG};
          }

          & > .label-container > .blr-label-switch-wrapper {
            width: ${ToggleSwitch.Control.Container.Width.LG};
            height: ${ToggleSwitch.Control.Container.Height.LG};

            &:not(.checked) {
              outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Rest};
              outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Rest} * -1);
              .knob {
                outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.LG.Inactive.Rest};
                outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.LG.Inactive.Rest} * -1);
              }

              &.hover {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Hover};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Hover} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.LG.Inactive.Hover};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.LG.Inactive.Hover} * -1);
                }
              }

              &.active {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Pressed};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Pressed} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.LG.Inactive.Pressed};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.LG.Inactive.Pressed} * -1);
                }
              }

              &.disabled {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Disabled};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Disabled} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.LG.Inactive.Disabled};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.LG.Inactive.Disabled} * -1);
                }
              }

              &.readonly {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.ReadOnly};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.ReadOnly} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.LG.Inactive.ReadOnly};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.LG.Inactive.ReadOnly} * -1);
                }
              }
            }

            &.checked {
              outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Rest};
              outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Rest} * -1);
              .knob {
                outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.LG.Active.Rest};
                outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.LG.Active.Rest} * -1);
              }

              &.hover {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Hover};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Hover} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.LG.Active.Hover};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.LG.Active.Hover} * -1);
                }
              }

              &.active {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Pressed};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Pressed} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.LG.Active.Pressed};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.LG.Active.Pressed} * -1);
                }
              }

              &.disabled {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Disabled};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Disabled} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.LG.Active.Disabled};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.LG.Active.Disabled} * -1);
                }
              }

              &.readonly {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.ReadOnly};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.ReadOnly} * -1);
                .knob {
                  outline-width: ${ToggleSwitch.Control.Knob.BorderWidth.LG.Active.ReadOnly};
                  outline-offset: calc(${ToggleSwitch.Control.Knob.BorderWidth.LG.Active.ReadOnly} * -1);
                }
              }
            }

            & > .toggle-switch-slider {
              & > .knob {
                width: ${ToggleSwitch.Control.Knob.Size.LG};
                height: ${ToggleSwitch.Control.Knob.Size.LG};
                top: ${ToggleSwitch.Control.Container.Padding.LG};
                left: ${ToggleSwitch.Control.Container.Padding.LG};
              }
            }

            & > input:checked + .toggle-switch-slider > .knob {
              transform: translateX(calc(${ToggleSwitch.Control.Container.Width.LG} * 0.5 - ${ToggleSwitch.Control.Container.Padding.LG}));
            }

            & > .toggle-icon {
              height: ${ToggleSwitch.Control.Container.Height.LG};

              & > .toggle-icon-class {
                width: ${ToggleSwitch.Control.AY11Icon.IconSize.LG};
                padding: 0 calc(${ToggleSwitch.Control.AY11IconContainer.Padding_H.LG} + ${ToggleSwitch.Control.Container.Padding.LG});
              }
            }
          }
        }
      }
    `;
  })}
`;
