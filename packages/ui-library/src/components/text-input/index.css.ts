import { css } from 'lit';

export const styleCustom = css`
  .blr-password:disabled {
    pointer-events: none;
  }

  blr-password {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }
`;
