import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: sliderLight, tokenizedDark: sliderDark } = renderThemedCssStrings((componentTokens) => {
  const { Forms } = componentTokens;

  return css`
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
        color: ${Forms.Slider.Legend.Color.Default};
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
        width: ${Forms.Slider.Thumb.Sizing.Rest};
        height: ${Forms.Slider.Thumb.Sizing.Rest};
        background-color: ${Forms.Slider.Thumb.Fill.Rest};
        border-width: ${Forms.Slider.Thumb.Border.Rest.width};
        border-style: ${Forms.Slider.Thumb.Border.Rest.style};
        border-color: ${Forms.Slider.Thumb.Border.Rest.color};
      }

      &::-moz-range-thumb {
        border-radius: 50%;
        cursor: pointer;
        position: relative;
        z-index: 2;
        width: ${Forms.Slider.Thumb.Sizing.Rest};
        height: ${Forms.Slider.Thumb.Sizing.Rest};
        background-color: ${Forms.Slider.Thumb.Fill.Rest};
        border-width: ${Forms.Slider.Thumb.Border.Rest.width};
        border-style: ${Forms.Slider.Thumb.Border.Rest.style};
        border-color: ${Forms.Slider.Thumb.Border.Rest.color};
      }

      &:active {
        &::-webkit-slider-thumb {
          width: ${Forms.Slider.Thumb.Sizing.Pressed};
          height: ${Forms.Slider.Thumb.Sizing.Pressed};
          background-color: ${Forms.Slider.Thumb.Fill.Pressed};
          border-width: ${Forms.Slider.Thumb.Border.Pressed.width};
          border-style: ${Forms.Slider.Thumb.Border.Pressed.style};
          border-color: ${Forms.Slider.Thumb.Border.Pressed.color};
        }

        &::-moz-range-thumb {
          width: ${Forms.Slider.Thumb.Sizing.Pressed};
          height: ${Forms.Slider.Thumb.Sizing.Pressed};
          background-color: ${Forms.Slider.Thumb.Fill.Pressed};
          border-width: ${Forms.Slider.Thumb.Border.Pressed.width};
          border-style: ${Forms.Slider.Thumb.Border.Pressed.style};
          border-color: ${Forms.Slider.Thumb.Border.Pressed.color};
        }
      }

      &:hover {
        &::-webkit-slider-thumb {
          width: ${Forms.Slider.Thumb.Sizing.Hover};
          height: ${Forms.Slider.Thumb.Sizing.Hover};
          background-color: ${Forms.Slider.Thumb.Fill.Hover};
          border-width: ${Forms.Slider.Thumb.Border.Hover.width};
          border-style: ${Forms.Slider.Thumb.Border.Hover.style};
          border-color: ${Forms.Slider.Thumb.Border.Hover.color};
        }

        &::-moz-range-thumb {
          width: ${Forms.Slider.Thumb.Sizing.Hover};
          height: ${Forms.Slider.Thumb.Sizing.Hover};
          background-color: ${Forms.Slider.Thumb.Fill.Hover};
          border-width: ${Forms.Slider.Thumb.Border.Hover.width};
          border-style: ${Forms.Slider.Thumb.Border.Hover.style};
          border-color: ${Forms.Slider.Thumb.Border.Hover.color};
        }
      }

      &:disabled {
        &::-webkit-slider-thumb {
          width: ${Forms.Slider.Thumb.Sizing.Disabled};
          height: ${Forms.Slider.Thumb.Sizing.Disabled};
          background-color: ${Forms.Slider.Thumb.Fill.Disabled};
          border-width: ${Forms.Slider.Thumb.Border.Disabled.width};
          border-style: ${Forms.Slider.Thumb.Border.Disabled.style};
          border-color: ${Forms.Slider.Thumb.Border.Disabled.color};
        }

        &::-moz-range-thumb {
          width: ${Forms.Slider.Thumb.Sizing.Disabled};
          height: ${Forms.Slider.Thumb.Sizing.Disabled};
          background-color: ${Forms.Slider.Thumb.Fill.Disabled};
          border-width: ${Forms.Slider.Thumb.Border.Disabled.width};
          border-style: ${Forms.Slider.Thumb.Border.Disabled.style};
          border-color: ${Forms.Slider.Thumb.Border.Disabled.color};
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
        width: ${Forms.Slider.TickMark.Sizing};
        height: ${Forms.Slider.TickMark.Sizing};
        margin: 0 0 10px;
        border-width: 1px;
        border-style: solid;
        border-radius: 50%;
        position: relative;
        top: 3px;

        &.range__pip-selected {
          border-color: ${Forms.Slider.TickMark.Stroke.Active.Default};
          background-color: ${Forms.Slider.TickMark.Fill.Active.Default};

          &.pip-disabled {
            border-color: ${Forms.Slider.TickMark.Stroke.Active.Mute};
            background-color: ${Forms.Slider.TickMark.Fill.Active.Mute};
          }
        }

        &.range__pip-unselected {
          border-color: ${Forms.Slider.TickMark.Stroke.Inactive.Default};
          background-color: ${Forms.Slider.TickMark.Fill.Inactive.Default};

          &.pip-disabled {
            border-color: ${Forms.Slider.TickMark.Stroke.Inactive.Mute};
            background-color: ${Forms.Slider.TickMark.Fill.Inactive.Mute};
          }
        }
      }

      & > .range__point {
        font-family: ${Forms.Slider.Legend.Typography.fontFamily}, Arial, sans-serif;
        font-size: ${Forms.Slider.Legend.Typography.fontSize};
        font-weight: ${Forms.Slider.Legend.Typography.fontWeight};
        line-height: ${Forms.Slider.Legend.Typography.lineHeight};
        color: ${Forms.Slider.Legend.Color.Default};
        margin: 5px 0 0;

        &.point-disabled {
          color: ${Forms.Slider.Legend.Color.Disabled};
        }

        &.inline-legend-error {
          color: #edabab;
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
        background-color: ${Forms.Slider.Track.Stroke.Active.Default};

        &.bar-disabled {
          background-color: ${Forms.Slider.Track.Stroke.Active.Mute};
        }
      }

      &.range__bar-unselected {
        background-color: ${Forms.Slider.Track.Stroke.Inactive.Default};

        &.bar-disabled {
          background-color: ${Forms.Slider.Track.Stroke.Inactive.Mute};
        }
      }

      &.range__bar-error {
        background-color: #edabab;
      }
    }
  `;
});
