import { LitElement, TemplateResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { TAG_NAME } from './renderFunction';
import { captionDark, captionLight } from './index.css';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { CaptionVariantType, FormSizesType, SizesType } from '../../globals/types';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { BlrIconRenderFunction } from '../icon/renderFunction';

export class BlrFormCaption extends LitElement {
  static styles = [];

  @property() message?: string;
  @property() icon?: SizelessIconType;
  @property() variant: CaptionVariantType = 'hint';
  @property() sizeVariant?: FormSizesType = 'md';
  @property() childElement?: TemplateResult<1>;
  @property() theme: ThemeType = 'Light';

  protected render() {
    if (this.sizeVariant) {
      const dynamicStyles = this.theme === 'Light' ? [captionLight] : [captionDark];

      const classes = classMap({
        'blr-form-caption': true,
        [`${this.variant}`]: this.variant,
        [`${this.sizeVariant}`]: this.sizeVariant,
      });

      const iconClasses = classMap({
        'blr-icon': true,
        [this.sizeVariant]: this.sizeVariant,
      });

      const iconSizeVariant = getComponentConfigToken([
        'cmp',
        'CaptionComponent',
        'Icon',
        'SizeVariant',
        this.sizeVariant.toUpperCase(),
      ]).toLowerCase() as SizesType;

      return html`
        <style>
          ${dynamicStyles}
        </style>
        <div class=${classes}>
          ${this.icon
            ? BlrIconRenderFunction(
                {
                  icon: calculateIconName(
                    this.variant === 'hint' || this.variant === 'error' ? this.icon : '',
                    iconSizeVariant
                  ),
                  sizeVariant: iconSizeVariant,
                  classMap: iconClasses,
                },
                {
                  'aria-hidden': true,
                }
              )
            : nothing}
          <span class="blr-caption-text">${this.message}</span>
          ${this.childElement}
        </div>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrFormCaption);
}

export type BlrFormCaptionType = Omit<BlrFormCaption, keyof LitElement>;
