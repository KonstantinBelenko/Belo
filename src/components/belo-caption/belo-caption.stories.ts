/**
 * This is a Storybook component Section. Frist you will want to create 
 * the default sidebar faceted menu entry below.
 */

 export default {
  // this creates a ‘Components’ folder and a 'Button' subfolder in Storybook's side menu
  title: 'Components/Caption',
  argTypes: {
    text: {
      description: 'This is a text place holder',
      defaultValue: 'Airbnb began in 2008 when two designers who had space to share hosted three travelers looking for a place to stay. Let’s create a world where you can travel and belong anywhere.0123456789',
    },
    
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'radio' },
      description: 'text alignment direction'
    }
  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <belo-caption align="${args.align}">Airbnb began in 2008 when two designers who had space to share hosted three travelers looking for a place to stay. Let’s create a world where you can travel and belong anywhere.0123456789
  </belo-caption>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Caption = Template.bind({});
Caption.args = {
  text: 'Airbnb began in 2008 when two designers who had space to share hosted three travelers looking for a place to stay. Let’s create a world where you can travel and belong anywhere.0123456789',
  //align="center",
};
