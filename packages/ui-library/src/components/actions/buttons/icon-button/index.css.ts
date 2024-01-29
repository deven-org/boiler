import { typeSafeNestedCss } from "../../../../utils/nested-typesafe-css-literals";

import { componentTokens } from "../../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";
import { semanticTokens } from "../../../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";

const { IconButton } = componentTokens.Actions;
const { Global, Actions } = semanticTokens;

export const styleCustom = typeSafeNestedCss`
  .focus-layer {
    position: absolute;
    inset: 0;
    outline-color: ${Global.FocusBorder.color};
    outline-style: ${Global.FocusBorder.style};
    outline-width: ${Global.FocusBorder.width};
  }

  .blr-icon-button {
    all: inital;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    cursor: pointer;
    position: relative;

    &.xs {
      padding: ${IconButton.Container.Padding.XS};
      border-radius: ${IconButton.Container.BorderRadius.XS};

      & > .focus-layer {
        border-radius: ${IconButton.Container.BorderRadius.XS};
      }
    }

    &.sm {
      padding: ${IconButton.Container.Padding.SM};
      border-radius: ${IconButton.Container.BorderRadius.SM};

      & > .focus-layer {
        border-radius: ${IconButton.Container.BorderRadius.SM};
      }
    }

    &.md {
      padding: ${IconButton.Container.Padding.MD};
      border-radius: ${IconButton.Container.BorderRadius.MD};

      & > .focus-layer {
        border-radius: ${IconButton.Container.BorderRadius.MD};
      }
    }

    &.lg {
      padding: ${IconButton.Container.Padding.LG};
      border-radius: ${IconButton.Container.BorderRadius.LG};

      & > .focus-layer {
        border-radius: ${IconButton.Container.BorderRadius.LG};
      }
    }

    &.xl {
      padding: ${IconButton.Container.Padding.XL};
      border-radius: ${IconButton.Container.BorderRadius.XL};

      & > .focus-layer {
        border-radius: ${IconButton.Container.BorderRadius.XL};
      }
    }
  }
  
  .loading {

   &.blr-icon-button:hover, &.blr-icon-button:focus{
      cursor: auto;
      text-decoration: none;
      &.cta{
        background-color: ${Actions.CTA.SurfaceFill.Loading}
      }
      &.primary{
        background-color: ${Actions.Primary.SurfaceFill.Loading}
      }
      &.secondary{
        background-color: ${Actions.Secondary.SurfaceFill.Loading}
      }
      &.silent{
        background-color: ${Actions.Silent.SurfaceFill.Loading}
      }
      &.destructive{
        background-color: ${Actions.Destructive.SurfaceFill.Loading}
      }
      &.encourage{
        background-color: ${Actions.Encourage.SurfaceFill.Loading}
      }
    }

    & > .icon {
      visibility: hidden;
    }
  }
`;
