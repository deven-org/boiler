import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconMapping, IconType } from '@boiler/icons';
import { icon } from '../../foundation/component-tokens/ui.css';
// import { Sizes } from '../../globals/constants';
import { styleCustom } from './index.css';
import { SizesType } from '../../globals/types';
import { DirectiveResult } from 'lit-html/directive';
import { ClassMapDirective } from 'lit-html/directives/class-map';

@customElement('blr-icon')
export class BlrIcon extends LitElement {
  static styles = [styleCustom, icon];

  @property() icon!: IconType;
  @property() size!: SizesType;

  render() {
    if (IconMapping.hasOwnProperty(this.icon) && typeof IconMapping[this.icon] === 'function') {
      return html`${IconMapping[this.icon](`blr-icon ${this.size.toLowerCase()}`)}`;
    } else {
      return nothing;
    }
  }
}

type BlrIconType = {
  icon: IconType;
  size: SizesType;
  classMap?: DirectiveResult<typeof ClassMapDirective>;
};

export const BlrIconRenderFunction = ({ icon, size, classMap }: BlrIconType) => {
  return html`<blr-icon class="blr-input-icon ${classMap}" icon=${icon} size=${size}></blr-icon>`;
};
