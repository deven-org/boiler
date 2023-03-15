import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { icon } from '../../foundation/component-tokens/ui';
import { IconMapping, IconType } from '../../foundation/icons';
import { Sizes } from '../../globals/constants';
import { styleCustom } from './css';

@customElement('blr-icon')
export class BlrIcon extends LitElement {
  static styles = [styleCustom, icon];

  @property() name: IconType;

  render() {
    const suffix = Sizes.find((item) => this.name.toLowerCase().endsWith(item));

    return html`${IconMapping[this.name](`blr-icon ${suffix}`)}`;
  }
}
