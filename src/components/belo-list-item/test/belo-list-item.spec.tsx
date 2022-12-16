import { newSpecPage } from '@stencil/core/testing';
import { BeloListItem } from '../belo-list-item';

describe('belo-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloListItem],
      html: `<belo-list-item></belo-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-list-item>
    `);
  });
});
