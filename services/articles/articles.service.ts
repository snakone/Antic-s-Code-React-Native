import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { Article, ArticleResponse } from "../../shared/interfaces/interfaces";
import http from '../http/http.service';

export class ArticlesService extends http {
  
  readonly API_ARTICLES = 'articles';

  public get(page?: number): Observable<Article[] | undefined> {
    return http
      .get<ArticleResponse>(this.API_ARTICLES + '?page=' + page + '&limit=' + 8)
      .pipe(
        filter(res => res.data && !!res.data.ok),
        map(_ => _.data.articles)
      );
  }
}