import { customElement, property } from 'lit/decorators.js';
import { LitElement } from 'lit';
import { FormSizesType } from '../../globals/types';

@customElement('blr-textarea')
export class BlrTextarea extends LitElement {
  static styles = [styleCustom];
  @property() textareaId: string;
  @property() label: string;
  @property() size?: FormSizesType = 'md';
  @property() minLength?: number;
  @property() maxLength?: number;
  @property() errorMessage?: string;
  @property() placeholder?: string;
  @property() required?: boolean;
  @property() disabled?: boolean;
  @property() hintMessage?: string;
}
