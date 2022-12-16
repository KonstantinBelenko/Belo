import { newSpecPage } from '@stencil/core/testing';
import { BeloStorybookColorBox } from '../belo-storybook-color-box';

describe('belo-storybook-color-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloStorybookColorBox],
      html: `<belo-storybook-color-box></belo-storybook-color-box>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-storybook-color-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-storybook-color-box>
    `);
  });
});
