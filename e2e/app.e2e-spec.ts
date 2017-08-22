import { RouterTestPage } from './app.po';

describe('router-test App', () => {
  let page: RouterTestPage;

  beforeEach(() => {
    page = new RouterTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
