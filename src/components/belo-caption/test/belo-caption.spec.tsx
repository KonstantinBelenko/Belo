import { newSpecPage } from '@stencil/core/testing';
import { BeloCaption } from '../belo-caption';

describe('belo-caption', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloCaption],
      html: `<belo-caption></belo-caption>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-caption>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-caption>
    `);
  });
});
