import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const origin = 'https://origin.com/';

type Api = {
  name: string;
  in?: Api[];
};

const api: Api = {
  name: origin,
  in: [
    {
      name: 'user',
    },
    {
      name: 'goods',
      in: [
        {
          name: 'details',
        },
      ],
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class HttpWrapperService {
  private httpClient = inject(HttpClient);

  get = {
    user: {
      rq: <T = any>(
        id?: string | number,
        params?: HttpParams
      ): Observable<T> => {
        const path = `${origin}/user/`;
        return this.httpClient.get<T>(id ? `${path}/${id}/` : path, { params });
      },
    },
    goods: {
      rq: <T = any>(
        id?: string | number,
        params?: HttpParams
      ): Observable<T> => {
        const path = `${origin}/goods/`;
        return this.httpClient.get<T>(id ? `${path}/${id}/` : path, { params });
      },
      details: {
        rq: <T = any>(
          id?: string | number,
          params?: HttpParams
        ): Observable<T> => {
          const path = `${origin}/goods/details/`;
          return this.httpClient.get<T>(id ? `${path}/${id}/` : path, {
            params,
          });
        },
      },
    },
  };
}
