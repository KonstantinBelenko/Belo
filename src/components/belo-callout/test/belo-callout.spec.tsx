import { newSpecPage } from '@stencil/core/testing';
import { BeloCallout } from '../belo-callout';

describe('belo-callout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloCallout],
      html: `<belo-callout></belo-callout>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-callout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-callout>
    `);
  });
});
