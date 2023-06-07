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
  all: initial;
  color: ${Forms.UserInput.Default.Rest};
  border-width: ${Forms.Input.Default.Focus.width};
  border-style: ${Forms.Input.Default.Rest.style};
  border-color: transparent;
  outline: ${Forms.Input.Default.Rest.width} ${Forms.Input.Default.Rest.style} ${Forms.Input.Default.Rest.color};
  border-radius: ${Forms.InputBorderRadius};
  min-width: ${unsafeCSS(forms.textinput.minWidth)};
  box-sizing: border-box;
  color: ${Forms.UserInput.Default.Rest};
  background-color: ${Forms.SurfaceFill.Default.Rest};

  &::placeholder {
    color: ${Forms.Placeholder.Default.Rest};
  }

  &:hover {
    border-width: ${Forms.Input.Default.Focus.width};
    border-style: ${Forms.Input.Default.Hover.style};
    border-color: transparent;
    outline: ${Forms.Input.Default.Hover.width} ${Forms.Input.Default.Hover.style} ${Forms.Input.Default.Hover.color};
    color: ${Forms.UserInput.Default.Hover};
    background-color: ${Forms.SurfaceFill.Default.Hover};

    &::placeholder {
      color: ${Forms.Placeholder.Default.Hover};
    }
  }

  &:active{
    border-width: ${Forms.Input.Default.Focus.width};
    border-style: ${Forms.Input.Default.Pressed.style};
    border-color: transparent;
    outline: ${Forms.Input.Default.Pressed.width} ${Forms.Input.Default.Pressed.style} ${
  Forms.Input.Default.Pressed.color
};
    color: ${Forms.UserInput.Default.Pressed};
    background-color: ${Forms.SurfaceFill.Default.Pressed};

    &::placeholder {
      color: ${Forms.Placeholder.Default.Pressed};
    }
  }

  &[readonly] {
    border-width: ${Forms.Input.Default.Focus.width};
    border-style: ${Forms.Input.Default.ReadOnly.style};
    border-color: transparent;
    outline: ${Forms.Input.Default.Hover.width} ${Forms.Input.Default.ReadOnly.style} ${
  Forms.Input.Default.ReadOnly.color
};
    color: ${Forms.UserInput.Default.ReadOnly};
    background-color: ${Forms.SurfaceFill.Default.ReadOnly};

    &::placeholder {
      color: ${Forms.Placeholder.Default.ReadOnly};
    }
  }

  &:disabled {
    border-width: ${Forms.Input.Default.Focus.width};
    border-style: ${Forms.Input.Default.Disabled.style};
    border-color: transparent;
    outline: ${Forms.Input.Default.Disabled.width} ${Forms.Input.Default.Disabled.style} ${
  Forms.Input.Default.Disabled.color
};
    color: ${Forms.UserInput.Default.Disabled};
    background-color: ${Forms.SurfaceFill.Default.Disabled};

    &::placeholder {
      color: ${Forms.Placeholder.Default.Disabled};
    }
  }

  &:focus {
    border-width: ${Forms.Input.Default.Focus.width};
    border-style: ${Forms.Input.Default.Focus.style};
    border-color: ${Forms.Input.Default.Focus.color};
    outline: none;
    color: ${Forms.UserInput.Default.Focus};
    background-color: ${Forms.SurfaceFill.Default.Focus};

    &::placeholder {
      color: ${Forms.Placeholder.Default.Focus};
    }
  }

  &.error-input {
    border-width: ${Forms.Input.Error.Focus.width};
    border-style: ${Forms.Input.Error.Rest.style};
    border-color: transparent;
    outline: ${Forms.Input.Error.Rest.width} ${Forms.Input.Error.Rest.style} ${Forms.Input.Error.Rest.color};
    color: ${Forms.UserInput.Error.Rest};
    background-color: ${Forms.SurfaceFill.Error.Rest};

    &::placeholder {
      color: ${Forms.Placeholder.Error.Rest};
    }

    &:hover {
      border-width: ${Forms.Input.Error.Focus.width};
      border-style: ${Forms.Input.Error.Hover.style};
      border-color: transparent;
      outline: ${Forms.Input.Error.Hover.width} ${Forms.Input.Error.Hover.style} ${Forms.Input.Error.Hover.color};
      color: ${Forms.UserInput.Error.Hover};
      background-color: ${Forms.SurfaceFill.Error.Hover};

      &::placeholder {
        color: ${Forms.Placeholder.Error.Hover};
      }
    }

    &:active {
      border-width: ${Forms.Input.Error.Focus.width};
      border-style: ${Forms.Input.Error.Pressed.style};
      border-color: transparent;
      outline: ${Forms.Input.Error.Pressed.width} ${Forms.Input.Error.Pressed.style} ${Forms.Input.Error.Pressed.color};
      color: ${Forms.UserInput.Error.Pressed};
      background-color: ${Forms.SurfaceFill.Error.Pressed};

      &::placeholder {
        color: ${Forms.Placeholder.Error.Pressed};
      }
    }

    &:focus {
      border-width: ${Forms.Input.Error.Focus.width};
      border-style: ${Forms.Input.Error.Focus.style};
      border-color: ${Forms.Input.Error.Focus.color};
      outline: none;
      color: ${Forms.UserInput.Error.Focus};
      background-color: ${Forms.SurfaceFill.Error.Focus};

      &::placeholder {
        color: ${Forms.Placeholder.Error.Focus};
      }
    }
  }

  &.sm {
    font-weight: ${Forms.SM.UserInput.fontWeight};
    font-size: ${Forms.SM.UserInput.fontSize};
    font-family: ${Forms.SM.UserInput.fontFamily}, sans-serif;
    padding: ${Forms.SM.InputField.Padding};
    line-height: ${Forms.SM.UserInput.lineHeight};
  }

  &.md {
    font-weight: ${Forms.MD.UserInput.fontWeight};
    font-size: ${Forms.MD.UserInput.fontSize};
    font-family: ${Forms.MD.UserInput.fontFamily}, sans-serif;
    padding: ${Forms.MD.InputField.Padding};
    line-height: ${Forms.MD.UserInput.lineHeight};
  }

  &.lg {
    font-weight: ${Forms.LG.UserInput.fontWeight};
    font-size: ${Forms.LG.UserInput.fontSize};
    font-family: ${Forms.LG.UserInput.fontFamily}, sans-serif;
    padding: ${Forms.LG.InputField.Padding};
    line-height: ${Forms.LG.UserInput.lineHeight};
  }
}

.blr-input-icon {
  &.sm {
    margin-left: -25px;
  }
  &.md {
    margin-left: -32px;
  }
  &.lg {
    margin-left: -40px;
  }
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
  align-items: center;
  padding: ${Forms.MD.CaptionComponent.Padding};
  font-weight: ${Forms.MD.Caption.fontWeight};
  font-size: ${Forms.MD.Caption.fontSize};
  font-family: ${Forms.MD.Caption.fontFamily}, sans-serif;
  line-height: ${Forms.MD.Caption.lineHeight};
  margin: ${Forms.MD.CaptionSlot.Margin};
  gap: ${Forms.MD.CaptionComponent.ItemSpacing};
  color: ${Forms.Caption.Hint};
  &.sm {
    padding: ${Forms.SM.CaptionComponent.Padding};
    font-weight: ${Forms.SM.Caption.fontWeight};
    font-size: ${Forms.SM.Caption.fontSize};
    font-family: ${Forms.SM.Caption.fontFamily}, sans-serif;
    line-height: ${Forms.SM.Caption.lineHeight};
    margin: ${Forms.SM.CaptionSlot.Margin};
    gap: ${Forms.SM.CaptionComponent.ItemSpacing};
  }
  &.lg {
    padding: ${Forms.LG.CaptionComponent.Padding};
    font-weight: ${Forms.LG.Caption.fontWeight};
    font-size: ${Forms.LG.Caption.fontSize};
    font-family: ${Forms.LG.Caption.fontFamily}, sans-serif;
    line-height: ${Forms.LG.Caption.lineHeight};
    margin: ${Forms.LG.CaptionSlot.Margin};
    gap: ${Forms.LG.CaptionComponent.ItemSpacing};
  }
  .blr-caption-text {
    padding-left: ${Forms.MD.LabelSlot.ItemSpacing};
  }
  &.error {
    color: ${Forms.Caption.Error};
  }
}
.blr-form-label {
  display: flex;
  align-items: center;
  padding: ${Forms.MD.LabelSlot.Padding};
  font-weight: ${Forms.MD.Label.fontWeight};
  font-size: ${Forms.MD.Label.fontSize};
  font-family: ${Forms.MD.Label.fontFamily}, sans-serif;
  line-height: ${Forms.MD.Label.lineHeight};
  gap: ${Forms.MD.FormsLabelComponent.ItemSpacing};
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
    gap: ${Forms.SM.FormsLabelComponent.ItemSpacing};
    color: ${Forms.Label.Rest};
  }
  &.lg {
    padding: ${Forms.LG.LabelSlot.Padding};
    font-weight: ${Forms.LG.Label.fontWeight};
    font-size: ${Forms.LG.Label.fontSize};
    font-family: ${Forms.LG.Label.fontFamily}, sans-serif;
    line-height: ${Forms.LG.Label.lineHeight};
    color: ${Forms.Label.Rest};
    gap: ${Forms.LG.FormsLabelComponent.ItemSpacing};
  }
}
.blr-form-label-appendix {
  padding-left: ${Forms.MD.LabelSlot.ItemSpacing};
  font-weight: ${Forms.MD.LabelAppendix.fontWeight};
  font-size: ${Forms.MD.LabelAppendix.fontSize};
  font-family: ${Forms.MD.LabelAppendix.fontFamily}, sans-serif;
  line-height: ${Forms.MD.LabelAppendix.lineHeight};
  color: ${Forms.LabelAppendix.Rest};
  &.sm {
    padding-left: ${Forms.SM.LabelSlot.ItemSpacing};
    font-weight: ${Forms.SM.LabelAppendix.fontWeight};
    font-size: ${Forms.SM.LabelAppendix.fontSize};
    font-family: ${Forms.MD.LabelAppendix.fontFamily}, sans-serif;
    line-height: ${Forms.MD.LabelAppendix.lineHeight};
  }
  &.lg {
    padding-left: ${Forms.LG.LabelSlot.ItemSpacing};
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
