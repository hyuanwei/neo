import { NeoPage } from './app.po';

describe('neo App', () => {
  let page: NeoPage;

  beforeEach(() => {
    page = new NeoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
