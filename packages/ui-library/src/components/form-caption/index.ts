import { TemplateResult, html, nothing } from 'lit';
import { property } from '../../utils/lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { TAG_NAME } from './renderFunction.js';
import { staticStyles } from './index.css.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { CaptionVariantType, FormSizesType, SizesType } from '../../globals/types.js';
import { calculateIconName } from '../../utils/calculate-icon-name.js';
import { getComponentConfigToken } from '../../utils/get-component-config-token.js';
import { BlrIconRenderFunction } from '../icon/renderFunction.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

const propertySanitizer = makeSanitizer((unsanitized: BlrFormCaptionType) => ({
  message: unsanitized.message ?? 'Message-text',
  icon: unsanitized.icon ?? 'blrInfo',
  variant: unsanitized.variant ?? 'hint',
  sizeVariant: unsanitized.sizeVariant ?? 'md',
  theme: unsanitized.theme ?? Themes[0],
}));

export class BlrFormCaption extends LitElementCustom {
  static styles = [staticStyles];

  private sanitizedController: SanitizationController<
    BlrFormCaptionType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();
    this.sanitizedController = new SanitizationController<
      BlrFormCaptionType,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }

  @property() accessor message: string | undefined;
  @property() accessor icon: SizelessIconType | undefined;
  @property() accessor variant: CaptionVariantType | undefined;
  @property() accessor sizeVariant: FormSizesType | undefined;
  @property({ type: Object }) accessor childElement: TemplateResult<1> | undefined;
  @property() accessor theme: ThemeType | undefined;

  protected render() {
    const sanitized = this.sanitizedController.values;

    if (sanitized.sizeVariant) {
      const classes = classMap({
        'blr-form-caption': true,
        [sanitized.variant]: sanitized.variant,
        [sanitized.sizeVariant]: sanitized.sizeVariant,
        [sanitized.theme]: sanitized.theme,
      });

      const iconClasses = classMap({
        'blr-icon': true,
        [sanitized.sizeVariant]: sanitized.sizeVariant,
      });

      const iconSizeVariant = getComponentConfigToken([
        'cmp',
        'formcaption',
        'icon',
        'sizevariant',
        sanitized.sizeVariant,
      ]) as SizesType;

      return html`
        <div class=${classes}>
          ${Boolean(sanitized.icon)
            ? BlrIconRenderFunction(
                {
                  icon: calculateIconName(
                    sanitized.variant === 'hint' || sanitized.variant === 'error' ? sanitized.icon : '',
                    iconSizeVariant,
                  ),
                  sizeVariant: iconSizeVariant,
                  classMap: iconClasses,
                },
                {
                  'aria-hidden': true,
                },
              )
            : nothing}
          <span class="blr-caption-text">${sanitized.message}</span>
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
