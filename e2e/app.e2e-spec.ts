import { Angular2SchedulerPage } from './app.po';

describe('angular2-scheduler App', function() {
  let page: Angular2SchedulerPage;

  beforeEach(() => {
    page = new Angular2SchedulerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
