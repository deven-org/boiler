import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: toggleSwitchLight, tokenizedDark: toggleSwitchDark } = renderThemedCssStrings(
  (componentTokens, semanticTokens) => {
    const { ToggleSwitch } = componentTokens.Forms;
    const { LabelNextToControl } = semanticTokens.Forms;
    const { FocusBorder } = semanticTokens.Global;

    return typeSafeNestedCss`
      .blr-label-toggleswitch {
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
          display: flex;
          align-items: center;
          justify-content: flex-start;

          & > .blr-label-switch-wrapper {
            outline-offset: 2px;
            border-radius: 15px;
            position: relative;
            cursor: pointer;

            &:focus {
              background-color: ${ToggleSwitch.Control.Background.Unselected.Fill.Focus};
              outline: ${FocusBorder.width} ${FocusBorder.style} ${FocusBorder.color};
            }

            & > .blr-form-label-inline {
              color: ${LabelNextToControl.Rest};
            }

            &.wrapper-unselected {
              background-color: ${ToggleSwitch.Control.Background.Unselected.Fill.Rest};

              &:hover {
                background-color: ${ToggleSwitch.Control.Background.Unselected.Fill.Hover};
              }

              &:active {
                background-color: ${ToggleSwitch.Control.Background.Unselected.Fill.Pressed};
              }

              &[disabled] {
                background-color: ${ToggleSwitch.Control.Background.Unselected.Fill.Disabled};
              }

              &[readonly] {
                background-color: ${ToggleSwitch.Control.Background.Unselected.Fill.ReadOnly};
              }
            }

            &.wrapper-selected {
              background-color: ${ToggleSwitch.Control.Background.Selected.Fill.Rest};

              &:hover {
                background-color: ${ToggleSwitch.Control.Background.Selected.Fill.Hover};
              }

              &:active {
                background-color: ${ToggleSwitch.Control.Background.Selected.Fill.Pressed};
              }

              &:focus {
                background-color: ${ToggleSwitch.Control.Background.Selected.Fill.Focus};
                outline: ${FocusBorder.width} ${FocusBorder.style} ${FocusBorder.color};
              }

              &[disabled] {
                background-color: ${ToggleSwitch.Control.Background.Selected.Fill.Disabled};
              }

              &[readonly] {
                background-color: ${ToggleSwitch.Control.Background.Selected.Fill.ReadOnly};
              }
            }

            & > input {
              appearance: none;
              outline-offset: 2px;
              border-radius: 15px;

              &:focus {
                outline: ${FocusBorder.width} ${FocusBorder.style} ${FocusBorder.color};
              }
            }

            & > .toggle-switch-slider {
              &::after {
                content: "";
                position: absolute;
                z-index: 1;
                background-color: ${ToggleSwitch.Control.Knob.Surface.Unselected.Fill.Rest};
                border-radius: 50%;
                transition: transform 0.2s ease;
              }
            }

            & > input:checked + .toggle-switch-slider::after {
              background-color: ${ToggleSwitch.Control.Knob.Surface.Selected.Fill.Rest};
            }

            & > .toggle-icon {
              position: absolute;
              top: 0;

              & > .toggle-icon-class {
                color: ${ToggleSwitch.Control.Ay11Icon.Selected.Fill.Rest};
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
          gap: ${ToggleSwitch.SM.Gap};
          width: 200px;

          & > .toggle-content-col {
            gap: ${ToggleSwitch.SM.ContentColGap};
          }

          & > .label-container {
            gap: ${ToggleSwitch.Control.SM.LabelGap};

            & > .blr-label-switch-wrapper {
              width: ${ToggleSwitch.Control.SM.Background.Width};
              height: ${ToggleSwitch.Control.SM.Background.Height};

              & > input {
                width: ${ToggleSwitch.Control.SM.Background.Width};
                height: ${ToggleSwitch.Control.SM.Background.Height};
                margin: 0;
              }

              & > .toggle-switch-slider {
                &::after {
                  width: ${ToggleSwitch.Control.SM.Knob.Sizing};
                  height: ${ToggleSwitch.Control.SM.Knob.Sizing};
                  top: 2px;
                  left: 2px;
                }
              }

              & > input:checked + .toggle-switch-slider::after {
                transform: translateX(16px);
              }

              & > .toggle-icon {
                height: ${ToggleSwitch.Control.SM.Background.Height};

                & > .toggle-icon-class {
                  height: ${ToggleSwitch.Control.SM.Background.Height};
                  align-items: center;
                }
              }
            }
          }
        }

        &.md {
          gap: ${ToggleSwitch.MD.Gap};
          width: 220px;

          & > .toggle-content-col {
            gap: ${ToggleSwitch.MD.ContentColGap};
          }

          & > .label-container {
            gap: ${ToggleSwitch.Control.MD.LabelGap};

            & > .blr-label-switch-wrapper {
              width: ${ToggleSwitch.Control.MD.Background.Width};
              height: ${ToggleSwitch.Control.MD.Background.Height};

              & > input {
                width: ${ToggleSwitch.Control.MD.Background.Width};
                height: ${ToggleSwitch.Control.MD.Background.Height};
                margin: 0;
              }

              & > .toggle-switch-slider {
                &::after {
                  width: ${ToggleSwitch.Control.MD.Knob.Sizing};
                  height: ${ToggleSwitch.Control.MD.Knob.Sizing};
                  top: 2px;
                  left: 2px;
                }
              }

              & > input:checked + .toggle-switch-slider::after {
                transform: translateX(20px);
              }

              & > .toggle-icon {
                height: ${ToggleSwitch.Control.MD.Background.Height};

                & > .toggle-icon-class {
                  height: ${ToggleSwitch.Control.MD.Background.Height};
                  align-items: center;
                }
              }
            }
          }
        }

        &.lg {
          gap: ${ToggleSwitch.LG.Gap};
          width: 240px;

          & > .toggle-content-col {
            gap: ${ToggleSwitch.LG.ContentColGap};
          }

          & > .label-container {
            gap: ${ToggleSwitch.Control.LG.LabelGap};

            & > .blr-label-switch-wrapper {
              width: ${ToggleSwitch.Control.LG.Background.Width};
              height: ${ToggleSwitch.Control.LG.Background.Height};

              & > input {
                width: ${ToggleSwitch.Control.LG.Background.Width};
                height: ${ToggleSwitch.Control.LG.Background.Height};
                margin: 0;
              }

              & > .toggle-switch-slider {
                &::after {
                  width: ${ToggleSwitch.Control.LG.Knob.Sizing};
                  height: ${ToggleSwitch.Control.LG.Knob.Sizing};
                  top: 2px;
                  left: 2px;
                }
              }

              & > input:checked + .toggle-switch-slider::after {
                transform: translateX(23px);
              }

              & > .toggle-icon {
                height: ${ToggleSwitch.Control.LG.Background.Height};

                & > .toggle-icon-class {
                  height: ${ToggleSwitch.Control.LG.Background.Height};
                  align-items: center;
                }
              }
            }
          }
        }
      }
    `;
  }
);
