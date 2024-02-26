import { typeSafeNestedCss as css } from "../../utils/nested-typesafe-css-literals";
import { renderThemedCssStrings } from "../../foundation/_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: captionLight, tokenizedDark: captionDark } = renderThemedCssStrings((componentTokens) => {
  const { CaptionComponent } = componentTokens.cmp;

  return css`
    .blr-form-caption {
      width: 100%;
      display: flex;
      align-items: flex-start;
      color: ${CaptionComponent.Text.TextColor.Hint};

      &.error {
        color: ${CaptionComponent.Text.TextColor.Error};
      }

      &.sm {
        padding: ${CaptionComponent.Container.Padding.SM};
        gap: ${CaptionComponent.Container.ItemSpacing.SM};

        .blr-icon {
          padding-top: ${CaptionComponent.IconWrapper.PaddingTop.SM};
          height: ${CaptionComponent.Icon.IconSize.SM};
          width: ${CaptionComponent.Icon.IconSize.SM};
        }

        .blr-caption-text {
          padding: ${CaptionComponent.TextWrapper.Padding.SM};
          font-family: ${CaptionComponent.Text.Typography.SM.fontFamily}, sans-serif;
          font-weight: ${CaptionComponent.Text.Typography.SM.fontWeight};
          font-size: ${CaptionComponent.Text.Typography.SM.fontSize};
          line-height: ${CaptionComponent.Text.Typography.SM.lineHeight};
        }
      }

      &.md {
        padding: ${CaptionComponent.Container.Padding.MD};
        gap: ${CaptionComponent.Container.ItemSpacing.MD};

        .blr-icon {
          padding-top: ${CaptionComponent.IconWrapper.PaddingTop.MD};
          height: ${CaptionComponent.Icon.IconSize.MD};
          width: ${CaptionComponent.Icon.IconSize.MD};
        }

        .blr-caption-text {
          padding: ${CaptionComponent.TextWrapper.Padding.MD};
          font-family: ${CaptionComponent.Text.Typography.MD.fontFamily}, sans-serif;
          font-weight: ${CaptionComponent.Text.Typography.MD.fontWeight};
          font-size: ${CaptionComponent.Text.Typography.MD.fontSize};
          line-height: ${CaptionComponent.Text.Typography.MD.lineHeight};
        }
      }

      &.lg {
        padding: ${CaptionComponent.Container.Padding.LG};
        gap: ${CaptionComponent.Container.ItemSpacing.LG};

        .blr-icon {
          padding-top: ${CaptionComponent.IconWrapper.PaddingTop.LG};
          height: ${CaptionComponent.Icon.IconSize.LG};
          width: ${CaptionComponent.Icon.IconSize.LG};
        }

        .blr-caption-text {
          padding: ${CaptionComponent.TextWrapper.Padding.LG};
          font-family: ${CaptionComponent.Text.Typography.LG.fontFamily}, sans-serif;
          font-weight: ${CaptionComponent.Text.Typography.LG.fontWeight};
          font-size: ${CaptionComponent.Text.Typography.LG.fontSize};
          line-height: ${CaptionComponent.Text.Typography.LG.lineHeight};
        }
      }
    }
  `;
});
