import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../../foundation/_tokens-generated/index.pseudo.generated";

export const styleCustom = css`
  .blr-textarea {
    max-width: fit-content;
  }

  .blr-textarea-info-container {
    display: flex;
    justify-content: space-between;
  }
`;

export const { tokenizedLight: textAreaLight, tokenizedDark: textAreaDark } = renderThemedCssStrings((componentTokens) => {
  const { TextArea } = componentTokens.Forms;

  return css`
    .textarea-input-control {
      resize: none;
      display: block;
      max-width: 100%;
      word-break: break-all;
      width: 100%;

      &.resizeable {
        resize: both;
      }

      &.sm {
        min-height: ${TextArea.SM.MinHeight};
      }

      &.md {
        min-height: ${TextArea.MD.MinHeight};
      }

      &.lg {
        min-height: ${TextArea.LG.MinHeight};
      }
    }
  `;
});
