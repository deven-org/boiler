import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CounterVariantType, FormSizesType } from '../../../globals/types';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';
import { counterDark, counterLight } from '../../../foundation/component-tokens/feedback.css';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-counter';

@customElement(TAG_NAME)
export class BlrCounter extends LitElement {
  static styles = [];

  @property() variant: CounterVariantType = 'default';
  @property() current = 0;
  @property() max = 0;
  @property() size: FormSizesType = 'md';
  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [formLight, counterLight] : [formDark, counterDark];

    const classes = classMap({
      'blr-counter': true,
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size,
    });

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes}>${this.current} / ${this.max}</div>`;
  }
}

export type BlrCounterType = Omit<BlrCounter, keyof LitElement>;

export const BlrCounterRenderFunction = (params: BlrCounterType) =>
  genericBlrComponentRenderer<BlrCounterType>(TAG_NAME, { ...params });
