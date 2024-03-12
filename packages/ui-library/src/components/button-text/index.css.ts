import { componentTokens } from "../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";
import { semanticTokens } from "../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";
import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

const { ButtonText } = componentTokens.cmp;
const { global, buttons } = semanticTokens.sem;

export const styleCustom = typeSafeNestedCss`
  .focus-layer {
    position: absolute;
    inset: 0;
    outline-color: ${global.focusring.border.color};
    outline-style: ${global.focusring.border.style};
    outline-width: ${global.focusring.border.width};
  }

  .blr-button-text {
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    position: relative;
    
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

  .loading {
    & > .icon,
    & > .label,
    & > .flex-container {
      visibility: hidden;
    }

    &.blr-button-text:hover, &.blr-button-text:focus {
      cursor: auto;
    
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

  .trailing-icon-class,
  .leading-icon-class {
    display: flex;
    align-items: center;
  }
`;
