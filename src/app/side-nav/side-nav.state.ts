import {Article} from '../landing/landing.state';

export const sideNavState: SideNavState = {
  showSideNav: false,
  isFetchingArticles: false,
  articles: []
};

export interface SideNavState {
  showSideNav: boolean;
  isFetchingArticles: boolean;
  articles: Article[];
}
