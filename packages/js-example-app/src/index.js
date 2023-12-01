import _ from 'lodash';
import '@boiler/ui-library/dist/index.js'

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());


  const toggleButton = document.querySelector('#toggleLoadingState');
  const blrButton = document.getElementsByTagName('blr-text-button')[0];

  toggleButton.addEventListener("click", () => {
    blrButton.setAttribute('loading', 'true');
  });
