import { ComponentThemeIterator, SemanticThemeIterator } from "../../foundation/_tokens-generated/iterator.generated.js";
import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = css`
  .blr-form-caption-group {
    display: flex;
    flex-direction: column;
  }

  ${ComponentThemeIterator((theme, cmp, css) => {
    const { captiongroup } = cmp;

    return css`
      .blr-form-caption-group.${theme} {
        &.sm {
          gap: ${captiongroup.container.itemspacing.sm};
        }

        &.md {
          gap: ${captiongroup.container.itemspacing.md};
        }

        &.lg {
          gap: ${captiongroup.container.itemspacing.lg};
        }
      }
    `;
  })}

  ${SemanticThemeIterator((theme, sem, css) => {
    const { forms } = sem;

    return css`
      .blr-form-caption-group.${theme} {
        &.sm {
          margin: ${forms.captionslot.margin.sm};
        }

        &.md {
          margin: ${forms.captionslot.margin.sm};
        }

        &.lg {
          margin: ${forms.captionslot.margin.sm};
        }
      }
    `;
  })}
`;
