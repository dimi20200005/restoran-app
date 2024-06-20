import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ONamaPage } from './o-nama.page';

const routes: Routes = [
  {
    path: '',
    component: ONamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ONamaPageRoutingModule {}
