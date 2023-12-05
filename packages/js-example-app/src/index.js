import '@boiler/ui-library/dist/index.js';
import './style.scss';

const toggleButton = document.querySelector('#toggleLoadingState');
const blrButton = document.getElementsByTagName('blr-text-button')[0];

console.log({ toggleButton, blrButton });

toggleButton.addEventListener('click', () => {
  const currentState = blrButton.getAttribute('loading');

  if (currentState) {
    blrButton.removeAttribute('loading');
  } else {
    blrButton.setAttribute('loading', 'true');
  }
});
