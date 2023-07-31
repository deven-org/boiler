import { LitElement, html, nothing } from 'lit';
import { InputSizesType } from '../../../globals/types';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';

@customElement('blr-form-label')
export class BlrFormLabel extends LitElement {
  static styles = [];

  @property() labelText = '';
  @property() labelAppendix?: string;
  @property() labelSize: InputSizesType = 'md';
  @property() forValue: string | undefined;
  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [formLight] : [formDark];

    const labelClasses = classMap({
      'blr-form-label': true,
      [`${this.labelSize}`]: this.labelSize,
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

export const BlrFormLabelRenderFunction = ({
  labelText,
  labelAppendix,
  labelSize,
  forValue,
  theme,
}: BlrFormLabelType) => {
  return html`<blr-form-label
    .labelText=${labelText}
    .labelAppendix=${labelAppendix}
    .labelSize=${labelSize}
    .forValue=${forValue}
    .theme=${theme}
  ></blr-form-hint>`;
};
