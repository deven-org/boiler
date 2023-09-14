import { css } from 'nested-css-to-flat/lit-css';
import { renderThemedCssStrings } from '../foundation/_tokens-generated/index.pseudo.generated';
import { ThemeType } from '../foundation/_tokens-generated/index.themes';

export const findToolTipPosition = (minVal: string, maxVal: string, offsetWidthVal: number, value: number) => {
  const min = parseFloat(minVal);
  const max = parseFloat(maxVal);
  const width = offsetWidthVal;

  // Calculate the percentage value
  const percentage = ((value - min) / (max - min)) * 100;

  // Calculate the tooltip position based on the percentage and width
  const tooltipPosition = (percentage / 100) * width - 10;

  return `${tooltipPosition.toString()}px`;
};

export const findNearestValue = (min: number, max: number, givenValue: number) => {
  const percentage = givenValue / 100;
  const range = max - min;
  const nearestValue = min + range * percentage;
  return Math.round(nearestValue);
};

export const findPercentage = (min: number, max: number, value: number) => {
  const range = max - min;
  const difference = value - min;
  const percentage = (difference / range) * 100;
  return Math.round(percentage);
};

export const generateRangeBar = (
  theme: ThemeType,
  startValueToSlider: number,
  endValueToSlider: number,
  disabled?: boolean,
  twoKonbs?: boolean
) => {
  const { tokenizedLight, tokenizedDark } = renderThemedCssStrings((componentTokens) => {
    const { Forms } = componentTokens;

    const activeDefaultColor = Forms.Slider.Track.Stroke.Active.Default;
    const activeMuteColor = Forms.Slider.Track.Stroke.Inactive.Default;

    const disabledDefaultColor = Forms.Slider.Track.Stroke.Active.Mute;
    const disbledMuteColor = Forms.Slider.Track.Stroke.Inactive.Mute;

    const defaultColor = disabled ? disabledDefaultColor : activeDefaultColor;
    const muteColor = disabled ? disbledMuteColor : activeMuteColor;

    const generateGradient = twoKonbs
      ? `linear-gradient(
            to right,
            ${muteColor} ${startValueToSlider + 1}%,
            ${defaultColor} ${startValueToSlider}%,
            ${defaultColor} ${endValueToSlider}%,
            ${muteColor} ${endValueToSlider}%
          )`
      : `linear-gradient(
          to right,
          ${defaultColor} 0%,
          ${defaultColor} ${startValueToSlider}%,
          ${muteColor} ${startValueToSlider}%,
          ${muteColor} 100%
        )`;

    return css`
      .blr-slider-bar {
        background: ${generateGradient};
      }
    `;
  });

  return theme === 'Light' ? [tokenizedLight] : [tokenizedDark];
};

export const setOnclickValue = (value: number, stepperNumber: number, btnType: string, arrLength?: number) => {
  const incConditionValue = arrLength !== undefined ? arrLength - 1 : 100;

  if (btnType === 'INC' && value < incConditionValue) {
    return value + stepperNumber;
  } else if (btnType === 'DEC' && value > 0) {
    return value - stepperNumber;
  }
};
