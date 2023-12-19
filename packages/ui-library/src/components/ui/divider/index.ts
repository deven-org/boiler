import { LitElement, html } from 'lit-element';
import { customElement, property } from 'lit-element/decorators.js';
import { DividerVariationTypes } from '../../../globals/types';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';
import { classMap } from 'lit-html/directives/class-map.js';
import { dividerDark, dividerLight } from './index.css';

const TAG_NAME = 'blr-divider';

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

export const BlrDividerRenderFunction = (params: BlrDividerType) =>
  genericBlrComponentRenderer<BlrDividerType>(TAG_NAME, { ...params });
