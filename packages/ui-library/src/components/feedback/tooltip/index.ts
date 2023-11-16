import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { Placement as PlacementType } from '@floating-ui/dom';
import { FormSizesType } from '../../../globals/types';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';
import { setupTooltip } from './setupTooltip';
import { BlrTooltipBubbleRenderFunction } from './tooltip-bubble';
import { styleCustom } from './index.css';

const TAG_NAME = 'blr-tooltip';

const enterEvents = ['pointerenter', 'focus'];
const leaveEvents = ['pointerleave', 'blur', 'keydown', 'click'];

@customElement('blr-tooltip')
export class BlrTooltip extends LitElement {
  static styles = [styleCustom];

  @property() theme?: ThemeType = 'Light';
  @property() size?: FormSizesType = 'sm';
  @property() text!: string;
  @property() hasArrow?: boolean = true;
  @property() elevation?: boolean = false;
  @property() placement?: PlacementType = 'top';
  @property() offset?: number = 4;

  @query('blr-tooltip-bubble')
  protected _tooltipBubble!: HTMLElement;

  protected _slotReference: Element | undefined = undefined;

  protected firstUpdated() {
    this.hide();
    const slot = this.shadowRoot?.querySelector('slot');
    this._slotReference = slot?.assignedElements({ flatten: true })[0];

    enterEvents.forEach((event) => this._slotReference?.addEventListener(event, this.show));
    leaveEvents.forEach((event) => this._slotReference?.addEventListener(event, this.hide));
  }

  protected show = () => {
    if (!this._slotReference) {
      return;
    }

    setupTooltip(this._slotReference, this._tooltipBubble, this.placement, this.offset);

    this._tooltipBubble.style.visibility = 'visible';
    this._tooltipBubble.style.opacity = '1';
  };

  protected hide = () => {
    this._tooltipBubble.style.visibility = 'hidden';
    this._tooltipBubble.style.opacity = '0';
  };

  protected render() {
    return html` <slot></slot>
      ${BlrTooltipBubbleRenderFunction({
        theme: this.theme,
        text: this.text,
        size: this.size,
        hasArrow: this.hasArrow,
        elevation: this.elevation,
      })}`;
  }
}

export type BlrTooltipType = Omit<BlrTooltip, keyof LitElement>;

export const BlrTooltipRenderFunction = (params: BlrTooltipType, children: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrTooltipType>(TAG_NAME, { ...params }, children);
