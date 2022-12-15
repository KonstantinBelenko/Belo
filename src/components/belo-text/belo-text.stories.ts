/**
 * This is a Storybook component Section. Frist you will want to create 
 * the default sidebar faceted menu entry below.
 */

 export default {
  // this creates a ‘Components’ folder and a 'Button' subfolder in Storybook's side menu
  title: 'Components/Text',
  argTypes: {
    text: {
      description: 'This is a text place holder',
      defaultValue: 'Airbnb began in 2008 when two designers who had space to share hosted three travelers looking for a place to stay. Let’s create a world where you can travel and belong anywhere.0123456789',
    },
    
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'radio' },
      description: 'text alignment direction'
    },

    // size with control range
    size: {
      defaultValue: 16,
      control: { type: 'range', min: 10, max: 56, step: 2 },
      description: 'text size'
    },

    // weight with control range
    weight: {
      defaultValue: 400,
      control: { type: 'range', min: 100, max: 800, step: 100 },
      description: 'text weight'
    },

    // color with control color
    color: {
      defaultValue: '#000000',
      control: { type: 'color' },
      description: 'text color'
    },

  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <belo-text size="${args.size}px" color="${args.color}" weight="${args.weight}" align="${args.align}">Airbnb began in 2008 when two designers who had space to share hosted three travelers looking for a place to stay. Let’s create a world where you can travel and belong anywhere.0123456789
  </belo-text>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Text = Template.bind({});
Text.args = {
  text: 'Airbnb began in 2008 when two designers who had space to share hosted three travelers looking for a place to stay. Let’s create a world where you can travel and belong anywhere.0123456789',
  align:"left",
  size: 16,
  weight: 400,
  color: '#000000',
};
