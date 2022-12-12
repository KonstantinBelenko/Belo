/**
 * STORYBOOK TEMPLATE - Copy this file into your newly generated component folder, rename it
 * accordingly to match your component name and replace the `.template` suffix by '.ts' and then
 * populate the testing stories following the instructions below.
 */

export default {
  // This creates a ‘Components’ folder and a subfolder with the MyComponent menu item
  // of in Storybook's side menu. Replace 'MyComponent' by the generic component name.
  title: 'Components/Card',
  // Populate the `argTypes` property with knobs to customize the component.
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    image: {
      description: 'image url'
    },
    location: {
      description: 'infromation about the city, ex: Madrid, Spain'
    },
    score: {
      description: 'score out of 5'
    },
    price_per_night: {
      description: 'indicates the price per nigh, ex, 10$'
    },
    total_price: {
      description: 'the total price, ex, 200$'
    }
  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <belo-card image="${args.image}" 
    location="${args.location}"
    details="${args.details}"
    score="${args.score}"
    price_per_night="${args.price_per_night}"
    total_price="${args.total_price}"
    ></belo-card>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding and replace {@link ComponentStory} by
 * a proper 
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Card = Template.bind({});
Card.args = {
  // Populate this object with key/value pairs, customizing the component atribute values or even its content. Eg:
  // content: 'Demo text',
  image: 'https://media.revistaad.es/photos/62c2be405044c23fff61d3ec/master/w_1600%2Cc_limit/The%2520Boot%2520-%2520New%2520Zealand.jpg',
  location: 'Madrid,Spain',
  details: 'Listing Details',
  score: '4.87',
  price_per_night: '$10',
  total_price: '$200'
};
