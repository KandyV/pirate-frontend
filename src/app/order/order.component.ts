import { Component, OnInit } from '@angular/core';
import {OrderModel} from '../models/order.model';
import {OrderService} from '../services/order.service';
import {CrewService} from '../services/crew.service';
import {CrewModel} from '../models/crew.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: OrderModel[] = [];
  newOrder: OrderModel = new OrderModel(null,null,null,null,null);
  updateOrder: OrderModel = new OrderModel(null,null,null,null,null);
  status: string;
  id: number;
  editIsTrue = false;
  reward: number;
  description: string;
  client: string;
  crewId: number;
  constructor(private orderService: OrderService,
              private crewService: CrewService) { }

  ngOnInit(): void {
    this.getAllOrders();
    this.status = "ANALYSIS";
  }

  addOrder() {
    this.newOrder.orderStatus = this.status;
    this.newOrder.client = this.client;
    this.newOrder.reward = this.reward;
    this.newOrder.description = this.description;
    this.crewService.getCrewsById(this.crewId).subscribe( (res: CrewModel) => {
      this.newOrder.crew = res;
      this.orderService.createNewOrders(this.newOrder).subscribe( (res) => {
        this.getAllOrders();
        this.status = null;
        this.description = null;
        this.reward = null;
        this.client = null;
        this.crewId = null;
        console.log(this.newOrder);
      })
    });
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe( (orders: OrderModel[]) => {
      this.orders = orders;
    })
  }

  editOrder(pos: OrderModel) {
    this.editIsTrue = !this.editIsTrue;
    this.status = pos.orderStatus;
    this.description = pos.description;
    this.reward = pos.reward;
    this.client = pos.client;
    this.crewId = pos.crew.id;
    this.id = pos.id;
  }

  editOrderSave() {
    this.updateOrder.orderStatus = this.status;
    this.updateOrder.client = this.client;
    this.updateOrder.reward = this.reward;
    this.updateOrder.description = this.description;
    this.crewService.getCrewsById(this.crewId).subscribe( (res: CrewModel) => {
      this.updateOrder.crew = res;
      this.updateOrder.id = this.id;
      this.orderService.updateOrders(this.updateOrder).subscribe( (res) => {
        this.editIsTrue = !this.editIsTrue;
        this.getAllOrders();
        this.status = null;
        this.description = null;
        this.reward = null;
        this.client = null;
        this.crewId = null;
      })
    });
  }

  deleteOrder(pos: OrderModel) {
    this.orderService.deleteOrders(pos.id).subscribe( (res) => {
      this.getAllOrders();
    })
  }

  editOrderCancel() {
    this.editIsTrue = !this.editIsTrue;
    this.getAllOrders();
    this.status = null;
    this.description = null;
    this.reward = null;
    this.client = null;
    this.crewId = null;
  }
}
