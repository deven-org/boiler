import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: sliderLight, tokenizedDark: sliderDark } = renderThemedCssStrings((componentTokens) => {
  const { Forms } = componentTokens;

  return typeSafeNestedCss`
    .range__field {
      border: 0;
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      & > .min-max-value {
        font-family: ${Forms.Slider.Legend.Typography.fontFamily}, Arial, sans-serif;
        font-size: ${Forms.Slider.Legend.Typography.fontSize};
        font-weight: ${Forms.Slider.Legend.Typography.fontWeight};
        line-height: ${Forms.Slider.Legend.Typography.lineHeight};
        color: ${Forms.Slider.Legend.TextColor.Default};
      }

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
        width: ${Forms.Slider.Thumb.Shape.Size.Rest};
        height: ${Forms.Slider.Thumb.Shape.Size.Rest};
        background-color: ${Forms.Slider.Thumb.Shape.BackgroundColor.Rest};
        border-width: ${Forms.Slider.Thumb.Shape.Border.Rest.width};
        border-style: ${Forms.Slider.Thumb.Shape.Border.Rest.style};
        border-color: ${Forms.Slider.Thumb.Shape.Border.Rest.color};
      }

      &::-moz-range-thumb {
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
        width: ${Forms.Slider.TickMark.Size};
        height: ${Forms.Slider.TickMark.Size};
        margin: 0 0 10px;
        border-width: 1px;
        border-style: solid;
        border-radius: 50%;
        position: relative;
        top: 3px;

        &.range__pip-selected {
          border-color: ${Forms.Slider.TickMark.Border.Default.Active.color};
          background-color: ${Forms.Slider.TickMark.BackgroundColor.Default.Active};

          &.pip-disabled {
            border-color: ${Forms.Slider.TickMark.Border.Mute.Active.color};
            background-color: ${Forms.Slider.TickMark.BackgroundColor.Mute.Active};
          }
        }

        &.range__pip-unselected {
          border-color: ${Forms.Slider.TickMark.Border.Default.Inactive.color};
          background-color: ${Forms.Slider.TickMark.BackgroundColor.Default.Inactive};

          &.pip-disabled {
            border-color: ${Forms.Slider.TickMark.Border.Mute.Inactive.color};
            background-color: ${Forms.Slider.TickMark.BackgroundColor.Mute.Inactive};
          }
        }
      }

      & > .range__point {
        font-family: ${Forms.Slider.Legend.Typography.fontFamily}, Arial, sans-serif;
        font-size: ${Forms.Slider.Legend.Typography.fontSize};
        font-weight: ${Forms.Slider.Legend.Typography.fontWeight};
        line-height: ${Forms.Slider.Legend.Typography.lineHeight};
        color: ${Forms.Slider.Legend.TextColor.Default};
        margin: 5px 0 0;

        &.point-disabled {
          color: ${Forms.Slider.Legend.TextColor.Disabled};
        }
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

      &.range__bar-selected {
        background-color: ${Forms.Slider.Track.Border.Default.Active.color};

        &.bar-disabled {
          background-color: ${Forms.Slider.Track.Border.Mute.Active.color};
        }
      }

      &.range__bar-unselected {
        background-color: ${Forms.Slider.Track.Border.Default.Inactive.color};

        &.bar-disabled {
          background-color: ${Forms.Slider.Track.Border.Mute.Inactive.color};
        }
      }
    }
  `;
});
