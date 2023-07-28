import { componentTokens } from "../_tokens-generated/index.generated";
import { semanticTokens } from "../_tokens-generated/index.generated";
import { css } from "nested-css-to-flat/lit-css";

const { ToggleSwitch } = componentTokens.Forms;
const { Forms } = semanticTokens;
const { FocusBorder } = semanticTokens.Global;

export const toggleSwitch = css`
  .blr-label-toggleswitch {
    &.leading {
      flex-direction: column;
    }

    &.trailing {
      flex-direction: row;
      justify-content: space-between;
    }

    &.disabled {
      > .blr-form-label-inline {
        color: ${LabelNextToControl.Disabled};
      }
    }

    > .toggle-content-col {
      display: flex;
      flex-direction: column;

      > .blr-form-label-inline {
        color: ${LabelNextToControl.Rest};
      }
    }

    &.sm {
      gap: ${ToggleSwitch.SM.Gap};

      > .toggle-content-col {
        gap: ${ToggleSwitch.SM.ContentColGap};
      }

      > .blr-label-switch-wrapper {
        width: ${ToggleSwitch.Control.SM.Background.Width};
        height: ${ToggleSwitch.Control.SM.Background.Height};
        margin: ${ToggleSwitch.SM.Gap} 0;

        > .toggle-switch-slider {
          &::after {
            width: ${ToggleSwitch.Control.SM.Knob.Sizing};
            height: ${ToggleSwitch.Control.SM.Knob.Sizing};
            top: 2px;
            left: 2px;
          }
        }

        > input:checked + .toggle-switch-slider::after {
          transform: translateX(16px);
        }

        > .toggle-switch-unselect {
          &::after {
            top: 7px;
            left: 9px;
            width: 1px;
            height: 5px;
          }
        }

        > .toggle-switch-select {
          &::after {
            top: 7px;
            right: 8px;
            width: 4px;
            height: 4px;
          }
        }
      }
    }

    &.md {
      gap: ${ToggleSwitch.MD.Gap};

      > .toggle-content-col {
        gap: ${ToggleSwitch.MD.ContentColGap};
      }

      > .blr-label-switch-wrapper {
        width: ${ToggleSwitch.Control.MD.Background.Width};
        height: ${ToggleSwitch.Control.MD.Background.Height};
        margin: ${ToggleSwitch.MD.Gap} 0;

        > .toggle-switch-slider {
          &::after {
            width: ${ToggleSwitch.Control.MD.Knob.Sizing};
            height: ${ToggleSwitch.Control.MD.Knob.Sizing};
            top: 2px;
            left: 2px;
          }
        }

        > input:checked + .toggle-switch-slider::after {
          transform: translateX(20px);
        }

        > .toggle-switch-unselect {
          &::after {
            top: 8px;
            left: 10px;
            width: 1px;
            height: 7px;
          }
        }

        > .toggle-switch-select {
          &::after {
            top: 8px;
            right: 8px;
            width: 6px;
            height: 6px;
          }
        }
      }
    }

    &.lg {
      gap: ${ToggleSwitch.LG.Gap};

      > .toggle-content-col {
        gap: ${ToggleSwitch.LG.ContentColGap};
      }

      > .blr-label-switch-wrapper {
        width: ${ToggleSwitch.Control.LG.Background.Width};
        height: ${ToggleSwitch.Control.LG.Background.Height};
        margin: ${ToggleSwitch.LG.Gap} 0;

        > .toggle-switch-slider {
          &::after {
            width: ${ToggleSwitch.Control.LG.Knob.Sizing};
            height: ${ToggleSwitch.Control.LG.Knob.Sizing};
            top: 2px;
            left: 2px;
          }
        }

        > input:checked + .toggle-switch-slider::after {
          transform: translateX(23px);
        }

        > .toggle-switch-unselect {
          &::after {
            top: 9px;
            left: 13px;
            width: 1px;
            height: 10px;
          }
        }

        > .toggle-switch-select {
          &::after {
            top: 9px;
            right: 9px;
            width: 8px;
            height: 8px;
          }
        }
      }
    }

    > .blr-label-switch-wrapper {
      border-radius: 15px;
      position: relative;
      cursor: pointer;

      &.wrapper-unselected {
        background-color: ${ToggleSwitch.Control.Background.Unselected.Fill.Rest};
      }

      &.wrapper-selected {
        background-color: ${ToggleSwitch.Control.Background.Selected.Fill.Rest};
      }

      > input {
        display: none;
      }

      > .toggle-switch-slider {
        &::after {
          content: "";
          position: absolute;
          background-color: ${ToggleSwitch.Control.Foreground.Unselected.Fill.Rest};
          border-radius: 50%;
          transition: transform 0.2s ease;
        }
      }

      > input:checked + .toggle-switch-slider::after {
        background-color: ${ToggleSwitch.Control.Foreground.Selected.Fill.Rest};
      }

      > .toggle-switch-unselect {
        &::after {
          content: "";
          position: absolute;
          border-right: 1px solid ${ToggleSwitch.Control.Foreground.Selected.Fill.Rest};
        }
      }

      > .toggle-switch-select {
        &::after {
          content: "";
          position: absolute;
          border-radius: 100%;
          border: 1px solid ${ToggleSwitch.Control.Foreground.Selected.Fill.Rest};
        }
      }
    }

    &:not(.error) {
      > .blr-label-switch-wrapper {
        > .blr-form-label-inline {
          color: ${LabelNextToControl.Rest};
        }

        &.wrapper-unselected {
          background-color: ${ToggleSwitch.Control.Background.Unselected.Fill.Rest};

          &:hover {
            background-color: ${ToggleSwitch.Control.Background.Unselected.Fill.Hover};
          }

          &:active {
            background-color: ${ToggleSwitch.Control.Background.Unselected.Fill.Hover};
          }

          &:focus {
            background-color: ${ToggleSwitch.Control.Background.Unselected.Fill.Focus};
            outline: ${FocusBorder.width} ${FocusBorder.style} ${FocusBorder.color};
          }

          &[disabled] {
            background-color: ${ToggleSwitch.Control.Background.Selected.Fill.Disabled};
          }
        }

        &.wrapper-selected {
          background-color: ${ToggleSwitch.Control.Background.Selected.Fill.Rest};

          &:hover {
            background-color: ${ToggleSwitch.Control.Background.Selected.Fill.Hover};
          }

          &:active {
            background-color: ${ToggleSwitch.Control.Background.Selected.Fill.Focus};
          }

          &:focus {
            background-color: ${ToggleSwitch.Control.Background.Selected.Fill.Focus};
            outline: ${FocusBorder.width} ${FocusBorder.style} ${FocusBorder.color};
          }

          &[disabled] {
            background-color: ${ToggleSwitch.Control.Background.Selected.Fill.Disabled};
          }
        }
      }
    }

    &.error {
      .blr-form-label-inline {
        color: ${LabelNextToControl.Error};
      }
    }
  }
`;

// outline-style: ${FocusBorder.style};
// outline-width: ${FocusBorder.width};
// outline-color: ${FocusBorder.color};
