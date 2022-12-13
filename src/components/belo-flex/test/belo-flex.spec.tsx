import { newSpecPage } from '@stencil/core/testing';
import { BeloFlex } from '../belo-flex';

describe('belo-flex', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloFlex],
      html: `<belo-flex></belo-flex>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-flex>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-flex>
    `);
  });
});
