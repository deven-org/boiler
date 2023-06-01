import { componentTokens } from "../_tokens-generated/index.generated";
import { css } from "nested-css-to-flat/lit-css";

const { Checkbox } = componentTokens.Forms;

export const checkboxStyles = css`
  .blr-label-checkbox {
    > input {
      height: ${Checkbox.Control.Background.Unselected.Rest};
      width: ${Checkbox.Control.Background.Unselected.Rest};
      border-radius: ${Checkbox.ControlBorderRadius};
    }
  }
`;
