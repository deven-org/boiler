import { css } from "nested-css-to-flat/lit-css";
import { componentTokens } from "../../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";
import { semanticTokens } from "../../../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";

const { TextButton } = componentTokens.Action;
const { Action } = semanticTokens;
export const styleCustom = css`
  .blr-text-button {
    align-items: center;
    justify-content: center;
    display: inline-flex;
    cursor: pointer;
    outline-offset: -2px;
    position: relative;
  }

  .blr-text-button:focus {
    /*  Component Tokens for Outline are missing */
    /* Need to make sure we meet AA requirements with this custom outline */
    outline: 2px solid black;
  }

  .blr-text-button.disabled {
    pointer-events: none;
    cursor: not-allowed;
  }

  .blr-text-button.disabled.cta {
    background-color: ${Action.CTA.SurfaceFill.Disabled};
    border: ${Action.CTA.Disabled};
    outline-color: ${Action.CTA.SurfaceStroke.Disabled};
    border-radius: ${Action.BorderRadius};
  }

  .blr-text-button.disabled.primary {
    background-color: ${Action.Primary.SurfaceFill.Disabled};
    border: ${Action.Primary.Disabled};
    outline-color: ${Action.Primary.SurfaceStroke.Disabled};
    border-radius: ${Action.BorderRadius};
  }

  .blr-text-button.disabled.secondary {
    background-color: ${Action.Secondary.SurfaceFill.Disabled};
    outline-color: ${Action.Secondary.SurfaceStroke.Disabled};
  }

  .blr-text-button.disabled.silent {
    background-color: ${Action.Silent.SurfaceFill.Disabled};
    border: ${Action.Silent.Disabled};
    outline-color: ${Action.Silent.SurfaceStroke.Disabled};
    border-radius: ${Action.BorderRadius};
  }

  .blr-text-button.disabled.encourage {
    background-color: ${Action.Encourage.SurfaceFill.Disabled};
    border: ${Action.Encourage.Disabled};
    outline-color: ${Action.Encourage.SurfaceStroke.Disabled};
    border-radius: ${Action.BorderRadius};
  }

  .blr-text-button.disabled.destructive {
    background-color: ${Action.Destructive.SurfaceFill.Disabled};
    border: ${Action.Destructive.Disabled};
    outline-color: ${Action.Destructive.SurfaceStroke.Disabled};
    border-radius: ${Action.BorderRadius};
  }

  .blr-text-button.xs {
    gap: ${TextButton.XS.ItemSpacing};
    padding: ${TextButton.XS.Padding};
  }

  .blr-text-button.sm {
    gap: ${TextButton.SM.ItemSpacing};
    padding: ${TextButton.SM.Padding};
  }

  .blr-text-button.md {
    gap: ${TextButton.MD.ItemSpacing};
    padding: ${TextButton.MD.Padding};
  }

  .blr-text-button.lg {
    gap: ${TextButton.LG.ItemSpacing};
    padding: ${TextButton.LG.Padding};
  }

  .blr-text-button.xl {
    gap: ${TextButton.XL.ItemSpacing};
    padding: ${TextButton.XL.Padding};
  }

  .loading-class-icons,
  .loading-class-label {
    color: transparent;
  }

  .loader-class {
    position: absolute;
    display: inline-flex;
  }

  .disabled-icon-secondary {
    color: ${Action.Secondary.Icon.Disabled};
  }

  .disabled-icon-silent {
    color: ${Action.Silent.Icon.Disabled};
  }

  .disabled-label-secondary {
    color: ${Action.Secondary.Label.Disabled};
  }

  .disabled-label-silent {
    color: ${Action.Silent.Label.Disabled};
  }
`;
