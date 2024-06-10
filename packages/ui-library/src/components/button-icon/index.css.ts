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
    const { buttonicon } = cmp;

    return typeSafeCss/*css*/ `
      .blr-button-icon.${theme} {
        &.xs {
          padding: ${buttonicon.container.padding.xs};
          border-radius: ${buttonicon.container.borderradius.xs};

          & > .focus-layer {
            border-radius: ${buttonicon.container.borderradius.xs};
          }
        }

        &.sm {
          padding: ${buttonicon.container.padding.sm};
          border-radius: ${buttonicon.container.borderradius.sm};

          & > .focus-layer {
            border-radius: ${buttonicon.container.borderradius.sm};
          }
        }

        &.md {
          padding: ${buttonicon.container.padding.md};
          border-radius: ${buttonicon.container.borderradius.md};

          & > .focus-layer {
            border-radius: ${buttonicon.container.borderradius.md};
          }
        }

        &.lg {
          padding: ${buttonicon.container.padding.lg};
          border-radius: ${buttonicon.container.borderradius.lg};

          & > .focus-layer {
            border-radius: ${buttonicon.container.borderradius.lg};
          }
        }

        &.xl {
          padding: ${buttonicon.container.padding.xl};
          border-radius: ${buttonicon.container.borderradius.xl};

          & > .focus-layer {
            border-radius: ${buttonicon.container.borderradius.xl};
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
