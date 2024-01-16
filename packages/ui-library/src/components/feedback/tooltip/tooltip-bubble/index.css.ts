import { typeSafeNestedCss } from "../../../../utils/nested-typesafe-css-literals";
import { renderThemedCssStrings } from "../../../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: light, tokenizedDark: dark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { Tooltip } = componentTokens.Feedback;
  const { UI, Elevation } = semanticTokens;

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
        font-family: ${UI.Caption.SM.fontFamily}, sans-serif;
        font-size: ${UI.Caption.SM.fontSize};
        font-weight: ${UI.Caption.SM.fontWeight};
        line-height: ${UI.Caption.SM.lineHeight};
        padding: ${Tooltip.TextWrapper.Padding};
      }

      .elevation {
        filter: drop-shadow(${Elevation.Lvl_1.x} ${Elevation.Lvl_1.y} ${Elevation.Lvl_1.blur} ${Elevation.Lvl_1.color});
        
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
