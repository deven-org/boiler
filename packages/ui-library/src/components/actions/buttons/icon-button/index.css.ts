import { typeSafeNestedCss } from "../../../../utils/nested-typesafe-css-literals";

import { componentTokens } from "../../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";
import { semanticTokens } from "../../../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";

const { IconButton } = componentTokens.cmp;
const { global, buttons } = semanticTokens.sem;

export const styleCustom = typeSafeNestedCss`
  .focus-layer {
    position: absolute;
    inset: 0;
    outline-color: ${global.focusring.border.color};
    outline-style: ${global.focusring.border.style};
    outline-width: ${global.focusring.border.width};
  }

  .blr-icon-button {
    all: inital;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    cursor: pointer;
    position: relative;

    &.xs {
      padding: ${IconButton.Container.Padding.XS};
      border-radius: ${IconButton.Container.BorderRadius.XS};

      & > .focus-layer {
        border-radius: ${IconButton.Container.BorderRadius.XS};
      }
    }

    &.sm {
      padding: ${IconButton.Container.Padding.SM};
      border-radius: ${IconButton.Container.BorderRadius.SM};

      & > .focus-layer {
        border-radius: ${IconButton.Container.BorderRadius.SM};
      }
    }

    &.md {
      padding: ${IconButton.Container.Padding.MD};
      border-radius: ${IconButton.Container.BorderRadius.MD};

      & > .focus-layer {
        border-radius: ${IconButton.Container.BorderRadius.MD};
      }
    }

    &.lg {
      padding: ${IconButton.Container.Padding.LG};
      border-radius: ${IconButton.Container.BorderRadius.LG};

      & > .focus-layer {
        border-radius: ${IconButton.Container.BorderRadius.LG};
      }
    }

    &.xl {
      padding: ${IconButton.Container.Padding.XL};
      border-radius: ${IconButton.Container.BorderRadius.XL};

      & > .focus-layer {
        border-radius: ${IconButton.Container.BorderRadius.XL};
      }
    }
  }
  
  .loading {

   &.blr-icon-button:hover, &.blr-icon-button:focus{
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
