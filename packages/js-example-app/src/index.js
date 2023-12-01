import _ from 'lodash';
import '@boiler/ui-library/dist/index.js';
import {html, render} from 'lit-html';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  const sayHi = () => html`<blr-textarea .placeholder="Enter text..." .value="" .showHint=${true} .hintText="Hint" .isResizeable="both" .showCounter=${true} .maxLength=${130} @david=${() => {console.log('test')}} .warningLimitType="warningLimitInt" .warningLimitInt=${105}></blr-textarea>`;
  render(sayHi('David'), document.querySelector('#someId'));


  const toggleButton = document.querySelector('#toggleLoadingState');
  const blrButton = document.getElementsByTagName('blr-text-button')[0];

  const textarea = document.querySelector('#someId>blr-textarea');


  toggleButton.addEventListener("click", () => {
    blrButton.setAttribute('loading', 'true');
  });

  textarea.addEventListener("david", () => {
    console.log('test')
  });

