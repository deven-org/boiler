import { componentTokens } from "../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";
import { semanticTokens } from "../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";
import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

const { ButtonIcon } = componentTokens.cmp;
const { global, buttons } = semanticTokens.sem;

export const styleCustom = typeSafeNestedCss`
  .focus-layer {
    position: absolute;
    inset: 0;
    outline-color: ${global.focusring.border.color};
    outline-style: ${global.focusring.border.style};
    outline-width: ${global.focusring.border.width};
  }

  .blr-button-icon {
    all: inital;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    cursor: pointer;
    position: relative;

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
  
  .loading {

   &.blr-button-icon:hover, &.blr-button-icon:focus{
      cursor: auto;
      text-decoration: none;
      &.cta{
        background-color: ${buttons.container.bgcolor.cta.loading}
      }
      &.primary{
        background-color: ${buttons.container.bgcolor.primary.loading}
      }
      &.secondary{
        background-color: ${buttons.container.bgcolor.secondary.loading}
      }
      &.silent{
        background-color: ${buttons.container.bgcolor.silent.loading}
      }
      &.destructive{
        background-color: ${buttons.container.bgcolor.destructive.loading}
      }
      &.encourage{
        background-color: ${buttons.container.bgcolor.encourage.loading}
      }
    }

    & > .icon {
      visibility: hidden;
    }
  }
`;
