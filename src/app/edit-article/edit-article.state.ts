import {Article} from '../landing/landing.state';

export const editArticleState: EditArticleState = {
  isFetchingArticle: false,
  isUpdatingArticle: false,
  article: null
};

export interface EditArticleState {
  isFetchingArticle: boolean;
  isUpdatingArticle: boolean;
  article: Article;
}
