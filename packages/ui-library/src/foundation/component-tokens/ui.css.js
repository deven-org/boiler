import { css } from 'lit';
import { componentTokens } from '../_tokens-generated/index.generated';

const { ui } = componentTokens.component;

export const icon = css`
  .blr-icon.xxs {
    width: ${ui.icon.xxs};
    height: ${ui.icon.xxs};
  }

  .blr-icon.xs {
    width: ${ui.icon.xs};
    height: ${ui.icon.xs};
  }

  .blr-icon.sm {
    width: ${ui.icon.sm};
    height: ${ui.icon.sm};
  }

  .blr-icon.md {
    width: ${ui.icon.md};
    height: ${ui.icon.md};
  }

  .blr-icon.lg {
    width: ${ui.icon.lg};
    height: ${ui.icon.lg};
  }

  .blr-icon.xl {
    width: ${ui.icon.xl};
    height: ${ui.icon.xl};
  }
`;
