import { renderThemedCssStrings } from "../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

export const { tokenizedLight: light, tokenizedDark: dark } = renderThemedCssStrings((componentTokens) => {
  const { Tooltip } = componentTokens.Feedback;

  const arrowHeight = "4px";

  return typeSafeNestedCss`
    :host {
      left: 0;
      max-width: ${Tooltip.TextWrapper.MaxWidth};
      min-width: ${Tooltip.TextWrapper.MinWidth};
      opacity: 0;
      position: absolute;
      transition: opacity 0.2s;
      top: 0;
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
        filter: drop-shadow(${Tooltip.Container.Elevation.Elevated.x} ${Tooltip.Container.Elevation.Elevated.y} ${
    Tooltip.Container.Elevation.Elevated.blur
  } ${Tooltip.Container.Elevation.Elevated.color});
        
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

      ${
        /* Currently only used for demo purposes when Floating UI does not control the position of the arrow */
        ""
      }
      .static .arrow {
        bottom: -${arrowHeight};
        left: 50%;
        transform: translateX(-50%) rotate(0);
      }
    }
  `;
});
