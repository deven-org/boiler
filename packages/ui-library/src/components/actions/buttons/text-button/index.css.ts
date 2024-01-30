import { typeSafeNestedCss } from "../../../../utils/nested-typesafe-css-literals";

import { componentTokens } from "../../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";
import { semanticTokens } from "../../../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";

const { TextButton } = componentTokens.Actions;
const { Global, Actions } = semanticTokens;

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
    display: flex;
    cursor: pointer;
    position: relative;
    
    &.xs {
      padding: ${TextButton.Container.Padding.XS};
      border-radius: ${TextButton.Container.BorderRadius.XS};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.XS};
      }
    }

    &.sm {
      padding: ${TextButton.Container.Padding.SM};
      border-radius: ${TextButton.Container.BorderRadius.SM};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.SM};
      }
    }

    &.md {
      padding: ${TextButton.Container.Padding.MD};
      border-radius: ${TextButton.Container.BorderRadius.MD};
      

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.MD};
      }
    }

    &.lg {
      padding: ${TextButton.Container.Padding.LG};
      border-radius: ${TextButton.Container.BorderRadius.LG};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.LG};
      }
    }

    &.xl {
      padding: ${TextButton.Container.Padding.XL};
      border-radius: ${TextButton.Container.BorderRadius.XL};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.XL};
      }
    }
  }

  .loading {
    & > .icon,
    & > .label,
    & > .flex-container {
      visibility: hidden;
    }

    &.blr-text-button:hover, &.blr-text-button:focus {
      cursor: auto;
    
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
  }

  .block {
    display: block;
  }

  .inline-block {
    display: inline-block;
  }

  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;

    &.xs {
      gap: ${TextButton.Container.ItemSpacing.XS}
    }

    &.sm {
      gap: ${TextButton.Container.ItemSpacing.SM}
    }

    &.md {
      gap: ${TextButton.Container.ItemSpacing.MD}
    }

    &.lg {
      gap: ${TextButton.Container.ItemSpacing.LG}
    }

    &.xl {
      gap: ${TextButton.Container.ItemSpacing.XL}
    }
  }

  .trailing-icon-class,
  .leading-icon-class {
    display: flex;
    align-items: center;
  }
`;
