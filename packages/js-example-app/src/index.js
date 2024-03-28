import '@boiler/ui-library/dist/index.js';
import './style.scss';

const toggleLoadingButton = document.querySelector('#toggleLoadingState');
const toggleDisabledState = document.querySelector('#toggleDisabledState');
const logsContainer = document.querySelector('#logs');

const blrButtonText = document.getElementsByTagName('blr-button-text')[0];
const blrButtonIcon = document.getElementsByTagName('blr-button-icon')[0];
const blrCheckbox = document.getElementsByTagName('blr-checkbox')[0];
const blrSelect = document.getElementsByTagName('blr-select')[0];
const blrInputFieldText = document.getElementsByTagName('blr-input-field-text')[0];
const blrInputFieldNumber = document.getElementsByTagName('blr-input-field-number')[0];
const blrTextArea = document.getElementsByTagName('blr-textarea')[0];
const blrRadio = document.getElementsByTagName('blr-radio')[0];
const blrToggleSwitch = document.getElementsByTagName('blr-label-toggleswitch')[0];
const blrTabBar = document.getElementsByTagName('blr-tab-bar')[0];

const addLog = (log) => {
  logsContainer.innerHTML = logsContainer.innerHTML + log + '<br>';

  logsContainer.scrollTo(0, logsContainer.scrollHeight);
};

toggleLoadingButton.addEventListener('click', () => {
  const currentState = blrButtonText.getAttribute('loading');

  if (currentState) {
    blrButtonText.removeAttribute('loading');
    addLog('Set button text loading state to false');
  } else {
    blrButtonText.setAttribute('loading', 'true');
    addLog('Set button text loading state to true');
  }
});

toggleDisabledState.addEventListener('click', () => {
  const currentState = blrButtonText.getAttribute('disabled');

  if (currentState) {
    blrButtonText.removeAttribute('disabled');
    addLog('Set text button disabled state to false');
  } else {
    blrButtonText.setAttribute('disabled', 'true');
    addLog('Set text button loading state to true');
  }
});

blrButtonText.addEventListener('blrClick', () => {
  addLog('blr-button-text clicked');
});

blrButtonText.addEventListener('blrFocus', () => {
  addLog('blr-button-text focused');
});

blrButtonText.addEventListener('blrBlur', () => {
  addLog('blr-button-text blurred');
});

blrButtonIcon.addEventListener('blrClick', () => {
  addLog('blr-button-icon clicked');
});

blrButtonIcon.addEventListener('blrFocus', () => {
  addLog('blr-button-icon focused');
});

blrButtonIcon.addEventListener('blrBlur', () => {
  addLog('blr-button-icon blurred');
});

blrCheckbox.addEventListener('blrCheckedChange', (e) => {
  addLog('blr-checkbox changed: ' + e.detail.checkedState);
});

blrCheckbox.addEventListener('blrFocus', () => {
  addLog('blr-checkbox focused');
});

blrCheckbox.addEventListener('blrBlur', () => {
  addLog('blr-checkbox blurred');
});

blrSelect.addEventListener('blrSelectedValueChange', (e) => {
  addLog('blr-select changed: ' + e.detail.selectedValue);
});

blrSelect.addEventListener('blrFocus', () => {
  addLog('blr-select focused');
});

blrSelect.addEventListener('blrBlur', () => {
  addLog('blr-select blurred');
});

blrInputFieldText.addEventListener('blrFocus', () => {
  addLog('blr-text-input focused');
});

blrInputFieldText.addEventListener('blrBlur', () => {
  addLog('blr-input-field-text blurred');
});

blrInputFieldText.addEventListener('blrSelect', () => {
  addLog('blr-input-field-text selected');
});

blrInputFieldText.addEventListener('blrTextValueChange', (e) => {
  addLog('blr-input-field-text changed: ' + e.detail.inputValue);
});

blrInputFieldNumber.addEventListener('blrFocus', () => {
  addLog('blr-input-field-number focused');
});

blrInputFieldNumber.addEventListener('blrBlur', () => {
  addLog('blr-input-field-number blurred');
});

blrInputFieldNumber.addEventListener('blrSelect', () => {
  addLog('blr-input-field-number selected');
});

blrInputFieldNumber.addEventListener('blrNumberValueChange', (e) => {
  addLog('blr-input-field-number value changed: ' + e.detail.inputValue);
});

blrTextArea.addEventListener('blrFocus', () => {
  addLog('blr-textarea focused');
});

blrTextArea.addEventListener('blrBlur', () => {
  addLog('blr-textarea blurred');
});

blrTextArea.addEventListener('blrTextValueChange', (e) => {
  addLog('blr-textarea changed: ' + e.detail.inputValue);
});

blrTextArea.addEventListener('blrSelect', () => {
  addLog('blr-textarea selected');
});

blrRadio.addEventListener('blrFocus', () => {
  addLog('blr-radio focused');
});

blrRadio.addEventListener('blrBlur', () => {
  addLog('blr-radio blurred');
});

blrRadio.addEventListener('blrSelectedValueChange', (e) => {
  addLog('blr-radio changed: ' + e.detail.selectedValue);
});

blrToggleSwitch.addEventListener('blrFocus', () => {
  addLog('blr-toggleswitch focused');
});

blrToggleSwitch.addEventListener('blrBlur', () => {
  addLog('blr-toggleswitch blurred');
});

blrToggleSwitch.addEventListener('blrCheckedChange', (e) => {
  addLog('blr-toggleswitch changed: ' + e.detail.checkedState);
});

blrTabBar.addEventListener('blrFocus', () => {
  addLog('blr-tab-bar focused');
});

blrTabBar.addEventListener('blrBlur', () => {
  addLog('blr-tab-bar blurred');
});

blrTabBar.addEventListener('blrChange', (e) => {
  addLog('blr-tab-bar changed: ' + e.detail.changedValue);
});
