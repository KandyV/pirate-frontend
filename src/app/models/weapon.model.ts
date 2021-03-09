import {HoldItemModel} from './holdItem.model';
import {ShipModel} from './ship.model';

export class WeaponModel {
  constructor(public weaponsType: string,
              public name: string,
              public ship: ShipModel,
              public wear: string,
              public quantity: number,
              public id?: number
  ) {}
}
