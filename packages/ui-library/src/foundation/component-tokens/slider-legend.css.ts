import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: sliderLight, tokenizedDark: sliderDark } = renderThemedCssStrings((componentTokens) => {
  const { Slider } = componentTokens.cmp;

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
        font-family: ${Slider.Legend.Typography.fontFamily}, Arial, sans-serif;
        font-size: ${Slider.Legend.Typography.fontSize};
        font-weight: ${Slider.Legend.Typography.fontWeight};
        line-height: ${Slider.Legend.Typography.lineHeight};
        color: ${Slider.Legend.TextColor.Default};
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
        width: ${Slider.Thumb.Shape.Size.Rest};
        height: ${Slider.Thumb.Shape.Size.Rest};
        background-color: ${Slider.Thumb.Shape.BackgroundColor.Rest};
        border-width: ${Slider.Thumb.Shape.Border.Rest.width};
        border-style: ${Slider.Thumb.Shape.Border.Rest.style};
        border-color: ${Slider.Thumb.Shape.Border.Rest.color};
      }

      &::-moz-range-thumb {
        border-radius: 50%;
        cursor: pointer;
        position: relative;
        z-index: 2;
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
        width: ${Slider.TickMark.Size};
        height: ${Slider.TickMark.Size};
        margin: 0 0 10px;
        border-width: 1px;
        border-style: solid;
        border-radius: 50%;
        position: relative;
        top: 3px;

        &.range__pip-selected {
          border-color: ${Slider.TickMark.Border.Default.Active.color};
          background-color: ${Slider.TickMark.BackgroundColor.Default.Active};

          &.pip-disabled {
            border-color: ${Slider.TickMark.Border.Mute.Active.color};
            background-color: ${Slider.TickMark.BackgroundColor.Mute.Active};
          }
        }

        &.range__pip-unselected {
          border-color: ${Slider.TickMark.Border.Default.Inactive.color};
          background-color: ${Slider.TickMark.BackgroundColor.Default.Inactive};

          &.pip-disabled {
            border-color: ${Slider.TickMark.Border.Mute.Inactive.color};
            background-color: ${Slider.TickMark.BackgroundColor.Mute.Inactive};
          }
        }
      }

      & > .range__point {
        font-family: ${Slider.Legend.Typography.fontFamily}, Arial, sans-serif;
        font-size: ${Slider.Legend.Typography.fontSize};
        font-weight: ${Slider.Legend.Typography.fontWeight};
        line-height: ${Slider.Legend.Typography.lineHeight};
        color: ${Slider.Legend.TextColor.Default};
        margin: 5px 0 0;

        &.point-disabled {
          color: ${Slider.Legend.TextColor.Disabled};
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
        background-color: ${Slider.Track.Border.Default.Active.color};

        &.bar-disabled {
          background-color: ${Slider.Track.Border.Mute.Active.color};
        }
      }

      &.range__bar-unselected {
        background-color: ${Slider.Track.Border.Default.Inactive.color};

        &.bar-disabled {
          background-color: ${Slider.Track.Border.Mute.Inactive.color};
        }
      }
    }
  `;
});
