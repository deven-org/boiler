import { typeSafeNestedCss } from "../../../../utils/nested-typesafe-css-literals";

import { componentTokens } from "../../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";
import { semanticTokens } from "../../../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";

const { TextButton } = componentTokens.Action;
const { Action, Global } = semanticTokens;

export const styleCustom = typeSafeNestedCss`
  .focus-layer {
    position: absolute;
    inset: 0;
    outline-color: ${Global.FocusBorder.color};
    outline-style: ${Global.FocusBorder.style};
    outline-width: ${Global.FocusBorder.width};
  }

  .blr-text-button {
    align-items: center;
    justify-content: center;
    display: inline-flex;
    cursor: pointer;
    outline-offset: -2px;
    position: relative;

    &.xs {
      gap: ${TextButton.XS.ItemSpacing};
      padding: ${TextButton.XS.Padding};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.XS};
      }
    }

    &.sm {
      gap: ${TextButton.SM.ItemSpacing};
      padding: ${TextButton.SM.Padding};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.SM};
      }
    }

    &.md {
      gap: ${TextButton.MD.ItemSpacing};
      padding: ${TextButton.MD.Padding};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.MD};
      }
    }

    &.lg {
      gap: ${TextButton.LG.ItemSpacing};
      padding: ${TextButton.LG.Padding};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.LG};
      }
    }

    &.xl {
      gap: ${TextButton.XL.ItemSpacing};
      padding: ${TextButton.XL.Padding};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.XL};
      }
    }

    &.disabled {
      pointer-events: none;
      cursor: not-allowed;

      &.cta {
        background-color: ${Action.CTA.SurfaceFill.Disabled};
        outline-color: ${Action.CTA.SurfaceStroke.Disabled};
        color: ${Action.CTA.Icon.Disabled};
      }

      &.primary {
        background-color: ${Action.Primary.SurfaceFill.Disabled};
        outline-color: ${Action.Primary.SurfaceStroke.Disabled};
        color: ${Action.Primary.Icon.Disabled};
      }

      &.secondary {
        background-color: ${Action.Secondary.SurfaceFill.Disabled};
        outline-color: ${Action.Secondary.SurfaceStroke.Disabled};
        color: ${Action.Secondary.Icon.Disabled};
      }

      &.silent {
        background-color: ${Action.Silent.SurfaceFill.Disabled};
        outline-color: ${Action.Silent.SurfaceStroke.Disabled};
        color: ${Action.Silent.Icon.Disabled};

      }

      &.encourage {
        background-color: ${Action.Encourage.SurfaceFill.Disabled};
        outline-color: ${Action.Encourage.SurfaceStroke.Disabled};
        color: ${Action.Encourage.Icon.Disabled};
      }

      &.destructive {
        background-color: ${Action.Destructive.SurfaceFill.Disabled};
        outline-color: ${Action.Destructive.SurfaceStroke.Disabled};
        color: ${Action.Destructive.Icon.Disabled};
      }
    }
  }

  .loading-class-icons,
  .loading-class-label {
    color: transparent;
  }

  .loader-class {
    position: absolute;
    display: inline-flex;
  }
`;
