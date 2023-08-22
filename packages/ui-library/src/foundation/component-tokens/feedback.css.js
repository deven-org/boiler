import { css } from "lit";
import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: loadingSpinnerLight, tokenizedDark: loadingSpinnerDark } = renderThemedCssStrings(
  (componentTokens) => {
    const { Loader } = componentTokens.Feedback;

    return css`
      .blr-loading-spinner {
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;

        &.sm {
          width: ${Loader.SM.Sizing};
          height: ${Loader.SM.Sizing};
          padding: ${Loader.SM.Padding};

          &.default {
            border-color: ${Loader.SM.Background.Default.color};
            border-bottom-color: ${Loader.SM.Foreground.Default.color};
            border-style: ${Loader.SM.Background.Default.style};
            border-width: ${Loader.SM.Background.Default.width};
          }

          &.inverted {
            border-color: ${Loader.SM.Background.Inverted.color};
            border-bottom-color: ${Loader.SM.Foreground.Inverted.color};
            border-style: ${Loader.SM.Background.Inverted.style};
            border-width: ${Loader.SM.Background.Inverted.width};
          }
        }

        &.md {
          width: ${Loader.MD.Sizing};
          height: ${Loader.MD.Sizing};
          padding: ${Loader.MD.Padding};

          &.default {
            border-color: ${Loader.MD.Background.Default.color};
            border-bottom-color: ${Loader.MD.Foreground.Default.color};
            border-style: ${Loader.MD.Background.Default.style};
            border-width: ${Loader.MD.Background.Default.width};
          }

          &.inverted {
            border-color: ${Loader.MD.Background.Inverted.color};
            border-style: ${Loader.MD.Background.Inverted.style};
            border-bottom-color: ${Loader.MD.Foreground.Inverted.color};
            border-width: ${Loader.MD.Background.Inverted.width};
          }
        }

        &.lg {
          width: ${Loader.LG.Sizing};
          height: ${Loader.LG.Sizing};
          padding: ${Loader.LG.Padding};

          &.default {
            border-color: ${Loader.LG.Background.Default.color};
            border-bottom-color: ${Loader.LG.Foreground.Default.color};
            border-style: ${Loader.LG.Background.Default.style};
            border-width: ${Loader.LG.Background.Default.width};
          }

          &.inverted {
            border-color: ${Loader.LG.Background.Inverted.color};
            border-bottom-color: ${Loader.LG.Foreground.Inverted.color};
            border-style: ${Loader.LG.Background.Inverted.style};
            border-width: ${Loader.LG.Background.Inverted.width};
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
  }
);

export const { tokenizedLight: counterLight, tokenizedDark: counterDark } = renderThemedCssStrings(
  (componentTokens, semanticTokens) => {
    const { Counter } = componentTokens.Feedback;
    const { Error, Neutral, Warning } = semanticTokens.Feedback;

    return css`
      .blr-counter {
        word-break: initial;
        margin-left: auto;
        color: ${Neutral.Text};
        border: 1px solid ${Neutral.SurfaceStroke};
        background-color: ${Neutral.Surface};
        border-radius: ${Counter.BorderRadius};
        white-space: nowrap;

        &.sm {
          padding: ${Counter.SM.Padding};
          gap: ${Counter.SM.ItemSpacing};
        }

        &.md {
          padding: ${Counter.MD.Padding};
          gap: ${Counter.MD.ItemSpacing};
        }

        &.lg {
          padding: ${Counter.LG.Padding};
          gap: ${Counter.LG.ItemSpacing};
        }

        &.limit-reached,
        &.error {
          color: ${Error.Text};
          border-color: ${Error.SurfaceStroke};
          background-color: ${Error.Surface};
        }

        &.limit-close-int,
        &.limit-close-per,
        &.warn {
          color: ${Warning.Text};
          border-color: ${Warning.SurfaceStroke};
          background-color: ${Warning.Surface};
        }
      }
    `;
  }
);
