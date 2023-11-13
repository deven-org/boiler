import { typeSafeNestedCss } from "../../../../utils/nested-typesafe-css-literals";

import { componentTokens } from "../../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";
import { semanticTokens } from "../../../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";

const { IconButton } = componentTokens.Actions;
const Actions = semanticTokens.Action;

export const styleCustom = typeSafeNestedCss`
  .blr-icon-button {
    all: inital;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    cursor: pointer;

    &.xs {
      padding: ${IconButton.Container.Padding.XS};
    }

    &.sm {
      padding: ${IconButton.Container.Padding.SM};
    }

    &.md {
      padding: ${IconButton.Container.Padding.MD};
    }

    &.lg {
      padding: ${IconButton.Container.Padding.LG};
    }

    &.xl {
      padding: ${IconButton.Container.Padding.XL};
    }

    &.disabled {
      pointer-events: none;
      cursor: not-allowed;

      &.cta {
        background-color: ${Actions.CTA.SurfaceFill.Disabled};
        border-color: ${Actions.CTA.Disabled.color};
        border-style: ${Actions.CTA.Disabled.style};
        border-width: ${Actions.CTA.Disabled.width};
        outline-color: ${Actions.CTA.SurfaceStroke.Disabled};
        border-radius: ${Actions.BorderRadius};
      }

      &.primary {
        background-color: ${Actions.Primary.SurfaceFill.Disabled};
        border: ${Actions.Primary.Disabled};
        outline-color: ${Actions.Primary.SurfaceStroke.Disabled};
        border-radius: ${Actions.BorderRadius};
      }

      &.secondary {
        background-color: ${Actions.Secondary.SurfaceFill.Disabled};
        outline-color: ${Actions.Secondary.SurfaceStroke.Disabled};
      }

      &.silent {
        background-color: ${Actions.Silent.SurfaceFill.Disabled};
        border: ${Actions.Silent.Disabled};
        outline-color: ${Actions.Silent.SurfaceStroke.Disabled};
        border-radius: ${Actions.BorderRadius};
      }

      &.encourage {
        background-color: ${Actions.Encourage.SurfaceFill.Disabled};
        border: ${Actions.Encourage.Disabled};
        outline-color: ${Actions.Encourage.SurfaceStroke.Disabled};
        border-radius: ${Actions.BorderRadius};
      }

      &.destructive {
        background-color: ${Actions.Destructive.SurfaceFill.Disabled};
        border: ${Actions.Destructive.Disabled};
        outline-color: ${Actions.Destructive.SurfaceStroke.Disabled};
        border-radius: ${Actions.BorderRadius};
      }
    }
  }

  .blr-icon-button:focus {
    /*  Component Tokens for Outline are missing */
    /* Need to make sure we meet AA requirements with this custom outline */
    outline: 2px solid black;
  }

  .disabled-icon-cta {
    color: ${Actions.CTA.Icon.Disabled};
  }

  .disabled-icon-primary {
    color: ${Actions.Primary.Icon.Disabled};
  }

  .disabled-icon-secondary {
    color: ${Actions.Secondary.Icon.Disabled};
  }

  .disabled-icon-destructive {
    color: ${Actions.Destructive.Icon.Disabled};
  }

  .disabled-icon-silent {
    color: ${Actions.Silent.Icon.Disabled};
  }

  .disabled-icon-encourage {
    color: ${Actions.Encourage.Icon.Disabled};
  }
`;
