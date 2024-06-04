import { ComponentThemeIterator, SemanticThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

export const staticStyles = typeSafeNestedCss/*css*/ `
  .blr-form-caption-group {
    display: flex;
    flex-direction: column;
  }

  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { captiongroup } = cmp;

    return typeSafeCss/*css*/ `
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

  ${SemanticThemeIterator((theme, sem, typeSafeCss) => {
    const { forms } = sem;

    return typeSafeCss/*css*/ `
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
