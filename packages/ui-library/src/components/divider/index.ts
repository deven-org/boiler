import { html } from 'lit';
import { property } from '../../utils/lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { staticStyles } from './index.css.js';
import { TAG_NAME } from './renderFunction.js';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { DividerVariationTypes } from '../../globals/types.js';
import { LitElementCustom } from '../../utils/lit/element.js';
import { ElementInterface } from '../../utils/lit/element.js';

export class BlrDivider extends LitElementCustom {
  static styles = [staticStyles];

  @property() accessor direction: DividerVariationTypes = 'vertical';
  @property() accessor theme: ThemeType = 'Light';

  protected render() {
    const dividerClasses = classMap({
      'blr-divider': true,
      [this.direction]: true,
      [this.theme]: this.theme,
    });

    return html` <div class="${dividerClasses}"></div> `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrDivider);
}

export type BlrDividerType = ElementInterface<BlrDivider>;
