import {CrewModel} from './crew.model';
import {HoldItemModel} from './holdItem.model';

export class ShipModel {
  constructor(public name: string,
              public crew: CrewModel,
              public speed: number,
              public shipType: string,
              public id?: number
  ) {}
}
