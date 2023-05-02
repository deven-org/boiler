import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { SizesType } from '../../globals/types';

type HintVariant = 'hint' | 'error';

type FormHintType = {
  message?: string;
  iconName?: string;
  size?: SizesType;
  variant: HintVariant;
};

export const BlrFormHint = ({ message, variant, iconName, size }: FormHintType) => {
  const classes = classMap({
    [`${variant}`]: variant,
  });

  return html`
    <span class="blr-form-hint sm ${classes}">
      <blr-icon icon="${iconName}" size="${size}"></blr-icon>
      <span>${message}</span>
    </span>
  `;
};
