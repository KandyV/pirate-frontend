import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class BaseApi {
  private baseUrl = 'https://pirate-coursework.herokuapp.com/';

  constructor(public http: HttpClient) {}

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get(url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url));
  }

  public post(url: string, data: any = {}, requestOptions?): Observable<any> {
    return this.http.post(this.getUrl(url), data, requestOptions);
  }

  public put(url: string, data: any = {}, requestOptions?): Observable<any> {
    return this.http.put(this.getUrl(url), data, requestOptions);
  }

  public delete(url: string, data: any = {}): Observable<any> {
    return this.http.delete(this.getUrl(url), data);
  }
}


