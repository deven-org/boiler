import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";
import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = typeSafeNestedCss/*css*/ `
  :host {
    display: inline-block;
  }

  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { Tooltip } = cmp;

    return typeSafeCss/*css*/ `
      #tooltipElement.${theme} {
        left: 0;
        top: 0;
        max-width: ${Tooltip.TextWrapper.MaxWidth};
        min-width: ${Tooltip.TextWrapper.MinWidth};
        position: absolute;
        transition: opacity 0.2s;
        visibility: hidden;
        width: max-content;

        .content {
          background-color: ${Tooltip.Container.BackgroundColor};
          border-radius: ${Tooltip.TextWrapper.BorderRadius};
          color: ${Tooltip.Text.TextColor};
          font-family: ${Tooltip.Text.Typography.fontFamily}, sans-serif;
          font-size: ${Tooltip.Text.Typography.fontSize};
          font-weight: ${Tooltip.Text.Typography.fontWeight};
          line-height: ${Tooltip.Text.Typography.lineHeight};
          padding: ${Tooltip.TextWrapper.Padding};
          text-align: center;
        }

        .elevation {
          filter: drop-shadow(
            ${Tooltip.Container.Elevation.Elevated.x} ${Tooltip.Container.Elevation.Elevated.y} ${Tooltip.Container.Elevation.Elevated.blur}
              ${Tooltip.Container.Elevation.Elevated.color}
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
            fill: ${Tooltip.Container.BackgroundColor};
          }
        }
      }
    `;
  })}
`;
