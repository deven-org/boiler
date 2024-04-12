import { ComponentThemeIterator, SemanticThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

export const styleCustom = typeSafeNestedCss/* css */ `
  .focus-layer {
    position: absolute;
    inset: 0;
  }

  .blr-button-text {
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    position: relative;
  }

  .loading {
    & > .icon,
    & > .label,
    & > .flex-container {
      visibility: hidden;
    }

    &.blr-button-text:hover, &.blr-button-text:focus {
      cursor: auto;
    }
  }

  .block {
    display: block;
  }

  .inline-block {
    display: inline-block;
  }

  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .trailing-icon-class,
  .leading-icon-class {
    display: flex;
    align-items: center;
  }

  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { ButtonText } = cmp;

    return typeSafeCss/*css*/ `
      .blr-button-text.${theme} {
        &.xs {
          padding: ${ButtonText.Container.Padding.XS};
          border-radius: ${ButtonText.Container.BorderRadius.XS};

          & > .focus-layer {
            border-radius: ${ButtonText.Container.BorderRadius.XS};
          }
        }

        &.sm {
          padding: ${ButtonText.Container.Padding.SM};
          border-radius: ${ButtonText.Container.BorderRadius.SM};

          & > .focus-layer {
            border-radius: ${ButtonText.Container.BorderRadius.SM};
          }
        }

        &.md {
          padding: ${ButtonText.Container.Padding.MD};
          border-radius: ${ButtonText.Container.BorderRadius.MD};
          

          & > .focus-layer {
            border-radius: ${ButtonText.Container.BorderRadius.MD};
          }
        }

        &.lg {
          padding: ${ButtonText.Container.Padding.LG};
          border-radius: ${ButtonText.Container.BorderRadius.LG};

          & > .focus-layer {
            border-radius: ${ButtonText.Container.BorderRadius.LG};
          }
        }

        &.xl {
          padding: ${ButtonText.Container.Padding.XL};
          border-radius: ${ButtonText.Container.BorderRadius.XL};

          & > .focus-layer {
            border-radius: ${ButtonText.Container.BorderRadius.XL};
          }
        }
      }

      .flex-container.${theme} {
        &.xs {
          gap: ${ButtonText.Container.ItemSpacing.XS}
        }

        &.sm {
          gap: ${ButtonText.Container.ItemSpacing.SM}
        }

        &.md {
          gap: ${ButtonText.Container.ItemSpacing.MD}
        }

        &.lg {
          gap: ${ButtonText.Container.ItemSpacing.LG}
        }

        &.xl {
          gap: ${ButtonText.Container.ItemSpacing.XL}
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
        &.blr-button-text:hover, &.blr-button-text:focus {
          &.cta {
            background-color: ${buttons.container.bgcolor.cta.focus};
          }

          &.primary {
            background-color: ${buttons.container.bgcolor.primary.focus};
          }

          &.secondary {
            background-color: ${buttons.container.bgcolor.secondary.focus};
          }

          &.silent {
            background-color: ${buttons.container.bgcolor.silent.focus};
          }
          
          &.destructive {
            background-color: ${buttons.container.bgcolor.destructive.focus};
          }

          &.encourage {
            background-color: ${buttons.container.bgcolor.encourage.focus};
          }
        }
      }
    `;
  })}
`;
