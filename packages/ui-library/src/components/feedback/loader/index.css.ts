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
      border-style: solid;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;

      &.sm {
        width: ${Loader.Container.Size.SM};
        height: ${Loader.Container.Size.SM};
        padding: ${Loader.Container.Padding.SM};

        &.default { 
          border-color: ${Loader.Background.BorderColor.Default};
          border-bottom-color: ${Loader.Foreground.BorderColor.Default};
          border-width: ${Loader.SM.Background.Default.width};
        }

        &.inverted {
          border-color: ${Loader.SM.Background.Inverted.color};
          border-bottom-color: ${Loader.SM.Foreground.Inverted.color};
          border-width: ${Loader.SM.Background.Inverted.width};
        }
      }

      &.md {
        width: ${Loader.Container.Size.MD};
        height: ${Loader.Container.Size.MD};
        padding: ${Loader.Container.Padding.MD};

        &.default {
          border-color: ${Loader.MD.Background.Default.color};
          border-bottom-color: ${Loader.MD.Foreground.Default.color};
          border-width: ${Loader.MD.Background.Default.width};
        }

        &.inverted {
          border-color: ${Loader.MD.Background.Inverted.color};
          border-bottom-color: ${Loader.MD.Foreground.Inverted.color};
          border-width: ${Loader.MD.Background.Inverted.width};
        }
      }

      &.lg {
        width: ${Loader.Container.Size.LG};
        height: ${Loader.Container.Size.LG};
        padding: ${Loader.Container.Padding.LG};

        &.default {
          border-color: ${Loader.LG.Background.Default.color};
          border-bottom-color: ${Loader.LG.Foreground.Default.color};
          border-width: ${Loader.LG.Background.Default.width};
        }

        &.inverted {
          border-color: ${Loader.LG.Background.Inverted.color};
          border-bottom-color: ${Loader.LG.Foreground.Inverted.color};
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
