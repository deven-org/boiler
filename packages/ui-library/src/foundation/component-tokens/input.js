
import { css, unsafeCSS } from 'lit';

const inputs = {
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
    min-width: ${unsafeCSS(inputs.textinput.sm.width)};
  }

  .blr-text-input.md {
    min-width: ${unsafeCSS(inputs.textinput.md.width)};
  }

  .blr-text-input.lg {
    min-width: ${unsafeCSS(inputs.textinput.lg.width)};
  }
`;