import { newSpecPage } from '@stencil/core/testing';
import { PageRegister } from './page-register';

describe('page-register', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageRegister],
      html: `<page-register></page-register>`,
    });
    expect(page.root).toEqualHtml(`
      <page-register>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-register>
    `);
  });
});
