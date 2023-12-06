import '@boiler/ui-library/dist/index.js';
import './style.scss';

const toggleLoadingButton = document.querySelector('#toggleLoadingState');
const toggleDisabledState = document.querySelector('#toggleDisabledState');
const logsContainer = document.querySelector('#logs');

const blrButton = document.getElementsByTagName('blr-text-button')[0];

const addLog = (log) => {
  logsContainer.innerHTML = logsContainer.innerHTML + log + '<br>';
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
