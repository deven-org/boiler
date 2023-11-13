import { typeSafeNestedcss } from "../../../utils/nested-typesafe-css-literals";
import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: counterLight, tokenizedDark: counterDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { Counter } = componentTokens.Feedback;
  const { Error, Neutral, Warning } = semanticTokens.Feedback;
  const { SM, MD, LG } = semanticTokens.Forms;

  return typeSafeNestedcss`
    .blr-counter {
      word-break: initial;
      color: ${Neutral.Text};
      outline: 1px solid ${Neutral.SurfaceStroke};
      white-space: nowrap;

      &.sm {
        margin: ${SM.CaptionSlot.Margin};
        padding: ${Counter.Container.Padding.SM};
        gap: ${Counter.Container.ItemSpacing.SM};
        font-family: ${SM.Caption.fontFamily}, sans-serif;
        font-weight: ${SM.Caption.fontWeight};
        font-size: ${SM.Caption.fontSize};
        line-height: ${SM.Caption.lineHeight};
        border-radius: ${Counter.Container.BorderRadius.SM};
      }

      &.md {
        margin: ${MD.CaptionSlot.Margin};
        padding: ${Counter.Container.Padding.MD};
        gap: ${Counter.Container.ItemSpacing.MD};
        font-family: ${MD.Caption.fontFamily}, sans-serif;
        font-weight: ${MD.Caption.fontWeight};
        font-size: ${MD.Caption.fontSize};
        line-height: ${MD.Caption.lineHeight};
        border-radius: ${Counter.Container.BorderRadius.MD};
      }

      &.lg {
        margin: ${MD.CaptionSlot.Margin};
        padding: ${Counter.Container.Padding.LG};
        gap: ${Counter.Container.ItemSpacing.LG};
        font-family: ${LG.Caption.fontFamily}, sans-serif;
        font-weight: ${LG.Caption.fontWeight};
        font-size: ${LG.Caption.fontSize};
        line-height: ${LG.Caption.lineHeight};
        border-radius: ${Counter.Container.BorderRadius.LG};
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
