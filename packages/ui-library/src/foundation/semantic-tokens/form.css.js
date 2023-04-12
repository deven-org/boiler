import { css, unsafeCSS } from 'lit';
import { semanticTokens } from '../_tokens-generated/index.generated';

const { Forms } = semanticTokens;

const forms = {
  textinput: {
    xs: {
      width: '150px',
    },
    sm: {
      width: '200px',
    },
    md: {
      width: '250px',
    },
    lg: {
      width: '300px',
    },
    xl: {
      width: '350px',
    },
  },
  label: {
    sm: {
      fontsize: '8px',
    },
    md: {
      fontsize: '12px',
    },
    lg: {
      fontsize: '16px',
    },
  },
};

export const textInput = css`
.blr-input.xs {
  max-width: ${unsafeCSS(forms.textinput.xs.width)};
}
.blr-input.sm {
    max-width: ${unsafeCSS(forms.textinput.sm.width)};
  }

  .blr-input.md {
    max-width: ${unsafeCSS(forms.textinput.md.width)};
  }

  .blr-input.lg {
    max-width: ${unsafeCSS(forms.textinput.lg.width)};
  }
  .blr-input.xl {
    max-width: ${unsafeCSS(forms.textinput.xl.width)};
  }
  .blr-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    font-family: ${Forms.UserInput.DefaultType.fontFamily};
  }

  .blr-text-input {
    font-weight: ${Forms.UserInput.DefaultType.fontWeight};
    font-size: ${Forms.UserInput.DefaultType.fontSize};
    border-width: ${Forms.Input.Default.Rest.width};
    border-style: ${Forms.Input.Default.Rest.style};
    border-color: ${Forms.Input.Default.Rest.color};
    border-radius: ${Forms.InputBorderRadius};
    width: 100%;
    padding: ${Forms.InputField.Padding};
    
  }

  .blr-text-input::placeholder {
    color: ${Forms.Placeholder.Default.Rest};
  }

  .blr-text-input:hover {
    border-width: ${Forms.Input.Default.Hover.width};
    border-style: ${Forms.Input.Default.Hover.style};
    border-color: ${Forms.Input.Default.Hover.color};

  }

  .blr-text-input::placeholder:hover {
    color: ${Forms.Placeholder.Default.Hover};
  }

  .blr-text-input[readonly] {
    border-width: ${Forms.Input.Default.ReadOnly.width};
    border-style: ${Forms.Input.Default.ReadOnly.style};
    border-color: ${Forms.Input.Default.ReadOnly.color};
    
  }

  .blr-text-input[readonly]::placeholder {
    color: ${Forms.Placeholder.Default.ReadOnly};
  }

  .blr-text-input:disabled {
    border-width: ${Forms.Input.Default.Disabled.width};
    border-style: ${Forms.Input.Default.Disabled.style};
    border-color: ${Forms.Input.Default.Disabled.color};
    
  }

  .blr-text-input::placeholder:disabled {
    color: ${Forms.Placeholder.Default.Disabled};
  }

  .blr-text-input:focus {
    border-width: ${Forms.Input.Default.Focus.width};
    border-style: ${Forms.Input.Default.Focus.style};
    border-color: ${Forms.Input.Default.Focus.color};

  }

  .blr-text-input::placeholder:focus {
    color: ${Forms.Placeholder.Default.Focus};
  }

  .blr-text-input.error-input {
    border-width: ${Forms.Input.Error.Rest.width};
    border-style: ${Forms.Input.Error.Rest.style};
    border-color: ${Forms.Input.Error.Rest.color};
    
  }

  .blr-text-input.error-input::placeholder {
    color: ${Forms.Placeholder.Error.Rest};
  }

  .blr-text-input.error-input:hover {
    border-width: ${Forms.Input.Error.Hover.width};
    border-style: ${Forms.Input.Error.Hover.style};
    border-color: ${Forms.Input.Error.Hover.color};
    ::placeholder {
      color: ${Forms.Placeholder.Error.Hover};
    }
  }

  
  .blr-text-input.error-input:focus {
    border-width: ${Forms.Input.Error.Focus.width};
    border-style: ${Forms.Input.Error.Focus.style};
    border-color: ${Forms.Input.Error.Focus.color};
    ::placeholder {
      color: ${Forms.Placeholder.Error.Focus};
    }
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

  .blr-form-label.sm {
    font-size: ${unsafeCSS(forms.label.sm)};
  }

  .blr-form-label.md {
    font-size: ${unsafeCSS(forms.label.md)};
  }

  .blr-form-label.lg {
    font-size: ${unsafeCSS(forms.label.lg)};
  }

  .blr-form-label {
    padding: ${Forms.LabelSlot.Padding}
    font-weight: ${Forms.Label.Default.fontWeight};
    font-size: ${Forms.Label.Default.fontSize};
    item-spacing: ${Forms.LabelSlot.ItemSpacing};
    line-height: ${Forms.Label.Default.lineHeight};
    color: ${Forms.Label.Rest}
  }

  .blr-input-icon {
    position: absolute;
    top: 1.75rem;
    right: -1rem;
    fill: var(--omrs-color-ink-medium-contrast);
  }

  .blr-form-label:focus {
    color: ${Forms.Label.Focus}
  }
  
  .blr-form-label:hover {
    color: ${Forms.Label.Hover} 
  }
  
  .blr-form-label:disabled {
    color: ${Forms.Label.Disabled} 
  }

  .blr-form-label[readonly] {
    color: ${Forms.Label.ReadOnly} 
  }

  .error {
    color: ${Forms.Caption.Error};
  }

  .hint {
    color: ${Forms.Caption.Hint};
  }
`;
