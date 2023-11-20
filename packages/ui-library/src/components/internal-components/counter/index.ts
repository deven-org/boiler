import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CounterVariantType, FormSizesType } from '../../../globals/types';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { counterLight, counterDark } from './index.css';
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
    const dynamicStyles = this.theme === 'Light' ? [counterLight] : [counterDark];

    const classes = classMap({
      'blr-counter': true,
      [this.variant]: this.variant,
      [this.size]: this.size,
    });

    return html`
      <style>
        ${dynamicStyles}
      </style>
      <div class=${classes}>${this.current} / ${this.max}</div>
    `;
  }
}

export type BlrCounterType = Omit<BlrCounter, keyof LitElement>;

export const BlrCounterRenderFunction = (params: BlrCounterType) =>
  genericBlrComponentRenderer<BlrCounterType>(TAG_NAME, { ...params });
