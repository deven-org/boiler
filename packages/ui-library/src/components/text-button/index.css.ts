import { componentTokens } from "../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";
import { semanticTokens } from "../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";
import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

const { TextButton } = componentTokens.cmp;
const { global, buttons } = semanticTokens.sem;

export const styleCustom = typeSafeNestedCss`
  .focus-layer {
    position: absolute;
    inset: 0;
    outline-color: ${global.focusring.border.color};
    outline-style: ${global.focusring.border.style};
    outline-width: ${global.focusring.border.width};
  }

  .blr-text-button {
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    position: relative;
    
    &.xs {
      padding: ${TextButton.Container.Padding.XS};
      border-radius: ${TextButton.Container.BorderRadius.XS};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.XS};
      }
    }

    &.sm {
      padding: ${TextButton.Container.Padding.SM};
      border-radius: ${TextButton.Container.BorderRadius.SM};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.SM};
      }
    }

    &.md {
      padding: ${TextButton.Container.Padding.MD};
      border-radius: ${TextButton.Container.BorderRadius.MD};
      

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.MD};
      }
    }

    &.lg {
      padding: ${TextButton.Container.Padding.LG};
      border-radius: ${TextButton.Container.BorderRadius.LG};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.LG};
      }
    }

    &.xl {
      padding: ${TextButton.Container.Padding.XL};
      border-radius: ${TextButton.Container.BorderRadius.XL};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.XL};
      }
    }
  }

  .loading {
    & > .icon,
    & > .label,
    & > .flex-container {
      visibility: hidden;
    }

    &.blr-text-button:hover, &.blr-text-button:focus {
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
      gap: ${TextButton.Container.ItemSpacing.XS}
    }

    &.sm {
      gap: ${TextButton.Container.ItemSpacing.SM}
    }

    &.md {
      gap: ${TextButton.Container.ItemSpacing.MD}
    }

    &.lg {
      gap: ${TextButton.Container.ItemSpacing.LG}
    }

    &.xl {
      gap: ${TextButton.Container.ItemSpacing.XL}
    }
  }

  .trailing-icon-class,
  .leading-icon-class {
    display: flex;
    align-items: center;
  }
`;
