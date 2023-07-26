import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CounterVariantType, FormSizesType } from '../../../globals/types';
import { form } from '../../../foundation/semantic-tokens/form.css';
import { counter } from '../../../foundation/component-tokens/feedback.css';

@customElement('blr-counter')
export class BlrCounter extends LitElement {
  static styles = [form, counter];

  @property() variant: CounterVariantType = 'default';
  @property() current = 0;
  @property() max = 0;
  @property() size: FormSizesType = 'md';

  protected render() {
    const classes = classMap({
      'blr-counter': true,
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size,
    });

    return html`<div class=${classes}>${this.current} / ${this.max}</div>`;
  }
}

export type BlrCounterType = Omit<BlrCounter, keyof LitElement>;

export const BlrCounterRenderFunction = ({ variant, current, max, size }: BlrCounterType) => {
  return html`<blr-counter .variant=${variant} .current=${current} .max=${max} .size=${size}></blr-counter>`;
};
