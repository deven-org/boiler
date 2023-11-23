import '../../assets/iconGallery/iconGallery.css';
import '../../assets/fonts/fonts.css';

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
          value: '#000000',
        },
        {
          name: 'Light',
          value: '#FFFFFF',
        },
      ],
    },
  },
};
