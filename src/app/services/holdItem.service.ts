import { Injectable } from '@angular/core';
import {BaseApi} from '../models/base-api';
import {Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {HoldItemModel} from '../models/holdItem.model';

@Injectable({
  providedIn: 'root'
})
export class HoldItemService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getAllHoldItems(): Observable<any> {
    return this.get('hold_items');
  }

  createNewHoldItems(holdItem: HoldItemModel): Observable<any> {
    return this.post('hold_items', holdItem);
  }

  updateHoldItems(holdItem: HoldItemModel) {
    return this.put(`hold_items`, holdItem);
  }

  deleteHoldItems(id: number) {
    return this.delete(`hold_items/${id}`);
  }

  getHoldItemsById(id: number) {
    return this.get(`hold_items/${id}`);
  }
}
