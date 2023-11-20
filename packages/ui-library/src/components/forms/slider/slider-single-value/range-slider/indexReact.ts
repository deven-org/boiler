import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrRangeSlider } from '.';

export const BlrLabelRangeSliderReact = createComponent({
  tagName: 'blr-label-range-slider',
  elementClass: BlrRangeSlider,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
    onChange: 'pointerdown' as EventName<PointerEvent>,
  },
});
