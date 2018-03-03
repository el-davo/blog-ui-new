import {by, element} from 'protractor';

class CreateArticlePo {

  name = element.all(by.css('input')).get(0);
  summary = element.all(by.css('input')).get(1);
  imgUrl = element.all(by.css('input')).get(2);
  public = element(by.css('.mat-slide-toggle-thumb'));
  content = element(by.css('textarea'));
  createButton = element(by.css('.mat-card-actions button'));

  setName(name: string) {
    this.name.clear();
    this.name.sendKeys(name);
  }

  setSummary(summary: string) {
    this.summary.clear();
    this.summary.sendKeys(summary);
  }

  setImgUrl(imgUrl: string) {
    this.imgUrl.clear();
    this.imgUrl.sendKeys(imgUrl);
  }

  togglePublic() {
    this.public.click();
  }

  setContent(content: string) {
    this.content.clear();
    this.content.sendKeys(content);
  }

  clickCreate() {
    this.createButton.click();
  }

  createPublic(name: string, summary: string, imgUrl: string, content: string) {
    this.setName(name);
    this.setSummary(summary);
    this.setImgUrl(imgUrl);
    this.togglePublic();
    this.setContent(content);
    this.clickCreate();
  }
}

export const createArticlePo = new CreateArticlePo();
