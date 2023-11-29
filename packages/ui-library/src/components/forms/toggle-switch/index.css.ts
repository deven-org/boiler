import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";
import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";

export const styleCustom = typeSafeNestedCss/* css */ `
  .blr-label-toggleswitch {
    display: flex;
    align-items: flex-start;

    & input {
      all: initial;
    }
  }
`;

export const { tokenizedLight: toggleSwitchLight, tokenizedDark: toggleSwitchDark } = renderThemedCssStrings(
  (componentTokens, semanticTokens) => {
    const { ToggleSwitch } = componentTokens.Forms;
    const { LabelNextToControl } = semanticTokens.Forms;
    const { FocusBorder } = semanticTokens.Global;

    return typeSafeNestedCss/* css */ `
      .blr-label-toggleswitch {
        .focus-ring {
          position: absolute;
          inset: 0;
          outline-color: transparent;
          outline-style: solid;

          &.focus {
            border-radius: ${ToggleSwitch.Control.Container.BorderRadius};
            outline: ${FocusBorder.width} ${FocusBorder.style} ${FocusBorder.color};
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

          & > .blr-form-label-inline {
            color: ${LabelNextToControl.Rest};
          }
        }

        & > .label-container {
          all: initial;
          display: flex;
          align-items: center;
          justify-content: flex-start;

          & > .blr-label-switch-wrapper {
            _Fix_: "Focus ring needed";
            _outline-offset: 2px;
            border-radius: ${ToggleSwitch.Control.Container.BorderRadius};
            position: relative;
            cursor: pointer;
            outline-style: solid;
            outline-width: 0;

            &:focus {
              background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Focus};
              outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Focus};
            }

            & > .blr-form-label-inline {
              color: ${LabelNextToControl.Rest};
            }

            &:not(.checked) {
              background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Rest};
              outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Rest};

              &.hover {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Hover};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Hover};
              }

              &.active {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Pressed};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Pressed};
              }

              &.disabled {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Disabled};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Disabled};
              }

              &.readonly {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.ReadOnly};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.ReadOnly};
              }
            }

            &.checked {
              background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Rest};
              outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Rest};

              &.hover {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Hover};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Hover};
              }

              &.active {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Pressed};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Pressed};
              }

              &.focus {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Focus};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Focus};
              }

              &.disabled {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Disabled};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Disabled};
              }

              &.readonly {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.ReadOnly};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.ReadOnly};
                outline-color: blue;
              }
            }

            & > .toggle-switch-slider {
              & > .knob {
                position: absolute;
                z-index: 1;
                __FIX__background-color_is_state_dependent: 0;
                background-color: ${ToggleSwitch.Control.Knob.BackgroundColor.Active.Rest};
                border-radius: 50%;
                transition: transform 0.2s ease;
              }
            }

            & > input:checked + .toggle-switch-slider .knob {
              background-color: ${ToggleSwitch.Control.Knob.BackgroundColor.Inactive.Rest};
            }

            & > .toggle-icon {
              position: absolute;
              top: 0;
              display: flex;

              & > .toggle-icon-class {
                color: ${ToggleSwitch.Control.AY11Icon.IconColor.Active.Rest};
              }
            }

            & > .toggle-switch-unselect {
              left: 0;
            }

            & > .toggle-switch-select {
              right: 0;
            }
          }

          & > .blr-form-label-inline {
            color: ${LabelNextToControl.Rest};
          }
        }

        &.disabled {
          & > .toggle-content-col {
            & > .blr-form-label-inline {
              color: ${LabelNextToControl.Disabled};
            }
          }

          & > .label-container {
            & > .blr-form-label-inline {
              color: ${LabelNextToControl.Disabled};
            }
          }
        }

        &.readonly {
          > .toggle-content-col {
            > .blr-form-label-inline {
              color: ${LabelNextToControl.ReadOnly};
            }
          }

          & > .label-container {
            & > .blr-form-label-inline {
              color: ${LabelNextToControl.ReadOnly};
            }
          }
        }

        &.sm {
          gap: ${ToggleSwitch.Container.ItemSpacing.SM};
          _FIX?_: "width kann weg, weil es nur nervt";
          _width: 200px;

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
                outline-width: 2px;
                outline-offset: calc(2px * -1);

                &.hover {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Hover};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Hover} * -1);
                  outline-width: 2px;
                  outline-offset: calc(2px * -1);
                }
                &.active {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Pressed};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Pressed} * -1);
                  outline-width: 2px;
                  outline-offset: calc(2px * -1);
                }

                &.disabled {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Disabled};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Disabled} * -1);
                  outline-width: 2px;
                  outline-offset: calc(2px * -1);
                }
                &.readonly {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.ReadOnly};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.ReadOnly} * -1);
                  outline-width: 2px;
                  outline-offset: calc(2px * -1);
                }
              }
              &.checked {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Rest};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Rest} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
                
                &.hover {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Hover};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Hover} * -1);
                  outline-width: 2px;
                  outline-offset: calc(2px * -1);
                }
                &.active {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Pressed};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Pressed} * -1);
                  outline-width: 2px;
                  outline-offset: calc(2px * -1);
                }

                &.disabled {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Disabled};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Disabled} * -1);
                  outline-width: 2px;
                  outline-offset: calc(2px * -1);
                }
                &.readonly {
                  outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.ReadOnly};
                  outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.ReadOnly} * -1);
                  outline-width: 2px;
                  outline-offset: calc(2px * -1);
                }
              }


              &  > .toggle-switch-slider {
                & > .knob {
                  width: ${ToggleSwitch.Control.Knob.Size.SM};
                  height: ${ToggleSwitch.Control.Knob.Size.SM};
                  _FIX_: "top and left will vermutlich den padding value";
                  top: ${ToggleSwitch.Control.Container.Padding.SM};
                  left: ${ToggleSwitch.Control.Container.Padding.SM};;
                  _top: 2px;
                  _left: 2px;
                  _FIX : "END";
                }
              }

              & > input:checked + .toggle-switch-slider > .knob {
                _FIX_: "translate";
                _transform: translateX(16px);
                transform: translateX( calc(${ToggleSwitch.Control.Container.Width.SM} * 0.5 - ${ToggleSwitch.Control.Container.Padding.SM}));
              }

              &  > .toggle-icon {
                height: ${ToggleSwitch.Control.Container.Height.SM};

                & > .toggle-icon-class {
                  width: ${ToggleSwitch.Control.AY11Icon.IconSize.SM};
                  padding: 0 calc(${ToggleSwitch.Control.AY11IconContainer.PaddingLeftRight.SM} + ${ToggleSwitch.Control.Container.Padding.SM});
                }
              }
            }
          }
        }

        &.md {
          gap: ${ToggleSwitch.Container.ItemSpacing.MD};
          _FIX?_: "width kann weg, weil es nur nervt";
          _width: 220px;

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
              outline-width: 2px;
              outline-offset: calc(2px * -1);
              
              &.hover {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Hover};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Hover} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &.active {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Pressed};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Pressed} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }

              &.disabled {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Disabled};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Disabled} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &.readonly {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.ReadOnly};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.ReadOnly} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
            }
            &.checked {
              outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Rest};
              outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Rest} * -1);
              outline-width: 2px;
              outline-offset: calc(2px * -1);

              &.hover {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Hover};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Hover} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &.active {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Pressed};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Pressed} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }

              &.disabled {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Disabled};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Disabled} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &.readonly {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.ReadOnly};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.ReadOnly} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
            }

            & > .toggle-switch-slider {
              & > .knob {
                width: ${ToggleSwitch.Control.Knob.Size.MD};
                height: ${ToggleSwitch.Control.Knob.Size.MD};
                _FIX_: "top and left will vermutlich den padding value";
                top: ${ToggleSwitch.Control.Container.Padding.MD};
                left: ${ToggleSwitch.Control.Container.Padding.MD};;
                _top: 2px;
                _left: 2px;
                _FIX : "END";
              }
            }

            & > input:checked + .toggle-switch-slider > .knob {
              _FIX_: "translate";
              _transform: translateX(20px);
              transform: translateX( calc(${ToggleSwitch.Control.Container.Width.MD} * 0.5 - ${ToggleSwitch.Control.Container.Padding.MD}));
            }

            & > .toggle-icon {
              height: ${ToggleSwitch.Control.Container.Height.MD};

              & > .toggle-icon-class {
                width: ${ToggleSwitch.Control.AY11Icon.IconSize.MD};
                padding: 0 calc(${ToggleSwitch.Control.AY11IconContainer.PaddingLeftRight.MD} + ${ToggleSwitch.Control.Container.Padding.MD});
              }
            }
          }
        }


        &.lg {
          gap: ${ToggleSwitch.Container.ItemSpacing.LG};
          _FIX?_: "width kann weg, weil es nur nervt";
          _width: 240px;

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
              outline-width: 2px;
              outline-offset: calc(2px * -1);
              
              &.hover {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Hover};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Hover} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &.active {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Pressed};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Pressed} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }

              &.disabled {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Disabled};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Disabled} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &.readonly {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.ReadOnly};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.ReadOnly} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
            }
            &.checked {
              outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Rest};
              outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Rest} * -1);
              outline-width: 2px;
              outline-offset: calc(2px * -1);

              &.hover {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Hover};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Hover} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &.active {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Pressed};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Pressed} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }

              &.disabled {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Disabled};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Disabled} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &.readonly {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.ReadOnly};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.ReadOnly} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
            }
            
            & > input {
              width: ${ToggleSwitch.Control.Container.Width.LG};
              height: ${ToggleSwitch.Control.Container.Height.LG};
              _FIX?_: "margin";
              margin: 0;
            }

            & > .toggle-switch-slider {
              & > .knob {
                width: ${ToggleSwitch.Control.Knob.Size.LG};
                height: ${ToggleSwitch.Control.Knob.Size.LG};
                _FIX_: "top and left will vermutlich den padding value";
                top: ${ToggleSwitch.Control.Container.Padding.LG};
                left: ${ToggleSwitch.Control.Container.Padding.LG};;
                _top: 2px;
                _left: 2px;
                _FIX : "END";
              }
            }

            & > input:checked + .toggle-switch-slider > .knob {
              _FIX_: "translate";
              _transform: translateX(23px);
              transform: translateX( calc(${ToggleSwitch.Control.Container.Width.LG} * 0.5 - ${ToggleSwitch.Control.Container.Padding.LG}));
            }

            & > .toggle-icon {
              height: ${ToggleSwitch.Control.Container.Height.LG};

              & > .toggle-icon-class {
                width: ${ToggleSwitch.Control.AY11Icon.IconSize.LG};
                padding: 0 calc(${ToggleSwitch.Control.AY11IconContainer.PaddingLeftRight.LG} + ${ToggleSwitch.Control.Container.Padding.LG});
              }
            }
          }
        }
      }
    `;
  }
);
