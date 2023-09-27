import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { sliderDark, sliderLight } from '../../foundation/component-tokens/tool-tip.css';

import { FormSizesType, ToolTipPosition, ToolTipVisibility, ToolTipArrowPosition } from '../../globals/types';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';

@customElement('blr-tool-tip')
export class BlrToolTip extends LitElement {
  @property() theme: ThemeType = 'Light';
  @property() size: FormSizesType = 'lg';
  @property() text!: string;
  @property() toolTipId?: string = 'tooltip-1';
  @property() placement!: ToolTipPosition;
  @property() visibility?: ToolTipVisibility = 'onHover';
  @property() toolTipArrow?: ToolTipArrowPosition = 'start';
  @property() customCss?: string = '';
  @property() elevation?: boolean = false;

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
      [`${this.size || 'lg'}`]: this.size || 'lg',
    });
    const generatedArrowPosition =
      this.placement === 'top' || this.placement === 'bottom'
        ? `tooltip-horizontal-${this.toolTipArrow}`
        : `tooltip-vertical-${this.toolTipArrow}`;

    const toolTipClasses = classMap({
      'tooltip': true,
      [`${this.size || 'lg'}`]: this.size || 'lg',
      'blr-tooltip-visible-always': this.visibility === 'onLoad',
      [`tooltip-${this.placement}`]: true,
      [`${generatedArrowPosition}`]: true,
      [`hide-arrow`]: this.toolTipArrow === 'hide',
      [this.customCss || '']: this.customCss || false,
    });

    const innerContainerClasses = classMap({
      'inner-container': true,
      'elevation': this.elevation || false,
    });

    return html`
      <style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes}>
        <!-- Children will be rendered here -->

        <slot></slot>
        <div class="${toolTipClasses}" id=${this.toolTipId}>
          <div class="${innerContainerClasses}">${this.text}</div>
        </div>
        <img src="../../../assets/feedback/tooltip/NoseSolo.svg" alt="Nose" class="nose-solo" />
      </div>
    `;
  }
}

export type BlrToolTipTypeWithOmitProperty = Omit<BlrToolTip, keyof LitElement>;
export type BlrToolTipType = Partial<BlrToolTipTypeWithOmitProperty> & {
  itemRenderer: TemplateResult;
};

export const BlrToolTipRenderFunction = ({
  theme,
  text,
  toolTipId,
  placement,
  visibility,
  toolTipArrow,
  elevation,
  customCss,
  itemRenderer,
}: BlrToolTipType) => {
  return html`
    <blr-tool-tip
      .theme=${theme}
      .text=${text}
      .tooldTipId=${toolTipId}
      .placement=${placement}
      .visibility=${visibility}
      .customCss=${customCss}
      .toolTipArrow=${toolTipArrow}
      .elevation=${elevation}
    >
      ${itemRenderer}
    </blr-tool-tip>
  `;
};
