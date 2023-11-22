import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: toggleSwitchLight, tokenizedDark: toggleSwitchDark } = renderThemedCssStrings(
  (componentTokens, semanticTokens) => {
    const { ToggleSwitch } = componentTokens.Forms;
    const { LabelNextToControl } = semanticTokens.Forms;
    const { FocusBorder } = semanticTokens.Global;

    return typeSafeNestedCss/* css */ `
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
            _Fix_: "Focus ring needed";
            _outline-offset: 2px;
            border-radius: 15px;
            position: relative;
            cursor: pointer;
            outline-style: solid;
            outline-width: 0;

            &:focus {
              background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Focus};
              outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Focus};
              _FIX__we_need_an_extra_focus_ring___outline: ${FocusBorder.width} ${FocusBorder.style} ${FocusBorder.color};
            }

            & > .blr-form-label-inline {
              color: ${LabelNextToControl.Rest};
            }

            &.wrapper-unselected {
              background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Rest};
              outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Rest};
              outline-color: red;

              &:hover {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Hover};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Hover};
                outline-color: red;
              }

              &:active {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Pressed};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Pressed};
                outline-color: red;
              }

              &[disabled] {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.Disabled};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.Disabled};
                outline-color: red;
              }

              &[readonly] {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Inactive.ReadOnly};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Inactive.ReadOnly};
                outline-color: red;
              }
            }

            &.wrapper-selected {
              background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Rest};
              outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Rest};
              outline-color: blue;

              &:hover {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Hover};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Hover};
                outline-color: blue;
              }

              &:active {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Pressed};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Pressed};
                outline-color: blue;
              }

              &:focus {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Focus};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Focus};
                outline-color: blue;
                _FIX__we_need_an_extra_focus_ring___outline: ${FocusBorder.width} ${FocusBorder.style} ${FocusBorder.color};
              }

              &[disabled] {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.Disabled};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.Disabled};
                outline-color: blue;
              }

              &[readonly] {
                background-color: ${ToggleSwitch.Control.Container.BackgroundColor.Active.ReadOnly};
                outline-color: ${ToggleSwitch.Control.Container.BorderColor.Active.ReadOnly};
                outline-color: blue;
              }
            }

            & > input {
              appearance: none;
              outline-offset: 2px;
              border-radius: 15px;

              
              &:focus {
                _outline: ${FocusBorder.width} ${FocusBorder.style} ${FocusBorder.color};
                _ouline: war komisch 
                outline: none;
              }
            }

            & > .toggle-switch-slider {
             
              &::after {
                content: "";
                position: absolute;
                z-index: 1;
                __FIX__background-color_is_state_dependent: 0;
                background-color: ${ToggleSwitch.Control.Knob.BackgroundColor.Active.Rest};
                border-radius: 50%;
                transition: transform 0.2s ease;
              }
            }

            & > input:checked + .toggle-switch-slider::after {
              background-color: ${ToggleSwitch.Control.Knob.BackgroundColor.Inactive.Rest};
            }

            & > .toggle-icon {
              position: absolute;
              top: 0;

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
          width: 200px;

          & > .toggle-content-col {
            gap: ${ToggleSwitch.ContentCol.ItemSpacing.SM};
          }

          & > .label-container {
            gap: ${ToggleSwitch.ControlWithStateLabel.Container.ItemSpacing.SM};
          }

          & > .label-container > .blr-label-switch-wrapper {
            width: ${ToggleSwitch.Control.Container.Width.SM};
            height: ${ToggleSwitch.Control.Container.Height.SM};

            &.wrapper-unselected {
              outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Rest};
              outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Rest} * -1);
              outline-width: 2px;
              outline-offset: calc(2px * -1);

              &:hover {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Hover};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Hover} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &:active {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Pressed};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Pressed} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }

              &[disabled] {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Disabled};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.Disabled} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &[readonly] {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.ReadOnly};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Inactive.ReadOnly} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
            }
            &.wrapper-selected {
              outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Rest};
              outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Rest} * -1);
              outline-width: 2px;
              outline-offset: calc(2px * -1);
              
              &:hover {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Hover};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Hover} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &:active {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Pressed};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Pressed} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }

              &[disabled] {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Disabled};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.Disabled} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &[readonly] {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.SM.Active.ReadOnly};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.SM.Active.ReadOnly} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
            }
          }

          & > .label-container > .blr-label-switch-wrapper & > input {
            width: ${ToggleSwitch.Control.Container.Width.SM};
            height: ${ToggleSwitch.Control.Container.Height.SM};
            _FIX?_: "margin";
            margin: 0;
          }

          & > .label-container > .blr-label-switch-wrapper > .toggle-switch-slider {
            &::after {
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

          & > .label-container > .blr-label-switch-wrapper > input:checked + .toggle-switch-slider::after {
            _FIX_: "translate";
            _transform: translateX(16px);
            transform: translateX( calc(${ToggleSwitch.Control.Container.Width.SM} * 0.5 - ${ToggleSwitch.Control.Container.Padding.SM}));
          }

          & > .label-container > .blr-label-switch-wrapper > .toggle-icon {
            height: ${ToggleSwitch.Control.Container.Height.SM};

            & > .toggle-icon-class {
              height: ${ToggleSwitch.Control.Container.Height.SM};
              align-items: center;
            }
          }
        }

        &.md {
          gap: ${ToggleSwitch.Container.ItemSpacing.MD};
          _FIX?_: "width kann weg, weil es nur nervt";
          width: 220px;

          & > .toggle-content-col {
            gap: ${ToggleSwitch.ContentCol.ItemSpacing.MD};
          }

          & > .label-container {
            gap: ${ToggleSwitch.ControlWithStateLabel.Container.ItemSpacing.MD};
          }

          & > .label-container > .blr-label-switch-wrapper {
            width: ${ToggleSwitch.Control.Container.Width.MD};
            height: ${ToggleSwitch.Control.Container.Height.MD};

            &.wrapper-unselected {
              outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Rest};
              outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Rest} * -1);
              outline-width: 2px;
              outline-offset: calc(2px * -1);
              
              &:hover {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Hover};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Hover} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &:active {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Pressed};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Pressed} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }

              &[disabled] {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Disabled};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.Disabled} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &[readonly] {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.ReadOnly};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Inactive.ReadOnly} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
            }
            &.wrapper-selected {
              outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Rest};
              outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Rest} * -1);
              outline-width: 2px;
              outline-offset: calc(2px * -1);

              &:hover {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Hover};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Hover} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &:active {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Pressed};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Pressed} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }

              &[disabled] {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Disabled};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.Disabled} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &[readonly] {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.MD.Active.ReadOnly};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.MD.Active.ReadOnly} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
            }
          }

          & > .label-container > .blr-label-switch-wrapper & > input {
            width: ${ToggleSwitch.Control.Container.Width.MD};
            height: ${ToggleSwitch.Control.Container.Height.MD};
            _FIX?_: "margin";
            margin: 0;
          }

          & > .label-container > .blr-label-switch-wrapper > .toggle-switch-slider {
            &::after {
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

          & > .label-container > .blr-label-switch-wrapper > input:checked + .toggle-switch-slider::after {
            _FIX_: "translate";
            _transform: translateX(20px);
            transform: translateX( calc(${ToggleSwitch.Control.Container.Width.MD} * 0.5 - ${ToggleSwitch.Control.Container.Padding.MD}));
          }

          & > .label-container > .blr-label-switch-wrapper > .toggle-icon {
            height: ${ToggleSwitch.Control.Container.Height.MD};

            & > .toggle-icon-class {
              height: ${ToggleSwitch.Control.Container.Height.MD};
              align-items: center;
            }
          }
        }


        &.lg {
          gap: ${ToggleSwitch.Container.ItemSpacing.LG};
          _FIX?_: "width kann weg, weil es nur nervt";
          width: 240px;

          & > .toggle-content-col {
            gap: ${ToggleSwitch.ContentCol.ItemSpacing.LG};
          }

          & > .label-container {
            gap: ${ToggleSwitch.ControlWithStateLabel.Container.ItemSpacing.LG};
          }

          & > .label-container > .blr-label-switch-wrapper {
            width: ${ToggleSwitch.Control.Container.Width.LG};
            height: ${ToggleSwitch.Control.Container.Height.LG};

            &.wrapper-unselected {
              outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Rest};
              outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Rest} * -1);
              outline-width: 2px;
              outline-offset: calc(2px * -1);
              
              &:hover {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Hover};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Hover} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &:active {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Pressed};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Pressed} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }

              &[disabled] {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Disabled};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.Disabled} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &[readonly] {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.ReadOnly};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Inactive.ReadOnly} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
            }
            &.wrapper-selected {
              outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Rest};
              outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Rest} * -1);
              outline-width: 2px;
              outline-offset: calc(2px * -1);

              &:hover {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Hover};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Hover} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &:active {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Pressed};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Pressed} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }

              &[disabled] {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Disabled};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.Disabled} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
              &[readonly] {
                outline-width: ${ToggleSwitch.Control.Container.BorderWidth.LG.Active.ReadOnly};
                outline-offset: calc(${ToggleSwitch.Control.Container.BorderWidth.LG.Active.ReadOnly} * -1);
                outline-width: 2px;
                outline-offset: calc(2px * -1);
              }
            } 
          }

          & > .label-container > .blr-label-switch-wrapper & > input {
            width: ${ToggleSwitch.Control.Container.Width.LG};
            height: ${ToggleSwitch.Control.Container.Height.LG};
            _FIX?_: "margin";
            margin: 0;
          }

          & > .label-container > .blr-label-switch-wrapper > .toggle-switch-slider {
            &::after {
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

          & > .label-container > .blr-label-switch-wrapper > input:checked + .toggle-switch-slider::after {
            _FIX_: "translate";
            _transform: translateX(23px);
            transform: translateX( calc(${ToggleSwitch.Control.Container.Width.LG} * 0.5 - ${ToggleSwitch.Control.Container.Padding.LG}));
          }

          & > .label-container > .blr-label-switch-wrapper > .toggle-icon {
            height: ${ToggleSwitch.Control.Container.Height.LG};

            & > .toggle-icon-class {
              height: ${ToggleSwitch.Control.Container.Height.LG};
              align-items: center;
            }
          }
        }
      }
    `;
  }
);
