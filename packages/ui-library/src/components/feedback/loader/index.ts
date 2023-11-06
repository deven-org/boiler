import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { loadingSpinnerDark, loadingSpinnerLight } from '../../../foundation/component-tokens/feedback.css';
import { ActionSizesType, FeedbackVariantType } from '../../../globals/types';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-loader';

@customElement(TAG_NAME)
export class BlrLoader extends LitElement {
  static styles = [styleCustom];

  @property() size?: ActionSizesType = 'md';
  @property() variant?: FeedbackVariantType;
  @property() loadingStatus!: string;

  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [loadingSpinnerLight] : [loadingSpinnerDark];

    const classes = classMap({
      'blr-loading-spinner': true,
      [`${this.variant}`]: this.variant || '',
      [`${this.size}`]: this.size || 'md',
    });

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class="blr-loader" role="status" aria-live="polite" ?aria-label=${this.loadingStatus}>
        <div class=${classes}></div>
      </div>`;
  }
}

export type BlrLoaderType = Omit<BlrLoader, keyof LitElement>;

export const BlrLoaderRenderFunction = (params: BlrLoaderType) =>
  genericBlrComponentRenderer<BlrLoaderType>(TAG_NAME, { ...params });
