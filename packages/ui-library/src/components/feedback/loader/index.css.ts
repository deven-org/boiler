import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

const makeIterator = <TokenPart extends object>() => {
  return (tokenPart: TokenPart, renderFunction: (key: keyof TokenPart, value: keyof TokenPart) => string) => {
    let returnValue = "";

    Object.keys(tokenPart).forEach(function (key) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      returnValue += renderFunction(key, tokenPart[key]);
    });

    return returnValue;
  };
};

export const { tokenizedLight: styleCustomLight, tokenizedDark: styleCustomDark } = renderThemedCssStrings((componentTokens) => {
  const { Loader } = componentTokens.Feedback;

  const forEachLoaderSize = makeIterator<typeof Loader.Container.Size>();

  const test = forEachLoaderSize(Loader.Container.Size, (key, value) => {
    return `${key}: ${value}`;
  });

  // eslint-disable-next-line no-console
  console.log(test);

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
        border-width: ${Loader.Background.BorderWidth.SM};
      }

      &.md {
        width: ${Loader.Container.Size.MD};
        height: ${Loader.Container.Size.MD};
        border-width: ${Loader.Background.BorderWidth.MD};
      }

      &.lg {
        width: ${Loader.Container.Size.LG};
        height: ${Loader.Container.Size.LG};
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
