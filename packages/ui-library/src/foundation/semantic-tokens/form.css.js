import { unsafeCSS } from "lit";
import { semanticTokens } from "../_tokens-generated/index.generated";
import { css } from "nested-css-to-flat/lit-css";
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
    border-width: ${Forms.Input.Default.Rest.width};
    border-style: ${Forms.Input.Default.Rest.style};
    border-color: ${Forms.Input.Default.Rest.color};
    border-radius: ${Forms.InputBorderRadius};
    min-width: ${unsafeCSS(forms.textinput.minWidth)};
    box-sizing: border-box;
    color: ${Forms.UserInput.Default.Rest};
    background-color: ${Forms.SurfaceFill.Default.Rest};
    &::placeholder {
      color: ${Forms.Placeholder.Default.Rest};
    }

    .blr-input-icon {
      position: absolute;
      top: 2.25rem;
      left: ${unsafeCSS(forms.textinput.minWidth)};

    &::placeholder {
      color: ${Forms.Placeholder.Default.Hover};
    }
  }

  &:active {
    border-width: ${Forms.Input.Default.Pressed.width};
    border-style: ${Forms.Input.Default.Pressed.style};
    border-color: transparent;
    outline: ${Forms.Input.Default.Pressed.width} ${Forms.Input.Default.Pressed.style} ${
  Forms.Input.Default.Pressed.color
};

    &::placeholder {
      color: ${Forms.Placeholder.Default.Pressed};
    }
  }

  &[readonly] {
    border-width: ${Forms.Input.Default.ReadOnly.width};
    border-style: ${Forms.Input.Default.ReadOnly.style};
    color: ${Forms.Placeholder.Default.ReadOnly};
    border-color: transparent;
    outline: ${Forms.Input.Default.Hover.width} ${Forms.Input.Default.ReadOnly.style} ${
  Forms.Input.Default.ReadOnly.color
};

    &::placeholder {
      color: ${Forms.Placeholder.Default.ReadOnly};
    }
  }

  &:disabled {
    border-width: ${Forms.Input.Default.Disabled.width};
    border-style: ${Forms.Input.Default.Disabled.style};
    border-color: transparent;
    outline: ${Forms.Input.Default.Disabled.width} ${Forms.Input.Default.Disabled.style} ${
  Forms.Input.Default.Disabled.color
};
    background-color: ${Forms.SurfaceFill.Default.Disabled};
    color: ${Forms.UserInput.Default.Disabled};

    &::placeholder {
      color: ${Forms.Placeholder.Default.Disabled};
    }
  }

  &:focus {
    border-width: ${Forms.Input.Default.Rest.width};
    border-style: ${Forms.Input.Default.Rest.style};
    border-color: transparent;
    outline: ${Forms.Input.Default.Focus.width} ${Forms.Input.Default.Focus.style} ${Forms.Input.Default.Focus.color};

    &::placeholder {
      color: ${Forms.Placeholder.Default.Focus};
    }
  }

  &.error-input {
    background-color: ${Forms.SurfaceFill.Error.Rest};
    border-width: ${Forms.Input.Error.Rest.width};
    border-style: ${Forms.Input.Error.Rest.style};
    border-color: ${Forms.Input.Error.Rest.color};
    outline-color: ${Forms.Input.Error.Rest.color};
    color: ${Forms.UserInput.Error.Rest};

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

    &:focus {
      border-width: ${Forms.Input.Error.Rest.width};
      border-style: ${Forms.Input.Error.Rest.style};
      border-color: transparent;
      outline: ${Forms.Input.Error.Focus.width} ${Forms.Input.Error.Focus.style} ${Forms.Input.Error.Focus.color};

      &::placeholder {
        color: ${Forms.Placeholder.Error.Focus};
      }
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
      font-weight: ${Forms.SM.LabelNextToControl.fontWeight};
      font-size: ${Forms.SM.LabelNextToControl.fontSize};
      font-family: ${Forms.SM.LabelNextToControl.fontFamily}, sans-serif;
      line-height: ${Forms.SM.LabelNextToControl.lineHeight};
      color: ${Forms.Label.Rest};
    }

    &.md {
      padding: ${Forms.MD.LabelSlot.Padding};
      font-weight: ${Forms.MD.LabelNextToControl.fontWeight};
      font-size: ${Forms.MD.LabelNextToControl.fontSize};
      font-family: ${Forms.MD.LabelNextToControl.fontFamily}, sans-serif;
      line-height: ${Forms.MD.LabelNextToControl.lineHeight};
      color: ${Forms.Label.Rest};
    }

    &.lg {
      padding: ${Forms.LG.LabelSlot.Padding};
      font-weight: ${Forms.LG.LabelNextToControl.fontWeight};
      font-size: ${Forms.LG.LabelNextToControl.fontSize};
      font-family: ${Forms.LG.LabelNextToControl.fontFamily}, sans-serif;
      line-height: ${Forms.LG.LabelNextToControl.lineHeight};
      color: ${Forms.Label.Rest};
    }
  }

  .blr-form-label-appendix {
    color: ${Forms.LabelAppendix.Rest};

    &:focus {
      color: ${Forms.LabelAppendix.Focus};
    }

    &:hover {
      color: ${Forms.LabelAppendix.Hover};
    }

    &:disabled {
      color: ${Forms.LabelAppendix.Disabled};
    }

    &[readonly] {
      color: ${Forms.LabelAppendix.ReadOnly};
    }

    &.sm {
      font-weight: ${Forms.SM.LabelAppendix.fontWeight};
      font-size: ${Forms.SM.LabelAppendix.fontSize};
      font-family: ${Forms.SM.LabelAppendix.fontFamily}, sans-serif;
      line-height: ${Forms.SM.LabelAppendix.lineHeight};
      color: ${Forms.LabelAppendix.Rest};
    }

    &.md {
      padding: ${Forms.MD.LabelSlot.Padding};
      font-weight: ${Forms.MD.LabelAppendix.fontWeight};
      font-size: ${Forms.MD.LabelAppendix.fontSize};
      font-family: ${Forms.MD.LabelAppendix.fontFamily}, sans-serif;
      line-height: ${Forms.MD.LabelAppendix.lineHeight};
      color: ${Forms.LabelAppendix.Rest};
    }

    &.lg {
      padding: ${Forms.LG.LabelSlot.Padding};
      font-weight: ${Forms.LG.LabelAppendix.fontWeight};
      font-size: ${Forms.LG.LabelAppendix.fontSize};
      font-family: ${Forms.LG.LabelAppendix.fontFamily}, sans-serif;
      line-height: ${Forms.LG.LabelAppendix.lineHeight};
      color: ${Forms.LabelAppendix.Rest};
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
  .error {
    color: ${Forms.Caption.Error};
  }

  .hint {
    color: ${Forms.Caption.Hint};
  }
  /* stylelint-enable */
`;
