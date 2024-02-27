import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: actionLight, tokenizedDark: actionDark } = renderThemedCssStrings((_componentTokens, semanticTokens) => {
  const { buttons } = semanticTokens.sem;

  return typeSafeNestedCss`
    .blr-semantic-action {
      &.disabled {
        pointer-events: none;
        cursor: not-allowed;
        user-select: none;
        -webkit-user-select: none;
      }

      &.xs {
        font-family: ${buttons.label.typography.xs.fontFamily}, sans-serif;
        font-weight: ${buttons.label.typography.xs.fontWeight};
        line-height: ${buttons.label.typography.xs.lineHeight};
        font-size: ${buttons.label.typography.xs.fontSize};
      }

      &.sm {
        font-family: ${buttons.label.typography.sm.fontFamily}, sans-serif;
        font-weight: ${buttons.label.typography.sm.fontWeight};
        line-height: ${buttons.label.typography.sm.lineHeight};
        font-size: ${buttons.label.typography.sm.fontSize};
      }

      &.md {
        font-family: ${buttons.label.typography.md.fontFamily}, sans-serif;
        font-weight: ${buttons.label.typography.md.fontWeight};
        line-height: ${buttons.label.typography.md.lineHeight};
        font-size: ${buttons.label.typography.md.fontSize};
      }

      &.lg {
        font-family: ${buttons.label.typography.lg.fontFamily}, sans-serif;
        font-weight: ${buttons.label.typography.lg.fontWeight};
        line-height: ${buttons.label.typography.lg.lineHeight};
        font-size: ${buttons.label.typography.lg.fontSize};
      }

      &.xl {
        font-family: ${buttons.label.typography.xl.fontFamily}, sans-serif;
        font-weight: ${buttons.label.typography.xl.fontWeight};
        line-height: ${buttons.label.typography.xl.lineHeight};
        font-size: ${buttons.label.typography.xl.fontSize};
      }

      &.cta {
        background-color: ${buttons.container.bgcolor.cta.rest};
        outline: ${buttons.container.border.cta.rest.style} ${buttons.container.border.cta.rest.width}
          ${buttons.container.border.cta.rest.color};
        color: ${buttons.label.textcolor.cta.rest};

        & > blr-icon {
          color: ${buttons.icon.iconcolor.cta.rest};
        }

        &:hover {
          background-color: ${buttons.container.bgcolor.cta.hover};
          outline: ${buttons.container.border.cta.hover.style} ${buttons.container.border.cta.hover.width}
            ${buttons.container.border.cta.hover.color};
          color: ${buttons.label.textcolor.cta.hover};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.cta.hover};
          }
        }

        &:active {
          background-color: ${buttons.container.bgcolor.cta.pressed};
          outline: ${buttons.container.border.cta.pressed.style} ${buttons.container.border.cta.pressed.width}
            ${buttons.container.border.cta.pressed.color};
          color: ${buttons.label.textcolor.cta.pressed};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.cta.pressed};
          }
        }

        &.disabled {
          background-color: ${buttons.container.bgcolor.cta.disabled};
          outline: ${buttons.container.border.cta.disabled.style} ${buttons.container.border.cta.disabled.width}
            ${buttons.container.border.cta.disabled.color};
          color: ${buttons.label.textcolor.cta.disabled};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.cta.disabled};
          }
        }
      }

      &.primary {
        background-color: ${buttons.container.bgcolor.primary.rest};
        outline: ${buttons.container.border.primary.rest.style} ${buttons.container.border.primary.rest.width}
          ${buttons.container.border.primary.rest.color};
        color: ${buttons.label.textcolor.primary.rest};

        & > blr-icon {
          color: ${buttons.icon.iconcolor.primary.rest};
        }

        &:hover {
          background-color: ${buttons.container.bgcolor.primary.hover};
          outline: ${buttons.container.border.primary.hover.style} ${buttons.container.border.primary.hover.width}
            ${buttons.container.border.primary.hover.color};
          color: ${buttons.label.textcolor.primary.hover};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.primary.hover};
          }
        }

        &:active {
          background-color: ${buttons.container.bgcolor.primary.pressed};
          outline: ${buttons.container.border.primary.pressed.style} ${buttons.container.border.primary.pressed.width}
            ${buttons.container.border.primary.pressed.color};
          color: ${buttons.label.textcolor.primary.pressed};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.primary.pressed};
          }
        }

        &.disabled {
          background-color: ${buttons.container.bgcolor.primary.disabled};
          outline: ${buttons.container.border.primary.disabled.style} ${buttons.container.border.primary.disabled.width}
            ${buttons.container.border.primary.disabled.color};
          color: ${buttons.label.textcolor.primary.disabled};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.primary.disabled};
          }
        }
      }

      &.secondary {
        outline-offset: calc(${buttons.container.border.secondary.rest.width} * -1);
        background-color: ${buttons.container.bgcolor.secondary.rest};
        outline: ${buttons.container.border.secondary.rest.style} ${buttons.container.border.secondary.rest.width}
          ${buttons.container.border.secondary.rest.color};
        color: ${buttons.label.textcolor.secondary.rest};

        & > blr-icon {
          color: ${buttons.icon.iconcolor.secondary.rest};
        }

        &:hover {
          background-color: ${buttons.container.bgcolor.secondary.hover};
          outline: ${buttons.container.border.secondary.hover.style} ${buttons.container.border.secondary.hover.width}
            ${buttons.container.border.secondary.hover.color};
          color: ${buttons.label.textcolor.secondary.hover};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.secondary.hover};
          }
        }

        &:active {
          background-color: ${buttons.container.bgcolor.secondary.pressed};
          outline: ${buttons.container.border.secondary.pressed.style} ${buttons.container.border.secondary.pressed.width}
            ${buttons.container.border.secondary.pressed.color};
          color: ${buttons.label.textcolor.secondary.pressed};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.secondary.pressed};
          }
        }

        &.disabled {
          background-color: ${buttons.container.bgcolor.secondary.disabled};
          outline: ${buttons.container.border.secondary.disabled.style} ${buttons.container.border.secondary.disabled.width}
            ${buttons.container.border.secondary.disabled.color};
          color: ${buttons.label.textcolor.secondary.disabled};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.secondary.disabled};
          }
        }
      }

      &.silent {
        background-color: ${buttons.container.bgcolor.silent.rest};
        outline: ${buttons.container.border.silent.rest.style} ${buttons.container.border.silent.rest.width}
          ${buttons.container.border.silent.rest.color};
        color: ${buttons.label.textcolor.silent.rest};

        & > blr-icon {
          color: ${buttons.icon.iconcolor.silent.rest};
        }

        &:hover {
          background-color: ${buttons.container.bgcolor.silent.hover};
          outline: ${buttons.container.border.silent.hover.style} ${buttons.container.border.silent.hover.width}
            ${buttons.container.border.silent.hover.color};
          color: ${buttons.label.textcolor.silent.hover};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.silent.hover};
          }
        }

        &:active {
          background-color: ${buttons.container.bgcolor.silent.pressed};
          outline: ${buttons.container.border.silent.pressed.style} ${buttons.container.border.silent.pressed.width}
            ${buttons.container.border.silent.pressed.color};
          color: ${buttons.label.textcolor.silent.pressed};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.silent.pressed};
          }
        }

        &.disabled {
          background-color: ${buttons.container.bgcolor.silent.disabled};
          outline: ${buttons.container.border.silent.disabled.style} ${buttons.container.border.silent.disabled.width}
            ${buttons.container.border.silent.disabled.color};
          color: ${buttons.label.textcolor.silent.disabled};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.silent.disabled};
          }
        }
      }

      &.destructive {
        background-color: ${buttons.container.bgcolor.destructive.rest};
        outline: ${buttons.container.border.destructive.rest.style} ${buttons.container.border.destructive.rest.width}
          ${buttons.container.border.destructive.rest.color};
        color: ${buttons.label.textcolor.destructive.rest};

        & > blr-icon {
          color: ${buttons.icon.iconcolor.destructive.rest};
        }

        &:hover {
          background-color: ${buttons.container.bgcolor.destructive.hover};
          outline: ${buttons.container.border.destructive.hover.style} ${buttons.container.border.destructive.hover.width}
            ${buttons.container.border.destructive.hover.color};
          color: ${buttons.label.textcolor.destructive.hover};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.destructive.hover};
          }
        }

        &:active {
          background-color: ${buttons.container.bgcolor.destructive.pressed};
          outline: ${buttons.container.border.destructive.pressed.style} ${buttons.container.border.destructive.pressed.width}
            ${buttons.container.border.destructive.pressed.color};
          color: ${buttons.label.textcolor.destructive.pressed};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.destructive.pressed};
          }
        }

        &.disabled {
          background-color: ${buttons.container.bgcolor.destructive.disabled};
          outline: ${buttons.container.border.destructive.disabled.style} ${buttons.container.border.destructive.disabled.width}
            ${buttons.container.border.destructive.disabled.color};
          color: ${buttons.label.textcolor.destructive.disabled};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.destructive.disabled};
          }
        }
      }

      &.encourage {
        background-color: ${buttons.container.bgcolor.encourage.rest};
        outline: ${buttons.container.border.encourage.rest.style} ${buttons.container.border.encourage.rest.width}
          ${buttons.container.border.encourage.rest.color};
        color: ${buttons.label.textcolor.encourage.rest};

        & > blr-icon {
          color: ${buttons.icon.iconcolor.encourage.rest};
        }

        &:hover {
          background-color: ${buttons.container.bgcolor.encourage.hover};
          outline: ${buttons.container.border.encourage.hover.style} ${buttons.container.border.encourage.hover.width}
            ${buttons.container.border.encourage.hover.color};
          color: ${buttons.label.textcolor.encourage.hover};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.encourage.hover};
          }
        }

        &:active {
          background-color: ${buttons.container.bgcolor.encourage.pressed};
          outline: ${buttons.container.border.encourage.pressed.style} ${buttons.container.border.encourage.pressed.width}
            ${buttons.container.border.encourage.pressed.color};
          color: ${buttons.label.textcolor.encourage.pressed};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.encourage.pressed};
          }
        }

        &.disabled {
          background-color: ${buttons.container.bgcolor.encourage.disabled};
          outline: ${buttons.container.border.encourage.disabled.style} ${buttons.container.border.encourage.disabled.width}
            ${buttons.container.border.encourage.disabled.color};
          color: ${buttons.label.textcolor.encourage.disabled};

          & > blr-icon {
            color: ${buttons.icon.iconcolor.encourage.disabled};
          }
        }
      }
    }
  `;
});
