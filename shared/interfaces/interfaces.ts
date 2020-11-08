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