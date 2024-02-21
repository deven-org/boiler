import { LitElement, html, nothing } from 'lit';
import { TAG_NAME } from './renderFunction';
import { classMap } from 'lit-html/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { formLight, formDark } from '../../foundation/semantic-tokens/form.css';
import { InputSizesType } from '../../globals/types';

export class BlrFormLabel extends LitElement {
  static styles = [];

  @property() label = '';
  @property() labelAppendix?: string;
  @property() sizeVariant?: InputSizesType = 'md';
  @property() forValue: string | undefined;
  @property() theme: ThemeType = 'Light';
  @property() hasError: boolean = false;

  private _error: Error | null = null;

  createRenderRoot() {
    const isInShadowRoot = this.getRootNode() instanceof ShadowRoot;
    if (!isInShadowRoot) {
      // BlrFormLabel is not supposed to be rendered outside of another
      // component's shadow-dom, as it is unencapsulated!
      this._error = new Error(
        "BlrFormLabel is not supposed to be rendered outside of another component's shadow-dom, as it is unencapsulated!"
      );
    }

    // Important: Using this trick, we're opting out of creating a shadow root!
    //
    // This makes this element _not_ encapsulated from its parent, which is
    // necessary for the accessibility tree to see the relation between the
    // label and a form input.
    return this;
  }

  /** Readonly error */
  get error(): Error | null {
    return this._error;
  }

  protected render() {
    if (this.sizeVariant && !this._error) {
      const dynamicStyles = this.theme === 'Light' ? [formLight] : [formDark];

      const labelClasses = classMap({
        'blr-form-label': true,
        [`${this.sizeVariant}`]: this.sizeVariant,
        [`${this.hasError}`]: this.hasError,
      });

      const spanClasses = classMap({
        'blr-form-label-appendix': true,
        [`${this.sizeVariant}`]: this.sizeVariant,
      });

      return html`<style>
          ${dynamicStyles.map((style) => style)}
        </style>
        <label class=${labelClasses} for=${this.forValue || nothing}>
          ${this.label}
          <span class=${spanClasses}>${this.labelAppendix}</span>
        </label>`;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrFormLabel);
}

export type BlrFormLabelType = Omit<BlrFormLabel, keyof LitElement | 'createRenderRoot' | 'error'>;
