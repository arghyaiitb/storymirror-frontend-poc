import { StorymirrorAppPage } from './app.po';

describe('storymirror-app App', () => {
  let page: StorymirrorAppPage;

  beforeEach(() => {
    page = new StorymirrorAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
