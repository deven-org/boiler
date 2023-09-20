import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { BlrBlanketRenderFunction } from '../internal-components/blanket';
import { FormSizesType } from '../../globals/types';
import { BlrTextButtonRenderFunction } from '../text-button';
import { BlrIconButtonRenderFunction } from '../icon-button';

@customElement('blr-dialog')
export class BlrDialog extends LitElement {
  static styles = [styleCustom];

  @query('.blr-dialog')
  _dialogElement!: HTMLElement;

  @property() isOpen = false;
  @property() theme: ThemeType = 'Light';
  @property() dialogTitle?: string;
  @property() dialogDescription?: string;
  @property() closeIconSize: FormSizesType = 'md';

  protected handleDialogChange() {
    this.isOpen = !this.isOpen;
  }

  protected render() {
    const dialogClasses = classMap({
      'blr-dialog': true,
      'dialog': true,
      'fade': true,
      [`in`]: this.isOpen || false,
    });

    return html`
      ${BlrTextButtonRenderFunction({
        theme: 'Light',
        label: 'Open Dialog',
        onClick: () => this.handleDialogChange(),
        leadingIcon: undefined,
        trailingIcon: 'blrChevronDownMd',
        loading: false,
        disabled: false,
        buttonId: 'button-id',
        variant: 'cta',
        size: 'md',
        loadingStatus: 'Loading',
      })}

      <div class="${dialogClasses}">
        <div class="dialog-dialog" role="document">
          <div class="dialog-content">
            <div class="dialog-header">
              ${BlrIconButtonRenderFunction({
                arialabel: 'Button',
                onClick: () => this.handleDialogChange(),
                loading: false,
                buttonId: 'close-icon',
                disabled: false,
                variant: 'silent',
                size: 'md',
                icon: 'blrClose',
                loadingStatus: '',
                theme: 'Light',
              })}
              <h4 class="dialog-title">${this.dialogTitle}</h4>
            </div>
            <div class="dialog-body">
              <p>${this.dialogDescription}</p>
            </div>
            <div class="dialog-footer">
              ${BlrTextButtonRenderFunction({
                theme: 'Light',
                label: 'Close Dialog',
                onClick: () => this.handleDialogChange(),
                leadingIcon: undefined,
                trailingIcon: 'blrChevronDownMd',
                loading: false,
                disabled: false,
                buttonId: 'secondary-close',
                variant: 'secondary',
                size: 'md',
                loadingStatus: 'Loading',
              })}
            </div>
          </div>
        </div>
      </div>
      ${BlrBlanketRenderFunction({
        theme: 'Light',
        isOpen: this.isOpen,
      })}
    `;
  }
}

export type BlrDialogType = Omit<BlrDialog, keyof LitElement>;

export const BlrDialogRenderFunction = ({ theme, dialogTitle, dialogDescription, closeIconSize }: BlrDialogType) => {
  return html`<blr-dialog
    .theme=${theme}
    .dialogTitle=${dialogTitle}
    .dialogDescription=${dialogDescription}
    .closeIconSize=${closeIconSize}
  ></blr-dialog>`;
};
