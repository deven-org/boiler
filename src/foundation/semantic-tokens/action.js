import { css, unsafeCSS } from 'lit';
import { semanticTokens } from '../_tokens-generated/semantic-tokens.generated';

const { BorderRadius, BorderWidth, CTA, Primary, Secondary, Silent, XS, SM, MD, LG, XL, Destructive, Encourage } =
  semanticTokens.semantic.Action;

export const action = css`
  // SEMANTIC ACTION BASECLASS
  .blr-semantic-action {
    border-radius: ${unsafeCSS(BorderRadius)};
    border-width: ${unsafeCSS(BorderWidth.Rest)};
  }

  // SEMANTIC ACTION CTA

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

  // SEMANTIC ACTION PRIMARY

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

  // SEMANTIC ACTION SECONDARY

  .blr-semantic-action.blr-semantic-action-secondary {
    background-color: ${unsafeCSS(Secondary.SurfaceFill.Rest)};
    border-color: ${unsafeCSS(Secondary.SurfaceStroke.Rest)};
    color: ${unsafeCSS(Secondary.Icon.Rest)};
  }

  .blr-semantic-action.blr-semantic-action-secondary:hover {
    background-color: ${unsafeCSS(Secondary.SurfaceFill.Hover)};
    border-color: ${unsafeCSS(Secondary.SurfaceStroke.Hover)};
    color: ${unsafeCSS(Secondary.Icon.Hover)};
  }

  .blr-semantic-action.blr-semantic-action-secondary:active {
    background-color: ${unsafeCSS(Secondary.SurfaceFill.Pressed)};
    border-color: ${unsafeCSS(Secondary.SurfaceStroke.Pressed)};
    color: ${unsafeCSS(Secondary.Icon.Pressed)};
  }

  .blr-semantic-action.blr-semantic-action-secondary:disabled {
    background-color: ${unsafeCSS(Secondary.SurfaceFill.Disabled)};
    border-color: ${unsafeCSS(Secondary.SurfaceStroke.Disabled)};
    color: ${unsafeCSS(Secondary.Icon.Disabled)};
  }

  // SEMANTIC ACTION SILENT

  .blr-semantic-action.blr-semantic-action-silent {
    background-color: ${unsafeCSS(Silent.SurfaceFill.Rest)};
    border-color: ${unsafeCSS(Silent.SurfaceStroke.Rest)};
    color: ${unsafeCSS(Silent.Icon.Rest)};
  }

  .blr-semantic-action.blr-semantic-action-silent:hover {
    background-color: ${unsafeCSS(Silent.SurfaceFill.Hover)};
    color: ${unsafeCSS(Silent.Icon.Hover)};
  }

  .blr-semantic-action.blr-semantic-action-silent:active {
    background-color: ${unsafeCSS(Silent.SurfaceFill.Pressed)};
    color: ${unsafeCSS(Silent.Icon.Pressed)};
  }

  .blr-semantic-action.blr-semantic-action-silent:disabled {
    background-color: ${unsafeCSS(Silent.SurfaceFill.Pressed)};
    color: ${unsafeCSS(Silent.Icon.Disabled)};
  }

  // SEMANTIC ACTION XS, SM, MD, LG, XL

  .blr-semantic-action.blr-semantic-action-xs {
    height: ${unsafeCSS(XS.Height.Rest)};
    font-family: ${unsafeCSS(XS.Label.fontFamily)};
    font-weight: ${unsafeCSS(XS.Label.fontWeight)};
    line-height: ${unsafeCSS(XS.Label.lineHeight)};
    font-size: ${unsafeCSS(XS.Label.fontSize)};
  }

  .blr-semantic-action.blr-semantic-action-sm {
    height: ${unsafeCSS(XS.Height.Rest)};
    font-family: ${unsafeCSS(SM.Label.fontFamily)};
    font-weight: ${unsafeCSS(SM.Label.fontWeight)};
    line-height: ${unsafeCSS(SM.Label.lineHeight)};
    font-size: ${unsafeCSS(SM.Label.fontSize)};
  }

  .blr-semantic-action.blr-semantic-action-md {
    height: ${unsafeCSS(XS.Height.Rest)};
    font-family: ${unsafeCSS(MD.Label.fontFamily)};
    font-weight: ${unsafeCSS(MD.Label.fontWeight)};
    line-height: ${unsafeCSS(MD.Label.lineHeight)};
    font-size: ${unsafeCSS(MD.Label.fontSize)};
  }

  .blr-semantic-action.blr-semantic-action-lg {
    height: ${unsafeCSS(XS.Height.Rest)};
    font-family: ${unsafeCSS(LG.Label.fontFamily)};
    font-weight: ${unsafeCSS(LG.Label.fontWeight)};
    line-height: ${unsafeCSS(LG.Label.lineHeight)};
    font-size: ${unsafeCSS(LG.Label.fontSize)};
  }

  .blr-semantic-action.blr-semantic-action-xl {
    height: ${unsafeCSS(XS.Height.Rest)};
    font-family: ${unsafeCSS(XL.Label.fontFamily)};
    font-weight: ${unsafeCSS(XL.Label.fontWeight)};
    line-height: ${unsafeCSS(XL.Label.lineHeight)};
    font-size: ${unsafeCSS(XL.Label.fontSize)};
  }

  // SEMANTIC ACTION DESTRUCTIVE

  .blr-semantic-action.blr-semantic-action-destructive {
    background-color: ${unsafeCSS(Destructive.SurfaceFill.Rest)};
    border-color: ${unsafeCSS(Destructive.SurfaceStroke.Rest)};
    color: ${unsafeCSS(Destructive.Icon.Rest)};
  }

  .blr-semantic-action.blr-semantic-action-destructive:hover {
    background-color: ${unsafeCSS(Destructive.SurfaceFill.Hover)};
  }

  .blr-semantic-action.blr-semantic-action-destructive:active {
    background-color: ${unsafeCSS(Destructive.SurfaceFill.Pressed)};
  }

  .blr-semantic-action.blr-semantic-action-destructive:disabled {
    background-color: ${unsafeCSS(Destructive.SurfaceFill.Disabled)};
    color: ${unsafeCSS(Destructive.Icon.Disabled)};
  }

  // SEMANTIC ACTION ENCOURAGE

  .blr-semantic-action.blr-semantic-action-encourage {
    background-color: ${unsafeCSS(Encourage.SurfaceFill.Rest)};
    border-color: ${unsafeCSS(Encourage.SurfaceStroke.Rest)};
    color: ${unsafeCSS(Encourage.Icon.Rest)};
  }

  .blr-semantic-action.blr-semantic-action-encourage:hover {
    background-color: ${unsafeCSS(Encourage.SurfaceFill.Hover)};
  }

  .blr-semantic-action.blr-semantic-action-encourage:active {
    background-color: ${unsafeCSS(Encourage.SurfaceFill.Pressed)};
  }

  .blr-semantic-action.blr-semantic-action-encourage:disabled {
    background-color: ${unsafeCSS(Encourage.SurfaceFill.Disabled)};
    color: ${unsafeCSS(Encourage.Icon.Disabled)};
  }
`;
