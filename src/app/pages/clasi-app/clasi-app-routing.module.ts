import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasiAppPage } from './clasi-app.page';

const routes: Routes = [
  {
    path: '',
    component: ClasiAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasiAppPageRoutingModule {}
