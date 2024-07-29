import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";
import { SemanticThemeIterator, ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";

export const staticStyles = css`
  :host {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
  }

  :host(.parent-width) {
    width: 100%;
  }

  .blr-textarea {
    width: 100%;
    display: flex;
    flex-direction: column;

    &.sm,
    &.md,
    &.lg {
      & > .label-wrapper {
        display: flex;
      }
    }
  }

  .blr-textarea-info-container {
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;

    &.error,
    &.hint {
      justify-content: flex-end;
    }

    &.error-message,
    &.hint-message {
      justify-content: space-between;
      width: 100%;
    }
  }

  .textarea-input-control {
    resize: none;
    display: block;
    width: 100%;
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

      .blr-textarea-info-container.${theme} {
        &.sm > blr-counter {
          margin: ${captionslot.margin.sm};
        }

        &.md > blr-counter {
          margin: ${captionslot.margin.md};
        }

        &.lg > blr-counter {
          margin: ${captionslot.margin.lg};
        }
      }

      .textarea-input-control.${theme} {
        background-color: ${inputfield.container.bgcolor.default.rest};
      }
    `;
  })}
`;
