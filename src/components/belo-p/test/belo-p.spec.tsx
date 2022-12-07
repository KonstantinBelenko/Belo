import { newSpecPage } from '@stencil/core/testing';
import { BeloP } from '../belo-p';

describe('belo-p', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloP],
      html: `<belo-p></belo-p>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-p>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-p>
    `);
  });
});
