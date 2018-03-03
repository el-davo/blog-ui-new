import {by, element} from 'protractor';

class EditArticlePo {

  name = element.all(by.css('input')).get(0);
  summary = element.all(by.css('input')).get(1);
  imgUrl = element.all(by.css('input')).get(2);
  public = element(by.css('.mat-slide-toggle-thumb'));
  content = element(by.css('textarea'));
  editButton = element(by.css('.mat-card-actions button'));

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

  clickEdit() {
    this.editButton.click();
  }

  edit(name: string, summary: string, imgUrl: string, content: string) {
    this.setName(name);
    this.setSummary(summary);
    this.setImgUrl(imgUrl);
    this.setContent(content);
    this.clickEdit();
  }
}

export const editArticlePo = new EditArticlePo();
