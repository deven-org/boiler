import { ComponentThemeIterator } from "../../foundation/_tokens-generated/iterator.generated.js";
import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = css`
  :host {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  ${ComponentThemeIterator((theme, cmp, css) => {
    const { loader } = cmp;

    return css`
      .loader-container.${theme} {
        &.sm {
          padding: ${loader.container.padding.sm};
        }

        &.md {
          padding: ${loader.container.padding.md};
        }

        &.lg {
          padding: ${loader.container.padding.lg};
        }
      }

      .blr-loader.${theme} {
        border-radius: 50%;
        border-style: solid;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;

        &.default {
          border-color: ${loader.background.bordercolor.default};
          border-bottom-color: ${loader.foreground.bordercolor.default};
        }

        &.inverted {
          border-color: ${loader.background.bordercolor.inverted};
          border-bottom-color: ${loader.foreground.bordercolor.inverted};
        }

        &.sm {
          width: calc(${loader.container.size.sm} - (${loader.container.padding.sm} * 2));
          height: calc(${loader.container.size.sm} - (${loader.container.padding.sm} * 2));
          border-width: ${loader.background.borderwidth.sm};
        }

        &.md {
          width: calc(${loader.container.size.md} - (${loader.container.padding.md} * 2));
          height: calc(${loader.container.size.md} - (${loader.container.padding.md} * 2));
          border-width: ${loader.background.borderwidth.md};
        }

        &.lg {
          width: calc(${loader.container.size.lg} - (${loader.container.padding.lg} * 2));
          height: calc(${loader.container.size.lg} - (${loader.container.padding.lg} * 2));
          border-width: ${loader.background.borderwidth.lg};
        }
      }
    `;
  })}
`;
