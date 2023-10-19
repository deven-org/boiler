import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: actionLight, tokenizedDark: actionDark } = renderThemedCssStrings((_componentTokens, semanticTokens) => {
  const { BorderRadius, CTA, Primary, Secondary, Silent, XS, SM, MD, LG, XL, Destructive, Encourage } = semanticTokens.Action;

  return css`
    .blr-semantic-action {
      border-radius: ${BorderRadius};
      outline-style: solid;

      &.xs {
        font-family: ${XS.Label.fontFamily}, sans-serif;
        font-weight: ${XS.Label.fontWeight};
        line-height: ${XS.Label.lineHeight};
        font-size: ${XS.Label.fontSize};
      }

      &.sm {
        font-family: ${SM.Label.fontFamily}, sans-serif;
        font-weight: ${SM.Label.fontWeight};
        line-height: ${SM.Label.lineHeight};
        font-size: ${SM.Label.fontSize};
      }

      &.md {
        font-family: ${MD.Label.fontFamily}, sans-serif;
        font-weight: ${MD.Label.fontWeight};
        line-height: ${MD.Label.lineHeight};
        font-size: ${MD.Label.fontSize};
      }

      &.lg {
        font-family: ${LG.Label.fontFamily}, sans-serif;
        font-weight: ${LG.Label.fontWeight};
        line-height: ${LG.Label.lineHeight};
        font-size: ${LG.Label.fontSize};
      }

      &.xl {
        font-family: ${XL.Label.fontFamily}, sans-serif;
        font-weight: ${XL.Label.fontWeight};
        line-height: ${XL.Label.lineHeight};
        font-size: ${XL.Label.fontSize};
      }

      &.cta {
        background-color: ${CTA.SurfaceFill.Rest};
        outline-color: ${CTA.SurfaceStroke.Rest};
        outline-width: ${CTA.SurfaceStroke.width};
        color: ${CTA.Icon.Rest};

        &:hover {
          background-color: ${CTA.SurfaceFill.Hover};
          color: ${CTA.SurfaceFill.Disabled};
          outline-color: ${CTA.SurfaceStroke.Hover};
          outline-width: ${CTA.SurfaceStroke.width};
        }

        &:active {
          background-color: ${CTA.SurfaceFill.Pressed};
          color: ${CTA.SurfaceFill.Disabled};
          outline-color: ${CTA.SurfaceStroke.Hover};
          outline-width: ${CTA.SurfaceStroke.width};
        }

        &:disabled {
          background-color: ${CTA.SurfaceFill.Disabled};
          color: ${CTA.SurfaceFill.Disabled};
          outline-color: ${CTA.SurfaceStroke.Hover};
          outline-width: ${CTA.SurfaceStroke.width};
        }
      }

      &.primary {
        background-color: ${Primary.SurfaceFill.Rest};
        outline-color: ${Primary.SurfaceStroke.Rest};
        outline-width: ${Primary.Rest.width};
        color: ${Primary.Icon.Rest};

        &:hover {
          background-color: ${Primary.SurfaceFill.Hover};
          color: ${Primary.SurfaceFill.Disabled};
          outline-color: ${Primary.SurfaceStroke.Hover};
          outline-width: ${Primary.SurfaceStroke.width};
        }

        &:active {
          background-color: ${Primary.SurfaceFill.Pressed};
          color: ${Primary.SurfaceFill.Disabled};
          outline-color: ${Primary.SurfaceStroke.Hover};
          outline-width: ${Primary.SurfaceStroke.width};
        }

        &:disabled {
          background-color: ${Primary.SurfaceFill.Disabled};
          color: ${Primary.SurfaceFill.Disabled};
          outline-color: ${Primary.SurfaceStroke.Hover};
          outline-width: ${Primary.SurfaceStroke.width};
        }
      }

      &.secondary {
        background-color: ${Secondary.SurfaceFill.Rest};
        outline-color: ${Secondary.SurfaceStroke.Rest};
        outline-width: ${Secondary.Rest.width};
        color: ${Secondary.Icon.Rest};

        &:hover {
          background-color: ${Secondary.SurfaceFill.Hover};
          outline-color: ${Secondary.SurfaceStroke.Hover};
          color: ${Secondary.Icon.Hover};
        }

        &:active {
          background-color: ${Secondary.SurfaceFill.Pressed};
          outline-color: ${Secondary.SurfaceStroke.Pressed};
          color: ${Secondary.Icon.Pressed};
        }

        &:disabled {
          background-color: ${Secondary.SurfaceFill.Disabled};
          outline-color: ${Secondary.SurfaceStroke.Disabled};
          color: ${Secondary.Icon.Disabled};
        }
      }

      &.silent {
        background-color: ${Silent.SurfaceFill.Rest};
        outline-color: ${Silent.SurfaceStroke.Rest};
        outline-width: ${Silent.Rest.width};
        color: ${Silent.Icon.Rest};

        &:hover {
          background-color: ${Silent.SurfaceFill.Hover};
          color: ${Silent.Icon.Hover};
          outline-color: ${Silent.SurfaceStroke.Hover};
        }

        &:active {
          background-color: ${Silent.SurfaceFill.Pressed};
          color: ${Silent.Icon.Pressed};
          outline-color: ${Silent.SurfaceStroke.Hover};
        }

        &:disabled {
          background-color: ${Silent.SurfaceFill.Pressed};
          color: ${Silent.Icon.Disabled};
          outline-color: ${Silent.SurfaceStroke.Hover};
        }
      }

      &.destructive {
        background-color: ${Destructive.SurfaceFill.Rest};
        outline-color: ${Destructive.SurfaceStroke.Rest};
        outline-width: ${Destructive.Rest.width};
        color: ${Destructive.Icon.Rest};

        &:hover {
          background-color: ${Destructive.SurfaceFill.Hover};
          outline-color: ${Destructive.SurfaceStroke.Hover};
          color: ${Destructive.Icon.Disabled};
        }

        &:active {
          background-color: ${Destructive.SurfaceFill.Pressed};
          outline-color: ${Destructive.SurfaceStroke.Hover};
          color: ${Destructive.Icon.Disabled};
        }

        &:disabled {
          background-color: ${Destructive.SurfaceFill.Disabled};
          color: ${Destructive.Icon.Disabled};
          outline-color: ${Destructive.SurfaceStroke.Hover};
        }
      }

      &.encourage {
        background-color: ${Encourage.SurfaceFill.Rest};
        outline-color: ${Encourage.SurfaceStroke.Rest};
        outline-width: ${Encourage.Rest.width};
        color: ${Encourage.Icon.Rest};

        &:hover {
          background-color: ${Encourage.SurfaceFill.Hover};
          color: ${Encourage.Icon.Disabled};
          outline-color: ${Encourage.SurfaceStroke.Hover};
        }

        &:active {
          background-color: ${Encourage.SurfaceFill.Pressed};
          color: ${Encourage.Icon.Disabled};
          outline-color: ${Encourage.SurfaceStroke.Hover};
        }

        &:disabled {
          background-color: ${Encourage.SurfaceFill.Disabled};
          color: ${Encourage.Icon.Disabled};
          outline-color: ${Encourage.SurfaceStroke.Hover};
        }
      }
    }
  `;
});
