import '@boiler/ui-library/dist/index.js';
import './style.scss';

const toggleLoadingButton = document.querySelector('#toggleLoadingState');
const toggleDisabledState = document.querySelector('#toggleDisabledState');
const logsContainer = document.querySelector('#logs');

const blrButton = document.getElementsByTagName('blr-text-button')[0];
const blrCheckbox = document.getElementsByTagName('blr-checkbox')[0];
const blrSelect = document.getElementsByTagName('blr-select')[0];
const blrTextInput = document.getElementsByTagName('blr-text-input')[0];
const blrTextArea = document.getElementsByTagName('blr-textarea')[0];

const addLog = (log) => {
  logsContainer.innerHTML = logsContainer.innerHTML + log + '<br>';

  logsContainer.scrollTo(0, logsContainer.scrollHeight);
};

toggleLoadingButton.addEventListener('click', () => {
  const currentState = blrButton.getAttribute('loading');

  if (currentState) {
    blrButton.removeAttribute('loading');
    addLog('Set text button loading state to false');
  } else {
    blrButton.setAttribute('loading', 'true');
    addLog('Set text button loading state to true');
  }
});

toggleDisabledState.addEventListener('click', () => {
  const currentState = blrButton.getAttribute('disabled');

  if (currentState) {
    blrButton.removeAttribute('disabled');
    addLog('Set text button disabled state to false');
  } else {
    blrButton.setAttribute('disabled', 'true');
    addLog('Set text button loading state to true');
  }
});

blrButton.addEventListener('blrClick', () => {
  addLog('blr-text-button clicked');
});

blrButton.addEventListener('blrFocus', () => {
  addLog('blr-text-button focused');
});

blrButton.addEventListener('blrBlur', () => {
  addLog('blr-text-button blurred');
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

blrSelect.addEventListener('blrFocus', () => {
  addLog('blr-select focus');
});

blrSelect.addEventListener('blrBlur', () => {
  addLog('blr-select blur');
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
