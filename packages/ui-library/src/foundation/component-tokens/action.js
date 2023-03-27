import { css } from 'lit';
import { componentTokens } from '../_tokens-generated/index.generated';

const { TextButton, IconButton, TextInput } = componentTokens.component.Action;

console.log(TextButton);

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
    padding: ${IconButton.XS.Padding};
  }

  .blr-icon-button.sm {
    padding: ${IconButton.SM.Padding};
  }

  .blr-icon-button.md {
    padding: ${IconButton.MD.Padding};
  }

  .blr-icon-button.lg {
    padding: ${IconButton.LG.Padding};
  }

  .blr-icon-button.xl {
    padding: ${IconButton.XL.Padding};
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
