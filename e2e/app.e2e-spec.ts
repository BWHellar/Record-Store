import { RecordPage } from './app.po';

describe('record App', () => {
  let page: RecordPage;

  beforeEach(() => {
    page = new RecordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
