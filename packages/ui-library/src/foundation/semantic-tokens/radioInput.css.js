import { css, unsafeCSS } from "lit";
import { componentTokens, semanticTokens } from "../_tokens-generated/index.generated";

const { Caption, Control, SM, MD, LG, Input, LabelNextToControl } = semanticTokens.Forms;
const { Radio } = componentTokens.Forms;

const sizes = {
  radioinput: {
    sm: {
      width: "50px",
      height: "100px",
    },
    md: {
      width: "100px",
      height: "200px",
    },
    lg: {
      width: "200px",
      height: "300px",
    },
  },
};

export const radioInput = css`
  /* stylelint-disable */
  .blr-radio-input-group {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    border-width: ${Input.Default.Rest.width};
    border-style: ${Input.Default.Rest.style};
    border-color: ${Input.Default.Rest.color};
    .blr-radio-input {
      display: flex;
      > input {
        appearance: none;
        display: flex;
        flex-shrink: 0; d
        background-color: rgb(255, 255, 255);
        width: ${Radio.Control.Background.Unselected.Rest};
        height: ${Radio.Control.Background.Unselected.Rest};
        margin-right: ${Radio.SM.ItemSpacing};
        transition: all 0.25s ease 0s;
        border: 2px solid ${Control.Background.Rest};
        border-radius: ${Radio.ControlBorderRadius};
        + label {
          transition: all 0.25s ease 0s;
        }
        &:checked {
          background: ${Radio.Control.Background.Fill.Rest};
        }
        &:hover {
          border: 2px solid ${Control.Background.Hover};
          width: ${Radio.Control.Background.Unselected.Hover};
          height: ${Radio.Control.Background.Unselected.Hover};
          + label {
            color: ${LabelNextToControl.Hover};
          }
        }
        &:active {
          border: 2px solid ${Control.Background.Pressed};
          width: ${Radio.Control.Background.Unselected.Pressed};
          height: ${Radio.Control.Background.Unselected.Pressed};
          + label {
            color: ${LabelNextToControl.Pressed};
          }
        }
        &[readonly] {
          border: 2px solid ${Control.Background.ReadOnly};
          width: ${Radio.Control.Background.Unselected.ReadOnly};
          height: ${Radio.Control.Background.Unselected.ReadOnly};
          + label {
            color: ${LabelNextToControl.ReadOnly};
          }
        }
        &:disabled {
          border: 2px solid ${Control.Background.Disabled};
          width: ${Radio.Control.Background.Unselected.Disabled};
          height: ${Radio.Control.Background.Unselected.Disabled};
          + label {
            color: ${LabelNextToControl.Disabled};
          }
        }
        &:focus {
          border: 2px solid ${Control.Background.Focus};
          width: ${Radio.Control.Background.Unselected.Focus};
          height: ${Radio.Control.Background.Unselected.Focus};
        }
        &.error-input {

        }
      }
    }
  }

  .blr-radio-input-group.vertical {
    flex-direction: column;
  }

  .blr-radio-input label {
    display: flex;
    align-items: center;
  }

  .blr-radio-input.sm {
    min-width: ${unsafeCSS(sizes.radioinput.sm.width)};
    font-family: ${SM.UserInput.fontFamily}, sans-serif;
    font-weight: ${SM.UserInput.fontWeight};
    font-size: ${SM.UserInput.fontSize};
    padding: ${SM.InputField.Padding};
  }

  .blr-radio-input.md {
    min-width: ${unsafeCSS(sizes.radioinput.md.width)};
    font-family: ${MD.UserInput.fontFamily}, sans-serif;
    font-weight: ${MD.UserInput.fontWeight};
    font-size: ${MD.UserInput.fontSize};
    padding: ${MD.InputField.Padding};
  }

  .blr-radio-input.lg {
    min-width: ${unsafeCSS(sizes.radioinput.lg.width)};
    font-family: ${LG.UserInput.fontFamily}, sans-serif;
    font-weight: ${LG.UserInput.fontWeight};
    font-size: ${LG.UserInput.fontSize};
    padding: ${LG.InputField.Padding};
  }


  .blr-radio-input:active label {
    &::before {
      box-shadow: inset 0 0 0 0.125em ${Control.Background.Pressed};
    }
  }

  .blr-radio-input:focus label {
    &::before {
      box-shadow: inset 0 0 0 0.125em ${Control.Background.Focus};
    }
  }

  .blr-radio-input.readonly label {
    &::before {
      box-shadow: inset 0 0 0 0.125em ${Control.Background.ReadOnly};
    }
  }

  .blr-input:disabled {
    border-width: ${Input.Default.Disabled.width};
    border-style: ${Input.Default.Disabled.style};
    border-color: ${Input.Default.Disabled.color};
  }

  .blr-input:focus {
    border-width: ${Input.Default.Focus.width};
    border-style: ${Input.Default.Focus.style};
    border-color: ${Input.Default.Focus.color};
  }

  .blr-input.error-input {
    border-width: ${Input.Error.Rest.width};
    border-style: ${Input.Error.Rest.style};
    border-color: ${Input.Error.Rest.color};
  }

  .blr-input.error-input:hover {
    border-width: ${Input.Error.Hover.width};
    border-style: ${Input.Error.Hover.style};
    border-color: ${Input.Error.Hover.color};
  }

  .blr-input.error-input:focus {
    border-width: ${Input.Error.Focus.width};
    border-style: ${Input.Error.Focus.style};
    border-color: ${Input.Error.Focus.color};
  }

  .blr-form-hint {
    display: flex;
    flex-direction: row;
  }

  .blr-form-hint.sm {
    padding: ${SM.CaptionComponent.Padding};
    font-weight: ${SM.Caption.fontWeight};
    font-size: ${SM.Caption.fontSize};
    line-height: ${SM.Caption.lineHeight};
    item-spacing: ${SM.CaptionComponent.ItemSpacing};
    margin: ${SM.CaptionSlot.Margin};
  }

  .blr-form-hint.md {
    padding: ${MD.CaptionComponent.Padding};
    font-weight: ${MD.Caption.fontWeight};
    font-size: ${MD.Caption.fontSize};
    line-height: ${MD.Caption.lineHeight};
    item-spacing: ${MD.CaptionComponent.ItemSpacing};
    margin: ${MD.CaptionSlot.Margin};
  }

  .blr-form-hint.lg {
    padding: ${LG.CaptionComponent.Padding};
    font-weight: ${LG.Caption.fontWeight};
    font-size: ${LG.Caption.fontSize};
    line-height: ${LG.Caption.lineHeight};
    item-spacing: ${LG.CaptionComponent.ItemSpacing};
    margin: ${LG.CaptionSlot.Margin};
  }

  .error {
    color: ${Caption.Error};
  }

  .hint {
    color: ${Caption.Hint};
  }
  /* stylelint-enable */
`;
