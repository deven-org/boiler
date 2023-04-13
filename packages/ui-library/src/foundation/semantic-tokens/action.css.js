import { css } from "lit";
import { semanticTokens } from "../_tokens-generated/index.generated";

const { BorderRadius, CTA, Primary, Secondary, Silent, XS, SM, MD, LG, XL, Destructive, Encourage } =
  semanticTokens.Action;

export const action = css`
  .blr-semantic-action {
    border-radius: ${BorderRadius};
    border-width: ${CTA.Rest.width};
  }

  .blr-semantic-action.cta {
    background-color: ${CTA.SurfaceFill.Rest};
    border-color: ${CTA.SurfaceStroke.Rest};
    color: ${CTA.Icon.Rest};
  }

  .blr-semantic-action.cta:hover {
    background-color: ${CTA.SurfaceFill.Hover};
  }

  .blr-semantic-action.cta:active {
    background-color: ${CTA.SurfaceFill.Pressed};
  }

  .blr-semantic-action.cta:disabled {
    background-color: ${CTA.SurfaceFill.Disabled};
    color: ${CTA.Icon.Disabled};
  }

  .blr-semantic-action.primary {
    background-color: ${Primary.SurfaceFill.Rest};
    border-color: ${Primary.SurfaceStroke.Rest};
    color: ${Primary.Icon.Rest};
  }

  .blr-semantic-action.primary:hover {
    background-color: ${Primary.SurfaceFill.Hover};
  }

  .blr-semantic-action.primary:active {
    background-color: ${Primary.SurfaceFill.Pressed};
  }

  .blr-semantic-action.primary:disabled {
    background-color: ${Primary.SurfaceFill.Disabled};
    color: ${Primary.Icon.Disabled};
  }

  .blr-semantic-action.secondary {
    background-color: ${Secondary.SurfaceFill.Rest};
    border-color: ${Secondary.SurfaceStroke.Rest};
    color: ${Secondary.Icon.Rest};
  }

  .blr-semantic-action.secondary:hover {
    background-color: ${Secondary.SurfaceFill.Hover};
    border-color: ${Secondary.SurfaceStroke.Hover};
    color: ${Secondary.Icon.Hover};
  }

  .blr-semantic-action.secondary:active {
    background-color: ${Secondary.SurfaceFill.Pressed};
    border-color: ${Secondary.SurfaceStroke.Pressed};
    color: ${Secondary.Icon.Pressed};
  }

  .blr-semantic-action.secondary:disabled {
    background-color: ${Secondary.SurfaceFill.Disabled};
    border-color: ${Secondary.SurfaceStroke.Disabled};
    color: ${Secondary.Icon.Disabled};
  }

  .blr-semantic-action.silent {
    background-color: ${Silent.SurfaceFill.Rest};
    border-color: ${Silent.SurfaceStroke.Rest};
    color: ${Silent.Icon.Rest};
  }

  .blr-semantic-action.silent:hover {
    background-color: ${Silent.SurfaceFill.Hover};
    color: ${Silent.Icon.Hover};
  }

  .blr-semantic-action.silent:active {
    background-color: ${Silent.SurfaceFill.Pressed};
    color: ${Silent.Icon.Pressed};
  }

  .blr-semantic-action.silent:disabled {
    background-color: ${Silent.SurfaceFill.Pressed};
    color: ${Silent.Icon.Disabled};
  }

  .blr-semantic-action.xs {
    font-family: ${XS.Label.fontFamily}, sans-serif;
    font-weight: ${XS.Label.fontWeight};
    line-height: ${XS.Label.lineHeight};
    font-size: ${XS.Label.fontSize};
  }

  .blr-semantic-action.sm {
    font-family: ${SM.Label.fontFamily}, sans-serif;
    font-weight: ${SM.Label.fontWeight};
    line-height: ${SM.Label.lineHeight};
    font-size: ${SM.Label.fontSize};
  }

  .blr-semantic-action.md {
    font-family: ${MD.Label.fontFamily}, sans-serif;
    font-weight: ${MD.Label.fontWeight};
    line-height: ${MD.Label.lineHeight};
    font-size: ${MD.Label.fontSize};
  }

  .blr-semantic-action.lg {
    font-family: ${LG.Label.fontFamily}, sans-serif;
    font-weight: ${LG.Label.fontWeight};
    line-height: ${LG.Label.lineHeight};
    font-size: ${LG.Label.fontSize};
  }

  .blr-semantic-action.xl {
    font-family: ${XL.Label.fontFamily}, sans-serif;
    font-weight: ${XL.Label.fontWeight};
    line-height: ${XL.Label.lineHeight};
    font-size: ${XL.Label.fontSize};
  }

  .blr-semantic-action.destructive {
    background-color: ${Destructive.SurfaceFill.Rest};
    border-color: ${Destructive.SurfaceStroke.Rest};
    color: ${Destructive.Icon.Rest};
  }

  .blr-semantic-action.destructive:hover {
    background-color: ${Destructive.SurfaceFill.Hover};
  }

  .blr-semantic-action.destructive:active {
    background-color: ${Destructive.SurfaceFill.Pressed};
  }

  .blr-semantic-action.destructive:disabled {
    background-color: ${Destructive.SurfaceFill.Disabled};
    color: ${Destructive.Icon.Disabled};
  }

  .blr-semantic-action.encourage {
    background-color: ${Encourage.SurfaceFill.Rest};
    border-color: ${Encourage.SurfaceStroke.Rest};
    color: ${Encourage.Icon.Rest};
  }

  .blr-semantic-action.encourage:hover {
    background-color: ${Encourage.SurfaceFill.Hover};
  }

  .blr-semantic-action.encourage:active {
    background-color: ${Encourage.SurfaceFill.Pressed};
  }

  .blr-semantic-action.encourage:disabled {
    background-color: ${Encourage.SurfaceFill.Disabled};
    color: ${Encourage.Icon.Disabled};
  }
`;
