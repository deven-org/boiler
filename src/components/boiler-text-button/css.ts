import { css } from 'lit';

export const style = css`
  .boiler-text-button {
    cursor: pointer;
    border: 0;
    padding: 0 var(--blr-spacing-600);
    height: 40px;
    color: var(--blr-color-progressive-red);
    border-radius: 9999px;
    font-size: 14px;
  }

  .boiler-text-button:hover {
    background: var(--blr-color-neon-blue-100);
  }

  .boiler-text-button:active {
    background: var(--blr-color-neon-green-100);
  }
`;
