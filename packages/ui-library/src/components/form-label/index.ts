import { html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { TAG_NAME } from './renderFunction.js';
import { classMap } from 'lit/directives/class-map.js';
import { property } from '../../utils/lit/decorators.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css.js';
import { InputSizesType } from '../../globals/types.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';

export class BlrFormLabel extends LitElementCustom {
  static styles = [];

  @property() accessor label = '';
  @property() accessor labelAppendix: string | undefined;
  @property() accessor sizeVariant: InputSizesType | undefined = 'md';
  @property() accessor forValue: string | undefined;
  @property() accessor theme: ThemeType = Themes[0];
  @property() accessor hasError: boolean = false;

  private _error: Error | null = null;

  protected createRenderRoot() {
    const isInShadowRoot = this.getRootNode() instanceof ShadowRoot;
    if (!isInShadowRoot) {
      // BlrFormLabel is not supposed to be rendered outside of another
      // component's shadow-dom, as it is unencapsulated!
      this._error = new Error(
        "BlrFormLabel is not supposed to be rendered outside of another component's shadow-dom, as it is unencapsulated!",
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
  get error(): Error | undefined {
    return this._error ?? undefined;
  }

  protected render() {
    if (this.sizeVariant && !this._error) {
      const dynamicStyles = [staticFormStyles];

      const labelClasses = classMap({
        'blr-form-label': true,
        [this.sizeVariant]: this.sizeVariant,
        'error': this.hasError,
        [this.theme]: this.theme,
      });

      const spanClasses = classMap({
        'blr-form-label-appendix': true,
        [this.sizeVariant]: this.sizeVariant,
        [this.theme]: this.theme,
      });

      // Since it doesnt have a shadowRoot, lit cant apply styles to it.
      // We have to render styles inline here, which is not great
      return html` ${unsafeHTML(`<style>${dynamicStyles.map((style) => style.cssText).join('\n')}</style>`)}
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

export type BlrFormLabelType = ElementInterface<BlrFormLabel>;
