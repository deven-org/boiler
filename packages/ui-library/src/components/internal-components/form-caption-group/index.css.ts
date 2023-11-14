import { css } from "nested-css-to-flat/lit-css";
import { semanticTokens } from "../../../foundation/_tokens-generated/__semantic-tokens.Light.generated.mjs";

const { SM, MD, LG } = semanticTokens.Forms;

export const formCaptionGroupStyle = css`
.blr-form-caption-group {
  &.sm {
    margin: ${SM.CaptionSlot.Margin};
  } 
  &.md {
    margin: ${MD.CaptionSlot.Margin};
  } 
  &.lg {
    margin: ${LG.CaptionSlot.Margin};
  }
}`;
