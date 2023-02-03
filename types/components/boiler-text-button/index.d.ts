import { LitElement } from 'lit';
import { IconType } from '../../foundation/icons';
export declare class BoilerTextButton extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    onClick: HTMLButtonElement['onclick'];
    icon?: IconType;
    render(): import("lit-html").TemplateResult<1>;
}
