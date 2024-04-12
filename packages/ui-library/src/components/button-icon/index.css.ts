import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";
import { ComponentThemeIterator, SemanticThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated";

export const styleCustom = typeSafeNestedCss/* css */ `
  .focus-layer {
    position: absolute;
    inset: 0;
  }

  .blr-button-icon {
    all: inital;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    cursor: pointer;
    position: relative;
  }

  .loading {
    &.blr-button-icon:hover, &.blr-button-icon:focus {
      cursor: auto;
      text-decoration: none;
    }

    & > .icon {
      visibility: hidden;
    }
  }

  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { ButtonIcon } = cmp;

    return typeSafeCss/*css*/ `
      .blr-button-icon.${theme} {
        &.xs {
          padding: ${ButtonIcon.Container.Padding.XS};
          border-radius: ${ButtonIcon.Container.BorderRadius.XS};

          & > .focus-layer {
            border-radius: ${ButtonIcon.Container.BorderRadius.XS};
          }
        }

        &.sm {
          padding: ${ButtonIcon.Container.Padding.SM};
          border-radius: ${ButtonIcon.Container.BorderRadius.SM};

          & > .focus-layer {
            border-radius: ${ButtonIcon.Container.BorderRadius.SM};
          }
        }

        &.md {
          padding: ${ButtonIcon.Container.Padding.MD};
          border-radius: ${ButtonIcon.Container.BorderRadius.MD};

          & > .focus-layer {
            border-radius: ${ButtonIcon.Container.BorderRadius.MD};
          }
        }

        &.lg {
          padding: ${ButtonIcon.Container.Padding.LG};
          border-radius: ${ButtonIcon.Container.BorderRadius.LG};

          & > .focus-layer {
            border-radius: ${ButtonIcon.Container.BorderRadius.LG};
          }
        }

        &.xl {
          padding: ${ButtonIcon.Container.Padding.XL};
          border-radius: ${ButtonIcon.Container.BorderRadius.XL};

          & > .focus-layer {
            border-radius: ${ButtonIcon.Container.BorderRadius.XL};
          }
        }
      }
    `;
  })}

  ${SemanticThemeIterator((theme, sem, typeSafeCss) => {
    const { global, buttons } = sem;

    return typeSafeCss/*css*/ `
      .focus-layer.${theme} {
        outline-color: ${global.focusring.border.color};
        outline-style: ${global.focusring.border.style};
        outline-width: ${global.focusring.border.width};
      }

      .loading.${theme} {
        &.blr-button-icon:hover, &.blr-button-icon:focus {
          &.cta {
            background-color: ${buttons.container.bgcolor.cta.loading}
          }

          &.primary {
            background-color: ${buttons.container.bgcolor.primary.loading}
          }

          &.secondary {
            background-color: ${buttons.container.bgcolor.secondary.loading}
          }

          &.silent {
            background-color: ${buttons.container.bgcolor.silent.loading}
          }

          &.destructive {
            background-color: ${buttons.container.bgcolor.destructive.loading}
          }
          
          &.encourage {
            background-color: ${buttons.container.bgcolor.encourage.loading}
          }
        }
      }
    `;
  })}
`;
