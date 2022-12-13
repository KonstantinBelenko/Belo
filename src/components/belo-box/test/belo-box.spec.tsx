import { newSpecPage } from '@stencil/core/testing';
import { BeloBox } from '../belo-box';

describe('belo-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloBox],
      html: `<belo-box></belo-box>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-box>
    `);
  });
});
