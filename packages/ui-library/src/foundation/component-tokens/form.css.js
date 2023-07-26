import { css } from "lit";
import { componentTokens } from "../_tokens-generated/index.generated";

const { Forms } = componentTokens;

export const textarea = css`
  .blr-textarea {
    min-height: ${Forms.TextArea.MD.MinHeight};
  }

  &.sm {
    min-height: ${Forms.TextArea.SM.MinHeight};
  }

  &.lg {
    min-height: ${Forms.TextArea.LG.MinHeight};
  }
`;
