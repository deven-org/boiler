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
          title: 'This is Beta',
          desc: 'here is a description',
          links: [
            { title: 'Read more', href: 'https:boilerds.com' },
            {
              title: 'Leave Feedback',
              onClick: () => {
                alert('thanks for the feedback');
              },
            },
          ],
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
          title: 'This is Beta',
          desc: 'here is a description',
          links: [
            { title: 'Read more', href: 'https:boilerds.com' },
            {
              title: 'Leave Feedback',
              onClick: () => {
                alert('thanks for the feedback');
              },
            },
          ],
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
          title: 'This is Beta',
          desc: 'here is a description',
          links: [
            { title: 'Read more', href: 'https:boilerds.com' },
            {
              title: 'Leave Feedback',
              onClick: () => {
                alert('thanks for the feedback');
              },
            },
          ],
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
          title: 'This is Beta',
          desc: 'here is a description',
          links: [
            { title: 'Read more', href: 'https:boilerds.com' },
            {
              title: 'Leave Feedback',
              onClick: () => {
                alert('thanks for the feedback');
              },
            },
          ],
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
          title: 'This is Beta',
          desc: 'here is a description',
          links: [
            { title: 'Read more', href: 'https:boilerds.com' },
            {
              title: 'Leave Feedback',
              onClick: () => {
                alert('thanks for the feedback');
              },
            },
          ],
        },
      },
    },
  },
};
