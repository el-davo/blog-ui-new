import {Injectable} from '@angular/core';
import {Article} from '../landing/landing.state';

@Injectable()
export class EditArticleActions {

  static FETCH = 'edit-article/FETCH';
  static FETCH_SUCCESS = 'edit-article/FETCH_SUCCESS';
  static FETCH_FAIL = 'edit-article/FETCH_FAIL';

  static UPDATE = 'edit-article/UPDATE';
  static UPDATE_SUCCESS = 'edit-article/UPDATE_SUCCESS';
  static UPDATE_FAIL = 'edit-article/UPDATE_FAIL';

  static UPDATE_NAME = 'edit-article/UPDATE_NAME';
  static UPDATE_SUMMARY = 'edit-article/UPDATE_SUMMARY';
  static UPDATE_CONTENT = 'edit-article/UPDATE_CONTENT';
  static UPDATE_IMG_URL = 'edit-article/UPDATE_IMG_URL';
  static UPDATE_PUBLIC = 'edit-article/UPDATE_PUBLIC';

  fetch = (articleId: string) => ({type: EditArticleActions.FETCH, articleId});

  fetchSuccess = (article: Article) => ({type: EditArticleActions.FETCH_SUCCESS, article});

  fetchFail = () => ({type: EditArticleActions.FETCH_FAIL});

  update = () => ({type: EditArticleActions.UPDATE});

  updateSuccess = () => ({type: EditArticleActions.UPDATE_SUCCESS});

  updateFail = () => ({type: EditArticleActions.UPDATE_FAIL});

  updateName = (name: string) => ({type: EditArticleActions.UPDATE_NAME, name});

  updateSummary = (summary: string) => ({type: EditArticleActions.UPDATE_SUMMARY, summary});

  updateContent = (content: string) => ({type: EditArticleActions.UPDATE_CONTENT, content});

  updateImgUrl = (imgUrl: string) => ({type: EditArticleActions.UPDATE_IMG_URL, imgUrl});

  updatePublic = (isPublic: boolean) => ({type: EditArticleActions.UPDATE_PUBLIC, isPublic});
}
