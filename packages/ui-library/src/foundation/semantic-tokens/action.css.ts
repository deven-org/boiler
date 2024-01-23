import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: actionLight, tokenizedDark: actionDark } = renderThemedCssStrings((_componentTokens, semanticTokens) => {
  const { CTA, Primary, Secondary, Silent, XS, SM, MD, LG, XL, Destructive, Encourage } = semanticTokens.Action;

  return typeSafeNestedCss`
    .blr-semantic-action {
      &.disabled {
        pointer-events: none;
        cursor: not-allowed;
        user-select: none;
        -webkit-user-select: none;
      }
      
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
        color: ${CTA.Label.Rest};
        > blr-icon {color: ${CTA.Icon.Rest};}

        &:hover {
          background-color: ${CTA.SurfaceFill.Hover};
          outline: ${CTA.Hover.style} ${CTA.Hover.width} ${CTA.Hover.color};
          color: ${CTA.Label.Hover};
          > blr-icon {color: ${CTA.Icon.Hover};}
        }

        &:active {
          background-color: ${CTA.SurfaceFill.Pressed};
          outline: ${CTA.Pressed.style} ${CTA.Pressed.width} ${CTA.Pressed.color};
          color: ${CTA.Label.Pressed};
          > blr-icon {color: ${CTA.Icon.Pressed};}

        }
        &.disabled {
          background-color: ${CTA.SurfaceFill.Disabled};
          outline-color: ${CTA.SurfaceStroke.Disabled};
          color: ${CTA.Label.Disabled};
          > blr-icon {color: ${CTA.Icon.Disabled};}
        }
      }


      &.primary {
        background-color: ${Primary.SurfaceFill.Rest};
        outline: ${Primary.Rest.style} ${Primary.Rest.width} ${Primary.Rest.color};
        color: ${Primary.Label.Rest};
        > blr-icon {color: ${Primary.Icon.Rest};}

        &:hover {
          background-color: ${Primary.SurfaceFill.Hover};
          outline: ${Primary.Hover.style} ${Primary.Hover.width} ${Primary.Hover.color};
          color: ${Primary.Label.Hover};
          > blr-icon {color: ${Primary.Icon.Hover};}
        }

        &:active {
          background-color: ${Primary.SurfaceFill.Pressed};
          outline: ${Primary.Pressed.style} ${Primary.Pressed.width} ${Primary.Pressed.color};
          color: ${Primary.Label.Pressed};
          > blr-icon {color: ${Primary.Icon.Pressed};}

        }
        &.disabled {
          background-color: ${Primary.SurfaceFill.Disabled};
          outline-color: ${Primary.SurfaceStroke.Disabled};
          color: ${Primary.Label.Disabled};
          > blr-icon {color: ${Primary.Icon.Disabled};}
        }
      }

      &.secondary {
        outline-offset: calc(${Secondary.Rest.width} * -1);
        background-color: ${Secondary.SurfaceFill.Rest};
        outline: ${Secondary.Rest.style} ${Secondary.Rest.width} ${Secondary.Rest.color};
        color: ${Secondary.Label.Rest};
        > blr-icon {color: ${Secondary.Icon.Rest};}

        &:hover {
          background-color: ${Secondary.SurfaceFill.Hover};
          outline: ${Secondary.Hover.style} ${Secondary.Hover.width} ${Secondary.Hover.color};
          color: ${Secondary.Label.Hover};
          > blr-icon {color: ${Secondary.Icon.Hover};}
        }

        &:active {
          background-color: ${Secondary.SurfaceFill.Pressed};
          outline: ${Secondary.Pressed.style} ${Secondary.Pressed.width} ${Secondary.Pressed.color};
          color: ${Secondary.Label.Pressed};
          > blr-icon {color: ${Secondary.Icon.Pressed};}

        }
        &.disabled {
          background-color: ${Secondary.SurfaceFill.Disabled};
          outline-color: ${Secondary.SurfaceStroke.Disabled};
          color: ${Secondary.Label.Disabled};
          > blr-icon {color: ${Secondary.Icon.Disabled};}
        }
      }

      &.silent {
        background-color: ${Silent.SurfaceFill.Rest};
        outline: ${Silent.Rest.style} ${Silent.Rest.width} ${Silent.Rest.color};
        color: ${Silent.Label.Rest};
        > blr-icon {color: ${Silent.Icon.Rest};}

        &:hover {
          background-color: ${Silent.SurfaceFill.Hover};
          outline: ${Silent.Hover.style} ${Silent.Hover.width} ${Silent.Hover.color};
          color: ${Silent.Label.Hover};
          > blr-icon {color: ${Silent.Icon.Hover};}
        }

        &:active {
          background-color: ${Silent.SurfaceFill.Pressed};
          outline: ${Silent.Pressed.style} ${Silent.Pressed.width} ${Silent.Pressed.color};
          color: ${Silent.Label.Pressed};
          > blr-icon {color: ${Silent.Icon.Pressed};}

        }
        &.disabled {
          background-color: ${Silent.SurfaceFill.Disabled};
          outline-color: ${Silent.SurfaceStroke.Disabled};
          color: ${Silent.Label.Disabled};
          > blr-icon {color: ${Silent.Icon.Disabled};}
        }
      }

      &.destructive {
        background-color: ${Destructive.SurfaceFill.Rest};
        outline: ${Destructive.Rest.style} ${Destructive.Rest.width} ${Destructive.Rest.color};
        color: ${Destructive.Label.Rest};
        > blr-icon {color: ${Destructive.Icon.Rest};}

        &:hover {
          background-color: ${Destructive.SurfaceFill.Hover};
          outline: ${Destructive.Hover.style} ${Destructive.Hover.width} ${Destructive.Hover.color};
          color: ${Destructive.Label.Hover};
          > blr-icon {color: ${Destructive.Icon.Hover};}
        }

        &:active {
          background-color: ${Destructive.SurfaceFill.Pressed};
          outline: ${Destructive.Pressed.style} ${Destructive.Pressed.width} ${Destructive.Pressed.color};
          color: ${Destructive.Label.Pressed};
          > blr-icon {color: ${Destructive.Icon.Pressed};}

        }
        &.disabled {
          background-color: ${Destructive.SurfaceFill.Disabled};
          outline-color: ${Destructive.SurfaceStroke.Disabled};
          color: ${Destructive.Label.Disabled};
          > blr-icon {color: ${Destructive.Icon.Disabled};}
        }
      }

      &.encourage {
        background-color: ${Encourage.SurfaceFill.Rest};
        outline: ${Encourage.Rest.style} ${Encourage.Rest.width} ${Encourage.Rest.color};
        color: ${Encourage.Label.Rest};
        > blr-icon {color: ${Encourage.Icon.Rest};}

        &:hover {
          background-color: ${Encourage.SurfaceFill.Hover};
          outline: ${Encourage.Hover.style} ${Encourage.Hover.width} ${Encourage.Hover.color};
          color: ${Encourage.Label.Hover};
          > blr-icon {color: ${Encourage.Icon.Hover};}
        }

        &:active {
          background-color: ${Encourage.SurfaceFill.Pressed};
          outline: ${Encourage.Pressed.style} ${Encourage.Pressed.width} ${Encourage.Pressed.color};
          color: ${Encourage.Label.Pressed};
          > blr-icon {color: ${Encourage.Icon.Pressed};}

        }
        &.disabled {
          background-color: ${Encourage.SurfaceFill.Disabled};
          outline-color: ${Encourage.SurfaceStroke.Disabled};
          color: ${Encourage.Label.Disabled};
          > blr-icon {color: ${Encourage.Icon.Disabled};}
        }
      }
    }
  `;
});
