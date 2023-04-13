import { css } from 'lit';

export const styleCustom = css`
  /* stylelint-disable */
  .blr-radio-input {
    margin: 0.5rem;
    display: block;
  }

  .blr-radio-input input[type='radio'] {
    position: absolute;
    opacity: 0;
    box-sizing: border-box;
    padding: 0;
  }

  .blr-radio-input input[type='radio']::checked + label::before {
    background-color: #3197ee;
    box-shadow: inset 0 0 0 4px #f4f4f4;
  }

  .blr-radio-input input[type='radio'] + label:before {
    content: '';
    background: #f4f4f4;
    border-radius: 100%;
    border: 1px solid #b4b4b4;
    display: inline-block;
    width: 1.4em;
    height: 1.4em;
    position: relative;
    top: -0.2em;
    margin-right: 1em;
    vertical-align: top;
    cursor: pointer;
    text-align: center;
    transition: all 250ms ease;
  }

  .blr-radio-input input[type='radio']::disabled + label:before {
    box-shadow: inset 0 0 0 4px #f4f4f4;
    border-color: #b4b4b4;
    background: #b4b4b4;
    pointer-events: none;
  }

  .blr-radio-input input[invalid='true'] + label:before {
    box-shadow: inset 0 0 0 4px #f4f4f4;
    border-color: #ff4e4e;
  }

  .blr-radio-input.error-message {
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 1rem;
    color: #ff4e4e;
  }
  /* stylelint-enable */
`;
