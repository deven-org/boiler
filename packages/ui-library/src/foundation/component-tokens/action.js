import { css } from 'lit';
import { componentTokens } from '../_tokens-generated/index.generated';

const { TextButton, IconButton, TextInput } = componentTokens.component.Action;

export const textButton = css`
  .blr-text-button.xs {
    padding: ${TextButton.XS.Padding};
    gap: ${TextButton.XS.Gap};
  }

  .blr-text-button.sm {
    padding: ${TextButton.SM.Padding};
    gap: ${TextButton.SM.Gap};
  }

  .blr-text-button.md {
    padding: ${TextButton.MD.Padding};
    gap: ${TextButton.MD.Gap};
  }

  .blr-text-button.lg {
    padding: ${TextButton.LG.Padding};
    gap: ${TextButton.LG.Gap};
  }

  .blr-text-button.xl {
    padding: ${TextButton.XL.Padding};
    gap: ${TextButton.XL.Gap};
  }
`;

export const iconButton = css`
  .blr-icon-button.xs {
    min-width: ${IconButton.XS.Width};
  }

  .blr-icon-button.sm {
    min-width: ${IconButton.SM.Width};
  }

  .blr-icon-button.md {
    min-width: ${IconButton.MD.Width};
  }

  .blr-icon-button.lg {
    min-width: ${IconButton.LG.Width};
  }

  .blr-icon-button.xl {
    min-width: ${IconButton.XL.Width};
  }
`;

export const textInput = css`
  .blr-text-input.xs {
    min-width: ${TextInput.XS.Width};
  }

  .blr-text-input.sm {
    min-width: ${TextInput.SM.Width};
  }

  .blr-text-input.md {
    min-width: ${TextInput.MD.Width};
  }

  .blr-text-input.lg {
    min-width: ${TextInput.LG.Width};
  }

  .blr-text-input.xl {
    min-width: ${TextInput.XL.Width};
  }
`;
