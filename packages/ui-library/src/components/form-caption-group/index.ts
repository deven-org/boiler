import { html } from 'lit';
import { property } from '../../utils/lit/decorators.js';

import { FormSizesType } from '../../globals/types.js';
import { classMap } from 'lit/directives/class-map.js';
import { staticStyles } from './index.css.js';

import { TAG_NAME } from './renderFunction.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

const propertySanitizer = makeSanitizer((unsanitized: BlrFormCaptionGroupType) => ({
  sizeVariant: unsanitized.sizeVariant ?? 'md',
  theme: unsanitized.theme ?? Themes[0],
}));

export class BlrFormCaptionGroup extends LitElementCustom {
  static styles = [staticStyles];

  private sanitizedController: SanitizationController<
    BlrFormCaptionGroupType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();
    this.sanitizedController = new SanitizationController<
      BlrFormCaptionGroupType,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }

  @property() accessor sizeVariant: FormSizesType | undefined;
  @property() accessor theme: ThemeType | undefined;

  protected render() {
    const sanitized = this.sanitizedController.values;

    const classes = classMap({
      'blr-form-caption-group': true,
      [sanitized.sizeVariant]: sanitized.sizeVariant,
      [sanitized.theme]: sanitized.theme,
    });

    return html`
      <div class="${classes}">
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrFormCaptionGroup);
}

export type BlrFormCaptionGroupType = ElementInterface<BlrFormCaptionGroup>;
