import { LitElement, html } from 'lit';
import { TAG_NAME } from './renderFunction';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { property } from 'lit/decorators.js';

export class BlrFormExampleWithSlot extends LitElement {
  @property() theme: ThemeType = 'Light';
  @property() firstInputValue: string = '';
  @property() firstTextInputHasError: boolean = false;
  @property() secondInputValue: string = '';
  @property() checkBoxChecked: boolean = false;

  protected render() {
    return html`
      <blr-form .handleSubmit="${this.handleSubmit}">
        <blr-text-input
          size="md"
          placeholder="Placeholder-text"
          value="${this.firstInputValue}"
          maxlength="140"
          label="Label-text"
          labelappendix="(Appendix)"
          arialabel="firstInput"
          name="firstInput"
          theme="Light"
          textinputid="firstInput"
          haslabel="true"
          type="text"
          inputicon="blr360"
          showinputicon="true"
          @blrTextValueChange="${this.handleFirstInputChange}"
          required="true"
          errorMessage="input field required"
        ></blr-text-input>
        <blr-text-input
          size="md"
          placeholder="Placeholder-text"
          value="${this.secondInputValue}"
          maxlength="140"
          label="Label-text"
          labelappendix="(Appendix)"
          arialabel="secondInput"
          name="secondInput"
          theme="Light"
          textinputid="secondInput"
          haslabel="true"
          type="text"
          inputicon="blr360"
          showinputicon="true"
          @blrTextValueChange="${this.handleSecondInputChange}"
          required="true"
        ></blr-text-input>
        <blr-checkbox
          theme="Light"
          size="md"
          checkedicon="blrCheckmark"
          indeterminatedicon="blrMinus"
          haslabel="true"
          label="I accept the terms and conditions."
          erroricon=""
          arialabel="check Input"
          checkinputid="checkInputId"
          name="checkInput"
          @blrCheckedChange=${this.handleCheckInput}
          errorMessage="must be checked"
          required="true"
        ></blr-checkbox>
      </blr-form>
    `;
  }

  private handleSubmit(e) {
    const slot = this.renderRoot?.querySelector('slot');
    const assignedNodes = slot?.assignedElements({ flatten: true }) ?? [];
    assignedNodes.forEach((node: any) => {
      if (node.name === 'firstInput') {
        const shadowFirstInputElement = node.shadowRoot?.querySelector('input[name="firstInput"]');
        if (!shadowFirstInputElement.checkValidity()) {
          node._onPropChanged({
            detail: {
              hasError: true,
              errorMessage: 'This is a required field',
            },
          });
        } else {
          node._onPropChanged({
            detail: {
              hasError: false,
              errorMessage: '',
            },
          });
        }
      }

      if (node.name === 'secondInput') {
        const shadowSecondInputElement = node.shadowRoot?.querySelector('input[name="secondInput"]');
        if (!shadowSecondInputElement.checkValidity()) {
          node._onPropChanged({
            detail: {
              hasError: true,
              errorMessage: 'This is a required field',
            },
          });
        } else {
          node._onPropChanged({
            detail: {
              hasError: false,
              errorMessage: '',
            },
          });
        }
      }

      if (node.name === 'checkInput' && !node.hasAttribute('checked')) {
        console.error('checkbox has error');
      }
    });
  }

  private handleFirstInputChange(evt: any) {
    this.firstInputValue = evt.detail.originalEvent.target.value;
  }

  private handleSecondInputChange(evt: any) {
    this.secondInputValue = evt.detail.originalEvent.target.value;
  }

  private handleCheckInput(evt: any) {
    this.checkBoxChecked = evt.detail.checkedState;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrFormExampleWithSlot);
}

export type BlrFormExampleWithSlotType = Omit<BlrFormExampleWithSlot, keyof LitElement>;
