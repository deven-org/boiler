import React from 'react';
import { createComponent } from '@lit-labs/react';

import { BlrTextInput } from '.';

export const BlrTextInputReact = createComponent({
  tagName: 'blr-text-input',
  elementClass: BlrTextInput,
  react: React,
});
