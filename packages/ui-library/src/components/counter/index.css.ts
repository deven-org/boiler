import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

export const staticStyles = typeSafeNestedCss/* css */ `
  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { Counter } = cmp;

    return typeSafeCss/* css */ `
      .blr-counter.${theme} {
        word-break: initial;
        color: ${Counter.Text.TextColor.Neutral};
        background-color: ${Counter.Container.BackgroundColor.Neutral};
        outline-color: ${Counter.Container.BorderColor.Neutral};
        outline-style: solid;
        white-space: nowrap;
        display: initial;

        &.sm {
          padding: ${Counter.Container.Padding.SM};
          gap: ${Counter.Container.ItemSpacing.SM};
          border-radius: ${Counter.Container.BorderRadius.SM};
          outline-width: ${Counter.Container.BorderWidth.SM};

          font-family: ${Counter.Text.Typography.SM.fontFamily}, sans-serif;
          font-weight: ${Counter.Text.Typography.SM.fontWeight};
          font-size: ${Counter.Text.Typography.SM.fontSize};
          line-height: ${Counter.Text.Typography.SM.lineHeight};
        }

        &.md {
          padding: ${Counter.Container.Padding.MD};
          gap: ${Counter.Container.ItemSpacing.MD};
          border-radius: ${Counter.Container.BorderRadius.MD};
          outline-width: ${Counter.Container.BorderWidth.MD};

          font-family: ${Counter.Text.Typography.MD.fontFamily}, sans-serif;
          font-weight: ${Counter.Text.Typography.MD.fontWeight};
          font-size: ${Counter.Text.Typography.MD.fontSize};
          line-height: ${Counter.Text.Typography.MD.lineHeight};
        }

        &.lg {
          padding: ${Counter.Container.Padding.LG};
          gap: ${Counter.Container.ItemSpacing.LG};
          border-radius: ${Counter.Container.BorderRadius.LG};
          outline-width: ${Counter.Container.BorderWidth.LG};

          font-family: ${Counter.Text.Typography.LG.fontFamily}, sans-serif;
          font-weight: ${Counter.Text.Typography.LG.fontWeight};
          font-size: ${Counter.Text.Typography.LG.fontSize};
          line-height: ${Counter.Text.Typography.LG.lineHeight};
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
  })}
`;
