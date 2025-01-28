import { html } from 'lit';
import { property } from '../../utils/lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { staticStyles } from './index.css.js';
import { TAG_NAME } from './renderFunction.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { DividerVariationTypes } from '../../globals/types.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

const propertySanitizer = makeSanitizer((unsanitized: BlrDividerType) => ({
  direction: unsanitized.direction ?? 'horizontal',
  theme: unsanitized.theme ?? Themes[0],
}));

export class BlrDivider extends LitElementCustom {
  private sanitizedController: SanitizationController<
    BlrDividerType, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();
    this.sanitizedController = new SanitizationController<
      BlrDividerType,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }

  static styles = [staticStyles];

  @property() accessor direction: DividerVariationTypes | undefined;
  @property() accessor theme: ThemeType | undefined;

  protected render() {
    const sanitized = this.sanitizedController.values;

    const dividerClasses = classMap({
      'blr-divider': true,
      [sanitized.direction]: true,
      [sanitized.theme]: sanitized.theme,
    });

    return html` <div class="${dividerClasses}"></div> `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrDivider);
}

export type BlrDividerType = ElementInterface<BlrDivider>;
