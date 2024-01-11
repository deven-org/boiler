import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Placement as PlacementType } from '@floating-ui/dom';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { tooltipPosition } from './tooltip-position';
import { BlrTooltipBubbleRenderFunction } from './tooltip-bubble/renderFunction';
import { styleCustom } from './index.css';

export const TAG_NAME = 'blr-tooltip';

const enterEvents = ['pointerenter', 'focus'];
const leaveEvents = ['pointerleave', 'blur', 'keydown', 'click'];

@customElement(TAG_NAME)
export class BlrTooltip extends LitElement {
  static styles = [styleCustom];

  @property() theme?: ThemeType = 'Light';
  @property() message!: string;
  @property() hasArrow?: boolean = true;
  @property() elevation?: boolean = false;
  @property() placement?: PlacementType = 'top';
  @property() offset?: number = 4;

  @state() protected visible = false;

  protected _referenceElement: Element | undefined | null = null;
  protected _tooltipElement: HTMLElement | null = null;

  protected updated() {
    const slot = this.renderRoot?.querySelector('slot');
    this._referenceElement = slot?.assignedElements({ flatten: true })[0];

    this._tooltipElement = this.renderRoot?.querySelector('blr-tooltip-bubble');

    if (!this._referenceElement || !this._tooltipElement) {
      return;
    }

    enterEvents.forEach((event) => this._referenceElement?.addEventListener(event, this.show));
    leaveEvents.forEach((event) => this._referenceElement?.addEventListener(event, this.hide));

    if (this._referenceElement || this._tooltipElement) {
      tooltipPosition(this._referenceElement, this._tooltipElement, this.placement, this.offset);
    }
  }

  protected show = () => (this.visible = true);

  protected hide = () => (this.visible = false);

  protected render() {
    return html` <slot></slot>
      ${BlrTooltipBubbleRenderFunction({
        theme: this.theme,
        message: this.message,
        hasArrow: this.hasArrow,
        elevation: this.elevation,
        visible: this.visible,
      })}`;
  }
}

export type BlrTooltipType = Omit<BlrTooltip, keyof LitElement>;
