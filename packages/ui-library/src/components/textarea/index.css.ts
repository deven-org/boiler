import { css } from 'lit';

export const styleCustom = css`
  :host {
    display: inline-flex;
    flex-direction: column;
    max-width: 100%;
  }

  .blr-textarea {
    resize: none;
    display: block;
    max-width: 100%;
    word-break: break-all;
    width: 100%;
  }

  .blr-textarea.resizeable {
    resize: both;
  }
`;
