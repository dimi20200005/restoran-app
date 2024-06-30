import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestoranInfoPageRoutingModule } from './restoran-info-routing.module';

import { RestoranInfoPage } from './restoran-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestoranInfoPageRoutingModule
  ],
  declarations: [RestoranInfoPage]
})
export class RestoranInfoPageModule {}
