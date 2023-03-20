import { css } from 'lit';

export const styleCustom= css`

:host {
  display: inline-flex;
  flex-shrink: 0;
}
  .blr-loader {
    position: relative;
    display: inline-flex;
    flex-shrink: 0;
  }

  .loading-spinner {
    transform-origin:center;
    animation:spinner-rotate .75s infinite linear
  }
  @keyframes spinner-rotate {
    100% {
      transform:rotate(360deg)
    }
  }
`
