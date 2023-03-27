import { css, unsafeCSS } from 'lit';

const form = {
  textarea: {
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

export const textarea = css`
  .blr-textarea.sm {
    width: ${unsafeCSS(form.textarea.sm.width)};
    height: ${unsafeCSS(form.textarea.sm.height)};
  }

  .blr-textarea.md {
    width: ${unsafeCSS(form.textarea.md.width)};
    height: ${unsafeCSS(form.textarea.md.height)};
  }

  .blr-textarea.lg {
    width: ${unsafeCSS(form.textarea.lg.width)};
    height: ${unsafeCSS(form.textarea.lg.height)};
  }
`;
