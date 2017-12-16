import {Article} from '../landing/landing.state';

export const viewArticleState: ViewArticleState = {
  isFetchingArticle: false,
  article: null
};

export interface ViewArticleState {
  isFetchingArticle: boolean;
  article: Article
}
