import { css } from "lit";
import { componentTokens } from "../_tokens-generated/index.generated";

const { SM, MD, LG } = componentTokens.Feedback.Loader;

export const loadingSpinner = css`
  .blr-loading-spinner {
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    &.sm {
      width: ${SM.Sizing};
      height: ${SM.Sizing};
      padding: ${SM.Padding};

      &.default {
        border-color: ${SM.Background.Default.color};
        border-bottom-color: ${SM.Foreground.Default.color};
        border-style: ${SM.Background.Default.style};
        border-width: ${SM.Background.Default.width};
      }

      &.inverted {
        border-color: ${SM.Background.Inverted.color};
        border-bottom-color: ${SM.Foreground.Inverted.color};
        border-style: ${SM.Background.Inverted.style};
        border-width: ${SM.Background.Inverted.width};
      }
    }

    &.md {
      width: ${MD.Sizing};
      height: ${MD.Sizing};
      padding: ${MD.Padding};

      &.default {
        border-color: ${MD.Background.Default.color};
        border-bottom-color: ${MD.Foreground.Default.color};
        border-style: ${MD.Background.Default.style};
        border-width: ${MD.Background.Default.width};
      }

      &.inverted {
        border-color: ${MD.Background.Inverted.color};
        border-style: ${MD.Background.Inverted.style};
        border-bottom-color: ${MD.Foreground.Inverted.color};
        border-width: ${MD.Background.Inverted.width};
      }
    }

    &.lg {
      width: ${LG.Sizing};
      height: ${LG.Sizing};
      padding: ${LG.Padding};

      &.default {
        border-color: ${LG.Background.Default.color};
        border-bottom-color: ${LG.Foreground.Default.color};
        border-style: ${LG.Background.Default.style};
        border-width: ${LG.Background.Default.width};
      }

      &.inverted {
        border-color: ${LG.Background.Inverted.color};
        border-bottom-color: ${LG.Foreground.Inverted.color};
        border-style: ${LG.Background.Inverted.style};
        border-width: ${LG.Background.Inverted.width};
      }
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
