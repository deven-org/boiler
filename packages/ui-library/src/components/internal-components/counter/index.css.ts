import { typeSafeNestedcss } from "../../../utils/nested-typesafe-css-literals";
import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: counterLight, tokenizedDark: counterDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { Counter } = componentTokens.Feedback;
  const { SM, MD, LG } = semanticTokens.Forms;

  return typeSafeNestedcss`
    .blr-counter {
      word-break: initial;
      color: ${Counter.Text.TextColor.Neutral};
      background-color: ${Counter.Container.BackgroundColor.Neutral};
      outline-color: ${Counter.Container.BorderColor.Neutral};
      outline-style: solid;
      white-space: nowrap;

      &.sm {
        padding: ${Counter.Container.Padding.SM};
        gap: ${Counter.Container.ItemSpacing.SM};
        border-radius: ${Counter.Container.BorderRadius.SM};
        outline-width: ${Counter.Container.BorderWidth.SM};

        font-family: ${SM.Caption.fontFamily}, sans-serif;
        font-weight: ${SM.Caption.fontWeight};
        font-size: ${SM.Caption.fontSize};
        line-height: ${SM.Caption.lineHeight};
      }

      &.md {
        padding: ${Counter.Container.Padding.MD};
        gap: ${Counter.Container.ItemSpacing.MD};
        border-radius: ${Counter.Container.BorderRadius.MD};
        outline-width: ${Counter.Container.BorderWidth.MD};

        font-family: ${MD.Caption.fontFamily}, sans-serif;
        font-weight: ${MD.Caption.fontWeight};
        font-size: ${MD.Caption.fontSize};
        line-height: ${MD.Caption.lineHeight};
      }

      &.lg {
        padding: ${Counter.Container.Padding.LG};
        gap: ${Counter.Container.ItemSpacing.LG};
        border-radius: ${Counter.Container.BorderRadius.LG};
        outline-width: ${Counter.Container.BorderWidth.LG};

        font-family: ${LG.Caption.fontFamily}, sans-serif;
        font-weight: ${LG.Caption.fontWeight};
        font-size: ${LG.Caption.fontSize};
        line-height: ${LG.Caption.lineHeight};
      }

      &.error {
        color: ${Counter.Text.TextColor.Error};
        outline-color: ${Counter.Container.BorderColor.Error};
        background-color: ${Counter.Container.BackgroundColor.Error};
      }

      &.warn {
        color: ${Counter.Text.TextColor.Warning};
        outline-color: ${Counter.Container.BorderColor.Warning};
        background-color: ${Counter.Container.BackgroundColor.Warning};
      }
    }
  `;
});
