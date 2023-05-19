import { html, nothing } from 'lit';

type FormLabelType = {
  labelText: string;
  forInputId?: string;
  labelAppendix?: string;
};

export const BlrFormLabel = ({ labelText, forInputId, labelAppendix: additionalInfo }: FormLabelType) => {
  return html`
    <label class="blr-form-label" for="${forInputId || nothing}">
      ${labelText}
      <span class="blr-form-label-appendix">${additionalInfo}</span>
    </label>
  `;
};
