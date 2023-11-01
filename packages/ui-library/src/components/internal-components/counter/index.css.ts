import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: counterLight, tokenizedDark: counterDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { Counter } = componentTokens.Feedback;
  const { Error, Neutral, Warning } = semanticTokens.Feedback;
  const { SM, MD, LG } = semanticTokens.Forms;

  return css`
    .blr-counter {
      word-break: initial;
      color: ${Neutral.Text};
      outline: 1px solid ${Neutral.SurfaceStroke};
      border-radius: ${Counter.BorderRadius};
      white-space: nowrap;

      &.sm {
        margin: ${SM.CaptionSlot.Margin};
        padding: ${Counter.SM.Padding};
        gap: ${Counter.SM.ItemSpacing};
        font-family: ${SM.Caption.fontFamily}, sans-serif;
        font-weight: ${SM.Caption.fontWeight};
        font-size: ${SM.Caption.fontSize};
        line-height: ${SM.Caption.lineHeight};
      }

      &.md {
        margin: ${MD.CaptionSlot.Margin};
        padding: ${Counter.MD.Padding};
        gap: ${Counter.MD.ItemSpacing};
        font-family: ${MD.Caption.fontFamily}, sans-serif;
        font-weight: ${MD.Caption.fontWeight};
        font-size: ${MD.Caption.fontSize};
        line-height: ${MD.Caption.lineHeight};
      }

      &.lg {
        margin: ${MD.CaptionSlot.Margin};
        padding: ${Counter.LG.Padding};
        gap: ${Counter.LG.ItemSpacing};
        font-family: ${LG.Caption.fontFamily}, sans-serif;
        font-weight: ${LG.Caption.fontWeight};
        font-size: ${LG.Caption.fontSize};
        line-height: ${LG.Caption.lineHeight};
      }

      &.error {
        color: ${Error.Text};
        outline-color: ${Error.SurfaceStroke};
        background-color: ${Error.Surface};
      }

      &.warn {
        color: ${Warning.Text};
        outline-color: ${Warning.SurfaceStroke};
        background-color: ${Warning.Surface};
      }
    }
  `;
});
