import { TemplateResult, html, nothing } from 'lit';
import { property } from '../../utils/lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { TAG_NAME } from './renderFunction.js';
import { staticStyles } from './index.css.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { CaptionVariantType, FormSizesType, SizesType } from '../../globals/types.js';
import { calculateIconName } from '../../utils/calculate-icon-name.js';
import { getComponentConfigToken } from '../../utils/get-component-config-token.js';
import { BlrIconRenderFunction } from '../icon/renderFunction.js';
import { LitElementCustom } from '../../utils/lit/element.js';
import { ElementInterface } from '../../utils/lit/element.js';

export class BlrFormCaption extends LitElementCustom {
  static styles = [staticStyles];

  @property() accessor message: string | undefined = undefined;
  @property() accessor icon: SizelessIconType | undefined = undefined;
  @property() accessor variant: CaptionVariantType = 'hint';
  @property() accessor sizeVariant: FormSizesType | undefined = 'md';
  @property() accessor childElement: TemplateResult<1> | undefined = undefined;
  @property() accessor theme: ThemeType = 'Light';

  protected render() {
    if (this.sizeVariant) {
      const classes = classMap({
        'blr-form-caption': true,
        [this.variant]: this.variant,
        [this.sizeVariant]: this.sizeVariant,
        [this.theme]: this.theme,
      });

      const iconClasses = classMap({
        'blr-icon': true,
        [this.sizeVariant]: this.sizeVariant,
      });

      const iconSizeVariant = getComponentConfigToken([
        'cmp',
        'formcaption',
        'icon',
        'sizevariant',
        // this.sizeVariant.toUpperCase(),
        this.sizeVariant,
      ]) as SizesType;

      return html`
        <div class=${classes}>
          ${Boolean(this.icon)
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

export type BlrFormCaptionType = ElementInterface<BlrFormCaption>;
