import { Injectable } from '@angular/core';
import {BaseApi} from '../models/base-api';
import {Observable} from 'rxjs';
import {CrewModel} from '../models/crew.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrewService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getAllCrews(): Observable<any> {
    return this.get('crews');
  }

  createNewCrews(crew: CrewModel): Observable<any> {
    return this.post('crews', crew);
  }

  updateCrews(crew: CrewModel) {
    return this.put(`crews`, crew);
  }

  deleteCrews(id: number) {
    return this.delete(`crews/${id}`);
  }

  getCrewsById(id: number) {
    return this.get(`crews/${id}`);
  }
}
