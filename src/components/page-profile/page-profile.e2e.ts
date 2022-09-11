import { newE2EPage } from '@stencil/core/testing';

describe('page-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-profile></page-profile>');

    const element = await page.find('page-profile');
    expect(element).toHaveClass('hydrated');
  });
});
