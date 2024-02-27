import { renderThemedCssStrings } from "../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

export const { tokenizedLight: styleCustomLight, tokenizedDark: styleCustomDark } = renderThemedCssStrings((componentTokens) => {
  const { Loader } = componentTokens.cmp;

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
        width: calc(${Loader.Container.Size.SM} - (${Loader.Container.Padding.SM} * 2));
        height: calc(${Loader.Container.Size.SM} - (${Loader.Container.Padding.SM} * 2));
        border-width: ${Loader.Background.BorderWidth.SM};
      }

      &.md {
        width: calc(${Loader.Container.Size.MD} - (${Loader.Container.Padding.MD} * 2));
        height: calc(${Loader.Container.Size.MD} - (${Loader.Container.Padding.MD} * 2));
        border-width: ${Loader.Background.BorderWidth.MD};
      }

      &.lg {
        width:  calc(${Loader.Container.Size.LG} - (${Loader.Container.Padding.LG} * 2));
        height: calc(${Loader.Container.Size.LG} - (${Loader.Container.Padding.LG} * 2));
        border-width: ${Loader.Background.BorderWidth.LG};
      }
    }

    .loader-container {
      &.sm {
        padding: ${Loader.Container.Padding.SM};
      }

      &.md {
        padding: ${Loader.Container.Padding.MD};
      }

      &.lg {
        padding: ${Loader.Container.Padding.LG};
       
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
