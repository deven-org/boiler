import { LitElement, html } from 'lit';
import { styleCustom } from './index.css';

export class BlrFloater extends LitElement {
    static styles = [styleCustom];

    protected render() {

        return html`
            <slot name="ref"></slot>
            <slot name="content">
                Content:
            </slot>
        `;

    }
}

export type BlrFloaterType = Omit<BlrFloater, keyof LitElement>;
