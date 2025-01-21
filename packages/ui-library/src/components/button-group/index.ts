import { html } from 'lit';
import { property } from '../../utils/lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { staticStyles } from './index.css.js';
import { ButtonGroupAlignmentType, ButtonGroupSizesType } from '../../globals/types.js';

import { TAG_NAME } from './renderFunction.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

const propertySanitizer = makeSanitizer((unsanitized: BlrButtonGroupType) => ({
  sizeVariant: unsanitized.sizeVariant ?? 'md',
  alignment: unsanitized.alignment ?? 'left',
  theme: unsanitized.theme ?? Themes[0],
}));

export class BlrButtonGroup extends LitElementCustom {
  static styles = [staticStyles];

  @property() accessor sizeVariant: ButtonGroupSizesType | undefined;
  @property() accessor alignment: ButtonGroupAlignmentType | undefined;
  @property() accessor theme: ThemeType | undefined;

  private sanitizedController: SanitizationController<
    BlrButtonGroupType, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();
    this.sanitizedController = new SanitizationController<
      BlrButtonGroupType, // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }

  protected render() {
    const sanitized = this.sanitizedController.values;

    const classes = classMap({
      'blr-button-group': true,
      [sanitized.alignment]: sanitized.alignment,
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
  customElements.define(TAG_NAME, BlrButtonGroup);
}

export type BlrButtonGroupType = ElementInterface<BlrButtonGroup>;
