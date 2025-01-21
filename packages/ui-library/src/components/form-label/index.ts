import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { TAG_NAME } from './renderFunction.js';
import { classMap } from 'lit/directives/class-map.js';
import { property } from '../../utils/lit/decorators.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css.js';
import { InputSizesType } from '../../globals/types.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

const propertySanitizer = makeSanitizer((unsanitized: BlrFormLabelType) => ({
  label: unsanitized.label ?? 'Label-text',
  sizeVariant: unsanitized.sizeVariant ?? 'md',
  theme: unsanitized.theme ?? Themes[0],
  hasError: unsanitized.hasError ?? false,
  labelAppendix: unsanitized.labelAppendix ?? 'Appendix',
}));

export class BlrFormLabel extends LitElementCustom {
  static styles = [];

  private sanitizedController: SanitizationController<
    BlrFormLabelType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();

    this.sanitizedController = new SanitizationController<
      BlrFormLabelType,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }

  @property() accessor label: string | undefined;
  @property() accessor labelAppendix: string | undefined;
  @property() accessor sizeVariant: InputSizesType | undefined;
  @property() accessor forValue: string | undefined;
  @property() accessor theme: ThemeType | undefined;
  @property({ type: Boolean }) accessor hasError: boolean | undefined;

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
    const sanitized = this.sanitizedController.values;
    if (sanitized.sizeVariant && !this._error) {
      const dynamicStyles = [staticFormStyles];

      const labelClasses = classMap({
        'blr-form-label': true,
        [sanitized.sizeVariant]: sanitized.sizeVariant,
        'error': sanitized.hasError,
        [sanitized.theme]: sanitized.theme,
      });

      const spanClasses = classMap({
        'blr-form-label-appendix': true,
        [sanitized.sizeVariant]: sanitized.sizeVariant,
        [sanitized.theme]: sanitized.theme,
      });

      // Since it doesnt have a shadowRoot, lit cant apply styles to it.
      // We have to render styles inline here, which is not great
      return html` ${unsafeHTML(`<style>${dynamicStyles.map((style) => style.cssText).join('\n')}</style>`)}
        <label class=${labelClasses} for=${ifDefined(this.forValue)}>
          ${sanitized.label}
          <span class=${spanClasses}>${sanitized.labelAppendix}</span>
        </label>`;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrFormLabel);
}

export type BlrFormLabelType = ElementInterface<BlrFormLabel>;
