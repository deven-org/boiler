import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrRangeLegendSlider } from '.';

export const BlrLabelRangeLegendSliderReact = createComponent({
  tagName: 'blr-label-range-legend-slider',
  elementClass: BlrRangeLegendSlider,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
    onChange: 'pointerdown' as EventName<PointerEvent>,
  },
});
