import { newSpecPage } from '@stencil/core/testing';
import { BeloText } from '../belo-text';

describe('belo-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloText],
      html: `<belo-text></belo-text>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-text>
    `);
  });
});
