/**
 * STORYBOOK TEMPLATE - Copy this file into your newly generated component folder, rename it
 * accordingly to match your component name and replace the `.template` suffix by '.ts' and then
 * populate the testing stories following the instructions below.
 */

export default {
  // This creates a ‘Components’ folder and a subfolder with the MyComponent menu item
  // of in Storybook's side menu. Replace 'MyComponent' by the generic component name.
  title: 'Components/Input',
  // Populate the `argTypes` property with knobs to customize the component.
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component 
    // variant: {
    //   options: ['neutral', 'error'],        // Value presets
    //   control: { type: 'select' },          // Knob type. It can be select, radio, etc
    //   description: 'The button variant',    // The description text displayed in the knobs table
    // },
    
    label: {
      description: 'text holder for the input label',
      defaultValue: 'label',
    },

    placeholder: {
      description: 'text holder for the input placeholder',
      defaultValue: 'Text placeholder',
    },

    hint: {
      options: ['true', 'none'],
      control: {type: 'radio'},
      description: 'toggels the hint option'
    },

    hinttext: {
      description: 'text holder for the hin, if the hint property is set to anythin else but true, it will not be displayed.',
      defaultValue: 'Hint',
    },

    disabled: {
      options: ['disabled', 'none'],
      control: {type: 'radio'},
      description: 'defines a disabled state for the button, is an optional argument'
    },

    required: {
      options: ['required', 'none'],
      control: {type: 'radio'},
      description: 'defines a required state for the input, is an optional argument'
    }
  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => 
`<belo-input disabled="${args.disabled}" label="${args.label}" placeholder="${args.placeholder}" hint="${args.hint}" hinttext="${args.hinttext}" required="${args.required}">`;


/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding and replace {@link ComponentStory} by
 * a proper 
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Input = Template.bind({});
Input.args = {
  // Populate this object with key/value pairs, customizing the component atribute values or even its content. Eg:
  // content: 'Demo text',
label: 'Label',
placeholder: 'Text Placeholder',
hint: 'true',
hinttext: 'Hint',

};

export const InputRequired = Template.bind({});
InputRequired.args = {
  // Populate this object with key/value pairs, customizing the component atribute values or even its content. Eg:
  // content: 'Demo text',
label: 'Label',
placeholder: 'Text Placeholder',
hint: 'true',
hinttext: 'Hint',
required: 'required'

};

export const InputDisabled = Template.bind({});
InputDisabled.args = {
  // Populate this object with key/value pairs, customizing the component atribute values or even its content. Eg:
  // content: 'Demo text',
label: 'Label',
placeholder: 'Text Placeholder',
hint: 'true',
hinttext: 'Hint',
disabled: 'disabled'

};
