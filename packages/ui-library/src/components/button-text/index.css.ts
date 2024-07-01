import { ComponentThemeIterator, SemanticThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";
import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const styleCustom = css`
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

    &.blr-button-text:hover,
    &.blr-button-text:focus {
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

  ${ComponentThemeIterator((theme, cmp, css) => {
    const { buttontext } = cmp;

    return css`
      .blr-button-text.${theme} {
        &.xs {
          padding: ${buttontext.container.padding.xs};
          border-radius: ${buttontext.container.borderradius.xs};

          & > .focus-layer {
            border-radius: ${buttontext.container.borderradius.xs};
          }
        }

        &.sm {
          padding: ${buttontext.container.padding.sm};
          border-radius: ${buttontext.container.borderradius.sm};

          & > .focus-layer {
            border-radius: ${buttontext.container.borderradius.sm};
          }
        }

        &.md {
          padding: ${buttontext.container.padding.md};
          border-radius: ${buttontext.container.borderradius.md};

          & > .focus-layer {
            border-radius: ${buttontext.container.borderradius.md};
          }
        }

        &.lg {
          padding: ${buttontext.container.padding.lg};
          border-radius: ${buttontext.container.borderradius.lg};

          & > .focus-layer {
            border-radius: ${buttontext.container.borderradius.lg};
          }
        }

        &.xl {
          padding: ${buttontext.container.padding.xl};
          border-radius: ${buttontext.container.borderradius.xl};

          & > .focus-layer {
            border-radius: ${buttontext.container.borderradius.xl};
          }
        }
      }

      .flex-container.${theme} {
        &.xs {
          gap: ${buttontext.container.itemspacing.xs}
        }

        &.sm {
          gap: ${buttontext.container.itemspacing.sm}
        }

        &.md {
          gap: ${buttontext.container.itemspacing.md}
        }

        &.lg {
          gap: ${buttontext.container.itemspacing.lg}
        }

        &.xl {
          gap: ${buttontext.container.itemspacing.xl}
        }
      }
    `;
  })}

  ${SemanticThemeIterator((theme, sem, css) => {
    const { global, buttons } = sem;

    return css`
      .focus-layer.${theme} {
        outline-color: ${global.focusring.border.color};
        outline-style: ${global.focusring.border.style};
        outline-width: ${global.focusring.border.width};
      }

      .loading.${theme} {
        &.blr-button-text:hover,
        &.blr-button-text:focus {
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
