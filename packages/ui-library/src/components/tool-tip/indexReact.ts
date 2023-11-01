import React from 'react';
import { createComponent } from '@lit/react';

import { BlrToolTip } from '.';

export const BlrToolTipReact = createComponent({
  tagName: 'blr-tool-tip',
  elementClass: BlrToolTip,
  react: React,
});
