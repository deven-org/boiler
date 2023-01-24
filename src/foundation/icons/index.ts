import { html } from 'lit';

const boilerChevronDownGreen = html`<svg
  fill="currentColor"
  height="800px"
  width="800px"
  version="1.1"
  viewBox="0 0 407.437 407.437"
  xml:space="preserve"
>
  <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " />
</svg>`;

const boilerChevronDown = html`<svg
  fill="currentColor"
  height="800px"
  width="800px"
  version="1.1"
  viewBox="0 0 407.437 407.437"
  xml:space="preserve"
>
  <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " />
</svg>`;

export const IconMapping = { boilerChevronDownGreen, boilerChevronDown } as const;
export type IconType = keyof typeof IconMapping;
