/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
