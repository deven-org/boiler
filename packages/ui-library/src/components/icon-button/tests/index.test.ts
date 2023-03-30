/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

const props = {
  ariaLabel: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  iconName: 'blrChevronDownMd',
  variant: 'cta',
  size: 'md',
  loadingStatus: 'loading',
};

describe('blr-icon-button', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
    <blr-icon-button
      ariaLabel=${props.ariaLabel}
      iconName=${props.iconName}
      buttonId="id"
      disabled="false"
      variant=${props.variant}
      size=${props.size}
      class="example-layout-class"
      loadingStatus=${props.loadingStatus}
    ></blr-icon-button>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
