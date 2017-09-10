import { Ang2CRUDAppPage } from './app.po';

describe('ang2-crud-app App', function() {
  let page: Ang2CRUDAppPage;

  beforeEach(() => {
    page = new Ang2CRUDAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
