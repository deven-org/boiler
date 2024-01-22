import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: sliderLight, tokenizedDark: sliderDark } = renderThemedCssStrings((componentTokens) => {
  const { Forms } = componentTokens;

  return typeSafeNestedCss`
    .blr-slider {
      margin: 0;

      & .range__field {
        border: 0;
      }

      & .input-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 20px;

        & > .range-wrapper {
          width: 100%;
          position: relative;
          min-height: 10px;

          & > input[type="range"] {
            position: absolute;
            width: 100%;
            height: 5px;
            appearance: none;
            outline: none;
            border-radius: 5px;
            background-color: transparent;

            &::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              border-radius: 50%;
              cursor: pointer;
              position: relative;
              z-index: 2;
              width: ${Forms.Slider.Thumb.Shape.Size.Rest};
              height: ${Forms.Slider.Thumb.Shape.Size.Rest};
              background-color: ${Forms.Slider.Thumb.Shape.BackgroundColor.Rest};
              border-width: ${Forms.Slider.Thumb.Shape.Border.Rest.width};
              border-style: ${Forms.Slider.Thumb.Shape.Border.Rest.style};
              border-color: ${Forms.Slider.Thumb.Shape.Border.Rest.color};
            }

            &::-moz-range-thumb {
              width: ${Forms.Slider.Thumb.Shape.Size.Rest};
              height: ${Forms.Slider.Thumb.Shape.Size.Rest};
              background-color: ${Forms.Slider.Thumb.Shape.BackgroundColor.Rest};
              border-width: ${Forms.Slider.Thumb.Shape.Border.Rest.width};
              border-style: ${Forms.Slider.Thumb.Shape.Border.Rest.style};
              border-color: ${Forms.Slider.Thumb.Shape.Border.Rest.color};
              border-radius: 50%;
              cursor: pointer;
              position: relative;
              z-index: 2;
            }

            &:active {
              &::-webkit-slider-thumb {
                width: ${Forms.Slider.Thumb.Shape.Size.Pressed};
                height: ${Forms.Slider.Thumb.Shape.Size.Pressed};
                background-color: ${Forms.Slider.Thumb.Shape.BackgroundColor.Pressed};
                border-width: ${Forms.Slider.Thumb.Shape.Border.Pressed.width};
                border-style: ${Forms.Slider.Thumb.Shape.Border.Pressed.style};
                border-color: ${Forms.Slider.Thumb.Shape.Border.Pressed.color};
              }

              &::-moz-range-thumb {
                width: ${Forms.Slider.Thumb.Shape.Size.Pressed};
                height: ${Forms.Slider.Thumb.Shape.Size.Pressed};
                background-color: ${Forms.Slider.Thumb.Shape.BackgroundColor.Pressed};
                border-width: ${Forms.Slider.Thumb.Shape.Border.Pressed.width};
                border-style: ${Forms.Slider.Thumb.Shape.Border.Pressed.style};
                border-color: ${Forms.Slider.Thumb.Shape.Border.Pressed.color};
              }
            }

            &:hover {
              &::-webkit-slider-thumb {
                width: ${Forms.Slider.Thumb.Shape.Size.Hover};
                height: ${Forms.Slider.Thumb.Shape.Size.Hover};
                background-color: ${Forms.Slider.Thumb.Shape.BackgroundColor.Hover};
                border-width: ${Forms.Slider.Thumb.Shape.Border.Hover.width};
                border-style: ${Forms.Slider.Thumb.Shape.Border.Hover.style};
                border-color: ${Forms.Slider.Thumb.Shape.Border.Hover.color};
              }

              &::-moz-range-thumb {
                width: ${Forms.Slider.Thumb.Shape.Size.Hover};
                height: ${Forms.Slider.Thumb.Shape.Size.Hover};
                background-color: ${Forms.Slider.Thumb.Shape.BackgroundColor.Hover};
                border-width: ${Forms.Slider.Thumb.Shape.Border.Hover.width};
                border-style: ${Forms.Slider.Thumb.Shape.Border.Hover.style};
                border-color: ${Forms.Slider.Thumb.Shape.Border.Hover.color};
              }
            }

            &:disabled {
              &::-webkit-slider-thumb {
                width: ${Forms.Slider.Thumb.Shape.Size.Disabled};
                height: ${Forms.Slider.Thumb.Shape.Size.Disabled};
                background-color: ${Forms.Slider.Thumb.Shape.BackgroundColor.Disabled};
                border-width: ${Forms.Slider.Thumb.Shape.Border.Disabled.width};
                border-style: ${Forms.Slider.Thumb.Shape.Border.Disabled.style};
                border-color: ${Forms.Slider.Thumb.Shape.Border.Disabled.color};
              }

              &::-moz-range-thumb {
                width: ${Forms.Slider.Thumb.Shape.Size.Disabled};
                height: ${Forms.Slider.Thumb.Shape.Size.Disabled};
                background-color: ${Forms.Slider.Thumb.Shape.BackgroundColor.Disabled};
                border-width: ${Forms.Slider.Thumb.Shape.Border.Disabled.width};
                border-style: ${Forms.Slider.Thumb.Shape.Border.Disabled.style};
                border-color: ${Forms.Slider.Thumb.Shape.Border.Disabled.color};
              }
            }
          }

          & > .tooltip {
            position: absolute;
            bottom: 15px;
            display: inline-block;
            cursor: pointer;
            padding: 5px;
            background-color: #000c;
            color: #fff;
            border-radius: 4px;
            font-size: 14px;
            white-space: nowrap;
            z-index: 1;
          }
        }

        & > .inline-legend {
          font-family: ${Forms.Slider.Legend.Typography.fontFamily}, Arial, sans-serif;
          font-size: ${Forms.Slider.Legend.Typography.fontSize};
          font-weight: ${Forms.Slider.Legend.Typography.fontWeight};
          line-height: ${Forms.Slider.Legend.Typography.lineHeight};
          color: ${Forms.Slider.Legend.TextColor.Default};
          word-wrap: normal;
          white-space: nowrap;

          & > p {
            margin: 0;
          }
        }

        & > .inline-legend-disabled {
          color: ${Forms.Slider.Legend.TextColor.Disabled};
        }
      }

      .range__bar {
        width: 100%;
        height: 5px;
        position: absolute;
        top: 2px;
        border-radius: 5px;
      }
      @-moz-document url-prefix("") {
        input[type="range"] {
          z-index: 10; /* Apply z-index property only in Firefox */
        }
      }
    }
  `;
});
