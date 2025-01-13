import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

import { SemanticThemeIterator, ComponentThemeIterator } from "../_tokens-generated/iterator.generated.js";

export const staticBaseStyles = css`
  .blr-form-element {
    all: initial;
    width: 100%;
    box-sizing: border-box;

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

  .blr-input-inner-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .blr-caption-text {
    word-break: break-all;
  }

  .caption-wrapper {
    display: flex;
    flex-direction: column;
  }

  .blr-form-label {
    display: flex;
    align-items: center;
    word-break: break-all;
  }

  .blr-form-label-inline {
    flex: 1;
  }
`;

export const staticSemanticStyles = css`
  ${SemanticThemeIterator((theme, sem, css) => {
    const { forms } = sem;

    return css`
      .blr-form-element.${theme} {
        outline-offset: calc(${forms.inputfield.container.border.default.hover.width} * -1);
        color: ${forms.inputfield.userinput.textcolor.default.rest};
        font-weight: ${forms.inputfield.userinput.typography.md.fontWeight};
        font-size: ${forms.inputfield.userinput.typography.md.fontSize};
        font-family: ${forms.inputfield.userinput.typography.md.fontFamily}, sans-serif;
        outline-width: ${forms.inputfield.container.border.default.rest.width};
        outline-style: ${forms.inputfield.container.border.default.rest.style};
        outline-color: ${forms.inputfield.container.border.default.rest.color};
        border-radius: ${forms.inputfield.container.borderradius};

        &::placeholder {
          color: ${forms.inputfield.placeholder.textcolor.default.rest};
        }

        &:hover {
          outline-width: ${forms.inputfield.container.border.default.hover.width};
          outline-style: ${forms.inputfield.container.border.default.hover.style};
          outline-color: ${forms.inputfield.container.border.default.hover.color};
          color: ${forms.inputfield.userinput.textcolor.default.hover};
          background-color: ${forms.inputfield.container.bgcolor.default.hover};

          &::placeholder {
            color: ${forms.inputfield.placeholder.textcolor.default.hover};
          }
        }

        &[readonly] {
          outline-offset: calc(1px * -1);
          outline: ${forms.inputfield.container.border.default.hover.width} ${forms.inputfield.container.border.default.readonly.style}
            ${forms.inputfield.container.border.default.readonly.color};
          background-color: ${forms.inputfield.container.bgcolor.default.readonly};

          &::placeholder {
            color: ${forms.inputfield.placeholder.textcolor.default.readonly};
          }
        }

        &:disabled {
          outline-offset: calc(${forms.inputfield.container.border.error.focus.width} * -1);
          outline: ${forms.inputfield.container.border.default.disabled.width} ${forms.inputfield.container.border.default.disabled.style}
            ${forms.inputfield.container.border.default.disabled.color};
          color: ${forms.inputfield.userinput.textcolor.default.disabled};
          background-color: ${forms.inputfield.container.bgcolor.default.disabled};

          &::placeholder {
            color: ${forms.inputfield.placeholder.textcolor.default.disabled};
          }
        }

        &:focus {
          outline-offset: calc(${forms.inputfield.container.border.default.hover.width}* -2);
          outline: ${forms.inputfield.container.border.default.focus.width} ${forms.inputfield.container.border.default.focus.style}
            ${forms.inputfield.container.border.default.focus.color};
          color: ${forms.inputfield.userinput.textcolor.default.focus};
          background-color: ${forms.inputfield.container.bgcolor.default.focus};

          &::placeholder {
            color: ${forms.inputfield.placeholder.textcolor.default.focus};
          }
        }

        &.error-input {
          outline-offset: calc(${forms.inputfield.container.border.default.hover.width} * -1);
          outline: ${forms.inputfield.container.border.error.rest.width} ${forms.inputfield.container.border.error.rest.style}
            ${forms.inputfield.container.border.error.rest.color};
          color: ${forms.inputfield.userinput.textcolor.error.rest};
          background-color: ${forms.inputfield.container.bgcolor.error.rest};

          &::placeholder {
            color: ${forms.inputfield.placeholder.textcolor.error.rest};
          }

          &:hover {
            outline-offset: calc(${forms.inputfield.container.border.error.focus.width} * -1);
            outline: ${forms.inputfield.container.border.error.hover.width} ${forms.inputfield.container.border.error.hover.style}
              ${forms.inputfield.container.border.error.hover.color};
            color: ${forms.inputfield.userinput.textcolor.error.hover};
            background-color: ${forms.inputfield.container.bgcolor.error.hover};

            &::placeholder {
              color: ${forms.inputfield.placeholder.textcolor.error.hover};
            }
          }

          &:focus {
            outline-offset: calc(${forms.inputfield.container.border.error.focus.width} * -1);
            border-color: transparent;
            outline: ${forms.inputfield.container.border.error.focus.width} ${forms.inputfield.container.border.error.focus.style}
              ${forms.inputfield.container.border.error.focus.color};
            color: ${forms.inputfield.userinput.textcolor.error.focus};
            background-color: ${forms.inputfield.container.bgcolor.error.focus};

            &::placeholder {
              color: ${forms.inputfield.placeholder.textcolor.error.focus};
            }
          }
        }

        &.sm {
          font-weight: ${forms.inputfield.userinput.typography.sm.fontWeight};
          font-size: ${forms.inputfield.userinput.typography.sm.fontSize};
          font-family: ${forms.inputfield.userinput.typography.sm.fontFamily}, sans-serif;
          line-height: ${forms.inputfield.userinput.typography.sm.lineHeight};
          padding: ${forms.inputfield.container.padding.sm};
        }

        &.md {
          font-weight: ${forms.inputfield.userinput.typography.md.fontWeight};
          font-size: ${forms.inputfield.userinput.typography.md.fontSize};
          font-family: ${forms.inputfield.userinput.typography.md.fontFamily}, sans-serif;
          line-height: ${forms.inputfield.userinput.typography.md.lineHeight};
          padding: ${forms.inputfield.container.padding.md};
        }

        &.lg {
          font-weight: ${forms.inputfield.userinput.typography.lg.fontWeight};
          font-size: ${forms.inputfield.userinput.typography.lg.fontSize};
          font-family: ${forms.inputfield.userinput.typography.lg.fontFamily}, sans-serif;
          line-height: ${forms.inputfield.userinput.typography.lg.lineHeight};
          padding: ${forms.inputfield.container.padding.lg};
        }
      }

      .blr-input-inner-container.${theme} {
        &.sm {
          padding: ${forms.labelslot.padding.sm};
          margin: ${forms.inputslot.margin.sm};
        }

        &.md {
          padding: ${forms.labelslot.padding.md};
          margin: ${forms.inputslot.margin.md};
        }

        &.lg {
          padding: ${forms.labelslot.padding.lg};
          margin: ${forms.inputslot.margin.lg};
        }
      }

      .caption-wrapper.${theme} {
        &.sm {
          margin: ${forms.captionslot.margin.sm};
        }

        &.md {
          margin: ${forms.captionslot.margin.md};
        }

        &.lg {
          margin: ${forms.captionslot.margin.lg};
        }
      }

      .blr-form-label-appendix.${theme} {
        &.sm {
          padding-left: ${forms.labelslot.padding.sm};
        }

        &.md {
          padding-left: ${forms.labelslot.padding.md};
        }

        &.lg {
          padding-left: ${forms.labelslot.padding.lg};
        }
      }
    `;
  })}
`;

export const staticComponentStyles = css`
  ${ComponentThemeIterator((theme, cmp, css) => {
    const { formlabel } = cmp;

    return css`
      .blr-form-label.${theme} {
        color: ${formlabel.label.textcolor.rest};

        &:focus {
          color: ${formlabel.label.textcolor.focus};

          .blr-form-label-appendix {
            color: ${formlabel.labelappendix.textcolor.focus};
          }
        }

        &:hover {
          color: ${formlabel.label.textcolor.hover};

          .blr-form-label-appendix {
            color: ${formlabel.labelappendix.textcolor.hover};
          }
        }

        &:disabled {
          color: ${formlabel.label.textcolor.disabled};

          .blr-form-label-appendix {
            color: ${formlabel.labelappendix.textcolor.disabled};
          }
        }

        &[readonly] {
          color: ${formlabel.label.textcolor.readonly};

          .blr-form-label-appendix {
            color: ${formlabel.labelappendix.textcolor.readonly};
          }
        }

        &.error {
          color: ${formlabel.label.textcolor.error};

          .blr-form-label-appendix {
            color: ${formlabel.labelappendix.textcolor.error};
          }
        }

        &.sm {
          font-weight: ${formlabel.label.typography.sm.fontWeight};
          font-size: ${formlabel.label.typography.sm.fontSize};
          font-family: ${formlabel.label.typography.sm.fontFamily}, sans-serif;
          line-height: ${formlabel.label.typography.sm.lineHeight};
          gap: ${formlabel.container.itemspacing.sm};
        }

        &.md {
          font-weight: ${formlabel.label.typography.md.fontWeight};
          font-size: ${formlabel.label.typography.md.fontSize};
          font-family: ${formlabel.label.typography.md.fontFamily}, sans-serif;
          line-height: ${formlabel.label.typography.md.lineHeight};
          gap: ${formlabel.container.itemspacing.md};
        }

        &.lg {
          font-weight: ${formlabel.label.typography.lg.fontWeight};
          font-size: ${formlabel.label.typography.lg.fontSize};
          font-family: ${formlabel.label.typography.lg.fontFamily}, sans-serif;
          line-height: ${formlabel.label.typography.lg.lineHeight};
          gap: ${formlabel.container.itemspacing.lg};
        }
      }

      .blr-form-label-inline.${theme} {
        &.sm {
          font-weight: ${formlabel.inlinelabel.typography.sm.fontWeight};
          font-size: ${formlabel.inlinelabel.typography.sm.fontSize};
          font-family: ${formlabel.inlinelabel.typography.sm.fontFamily}, sans-serif;
          line-height: ${formlabel.inlinelabel.typography.sm.lineHeight};
        }

        &.md {
          font-weight: ${formlabel.inlinelabel.typography.md.fontWeight};
          font-size: ${formlabel.inlinelabel.typography.md.fontSize};
          font-family: ${formlabel.inlinelabel.typography.md.fontFamily}, sans-serif;
          line-height: ${formlabel.inlinelabel.typography.md.lineHeight};
        }

        &.lg {
          font-weight: ${formlabel.inlinelabel.typography.lg.fontWeight};
          font-size: ${formlabel.inlinelabel.typography.lg.fontSize};
          font-family: ${formlabel.inlinelabel.typography.lg.fontFamily}, sans-serif;
          line-height: ${formlabel.inlinelabel.typography.lg.lineHeight};
        }
      }

      .blr-form-label-appendix.${theme} {
        color: ${formlabel.labelappendix.textcolor.rest};
        white-space: nowrap;

        &.sm {
          font-weight: ${formlabel.labelappendix.typography.sm.fontWeight};
          font-size: ${formlabel.labelappendix.typography.sm.fontSize};
          font-family: ${formlabel.labelappendix.typography.sm.fontFamily}, sans-serif;
          line-height: ${formlabel.labelappendix.typography.sm.lineHeight};
        }

        &.md {
          font-weight: ${formlabel.labelappendix.typography.md.fontWeight};
          font-size: ${formlabel.labelappendix.typography.md.fontSize};
          font-family: ${formlabel.labelappendix.typography.md.fontFamily}, sans-serif;
          line-height: ${formlabel.labelappendix.typography.md.lineHeight};
        }

        &.lg {
          font-weight: ${formlabel.labelappendix.typography.lg.fontWeight};
          font-size: ${formlabel.labelappendix.typography.lg.fontSize};
          font-family: ${formlabel.labelappendix.typography.lg.fontFamily}, sans-serif;
          line-height: ${formlabel.labelappendix.typography.lg.lineHeight};
        }
      }
    `;
  })}
`;

export const staticStyles = css`
  ${staticBaseStyles.cssText}
  ${staticSemanticStyles.cssText}
  ${staticComponentStyles.cssText}
`;
