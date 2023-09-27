import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";
import { css } from "nested-css-to-flat/lit-css";

export const { tokenizedLight: sliderLight, tokenizedDark: sliderDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const {
    Feedback: { Tooltip },
  } = componentTokens;
  const {
    UI: { Caption },
  } = semanticTokens;

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

          & + .nose-solo {
            visibility: visible;
            opacity: 1;
          }
        }
      }

      & > .tooltip {
        visibility: hidden;
        border-radius: ${Tooltip.ContentCol.BorderRadius};
        position: absolute;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.2s;
        width: max-content;
        max-width: ${Tooltip.MaxWidth};
        min-width: ${Tooltip.MinWidth};

        & > .inner-container {
          padding: ${Tooltip.ContentCol.Padding};
          color: ${Tooltip.Content};
          background-color: ${Tooltip.SurfaceFill};
          border-radius: ${Tooltip.ContentCol.BorderRadius};
        }

        & > .elevation {
          box-shadow: 0 1px 4px rgb(0 0 0 / 60%);
        }

        &.sm {
          font-family: ${Caption.SM.fontFamily}, sans-serif;
          font-weight: ${Caption.SM.fontWeight};
          font-size: ${Caption.SM.fontSize};
          line-height: ${Caption.SM.lineHeight};
        }

        &.md {
          font-family: ${Caption.MD.fontFamily}, sans-serif;
          font-weight: ${Caption.MD.fontWeight};
          font-size: ${Caption.MD.fontSize};
          line-height: ${Caption.MD.lineHeight};
        }

        &.lg {
          font-family: ${Caption.LG.fontFamily}, sans-serif;
          font-weight: ${Caption.LG.fontWeight};
          font-size: ${Caption.LG.fontSize};
          line-height: ${Caption.LG.lineHeight};
        }

        & + .nose-solo {
          position: absolute;
          visibility: hidden;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.2s;
        }
      }

      & > .blr-tooltip-visible-always {
        visibility: visible;
        opacity: 1;

        & + .nose-solo {
          visibility: visible;
          opacity: 1;
        }
      }

      & .tooltip-top {
        bottom: 100%;
        margin-bottom: 10px;

        & + .nose-solo {
          top: -10px;
          transform: rotate(0deg);
        }
      }

      & .tooltip-bottom {
        top: 100%;
        margin-top: 10px;

        & + .nose-solo {
          bottom: -10px;
          transform: rotate(180deg);
        }
      }

      & .tooltip-left {
        right: 100%;
        margin-right: 10px;

        & + .nose-solo {
          left: -15px;
          transform: rotate(270deg);
        }
      }

      & .tooltip-right {
        left: 100%;
        margin-left: 10px;

        & + .nose-solo {
          right: -15px;
          transform: rotate(90deg);
        }
      }

      & .tooltip-horizontal-start {
        left: 0;

        & + .nose-solo {
          left: ${Tooltip.NoseWrapper.PaddingLeftRight};
        }
      }

      & .tooltip-horizontal-middle {
        left: 50%;
        transform: translateX(-50%);

        & + .nose-solo {
          left: 50%;
          transform: translateX(-50%);
        }

        &.tooltip-bottom {
          & + .nose-solo {
            transform: translateX(-50%) rotate(180deg);
          }
        }
      }

      & .tooltip-horizontal-end {
        right: 0;

        & + .nose-solo {
          right: ${Tooltip.NoseWrapper.PaddingLeftRight};
        }
      }

      & .tooltip-vertical-start {
        top: 0;

        & + .nose-solo {
          top: ${Tooltip.NoseWrapper.PaddingTopBottom};
        }
      }

      & .tooltip-vertical-middle {
        top: 50%;
        transform: translateY(-50%);
        margin-top: -5px;

        & + .nose-solo {
          top: 50%;
        }
      }

      & .tooltip-vertical-end {
        bottom: 0;

        & + .nose-solo {
          bottom: ${Tooltip.NoseWrapper.PaddingTopBottom};
        }
      }

      & .tooltip-vertical-hide {
        top: 0;
      }

      & .tooltip-horizontal-hide {
        left: 0;
      }

      & .hide-arrow {
        & + .nose-solo {
          display: none;
        }
      }
    }
  `;
});
