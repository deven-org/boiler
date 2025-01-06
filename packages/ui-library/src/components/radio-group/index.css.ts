import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";
import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";

export const staticStyles = css`
  .blr-legend {
    padding: 0;
  }

  .horizontal > slot {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    height: 40px;
  }

  .vertical > slot {
    flex-direction: column;
  }

  ${ComponentThemeIterator((theme, cmp, css) => {
    const { radiogroup } = cmp;

    return css`
      .blr-legend-wrapper.${theme} {
        &.sm {
          padding-bottom: ${radiogroup.legendwrapper.paddingbottom.sm};
        }

        &.md {
          padding-bottom: ${radiogroup.legendwrapper.paddingbottom.md};
        }

        &.lg {
          padding-bottom: ${radiogroup.legendwrapper.paddingbottom.lg};
        }

        .blr-legend {
          ${
            // to override constructed css
            ""
          }
          margin: 0 !important;
          color: ${radiogroup.legend.textcolor.default};

          &.sm {
            font-weight: ${radiogroup.legend.sm.fontWeight};
            font-size: ${radiogroup.legend.sm.fontSize};
            font-family: ${radiogroup.legend.sm.fontFamily}, sans-serif;
            line-height: ${radiogroup.legend.sm.lineHeight};
          }

          &.md {
            font-weight: ${radiogroup.legend.md.fontWeight};
            font-size: ${radiogroup.legend.md.fontSize};
            font-family: ${radiogroup.legend.md.fontFamily}, sans-serif;
            line-height: ${radiogroup.legend.md.lineHeight};
          }

          &.lg {
            font-weight: ${radiogroup.legend.lg.fontWeight};
            font-size: ${radiogroup.legend.lg.fontSize};
            font-family: ${radiogroup.legend.lg.fontFamily}, sans-serif;
            line-height: ${radiogroup.legend.lg.lineHeight};
          }

          &.error {
            color: ${radiogroup.legend.textcolor.error};
          }
        }
      }

      .caption-group.${theme} {
        all: initial;
        margin: 0;

        &.sm {
          padding-top: ${radiogroup.captionslot.paddingtop.sm};
        }

        &.md {
          padding-top: ${radiogroup.captionslot.paddingtop.md};
        }

        &.lg {
          padding-top: ${radiogroup.captionslot.paddingtop.lg};
        }
      }

      .blr-radio-group.${theme} {
        display: flex;
        align-items: flex-start;
        position: relative;
        flex-flow: nowrap;
        justify-content: space-between;

        &.vertical {
          flex-direction: column;
        }

        &.sm {
          column-gap: ${radiogroup.radiostackhorizontal.itemspacing.sm};
          row-gap: ${radiogroup.radiostackvertical.itemspacing.sm};
        }

        &.md {
          column-gap: ${radiogroup.radiostackhorizontal.itemspacing.md};
          row-gap: ${radiogroup.radiostackvertical.itemspacing.md};
        }

        &.lg {
          column-gap: ${radiogroup.radiostackhorizontal.itemspacing.lg};
          row-gap: ${radiogroup.radiostackvertical.itemspacing.lg};
        }
      }
    `;
  })}
`;
