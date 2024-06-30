import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestoranInfoPage } from './restoran-info.page';

const routes: Routes = [
  {
    path: '',
    component: RestoranInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestoranInfoPageRoutingModule {}
