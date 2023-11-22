// import '!style-loader!css-loader!sass-loader!@boiler/ui-library/src/foundation/_tokens-generated/index.generated.scss';
import '../static/iconGallery/iconGallery.css';

export default {
  parameters: {
    layout: 'padded',
    layout: 'centered',
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
