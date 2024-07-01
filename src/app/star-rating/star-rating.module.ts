import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [StarRatingComponent],
  imports: [CommonModule,IonicModule],
  exports: [StarRatingComponent] // Izvozite komponentu kako bi bila dostupna drugim modulima
})
export class StarRatingModule2 {}