import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { InputSizesType } from '../../globals/types';

type HintVariant = 'hint' | 'error';

type FormHintType = {
  message?: string;
  iconName?: string;
  variant: HintVariant;
  size: InputSizesType;
};

export const BlrFormHint = ({ message, variant, iconName, size }: FormHintType) => {
  const classes = classMap({
    [`${variant}`]: variant,
  });

  return html`
    <span class="blr-form-hint ${classes}">
      <blr-icon icon="${iconName}" size="${size}" aria-hidden></blr-icon>
      <span class="blr-caption-text">${message}</span>
    </span>
  `;
};
