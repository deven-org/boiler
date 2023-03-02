import { css } from 'lit';

export const styleCustom = css`
  .blr-text-button {
    align-items: center;
    display: flex;
    cursor: pointer;
  }

  .blr-text-button .blr-text-button-icon {
    flex-shrink: 0;
  }

  .blr-text-button.icon-left {
    flex-direction: row-reverse;
  }
`;
