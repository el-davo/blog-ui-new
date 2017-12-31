import {Injectable} from '@angular/core';

@Injectable()
export class AddArticleActions {

  static ADD = 'add-article/ADD';
  static ADD_SUCCESS = 'add-article/ADD_SUCCESS';
  static ADD_FAIL = 'add-article/ADD_FAIL';

  static UPDATE_NAME = 'add-article/UPDATE_NAME';
  static UPDATE_SUMMARY = 'add-article/UPDATE_SUMMARY';
  static UPDATE_CONTENT = 'add-article/UPDATE_CONTENT';
  static UPDATE_IMG_URL = 'add-article/UPDATE_IMG_URL';
  static UPDATE_PUBLIC = 'add-article/UPDATE_PUBLIC';

  add = () => ({type: AddArticleActions.ADD});

  addSuccess = () => ({type: AddArticleActions.ADD_SUCCESS});

  addFail = () => ({type: AddArticleActions.ADD_FAIL});

  updateName = (name: string) => ({type: AddArticleActions.UPDATE_NAME, name});

  updateSummary = (summary: string) => ({type: AddArticleActions.UPDATE_SUMMARY, summary});

  updateContent = (content: string) => ({type: AddArticleActions.UPDATE_CONTENT, content});

  updateImgUrl = (imgUrl: string) => ({type: AddArticleActions.UPDATE_IMG_URL, imgUrl});

  updatePublic = (isPublic: boolean) => ({type: AddArticleActions.UPDATE_PUBLIC, isPublic});
}
