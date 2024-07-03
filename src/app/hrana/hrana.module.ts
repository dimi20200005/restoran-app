import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HranaPageRoutingModule } from './hrana-routing.module';

import { HranaPage } from './hrana.page';
import { HranaModalDodajComponent } from './hrana-modal-dodaj/hrana-modal-dodaj.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HranaPageRoutingModule,
    

  ],
  declarations: [HranaPage,HranaModalDodajComponent]
})
export class HranaPageModule {}
