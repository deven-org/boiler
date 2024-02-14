import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";
import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";

import { semanticTokens } from "../../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";

const { SM, MD, LG } = semanticTokens.Forms;

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
    &.sm {
      & > .label-wrapper {
        display: flex;
        padding: ${SM.LabelSlot.Padding};
      }
    }
    &.md {
      & > .label-wrapper {
        display: flex;
        padding: ${MD.LabelSlot.Padding};
      }
    }
    &.lg {
      & > .label-wrapper {
        display: flex;
        padding: ${LG.LabelSlot.Padding};
      }
    }
  }

  .blr-textarea-info-container {
    display: flex;
    justify-content: right;

    &.hint, &.error{
      justify-content: space-between;
    }

    &.sm {
      > blr-counter {
        margin: ${SM.CaptionSlot.Margin};
      }
    }

    &.md {
      > blr-counter {
        margin: ${MD.CaptionSlot.Margin};
      }
    }

    &.lg {
      > blr-counter {
        margin: ${LG.CaptionSlot.Margin};
      }
    }
  }
`;

export const { tokenizedLight: textAreaLight, tokenizedDark: textAreaDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { TextArea } = componentTokens.Forms;
  const { SurfaceFill } = semanticTokens.Forms;
  return typeSafeNestedCss`
    .textarea-input-control {
      resize: none;
      display: block;
      max-width: 100%;
      word-break: break-all;
      width: 100%;
      background-color: ${SurfaceFill.Default.Rest};

      &.both {
        resize: both;
      }
  
      &.vertical {
        resize: vertical;
      }
  
      &.horizontal {
        resize: horizontal;
      }
  
      &.none {
        resize: none;
      }

      &.sm {
        min-height: ${TextArea.InputField.MinHeight.SM};
      }

      &.md {
        min-height: ${TextArea.InputField.MinHeight.MD};
      }

      &.lg {
        min-height: ${TextArea.InputField.MinHeight.LG};
      }
    }
  `;
});
