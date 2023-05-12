/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

const props = {
  ariaLabel: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  icon: 'blrChevronDown',
  variant: 'cta',
  size: 'md',
  loadingStatus: 'loading',
};

describe('blr-icon-button', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
    <blr-icon-button
      ariaLabel=${props.ariaLabel}
      icon=${props.icon}
      size=${props.size}
      buttonId="id"
      disabled="false"
      variant=${props.variant}
      class="example-layout-class"
      loadingStatus=${props.loadingStatus}
    ></blr-icon-button>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
