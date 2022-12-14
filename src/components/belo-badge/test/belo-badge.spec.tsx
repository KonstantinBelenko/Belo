import { newSpecPage } from '@stencil/core/testing';
import { BeloBadge } from '../belo-badge';

describe('belo-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloBadge],
      html: `<belo-badge></belo-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-badge>
    `);
  });
});
