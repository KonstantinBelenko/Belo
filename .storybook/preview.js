import { defineCustomElements } from '../loader';
import { themes } from '@storybook/theming';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on.*|clicked' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
