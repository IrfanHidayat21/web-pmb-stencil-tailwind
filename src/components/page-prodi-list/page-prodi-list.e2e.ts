import { newE2EPage } from '@stencil/core/testing';

describe('page-prodi-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-prodi-list></page-prodi-list>');

    const element = await page.find('page-prodi-list');
    expect(element).toHaveClass('hydrated');
  });
});
