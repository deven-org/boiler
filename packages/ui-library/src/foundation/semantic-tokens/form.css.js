import { css, unsafeCSS } from "lit";
import { semanticTokens } from "../_tokens-generated/index.generated";

const { Forms } = semanticTokens;

const forms = {
  textinput: {
    minWidth: "300px",
  },
};

export const textInput = css`
  .blr-text-input {
    font-weight: ${Forms.MD.UserInput.fontWeight};
    font-size: ${Forms.MD.UserInput.fontSize};
    font-family: ${Forms.MD.UserInput.fontFamily}, sans-serif;
    border-width: ${Forms.Input.Default.Rest.width};
    border-style: ${Forms.Input.Default.Rest.style};
    border-color: ${Forms.Input.Default.Rest.color};
    border-radius: ${Forms.InputBorderRadius};
    min-width: ${unsafeCSS(forms.textinput.minWidth)};
    padding: ${Forms.MD.InputField.Padding};

    &::placeholder {
      color: ${Forms.Placeholder.Default.Rest};
    }

    &:hover {
      border-width: ${Forms.Input.Default.Hover.width};
      border-style: ${Forms.Input.Default.Hover.style};
      border-color: ${Forms.Input.Default.Hover.color};

      &::placeholder {
        color: ${Forms.Placeholder.Default.Hover};
      }
    }

    &[readonly] {
      border-width: ${Forms.Input.Default.ReadOnly.width};
      border-style: ${Forms.Input.Default.ReadOnly.style};
      border-color: ${Forms.Input.Default.ReadOnly.color};

      &::placeholder {
        color: ${Forms.Placeholder.Default.ReadOnly};
      }
    }

    &:disabled {
      border-width: ${Forms.Input.Default.Disabled.width};
      border-style: ${Forms.Input.Default.Disabled.style};
      border-color: ${Forms.Input.Default.Disabled.color};

      &::placeholder {
        color: ${Forms.Placeholder.Default.Disabled};
      }
    }

    &:focus {
      border-width: ${Forms.Input.Default.Focus.width};
      border-style: ${Forms.Input.Default.Focus.style};
      border-color: ${Forms.Input.Default.Focus.color};

      &::placeholder {
        color: ${Forms.Placeholder.Default.Focus};
      }
    }

    &.error-input {
      border-width: ${Forms.Input.Error.Rest.width};
      border-style: ${Forms.Input.Error.Rest.style};
      border-color: ${Forms.Input.Error.Rest.color};

      &::placeholder {
        color: ${Forms.Placeholder.Error.Rest};
      }

      &:hover {
        border-width: ${Forms.Input.Error.Hover.width};
        border-style: ${Forms.Input.Error.Hover.style};
        border-color: ${Forms.Input.Error.Hover.color};

        &::placeholder {
          color: ${Forms.Placeholder.Error.Hover};
        }
      }

      &:focus {
        border-width: ${Forms.Input.Error.Focus.width};
        border-style: ${Forms.Input.Error.Focus.style};
        border-color: ${Forms.Input.Error.Focus.color};

        &::placeholder {
          color: ${Forms.Placeholder.Error.Focus};
        }
      }
    }

    &.lg {
      font-weight: ${Forms.LG.UserInput.fontWeight};
      font-size: ${Forms.LG.UserInput.fontSize};
      font-family: ${Forms.LG.UserInput.fontFamily}, sans-serif;
      padding: ${Forms.LG.InputField.Padding};
    }

    &.sm {
      font-weight: ${Forms.SM.UserInput.fontWeight};
      font-size: ${Forms.SM.UserInput.fontSize};
      font-family: ${Forms.SM.UserInput.fontFamily}, sans-serif;
      padding: ${Forms.SM.InputField.Padding};
    }
  }

  .blr-input-icon {
    position: absolute;
    top: 2.25rem;
    left: ${unsafeCSS(forms.textinput.minWidth)};

    &.sm {
      top: 2rem;
    }

    &.lg {
      top: 2.5rem;
    }
  }

  .blr-form-hint {
    display: flex;
    flex-direction: row;
    padding: ${Forms.MD.CaptionComponent.Padding};
    font-weight: ${Forms.MD.Caption.fontWeight};
    font-size: ${Forms.MD.Caption.fontSize};
    font-family: ${Forms.MD.Caption.fontFamily}, sans-serif;
    line-height: ${Forms.MD.Caption.lineHeight};
    margin: ${Forms.MD.CaptionSlot.Margin};

    &.sm {
      padding: ${Forms.SM.CaptionComponent.Padding};
      font-weight: ${Forms.SM.Caption.fontWeight};
      font-size: ${Forms.SM.Caption.fontSize};
      font-family: ${Forms.SM.Caption.fontFamily}, sans-serif;
      line-height: ${Forms.SM.Caption.lineHeight};
      margin: ${Forms.SM.CaptionSlot.Margin};
    }

    &.lg {
      padding: ${Forms.LG.CaptionComponent.Padding};
      font-weight: ${Forms.LG.Caption.fontWeight};
      font-size: ${Forms.LG.Caption.fontSize};
      font-family: ${Forms.LG.Caption.fontFamily}, sans-serif;
      line-height: ${Forms.LG.Caption.lineHeight};
      margin: ${Forms.LG.CaptionSlot.Margin};
    }
  }

  .blr-form-label {
    padding: ${Forms.MD.LabelSlot.Padding};
    font-weight: ${Forms.MD.Label.fontWeight};
    font-size: ${Forms.MD.Label.fontSize};
    font-family: ${Forms.MD.Label.fontFamily}, sans-serif;
    line-height: ${Forms.MD.Label.lineHeight};
    color: ${Forms.Label.Rest};

    &:focus {
      color: ${Forms.Label.Focus};
    }

    &:hover {
      color: ${Forms.Label.Hover};
    }

    &:disabled {
      color: ${Forms.Label.Disabled};
    }

    &[readonly] {
      color: ${Forms.Label.ReadOnly};
    }

    &.sm {
      padding: ${Forms.SM.LabelSlot.Padding};
      font-weight: ${Forms.SM.Label.fontWeight};
      font-size: ${Forms.SM.Label.fontSize};
      font-family: ${Forms.SM.Label.fontFamily}, sans-serif;
      line-height: ${Forms.SM.Label.lineHeight};
      color: ${Forms.Label.Rest};
    }

    &.lg {
      padding: ${Forms.LG.LabelSlot.Padding};
      font-weight: ${Forms.LG.Label.fontWeight};
      font-size: ${Forms.LG.Label.fontSize};
      font-family: ${Forms.LG.Label.fontFamily}, sans-serif;
      line-height: ${Forms.LG.Label.lineHeight};
      color: ${Forms.Label.Rest};
    }
  }

  .blr-caption-text {
    padding-left: ${Forms.MD.LabelSlot.ItemSpacing};
  }

  .error {
    color: ${Forms.Caption.Error};
  }

  .hint {
    color: ${Forms.Caption.Hint};
  }
`;
