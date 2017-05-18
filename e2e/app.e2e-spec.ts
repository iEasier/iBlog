import { IBlogPage } from './app.po';

describe('i-blog App', function() {
  let page: IBlogPage;

  beforeEach(() => {
    page = new IBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
