import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { sliderDark, sliderLight } from '../../foundation/component-tokens/tool-tip.css';

import { FormSizesType, ToolTipPosition, ToolTipVisibility, ToolTipArrowPosition } from '../../globals/types';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';

@customElement('blr-tool-tip')
export class BlrToolTip extends LitElement {
  @property() theme: ThemeType = 'Light';
  @property() size: FormSizesType = 'md';
  @property() text!: string;
  @property() toolTipId?: string = 'tooltip-1';
  @property() placement!: ToolTipPosition;
  @property() visibility?: ToolTipVisibility = 'onHover';
  @property() toolTipArrow?: ToolTipArrowPosition = 'start';
  @property() customCss?: string = '';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  protected render() {
    const generatedStyles = this.theme === 'Light' ? [sliderLight] : [sliderDark];
    const dynamicStyles = [...generatedStyles];

    const classes = classMap({
      'blr-semantic-action': true,
      'blr-tooltip': true,
      [`${this.size || 'md'}`]: this.size || 'md',
    });
    const generatedArrowPosition =
      this.placement === 'top' || this.placement === 'bottom'
        ? `tooltip-horizontal-${this.toolTipArrow}`
        : `tooltip-vertical-${this.toolTipArrow}`;

    const toolTipClasses = classMap({
      'tooltip': true,
      'blr-tooltip-visible-always': this.visibility === 'onLoad',
      [`tooltip-${this.placement}`]: true,
      [`${generatedArrowPosition}`]: true,
      [`hide-arrow`]: this.toolTipArrow === 'hide',
      [this.customCss || '']: this.customCss || false,
    });

    return html`
      <style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes}>
        <!-- Children will be rendered here -->

        <slot></slot>
        <span class="${toolTipClasses}" id=${this.toolTipId}>${this.text}</span>
      </div>
    `;
  }
}

export type BlrToolTipTypeWithOmitProperty = Omit<BlrToolTip, keyof LitElement>;
export type BlrToolTipType = Partial<BlrToolTipTypeWithOmitProperty> & {
  itemRenderer: TemplateResult;
};

export const BlrToolTipRenderFunction = ({
  size,
  theme,
  text,
  toolTipId,
  placement,
  visibility,
  toolTipArrow,
  customCss,
  itemRenderer,
}: BlrToolTipType) => {
  return html`
    <blr-tool-tip
      .size=${size}
      .theme=${theme}
      .text=${text}
      .tooldTipId=${toolTipId}
      .placement=${placement}
      .visibility=${visibility}
      .customCss=${customCss}
      .toolTipArrow=${toolTipArrow}
    >
      ${itemRenderer}
    </blr-tool-tip>
  `;
};
