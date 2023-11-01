import React from 'react';
import { createComponent } from '@lit/react';

import { BlrIcon } from '.';

export const BlrTextButtonReact = createComponent({
  tagName: 'blr-icon',
  elementClass: BlrIcon,
  react: React,
});
