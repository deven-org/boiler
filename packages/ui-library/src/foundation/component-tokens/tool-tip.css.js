import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";
import { css } from "nested-css-to-flat/lit-css";

export const { tokenizedLight: sliderLight, tokenizedDark: sliderDark } = renderThemedCssStrings((componentTokens) => {
  // eslint-disable-next-line no-console
  console.log("*** componentTokens ***", componentTokens);
  return css`
    .blr-tooltip {
      position: relative;
      display: inline-block;

      &:host {
        position: relative;
        display: inline-block;
        cursor: pointer;
      }

      &:hover {
        & > .tooltip {
          visibility: visible;
          opacity: 1;
        }
      }

      & > .tooltip {
        visibility: hidden;
        background-color: #333;
        color: #fff;
        border-radius: 5px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.2s;
        font-family: Arial, sans-serif;

        &::after {
          content: "";
          position: absolute;
          border-width: 5px;
          border-style: solid;
          border-color: #000 transparent transparent;
          transition: opacity 0.2s;
        }
      }

      & > .blr-tooltip-visible-always {
        visibility: visible;
        opacity: 1;
      }

      & .tooltip-top {
        bottom: 100%;
        margin-bottom: 5px;

        &::after {
          top: 100%;
          transform: rotate(0deg);
        }
      }

      & .tooltip-bottom {
        top: 100%;
        margin-top: 5px;

        &::after {
          bottom: 100%;
          transform: rotate(180deg);
        }
      }

      & .tooltip-left {
        right: 100%;
        margin-right: 10px;

        &::after {
          left: 100%;
          transform: rotate(270deg);
        }
      }

      & .tooltip-right {
        left: 100%;
        margin-left: 10px;

        &::after {
          right: 100%;
          transform: rotate(90deg);
        }
      }

      & .tooltip-horizontal-start {
        left: 0;

        &::after {
          left: 5px;
        }
      }

      & .tooltip-horizontal-middle {
        left: 50%;
        transform: translateX(-50%);

        &::after {
          left: 50%;
          transform: translateX(-50%);
        }
      }

      & .tooltip-horizontal-end {
        right: 0;

        &::after {
          right: 5px;
        }
      }

      & .tooltip-vertical-start {
        top: 0;

        &::after {
          top: 5px;
        }
      }

      & .tooltip-vertical-middle {
        top: 50%;
        transform: translateY(-50%);
        margin-top: -5px;

        &::after {
          top: 50%;
        }
      }

      & .tooltip-vertical-end {
        bottom: 0;

        &::after {
          bottom: 5px;
        }
      }

      & .tooltip-vertical-hide {
        top: 0;
      }

      & .tooltip-horizontal-hide {
        left: 0;
      }

      & .hide-arrow {
        &::after {
          border: none;
        }
      }
    }
  `;
});

// box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

//  border-color: #000 transparent transparent transparent; line 40
