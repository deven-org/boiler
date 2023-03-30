import { css, unsafeCSS } from 'lit';

const form = {
  label: {
    sm: {
      fontsize: '8px',
    },
    md: {
      fontsize: '12px'
    },
    lg: {
      fontsize: '16px'
    },
  },
};

export const label = css`
  .blr-form-label.sm {
    font-size: ${unsafeCSS(form.label.sm)};
  }

  .blr-form-label.md {
    font-size: ${unsafeCSS(form.label.md)};
  }

  .blr-form-label.lg {
    font-size: ${unsafeCSS(form.label.lg)};
  }
`;