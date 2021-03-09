// import {PlaneModel} from './plane.model';

import {CrewModel} from './crew.model';

export class OrderModel {
  constructor(public reward:	number,
              public crew: CrewModel,
              public description: string,
              public client: string,
              public orderStatus: string,
              public id?: number
  ) {}
}

