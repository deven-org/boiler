import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

import { SemanticThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";
import { semanticTokens } from "../../foundation/_tokens-generated/semanticTokensType.generated.js";
import { ThemeType } from "../../foundation/_tokens-generated/index.themes.js";

const directionIndicatorIconClassName = "icon-direction-indicator";

export const staticStyles = css`
  .select-wrapper {
    position: relative;
    width: 100%;
  }

  .${directionIndicatorIconClassName} {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .blr-select-option {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .blr-select > .label-wrapper {
    display: flex;
  }

  .blr-form-select {
    all: initial;
    box-sizing: border-box;
    width: 100%;
    appearance: none;
    padding-right: 30px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;

    &.disabled {
      cursor: not-allowed;
    }
  }

  ${SemanticThemeIterator((theme, sem, css) => {
    const { inputfield, inputslot, labelslot } = sem.forms;

    return css`
      ${getDirectionIndicatorIconStyles({ theme, semanticTokens: sem }).cssText}

      .blr-select.${theme} {
        &.sm > .label-wrapper {
          padding: ${labelslot.padding.sm};
        }

        &.md > .label-wrapper {
          padding: ${labelslot.padding.md};
        }

        &.lg > .label-wrapper {
          padding: ${labelslot.padding.lg};
        }
      }

      .blr-form-select.${theme} {
        border-radius: ${inputfield.container.borderradius};
        color: ${inputfield.userinput.textcolor.default.rest};
        background-color: ${inputfield.container.bgcolor.default.rest};
        outline: ${inputfield.container.border.default.rest.width} ${inputfield.container.border.default.rest.style}
          ${inputfield.container.border.default.rest.color};

        &.sm {
          padding: ${inputfield.container.padding.sm};
          margin: ${inputslot.margin.sm};
          font-weight: ${inputfield.userinput.typography.sm.fontWeight};
          font-size: ${inputfield.userinput.typography.sm.fontSize};
          font-family: ${inputfield.userinput.typography.sm.fontFamily}, sans-serif;
          line-height: ${inputfield.userinput.typography.sm.lineHeight};
        }

        &.md {
          padding: ${inputfield.container.padding.md};
          margin: ${inputslot.margin.md};
          font-weight: ${inputfield.userinput.typography.md.fontWeight};
          font-size: ${inputfield.userinput.typography.md.fontSize};
          font-family: ${inputfield.userinput.typography.md.fontFamily}, sans-serif;
          line-height: ${inputfield.userinput.typography.md.lineHeight};
        }

        &.lg {
          padding: ${inputfield.container.padding.lg};
          margin: ${inputslot.margin.lg};
          font-weight: ${inputfield.userinput.typography.lg.fontWeight};
          font-size: ${inputfield.userinput.typography.lg.fontSize};
          font-family: ${inputfield.userinput.typography.lg.fontFamily}, sans-serif;
          line-height: ${inputfield.userinput.typography.lg.lineHeight};
        }

        &:hover {
          color: ${inputfield.userinput.textcolor.default.hover};
          background-color: ${inputfield.container.bgcolor.default.hover};
          border-color: ${inputfield.container.border.default.hover.color};
        }

        &.focus {
          color: ${inputfield.userinput.textcolor.default.focus};
          background-color: ${inputfield.container.bgcolor.default.focus};
          border-color: ${inputfield.container.border.default.focus.color};
          outline: ${inputfield.container.border.default.focus.width} ${inputfield.container.border.default.focus.style}
            ${inputfield.container.border.default.focus.color};
        }

        &:active {
          color: ${inputfield.userinput.textcolor.default.pressed};
          background-color: ${inputfield.container.bgcolor.default.pressed};
          border-color: ${inputfield.container.border.default.pressed.color};
        }

        &.disabled {
          color: ${inputfield.userinput.textcolor.default.disabled};
          background-color: ${inputfield.container.bgcolor.default.disabled};
          border-color: ${inputfield.container.border.default.disabled.color};
        }

        &.error-select {
          color: ${inputfield.userinput.textcolor.error.rest};
          background-color: ${inputfield.container.bgcolor.error.rest};
          outline-color: ${inputfield.container.border.error.rest.color};

          &:hover {
            color: ${inputfield.userinput.textcolor.error.hover};
            background-color: ${inputfield.container.bgcolor.error.hover};
            border-color: ${inputfield.container.border.error.hover.color};
          }

          &:active {
            color: ${inputfield.userinput.textcolor.error.pressed};
            background-color: ${inputfield.container.bgcolor.error.pressed};
            border-color: ${inputfield.container.border.error.pressed.color};
          }

          &.focus {
            color: ${inputfield.userinput.textcolor.error.focus};
            background-color: ${inputfield.container.bgcolor.error.focus};
            border-color: ${inputfield.container.border.error.focus.color};
            outline: ${inputfield.container.border.error.focus.width} ${inputfield.container.border.error.focus.style}
              ${inputfield.container.border.error.focus.color};
          }
        }
      }
    `;
  })}
`;

function getDirectionIndicatorIconStyles({ theme, semanticTokens }: { theme: ThemeType; semanticTokens: semanticTokens["sem"] }) {
  const { inputfield } = semanticTokens.forms;

  return css`
    .${directionIndicatorIconClassName}.${theme} {
      color: ${inputfield.icon.iconcolor.default.rest};

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

    .select-wrapper.${theme} {
      &:hover .${directionIndicatorIconClassName} {
        color: ${inputfield.icon.iconcolor.default.hover};
      }

      &:focus-within .${directionIndicatorIconClassName} {
        color: ${inputfield.icon.iconcolor.default.focus};
      }

      &:active .${directionIndicatorIconClassName} {
        color: ${inputfield.icon.iconcolor.default.pressed};
      }

      &.disabled {
        .${directionIndicatorIconClassName} {
          color: ${inputfield.icon.iconcolor.default.disabled};
        }
      }

      &.error,
      .error.disabled {
        .${directionIndicatorIconClassName} {
          color: ${inputfield.icon.iconcolor.error.rest};
        }

        &:hover .${directionIndicatorIconClassName} {
          color: ${inputfield.icon.iconcolor.error.hover};
        }

        &:focus-within .${directionIndicatorIconClassName} {
          color: ${inputfield.icon.iconcolor.error.focus};
        }

        &:active .${directionIndicatorIconClassName} {
          color: ${inputfield.icon.iconcolor.error.pressed};
        }
      }
    }
  `;
}
