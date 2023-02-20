import { css, unsafeCSS } from 'lit';
import { semanticTokens } from '../_tokens-generated/semantic-tokens.generated';

const { BorderRadius, BorderWidth, CTA, Primary } = semanticTokens.semantic.Action;

export const action = css`
  .blr-semantic-action {
    border-radius: ${unsafeCSS(BorderRadius)};
    border-width: ${unsafeCSS(BorderWidth.Rest)};
  }

  .blr-semantic-action.blr-semantic-action-cta {
    background-color: ${unsafeCSS(CTA.SurfaceFill.Rest)};
    border-color: ${unsafeCSS(CTA.SurfaceStroke.Rest)};
    color: ${unsafeCSS(CTA.Icon.Rest)};
  }

  .blr-semantic-action.blr-semantic-action-cta:hover {
    background-color: ${unsafeCSS(CTA.SurfaceFill.Hover)};
  }

  .blr-semantic-action.blr-semantic-action-cta:active {
    background-color: ${unsafeCSS(CTA.SurfaceFill.Pressed)};
  }

  .blr-semantic-action.blr-semantic-action-cta:disabled {
    background-color: ${unsafeCSS(CTA.SurfaceFill.Disabled)};
    color: ${unsafeCSS(CTA.Icon.Disabled)};
  }

  .blr-semantic-action.blr-semantic-action-primary {
    background-color: ${unsafeCSS(Primary.SurfaceFill.Rest)};
    border-color: ${unsafeCSS(Primary.SurfaceStroke.Rest)};
    color: ${unsafeCSS(Primary.Icon.Rest)};
  }

  .blr-semantic-action.blr-semantic-action-primary:hover {
    background-color: ${unsafeCSS(Primary.SurfaceFill.Hover)};
  }

  .blr-semantic-action.blr-semantic-action-primary:active {
    background-color: ${unsafeCSS(Primary.SurfaceFill.Pressed)};
  }

  .blr-semantic-action.blr-semantic-action-primary:disabled {
    background-color: ${unsafeCSS(Primary.SurfaceFill.Disabled)};
    color: ${unsafeCSS(Primary.Icon.Disabled)};
  }

  // Secondary & Silent are still missing because of the alpha value situation.
`;
