import { html } from 'lit';
import { property } from '../../utils/lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CounterVariantType, FormSizesType } from '../../globals/types.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { staticStyles } from './index.css.js';
import { TAG_NAME } from './renderFunction.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

const propertySanitizer = makeSanitizer((unsanitized: BlrCounterType) => ({
  variant: unsanitized.variant ?? 'neutral',
  value: unsanitized.value ?? 0,
  maxValue: unsanitized.maxValue ?? 0,
  sizeVariant: unsanitized.sizeVariant ?? 'md',
  theme: unsanitized.theme ?? Themes[0],
}));
export class BlrCounter extends LitElementCustom {
  private sanitizedController: SanitizationController<
    BlrCounterType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();

    this.sanitizedController = new SanitizationController<
      BlrCounterType,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }

  static styles = [staticStyles];

  @property() accessor variant: CounterVariantType | undefined;
  @property({ type: Number }) accessor value: number | undefined;
  @property({ type: Number }) accessor maxValue: number | undefined;
  @property() accessor sizeVariant: FormSizesType | undefined;
  @property() accessor theme: ThemeType | undefined;

  protected render() {
    const sanitized = this.sanitizedController.values;

    if (sanitized.sizeVariant) {
      const classes = classMap({
        'blr-counter': true,
        [sanitized.variant]: sanitized.variant,
        [sanitized.sizeVariant]: sanitized.sizeVariant,
        [sanitized.theme]: true,
      });

      return html` <div class=${classes}>${sanitized.value} / ${sanitized.maxValue}</div> `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrCounter);
}

export type BlrCounterType = ElementInterface<BlrCounter>;
