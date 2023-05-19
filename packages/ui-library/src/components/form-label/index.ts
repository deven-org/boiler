import { html } from 'lit';
import { ifNotEmptyString } from '../../utils/if-not-empty-string';

type FormLabelType = {
  labelText: string;
  forInputId?: string;
  labelAppendix?: string;
};

export const BlrFormLabel = ({ labelText, forInputId, labelAppendix: additionalInfo }: FormLabelType) => {
  return html`
    <label class="blr-form-label" for="${ifNotEmptyString(forInputId)}">
      ${labelText}
      <span class="blr-form-label-appendix">${additionalInfo}</span>
    </label>
  `;
};
