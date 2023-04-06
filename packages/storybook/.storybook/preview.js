import '!style-loader!css-loader!sass-loader!@boiler/ui-library/src/foundation/_tokens-generated/index.generated.scss';
import '../static/iconGallery/iconGallery.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
