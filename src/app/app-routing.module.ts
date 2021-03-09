import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ShipComponent} from './ship/ship.component';
import {CrewComponent} from './crew/crew.component';
import {OrderComponent} from './order/order.component';
import {WeaponComponent} from './weapon/weapon.component';
import {HoldItemComponent} from './holdItem/holdItem.component';




const routes: Routes = [
  {path: '', redirectTo: '/order', pathMatch: 'full'},
  {path: 'ship', component: ShipComponent},
  {path: 'crew', component: CrewComponent},
  {path: 'order', component: OrderComponent},
  {path: 'weapon', component: WeaponComponent},
  {path: 'holdItem', component: HoldItemComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
