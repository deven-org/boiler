import React from 'react';
import { createComponent } from '@lit-labs/react';

import { BlrTooltipUsingFloatingUI } from '.';

export const BlrToolTipUsingFloatingUIReact = createComponent({
  tagName: 'blr-tooltip-using-floating-ui',
  elementClass: BlrTooltipUsingFloatingUI,
  react: React,
});
