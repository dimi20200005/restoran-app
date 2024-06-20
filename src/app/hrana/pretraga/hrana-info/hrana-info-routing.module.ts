import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HranaInfoPage } from './hrana-info.page';



const routes: Routes = [
  {
    path: '',
    component: HranaInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HranaInfoPageRoutingModule {}