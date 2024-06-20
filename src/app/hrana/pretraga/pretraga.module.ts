import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PretragaPageRoutingModule } from './pretraga-routing.module';

import { PretragaPage } from './pretraga.page';
import { HranaElementComponent } from 'src/app/hrana-element/hrana-element.component';
import { HranaModalComponent } from '../hrana-modal/hrana-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PretragaPageRoutingModule
  ],
  declarations: [PretragaPage, HranaElementComponent,HranaModalComponent]
  
})
export class PretragaPageModule {}
