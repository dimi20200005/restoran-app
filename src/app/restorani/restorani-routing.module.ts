import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestoraniPage } from './restorani.page';

const routes: Routes = [
  {
    path: '',
    component: RestoraniPage
  },
  {
  path: ':id',
    loadChildren: () => import('./restoran-info/restoran-info.module').then( m => m.RestoranInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestoraniPageRoutingModule {}
