import { ComponentThemeIterator } from "../../foundation/_tokens-generated/iterator.generated.js";
import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = css`
  ${ComponentThemeIterator((theme, cmp, css) => {
    const { counter } = cmp;

    return css`
      .blr-counter.${theme} {
        word-break: initial;
        color: ${counter.text.textcolor.neutral};
        background-color: ${counter.container.bgcolor.neutral};
        outline-color: ${counter.container.bordercolor.neutral};
        outline-style: solid;
        white-space: nowrap;
        display: initial;

        &.sm {
          padding: ${counter.container.padding.sm};
          gap: ${counter.container.itemspacing.sm};
          border-radius: ${counter.container.borderradius.sm};
          outline-width: ${counter.container.borderwidth.sm};
          font-family: ${counter.text.typography.sm.fontFamily}, sans-serif;
          font-weight: ${counter.text.typography.sm.fontWeight};
          font-size: ${counter.text.typography.sm.fontSize};
          line-height: ${counter.text.typography.sm.lineHeight};
          outline-offset: calc(${counter.container.borderwidth.sm} * -1);
        }

        &.md {
          padding: ${counter.container.padding.md};
          gap: ${counter.container.itemspacing.md};
          border-radius: ${counter.container.borderradius.md};
          outline-width: ${counter.container.borderwidth.md};
          font-family: ${counter.text.typography.md.fontFamily}, sans-serif;
          font-weight: ${counter.text.typography.md.fontWeight};
          font-size: ${counter.text.typography.md.fontSize};
          line-height: ${counter.text.typography.md.lineHeight};
          outline-offset: calc(${counter.container.borderwidth.md} * -1);
        }

        &.lg {
          padding: ${counter.container.padding.lg};
          gap: ${counter.container.itemspacing.lg};
          border-radius: ${counter.container.borderradius.lg};
          outline-width: ${counter.container.borderwidth.lg};
          font-family: ${counter.text.typography.lg.fontFamily}, sans-serif;
          font-weight: ${counter.text.typography.lg.fontWeight};
          font-size: ${counter.text.typography.lg.fontSize};
          line-height: ${counter.text.typography.lg.lineHeight};
          outline-offset: calc(${counter.container.borderwidth.lg} * -1);
        }

        &.error {
          color: ${counter.text.textcolor.error};
          outline-color: ${counter.container.bordercolor.error};
          background-color: ${counter.container.bgcolor.error};
        }

        &.warn {
          color: ${counter.text.textcolor.warning};
          outline-color: ${counter.container.bordercolor.warning};
          background-color: ${counter.container.bgcolor.warning};
        }
      }
    `;
  })}
`;
