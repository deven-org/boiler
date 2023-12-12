import { typeSafeNestedCss } from "../../../../utils/nested-typesafe-css-literals";
import { renderThemedCssStrings } from "../../../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: light, tokenizedDark: dark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { Tooltip } = componentTokens.Feedback;
  const { UI, Elevation } = semanticTokens;

  const arrowHeight = "4px";

  return typeSafeNestedCss`
    :host {
      left: 0;
      max-width: ${Tooltip.MaxWidth};
      min-width: ${Tooltip.MinWidth};
      opacity: 0;
      position: absolute;
      transition: opacity 0.2s;
      top: 0;
      visibility: hidden;
      width: max-content;

      .content {
        background-color: ${Tooltip.SurfaceFill};
        border-radius: ${Tooltip.ContentCol.BorderRadius};
        color: ${Tooltip.Content};
        padding: ${Tooltip.ContentCol.Padding};
      }

      .sm .content {
        font-family: ${UI.Caption.SM.fontFamily}, sans-serif;
        font-size: ${UI.Caption.SM.fontSize};
        font-weight: ${UI.Caption.SM.fontWeight};
        line-height: ${UI.Caption.SM.lineHeight};
      }

      .md .content {
        font-family: ${UI.Caption.MD.fontFamily}, sans-serif;
        font-size: ${UI.Caption.MD.fontSize};
        font-weight: ${UI.Caption.MD.fontWeight};
        line-height: ${UI.Caption.MD.lineHeight};
      }

      .lg .content {
        font-family: ${UI.Caption.LG.fontFamily}, sans-serif;
        font-size: ${UI.Caption.LG.fontSize};
        font-weight: ${UI.Caption.LG.fontWeight};
        line-height: ${UI.Caption.LG.lineHeight};
      }

      .elevation {
        __filter: drop-shadow(0 0 1px ${Tooltip.SurfaceFill});
        filter: drop-shadow(${Elevation.Lvl_1.x} ${Elevation.Lvl_1.y} ${Elevation.Lvl_1.blur} ${Elevation.Lvl_1.color});
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
          fill: ${Tooltip.SurfaceFill};
        }
      }

      .static .arrow {
        bottom: -${arrowHeight};
        left: 50%;
        transform: translateX(-50%) rotate(0);
      }
    }
  `;
});
