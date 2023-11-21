import { typeSafeNestedCss } from "../../../../utils/nested-typesafe-css-literals";

import { componentTokens } from "../../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";
import { semanticTokens } from "../../../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";

const { TextButton } = componentTokens.Actions;
const { Global } = semanticTokens;

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
      gap: ${TextButton.Container.ItemSpacing.XS};
      padding: ${TextButton.Container.Padding.XS};
      border-radius: ${TextButton.Container.BorderRadius.XS};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.XS};
      }
    }

    &.sm {
      gap: ${TextButton.Container.ItemSpacing.SM};
      padding: ${TextButton.Container.Padding.SM};
      border-radius: ${TextButton.Container.BorderRadius.SM};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.SM};
      }
    }

    &.md {
      gap: ${TextButton.Container.ItemSpacing.MD};
      padding: ${TextButton.Container.Padding.MD};
      border-radius: ${TextButton.Container.BorderRadius.MD};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.MD};
      }
    }

    &.lg {
      gap: ${TextButton.Container.ItemSpacing.LG};
      padding: ${TextButton.Container.Padding.LG};
      border-radius: ${TextButton.Container.BorderRadius.LG};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.LG};
      }
    }

    &.xl {
      gap: ${TextButton.Container.ItemSpacing.XL};
      padding: ${TextButton.Container.Padding.XL};
      border-radius: ${TextButton.Container.BorderRadius.XL};

      & > .focus-layer {
        border-radius: ${TextButton.Container.BorderRadius.XL};
      }
    }
  }

  .loading {
    & > .icon,
    & > .label {
      visibility: hidden;
    }
  }

  .block {
    display: block;
    text-align: center;
  }

  .inline {
    display: inline-flex;
  }

  .inline-block {
    display: inline-block;
  }
`;
