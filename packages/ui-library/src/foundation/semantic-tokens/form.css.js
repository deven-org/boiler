import { unsafeCSS } from "lit";
import { semanticTokens } from "../_tokens-generated/index.generated";
import { css } from "nested-css-to-flat/lit-css";

const { Forms } = semanticTokens;

const forms = {
  textinput: {
    minWidth: "300px",
  },
};

export const form = css`
.blr-form-element {
  font-weight: ${Forms.MD.UserInput.fontWeight};
  font-size: ${Forms.MD.UserInput.fontSize};
  font-family: ${Forms.MD.UserInput.fontFamily}, sans-serif;
  border-width: ${Forms.Input.Default.Rest.width};
  border-style: ${Forms.Input.Default.Rest.style};
  border-color: ${Forms.Input.Default.Rest.color};
  border-radius: ${Forms.InputBorderRadius};
  min-width: ${unsafeCSS(forms.textinput.minWidth)};
  padding: ${Forms.MD.InputField.Padding};
  box-sizing: border-box;

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

  &:active{
    border-width: ${Forms.Input.Default.Pressed.width};
    border-style: ${Forms.Input.Default.Pressed.style};
    border-color: ${Forms.Input.Default.Pressed.color};

    &::placeholder {
      color: ${Forms.Placeholder.Default.Pressed};
    }
  }

  &[readonly] {
    border-width: ${Forms.Input.Default.ReadOnly.width};
    border-style: ${Forms.Input.Default.ReadOnly.style};
    border-color: ${Forms.Input.Default.ReadOnly.color};
    color: ${Forms.Placeholder.Default.ReadOnly};

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
    outline-color: ${Forms.Input.Error.Rest.color};

    &::placeholder {
      color: ${Forms.Placeholder.Error.Rest};
    }

    &:hover {
      border-width: ${Forms.Input.Error.Hover.width};
      border-style: ${Forms.Input.Error.Hover.style};
      border-color: ${Forms.Input.Error.Hover.color};
      outline-color: ${Forms.Input.Error.Hover.color};

      &::placeholder {
        color: ${Forms.Placeholder.Error.Hover};
      }
    }

    &:focus {
      border-width: ${Forms.Input.Error.Focus.width};
      border-style: ${Forms.Input.Error.Focus.style};
      border-color: ${Forms.Input.Error.Focus.color};
      outline-color: ${Forms.Input.Error.Focus.color};

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
  margin-left: -25px;
  color: ${Forms.Placeholder.Default.Rest};
}

.blr-input-icon.error {
    color: ${Forms.Input.Error.Rest.color};
}

.blr-input-inner-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${Forms.MD.LabelSlot.Padding};
  &.sm {
    padding-bottom: ${Forms.SM.LabelSlot.Padding};
  }
  &.lg {
    padding-bottom: ${Forms.LG.LabelSlot.Padding};
  }
}
.blr-form-hint {
  display: flex;
  flex-direction: row;
  align-items: center;
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
  .blr-caption-text {
    padding-left: ${Forms.MD.LabelSlot.ItemSpacing};
  }
  &.error {
    color: ${Forms.Caption.Error};
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
.blr-form-label-appendix {
  padding-left: ${Forms.MD.LabelSlot.Padding};
  font-weight: ${Forms.MD.LabelAppendix.fontWeight};
  font-size: ${Forms.MD.LabelAppendix.fontSize};
  font-family: ${Forms.MD.LabelAppendix.fontFamily}, sans-serif;
  line-height: ${Forms.MD.LabelAppendix.lineHeight};
  color: ${Forms.LabelAppendix.Rest};
  &.sm {
    padding-left: ${Forms.SM.LabelSlot.Padding};
    font-weight: ${Forms.SM.LabelAppendix.fontWeight};
    font-size: ${Forms.SM.LabelAppendix.fontSize};
    font-family: ${Forms.MD.LabelAppendix.fontFamily}, sans-serif;
    line-height: ${Forms.MD.LabelAppendix.lineHeight};
  }
  &.lg {
    padding-left: ${Forms.LG.LabelSlot.Padding};
    font-weight: ${Forms.LG.LabelAppendix.fontWeight};
    font-size: ${Forms.LG.LabelAppendix.fontSize};
    font-family: ${Forms.LG.LabelAppendix.fontFamily}, sans-serif;
    line-height: ${Forms.LG.LabelAppendix.lineHeight};
  }

.error {
  color: ${Forms.Caption.Error};
}
.hint {
  color: ${Forms.Caption.Hint};
}
`;
