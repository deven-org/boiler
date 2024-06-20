import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";
import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = typeSafeNestedCss/* css */ `
  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { ButtonGroup } = cmp;

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
          gap: ${ButtonGroup.Container.ItemSpacing.XS};
        }
    
        &.sm {
          gap: ${ButtonGroup.Container.ItemSpacing.SM};
        }
    
        &.md {
          gap: ${ButtonGroup.Container.ItemSpacing.MD};
        }
    
        &.lg {
          gap: ${ButtonGroup.Container.ItemSpacing.LG};
        }
    
        &.xl {
          gap: ${ButtonGroup.Container.ItemSpacing.XL};
        }
      }
    `;
  })}
`;
