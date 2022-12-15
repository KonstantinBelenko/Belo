import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import { create } from '@storybook/theming';

import logo from "./Belo.png"

// Check more theming options and advanced startegies at:
// https://storybook.js.org/docs/react/configure/theming

let beloTheme = create({
  base: 'light',
  brandTitle: 'Airbnb Belo',
  brandUrl: 'https://aribnb.com',
  brandImage: logo,
  brandTarget: '_target',
});

addons.setConfig({
  theme: beloTheme,
});
