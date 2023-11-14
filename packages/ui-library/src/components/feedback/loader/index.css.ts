import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

export const { tokenizedLight: styleCustomLight, tokenizedDark: styleCustomDark } = renderThemedCssStrings((componentTokens) => {
  const { Loader } = componentTokens.Feedback;

  return typeSafeNestedCss`
    :host {
      display: inline-flex;
      flex-shrink: 0;
      width: 100%;
    }

    .blr-loader {
      border-radius: 50%;
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

    .floating {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  `;
});
