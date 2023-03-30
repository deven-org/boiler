import { html } from 'lit';

type FormLabelType = {
  labelText: string;
  labelAppendix?: string;
};

export const BlrFormLabel = ({ labelText, labelAppendix: additionalInfo }: FormLabelType) => {
  return html`
    <label class="blr-form-label">
      ${labelText}
      <span class="blr-form-label-appendix">${additionalInfo}</span>
    </label>
  `;
};
