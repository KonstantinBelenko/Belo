import { newSpecPage } from '@stencil/core/testing';
import { BeloLink } from '../belo-link';

describe('belo-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloLink],
      html: `<belo-link></belo-link>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-link>
    `);
  });
});
