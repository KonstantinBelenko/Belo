import { newSpecPage } from '@stencil/core/testing';
import { BeloHeader } from '../belo-header';

describe('belo-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloHeader],
      html: `<belo-header></belo-header>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-header>
    `);
  });
});
