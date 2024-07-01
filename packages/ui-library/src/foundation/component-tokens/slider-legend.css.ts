import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

import { ComponentThemeIterator } from "../_tokens-generated/index.pseudo.generated";

export const staticStyles = typeSafeNestedCss/*css*/ `
  .range__field {
    border: 0;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    & > .input-row {
      width: 100%;

      & > .range-wrapper {
        position: relative;
        width: 100%;
        z-index: 20;
      }
    }
  }

  .tooltip {
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

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    width: 100%;
    height: 5px;
    outline: none;
    border-radius: 5px;
    margin: 10px 0;
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

  .range__container {
    & > .range__point {
      margin: 5px 0 0;
    }
  }

  .tick-wrapper {
    position: relative;
    top: 5px;
    width: 100%;

    & > .range__bar-row {
      display: flex;
      justify-content: space-between;
    }
  }

  .legend-wrapper {
    position: relative;
    width: 99%;

    .range__numbers {
      display: flex;
      justify-content: space-between;
    }
  }

  .range__container {
    & > .range__pip {
      margin: 0 0 10px;
      border-width: 1px;
      border-style: solid;
      border-radius: 50%;
      position: relative;
      top: 3px;
    }
  }

  .range__bar {
    width: 100%;
    height: 5px;
    position: relative;
    top: 5px;

    &:last-child {
      display: none;
    }
  }

  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { slider } = cmp;

    return typeSafeCss/*css*/ `
      .input-wrapper.${theme} {
        & > .min-max-value {
          font-family: ${slider.legend.typography.fontFamily}, arial, sans-serif;
          font-size: ${slider.legend.typography.fontSize};
          font-weight: ${slider.legend.typography.fontWeight};
          line-height: ${slider.legend.typography.lineHeight};
          color: ${slider.legend.textcolor.default};
        }
      }

      input[type="range"].${theme} {
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

      .range__container.${theme} {
        & > .range__pip {
          width: ${slider.tickmark.size};
          height: ${slider.tickmark.size};

          &.range__pip-selected {
            border-color: ${slider.tickmark.border.default.active.color};
            background-color: ${slider.tickmark.bgcolor.default.active};

            &.pip-disabled {
              border-color: ${slider.tickmark.border.mute.active.color};
              background-color: ${slider.tickmark.bgcolor.mute.active};
            }
          }

          &.range__pip-unselected {
            border-color: ${slider.tickmark.border.default.inactive.color};
            background-color: ${slider.tickmark.bgcolor.default.inactive};

            &.pip-disabled {
              border-color: ${slider.tickmark.border.mute.inactive.color};
              background-color: ${slider.tickmark.bgcolor.mute.inactive};
            }
          }
        }

        & > .range__point {
          font-family: ${slider.legend.typography.fontFamily}, arial, sans-serif;
          font-size: ${slider.legend.typography.fontSize};
          font-weight: ${slider.legend.typography.fontWeight};
          line-height: ${slider.legend.typography.lineHeight};
          color: ${slider.legend.textcolor.default};
          margin: 5px 0 0;

          &.point-disabled {
            color: ${slider.legend.textcolor.disabled};
          }
        }
      }

      .range__bar.${theme} {
        &.range__bar-selected {
          background-color: ${slider.track.border.default.active.color};

          &.bar-disabled {
            background-color: ${slider.track.border.mute.active.color};
          }
        }

        &.range__bar-unselected {
          background-color: ${slider.track.border.default.inactive.color};

          &.bar-disabled {
            background-color: ${slider.track.border.mute.inactive.color};
          }
        }
      }
    `;
  })}
`;
