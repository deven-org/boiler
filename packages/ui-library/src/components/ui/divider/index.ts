import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DividerVariationTypes } from '../../../globals/types';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { classMap } from 'lit/directives/class-map.js';
import { dividerDark, dividerLight } from './index.css';

export const TAG_NAME = 'blr-divider';

@customElement(TAG_NAME)
export class BlrDivider extends LitElement {
  @property() directionVariant: DividerVariationTypes = 'vertical';
  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [dividerLight] : [dividerDark];

    const dividerClasses = classMap({
      'blr-divider': true,
      [this.directionVariant]: true,
    });

    return html`
      <style>
        ${dynamicStyles}
      </style>
      <div class="${dividerClasses}"></div>
    `;
  }
}

export type BlrDividerType = Omit<BlrDivider, keyof LitElement>;
