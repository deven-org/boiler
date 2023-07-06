import { css } from "lit";
import { componentTokens } from "../_tokens-generated/index.generated";

const { TextButton, IconButton } = componentTokens.Action;

export const textButton = css`
  .blr-text-button.xs {
    padding: ${TextButton.XS.Padding};
    gap: ${TextButton.XS.ItemSpacing};
  }

  .blr-text-button.sm {
    padding: ${TextButton.SM.Padding};
    gap: ${TextButton.SM.ItemSpacing};
  }

  .blr-text-button.md {
    padding: ${TextButton.MD.Padding};
    gap: ${TextButton.MD.ItemSpacing};
  }

  .blr-text-button.lg {
    padding: ${TextButton.LG.Padding};
    gap: ${TextButton.LG.ItemSpacing};
  }

  .blr-text-button.xl {
    padding: ${TextButton.XL.Padding};
    gap: ${TextButton.XL.ItemSpacing};
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
