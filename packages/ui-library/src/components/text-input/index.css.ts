import { css } from 'lit';

export const styleCustom = css`
  .blr-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }

  .blr-text-input:disabled {
    pointer-events: none;
  }
`;
