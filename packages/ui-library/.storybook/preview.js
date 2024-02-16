import '../../assets/iconGallery/iconGallery.css';
import '../../assets/fonts/fonts.css';
import { BADGE } from './badges';

export { BlrIcon } from '../src/components/ui/icon';

export default {
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'Light',
      values: [
        {
          name: 'Dark',
          value: 'hsl(216 9% 10% / 1)',
        },
        {
          name: 'Light',
          value: '#FFFFFF',
        },
      ],
    },
    badgesConfig: {
      [BADGE.DRAFT]: {
        styles: {
          fontSize: '0.75rem',
          fontWeight: '600',
          lineHeight: '1rem',
          backgroundColor: '#707070',
          borderRadius: '32px',
          borderStyle: '#707070 solid 32px',
          color: '#FFFFFF',
          textTransform: 'capitalize',
        },
        title: 'Draft',
        tooltip: {
          desc: 'Design, Code and/or Documentation are not finished. Components labeled as "Draft" are not yet ready for broader use.',
        },
      },
      [BADGE.NEW]: {
        styles: {
          fontSize: '0.75rem',
          fontWeight: '600',
          lineHeight: '1rem',
          backgroundColor: '#FFD614',
          borderRadius: '32px',
          borderColor: '#FFD614',
          color: '#414347',
          textTransform: 'capitalize',
        },
        title: 'New',
        tooltip: {
          desc: 'Newly introduced component, which has been tested and approved by the core team. Updates to Design, Code and/or Documentation are still possible.',
        },
      },
      [BADGE.STABLE]: {
        styles: {
          fontSize: '0.75rem',
          fontWeight: '600',
          lineHeight: '1rem',
          backgroundColor: '#50A824',
          borderColor: '#50A824',
          borderRadius: '32px',
          color: '#FFFFFF',
          textTransform: 'capitalize',
        },
        title: 'Stable',
        tooltip: {
          desc: 'Proven stable over multiple releases, the component has reached a mature and reliable state, suitable for widespread use.',
        },
      },
      [BADGE.DEPRECATED]: {
        styles: {
          fontSize: '0.75rem',
          fontWeight: '600',
          lineHeight: '1rem',
          backgroundColor: '#D22D48',
          borderRadius: '32px',
          borderColor: '#D22D48',
          color: '#FFFFFF',
          textTransform: 'capitalize',
        },
        title: 'Deprecated',
        tooltip: {
          desc: 'No longer receives active support and is not recommended for new implementations. Might be made unavailable soon. Transition to alternatives is advised.',
        },
      },
      [BADGE.UPDATED]: {
        styles: {
          fontSize: '0.75rem',
          fontWeight: '600',
          lineHeight: '1rem',
          backgroundColor: '#FFD614',
          borderColor: '#FFD614',
          borderRadius: '32px',
          color: '#414347',
          textTransform: 'capitalize',
        },
        title: 'Updated',
        tooltip: {
          desc: 'A previously stable component with new functionalities, which could still receive updates and has not yet reached a mature and reliable state.',
        },
      },
    },
  },
};
