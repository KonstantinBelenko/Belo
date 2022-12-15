/**
 * STORYBOOK TEMPLATE - Copy this file into your newly generated component folder, rename it
 * accordingly to match your component name and replace the `.template` suffix by '.ts' and then
 * populate the testing stories following the instructions below.
 */

export default {
    // This creates a ‘Components’ folder and a subfolder with the MyComponent menu item
    // of in Storybook's side menu. Replace 'MyComponent' by the generic component name.
    title: 'Components/Avatar',
    // Populate the `argTypes` property with knobs to customize the component.
    // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
    argTypes: {

      image: {
        description: 'image url',
        defaultValue: "https://media.licdn.com/dms/image/C4D03AQGIyU5mos4kHg/profile-displayphoto-shrink_800_800/0/1663105376656?e=1676505600&v=beta&t=oJJL8nvIcYA-f6dz7UVoNqb89VaSlUokRUqnyecIujQ",
      },

      alt: {
        description: 'alt text',
        defaultValue: 'Avatar image',
      },

      size: {
        description: 'size',
        defaultValue: 'small',
        control: {
          type: 'radio',
        },
        options: ['small', 'large'],
      },

      badge: {
        description: 'badge',
        defaultValue: 'online',
        control: {
          type: 'radio',
        },
        options: ['online', 'offline'],
      },

      badgeCounter: {
        description: 'badge counter',
        defaultValue: 3,
        control: { type: 'range', min: 0, max: 100, step: 1 },
      },
    }
  };
  
  /**
   * Now you can create a reusable template for your component that you 
   * can later on customize with different values for its attribute properties and events
   */
  const Template = (args) => `
  <belo-avatar badge="${args.badge}" badge-counter="${args.badgeCounter}" size="${args.size}" image="${args.image}" alt="${args.alt}"></belo-avatar>
  `;
  
  /**
   * Now you can leverage the template above to generate multiple snapshots of your component
   * with distinct combinations of property values and event handlers. 
   * Names must be PascalCased and Storybook will split names by capitals.
   * IMPORTANT: Remember to export each template binding and replace {@link ComponentStory} by
   * a proper 
   * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
   */
  export const Avatar = Template.bind({});
  Avatar.args = {
    // Populate this object with key/value pairs, customizing the component atribute values or even its content. Eg:
    // content: 'Demo text',
    image: "https://media.licdn.com/dms/image/C4D03AQGIyU5mos4kHg/profile-displayphoto-shrink_800_800/0/1663105376656?e=1676505600&v=beta&t=oJJL8nvIcYA-f6dz7UVoNqb89VaSlUokRUqnyecIujQ",
    alt: 'Avatar image',
    size: 'large',
    badge: 'online',
    badgeCounter: 3,
  };