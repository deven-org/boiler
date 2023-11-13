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
      background-color: ${Counter.Container.BackgroundColor.Neutral};
      outline-color: ${Counter.Container.BorderColor.Neutral};
      outline-style: solid;
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
        outline-width: ${Counter.Container.BorderWidth.SM};
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
        outline-width: ${Counter.Container.BorderWidth.MD};
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
        outline-width: ${Counter.Container.BorderWidth.LG};
      }

      &.error {
        color: ${Error.Text};
        outline-color: ${Counter.Container.BackgroundColor.Error};
        background-color: ${Error.Surface};
      }

      &.warn {
        color: ${Warning.Text};
        outline-color: ${Counter.Container.BackgroundColor.Warning};
        background-color: ${Warning.Surface};
      }
    }
  `;
});
