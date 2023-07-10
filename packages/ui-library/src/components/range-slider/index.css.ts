import { css } from 'lit';

export const styleCustom = css`
  .single-range {
    position: relative;
    max-width: 500px;
    display: block;
    margin: 70px auto;
  }

  input[type='range'] {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .tick-wrapper {
    display: block;
    padding: 0 25px;
  }

  .input-wrapper button {
    background: none;
    color: #427cf0;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    font-size: 24px;
  }

  .range__tick {
    fill: #a0a0a0;
  }

  .range__tick:first-child {
    -webkit-transform: translateX(2px);
    -moz-transform: translateX(2px);
    -ms-transform: translateX(2px);
    -o-transform: translateX(2px);
    transform: translateX(2px);
  }

  .range__tick:last-child {
    -webkit-transform: translateX(-3px);
    -moz-transform: translateX(-3px);
    -ms-transform: translateX(-3px);
    -o-transform: translateX(-3px);
    transform: translateX(-3px);
  }

  .range__field {
    border: 0;
  }

  .range__numbers {
    display: flex;
    justify-content: space-between;
  }

  .range__numbers p {
    font-family: 'Source Sans Pro', sans-serif;
    margin-top: 0;
  }

  .range__numbers p::before {
    content: '';
    display: block;
    margin: 0 auto 3px;
    height: 6px;
    width: 1px;
    background-color: grey;
  }
`;
