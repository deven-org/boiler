import { css, unsafeCSS } from 'lit';

const form = {
  password: {
    sm: {
      maxwidth: '8px',
    },
    md: {
      maxwidth: '12px',
    },
    lg: {
      maxwidth: '16px',
    },
  },
};

export const password = css`
  .blr-form-password.sm {
    max-width: ${unsafeCSS(form.password.sm)};
  }

  .blr-form-password.md {
    max-width: ${unsafeCSS(form.password.md)};
  }

  .blr-form-password.lg {
    max-width: ${unsafeCSS(form.password.lg)};
  }
`;
