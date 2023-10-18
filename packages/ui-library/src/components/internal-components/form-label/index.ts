import { LitElement, html, nothing } from 'lit';
import { InputSizesType, LabelVariantType } from '../../../globals/types';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-form-label';

@customElement(TAG_NAME)
export class BlrFormLabel extends LitElement {
  static styles = [];

  @property() labelText = '';
  @property() labelAppendix?: string;
  @property() labelSize: InputSizesType = 'md';
  @property() forValue: string | undefined;
  @property() theme: ThemeType = 'Light';
  @property() variant: LabelVariantType = 'label';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [formLight] : [formDark];

    const labelClasses = classMap({
      'blr-form-label': true,
      [`${this.labelSize}`]: this.labelSize,
      [`${this.variant}`]: this.variant,
    });

    const spanClasses = classMap({
      'blr-form-label-appendix': true,
      [`${this.labelSize}`]: this.labelSize,
    });

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <label class=${labelClasses} for=${this.forValue || nothing}>
        ${this.labelText}
        <span class=${spanClasses}>${this.labelAppendix}</span>
      </label>`;
  }
}

export type BlrFormLabelType = Omit<BlrFormLabel, keyof LitElement>;

export const BlrFormLabelRenderFunction = (params: BlrFormLabelType) =>
  genericBlrComponentRenderer<BlrFormLabelType>(TAG_NAME, { ...params });
