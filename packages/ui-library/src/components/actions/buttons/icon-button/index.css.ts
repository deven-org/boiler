import { typeSafeNestedCss } from "../../../../utils/nested-typesafe-css-literals";

import { componentTokens } from "../../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";
import { semanticTokens } from "../../../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";

const { IconButton } = componentTokens.Actions;
const { Global } = semanticTokens;

export const styleCustom = typeSafeNestedCss`
  .blr-icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;

    &:focus {
      outline-color: ${Global.FocusBorder.color};
      outline-style: ${Global.FocusBorder.style};
      outline-width: ${Global.FocusBorder.width};
    }

    &.xs {
      padding: ${IconButton.Container.Padding.XS};
      border-radius: ${IconButton.Container.BorderRadius.XS};
    }

    &.sm {
      padding: ${IconButton.Container.Padding.SM};
      border-radius: ${IconButton.Container.BorderRadius.SM};
    }

    &.md {
      padding: ${IconButton.Container.Padding.MD};
      border-radius: ${IconButton.Container.BorderRadius.MD};
    }

    &.lg {
      padding: ${IconButton.Container.Padding.LG};
      border-radius: ${IconButton.Container.BorderRadius.LG};
    }

    &.xl {
      padding: ${IconButton.Container.Padding.XL};
      border-radius: ${IconButton.Container.BorderRadius.XL};
    }
  }

  .loading {
    & > blr-icon {
      visibility: hidden;
    }
  }
`;
