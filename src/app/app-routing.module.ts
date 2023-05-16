import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'clasi-app',
    pathMatch: 'full'
  },
  {
    path: 'clasi-app',
    loadChildren: () => import('./pages/clasi-app/clasi-app.module').then( m => m.ClasiAppPageModule)
  },
  {
    path: 'info-clasi-app',
    loadChildren: () => import('./pages/info-clasi-app/info-clasi-app.module').then( m => m.InfoClasiAppPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
