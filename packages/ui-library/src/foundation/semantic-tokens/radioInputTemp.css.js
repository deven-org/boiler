import { css, unsafeCSS } from "lit";
import { semanticTokens } from "../_tokens-generated/index.generated";

const { Caption, SM, MD, LG, Input, InputBorderRadius } = semanticTokens.Forms;

const forms = {
  textinput: {
    sm: {
      width: "50px",
      height: "100px",
    },
    md: {
      width: "100px",
      height: "200px",
    },
    lg: {
      width: "200px",
      height: "300px",
    },
  },
};

export const radioInput = css`
  .blr-input {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    border-width: ${Input.Default.Rest.width};
    border-style: ${Input.Default.Rest.style};
    border-color: ${Input.Default.Rest.color};
    border-radius: ${InputBorderRadius};
  }

  .blr-input.sm {
    min-width: ${unsafeCSS(forms.textinput.sm.width)};
    font-family: ${SM.UserInput.fontFamily}, sans-serif;
    font-weight: ${SM.UserInput.fontWeight};
    font-size: ${SM.UserInput.fontSize};
    padding: ${SM.InputField.Padding};
  }

  .blr-input.md {
    min-width: ${unsafeCSS(forms.textinput.md.width)};
    font-family: ${MD.UserInput.fontFamily}, sans-serif;
    font-weight: ${MD.UserInput.fontWeight};
    font-size: ${MD.UserInput.fontSize};
    padding: ${MD.InputField.Padding};
  }

  .blr-input.lg {
    min-width: ${unsafeCSS(forms.textinput.lg.width)};
    font-family: ${LG.UserInput.fontFamily}, sans-serif;
    font-weight: ${LG.UserInput.fontWeight};
    font-size: ${LG.UserInput.fontSize};
    padding: ${LG.InputField.Padding};
  }

  .blr-input:hover {
    border-width: ${Input.Default.Hover.width};
    border-style: ${Input.Default.Hover.style};
    border-color: ${Input.Default.Hover.color};
  }

  .blr-input[readonly] {
    border-width: ${Input.Default.ReadOnly.width};
    border-style: ${Input.Default.ReadOnly.style};
    border-color: ${Input.Default.ReadOnly.color};
  }

  .blr-input:disabled {
    border-width: ${Input.Default.Disabled.width};
    border-style: ${Input.Default.Disabled.style};
    border-color: ${Input.Default.Disabled.color};
  }

  .blr-input:focus {
    border-width: ${Input.Default.Focus.width};
    border-style: ${Input.Default.Focus.style};
    border-color: ${Input.Default.Focus.color};
  }

  .blr-input.error-input {
    border-width: ${Input.Error.Rest.width};
    border-style: ${Input.Error.Rest.style};
    border-color: ${Input.Error.Rest.color};
  }

  .blr-input.error-input:hover {
    border-width: ${Input.Error.Hover.width};
    border-style: ${Input.Error.Hover.style};
    border-color: ${Input.Error.Hover.color};
  }

  .blr-input.error-input:focus {
    border-width: ${Input.Error.Focus.width};
    border-style: ${Input.Error.Focus.style};
    border-color: ${Input.Error.Focus.color};
  }

  .blr-form-hint {
    display: flex;
    flex-direction: row;
  }

  .error {
    color: ${Caption.Error};
  }

  .hint {
    color: ${Caption.Hint};
  }
`;
