
import { css, unsafeCSS } from 'lit';
import { semanticTokens } from '../_tokens-generated/index.generated';

const { BorderRadius, BorderWidth, SM, MD, LG, Forms } =
  semanticTokens.semantic;

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
    font-family: ${Forms['user-input']['default'].fontFamily};
  }

  .blr-text-input {
    line-height: 140%;
    font-weight: 400;
    font-size: 16px;
    border: 1px solid #000;
    border-radius: ${Forms['input-border-radius']};
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: ${Forms['input']['padding']};
  }

`;