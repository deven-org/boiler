import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconMapping, IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { SizesType } from '../../../globals/types';
import { DirectiveResult } from 'lit-html/directive';
import { ClassMapDirective } from 'lit-html/directives/class-map';

export const TAG_NAME = 'blr-icon';

@customElement(TAG_NAME)
export class BlrIcon extends LitElement {
  static styles = [styleCustom];

  @property() icon: IconType = 'blr360Xs';
  @property() size: SizesType = 'md';

  @property() ignoreSize?: boolean = false;

  @property() classMap?: DirectiveResult<typeof ClassMapDirective>;

  protected render() {
    const sizeKey = this.ignoreSize ? 'full' : this.size.toLowerCase();

    if (IconMapping.hasOwnProperty(this.icon) && typeof IconMapping[this.icon] === 'function') {
      return html`${IconMapping[this.icon](`blr-icon ${sizeKey}`)}`;
    } else {
      return nothing;
    }
  }
}

// BlrIconType is a new Type containing all properties of BlrIcon without the properties of LitElement
// and some additional properties which are not part of the component, so we dont use the generic render function

/*
export type BlrIconType = Partial<Omit<BlrIcon, keyof LitElement>> & {
  classMap?: DirectiveResult<typeof ClassMapDirective>;
  onClick?: HTMLElement['onclick'];
  hideAria?: boolean;
  name?: string;
  disablePointerEvents?: boolean;
};
*/

export type BlrIconType = Partial<Omit<BlrIcon, keyof LitElement>>;
