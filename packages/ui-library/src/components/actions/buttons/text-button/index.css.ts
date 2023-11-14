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
        border: ${Action.CTA.Disabled};
        outline-color: ${Action.CTA.SurfaceStroke.Disabled};
        border-radius: ${Action.BorderRadius};
      }

      &.primary {
        background-color: ${Action.Primary.SurfaceFill.Disabled};
        border: ${Action.Primary.Disabled};
        outline-color: ${Action.Primary.SurfaceStroke.Disabled};
        border-radius: ${Action.BorderRadius};
      }

      &.secondary {
        background-color: ${Action.Secondary.SurfaceFill.Disabled};
        outline-color: ${Action.Secondary.SurfaceStroke.Disabled};
      }

      &.silent {
        background-color: ${Action.Silent.SurfaceFill.Disabled};
        border: ${Action.Silent.Disabled};
        outline-color: ${Action.Silent.SurfaceStroke.Disabled};
        border-radius: ${Action.BorderRadius};
      }

      &.encourage {
        background-color: ${Action.Encourage.SurfaceFill.Disabled};
        border: ${Action.Encourage.Disabled};
        outline-color: ${Action.Encourage.SurfaceStroke.Disabled};
        border-radius: ${Action.BorderRadius};
      }

      &.destructive {
        background-color: ${Action.Destructive.SurfaceFill.Disabled};
        border: ${Action.Destructive.Disabled};
        outline-color: ${Action.Destructive.SurfaceStroke.Disabled};
        border-radius: ${Action.BorderRadius};
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

  .disabled-icon-cta {
    color: ${Action.CTA.Icon.Disabled};
  }

  .disabled-icon-primary {
    color: ${Action.Primary.Icon.Disabled};
  }

  .disabled-icon-secondary {
    color: ${Action.Secondary.Icon.Disabled};
  }

  .disabled-icon-destructive {
    color: ${Action.Destructive.Icon.Disabled};
  }

  .disabled-icon-silent {
    color: ${Action.Silent.Icon.Disabled};
  }

  .disabled-icon-encourage {
    color: ${Action.Encourage.Icon.Disabled};
  }

  .disabled-label-cta {
    color: ${Action.CTA.Label.Disabled};
  }

  .disabled-label-primary {
    color: ${Action.Primary.Label.Disabled};
  }

  .disabled-label-secondary {
    color: ${Action.Secondary.Label.Disabled};
  }

  .disabled-label-destructive {
    color: ${Action.Destructive.Label.Disabled};
  }

  .disabled-label-silent {
    color: ${Action.Silent.Label.Disabled};
  }

  .disabled-label-encourage {
    color: ${Action.Encourage.Label.Disabled};
  }
`;
