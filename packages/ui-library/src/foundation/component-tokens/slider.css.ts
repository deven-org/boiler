import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

import { ComponentThemeIterator } from "../_tokens-generated/index.pseudo.generated.js";

export const staticStyles = typeSafeNestedCss/*css*/ `
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
          }

          &::-moz-range-thumb {
            border-radius: 50%;
            cursor: pointer;
            position: relative;
            z-index: 2;
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
        word-wrap: normal;
        white-space: nowrap;

        & > p {
          margin: 0;
        }
      }
    }

    .range__bar {
      width: 100%;
      height: 5px;
      position: absolute;
      top: 2px;
      border-radius: 5px;
    }
    
    ${
      /* Apply z-index property only in Firefox */
      ""
    }
    @-moz-document url-prefix("") {
      input[type="range"] {
        z-index: 10; 
      }
    }
  }

  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { Slider } = cmp;

    return typeSafeCss/*css*/ `
      .blr-slider.${theme} {
        & .input-wrapper {
          & > .range-wrapper {
            & > input[type="range"] {
              &::-webkit-slider-thumb {
                width: ${Slider.Thumb.Shape.Size.Rest};
                height: ${Slider.Thumb.Shape.Size.Rest};
                background-color: ${Slider.Thumb.Shape.BackgroundColor.Rest};
                border-width: ${Slider.Thumb.Shape.Border.Rest.width};
                border-style: ${Slider.Thumb.Shape.Border.Rest.style};
                border-color: ${Slider.Thumb.Shape.Border.Rest.color};
              }

              &::-moz-range-thumb {
                width: ${Slider.Thumb.Shape.Size.Rest};
                height: ${Slider.Thumb.Shape.Size.Rest};
                background-color: ${Slider.Thumb.Shape.BackgroundColor.Rest};
                border-width: ${Slider.Thumb.Shape.Border.Rest.width};
                border-style: ${Slider.Thumb.Shape.Border.Rest.style};
                border-color: ${Slider.Thumb.Shape.Border.Rest.color};
              }

              &:active {
                &::-webkit-slider-thumb {
                  width: ${Slider.Thumb.Shape.Size.Pressed};
                  height: ${Slider.Thumb.Shape.Size.Pressed};
                  background-color: ${Slider.Thumb.Shape.BackgroundColor.Pressed};
                  border-width: ${Slider.Thumb.Shape.Border.Pressed.width};
                  border-style: ${Slider.Thumb.Shape.Border.Pressed.style};
                  border-color: ${Slider.Thumb.Shape.Border.Pressed.color};
                }

                &::-moz-range-thumb {
                  width: ${Slider.Thumb.Shape.Size.Pressed};
                  height: ${Slider.Thumb.Shape.Size.Pressed};
                  background-color: ${Slider.Thumb.Shape.BackgroundColor.Pressed};
                  border-width: ${Slider.Thumb.Shape.Border.Pressed.width};
                  border-style: ${Slider.Thumb.Shape.Border.Pressed.style};
                  border-color: ${Slider.Thumb.Shape.Border.Pressed.color};
                }
              }

              &:hover {
                &::-webkit-slider-thumb {
                  width: ${Slider.Thumb.Shape.Size.Hover};
                  height: ${Slider.Thumb.Shape.Size.Hover};
                  background-color: ${Slider.Thumb.Shape.BackgroundColor.Hover};
                  border-width: ${Slider.Thumb.Shape.Border.Hover.width};
                  border-style: ${Slider.Thumb.Shape.Border.Hover.style};
                  border-color: ${Slider.Thumb.Shape.Border.Hover.color};
                }

                &::-moz-range-thumb {
                  width: ${Slider.Thumb.Shape.Size.Hover};
                  height: ${Slider.Thumb.Shape.Size.Hover};
                  background-color: ${Slider.Thumb.Shape.BackgroundColor.Hover};
                  border-width: ${Slider.Thumb.Shape.Border.Hover.width};
                  border-style: ${Slider.Thumb.Shape.Border.Hover.style};
                  border-color: ${Slider.Thumb.Shape.Border.Hover.color};
                }
              }

              &:disabled {
                &::-webkit-slider-thumb {
                  width: ${Slider.Thumb.Shape.Size.Disabled};
                  height: ${Slider.Thumb.Shape.Size.Disabled};
                  background-color: ${Slider.Thumb.Shape.BackgroundColor.Disabled};
                  border-width: ${Slider.Thumb.Shape.Border.Disabled.width};
                  border-style: ${Slider.Thumb.Shape.Border.Disabled.style};
                  border-color: ${Slider.Thumb.Shape.Border.Disabled.color};
                }

                &::-moz-range-thumb {
                  width: ${Slider.Thumb.Shape.Size.Disabled};
                  height: ${Slider.Thumb.Shape.Size.Disabled};
                  background-color: ${Slider.Thumb.Shape.BackgroundColor.Disabled};
                  border-width: ${Slider.Thumb.Shape.Border.Disabled.width};
                  border-style: ${Slider.Thumb.Shape.Border.Disabled.style};
                  border-color: ${Slider.Thumb.Shape.Border.Disabled.color};
                }
              }
            }
          }

          & > .inline-legend {
            font-family: ${Slider.Legend.Typography.fontFamily}, Arial, sans-serif;
            font-size: ${Slider.Legend.Typography.fontSize};
            font-weight: ${Slider.Legend.Typography.fontWeight};
            line-height: ${Slider.Legend.Typography.lineHeight};
            color: ${Slider.Legend.TextColor.Default};
          }

          & > .inline-legend-disabled {
            color: ${Slider.Legend.TextColor.Disabled};
          }
        }
      }
    `;
  })}
`;
