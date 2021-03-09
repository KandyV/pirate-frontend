import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {WeaponComponent} from './weapon/weapon.component';
import {HoldItemComponent} from './holdItem/holdItem.component';
import {OrderComponent} from './order/order.component';
import {ShipComponent} from './ship/ship.component';
import {CrewComponent} from './crew/crew.component';
import {NotFoundComponent} from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    WeaponComponent,
    HoldItemComponent,
    OrderComponent,
    ShipComponent,
    CrewComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    RouterModule.forRoot([]),
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: []
})
export class AppModule { }
