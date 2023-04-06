import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconMapping, IconType } from '@boiler/icons';
import { icon } from '../../foundation/component-tokens/ui.css';
// import { Sizes } from '../../globals/constants';
import { styleCustom } from './index.css';
import { SizesType } from '../../globals/types';

@customElement('blr-icon')
export class BlrIcon extends LitElement {
  static styles = [styleCustom, icon];

  @property() icon!: IconType;
  @property() size!: SizesType;

  render() {
    // const suffix = Sizes.find((item) => this.icon.toLowerCase().endsWith(item));

    if (IconMapping.hasOwnProperty(this.icon) && typeof IconMapping[this.icon] === 'function') {
      return html`${IconMapping[this.icon](`blr-icon ${this.size}`)}`;
    } else {
      return nothing;
    }
  }
}
