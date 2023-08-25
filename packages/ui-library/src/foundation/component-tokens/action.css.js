import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: textButtonLight, tokenizedDark: textButtonDark } = renderThemedCssStrings(
  (componentTokens) => {
    const { TextButton } = componentTokens.Action;

    return css`
      .blr-text-button.xs,
      .blr-text-button-group.xs {
        padding: ${TextButton.XS.Padding};
      }

      .blr-text-button.sm,
      .blr-text-button-group.sm {
        padding: ${TextButton.SM.Padding};
      }

      .blr-text-button.md,
      .blr-text-button-group.md {
        padding: ${TextButton.MD.Padding};
      }

      .blr-text-button.lg,
      .blr-text-button-group.lg {
        padding: ${TextButton.LG.Padding};
      }

      .blr-text-button.xl,
      .blr-text-button-group.xl {
        padding: ${TextButton.XL.Padding};
      }
    `;
  }
);

export const { tokenizedLight: iconButtonLight, tokenizedDark: iconButtonDark } = renderThemedCssStrings(
  (componentTokens) => {
    const { IconButton } = componentTokens.Action;

    return css`
      .blr-icon-button.xs {
        padding: ${IconButton.XS.Padding};
      }

      .blr-icon-button.sm {
        padding: ${IconButton.SM.Padding};
      }

      .blr-icon-button.md {
        padding: ${IconButton.MD.Padding};
      }

      .blr-icon-button.lg {
        padding: ${IconButton.LG.Padding};
      }

      .blr-icon-button.xl {
        padding: ${IconButton.XL.Padding};
      }
    `;
  }
);

export const { tokenizedLight: stepperButtonLight, tokenizedDark: stepperButtonDark } = renderThemedCssStrings(
  (componentTokens) => {
    const { StepperButton } = componentTokens.Action;

    // this line broke the stepper button
    // color: ${StepperButton.Icon.Rest};
    return css`
      .blr-stepper-button {
        all: initial;
        border-color: ${StepperButton.Border.Rest.color};
        border-width: ${StepperButton.Border.Rest.width};
        line-height: 0 !important;
        text-align: center;
      }
    `;
    /*
      .blr-stepper-button.sm {
        width: ${StepperButton.SM.Width};
      }

      .blr-stepper-button.md {
        width: ${StepperButton.MD.Width};
      }

      .blr-stepper-button.lg {
        width: ${StepperButton.LG.Width};
      }
      */
  }
);

export const { tokenizedLight: stepperComboLight, tokenizedDark: stepperComboDark } = renderThemedCssStrings(
  (componentTokens) => {
    const { StepperCombo } = componentTokens.Action;

    return css`
      .blr-stepper-combo.vertical {
        height: 100%;
      }

      .blr-stepper-combo.horizontal.sm {
        padding: ${StepperCombo.SM.Vertical.DividerWrapper.Padding};
        _width: ${StepperCombo.SM.Horizontal.Width};
      }

      .blr-stepper-combo.horizontal-s.sm {
        padding: ${StepperCombo.SM.Vertical.DividerWrapper.Padding};
        _width: ${StepperCombo.SM.Horizontal.Width};
      }

      .blr-stepper-combo.vertical.sm {
        padding: ${StepperCombo.SM.Vertical.DividerWrapper.Padding};
        _width: ${StepperCombo.SM.Vertical.Width};
      }

      .blr-stepper-combo.horizontal.md {
        padding: ${StepperCombo.MD.Vertical.DividerWrapper.Padding};
        _width: ${StepperCombo.MD.Horizontal.Width};
      }

      .blr-stepper-combo.horizontal-s.md {
        padding: ${StepperCombo.MD.Vertical.DividerWrapper.Padding};
        _width: ${StepperCombo.MD.Horizontal.Width};
      }

      .blr-stepper-combo.vertical.md {
        padding: ${StepperCombo.MD.Horizontal.DividerWrapper.Padding};
        _width: ${StepperCombo.MD.Vertical.Width};
      }

      .blr-stepper-combo.horizontal.lg {
        padding: ${StepperCombo.LG.Vertical.DividerWrapper.Padding};
        _width: ${StepperCombo.LG.Horizontal.Width};
      }

      .blr-stepper-combo.horizontal-s.lg {
        padding: ${StepperCombo.LG.Horizontal.DividerWrapper.Padding};
        _width: ${StepperCombo.LG.Horizontal.Width};
      }

      .blr-stepper-combo.vertical.lg {
        padding: ${StepperCombo.LG.Horizontal.DividerWrapper.Padding};
        _width: ${StepperCombo.LG.Vertical.Width};
      }
    `;
  }
);
