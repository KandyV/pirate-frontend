import { Component, OnInit } from '@angular/core';
import {WeaponModel} from '../models/weapon.model';
import {WeaponService} from '../services/weapon.service';
import {ShipService} from '../services/ship.service';
import {ShipModel} from '../models/ship.model';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {
  weapon: WeaponModel[] = [];
  newWeapon: WeaponModel = new WeaponModel(null,null, null, null, null);
  updateWeapon: WeaponModel = new WeaponModel(null,null, null, null, null);
  name: string;
  quantity: number;
  type: string;
  wear: string;
  shipId: number;
  id: number;
  editIsTrue = false;
  constructor(private weaponService: WeaponService,
              private shipService: ShipService) { }

  ngOnInit(): void {
    this.getAllWeapon();
    this.type = "MUSKET";
    this.wear = "FACTORY_NEW";
  }

  addWeapon() {
    this.newWeapon.name = this.name;
    this.newWeapon.weaponsType = this.type;
    this.newWeapon.quantity = this.quantity;
    this.newWeapon.wear = this.wear;
    this.shipService.getShipsById(this.shipId).subscribe( (res: ShipModel) => {
      this.newWeapon.ship = res;
      this.weaponService.createNewWeapon(this.newWeapon).subscribe( (res) => {
        this.getAllWeapon();
        this.name = null;
        this.type = null;
        this.quantity = null;
        this.shipId = null;
        this.wear = null;
      })
    });
  }

  getAllWeapon() {
    this.weaponService.getAllWeapon().subscribe( (weapon: WeaponModel[]) => {
      this.weapon = weapon;
    })
  }

  editWeapon(pos: WeaponModel) {
    this.editIsTrue = !this.editIsTrue;
    this.name = pos.name;
    this.type = pos.weaponsType;
    this.wear = pos.wear;
    this.quantity = pos.quantity;
    this.shipId = pos.ship.id;
    this.id = pos.id;
  }

  editWeaponSave() {
    this.updateWeapon.name = this.name;
    this.updateWeapon.weaponsType = this.type;
    this.updateWeapon.quantity = this.quantity;
    this.updateWeapon.wear = this.wear;
    this.shipService.getShipsById(this.shipId).subscribe( (res: ShipModel) => {
      this.updateWeapon.ship = res;
      this.updateWeapon.id = this.id;
      this.weaponService.updateWeapon(this.updateWeapon).subscribe( (res) => {
        this.editIsTrue = !this.editIsTrue;
        this.getAllWeapon();
        this.name = null;
        this.type = null;
        this.quantity = null;
        this.wear = null;
        this.shipId = null;
      })
    });
  }

  deleteWeapon(pos: WeaponModel) {
    this.weaponService.deleteWeapon(pos.id).subscribe( (res) => {
      this.getAllWeapon();
    })
  }

  editWeaponCancel() {
    this.editIsTrue = !this.editIsTrue;
    this.getAllWeapon();
    this.name = null;
    this.type = null;
    this.quantity = null;
    this.wear = null;
    this.shipId = null;
  }
}
