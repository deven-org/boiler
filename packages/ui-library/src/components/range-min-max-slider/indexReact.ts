import React from 'react';
import { createComponent, EventName } from '@lit/react';

import { BlrRangeMinMaxSlider } from '.';

export const BlrLabelRangeSliderReact = createComponent({
  tagName: 'blr-label-range-slider',
  elementClass: BlrRangeMinMaxSlider,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
    onChange: 'pointerdown' as EventName<PointerEvent>,
  },
});
