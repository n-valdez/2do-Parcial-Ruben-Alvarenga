import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoClasiAppPage } from './info-clasi-app.page';

const routes: Routes = [
  {
    path: '',
    component: InfoClasiAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoClasiAppPageRoutingModule {}
