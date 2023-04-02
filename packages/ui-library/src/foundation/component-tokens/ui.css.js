import { css } from 'lit';
import { componentTokens } from '../_tokens-generated/index.generated';

const { UI } = componentTokens;

export const icon = css`
  .blr-icon.xxs {
    width: ${UI.Icon.XXS};
    height: ${UI.Icon.XXS};
  }

  .blr-icon.xs {
    width: ${UI.Icon.XS};
    height: ${UI.Icon.XS};
  }

  .blr-icon.sm {
    width: ${UI.Icon.SM};
    height: ${UI.Icon.SM};
  }

  .blr-icon.md {
    width: ${UI.Icon.MD};
    height: ${UI.Icon.MD};
  }

  .blr-icon.lg {
    width: ${UI.Icon.LG};
    height: ${UI.Icon.LG};
  }

  .blr-icon.xl {
    width: ${UI.Icon.XL};
    height: ${UI.Icon.XL};
  }
`;
