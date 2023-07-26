import { LitElement, html, nothing } from 'lit';
import { InputSizesType } from '../../../globals/types';
import { form } from '../../../foundation/semantic-tokens/form.css';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';

@customElement('blr-form-label')
export class BlrFormLabel extends LitElement {
  static styles = [form];

  @property() labelText = '';
  @property() labelAppendix?: string;
  @property() labelSize: InputSizesType = 'md';
  @property() forValue: string | undefined;

  protected render() {
    const labelClasses = classMap({
      'blr-form-label': true,
      [`${this.labelSize}`]: this.labelSize,
    });

    const spanClasses = classMap({
      'blr-form-label-appendix': true,
      [`${this.labelSize}`]: this.labelSize,
    });

    return html`<label class=${labelClasses} for=${this.forValue || nothing}>
      ${this.labelText}
      <span class=${spanClasses}>${this.labelAppendix}</span>
    </label>`;
  }
}

export type BlrFormLabelType = Omit<BlrFormLabel, keyof LitElement>;

export const BlrFormLabelRenderFunction = ({ labelText, labelAppendix, labelSize, forValue }: BlrFormLabelType) => {
  return html`<blr-form-label
    .labelText=${labelText}
    .labelAppendix=${labelAppendix}
    .labelSize=${labelSize}
    .forValue=${forValue}
  ></blr-form-hint>`;
};
