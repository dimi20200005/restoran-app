import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HranaPage } from './hrana.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HranaPage,
    children: [
      {
        path: 'pretraga',
        loadChildren: () => import('./pretraga/pretraga.module').then( m => m.PretragaPageModule)
      },
      {
        path: 'korpa',
        loadChildren: () => import('./korpa/korpa.module').then( m => m.KorpaPageModule)
      },
      {
        path: '',
        redirectTo: '/hrana/tabs/pretraga',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/hrana/tabs/pretraga',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HranaPageRoutingModule {}