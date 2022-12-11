import { newSpecPage } from '@stencil/core/testing';
import { BeloCard } from '../belo-card';

describe('belo-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloCard],
      html: `<belo-card></belo-card>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-card>
    `);
  });
});
