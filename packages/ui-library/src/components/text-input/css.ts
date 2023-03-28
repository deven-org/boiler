import { css } from 'lit';

export const styleCustom = css`
  .blr-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    width: 506px;
    height: 71px;
  }

  .blr-text-input {
    line-height: 140%;
    font-weight: 400;
    font-size: 16px;
    border: 1px solid #000;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 4px 8px;
  }

  .blr-text-label {
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
    color: #000;
  }

  .blr-hint-error {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 2px;
    gap: 4px;
    width: 486px;
    height: 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    letter-spacing: 0.01em;
  }

  .blr-error {
    color: #e6193c;
  }

  .blr-hint {
    color: #737b8c;
  }
`;
