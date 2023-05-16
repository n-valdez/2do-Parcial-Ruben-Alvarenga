import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoClasiAppPageRoutingModule } from './info-clasi-app-routing.module';

import { InfoClasiAppPage } from './info-clasi-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoClasiAppPageRoutingModule
  ],
  declarations: [InfoClasiAppPage]
})
export class InfoClasiAppPageModule {}
