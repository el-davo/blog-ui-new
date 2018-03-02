import {browser, by, element} from 'protractor';

class LandingPo {

  cards = element.all(by.className('article-card'));

  go() {
    return browser.get('/');
  }

  getTotalCards() {
    return this.cards.count();
  }

  getCardByHeader(cardTitle: string) {
    return element(by.cssContainingText('.mat-card-title', cardTitle));
  }

  clickEditOnCard(cardHeader: string) {
    this.getCardByHeader(cardHeader).element(by.xpath('../../..')).element(by.cssContainingText('.mat-button-wrapper', 'Edit')).click();
  }
}

export const landingPo = new LandingPo();
