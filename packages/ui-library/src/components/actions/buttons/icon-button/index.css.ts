import { css } from "nested-css-to-flat/lit-css";

import { componentTokens } from "../../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";
import { semanticTokens } from "../../../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";

const { IconButton } = componentTokens.Action;
const { Action } = semanticTokens;
export const styleCustom = css`
  .blr-icon-button {
    all: inital;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    cursor: pointer;
  }

  .blr-icon-button:focus {
    /*  Component Tokens for Outline are missing */
    /* Need to make sure we meet AA requirements with this custom outline */
    outline: 2px solid black;
  }

  .blr-icon-button.disabled {
    pointer-events: none;
    cursor: not-allowed;
  }

  .blr-icon-button.disabled.cta {
    background-color: ${Action.CTA.SurfaceFill.Disabled};
    border: ${Action.CTA.Disabled};
    outline-color: ${Action.CTA.SurfaceStroke.Disabled};
    border-radius: ${Action.BorderRadius};
  }

  .blr-icon-button.disabled.primary {
    background-color: ${Action.Primary.SurfaceFill.Disabled};
    border: ${Action.Primary.Disabled};
    outline-color: ${Action.Primary.SurfaceStroke.Disabled};
    border-radius: ${Action.BorderRadius};
  }

  .blr-icon-button.disabled.secondary {
    background-color: ${Action.Secondary.SurfaceFill.Disabled};
    outline-color: ${Action.Secondary.SurfaceStroke.Disabled};
  }

  .blr-icon-button.disabled.silent {
    background-color: ${Action.Silent.SurfaceFill.Disabled};
    border: ${Action.Silent.Disabled};
    outline-color: ${Action.Silent.SurfaceStroke.Disabled};
    border-radius: ${Action.BorderRadius};
  }

  .blr-icon-button.disabled.encourage {
    background-color: ${Action.Encourage.SurfaceFill.Disabled};
    border: ${Action.Encourage.Disabled};
    outline-color: ${Action.Encourage.SurfaceStroke.Disabled};
    border-radius: ${Action.BorderRadius};
  }

  .blr-icon-button.disabled.destructive {
    background-color: ${Action.Destructive.SurfaceFill.Disabled};
    border: ${Action.Destructive.Disabled};
    outline-color: ${Action.Destructive.SurfaceStroke.Disabled};
    border-radius: ${Action.BorderRadius};
  }

  .blr-icon-button.xs {
    padding: ${IconButton.XS.Padding};
  }

  .blr-icon-button.sm {
    padding: ${IconButton.SM.Padding};
  }

  .blr-icon-button.md {
    padding: ${IconButton.MD.Padding};
  }

  .blr-icon-button.lg {
    padding: ${IconButton.LG.Padding};
  }

  .blr-icon-button.xl {
    padding: ${IconButton.XL.Padding};
  }

  .disabled-icon-secondary {
    color: ${Action.Secondary.Icon.Disabled};
  }

  .disabled-icon-silent {
    color: ${Action.Silent.Icon.Disabled};
  }
`;
