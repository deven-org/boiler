import { html } from 'lit';
import { IconType } from '@boiler/icons';

type FormHintType = {
  hintText: string;
  iconName?: IconType;
  errorText?: string;
  hasError?: string;
};

export const BlrFormHint = ({ hintText, iconName, errorText, hasError }: FormHintType) => {
  return html`
    <span class="blr-hint-error ${hasError ? 'blr-error' : 'blr-hint'}">
      <blr-icon name="${iconName}"></blr-icon>
      <span>${hasError ? errorText : hintText}</span>
    </span>
  `;
};
