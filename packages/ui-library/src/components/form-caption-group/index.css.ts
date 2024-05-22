import { ComponentThemeIterator, SemanticThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

export const staticStyles = typeSafeNestedCss/*css*/ `
  .blr-form-caption-group {
    display: flex;
    flex-direction: column;
  }

  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { CaptionGroup } = cmp;

    return typeSafeCss/*css*/ `
      .blr-form-caption-group.${theme} {        
        &.sm {
          gap: ${CaptionGroup.Container.ItemSpacing.SM};
        }
    
        &.md {
          gap: ${CaptionGroup.Container.ItemSpacing.MD};
        }
    
        &.lg {
          gap: ${CaptionGroup.Container.ItemSpacing.LG};
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
