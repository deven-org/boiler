import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustomLight, styleCustomDark } from './index.css';
import { ActionSizesType, FeedbackVariantType } from '../../../globals/types';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-loader';

@customElement(TAG_NAME)
export class BlrLoader extends LitElement {
  static styles = [];

  @property() size?: ActionSizesType = 'md';
  @property() variant?: FeedbackVariantType;
  @property() loadingStatus!: string;

  @property() theme: ThemeType = 'Light';

  protected render() {
    if (this.size) {
      const dynamicStyles = this.theme === 'Light' ? [styleCustomLight] : [styleCustomDark];

      const classes = classMap({
        'blr-loader': true,
        [`${this.variant}`]: this.variant || '',
        [`${this.size}`]: this.size || 'md',
      });

      return html`<style>
          ${dynamicStyles.map((style) => style)}
        </style>
        <div class="${classes}" role="status" aria-live="polite" ?aria-label=${this.loadingStatus}></div>`;
    }
  }
}

export type BlrLoaderType = Omit<BlrLoader, keyof LitElement>;

export const BlrLoaderRenderFunction = (params: BlrLoaderType) =>
  genericBlrComponentRenderer<BlrLoaderType>(TAG_NAME, { ...params });
