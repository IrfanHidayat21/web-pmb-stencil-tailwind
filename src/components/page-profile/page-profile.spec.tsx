import { newSpecPage } from '@stencil/core/testing';
import { PageProfile } from './page-profile';

describe('page-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageProfile],
      html: `<page-profile></page-profile>`,
    });
    expect(page.root).toEqualHtml(`
      <page-profile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-profile>
    `);
  });
});
