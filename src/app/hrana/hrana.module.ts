import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HranaPageRoutingModule } from './hrana-routing.module';

import { HranaPage } from './hrana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HranaPageRoutingModule
  ],
  declarations: [HranaPage]
})
export class HranaPageModule {}
