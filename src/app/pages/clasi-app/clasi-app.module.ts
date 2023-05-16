import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasiAppPageRoutingModule } from './clasi-app-routing.module';

import { ClasiAppPage } from './clasi-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasiAppPageRoutingModule
  ],
  declarations: [ClasiAppPage]
})
export class ClasiAppPageModule {}
