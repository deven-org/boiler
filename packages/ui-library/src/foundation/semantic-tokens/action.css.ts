import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: actionLight, tokenizedDark: actionDark } = renderThemedCssStrings((_componentTokens, semanticTokens) => {
  const { CTA, Primary, Secondary, Silent, XS, SM, MD, LG, XL, Destructive, Encourage } = semanticTokens.Action;

  return typeSafeNestedCss`
    .blr-semantic-action {
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
        outline: ${CTA.Rest.style} ${CTA.Rest.width} ${CTA.Rest.color};
        color: ${CTA.Icon.Rest};

        &:hover {
          background-color: ${CTA.SurfaceFill.Hover};
          color: ${CTA.SurfaceFill.Disabled};
          outline-color: ${CTA.SurfaceStroke.Hover};
          outline-width: ${CTA.Hover.width};
        }

        &:active {
          background-color: ${CTA.SurfaceFill.Pressed};
          color: ${CTA.SurfaceFill.Disabled};
          outline-color: ${CTA.SurfaceStroke.Hover};
          outline-width: ${CTA.Hover.width};
        }

        &:disabled {
          background-color: ${CTA.SurfaceFill.Disabled};
          color: ${CTA.Label.Disabled};
          outline-color: ${CTA.SurfaceStroke.Hover};
          outline-width: ${CTA.Hover.width};
        }
      }

      &.primary {
        background-color: ${Primary.SurfaceFill.Rest};
        outline: ${Primary.Rest.style} ${Primary.Rest.width} ${Primary.Rest.color};
        color: ${Primary.Icon.Rest};

        &:hover {
          background-color: ${Primary.SurfaceFill.Hover};
          color: ${Primary.SurfaceFill.Disabled};
          outline: ${Primary.Hover.style} ${Primary.Hover.width} ${Primary.Hover.color};
        }

        &:active {
          background-color: ${Primary.SurfaceFill.Pressed};
          color: ${Primary.SurfaceFill.Rest};
          outline-color: ${Primary.SurfaceStroke.Hover};
          outline-width: ${Primary.Hover.width};
        }

        &:disabled {
          background-color: ${Primary.SurfaceFill.Disabled};
          color: ${Primary.Label.Disabled};
          outline: ${Primary.Disabled.style} ${Primary.Disabled.width} ${Primary.Disabled.color};
        }
      }

      &.secondary {
        background-color: ${Secondary.SurfaceFill.Rest};
        outline: ${Secondary.Rest.style} ${Secondary.Rest.width} ${Secondary.Rest.color};
        color: ${Secondary.Icon.Rest};

        &:hover {
          background-color: ${Secondary.SurfaceFill.Hover};
          outline-color: ${Secondary.SurfaceStroke.Hover};
          color: ${Secondary.Icon.Hover};
          outline-width: ${Secondary.Hover.width};
        }

        &:active {
          background-color: ${Secondary.SurfaceFill.Pressed};
          outline-color: ${Secondary.SurfaceStroke.Pressed};
          color: ${Secondary.Icon.Pressed};
          outline-width: ${Secondary.Hover.width};
        }

        &:disabled {
          background-color: ${Secondary.SurfaceFill.Disabled};
          outline: ${Secondary.Disabled.style} ${Secondary.Disabled.width} ${Secondary.Disabled.color};
          color: ${Secondary.Icon.Disabled};
          outline-width: ${Secondary.Hover.width};
        }
      }

      &.silent {
        background-color: ${Silent.SurfaceFill.Rest};
        outline: ${Silent.Rest.style} ${Silent.Rest.width} ${Silent.Rest.color};
        color: ${Silent.Icon.Rest};

        &:hover {
          background-color: ${Silent.SurfaceFill.Hover};
          color: ${Silent.Icon.Hover};
          outline-color: ${Silent.SurfaceStroke.Hover};
          outline-width: ${Silent.Hover.width};
        }

        &:active {
          background-color: ${Silent.SurfaceFill.Pressed};
          color: ${Silent.Icon.Pressed};
          outline-color: ${Silent.SurfaceStroke.Hover};
          outline-width: ${Silent.Hover.width};
        }

        &:disabled {
          background-color: ${Silent.SurfaceFill.Rest};
          color: ${Silent.Icon.Disabled};
          outline: ${Silent.Disabled.style} ${Silent.Disabled.width} ${Silent.Disabled.color};
          outline-width: ${Silent.Hover.width};
        }
      }

      &.destructive {
        background-color: ${Destructive.SurfaceFill.Rest};
        outline: ${Destructive.Rest.style} ${Destructive.Rest.width} ${Destructive.Rest.color};
        color: ${Destructive.Icon.Rest};

        &:hover {
          background-color: ${Destructive.SurfaceFill.Hover};
          outline-color: ${Destructive.SurfaceStroke.Hover};
          color: ${Destructive.Icon.Disabled};
          outline-width: ${Destructive.Hover.width};
        }

        &:active {
          background-color: ${Destructive.SurfaceFill.Pressed};
          outline-color: ${Destructive.SurfaceStroke.Hover};
          color: ${Destructive.Icon.Disabled};
          outline-width: ${Destructive.Hover.width};
        }

        &:disabled {
          background-color: ${Destructive.SurfaceFill.Disabled};
          color: ${Destructive.Icon.Disabled};
          outline-color: ${Destructive.SurfaceStroke.Hover};
          outline-width: ${Destructive.Hover.width};
        }
      }

      &.encourage {
        background-color: ${Encourage.SurfaceFill.Rest};
        outline: ${Encourage.Rest.style} ${Encourage.Rest.width} ${Encourage.Rest.color};
        color: ${Encourage.Icon.Rest};

        &:hover {
          background-color: ${Encourage.SurfaceFill.Hover};
          color: ${Encourage.Icon.Disabled};
          outline-color: ${Encourage.SurfaceStroke.Hover};
          outline-width: ${Encourage.Hover.width};
        }

        &:active {
          background-color: ${Encourage.SurfaceFill.Pressed};
          color: ${Encourage.Icon.Disabled};
          outline-color: ${Encourage.SurfaceStroke.Hover};
          outline-width: ${Encourage.Hover.width};
        }

        &:disabled {
          background-color: ${Encourage.SurfaceFill.Disabled};
          color: ${Encourage.Icon.Disabled};
          outline-color: ${Encourage.SurfaceStroke.Hover};
          outline-width: ${Encourage.Hover.width};
        }
      }
    }
  `;
});
