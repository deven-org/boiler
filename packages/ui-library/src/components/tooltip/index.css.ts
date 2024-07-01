import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";
import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = css`
  :host {
    display: inline-block;
  }

  ${ComponentThemeIterator((theme, cmp, css) => {
    const { tooltip } = cmp;

    return css`
      #tooltipElement.${theme} {
        left: 0;
        top: 0;
        max-width: ${tooltip.textwrapper.maxwidth};
        min-width: ${tooltip.textwrapper.minwidth};
        position: absolute;
        transition: opacity 0.2s;
        visibility: hidden;
        width: max-content;

        .content {
          background-color: ${tooltip.container.bgcolor};
          border-radius: ${tooltip.textwrapper.borderradius};
          color: ${tooltip.text.textcolor};
          font-family: ${tooltip.text.typography.fontFamily}, sans-serif;
          font-size: ${tooltip.text.typography.fontSize};
          font-weight: ${tooltip.text.typography.fontWeight};
          line-height: ${tooltip.text.typography.lineHeight};
          padding: ${tooltip.textwrapper.padding};
          text-align: center;
        }

        .elevation {
          filter: drop-shadow(
            ${tooltip.container.elevation.elevated.x} ${tooltip.container.elevation.elevated.y} ${tooltip.container.elevation.elevated.blur}
              ${tooltip.container.elevation.elevated.color}
          );
        }

        .visible {
          visibility: visible;
        }

        ${
          /*
            The layout box of the arrow element should be a square with equal width and height.
            Inner or pseudo-elements may have a different aspect ratio.
            https://floating-ui.com/docs/arrow#usage
          */
          ""
        }

        .arrow {
          align-items: flex-end;
          display: flex;
          height: 12px;
          justify-content: center;
          position: absolute;
          width: 12px;
          z-index: 1;

          & > svg > path {
            fill: ${tooltip.container.bgcolor};
          }
        }
      }
    `;
  })}
`;
