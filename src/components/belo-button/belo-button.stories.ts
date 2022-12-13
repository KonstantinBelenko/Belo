/**
 * This is a Storybook component Section. Frist you will want to create 
 * the default sidebar faceted menu entry below.
 */

 export default {
  // this creates a ‘Components’ folder and a 'Button' subfolder in Storybook's side menu
  title: 'Components/Button',
  argTypes: {
    text: {
      description: 'This is a text placeholder',
      defaultValue: 'Label',
    },

    disabled: {
      description: 'Disabled button is not clickable',
      defaultValue: false,
    },

    pill: {
      description: 'Pill button is a rounded button',
      defaultValue: false,
    },

    variant: {
      description: 'Button variant. Primary or secondary',
      control: {
        type: 'radio', 
        labels: ["primary", "secondary"],
      },
      options: ["primary", "secondary"],
      defaultValue: "primary",
    }

  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <belo-button ${args.disabled ? "disabled" : ""} variant="${args.variant}" pill="${args.pill}">${args.text}</belo-button>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const BeloButton = Template.bind({});
BeloButton.args = {
  text: 'Label',
  disabled: false,
  pill: false,
  variant: "primary",
};
