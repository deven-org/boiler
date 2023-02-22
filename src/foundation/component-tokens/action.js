import { css, unsafeCSS } from 'lit';
import { componentTokens } from '../_tokens-generated/component-tokens.generated';

const { TextButton } = componentTokens.component.Action;

export const textButton = css`
  .blr-text-button.xs {
    padding: ${unsafeCSS(TextButton.XS.Padding)};
    gap: ${unsafeCSS(TextButton.XS.Gap)};
  }

  .blr-text-button.sm {
    padding: ${unsafeCSS(TextButton.SM.Padding)};
    gap: ${unsafeCSS(TextButton.SM.Gap)};
  }

  .blr-text-button.md {
    padding: ${unsafeCSS(TextButton.MD.Padding)};
    gap: ${unsafeCSS(TextButton.MD.Gap)};
  }

  .blr-text-button.lg {
    padding: ${unsafeCSS(TextButton.LG.Padding)};
    gap: ${unsafeCSS(TextButton.LG.Gap)};
  }

  .blr-text-button.xl {
    padding: ${unsafeCSS(TextButton.XL.Padding)};
    gap: ${unsafeCSS(TextButton.XL.Gap)};
  }
`;
