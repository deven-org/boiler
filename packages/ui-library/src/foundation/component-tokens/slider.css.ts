import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

import { ComponentThemeIterator } from "../_tokens-generated/index.pseudo.generated";

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
    const { slider } = cmp;

    return typeSafeCss/*css*/ `
      .blr-slider.${theme} {
        & .input-wrapper {
          & > .range-wrapper {
            & > input[type="range"] {
              &::-webkit-slider-thumb {
                width: ${slider.thumb.shape.size.rest};
                height: ${slider.thumb.shape.size.rest};
                background-color: ${slider.thumb.shape.bgcolor.rest};
                border-width: ${slider.thumb.shape.border.rest.width};
                border-style: ${slider.thumb.shape.border.rest.style};
                border-color: ${slider.thumb.shape.border.rest.color};
              }

              &::-moz-range-thumb {
                width: ${slider.thumb.shape.size.rest};
                height: ${slider.thumb.shape.size.rest};
                background-color: ${slider.thumb.shape.bgcolor.rest};
                border-width: ${slider.thumb.shape.border.rest.width};
                border-style: ${slider.thumb.shape.border.rest.style};
                border-color: ${slider.thumb.shape.border.rest.color};
              }

              &:active {
                &::-webkit-slider-thumb {
                  width: ${slider.thumb.shape.size.pressed};
                  height: ${slider.thumb.shape.size.pressed};
                  background-color: ${slider.thumb.shape.bgcolor.pressed};
                  border-width: ${slider.thumb.shape.border.pressed.width};
                  border-style: ${slider.thumb.shape.border.pressed.style};
                  border-color: ${slider.thumb.shape.border.pressed.color};
                }

                &::-moz-range-thumb {
                  width: ${slider.thumb.shape.size.pressed};
                  height: ${slider.thumb.shape.size.pressed};
                  background-color: ${slider.thumb.shape.bgcolor.pressed};
                  border-width: ${slider.thumb.shape.border.pressed.width};
                  border-style: ${slider.thumb.shape.border.pressed.style};
                  border-color: ${slider.thumb.shape.border.pressed.color};
                }
              }

              &:hover {
                &::-webkit-slider-thumb {
                  width: ${slider.thumb.shape.size.hover};
                  height: ${slider.thumb.shape.size.hover};
                  background-color: ${slider.thumb.shape.bgcolor.hover};
                  border-width: ${slider.thumb.shape.border.hover.width};
                  border-style: ${slider.thumb.shape.border.hover.style};
                  border-color: ${slider.thumb.shape.border.hover.color};
                }

                &::-moz-range-thumb {
                  width: ${slider.thumb.shape.size.hover};
                  height: ${slider.thumb.shape.size.hover};
                  background-color: ${slider.thumb.shape.bgcolor.hover};
                  border-width: ${slider.thumb.shape.border.hover.width};
                  border-style: ${slider.thumb.shape.border.hover.style};
                  border-color: ${slider.thumb.shape.border.hover.color};
                }
              }

              &:disabled {
                &::-webkit-slider-thumb {
                  width: ${slider.thumb.shape.size.disabled};
                  height: ${slider.thumb.shape.size.disabled};
                  background-color: ${slider.thumb.shape.bgcolor.disabled};
                  border-width: ${slider.thumb.shape.border.disabled.width};
                  border-style: ${slider.thumb.shape.border.disabled.style};
                  border-color: ${slider.thumb.shape.border.disabled.color};
                }

                &::-moz-range-thumb {
                  width: ${slider.thumb.shape.size.disabled};
                  height: ${slider.thumb.shape.size.disabled};
                  background-color: ${slider.thumb.shape.bgcolor.disabled};
                  border-width: ${slider.thumb.shape.border.disabled.width};
                  border-style: ${slider.thumb.shape.border.disabled.style};
                  border-color: ${slider.thumb.shape.border.disabled.color};
                }
              }
            }
          }

          & > .inline-legend {
            font-family: ${slider.legend.typography.fontFamily}, arial, sans-serif;
            font-size: ${slider.legend.typography.fontSize};
            font-weight: ${slider.legend.typography.fontWeight};
            line-height: ${slider.legend.typography.lineHeight};
            color: ${slider.legend.textcolor.default};
          }

          & > .inline-legend-disabled {
            color: ${slider.legend.textcolor.disabled};
          }
        }
      }
    `;
  })}
`;
