import { newSpecPage } from '@stencil/core/testing';
import { BeloAvatar } from '../belo-avatar';

describe('belo-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloAvatar],
      html: `<belo-avatar></belo-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-avatar>
    `);
  });
});
