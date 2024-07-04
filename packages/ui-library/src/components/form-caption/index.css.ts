import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";
import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";

export const staticStyles = css`
  ${ComponentThemeIterator((theme, cmp, css) => {
    const { formcaption } = cmp;

    return css`
      .blr-form-caption.${theme} {
        width: 100%;
        display: flex;
        align-items: flex-start;
        color: ${formcaption.text.textcolor.hint};

        &.error {
          color: ${formcaption.text.textcolor.error};
        }

        &.sm {
          padding: ${formcaption.container.padding.sm};
          gap: ${formcaption.container.itemspacing.sm};

          .blr-icon {
            padding-top: ${formcaption.iconwrapper.paddingtop.sm};
            height: ${formcaption.icon.iconsize.sm};
            width: ${formcaption.icon.iconsize.sm};
          }

          .blr-caption-text {
            padding: ${formcaption.textwrapper.padding.sm};
            font-family: ${formcaption.text.typography.sm.fontFamily}, sans-serif;
            font-weight: ${formcaption.text.typography.sm.fontWeight};
            font-size: ${formcaption.text.typography.sm.fontSize};
            line-height: ${formcaption.text.typography.sm.lineHeight};
          }
        }

        &.md {
          padding: ${formcaption.container.padding.md};
          gap: ${formcaption.container.itemspacing.md};

          .blr-icon {
            padding-top: ${formcaption.iconwrapper.paddingtop.md};
            height: ${formcaption.icon.iconsize.md};
            width: ${formcaption.icon.iconsize.md};
          }

          .blr-caption-text {
            padding: ${formcaption.textwrapper.padding.md};
            font-family: ${formcaption.text.typography.md.fontFamily}, sans-serif;
            font-weight: ${formcaption.text.typography.md.fontWeight};
            font-size: ${formcaption.text.typography.md.fontSize};
            line-height: ${formcaption.text.typography.md.lineHeight};
          }
        }

        &.lg {
          padding: ${formcaption.container.padding.lg};
          gap: ${formcaption.container.itemspacing.lg};

          .blr-icon {
            padding-top: ${formcaption.iconwrapper.paddingtop.lg};
            height: ${formcaption.icon.iconsize.lg};
            width: ${formcaption.icon.iconsize.lg};
          }

          .blr-caption-text {
            padding: ${formcaption.textwrapper.padding.lg};
            font-family: ${formcaption.text.typography.lg.fontFamily}, sans-serif;
            font-weight: ${formcaption.text.typography.lg.fontWeight};
            font-size: ${formcaption.text.typography.lg.fontSize};
            line-height: ${formcaption.text.typography.lg.lineHeight};
          }
        }
      }
    `;
  })}
`;
