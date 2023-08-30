import { css } from 'nested-css-to-flat/lit-css';
import { renderThemedCssStrings } from '../foundation/_tokens-generated/index.pseudo.generated';
import { ThemeType } from '../foundation/_tokens-generated/index.themes';

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
            ${muteColor} ${startValueToSlider}%,
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
