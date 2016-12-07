import { ClientAdminPage } from './app.po';

describe('client-admin App', function() {
  let page: ClientAdminPage;

  beforeEach(() => {
    page = new ClientAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
