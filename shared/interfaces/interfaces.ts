interface Content {
  _id?: string;
  title?: string;
  category?: string;
  cover?: string;
  tags?: string[];
  badges?: string[];
  likes?: number;
  stars?: number;
  links?: Link[];
  index?: Index[];
  name?: string;
  author?: string;
  message?: string;
  github?: boolean;
  githubLink?: string;
  userLiked?: boolean;
  user?: string;
  slug?: string;
}

export interface Article extends Content {
  created?: string;
  published?: string;
  level?: string;
  views?: number;
  summary?: string;
  status?: string;
}

export interface ArticleResponse extends ServerResponse {
  article?: Article;
  articles?: Article[];
  page?: number;
}

export interface News {
  _id?: string;
  title: string;
  image: string;
  message: string;
  preview?: string;
  date?: string;
  category?: string;
  views?: number;
  slug?: string;
  links?: Link[];
  likes?: number;
  userLiked?: boolean;
}

export interface Link {
  name: string;
  url: string;
}

export interface Index {
  title: string;
  subtitle: string;
  id: string;
}

export interface NewsResponse extends ServerResponse {
  news?: News[];
  viewed?: News[];
  last?: News[];
  notice?: News;
  page?: number;
}



export interface ServerResponse {
  ok: boolean;
  message?: string;
  err?: any;
}