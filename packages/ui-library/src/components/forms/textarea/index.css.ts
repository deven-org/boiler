import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";

export const styleCustom = typeSafeNestedCss`
  :host {
    display: inline-flex;
    flex-direction: column;
    max-width: 100%;
  }

  :host(.parent-width) {
    width: 100%;
  }

  .blr-textarea {
    max-width: fit-content;
  }

  .blr-textarea-info-container {
    display: flex;
    justify-content: space-between;
  }
`;

export const { tokenizedLight: textAreaLight, tokenizedDark: textAreaDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { SM, MD, LG } = semanticTokens.Forms;
  const { TextArea } = componentTokens.Forms;

  return typeSafeNestedCss`
    .textarea-input-control {
      resize: none;
      display: block;
      max-width: 100%;
      word-break: break-all;
      width: 100%;

      .both {
        resize: both;
      }
  
      .vertical {
        resize: vertical;
      }
  
      .horizontal {
        resize: horizontal;
      }
  
      .none {
        resize: none;
      }

      .flex-container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
  
        &.sm {
          margin: ${SM.CaptionSlot.Margin};
          min-height: ${TextArea.SM.MinHeight};
        }
  
        &.md {
          margin: ${MD.CaptionSlot.Margin};
          min-height: ${TextArea.MD.MinHeight};
        }
  
        &.lg {
          margin: ${LG.CaptionSlot.Margin};
          min-height: ${TextArea.LG.MinHeight};
        }
      }
    }
  `;
});
