import { Injectable } from '@angular/core';
import {BaseApi} from '../models/base-api';
import {Observable} from 'rxjs';
import {ShipModel} from '../models/ship.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShipService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getAllShips(): Observable<any> {
    return this.get('ships');
  }

  createNewShips(ship: ShipModel): Observable<any> {
    return this.post('ships', ship);
  }

  updateShips(ship: ShipModel) {
    return this.put(`ships`, ship);
  }

  deleteShips(id: number) {
    return this.delete(`ships/${id}`);
  }

  getShipsById(id: number) {
    return this.get(`ships/${id}`);
  }
}
