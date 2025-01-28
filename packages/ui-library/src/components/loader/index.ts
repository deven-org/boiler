import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from '../../utils/lit/decorators.js';
import { staticStyles } from './index.css.js';

import { TAG_NAME } from './renderFunction.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { ActionSizesType, FeedbackVariantType } from '../../globals/types.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

const propertySanitizer = makeSanitizer((unsanitized: BlrLoaderType) => ({
  sizeVariant: unsanitized.sizeVariant ?? 'md',
  variant: unsanitized.variant ?? 'default',
  theme: unsanitized.theme ?? Themes[0],
}));

export class BlrLoader extends LitElementCustom {
  static styles = [staticStyles];

  private sanitizedController: SanitizationController<
    BlrLoaderType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();
    this.sanitizedController = new SanitizationController<
      BlrLoaderType,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }

  @property() accessor sizeVariant: ActionSizesType | undefined;
  @property() accessor variant: FeedbackVariantType | undefined;
  @property() accessor theme: ThemeType | undefined;

  protected render() {
    const sanitized = this.sanitizedController.values;

    if (sanitized.sizeVariant) {
      const containerClasses = classMap({
        'loader-container': true,
        [sanitized.sizeVariant]: sanitized.sizeVariant,
        [sanitized.theme]: sanitized.theme,
      });

      const loaderClasses = classMap({
        'blr-loader': true,
        [sanitized.variant || '']: sanitized.variant || '',
        [sanitized.sizeVariant]: sanitized.sizeVariant || 'md',
        [sanitized.theme]: sanitized.theme,
      });

      return html`<div class="${containerClasses}">
        <div class="${loaderClasses}" role="status" aria-live="polite"></div>
      </div>`;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrLoader);
}

export type BlrLoaderType = ElementInterface<BlrLoader>;
