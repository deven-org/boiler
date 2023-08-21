import { css } from "lit";

export const styleCustom = css`
  :host {
    display: inline-flex;
    flex-direction: column;
    max-width: 100%;
  }

  :host(.parent-width) {
    width: 100%;
  }

  .textarea-input-control {
    resize: none;
    display: block;
    max-width: 100%;
    word-break: break-all;
    width: 100%;
  }

  .textarea-input-control.resizeable {
    resize: both;
  }

  .new-class {
    color: red;
  }
`;
