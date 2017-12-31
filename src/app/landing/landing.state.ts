export const landingState: LandingState = {
  isFetchingArticles: false,
  articles: []
};

export interface LandingState {
  isFetchingArticles: boolean;
  articles: Article[];
}

export interface Article {
  id?: string;
  userId: string;
  name: string;
  summary: string;
  content: string;
  parsedContent: string;
  imgUrl: string;
  public: boolean;
  modified: string;
}
