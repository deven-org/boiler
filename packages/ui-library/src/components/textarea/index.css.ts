import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";
import { SemanticThemeIterator, ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";

export const staticStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }

  :host(.parent-width) {
    width: 100%;
  }

  .blr-textarea {
    max-width: 100%;
  }

  .block {
    width: 100%;
  }

  .inline-block {
    width: auto;
  }

  .blr-textarea-info-container {
    display: flex;
    justify-content: right;

    &.error {
      justify-content: right;
    }

    &.hint {
      justify-content: right;
    }

    &.error-message {
      justify-content: space-between;
    }

    &.hint-message {
      justify-content: space-between;
    }
  }

  .textarea-input-control {
    display: block;
    width: 100%;
    box-sizing: border-box;
    max-width: 100%;
    word-break: break-all;

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

    &:active {
      border-color: transparent;
    }

    &[readonly] {
      border-color: transparent;
    }

    &:disabled {
      border-color: transparent;
      cursor: not-allowed;
    }

    &:focus {
      border-color: transparent;
    }

    &.error-input {
      &:focus {
        border-color: transparent;
      }
    }
  }

  .textarea-input-control.inline-block {
    width: auto;
  }

  ${ComponentThemeIterator((theme, sem, css) => {
    const { InputField } = sem.TextArea;

    return css`
      .textarea-input-control.${theme} {
        &.sm {
          min-height: ${InputField.MinHeight.SM};
        }

        &.md {
          min-height: ${InputField.MinHeight.MD};
        }

        &.lg {
          min-height: ${InputField.MinHeight.LG};
        }
      }
    `;
  })}

  ${SemanticThemeIterator((theme, sem, css) => {
    const { labelslot, captionslot, inputfield } = sem.forms;

    return css`
      .blr-textarea.${theme} {
        max-width: 100%;

        &.sm {
          & > .label-wrapper {
            padding: ${labelslot.padding.sm};
            display: flex;
          }
        }

        &.md {
          & > .label-wrapper {
            padding: ${labelslot.padding.md};
            display: flex;
          }
        }

        &.lg {
          & > .label-wrapper {
            padding: ${labelslot.padding.lg};
            display: flex;
          }
        }
      }

      .blr-textarea-info-container.${theme} {
        &.sm {
          & > blr-counter {
            margin: ${captionslot.margin.sm};
          }
        }

        &.md {
          & > blr-counter {
            margin: ${captionslot.margin.md};
          }
        }

        &.lg {
          & > blr-counter {
            margin: ${captionslot.margin.lg};
          }
        }
      }

      .textarea-input-control.${theme} {
        color: ${inputfield.userinput.textcolor.default.rest};
        font-weight: ${inputfield.userinput.typography.md.fontWeight};
        font-size: ${inputfield.userinput.typography.md.fontSize};
        font-family: ${inputfield.userinput.typography.md.fontFamily}, sans-serif;
        background-color: ${inputfield.container.bgcolor.default.rest};
        border-radius: ${inputfield.container.borderradius};
        outline: ${inputfield.container.border.default.rest.width} ${inputfield.container.border.default.rest.style}
          ${inputfield.container.border.default.rest.color};

        &::placeholder {
          color: ${inputfield.placeholder.textcolor.default.rest};
        }

        &:hover {
          outline: ${inputfield.container.border.default.hover.width} ${inputfield.container.border.default.hover.style}
            ${inputfield.container.border.default.hover.color};
          color: ${inputfield.userinput.textcolor.default.hover};
          background-color: ${inputfield.container.bgcolor.default.hover};

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.default.hover};
          }
        }

        &:active {
          outline: ${inputfield.container.border.default.pressed.width} ${inputfield.container.border.default.pressed.style}
            ${inputfield.container.border.default.pressed.color};
          color: ${inputfield.userinput.textcolor.default.pressed};
          background-color: ${inputfield.container.bgcolor.default.pressed};

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.default.pressed};
          }
        }

        &.disabled {
          outline: ${inputfield.container.border.default.disabled.width} ${inputfield.container.border.default.disabled.style}
            ${inputfield.container.border.default.disabled.color};
          color: ${inputfield.userinput.textcolor.default.disabled};
          background-color: ${inputfield.container.bgcolor.default.disabled};
          cursor: not-allowed;

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.default.disabled};
          }
        }

        &[readonly] {
          outline: ${inputfield.container.border.default.hover.width} ${inputfield.container.border.default.readonly.style}
            ${inputfield.container.border.default.readonly.color};
          background-color: ${inputfield.container.bgcolor.default.readonly};

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.default.readonly};
          }
        }

        &:focus {
          outline: ${inputfield.container.border.default.focus.width} ${inputfield.container.border.default.focus.style}
            ${inputfield.container.border.default.focus.color};
          color: ${inputfield.userinput.textcolor.default.focus};
          background-color: ${inputfield.container.bgcolor.default.focus};

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.default.focus};
          }
        }

        &.error {
          outline-width: ${inputfield.container.border.error.rest.width};
          outline-style: ${inputfield.container.border.error.rest.style};
          outline-color: ${inputfield.container.border.error.rest.color};
          color: ${inputfield.userinput.textcolor.error.rest};
          background-color: ${inputfield.container.bgcolor.error.rest};

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.error.rest};
          }

          &:hover {
            outline: ${inputfield.container.border.error.hover.width} ${inputfield.container.border.error.hover.style}
              ${inputfield.container.border.error.hover.color};
            color: ${inputfield.userinput.textcolor.error.hover};
            background-color: ${inputfield.container.bgcolor.error.hover};

            &::placeholder {
              color: ${inputfield.placeholder.textcolor.error.hover};
            }
          }

          &:focus {
            outline: ${inputfield.container.border.error.focus.width} ${inputfield.container.border.error.focus.style}
              ${inputfield.container.border.error.focus.color};
            color: ${inputfield.userinput.textcolor.error.focus};
            background-color: ${inputfield.container.bgcolor.error.focus};

            &::placeholder {
              color: ${inputfield.placeholder.textcolor.error.focus};
            }
          }

          &:active {
            outline: ${inputfield.container.border.error.pressed.width} ${inputfield.container.border.error.pressed.style}
              ${inputfield.container.border.error.pressed.color};
            color: ${inputfield.userinput.textcolor.error.pressed};
            background-color: ${inputfield.container.bgcolor.error.pressed};

            &::placeholder {
              color: ${inputfield.placeholder.textcolor.error.pressed};
            }
          }
        }

        &.sm {
          font-weight: ${inputfield.userinput.typography.sm.fontWeight};
          font-size: ${inputfield.userinput.typography.sm.fontSize};
          font-family: ${inputfield.userinput.typography.sm.fontFamily}, sans-serif;
          line-height: ${inputfield.userinput.typography.sm.lineHeight};
          padding: ${inputfield.container.padding.sm};
          min-height: ${captionslot.margin.sm};
        }

        &.md {
          font-weight: ${inputfield.userinput.typography.md.fontWeight};
          font-size: ${inputfield.userinput.typography.md.fontSize};
          font-family: ${inputfield.userinput.typography.md.fontFamily}, sans-serif;
          line-height: ${inputfield.userinput.typography.md.lineHeight};
          padding: ${inputfield.container.padding.md};
          min-height: ${captionslot.margin.md};
        }

        &.lg {
          font-weight: ${inputfield.userinput.typography.lg.fontWeight};
          font-size: ${inputfield.userinput.typography.lg.fontSize};
          font-family: ${inputfield.userinput.typography.lg.fontFamily}, sans-serif;
          line-height: ${inputfield.userinput.typography.lg.lineHeight};
          padding: ${inputfield.container.padding.lg};
          min-height: ${captionslot.margin.lg};
        }
      }
    `;
  })}
`;
