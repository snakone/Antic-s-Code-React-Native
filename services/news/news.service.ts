import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { News, NewsResponse } from "../../shared/interfaces/interfaces";
import http from '../http/http.service';

export class NewsService extends http {
  
  readonly API_NEWS = 'news/';

  public get(): Observable<News[] | undefined> {
    return http
      .get<NewsResponse>(this.API_NEWS)
      .pipe(
        filter(res => res.data && !!res.data.ok),
        map(_ => _.data.news)
      );
  }
}