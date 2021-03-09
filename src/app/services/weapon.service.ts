import { Injectable } from '@angular/core';
import {BaseApi} from '../models/base-api';
import {Observable} from 'rxjs';
import {WeaponModel} from '../models/weapon.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeaponService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getAllWeapon(): Observable<any> {
    return this.get('weapons');
  }

  createNewWeapon(weapon: WeaponModel): Observable<any> {
    return this.post('weapons', weapon);
  }

  updateWeapon(weapon: WeaponModel) {
    return this.put(`weapons`, weapon);
  }

  deleteWeapon(id: number) {
    return this.delete(`weapons/${id}`);
  }

  getWeaponById(id: number) {
    return this.get(`weapon/${id}`);
  }
}
