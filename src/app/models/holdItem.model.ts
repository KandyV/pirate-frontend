// import {holdItemModel} from './holdItem.model';

import {ShipModel} from './ship.model';

export class HoldItemModel {
  constructor(public name: string,
              public quantity: number,
              public holdType: string,
              public ship: ShipModel,
              public id?: number
  ) {}
}
