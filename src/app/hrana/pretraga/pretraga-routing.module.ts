import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PretragaPage } from './pretraga.page';

const routes: Routes = [
  {
    path: '',
    component: PretragaPage
  },
  {
    path: ':hranaId',
    loadChildren: () => import('./hrana-info/hrana-info.module').then( m => m.HranaInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PretragaPageRoutingModule {}