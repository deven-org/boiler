import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: iconLight, tokenizedDark: iconDark } = renderThemedCssStrings((componentTokens) => {
  const { UI } = componentTokens;

  return css`
    .blr-icon.xxs {
      width: ${UI.Icon.XXS};
      height: ${UI.Icon.XXS};
    }

    .blr-icon.xs {
      width: ${UI.Icon.XS};
      height: ${UI.Icon.XS};
    }

    .blr-icon.sm {
      width: ${UI.Icon.SM};
      height: ${UI.Icon.SM};
    }

    .blr-icon.md {
      width: ${UI.Icon.MD};
      height: ${UI.Icon.MD};
    }

    .blr-icon.lg {
      width: ${UI.Icon.LG};
      height: ${UI.Icon.LG};
    }

    .blr-icon.xl {
      width: ${UI.Icon.XL};
      height: ${UI.Icon.XL};
    }
  `;
});

export const { tokenizedLight: dividerLight, tokenizedDark: dividerDark } = renderThemedCssStrings(
  (componentTokens) => {
    const { UI } = componentTokens;
    const { StepperCombo } = componentTokens.Action;

    return css`
      .blr-divider.vertical {
        stroke: ${UI.Divider.Stroke};
        border-right: ${UI.Divider.Border.width} solid ${UI.Divider.Border.color};
        height: 100%;

        &.margin {
          margin: ${StepperCombo.SM.Vertical.DividerWrapper.Padding};
        }
      }

      .blr-divider.horizontal {
        stroke: ${UI.Divider.Stroke};
        border-top: ${UI.Divider.Border.width} solid ${UI.Divider.Border.color};

        &.margin {
          margin: ${StepperCombo.SM.Vertical.DividerWrapper.Padding};
        }
      }
    `;
  }
);

export const { tokenizedLight: blanketLight, tokenizedDark: blanketDark } = renderThemedCssStrings(
  (componentTokens) => {
    const { UI } = componentTokens;

    return css`
      .blr-blanket {
        background-color: ${UI.Blanket.Surface};
        height: 100%;
      }
    `;
  }
);
