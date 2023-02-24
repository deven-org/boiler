import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconMapping, IconType } from '../../foundation/icons';
import { Sizes } from '../../globals/constants';
import { styleCustom } from './css';

@customElement('blr-icon')
export class BlrIcon extends LitElement {
  // component token for icon-component will follow.
  static styles = [styleCustom];

  @property() name: IconType;

  render() {
    const suffix = Sizes.find((item) => this.name.toLowerCase().endsWith(item));

    return html`${IconMapping[this.name](`blr-icon ${suffix}`)}`;
  }
}
