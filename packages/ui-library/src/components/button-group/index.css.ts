import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

export const staticStyles = typeSafeNestedCss/* css */ `
  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { buttongroup } = cmp;

    return typeSafeCss/* css */ `
      .blr-button-group.${theme} {
        display: flex;
    
        &.left {
          justify-content: flex-start;
        }
    
        &.center {
          justify-content: center;
        }
    
        &.right {
          justify-content: flex-end;
        }
    
        &.xs {
          gap: ${buttongroup.container.itemspacing.xs};
        }
    
        &.sm {
          gap: ${buttongroup.container.itemspacing.sm};
        }
    
        &.md {
          gap: ${buttongroup.container.itemspacing.md};
        }
    
        &.lg {
          gap: ${buttongroup.container.itemspacing.lg};
        }
    
        &.xl {
          gap: ${buttongroup.container.itemspacing.xl};
        }
      }
    `;
  })}
`;
