import { css } from 'lit';
import { componentTokens, semanticTokens } from '../_tokens-generated/index.generated';

const { Background, Fill } = semanticTokens.Feedback;
const { SM, MD, LG } = componentTokens.Feedback.Loader;

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
    border-style: ${SM.Background.Default.style};
  }

  .blr-loading-spinner.inverted {
    border: ${Background.Inverted};
    border-bottom-color: ${Fill.Inverted};
    border-style: ${SM.Background.Inverted.style};
  }

  .blr-loading-spinner.sm {
    width: ${SM.Sizing};
    height: ${SM.Sizing};
    padding: ${SM.Padding};
    border-width: ${SM.Background.Default.width};
  }

  .blr-loading-spinner.md {
    width: ${MD.Sizing};
    height: ${MD.Sizing};
    padding: ${MD.Padding};
    border-width: ${MD.Background.Default.width};
  }

  .blr-loading-spinner.lg {
    width: ${LG.Sizing};
    height: ${LG.Sizing};
    padding: ${LG.Padding};
    border-width: ${LG.Background.Default.width};
  }
`;
