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

  input[type='range'],
  input[type='range']::-webkit-slider-runnable-track,
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      margin: -8px 0 0;
      border-radius: 50%;
      background: #37adbf;
      cursor: pointer;
      border: 0 !important;
    }

    &::-moz-range-thumb {
      width: 18px;
      height: 18px;
      margin: -8px 0 0;
      border-radius: 50%;
      background: #37adbf;
      cursor: pointer;
      border: 0 !important;
    }

    &::-ms-thumb {
      width: 18px;
      height: 18px;
      margin: -8px 0 0;
      border-radius: 50%;
      background: #37adbf;
      cursor: pointer;
      border: 0 !important;
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: #b2b2b2;
    }

    &::-moz-range-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: #b2b2b2;
    }

    &::-ms-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: #b2b2b2;
    }
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
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

  .range {
    appearance: none;
    height: 4px;
    border-radius: 2px;
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

  .range__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  .range__pip {
    margin: -18px 0 10px;
    width: 9px;
    border: 1px solid #c7c7c7;
    height: 9px;
    background: rgb(255 255 255);
    border-radius: 50%;
  }
`;
