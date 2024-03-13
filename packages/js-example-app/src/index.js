import '@boiler/ui-library/dist/index.js';
import './style.scss';

const toggleLoadingButton = document.querySelector('#toggleLoadingState');
const toggleDisabledState = document.querySelector('#toggleDisabledState');
const logsContainer = document.querySelector('#logs');

const blrTextButton = document.getElementsByTagName('blr-text-button')[0];
const blrIconButton = document.getElementsByTagName('blr-icon-button')[0];
const blrCheckbox = document.getElementsByTagName('blr-checkbox')[0];
const blrSelect = document.getElementsByTagName('blr-select')[0];
const blrTextInput = document.getElementsByTagName('blr-text-input')[0];
const blrTextArea = document.getElementsByTagName('blr-textarea')[0];

const addLog = (log) => {
  logsContainer.innerHTML = logsContainer.innerHTML + log + '<br>';

  logsContainer.scrollTo(0, logsContainer.scrollHeight);
};

toggleLoadingButton.addEventListener('click', () => {
  const currentState = blrTextButton.getAttribute('loading');

  if (currentState) {
    blrButton.removeAttribute('loading');
    addLog('Set text button loading state to false');
  } else {
    blrButton.setAttribute('loading', 'true');
    addLog('Set text button loading state to true');
  }
});

toggleDisabledState.addEventListener('click', () => {
  const currentState = blrTextButton.getAttribute('disabled');

  if (currentState) {
    blrTextButton.removeAttribute('disabled');
    addLog('Set text button disabled state to false');
  } else {
    blrTextButton.setAttribute('disabled', 'true');
    addLog('Set text button loading state to true');
  }
});

blrTextButton.addEventListener('blrClick', () => {
  addLog('blr-text-button clicked');
});

blrTextButton.addEventListener('blrFocus', () => {
  addLog('blr-text-button focused');
});

blrTextButton.addEventListener('blrBlur', () => {
  addLog('blr-text-button blurred');
});

blrIconButton.addEventListener('blrClick', () => {
  addLog('blr-icon-button clicked');
});

blrIconButton.addEventListener('blrFocus', () => {
  addLog('blr-icon-button focused');
});

blrIconButton.addEventListener('blrBlur', () => {
  addLog('blr-icon-button blurred');
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

blrSelect.addEventListener('blrSelectedValueChange', () => {
  addLog('blr-select changed');
});

blrTextInput.addEventListener('blrFocus', () => {
  addLog('blr-text-input focused');
});

blrTextInput.addEventListener('blrBlur', () => {
  addLog('blr-text-input blurred');
});

blrTextInput.addEventListener('blrTextValueChange', () => {
  addLog('blr-text-input changed');
});

blrTextArea.addEventListener('blrFocus', () => {
  addLog('blr-textarea focused');
});

blrTextArea.addEventListener('blrBlur', () => {
  addLog('blr-textarea blurred');
});

blrTextArea.addEventListener('blrChange', () => {
  addLog('blr-textarea changed');
});

blrTextArea.addEventListener('blrSelect', () => {
  addLog('blr-textarea selected');
});
