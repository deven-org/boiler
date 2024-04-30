import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";
import { SemanticThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";

export const staticStyles = css`
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
      }
    }
    &.md {
      & > .label-wrapper {
        display: flex;
      }
    }
    &.lg {
      & > .label-wrapper {
        display: flex;
      }
    }
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
    resize: none;
    display: block;
    max-width: 100%;
    word-break: break-all;
    width: 100%;

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

  ${SemanticThemeIterator((theme, sem, css) => {
    const { labelslot, captionslot, inputfield } = sem.forms;

    return css`
      .blr-textarea.${theme} {
        &.sm {
          & > .label-wrapper {
            padding: ${labelslot.padding.sm};
          }
        }
        &.md {
          & > .label-wrapper {
            padding: ${labelslot.padding.md};
          }
        }
        &.lg {
          & > .label-wrapper {
            padding: ${labelslot.padding.lg};
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
        background-color: ${inputfield.container.bgcolor.default.rest};

        &.sm {
          min-height: ${captionslot.margin.sm};
        }

        &.md {
          min-height: ${captionslot.margin.md};
        }

        &.lg {
          min-height: ${captionslot.margin.lg};
        }
      }
    `;
  })}
`;
