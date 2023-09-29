import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: actionLight, tokenizedDark: actionDark } = renderThemedCssStrings((_componentTokens, semanticTokens) => {
  const { BorderRadius, CTA, Primary, Secondary, Silent, XS, SM, MD, LG, XL, Destructive, Encourage } = semanticTokens.Action;

  return css`
    .blr-semantic-action {
      border-radius: ${BorderRadius};
      border-width: ${CTA.Rest.width};

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
        border-color: ${CTA.SurfaceStroke.Rest};
        color: ${CTA.Icon.Rest};

        &:hover {
          background-color: ${CTA.SurfaceFill.Hover};
        }

        &:active {
          background-color: ${CTA.SurfaceFill.Pressed};
        }

        &:disabled {
          background-color: ${CTA.SurfaceFill.Disabled};
          color: ${CTA.Icon.Disabled};
        }

        &.disabled {
          background-color: ${CTA.SurfaceFill.Disabled};
          color: ${CTA.Icon.Disabled};
          pointer-events: none;
        }
      }

      &.primary {
        background-color: ${Primary.SurfaceFill.Rest};
        border-color: ${Primary.SurfaceStroke.Rest};
        color: ${Primary.Icon.Rest};

        &:hover {
          background-color: ${Primary.SurfaceFill.Hover};
        }

        &:active {
          background-color: ${Primary.SurfaceFill.Pressed};
        }

        &:disabled {
          background-color: ${Primary.SurfaceFill.Disabled};
          color: ${Primary.Icon.Disabled};
        }

        &.disabled {
          background-color: ${Primary.SurfaceFill.Disabled};
          color: ${Primary.Icon.Disabled};
          pointer-events: none;
        }
      }

      &.secondary {
        background-color: ${Secondary.SurfaceFill.Rest};
        border-color: ${Secondary.SurfaceStroke.Rest};
        color: ${Secondary.Icon.Rest};

        &:hover {
          background-color: ${Secondary.SurfaceFill.Hover};
          border-color: ${Secondary.SurfaceStroke.Hover};
          color: ${Secondary.Icon.Hover};
        }

        &:active {
          background-color: ${Secondary.SurfaceFill.Pressed};
          border-color: ${Secondary.SurfaceStroke.Pressed};
          color: ${Secondary.Icon.Pressed};
        }

        &:disabled {
          background-color: ${Secondary.SurfaceFill.Disabled};
          border-color: ${Secondary.SurfaceStroke.Disabled};
          color: ${Secondary.Icon.Disabled};
        }

        &.disabled {
          background-color: ${Secondary.SurfaceFill.Disabled};
          border-color: ${Secondary.SurfaceStroke.Disabled};
          color: ${Secondary.Icon.Disabled};
          pointer-events: none;
        }
      }

      &.silent {
        background-color: ${Silent.SurfaceFill.Rest};
        border-color: ${Silent.SurfaceStroke.Rest};
        color: ${Silent.Icon.Rest};

        &:hover {
          background-color: ${Silent.SurfaceFill.Hover};
          color: ${Silent.Icon.Hover};
        }

        &:active {
          background-color: ${Silent.SurfaceFill.Pressed};
          color: ${Silent.Icon.Pressed};
        }

        &:disabled {
          background-color: ${Silent.SurfaceFill.Pressed};
          color: ${Silent.Icon.Disabled};
        }

        &.disabled {
          background-color: ${Silent.SurfaceFill.Pressed};
          color: ${Silent.Icon.Disabled};
          pointer-events: none;
        }
      }

      &.destructive {
        background-color: ${Destructive.SurfaceFill.Rest};
        border-color: ${Destructive.SurfaceStroke.Rest};
        color: ${Destructive.Icon.Rest};

        &:hover {
          background-color: ${Destructive.SurfaceFill.Hover};
        }

        &:active {
          background-color: ${Destructive.SurfaceFill.Pressed};
        }

        &:disabled {
          background-color: ${Destructive.SurfaceFill.Disabled};
          color: ${Destructive.Icon.Disabled};
        }

        &.disabled {
          background-color: ${Destructive.SurfaceFill.Disabled};
          color: ${Destructive.Icon.Disabled};
          pointer-events: none;
        }
      }

      &.encourage {
        background-color: ${Encourage.SurfaceFill.Rest};
        border-color: ${Encourage.SurfaceStroke.Rest};
        color: ${Encourage.Icon.Rest};

        &:hover {
          background-color: ${Encourage.SurfaceFill.Hover};
        }

        &:active {
          background-color: ${Encourage.SurfaceFill.Pressed};
        }

        &:disabled {
          background-color: ${Encourage.SurfaceFill.Disabled};
          color: ${Encourage.Icon.Disabled};
        }

        &.disabled {
          background-color: ${Encourage.SurfaceFill.Disabled};
          color: ${Encourage.Icon.Disabled};
          pointer-events: none;
        }
      }
    }
  `;
});
