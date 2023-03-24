import { css } from 'lit';
import { componentTokens, semanticTokens } from '../_tokens-generated/index.generated';

const { Background, Fill } = semanticTokens.semantic.Feedback;
const { sm, md, lg } = componentTokens.component.feedback.loader;

export const loadingSpinner = css`
  .blr-loading-spinner {
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .blr-loading-spinner.default {
    border: ${Background.Default};
    border-bottom-color: ${Fill.Default};
    border-style: ${sm.background.default.style};
  }

  .blr-loading-spinner.inverted {
    border: ${Background.Inverted};
    border-bottom-color: ${Fill.Inverted};
    border-style: ${sm.background.inverted.style};
  }

  .blr-loading-spinner.sm {
    width: ${sm.sizing};
    height: ${sm.sizing};
    padding: ${sm.padding};
    border-width: ${sm.background.default.width};
  }

  .blr-loading-spinner.md {
    width: ${md.sizing};
    height: ${md.sizing};
    padding: ${md.padding};
    border-width: ${md.background.default.width};
  }

  .blr-loading-spinner.lg {
    width: ${lg.sizing};
    height: ${lg.sizing};
    padding: ${lg.padding};
    border-width: ${lg.background.default.width};
  }
`;
