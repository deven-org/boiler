import { css, unsafeCSS } from 'lit';
import { semanticTokens } from '../_tokens-generated/index.generated';

const { Forms } = semanticTokens;

const forms = {
  textinput: {
    sm: {
      width: '50px',
      height: '100px',
    },
    md: {
      width: '100px',
      height: '200px',
    },
    lg: {
      width: '200px',
      height: '300px',
    },
  },
};

export const textInput = css`
  .blr-text-input.sm {
    min-width: ${unsafeCSS(forms.textinput.sm.width)};
  }

  .blr-text-input.md {
    min-width: ${unsafeCSS(forms.textinput.md.width)};
  }

  .blr-text-input.lg {
    min-width: ${unsafeCSS(forms.textinput.lg.width)};
  }

  .blr-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: ${Forms.UserInput.DefaultType.fontFamily};
  }

  .blr-text-input {
    font-weight: ${Forms.UserInput.DefaultType.fontWeight};
    font-size: ${Forms.UserInput.DefaultType.fontSize};
    border-width: ${Forms.Input.Default.Rest.width};
    border-style: ${Forms.Input.Default.Rest.style};
    border-color: ${Forms.Input.Default.Rest.color};
    border-radius: ${Forms.InputBorderRadius};
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: ${Forms.InputField.Padding};
    position: relative;
  }

  .blr-text-input:hover {
    border-width: ${Forms.Input.Default.Hover.width};
    border-style: ${Forms.Input.Default.Hover.style};
    border-color: ${Forms.Input.Default.Hover.color};
  }
  .blr-text-input[readonly] {
    border-width: ${Forms.Input.Default.ReadOnly.width};
    border-style: ${Forms.Input.Default.ReadOnly.style};
    border-color: ${Forms.Input.Default.ReadOnly.color};
  }
  .blr-text-input:disabled {
    border-width: ${Forms.Input.Default.Disabled.width};
    border-style: ${Forms.Input.Default.Disabled.style};
    border-color: ${Forms.Input.Default.Disabled.color};
  }
  .blr-text-input:focus {
    border-width: ${Forms.Input.Default.Focus.width};
    border-style: ${Forms.Input.Default.Focus.style};
    border-color: ${Forms.Input.Default.Focus.color};
  }

  .blr-text-input.error-input {
    border-width: ${Forms.Input.Error.Rest.width};
    border-style: ${Forms.Input.Error.Rest.style};
    border-color: ${Forms.Input.Error.Rest.color};
  }
  .blr-text-input.error-input:hover {
    border-width: ${Forms.Input.Error.Hover.width};
    border-style: ${Forms.Input.Error.Hover.style};
    border-color: ${Forms.Input.Error.Hover.color};
  }
  .blr-text-input.error-input:focus {
    border-width: ${Forms.Input.Error.Focus.width};
    border-style: ${Forms.Input.Error.Focus.style};
    border-color: ${Forms.Input.Error.Focus.color};
  }

  .blr-form-hint {
    display: flex;
    flex-direction: row;
    padding: ${Forms.Caption.Padding};
    font-weight: ${Forms.Caption.DefaultType.fontWeight};
    font-size: ${Forms.Caption.DefaultType.fontSize};
    line-height: ${Forms.Caption.DefaultType.lineHeight};
    item-spacing: ${Forms.Caption.ItemSpacing};
    margin: ${Forms.CaptionSlot.Margin};
  }

  .error {
    color: ${Forms.Caption.Error};
  }

  .hint {
    color: ${Forms.Caption.Hint};
  }
`;
