import {Component, OnInit} from '@angular/core';
import {HoldItemModel} from '../models/holdItem.model';
import {HoldItemService} from '../services/holdItem.service';
import {ShipService} from '../services/ship.service';
import {ShipModel} from '../models/ship.model';

@Component({
  selector: 'app-holdItem',
  templateUrl: './holdItem.component.html',
  styleUrls: ['./holdItem.component.css']
})
export class HoldItemComponent implements OnInit {
  holdItems: HoldItemModel[] = [];
  newHoldItem: HoldItemModel = new HoldItemModel(null, null, null, null);
  updateHoldItem: HoldItemModel = new HoldItemModel(null, null, null, null);
  ship: ShipModel = new ShipModel(null,null, null, null);
  holdItemId: number;
  id: number;
  editIsTrue = false;
  name: string;
  quantity: number;
  shipId: number;
  type: string;

  constructor(private holdItemService: HoldItemService,
              private shipService: ShipService) {
  }

  ngOnInit(): void {
    this.getAllHoldItems();
    this.type = "PROVISIONS";
  }

  addHoldItem() {
    this.newHoldItem.name = this.name;
    this.newHoldItem.quantity = this.quantity;
    this.newHoldItem.holdType = this.type;
    this.shipService.getShipsById(this.shipId).subscribe( (res) => {
      this.newHoldItem.ship = res;
      this.holdItemService.createNewHoldItems(this.newHoldItem).subscribe(() => {
        this.getAllHoldItems();
        this.quantity = null;
        this.name = null;
        this.type = null;
        this.shipId = null;
      });
    });
  }

  getAllHoldItems() {
    this.holdItemService.getAllHoldItems().subscribe((holdItems) => {
      this.holdItems = holdItems;
    });
  }

  editHoldItem(pos: HoldItemModel) {
    this.id = pos.id;
    this.editIsTrue = !this.editIsTrue;
    this.name = pos.name;
    this.quantity = pos.quantity;
    this.type = pos.holdType;
    this.shipId = pos.ship.id;
  }

  editHoldItemSave() {
    this.updateHoldItem.name = this.name;
    this.updateHoldItem.quantity = this.quantity;
    this.updateHoldItem.holdType = this.type;
    this.updateHoldItem.id = this.id;
    this.shipService.getShipsById(this.shipId).subscribe( (res) => {
      this.updateHoldItem.ship = res;
      this.holdItemService.createNewHoldItems(this.updateHoldItem).subscribe(() => {
        this.editIsTrue = !this.editIsTrue;
        this.getAllHoldItems();
        this.quantity = null;
        this.name = null;
        this.type = null;
        this.id = null;
        this.shipId = null;
      });
    });
  }

  deleteHoldItem(pos: HoldItemModel) {
    this.holdItemService.deleteHoldItems(pos.id).subscribe((res) => {
      this.getAllHoldItems();
    });
  }

  editHoldItemCancel() {
    this.editIsTrue = !this.editIsTrue;
    this.getAllHoldItems();
    this.holdItemId = null;
    this.quantity = null;
    this.name = null;
    this.type = null;
    this.id = null;
    this.shipId = null;
  }
}
