import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestoraniPageRoutingModule } from './restorani-routing.module';

import { RestoraniPage } from './restorani.page';
import { RestoranElementComponent } from './restoran-element/restoran-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestoraniPageRoutingModule
  ],
  declarations: [RestoraniPage,RestoranElementComponent]
})
export class RestoraniPageModule {}
