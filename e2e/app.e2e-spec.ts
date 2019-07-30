import { Where2goPage } from './app.po';

describe('where2go App', () => {
  let page: Where2goPage;

  beforeEach(() => {
    page = new Where2goPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
