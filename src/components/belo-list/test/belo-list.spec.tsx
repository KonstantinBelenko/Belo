import { newSpecPage } from '@stencil/core/testing';
import { BeloList } from '../belo-list';

describe('belo-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloList],
      html: `<belo-list></belo-list>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-list>
    `);
  });
});
