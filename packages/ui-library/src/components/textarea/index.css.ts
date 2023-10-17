import { renderThemedCssStrings } from "../../foundation/_tokens-generated/index.pseudo.generated";
import { css } from "nested-css-to-flat/lit-css";

export const { tokenizedLight: textareaLight, tokenizedDark: textareaDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { SM, MD, LG } = semanticTokens.Forms;

  return css`
    :host {
      display: inline-flex;
      flex-direction: column;
      max-width: 100%;
    }

    :host(.parent-width) {
      width: 100%;
    }

    .textarea-input-control {
      resize: none;
      display: block;
      max-width: 100%;
      word-break: break-all;
      width: 100%;
    }

    .textarea-input-control.resizeable {
      resize: both;
    }

    .flex-container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;

      &.sm {
        margin: ${SM.CaptionSlot.Margin};
      }

      &.md {
        margin: ${MD.CaptionSlot.Margin};
      }

      &.lg {
        margin: ${LG.CaptionSlot.Margin};
      }
    }

    .text-area-error-wrapper,
    .text-area-hint-wrapper {
      content: " ";
    }
  `;
});
