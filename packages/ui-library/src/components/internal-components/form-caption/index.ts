import { LitElement, TemplateResult, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { FormSizesType, CaptionVariantType, SizesType } from '../../../globals/types';
import { BlrIconRenderFunction } from '../../ui/icon/renderFunction';
import { SizelessIconType } from '@boiler/icons';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { getComponentConfigToken } from '../../../utils/get-component-config-token';

import { TAG_NAME } from './renderFunction';
import { captionDark, captionLight } from './index.css';

@customElement(TAG_NAME)
export class BlrFormCaption extends LitElement {
  static styles = [];

  @property() message?: string;
  @property() icon?: SizelessIconType;
  @property() variant: CaptionVariantType = 'hint';
  @property() size?: FormSizesType = 'md';
  @property() childElement?: TemplateResult<1>;
  @property() theme: ThemeType = 'Light';

  protected render() {
    if (this.size) {
      const dynamicStyles = this.theme === 'Light' ? [captionLight] : [captionDark];

      const classes = classMap({
        'blr-form-caption': true,
        [`${this.variant}`]: this.variant,
        [`${this.size}`]: this.size,
      });

      const iconClasses = classMap({
        'blr-icon': true,
        [this.size]: this.size,
      });

      const iconSizeVariant = getComponentConfigToken([
        'SizeVariant',
        'Forms',
        this.size.toUpperCase(),
        'CaptionComponent',
        'Icon',
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

export type BlrFormCaptionType = Omit<BlrFormCaption, keyof LitElement>;
