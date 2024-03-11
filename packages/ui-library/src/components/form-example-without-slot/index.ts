import { LitElement, html } from 'lit';
import { TAG_NAME } from './renderFunction';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { property, query } from 'lit/decorators.js';

export class BlrFormExampleWithoutSlot extends LitElement {
  @property() theme: ThemeType = 'Light';
  @property() firstInputValue: string = '';
  @property() firstTextInputHasError: boolean = false;
  @property() secondTextInputHasError: boolean = false;
  @property() radioHasError: boolean = false;
  @property() secondInputValue: string = '';
  @property() checkInputHasError?: boolean = false;
  @property() selectHasError?: boolean = false;
  @property() checkBoxChecked: boolean = false;
  @property() textInputErrorMessage: string = 'input field required';
  @property() selectErrorMessage: string = 'at least one selection required';
  @property() radioErrorMessage: string = 'at least one selection required';

  @query('blr-text-input[name="firstInput"]') firstInputElement!: HTMLElement;
  @query('blr-text-input[name="secondInput"]') secondInputElement!: HTMLElement;
  @query('blr-checkbox[name="checkInput"]') checkboxInputElement!: HTMLElement;
  @query('blr-select[name="select"]') selectElement!: HTMLElement;
  @query('blr-radio[name="radio"]') radioElement!: HTMLElement;

  protected render() {
    return html`
      <form @submit=${this.handleSubmit}>
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
          .hasError=${this.firstTextInputHasError}
          errorMessage=${this.textInputErrorMessage}
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
          .hasError=${this.secondTextInputHasError}
          errorMessage=${this.textInputErrorMessage}
          required="true"
        ></blr-text-input>
        <blr-select
          theme="Light"
          size="md"
          label="Select one"
          labelappendix=""
          icon=""
          hinticon="blrInfo"
          .hasError=${this.selectHasError}
          errormessage=${this.selectErrorMessage}
          errormessageicon="blrError"
          arialabel="Select"
          selectid="selectId"
          name="select"
          haslabel="true"
          required="true"
        >
          <option value="" label="--Please choose an option--"></option>
          <option value="option1" label="Option 1"></option>
          <option value="option2" label="Option 2"></option>
        </blr-select>
        <blr-radio
          theme="Light"
          size="md"
          value=""
          label="Hint and error message"
          .hasError=${this.radioHasError}
          errormessage=${this.radioErrorMessage}
          arialabel=""
          erroricon="blrErrorFilled"
          optionid="optionId"
          name="radio"
          required="true"
        ></blr-radio>
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
          .hasError=${this.checkInputHasError}
          errorMessage="must be checked"
          required="true"
        ></blr-checkbox>
        <blr-text-button
          theme="Light"
          variant="cta"
          sizeVariant="md"
          label="Submit"
          hasIcon="true"
          iconPosition="leading"
          icon="blr360"
          textButtonId="button-id"
          @blrClick=${this.handleSubmit}
        ></blr-text-button>
      </form>
    `;
  }

  private handleSubmit(event) {
    event.preventDefault();
    const shadowFirstInputElement = this.firstInputElement.shadowRoot?.querySelector('input[name="firstInput"]');
    const shadowSecondInputElement = this.secondInputElement.shadowRoot?.querySelector('input[name="secondInput"]');
    const shadowCheckInputElement = this.checkboxInputElement.shadowRoot?.querySelector('input[name="checkInput"]');
    const shadowSelectElement = this.selectElement.shadowRoot?.querySelector('select[name="select"]');
    const shadowRadioElement = this.radioElement.shadowRoot?.querySelector('input[name="radio"]');

    if (!shadowFirstInputElement?.checkValidity()) {
      this.firstTextInputHasError = true;
    }

    if (!shadowSecondInputElement?.checkValidity()) {
      this.secondTextInputHasError = true;
    }

    if (!shadowCheckInputElement?.checkValidity()) {
      this.checkInputHasError = true;
    }

    if (!shadowSelectElement?.checkValidity()) {
      this.selectHasError = true;
    }

    if (!shadowRadioElement?.checkValidity()) {
      this.radioHasError = true;
    }

    // just to simulate the value change. Remove later
    setTimeout(() => {
      this.firstTextInputHasError = false;
      this.secondTextInputHasError = false;
      this.checkInputHasError = false;
      this.selectHasError = false;
      this.radioHasError = false;
    }, 2000);

    console.log(
      `First Input: ${this.firstInputValue}, Second Input: ${this.secondInputValue}, checkbox checked: ${this.checkBoxChecked}`
    );
  }

  handleFirstInputChange(event: CustomEvent) {
    this.firstInputValue = event.detail.originalEvent.target.value;
  }

  handleSecondInputChange(event: CustomEvent) {
    this.secondInputValue = event.detail.originalEvent.target.value;
  }

  private handleCheckInput(evt: any) {
    this.checkBoxChecked = evt.detail.checkedState;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrFormExampleWithoutSlot);
}

export type BlrFormExampleWithoutSlotType = Omit<BlrFormExampleWithoutSlot, keyof LitElement>;
