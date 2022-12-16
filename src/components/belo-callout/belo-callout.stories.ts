/**
 * This is a Storybook component Section. Frist you will want to create 
 * the default sidebar faceted menu entry below.
 */

 export default {
  title: 'Components/Callout',
  argTypes: {
    text: {
      description: 'This is a text placeholder',
      defaultValue: 'Lower price. Your dates are $318 less than the avg. nightly rate of the last 60 days.',
    },

    icon: {
      description: 'Callout icon.',
      control: {
        type: 'select',
      },
      options: ['bell'],
      defaultValue: "bell",
    }

  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <belo-callout icon="${args.icon}">${args.text}</belo-callout>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Callout = Template.bind({});
Callout.args = {
  text: 'Lower price. Your dates are $318 less than the avg. nightly rate of the last 60 days.',
  icon: "bell",
};
