import { css } from './css-in-ts/nested-typesafe-css-literals.js';
import { ThemeType } from '../foundation/_tokens-generated/index.themes.js';

import type * as ComponentTokenTypes from '../foundation/_tokens-generated/module_declarations/__component-tokens.Licht_value.generated.js';

/*
// # # 
// # #  Not sure why this is a problem. Browser explains, the environment does not support async 
// # #  In the meantime I do the import as hardcoded as always

try {
  const { Themes } = await import('../foundation/_tokens-generated/index.themes.js');

  const { componentTokens: componentTokens_l } = await import(
    `../foundation/_tokens-generated/index.${Themes[0]}.generated.js`
  );
  const { componentTokens: componentTokens_d } = await import(
    `../foundation/_tokens-generated/index.${Themes[1]}.generated.js`
  );

  console.log(componentTokens_l);
  componentTokensLight = componentTokens_l;
  componentTokensDark = componentTokens_d;
} catch (error) {
  const msg = typeof error === 'string' ? error : 'something happend here, and it is bad';
  throw new Error(msg);
}
*/

import { componentTokens as componentTokensLight } from '../foundation/_tokens-generated/index.Licht_value.generated.js';
import { componentTokens as componentTokensDark } from '../foundation/_tokens-generated/index.Dunkel_value.generated.js';

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

if (!componentTokensDark) {
  throw new Error('componentTokens dark are undefined');
}
if (!componentTokensLight) {
  throw new Error('componentTokens light are undefined');
}

const ThemedTokens: { [P in ThemeType]: typeof ComponentTokenTypes.default.cmp } = {
  Dunkel_value: componentTokensDark.cmp,
  Licht_value: componentTokensLight.cmp,
};

export const generateRangeBar = (
  theme: ThemeType,
  startValueToSlider: number,
  endValueToSlider: number,
  disabled?: boolean,
  twoKnobs?: string,
  isMinLesserThanMax?: boolean,
) => {
  const { slider } = ThemedTokens[theme];

  const activeDefaultColor = slider.track.border.default.active.color;
  const activeMuteColor = slider.track.border.default.inactive.color;

  const disabledDefaultColor = slider.track.border.mute.active.color;
  const disabledMuteColor = slider.track.border.mute.inactive.color;

  const defaultColor = disabled ? disabledDefaultColor : activeDefaultColor;
  const muteColor = disabled ? disabledMuteColor : activeMuteColor;

  const twoKnobStartValue = isMinLesserThanMax ? startValueToSlider : endValueToSlider;
  const twoKnobEndValue = isMinLesserThanMax ? endValueToSlider : startValueToSlider;

  const generateGradient = twoKnobs
    ? `linear-gradient(
            to right,
            ${muteColor} ${twoKnobStartValue + 1}%,
            ${defaultColor} ${twoKnobStartValue}%,
            ${defaultColor} ${twoKnobEndValue}%,
            ${muteColor} ${twoKnobEndValue}%
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
};

export const setOnclickValue = (value: number, stepperNumber: number, btnType: string, arrLength?: number) => {
  const incConditionValue = arrLength !== undefined ? arrLength - 1 : 100;

  if (btnType === 'INC' && value < incConditionValue) {
    return value + stepperNumber;
  } else if (btnType === 'DEC' && value > 0) {
    return value - stepperNumber;
  }
};
