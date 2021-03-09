import { Injectable } from '@angular/core';
import {BaseApi} from '../models/base-api';
import {Observable} from 'rxjs';
import {OrderModel} from '../models/order.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getAllOrders(): Observable<any> {
    return this.get('orders');
  }

  createNewOrders(order: OrderModel): Observable<any> {
    return this.post('orders', order);
  }

  updateOrders(order: OrderModel) {
    return this.put(`orders`, order);
  }

  deleteOrders(id: number) {
    return this.delete(`orders/${id}`);
  }

  getOrdersById(id: number) {
    return this.get(`orders/${id}`);
  }
}
