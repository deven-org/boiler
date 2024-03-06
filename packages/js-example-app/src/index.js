import '@boiler/ui-library/dist/index.js';
import './style.scss';
import {TagNames} from '@boiler/ui-library/dist/index.js';

const toggleLoadingButton = document.querySelector('#toggleLoadingState');
const toggleDisabledState = document.querySelector('#toggleDisabledState');
const logsContainer = document.querySelector('#logs');

const textButton = document.getElementsByTagName(`${TagNames.TextButton}`)[2];
const checkbox = document.getElementsByTagName(`${TagNames.Checkbox}`)[0];
const select = document.getElementsByTagName(`${TagNames.Select}`)[0];
const textInput = document.getElementsByTagName(`${TagNames.TextInput}`)[0];
const textArea = document.getElementsByTagName(`${TagNames.Textarea}`)[0];

const addLog = (log) => {
  logsContainer.innerHTML = logsContainer.innerHTML + log + '<br>';

  logsContainer.scrollTo(0, logsContainer.scrollHeight);
};

toggleLoadingButton.addEventListener('click', () => {
  const currentState = button.getAttribute('loading');

  if (currentState) {
    textButton.removeAttribute('loading');
    addLog('Set text button loading state to false');
  } else {
    textButton.setAttribute('loading', 'true');
    addLog('Set text button loading state to true');
  }
});

toggleDisabledState.addEventListener('click', () => {
  const currentState = textButton.getAttribute('disabled');

  if (currentState) {
    textButton.removeAttribute('disabled');
    addLog('Set text button disabled state to false');
  } else {
    textButton.setAttribute('disabled', 'true');
    addLog('Set text button loading state to true');
  }
});

textButton.addEventListener('blrClick', () => {
  addLog(`${TagNames.TextButton} clicked`);
});

textButton.addEventListener('blrFocus', () => {
  addLog(`${TagNames.TextButton} focused`);
});

textButton.addEventListener('blrBlur', () => {
  addLog(`${TagNames.TextButton} blurred`);
});

checkbox.addEventListener('blrCheckedChange', (e) => {
  addLog(`${TagNames.Checkbox} changed: ${e.detail.checkedState}`);
});

checkbox.addEventListener('blrFocus', () => {
  addLog(`${TagNames.Checkbox} focused`);
});

checkbox.addEventListener('blrBlur', () => {
  addLog(`${TagNames.Checkbox} blurred`);
});

select.addEventListener('blrSelectedValueChange', () => {
  addLog(`${TagNames.Select} changed`);
});

textInput.addEventListener('blrFocus', () => {
  addLog(`${TagNames.TextInput} focused`);
});

textInput.addEventListener('blrBlur', () => {
  addLog(`${TagNames.TextInput} blurred`);
});

textInput.addEventListener('blrTextValueChange', () => {
  addLog(`${TagNames.TextInput} changed`);
});

textArea.addEventListener('blrFocus', () => {
  addLog(`${TagNames.Textarea} focused`);
});

textArea.addEventListener('blrBlur', () => {
  addLog(`${TagNames.Textarea} blurred`);
});

textArea.addEventListener('blrChange', () => {
  addLog(`${TagNames.Textarea} changed`);
});

textArea.addEventListener('blrSelect', () => {
  addLog(`${TagNames.Textarea} selected`);
});
