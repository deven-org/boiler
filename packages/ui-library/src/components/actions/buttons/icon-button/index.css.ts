import { typeSafeNestedCss } from "../../../../utils/nested-typesafe-css-literals";

import { componentTokens } from "../../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";
import { semanticTokens } from "../../../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";

const { IconButton } = componentTokens.Actions;
const { Action } = semanticTokens;

export const styleCustom = typeSafeNestedCss`
  .blr-icon-button {
    all: inital;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    cursor: pointer;

    &.xs {
      padding: ${IconButton.Container.Padding.XS};
      border-radius: ${IconButton.BorderRadius};
    }

    &.sm {
      padding: ${IconButton.Container.Padding.SM};
      border-radius: ${IconButton.BorderRadius};
    }

    &.md {
      padding: ${IconButton.Container.Padding.MD};
      border-radius: ${IconButton.BorderRadius};
    }

    &.lg {
      padding: ${IconButton.Container.Padding.LG};
      border-radius: ${IconButton.BorderRadius};
    }

    &.xl {
      padding: ${IconButton.Container.Padding.XL};
      border-radius: ${IconButton.BorderRadius};
    }

    &.disabled {
      pointer-events: none;
      cursor: not-allowed;

      &.cta {
        background-color: ${Action.CTA.SurfaceFill.Disabled};
        border-color: ${Action.CTA.Disabled.color};
        border-style: ${Action.CTA.Disabled.style};
        border-width: ${Action.CTA.Disabled.width};

        outline-color: ${Action.CTA.SurfaceStroke.Disabled};

      }

      &.primary {
        background-color: ${Action.Primary.SurfaceFill.Disabled};
        border-color: ${Action.Primary.Disabled.color};
        border-style: ${Action.Primary.Disabled.style};
        border-width: ${Action.Primary.Disabled.width};
  
        outline-color: ${Action.Primary.SurfaceStroke.Disabled};
      }

      &.secondary {
        background-color: ${Action.Secondary.SurfaceFill.Disabled};
        outline-color: ${Action.Secondary.SurfaceStroke.Disabled};
      }

      &.silent {
        background-color: ${Action.Silent.SurfaceFill.Disabled};
        border: ${Action.Silent.Disabled};
        outline-color: ${Action.Silent.SurfaceStroke.Disabled};
        border-radius: ${Action.BorderRadius};
      }

      &.encourage {
        background-color: ${Action.Encourage.SurfaceFill.Disabled};
        border: ${Action.Encourage.Disabled};
        outline-color: ${Action.Encourage.SurfaceStroke.Disabled};
        border-radius: ${Action.BorderRadius};
      }

      &.destructive {
        background-color: ${Action.Destructive.SurfaceFill.Disabled};
        border: ${Action.Destructive.Disabled};
        outline-color: ${Action.Destructive.SurfaceStroke.Disabled};
        border-radius: ${Action.BorderRadius};
      }
    }
  }

  .blr-icon-button:focus {
    /*  Component Tokens for Outline are missing */
    /* Need to make sure we meet AA requirements with this custom outline */
    outline: 2px solid black;
  }

  .disabled-icon-cta {
    color: ${Action.CTA.Icon.Disabled};
  }

  .disabled-icon-primary {
    color: ${Action.Primary.Icon.Disabled};
  }

  .disabled-icon-secondary {
    color: ${Action.Secondary.Icon.Disabled};
  }

  .disabled-icon-destructive {
    color: ${Action.Destructive.Icon.Disabled};
  }

  .disabled-icon-silent {
    color: ${Action.Silent.Icon.Disabled};
  }

  .disabled-icon-encourage {
    color: ${Action.Encourage.Icon.Disabled};
  }
`;
