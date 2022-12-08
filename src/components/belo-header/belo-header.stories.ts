/**
 * This is a Storybook component Section. Frist you will want to create 
 * the default sidebar faceted menu entry below.
 */

 export default {
  // this creates a ‘Components’ folder and a 'Button' subfolder in Storybook's side menu
  title: 'Components/Header',
  argTypes: {
    text: {
      description: 'Travel and belong anywhere',
      defaultValue: 'Travel and belong anywhere',
    },

    size: {
      options: ['1', '2', '3', '4', '5', '6'],
      control: { type: 'radio' },
      description: 'The Heading size'
    },

    align: {
      options: ['left', 'center', 'right'],
      control: {type : 'radio'},
      description: 'text alignment'
    }
  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <belo-header size="${args.size}" align="${args.align}">Travel and belong anywhere</belo-header>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const header = Template.bind({});
header.args = {
  text: 'Travel and belong anywhere',
  size: '1',
};
