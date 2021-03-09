import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShipModel} from '../models/ship.model';
import {ShipService} from '../services/ship.service';
import {CrewService} from '../services/crew.service';
import {CrewModel} from '../models/crew.model';
import {Subscribable, Subscription} from 'rxjs';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit,OnDestroy {
  ships: ShipModel[] = [];
  newShip: ShipModel = new ShipModel(null,null, null, null);
  updateShip: ShipModel = new ShipModel(null,null, null, null);
  temporaryCrew: CrewModel = new CrewModel(null,null, null);
  name: string;
  type: string;
  crewId: number;
  speed: number;
  id: number;
  sub: Subscription;
  editIsTrue = false;
  constructor(private shipService: ShipService,
              private crewService: CrewService) { }

  ngOnInit(): void {
    this.getAllShips();
    this.type = "FRIGATE";
  }

  addShip() {
    this.newShip.name = this.name;
    this.newShip.speed = this.speed;
    this.newShip.shipType = this.type;
    this.crewService.getCrewsById(this.crewId).subscribe((res: CrewModel) => {
      this.newShip.crew = res;
      this.temporaryCrew = res;
      this.newShip.crew = this.temporaryCrew;
      console.log('CREW', this.newShip);
      this.shipService.createNewShips(this.newShip).subscribe( (res) => {
        this.getAllShips();
        this.name = null;
        this.speed = null;
        this.crewId = null;
        this.type = null;
      });
    });
  }

  getAllShips() {
    this.shipService.getAllShips().subscribe( (ships: ShipModel[]) => {
      this.ships = ships;
    })
  }

  editShip(pos: ShipModel) {
    this.editIsTrue = !this.editIsTrue;
    this.name = pos.name;
    this.speed = pos.speed;
    this.crewId = pos.crew.id;
    this.type = pos.shipType;
    this.id = pos.id;
  }

  editShipSave() {
    this.updateShip.name = this.name;
    this.updateShip.speed = this.speed;
    this.updateShip.id = this.id;
    this.updateShip.shipType = this.type;
    this.crewService.getCrewsById(this.crewId).subscribe( (res: CrewModel) => {
      this.updateShip.crew = res;
      this.shipService.updateShips(this.updateShip).subscribe( (res) => {
        this.editIsTrue = !this.editIsTrue;
        this.getAllShips();
        this.name = null;
        this.crewId = null;
        this.speed = null;
        this.type = null;
      })
    });
  }

  deleteShip(pos: ShipModel) {
    this.shipService.deleteShips(pos.id).subscribe( (res) => {
      this.getAllShips();
    })
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  editShipCancel() {
    this.editIsTrue = !this.editIsTrue;
    this.getAllShips();
    this.name = null;
    this.speed = null;
    this.type = null;
    this.crewId = null;
  }
}
