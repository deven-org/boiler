import '@boiler/ui-library/dist/index.js';
import './style.scss';
import {componentsPrefix} from '../../../prefix';

const toggleLoadingButton = document.querySelector('#toggleLoadingState');
const toggleDisabledState = document.querySelector('#toggleDisabledState');
const logsContainer = document.querySelector('#logs');

const button = document.getElementsByTagName(`${componentsPrefix}-text-button`)[0];
const checkbox = document.getElementsByTagName(`${componentsPrefix}-checkbox`)[0];
const select = document.getElementsByTagName(`${componentsPrefix}-select`)[0];
const textInput = document.getElementsByTagName(`${componentsPrefix}-text-input`)[0];
const textArea = document.getElementsByTagName(`${componentsPrefix}-textarea`)[0];

const addLog = (log) => {
  logsContainer.innerHTML = logsContainer.innerHTML + log + '<br>';

  logsContainer.scrollTo(0, logsContainer.scrollHeight);
};

toggleLoadingButton.addEventListener('click', () => {
  const currentState = button.getAttribute('loading');

  if (currentState) {
    button.removeAttribute('loading');
    addLog('Set text button loading state to false');
  } else {
    button.setAttribute('loading', 'true');
    addLog('Set text button loading state to true');
  }
});

toggleDisabledState.addEventListener('click', () => {
  const currentState = button.getAttribute('disabled');

  if (currentState) {
    button.removeAttribute('disabled');
    addLog('Set text button disabled state to false');
  } else {
    button.setAttribute('disabled', 'true');
    addLog('Set text button loading state to true');
  }
});

button.addEventListener('blrClick', () => {
  addLog(`${componentsPrefix}-text-button clicked`);
});

button.addEventListener('blrFocus', () => {
  addLog(`${componentsPrefix}-text-button focused`);
});

button.addEventListener('blrBlur', () => {
  addLog(`${componentsPrefix}-text-button blurred`);
});

checkbox.addEventListener('blrCheckedChange', (e) => {
  addLog(`${componentsPrefix}-checkbox changed: ${e.detail.checkedState}`);
});

checkbox.addEventListener('blrFocus', () => {
  addLog(`${componentsPrefix}-checkbox focused`);
});

checkbox.addEventListener('blrBlur', () => {
  addLog(`${componentsPrefix}-checkbox blurred`);
});

select.addEventListener('blrSelectedValueChange', () => {
  addLog(`${componentsPrefix}-select changed`);
});

textInput.addEventListener('blrFocus', () => {
  addLog(`${componentsPrefix}-text-input focused`);
});

textInput.addEventListener('blrBlur', () => {
  addLog(`${componentsPrefix}-text-input blurred`);
});

textInput.addEventListener('blrTextValueChange', () => {
  addLog(`${componentsPrefix}-text-input changed`);
});

textArea.addEventListener('blrFocus', () => {
  addLog(`${componentsPrefix}-textarea focused`);
});

textArea.addEventListener('blrBlur', () => {
  addLog(`${componentsPrefix}-textarea blurred`);
});

textArea.addEventListener('blrChange', () => {
  addLog(`${componentsPrefix}-textarea changed`);
});

textArea.addEventListener('blrSelect', () => {
  addLog(`${componentsPrefix}-textarea selected`);
});
