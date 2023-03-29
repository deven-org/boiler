/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

const props = {
  ariaLabel: 'IconLink',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  iconName: 'blrChevronDownMd',
  variant: 'cta',
  size: 'md',
  loading: false,
};

describe('blr-icon-link', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
    <blr-icon-link
      ariaLabel=${props.ariaLabel}
      iconName=${props.iconName}
      linkId="id"
      variant=${props.variant}
      size=${props.size}
      class="example-layout-class"
      href="#"
      target="_blank"
      loading=${props.loading}
    ></blr-icon-link>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
