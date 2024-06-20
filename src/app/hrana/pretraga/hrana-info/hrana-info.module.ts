import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HranaInfoPageRoutingModule } from './hrana-info-routing.module';

import { HranaInfoPage } from './hrana-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HranaInfoPageRoutingModule
  ],
  declarations: [HranaInfoPage]
})
export class HranaInfoPageModule {}
