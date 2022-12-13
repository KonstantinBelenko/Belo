/**
 * STORYBOOK TEMPLATE - Copy this file into your newly generated component folder, rename it
 * accordingly to match your component name and replace the `.template` suffix by '.ts' and then
 * populate the testing stories following the instructions below.
 */

export default {
  // This creates a ‘Components’ folder and a subfolder with the MyComponent menu item
  // of in Storybook's side menu. Replace 'MyComponent' by the generic component name.
  title: 'Components/TextArea',
  // Populate the `argTypes` property with knobs to customize the component.
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    maxlength: {
      description: 'this is the max amount of characters the textare will take'
    },

    placeholder: {
      description: 'this is the placeholder text'
    },

    disabled: {
      options: [true, false],
      controls: {type: 'radio'},
      dafaultValue: false,
      description: 'makes the text area disabled, is an optional argument'
    }
  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <belo-text-area maxlength=${args.maxlength} placeholder=${args.placeholder} disabled=${args.disabled}></belo-text-area>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding and replace {@link ComponentStory} by
 * a proper 
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const TextAreaDefault = Template.bind({});
TextAreaDefault.args = {
  // Populate this object with key/value pairs, customizing the component atribute values or even its content. Eg:
  // content: 'Demo text',
  maxlength: '500',
  placeholder: 'Placeholder text',
  disabled: false

};

export const TextAreaDisabled = Template.bind({});
TextAreaDisabled.args = {
  // Populate this object with key/value pairs, customizing the component atribute values or even its content. Eg:
  // content: 'Demo text',
  maxlength: '500',
  placeholder: 'Placeholder text',
  disabled: true
};