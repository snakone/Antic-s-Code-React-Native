import { AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import axios from './axios';

export default class http {

  public static get<T>(
    url: string,
    headers?: any,
    params?: any,
    handler: boolean = true
  ): Observable<AxiosResponse<T>> {
    return from(
      axios.get<T>(url, { headers: headers ? headers : createHeaders()})
    )
    .pipe(catchError((err) => { 
      if (handler) { error(err); }
        throw err;
     }))
  }
}

function createHeaders(): Object {
  return {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    'x-Access': 'Antic\'s'
  };
}

function error(err: any): void {
  console.log(err);
}





