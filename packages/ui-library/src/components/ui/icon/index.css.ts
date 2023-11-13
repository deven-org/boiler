import { css } from "nested-css-to-flat/lit-css";
import { componentTokens } from "../../../foundation/_tokens-generated/__component-tokens.Light.generated.mjs";

const { UI } = componentTokens;

export const styleCustom = css`
  :host {
    display: inline-flex;
    flex-shrink: 0;

    .blr-icon.xxs {
      width: ${UI.Icon.Container.Size.XXS};
      height: ${UI.Icon.Container.Size.XXS};
    }

    .blr-icon.xs {
      width: ${UI.Icon.Container.Size.XS};
      height: ${UI.Icon.Container.Size.XS};
    }

    .blr-icon.sm {
      width: ${UI.Icon.Container.Size.SM};
      height: ${UI.Icon.Container.Size.SM};
    }

    .blr-icon.md {
      width: ${UI.Icon.Container.Size.MD};
      height: ${UI.Icon.Container.Size.MD};
    }

    .blr-icon.lg {
      width: ${UI.Icon.Container.Size.LG};
      height: ${UI.Icon.Container.Size.LG};
    }

    .blr-icon.xl {
      width: ${UI.Icon.Container.Size.XL};
      height: ${UI.Icon.Container.Size.XL};
    }
  }
`;
