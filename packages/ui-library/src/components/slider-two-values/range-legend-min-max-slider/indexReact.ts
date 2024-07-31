import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrRangeLegendMinMaxSlider } from './index.js';

export const BlrLabelRangeSliderReact = createComponent({
  tagName: 'blr-label-range-slider',
  elementClass: BlrRangeLegendMinMaxSlider,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
    onChange: 'pointerdown' as EventName<PointerEvent>,
  },
});
