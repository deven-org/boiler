import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../../foundation/_tokens-generated/index.pseudo.generated";
import type { semanticTokens } from "../../foundation/_tokens-generated/semanticTokensType.generated";

export const styleCustom = typeSafeNestedCss`
  .blr-input-field-text {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .blr-input-field-text:disabled {
    pointer-events: none;
  }
`;

function getInputIconStyles(options: { semanticTokens: semanticTokens }) {
  const iconClassName = "icon-input";
  const { inputfield } = options.semanticTokens.sem.forms;

  return typeSafeNestedCss`
    :host {
      .${iconClassName} {
        cursor: pointer;
        position: relative;
        color: ${inputfield.icon.iconcolor.default.rest};

        &.no-pointer-events {
          pointer-events: none;
          cursor: default;
        }
  
        &.sm {
          height: ${inputfield.icon.iconsize.sm};
          width: ${inputfield.icon.iconsize.sm};
        }
        &.md {
          height: ${inputfield.icon.iconsize.md};
          width: ${inputfield.icon.iconsize.md};
        }
        &.lg {
          height: ${inputfield.icon.iconsize.lg};
          width: ${inputfield.icon.iconsize.lg};
        }
      }

      .blr-input-wrapper {
        &:hover .${iconClassName} {
          color: ${inputfield.icon.iconcolor.default.hover};
        }

        &:focus-within .${iconClassName} {
          color: ${inputfield.icon.iconcolor.default.focus};
        }

        &:active .${iconClassName} {
          color: ${inputfield.icon.iconcolor.default.pressed};
        }

        &:has(input[readonly]):not(.error-input) .${iconClassName} {
          color: ${inputfield.icon.iconcolor.default.readonly};
        }

        &.disabled .${iconClassName}{
          color: ${inputfield.icon.iconcolor.default.disabled};
        }
    
        &.error-input {
          .${iconClassName} {
            color: ${inputfield.icon.iconcolor.error.rest};
          }
  
          &:hover .${iconClassName} {
            color: ${inputfield.icon.iconcolor.error.hover};
          }
    
          &:focus-within .${iconClassName} {
            color: ${inputfield.icon.iconcolor.error.focus};
          }
    
          &:active .${iconClassName} {
            color: ${inputfield.icon.iconcolor.error.pressed};
          }
        }
      }
    }
  `;
}

export const { tokenizedLight: inputFieldTextLight, tokenizedDark: inputFieldTextDark } = renderThemedCssStrings(
  (_componentTokens, semanticTokens) => {
    const { inputfield, inputslot, labelslot } = semanticTokens.sem.forms;

    return typeSafeNestedCss`
      ${getInputIconStyles({ semanticTokens }).cssText}

      .blr-input-field-text {

        &.sm {

          & > .label-wrapper {
            display: flex;
            padding: ${labelslot.padding.sm};
          }
        }

        &.md {

          & > .label-wrapper {
            display: flex;
            padding: ${labelslot.padding.md};
          }
        }

        &.lg {
          
          & > .label-wrapper {
            display: flex;
            padding: ${labelslot.padding.lg};
          }
        }
      }

      .blr-input-inner-container {
        flex-grow: 1;
        flex-shrink: 1;

        .blr-form-input {
          all: initial;
          border-radius: ${inputfield.container.borderradius};
          box-sizing: border-box;
          width: 100%;
          border: none;
          outline: none;
          color: ${inputfield.userinput.textcolor.default.rest};
          font-weight: ${inputfield.userinput.typography.md.fontWeight};
          font-size: ${inputfield.userinput.typography.md.fontSize};
          font-family: ${inputfield.userinput.typography.md.fontFamily}, sans-serif;

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.default.rest};
          }

          &:hover {
            &::placeholder {
              color: ${inputfield.placeholder.textcolor.default.hover};
            }
          }

          &:active {
            &::placeholder {
              color: ${inputfield.placeholder.textcolor.default.pressed};
            }
          }

          &[readonly] {
            &::placeholder {
              color: ${inputfield.placeholder.textcolor.default.readonly};
            }
          }

          &.disabled {
            &::placeholder {
              color: ${inputfield.placeholder.textcolor.default.disabled};
            }
          }

          &.focus {
            border: none;
            outline: none;
            &::placeholder {
              color: ${inputfield.placeholder.textcolor.default.focus};
            }
          }

          &.error-input {
            border: none;
            outline: none;

            &.focus {
              border-width: ${inputfield.container.border.error.rest.width};
              border-style: ${inputfield.container.border.error.rest.style};
              border-color: transparent;
              outline: ${inputfield.container.border.error.focus.width} ${inputfield.container.border.error.focus.style}
                ${inputfield.container.border.error.focus.color};
              color: ${inputfield.userinput.textcolor.error.focus};
              background-color: ${inputfield.container.bgcolor.error.focus};
            }

            &:hover {
              border: none;
              outline: none;
              &::placeholder {
                color: ${inputfield.placeholder.textcolor.error.hover};
              }
            }

            &:active {
              border: none;
              outline: none;
              &::placeholder {
                color: ${inputfield.placeholder.textcolor.error.pressed};
              }
            }

            &.focus {
              border: none;
              outline: none;
              &::placeholder {
                color: ${inputfield.placeholder.textcolor.error.focus};
              }
            }
          }

          &.sm {
            font-weight: ${inputfield.userinput.typography.sm.fontWeight};
            font-size: ${inputfield.userinput.typography.sm.fontSize};
            font-family: ${inputfield.userinput.typography.sm.fontFamily}, sans-serif;
            line-height: ${inputfield.userinput.typography.sm.lineHeight};
          }

          &.md {
            font-weight: ${inputfield.userinput.typography.md.fontWeight};
            font-size: ${inputfield.userinput.typography.md.fontSize};
            font-family: ${inputfield.userinput.typography.md.fontFamily}, sans-serif;
            line-height: ${inputfield.userinput.typography.md.lineHeight};
          }

          &.lg {
            font-weight: ${inputfield.userinput.typography.lg.fontWeight};
            font-size: ${inputfield.userinput.typography.lg.fontSize};
            font-family: ${inputfield.userinput.typography.lg.fontFamily}, sans-serif;
            line-height: ${inputfield.userinput.typography.lg.lineHeight};
          }
        }
      }

      .blr-input-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: ${inputfield.container.border.default.rest.width} ${inputfield.container.border.default.rest.style}
          ${inputfield.container.border.default.rest.color};
        border-radius: ${inputfield.container.borderradius};
        box-sizing: border-box;

        &.sm {
          padding: ${inputfield.container.padding.sm};
          margin: ${inputslot.margin.sm};
        }

        &.md {
          padding: ${inputfield.container.padding.md};
          margin: ${inputslot.margin.md};
        }

        &.lg {
          padding: ${inputfield.container.padding.lg};
          margin: ${inputslot.margin.lg};
        }

        &:hover {
          border-width: ${inputfield.container.border.default.hover.width};
          border-style: ${inputfield.container.border.default.hover.style};
          border-color: ${inputfield.container.border.default.hover.color};
          color: ${inputfield.userinput.textcolor.default.hover};
          background-color: ${inputfield.container.bgcolor.default.hover};
        }

        &.focus {
          border-width: ${inputfield.container.border.default.rest.width};
          border-style: ${inputfield.container.border.default.rest.style};
          border-color: transparent;
          outline: ${inputfield.container.border.default.focus.width} ${inputfield.container.border.default.focus.style}
            ${inputfield.container.border.default.focus.color};
          background-color: ${inputfield.container.bgcolor.default.focus};
        }

        &.disabled {
          border-width: ${inputfield.container.border.default.readonly.width};
          border-style: ${inputfield.container.border.default.disabled.style};
          border-color: transparent;
          outline: ${inputfield.container.border.default.disabled.width} ${inputfield.container.border.default.disabled.style}
            ${inputfield.container.border.default.disabled.color};
          color: ${inputfield.userinput.textcolor.default.disabled};
          background-color: ${inputfield.container.bgcolor.default.disabled};
          cursor: not-allowed;

          .blr-form-input {
            border: none;
            outline: none;
            background: transparent;
            cursor: not-allowed;
          }
        }

        &[readonly] {
          border-width: ${inputfield.container.border.default.readonly.width};
          border-style: ${inputfield.container.border.default.readonly.style};
          border-color: transparent;
          outline: ${inputfield.container.border.default.hover.width} ${inputfield.container.border.default.readonly.style}
            ${inputfield.container.border.default.readonly.color};
          background-color: ${inputfield.container.bgcolor.default.readonly};
        }

        &:active {
          border-width: ${inputfield.container.border.default.pressed.width};
          border-style: ${inputfield.container.border.default.pressed.style};
          border-color: transparent;
          outline: ${inputfield.container.border.default.pressed.width} ${inputfield.container.border.default.pressed.style}
            ${inputfield.container.border.default.pressed.color};
          color: ${inputfield.userinput.textcolor.default.pressed};
          background-color: ${inputfield.container.bgcolor.default.pressed};
        }

        &.error-input {
          border-width: ${inputfield.container.border.error.rest.width};
          border-style: ${inputfield.container.border.error.rest.style};
          border-color: ${inputfield.container.border.error.rest.color};
          background-color: ${inputfield.container.bgcolor.error.rest};

          &.focus {
            border-width: ${inputfield.container.border.error.rest.width};
            border-style: ${inputfield.container.border.error.rest.style};
            border-color: transparent;
            outline: ${inputfield.container.border.error.focus.width} ${inputfield.container.border.error.focus.style}
              ${inputfield.container.border.error.focus.color};
            color: ${inputfield.userinput.textcolor.error.focus};
            background-color: ${inputfield.container.bgcolor.error.focus};
          }

          &:hover {
            border-width: ${inputfield.container.border.error.hover.width};
            border-style: ${inputfield.container.border.error.hover.style};
            color: ${inputfield.userinput.textcolor.error.hover};
            background-color: ${inputfield.container.bgcolor.error.hover};
          }

          &:active {
            border-width: ${inputfield.container.border.error.pressed.width};
            border-style: ${inputfield.container.border.error.pressed.style};
            border-color: ${inputfield.container.border.error.pressed.color};
            outline: ${inputfield.container.border.error.pressed.width} ${inputfield.container.border.error.pressed.style}
              ${inputfield.container.border.error.pressed.color};
            color: ${inputfield.userinput.textcolor.error.pressed};
            background-color: ${inputfield.container.bgcolor.error.pressed};
          }

          .blr-form-input {
            background: transparent;
            color: ${inputfield.userinput.textcolor.error.rest};
          }
        }
      }
    `;
  }
);
