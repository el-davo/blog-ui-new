import { Article } from '@landing/landing.state';

export const addArticleState: AddArticleState = {
  isAddingArticle: false,
  article: null
};

export interface AddArticleState {
  isAddingArticle: boolean;
  article: Article;
}
