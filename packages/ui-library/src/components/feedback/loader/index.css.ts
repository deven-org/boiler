import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

export const { tokenizedLight: styleCustomLight, tokenizedDark: styleCustomDark } = renderThemedCssStrings((componentTokens) => {
  const { Loader } = componentTokens.Feedback;

  return typeSafeNestedCss`
    :host {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .blr-loader {
      border-radius: 50%;
      border-style: solid;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;

      &.default { 
        border-color: ${Loader.Background.BorderColor.Default};
        border-bottom-color: ${Loader.Foreground.BorderColor.Default};
      }

      &.inverted {
        border-color: ${Loader.Background.BorderColor.Inverted};
        border-bottom-color: ${Loader.Foreground.BorderColor.Inverted};
      }

      &.sm {
        width: ${Loader.Container.Size.SM};
        height: ${Loader.Container.Size.SM};
        padding: ${Loader.Container.Padding.SM};
        border-width: ${Loader.Background.BorderWidth.SM};
      }

      &.md {
        width: ${Loader.Container.Size.MD};
        height: ${Loader.Container.Size.MD};
        padding: ${Loader.Container.Padding.MD};
        border-width: ${Loader.Background.BorderWidth.MD};
      }

      &.lg {
        width: ${Loader.Container.Size.LG};
        height: ${Loader.Container.Size.LG};
        padding: ${Loader.Container.Padding.LG};
        border-width: ${Loader.Background.BorderWidth.LG};
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
});
